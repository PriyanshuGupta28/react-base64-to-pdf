## react-base64-to-pdf

This React component library allows you to display, preview, and download Base64-encoded PDF files within your React applications. Integrate PDF viewing capabilities seamlessly!

### Installation

To install the package, use npm:

```bash
npm install react-base64-to-pdf
Usage
Here's a basic example demonstrating how to use react-base64-to-pdf in your React application:

JavaScript
import React from 'react';
import { PDFInfo, PDFPreview, PDFDownloadButton } from 'react-base64-to-pdf';

const App = () => {
  const base64Pdf = 'JVBERi0xLjUKJYCBgoMKMSA.....'; // Your Base64-encoded PDF string

  return (
    <div>
      <h1>PDF Viewer Example</h1>

      {/* Show PDF Information */}
      <PDFInfo base64={base64Pdf} showDownloadButton={true} showPreview={true} />

      {/* Download PDF Button */}
      <PDFDownloadButton
        base64={base64Pdf}
        downloadFileName="your-file.pdf"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none',
        }}
      />
    </div>
  );
};

export default App;
Use code with caution.

Components
PDFInfo

This component displays information about the PDF file, including:

File size
PDF version
Creation date
Modification date
Creator tool
Props:

base64 (string): Required. The Base64-encoded PDF string.
showDownloadButton (boolean): Optional. Defaults to false. Set to true to display a download button.
showPreview (boolean): Optional. Defaults to false. Set to true to display a PDF preview.
PDFPreview

This component renders a preview of the PDF file within your application.

Props:

base64 (string): Required. The Base64-encoded PDF string.
PDFDownloadButton

This component provides a button that allows users to download the PDF file.

Props:

base64 (string): Required. The Base64-encoded PDF string.
downloadFileName (string): Optional. Defaults to "file.pdf". Specify the desired file name for the download.
style (React.CSSProperties): Optional. Customize the button's appearance with CSS properties.
className (string): Optional. Add custom class names for further styling.
Contributing
We welcome contributions! Refer to the CONTRIBUTING.md file for details on our code of conduct and the pull request submission process.

License
This project is licensed under the MIT License. See the LICENSE file for more information.

Contact
For any inquiries or feedback, feel free to reach out at [your-email@example.com].  


Sources and related content
```
