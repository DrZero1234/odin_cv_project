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
    margin: 6,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontFamily: 'Oswald'
  },
  subtitle: {
    fontSize: 18,
    fontFamily: 'Oswald',
  },
  personal: {
    textAlign: "center",
    fontSize: 16,
    margin: 6,
    fontWeight: 700,
  },
  section: {
    margin: 10,
    fontSize: 12,
    borderBottom: "2px solid black",
  },

  section_text: {
    marginBottom: 20,
  },
  year: {
    fontWeight: 800,
    marginBottom: 6,
    
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

                <Text style={styles.subtitle}>Past Education</Text>
                <View style={styles.section}>
                  {educations.map((education) => (
                    <>
                          <Text style={styles.section_text}><Text style={styles.year}>{education.start_date +  " - " + education.end_date }</Text><Text> {education.name + ", " + education.type + " " + education.course} </Text> </Text>
                    </>
                  ))}
                  </View>
                <Text style={styles.subtitle}>Work Experience</Text>

                <View style={styles.section}>
                  {works.map((work) => (
                    <>
                    <Text style={styles.section_text}><Text style={styles.year}>{work.start_date + " - " + work.end_date}</Text><Text> {work.name + ", " + work.position}</Text></Text>
                    work.description ?
                    <Text style={styles.year}>Description</Text>
                    <Text style = {styles.section_text}>{work.description}</Text>
                    : null
                    </>
                  ))}
                </View>
            </Page>
        </Document>
    </PDFViewer>
    )
}


export default PdfFile