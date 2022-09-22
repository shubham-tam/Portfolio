import React from "react";
import Nav from "./Nav";
import { Page, Document } from "react-pdf/dist/esm/entry.webpack";
import GLobalStyle from "./Style/GlobalStyle";
import STResume from "../images and videos/Shubham Tamrakar - Resume.pdf";

export default function Resume() {
  return (
    <div>
      <GLobalStyle />
      <Nav />
      <Document file={STResume}>
        {" "}
        <Page pageNumber={1} />
        <Page pageNumber={2} />
        {/* <AllPagesPDFViewer pdf={STResume} /> */}
      </Document>
    </div>
  );
}
