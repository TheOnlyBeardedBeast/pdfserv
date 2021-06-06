import { View, Page, Text } from "@react-pdf/renderer";
import { styles } from "./pageStyles";
import React from "react";

export const Description = () => (
  <Page size="A4" style={styles.page}>
    <View fixed>
      <Text style={{ ...styles.header, ...styles.title }}>Description</Text>
      <Text style={styles.paragraph}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Text>
    </View>
  </Page>
);
