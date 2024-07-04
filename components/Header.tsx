import React from "react";
import { View, Pressable } from "react-native";
import { Text } from "~/components/ui/text";
import { LayoutGrid } from "~/lib/icons/Grid";
import Ionicons from "@expo/vector-icons/Ionicons";

const Navbar: React.FC = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 20,
      }}
    >
      <Pressable>
        <Ionicons
          name="folder-outline"
          size={20}
          className="text-black dark:text-white"
        />
      </Pressable>
      <Text className="ml-[4px] text-sm">Folders</Text>
    </View>
  );
};

export default Navbar;
