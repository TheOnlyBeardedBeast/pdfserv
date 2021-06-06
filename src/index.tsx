import { renderToStream, Document } from "@react-pdf/renderer";
import { Description } from "./Pages/Description";
import { Intro } from "./Pages/Intro";
import * as React from "react";
import i18n from "i18next";
import polka from "polka";
import "./Config/i18nr";
import "./Config/fonts";

const app = polka().listen(4000);

import "./Config/setup";

const MyDocument = () => (
  <Document title="My file title">
    <Intro />
    <Description />
  </Document>
);

app.get("/:lang", async (req, res) => {
  const downloadParam = req.query["download"];
  const forceDownload = downloadParam === "" || !!downloadParam;

  i18n.changeLanguage(req.params.lang);

  if (forceDownload) {
    res.setHeader("Content-Type", "octet/stream");
    res.setHeader("Content-Disposition", `attachment;filename=file.pdf`);
  } else {
    res.setHeader("Content-Type", "application/pdf");
  }

  const stream = await renderToStream(<MyDocument />);
  stream.pipe(res);
});
