import React, { useRef } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import Hero from "./components/Hero";
import ResumeDetails from "./components/ResumeDetails";
import "./styles/App.css";

function App() {
  const componentRef = useRef();

  const printDocument = () => {
    const input = componentRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF();
      const imgWidth = 210; // A4 width in mm
      const pageHeight = 295; // A4 height in mm
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
      pdf.save("download.pdf");
    });
  };

  return (
    <div>
      <button
        onClick={printDocument}
        className="flex px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-300 ease-in-out shadow-md"
      >
        Export as PDF
      </button>
      <div ref={componentRef}>
        <Hero />
        <ResumeDetails />
      </div>
    </div>
  );
}

export default App;

// A section to add general information like name, email and phone number.
// A section to add your educational experience (school name, title of study and date of study)
// A section to add practical experience (company name, position title, main responsibilities of your jobs, date from and until when you worked for that company)
