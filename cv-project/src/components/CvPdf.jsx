//PDF template https://www.posters.sk/print-on-photo-paper-f512699989

import profilePictureDefault from "../assets/profile-picture-default.jpeg";
import testProfilePicture from "../assets/test-profile-picture.jpeg";
import phoneIcon from "../assets/phone-icon.png";
import emailIcon from "../assets/email-icon.png";
import addressIcon from "../assets/address-icon.png";
import { getMonthName } from "./utils/getMonthName";

import React from "react";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFViewer,
  Image,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: "100px",
  },
  titleSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    columnGap: "50px",
  },

  imageStyling: {
    maxWidth: "100%",
    display: "block",
  },

  contactItemIcon: {
    width: "30px",
    height: "30px",
  },

  sectionStylings: {
    paddingBottom: "20px",
  },

  titleWrapper: {
    borderBottom: "2px solid black",
  },

  titleStyling: {
    fontWeight: "900",
    fontSize: "24px",
    marginBottom: "5px",
  },

  profilePicture: {
    height: "125px",
    width: "125px",
    borderRadius: "50%",
  },

  itemListStyling: {
    display: "flex",
    flexDirection: "column",
    rowGap: "10px",
    margin: "20px",
  },

  itemStyling: {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
    alignItems: "center",
  },
});

export const MyDocument = ({
  CvState,
  educationFields,
  jobFields,
}) => {
  console.log(educationFields[0]);
  const { firstName, lastName, phone, email, address, gender } =
    CvState;
  return (
    <Document title={`${firstName} ${lastName}´s CV`}>
      <Page size="A4" style={styles.page}>
        <View style={[styles.titleSection, styles.sectionStylings]}>
          <Image
            src={testProfilePicture}
            style={[styles.profilePicture, styles.imageStyling]}
          />
          <View style={[styles.titleWrapper, { flex: "1" }]}>
            <Text style={[styles.titleStyling, { fontSize: "32pt" }]}>
              {firstName} {lastName}
            </Text>
          </View>
        </View>
        <View style={[styles.sectionStylings]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleStyling}>Contact</Text>
          </View>
          <View style={styles.itemListStyling}>
            <View
              style={[styles.itemStyling, { letterSpacing: "4px" }]}
            >
              <Image
                style={[styles.imageStyling, styles.contactItemIcon]}
                src={phoneIcon}
              />
              <Text>{phone}</Text>
            </View>
            <View
              style={[styles.itemStyling, { letterSpacing: "4px" }]}
            >
              <Image
                style={[styles.imageStyling, styles.contactItemIcon]}
                src={emailIcon}
              />
              <Text>{email}</Text>
            </View>
            <View
              style={[styles.itemStyling, { letterSpacing: "4px" }]}
            >
              <Image
                style={[styles.imageStyling, styles.contactItemIcon]}
                src={addressIcon}
              />
              <Text>{address}</Text>
            </View>
          </View>
        </View>

        <View style={[styles.sectionStylings]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleStyling}>Education</Text>
          </View>
          <View style={styles.itemListStyling}>
            {educationFields.map((educationField) => (
              <View style={styles.itemStyling}>
                <Text style={{ fontWeight: "900" }}>
                  {getMonthName(
                    educationField.schoolStartDate.getMonth()
                  )}{" "}
                  {educationField.schoolStartDate.getFullYear()} -{" "}
                  {getMonthName(
                    educationField.schoolEndDate.getMonth()
                  )}{" "}
                  {educationField.schoolEndDate.getFullYear()}{" "}
                  <Text style={{ fontWeight: "900" }}>
                    {educationField.schoolName}
                  </Text>{" "}
                  -{educationField.city} {educationField.degree}
                </Text>
              </View>
            ))}
          </View>
        </View>

        <View style={[styles.sectionStylings]}>
          <View style={styles.titleWrapper}>
            <Text style={styles.titleStyling}>Job experience</Text>
          </View>
          <View style={styles.itemListStyling}>
            {jobFields.map((jobField) => (
              <View style={styles.itemStyling}>
                <Text style={{ fontWeight: "900" }}>
                  {getMonthName(jobField.jobStartDate.getMonth())}{" "}
                  {jobField.jobStartDate.getFullYear()} -{" "}
                  {getMonthName(jobField.jobEndDate.getMonth())}{" "}
                  {jobField.jobEndDate.getFullYear()}{" "}
                  <Text style={{ fontWeight: "900" }}>
                    {jobField.companyName}
                  </Text>{" "}
                  -{jobField.position} {jobField.description}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </Page>
    </Document>
  );
};
