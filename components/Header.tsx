import React from "react";
import { View } from "react-native";
import { Text } from "~/components/ui/text";
import { LayoutGrid } from "~/lib/icons/Grid";

const Navbar: React.FC = () => {
  return (
    <View className="flex-[0.1]  flex-row items-center justify-between">
      <View>
        <Text>Filter</Text>
      </View>
      <View>
        <LayoutGrid className="text-foreground" size={23} strokeWidth={1.25} />
      </View>
    </View>
  );
};

export default Navbar;
