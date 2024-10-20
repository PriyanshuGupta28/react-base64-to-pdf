import React from "react";
import { PDFDownloadButtonProps } from "../types";

const PDFDownloadButton: React.FC<PDFDownloadButtonProps> = ({
  base64,
  downloadFileName = "file.pdf",
  style,
  className,
}) => {
  return (
    <a
      href={`data:application/octet-stream;base64,${base64}`}
      download={downloadFileName}
      style={style}
      className={className}
    >
      Download PDF
    </a>
  );
};

export default PDFDownloadButton;
