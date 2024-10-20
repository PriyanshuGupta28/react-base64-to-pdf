import React from "react";
import { PDFPreviewProps } from "../types";

const PDFPreview: React.FC<PDFPreviewProps> = ({
  base64,
  style,
  className,
}) => {
  if (!base64) {
    return <p>No PDF data provided.</p>;
  }

  return (
    <object
      style={style}
      type="application/pdf"
      className={className}
      data={`data:application/pdf;base64,${base64}`}
      aria-label="PDF preview"
    >
      Your browser does not support PDFs. Download the PDF to view it:
      <a href={`data:application/pdf;base64,${base64}`} download="document.pdf">
        Download PDF
      </a>
    </object>
  );
};

export default PDFPreview;
