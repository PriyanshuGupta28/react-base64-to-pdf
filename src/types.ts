export interface PDFPreviewProps {
  base64: string;
  style?: React.CSSProperties;
  className?: string;
}

export interface PDFInfoProps {
  base64: string;
}
export interface PDFDownloadButtonProps {
  base64: string;
  downloadFileName?: string;
  style?: React.CSSProperties;
  className?: string;
}
