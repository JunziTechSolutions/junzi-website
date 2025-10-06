/* eslint-disable */
// @ts-nocheck
import React from "react";

const CalComponent: React.FC = () => {
  return (
    <>
      <style>{`
        @media (max-width: 768px) {
          .calendar-container {
            min-height: 1200px !important;
          }
          .calendar-iframe {
            min-height: 1200px !important;
          }
        }
        @media (max-width: 480px) {
          .calendar-container {
            min-height: 1200px !important;
          }
          .calendar-iframe {
            min-height: 1300px !important;
          }
        }
      `}</style>
      <div
        className="w-full h-full mx-auto md:overflow-y-auto lg:overflow-hidden calendar-container"
        style={{ background: "#f4f3fa", borderRadius: "1rem", padding: "0" }}
      >
      <div className="relative w-full" style={{ 
        paddingBottom: "65%",
        minHeight: "400px"
      }}>
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ3to93mWEjuOAA1RwMdrCrIYj880us3DPnZHB4N8GAoCIh6Z6A_LArVbsk8ht4NKcuaDQTBsFcR?gv=true"
          style={{ 
            border: 0, 
            borderRadius: "0.75rem", 
            background: "#fff",
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            minHeight: "800px"
          }}
          frameBorder="0"
          title="Google Calendar Appointment Scheduling"
          className="calendar-iframe"
        />
      </div>
    </div>
    </>
  );
};

export default CalComponent;
