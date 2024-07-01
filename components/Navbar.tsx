import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { ThemeToggle } from "./ThemeToggle";
import { Bolt } from "~/lib/icons/Bolt";

const Navbar: React.FC = () => {
  return (
    <View className="flex-[0.1]  flex-row items-center justify-between">
      <View>
        <Text className="text-xl font-bold">Welcome, Gopal Verma</Text>
      </View>
      <View className="flex-row items-center gap-[10px]">
        <ThemeToggle />
        <Bolt className="text-foreground" size={23} strokeWidth={1.25} />
      </View>
    </View>
  );
};

export default Navbar;
