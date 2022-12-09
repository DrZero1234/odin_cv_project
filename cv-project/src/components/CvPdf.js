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
  personal: {
    textAlign: "center",
    fontSize: 16,
    margin: 6,
    fontWeight: 700,
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
    const {personal,works,educations} = props;
    console.log(educations)
    const {name,birth_date,email,phone} = personal;
    const array = ["one,two,three"];
    
    return(
    <PDFViewer style={styles.viewer}>
        <Document title  = {name + "´s CV"}>
            <Page style={styles.body} wrap = {true}>
                    <Text style={styles.title}>{name}</Text>
                    <Text style={styles.personal}> {"Date of birth: " + birth_date}</Text>
                    <Text style={styles.personal}>{"Phone: " + phone}</Text>
                    <Text style={styles.personal}>{"Email: " + email}</Text>
                <Text style={styles.text}>{name}</Text>

                <Text style={styles.subtitle}>Past Education</Text>
                  {educations.map((education) => (
                    <>
                    <View style={{overflow: "hidden", textOverflow: "ellipsis"}}>
                    <Text>{education.start_date}</Text>
                    <Text>Lel</Text>
                    </View>

                    </>
                  ))}
                <Text style={styles.subtitle}>Work Experience</Text>
            </Page>
        </Document>
    </PDFViewer>
    )
}


export default PdfFile