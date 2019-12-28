import React from "react";

import { View, Text, StyleSheet, ScrollView } from "react-native";
import { ScreenStyle } from "../shared/Styles";

const DoneScreen = () => {
  return (
    <ScrollView style={ScreenStyle}>
      <View>
        <Text>This is the title</Text>
      </View>
    </ScrollView>
  );
};

export default DoneScreen;

const styles = StyleSheet.create({});
