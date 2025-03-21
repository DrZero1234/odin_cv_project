//PDF template https://www.posters.sk/print-on-photo-paper-f512699989

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  viewer: {
    width: "100%",
    minHeight: "50%",
  },

  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

export const MyDocument = ({ CvState }) => {
  const { firstName, lastName } = CvState();
  return (
    <PDFViewer style={styles.viewer} showToolbar={false}>
      <Document title={`${firstName} ${lastName}´s CV`}>
        <Page size="A4" style={styles.page}>
          <View style={styles.section}>
            <Text>{firstName}</Text>
          </View>
          <View style={styles.section}>
            <Text>{lastName}</Text>
          </View>
        </Page>
      </Document>
    </PDFViewer>
  );
};
