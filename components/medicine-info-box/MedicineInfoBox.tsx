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
        <Text style={styles.dosageText}>Take 2 by mouth daily</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    height: 100,
    shadowColor: "black",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    marginVertical: 10,
    borderRadius: 25,
  },
  fakeImageContainer: {
    backgroundColor: "gray",
    flex: 1,
    borderTopLeftRadius: 25,
    borderBottomLeftRadius: 25,
  },
  nameAndDosageContainer: {
    flex: 2,
    padding: 10,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 25,
  },
  nameText: { fontWeight: "500", fontSize: 20 },
  dosageText: { color: "gray" },
  addNew: {},
});

export default MedicineInfoBox;
