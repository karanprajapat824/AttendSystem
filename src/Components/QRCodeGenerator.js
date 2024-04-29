import React, { useState,useEffect } from 'react';
import QRCode from 'qrcode';

function QRCodeGenerator() {
  const [inputValue, setInputValue] = useState('');
  const [qrCodeImage, setQRCodeImage] = useState('');

  
  useEffect(()=>{
      const fetchData = async ()=>{
        const response = await fetch('http://localhost:4040/getStudentByRollNumber',{
        method : "POST",
        headers : {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify()
      })
}
    fetchData();      

  },[]);

  const createQRCode = async () => {
    if (inputValue) {
      try {
        const qrDataUrl = await QRCode.toDataURL(inputValue, { width: 280 });
        setQRCodeImage(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    } else {
      alert('Enter data in the input field first.');
    }
  };

  const saveQRCode = () => {
    if (qrCodeImage) {
      const link = document.createElement('a');
      link.href = qrCodeImage;
      link.download = 'qrcode.png';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } else {
      alert('No QR code to save.');
    }
  };

  return (
        <>
        <div className="mx-auto max-w-3xl space-y-6">
      <div className="space-y-2 text-center">
        <h1 className="text-3xl font-bold">Student Information</h1>
        <p className="text-gray-500 dark:text-gray-400">View the QR code and details for a student.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Student QR Code</h3>
          </div>
          <div className="p-6 flex flex-col items-center justify-center">
            
          <div className="container">
      <div className="qr-code">
        {qrCodeImage && <img src={qrCodeImage} alt="QR Code" />}
      </div>
      <input
        type="text"
        className="input-field"
        placeholder="Enter roll number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className="btn" onClick={createQRCode}>Create</button>
      <button className="btn" onClick={saveQRCode}>Save</button>
    </div>






            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              Scan this QR code to access the student's information.
            </p>
          </div>
        </div>
        <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div className="flex flex-col space-y-1.5 p-6">
            <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">Student Details</h3>
          </div>
          <div className="p-6 space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="name"
                >
                  Name
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="name"
                  placeholder="John Doe"
                  disabled=""
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="student-id"
                >
                  Student ID
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="student-id"
                  placeholder="12345"
                  disabled=""
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="grade"
                >
                  Grade
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="grade"
                  placeholder="10th"
                  disabled=""
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="class"
                >
                  Class
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="class"
                  placeholder="A"
                  disabled=""
                />
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="email"
                >
                  Email
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="email"
                  id="email"
                  placeholder="john.doe@example.com"
                  disabled=""
                />
              </div>
              <div className="space-y-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="phone"
                >
                  Phone
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  type="tel"
                  id="phone"
                  placeholder="+1 (555) 555-5555"
                  disabled=""
                />
              </div>
            </div>
            <div className="space-y-2">
              <label
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="address"
              >
                Address
              </label>
              <textarea
                className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="address"
                placeholder="123 Main St, Anytown USA"
                disabled=""
              ></textarea>
            </div>
          </div>
        </div>
      </div>
    </div>
        
        </>


    
  );
}

export default QRCodeGenerator;
