import React from 'react';

const Home = () => {
  return (
    <>
      <section className="relative w-full bg-gradient-to-r from-[#0c4a6e] to-[#0e7490] py-20 md:py-32 lg:py-40">
        <div className="container mx-auto flex flex-col items-center justify-center gap-8 px-4 md:flex-row md:gap-12">
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl">Automated Attendance Tracking</h1>
            <p className="mt-4 text-lg text-gray-200 md:text-xl">
              Our college's automated attendance system makes it easy for you to track student attendance.
            </p>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-6">
              Learn More
            </button>
          </div>
          <div className="flex-1">
            <div className="rounded-lg border text-card-foreground bg-white shadow-lg" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">How it Works</h3>
              </div>
              <div className="p-6 space-y-4">
                <div>
                  <p className="text-gray-500">
                    At the start of each class, students can simply scan a QR code using their smartphones, and their
                    attendance will be automatically recorded.
                  </p>
                </div>
                <div>
                  <p className="text-gray-500">
                    This system provides valuable data for monitoring student engagement and performance, allowing you to
                    identify any attendance issues and address them promptly.
                  </p>
                </div>
                <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-8 w-full h-12">
                  Try it Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold">Schedule Classes for Your Students</h2>
              <p className="mt-4 text-gray-500">
                Easily manage and schedule classes for your students with our intuitive platform.
              </p>
              <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 mt-6">
                Schedule a Class
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-bold">What You Can Do</h2>
              <ul className="mt-4 space-y-2 text-gray-500">
                <li>• Schedule classes with custom dates, times, and locations</li>
                <li>• Assign subjects and topics for each class</li>
                <li>• Manage student attendance and participation</li>
                <li>• Receive real-time updates and notifications</li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold">Automated Attendance Tracking</h2>
              <p className="mt-4 text-gray-500">
                Our college's automated attendance system makes it easy for you to track student attendance. At the start
                of each class, students can simply scan a QR code using their smartphones, and their attendance will be
                automatically recorded. This system provides valuable data for monitoring student engagement and
                performance, allowing you to identify any attendance issues and address them promptly.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 md:py-20 lg:py-28">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8">Your Scheduled Classes</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Introduction to Computer Science
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">May 5, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">6:00 PM - 8:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium">Room 101, Main Campus</span>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Edit Class
                </button>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Creative Writing Workshop
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">May 12, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">4:00 PM - 6:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium">Room 205, Main Campus</span>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Edit Class
                </button>
              </div>
            </div>
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                  Introduction to Graphic Design
                </h3>
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Date:</span>
                  <span className="font-medium">May 19, 2024</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Time:</span>
                  <span className="font-medium">7:00 PM - 9:00 PM</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-500">Location:</span>
                  <span className="font-medium">Room 301, Main Campus</span>
                </div>
              </div>
              <div className="flex items-center p-6">
                <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">
                  Edit Class
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
