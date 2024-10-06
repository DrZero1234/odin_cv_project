import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
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

export const Cvfile = ({ cvState }) => {
  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <View style={styles.section}>
          <Text>Your CV</Text>
        </View>

        <View style={styles.section}>
          <Text>
            {cvState.firstName} {cvState.lastName}
          </Text>
        </View>
      </Page>
    </Document>
  );
};
