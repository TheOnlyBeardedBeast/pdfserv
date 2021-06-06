import React from "react";
import { Page, Text, View } from "@react-pdf/renderer";
import { styles } from "./pageStyles";
import { useTranslation } from "react-i18next";

export const Intro = () => {
  const { t } = useTranslation();

  return (
    <Page
      size="A4"
      style={{
        ...styles.page,
        ...styles.pageCenter,
      }}
    >
      <View>
        <Text style={styles.title}>{t("helloWorld")}</Text>
      </View>
      <View style={styles.footer}>
        <Text style={styles.small} fixed>
          Made with PDFSERV
        </Text>
      </View>
    </Page>
  );
};
