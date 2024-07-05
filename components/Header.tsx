import React, { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";

interface HeaderProps {
  leftIcon?: ReactNode;
  label: string;
  rightIcon?: ReactNode;
}

const Header: React.FC<HeaderProps> = ({ leftIcon, label, rightIcon }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
        justifyContent: "space-between",
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        {leftIcon && <Pressable>{leftIcon}</Pressable>}
        <Text
          className={`text-foreground ${leftIcon ? "ml-[4px]" : ""} text-sm`}
        >
          {label}
        </Text>
      </View>
      {rightIcon && <Pressable>{rightIcon}</Pressable>}
    </View>
  );
};

export default Header;
