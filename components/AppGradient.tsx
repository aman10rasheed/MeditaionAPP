import { View, Text } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import Contant from "./Contant";

interface Props {
  children: React.ReactNode;
  colors: string[];
}

const AppGradient = ({ children, colors }: Props) => {
  return (
    <LinearGradient colors={colors} className="flex-1">
      <Contant>{children}</Contant>
    </LinearGradient>
  );
};

export default AppGradient;
