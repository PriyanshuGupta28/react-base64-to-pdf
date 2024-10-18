import React, { useEffect, useState } from "react";

interface PDFInfoProps {
  base64: string;
}

const PDFInfo: React.FC<PDFInfoProps> = ({ base64 }) => {
  const [fileSize, setFileSize] = useState<number | null>(null);
  const [pdfVersion, setPdfVersion] = useState<string>("");
  const [createDate, setCreateDate] = useState<string>("");
  const [modifyDate, setModifyDate] = useState<string>("");
  const [creatorTool, setCreatorTool] = useState<string>("");

  useEffect(() => {
    if (base64) {
      const bin = atob(base64);
      setFileSize(Math.round(bin.length / 1024));
      setPdfVersion(bin.match(/^.PDF-([0-9.]+)/)?.[1] || "Unknown");
      setCreateDate(
        bin.match(/<xmp:CreateDate>(.+?)<\/xmp:CreateDate>/)?.[1] || "Unknown"
      );
      setModifyDate(
        bin.match(/<xmp:ModifyDate>(.+?)<\/xmp:ModifyDate>/)?.[1] || "Unknown"
      );
      setCreatorTool(
        bin.match(/<xmp:CreatorTool>(.+?)<\/xmp:CreatorTool>/)?.[1] || "Unknown"
      );
    }
  }, [base64]);

  return (
    <div>
      <p>File Size: {fileSize} KB</p>
      <p>PDF Version: {pdfVersion}</p>
      <p>Create Date: {createDate}</p>
      <p>Modify Date: {modifyDate}</p>
      <p>Creator Tool: {creatorTool}</p>
    </div>
  );
};

export default PDFInfo;
