import React from "react";
import { StyleSheet, Image } from "react-native";
import { Text, View } from "../Themed";
import MedicinePic from "../../assets/images/medicinepic.png";

const MedicineInfoBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.fakeImageContainer}></View>
      <View style={styles.nameAndDosageContainer}>
        <Text style={styles.nameText}>Levothyroxine</Text>
        <Text style={styles.dosageText}>175mg</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderRadius: 25,
    height: 200,
    width: 200,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },
  fakeImageContainer: {
    backgroundColor: "gray",
    flex: 3,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },
  nameAndDosageContainer: {
    flex: 1,
    padding: 5,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  nameText: { fontWeight: "500" },
  dosageText: { color: "gray" },
  addNew: {},
});

export default MedicineInfoBox;
