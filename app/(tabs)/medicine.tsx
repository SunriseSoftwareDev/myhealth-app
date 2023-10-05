import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import MedicineInfoBox from "../../components/medicine-info-box/MedicineInfoBox";

const Medicine = () => {
  return (
    <View style={styles.container}>
      <View style={styles.medicationsContainer}>
        <View style={styles.addNewContainer}>
          <Text style={styles.addNewText}>+ Add New</Text>
        </View>
        <MedicineInfoBox />
        <MedicineInfoBox />
        <MedicineInfoBox />
        <MedicineInfoBox />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  medicationsContainer: {
    flex: 2,
  },
  addNewContainer: {
    borderColor: "#809C5F",
    borderWidth: 5,
    borderStyle: "solid",
    borderRadius: 25,
    height: 100,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  addNewText: {
    fontSize: 20,
    color: "#809C5F",
    fontWeight: "600",
  },
});

export default Medicine;
