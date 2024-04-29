import React, { useState, useEffect, useRef } from "react";
// import { DecodedBarcodesResult } from "dynamsoft-barcode-reader";
import { CameraEnhancer, CameraView } from "dynamsoft-camera-enhancer";
import { CapturedResultReceiver, CaptureVisionRouter } from "dynamsoft-capture-vision-router";
import { MultiFrameResultCrossFilter } from "dynamsoft-utility";

function QRScanner() {
  const uiContainer = useRef(null);
  const resultsContainer = useRef(null);
  const [barcodeResult, setBarcodeResult] = useState('');
  const [name,setName] = useState('');
  const [rollNumber,setRollNumber] = useState('');
  const pInit = useRef(null);
  const pDestroy = useRef(null);




  const init = async () => {
    try {
      const cameraView = await CameraView.createInstance();
      const cameraEnhancer = await CameraEnhancer.createInstance(cameraView);
      uiContainer.current.innerText = "";
      uiContainer.current.append(cameraView.getUIElement());

      const router = await CaptureVisionRouter.createInstance();
      router.setInput(cameraEnhancer);

      const resultReceiver = new CapturedResultReceiver();
      resultReceiver.onDecodedBarcodesReceived = (result) => {
        if (!result.barcodeResultItems.length) return;
        setBarcodeResult(result.barcodeResultItems[0].text);
        setRollNumber(barcodeResult);
        console.log(barcodeResult);
        resultsContainer.current.textContent = '';
        for (let item of result.barcodeResultItems) {
          resultsContainer.current.append(
            `${item.formatString}: ${item.text}`,
            document.createElement('br'),
            document.createElement('hr'),

          );
        }
      };
      router.addResultReceiver(resultReceiver);

      const filter = new MultiFrameResultCrossFilter();
      filter.enableResultCrossVerification("barcode", true);
      filter.enableResultDeduplication("barcode", true);
      filter.setDuplicateForgetTime("barcode", 3000);
      await router.addResultFilter(filter);

      await cameraEnhancer.open();
      await router.startCapturing("ReadSingleBarcode");
      
      return {
        cameraView,
        cameraEnhancer,
        router,
      };
    } catch (ex) {
      let errMsg = ex.message || ex;
      console.error(errMsg);
      alert(errMsg);
      throw ex;
    }
  };

  const destroy = async () => {
    if (pInit.current) {
      const { cameraView, cameraEnhancer, router } = await pInit.current;
      router.dispose();
      cameraEnhancer.dispose();
      cameraView.dispose();
    }
  };

  useEffect(() => {
    (async () => {
      if (pDestroy.current) {
        await pDestroy.current;
        pInit.current = init();
      } else {
        pInit.current = init();
      }
    })();


    return () => {
      (async () => {
        await (pDestroy.current = destroy());
        console.log("VideoCapture Component Unmount");
      })();
    };
  }, []);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:4040/addAttendence', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ rollNumber : barcodeResult })
        });
        const data = await response.json();
        if (data.message) {
          setName(data.name);
          if(barcodeResult) setRollNumber(`${data.name} is present`);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [barcodeResult]);

  return (
    <div>
      <div ref={uiContainer} className="w-[100%] h-[70vh]"></div>
      Results: {rollNumber}
      <br />
      <div ref={resultsContainer} className="w-[100%] h-[10vh] overflow-auto"></div>
    </div>
  );
}

export default QRScanner;
