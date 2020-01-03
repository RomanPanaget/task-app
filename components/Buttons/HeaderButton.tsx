import React from "react";
import { HeaderButton as HeaderButtonModel } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../../shared/Colors";

const HeaderButton = props => {
  return (
    <HeaderButtonModel
      {...props}
      IconComponent={Ionicons}
      iconSize={24}
      color={Colors.accent}
    />
  );
};

export default HeaderButton;
