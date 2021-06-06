import { renderToStream, Document } from "@react-pdf/renderer";
import { Description } from "./Pages/Description";
import { I18nextProvider } from "react-i18next";
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

  const i18instance = i18n.cloneInstance();
  i18instance.changeLanguage(req.params.lang ?? "en");

  if (forceDownload) {
    res.setHeader("Content-Type", "octet/stream");
    res.setHeader("Content-Disposition", `attachment;filename=file.pdf`);
  } else {
    res.setHeader("Content-Type", "application/pdf");
  }

  const stream = await renderToStream(
    <I18nextProvider i18n={i18instance}>
      <MyDocument />
    </I18nextProvider>
  );
  stream.pipe(res);
});
