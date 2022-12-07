import React from "react";
import  {Page,Text,Image,Document,StyleSheet, View,Font, PDFViewer} from "@react-pdf/renderer";

Font.register({
  family: 'Oswald',
  src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf'
});

const styles = StyleSheet.create({
  body: {
    paddingTop: 35,
    paddingBottom: 65,
    paddingHorizontal: 35,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  author: {
    fontSize: 12,
    textAlign: 'center',
    marginBottom: 40,
  },
  subtitle: {
    fontSize: 18,
    margin: 12,
    fontFamily: 'Oswald'
  },
  text: {
    margin: 12,
    fontSize: 14,
    textAlign: 'justify',
    fontFamily: 'Times-Roman'
  },
  image: {
    marginVertical: 15,
    marginHorizontal: 100,
  },
  header: {
    fontSize: 12,
    marginBottom: 20,
    textAlign: 'center',
    color: 'grey',
  },
  pageNumber: {
    position: 'absolute',
    fontSize: 12,
    bottom: 30,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: 'grey',
  },
  viewer: {
    width: window.innerWidth, //the pdf viewer will take up all of the width and height
    height: window.innerHeight,
  },
})



const PdfFile = (props) => {
    const {personal} = props;
    const {name,birth_date,email,phone} = personal;
    const array = ["one,two,three"];
    
    return(
    <PDFViewer style={styles.viewer}>
        <Document>
            <Page style={styles.body}>
                    <Text style={styles.title}>{name}</Text>
                <Text style={styles.text}>{name}</Text>

                <Text style={styles.subtitle}>Personal Information</Text>

                <Text style={styles.subtitle}>Past Education</Text>

                <Text style={styles.subtitle}>Work Experience</Text>
            </Page>
        </Document>
    </PDFViewer>
    )
}


export default PdfFile