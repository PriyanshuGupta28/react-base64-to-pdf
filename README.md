<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>

<h1>react-base64-to-pdf</h1>

<p>A React component library for displaying, previewing, and downloading Base64-encoded PDF files. Easily integrate PDF viewing capabilities into your React applications.</p>

<h2>Installation</h2>

<p>You can install the package using npm:</p>

<pre><code>npm install react-base64-to-pdf</code></pre>

<h2>Usage</h2>

<p>Here’s a quick example of how to use the <code>react-base64-to-pdf</code> library in your React application.</p>

<h3>Basic Example</h3>

<pre><code>import React, { useEffect, useState } from "react";
import { PDFInfo, PDFPreview, PDFDownloadButton } from 'react-base64-to-pdf';

const App = () => {
  const base64Pdf = 'JVBERi0xLjUKJYCBgoMKMSA.....'; // Your Base64-encoded PDF string

  return (
    &lt;div&gt;
      &lt;h1&gt;PDF Viewer Example&lt;/h1&gt;
      
      {/* Show PDF Preview */}
      &lt;PDFPreview base64={base64Pdf} style={{width: 100vw, height : 100vh}} className="yourClassNameGoesHere"/&gt;

      {/* Show PDF Information */}
      &lt;PDFInfo base64={base64Pdf} /&gt;

      {/* Download PDF Button */}
      &lt;PDFDownloadButton 
        base64={base64Pdf} 
        downloadFileName="your-file.pdf"
        style={{
          backgroundColor: 'blue',
          color: 'white',
          padding: '10px 20px',
          borderRadius: '5px',
          textDecoration: 'none'
        }}
      /&gt;
    &lt;/div&gt;
  );
};

export default App;</code></pre>

<h2>Components</h2>

<h3>PDFInfo</h3>
<p><strong>Description:</strong> This component displays essential information about the PDF file, including its file size, PDF version, creation date, modification date, and the tool used to create it.</p>
<div class="props">
    <strong>Props:</strong>
    <ul>
        <li><code>base64</code> (string): The Base64-encoded string of the PDF file.</li>
    </ul>
</div>

<h3>PDFPreview</h3>
<p><strong>Description:</strong> This component renders a visual preview of the PDF file, allowing users to view its contents directly within the application.</p>
<div class="props">
    <strong>Props:</strong>
    <ul>
        <li><code>base64</code> (string): The Base64-encoded string of the PDF file.</li>
        <li><code>style</code> (React.CSSProperties, optional): Custom styles for the preview component, specified as an object (e.g., <code>style={{...}}</code>).</li>
        <li><code>className</code> (string, optional): Additional CSS class names for styling.</li>
    </ul>
</div>

<h3>PDFDownloadButton</h3>
<p><strong>Description:</strong> This component provides a button that users can click to download the PDF file.</p>
<div class="props">
    <strong>Props:</strong>
    <ul>
        <li><code>base64</code> (string): The Base64-encoded string of the PDF file.</li>
        <li><code>downloadFileName</code> (string, optional): The name for the downloaded file. If not provided, the default name is <code>file.pdf</code>.</li>
        <li><code>style</code> (React.CSSProperties, optional): Custom styles for the button.</li>
        <li><code>className</code> (string, optional): Additional CSS class names for further customization.</li>
    </ul>
</div>

<h2>License</h2>

<p>This project is licensed under the MIT License. See the <a href="https://mit-license.org/">LICENSE</a> file for details.</p>

<h2>Contact</h2>

<p>For any inquiries or feedback, feel free to reach out at <a href="mailto:28priyanshu2001.com">28priyanshu2001</a>.</p>

</body>
</html>
