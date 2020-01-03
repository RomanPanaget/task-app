import React from "react";

import { StyleSheet, ScrollView } from "react-native";
import Checkbox from "../components/Checkbox";

const DoneScreen = () => {
  return (
    <ScrollView>
      <Checkbox checked={false} />
    </ScrollView>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({});
