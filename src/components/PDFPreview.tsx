import React from "react";

interface PDFPreviewProps {
  base64: string;
  width?: string;
  height?: string;
}

const PDFPreview: React.FC<PDFPreviewProps> = ({
  base64,
  width = "100%",
  height = "842pt",
}) => {
  return (
    <object
      style={{ width, height }}
      type="application/pdf"
      data={`data:application/pdf;base64,${base64}`}
    >
      PDF cannot be displayed.
    </object>
  );
};

export default PDFPreview;
