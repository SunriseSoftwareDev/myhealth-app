import React from "react";
import { StyleSheet } from "react-native";
import { Text, View } from "../../components/Themed";
import MedicineInfoBox from "../../components/medicine-info-box/MedicineInfoBox";

const Medicine = () => {
  return (
    <View style={styles.container}>
      <View></View>
      <View>
        <MedicineInfoBox />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  medicationsContainer: {},
  addNew: {},
});

export default Medicine;
