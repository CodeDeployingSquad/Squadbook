import * as React from "react";
import {
  View,
  Pressable,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Platform,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";
import NoteDisplay from "~/components/NoteDisplay";
import { Link } from "expo-router";
import { Text } from "~/components/ui/text";
import { Folder } from "~/lib/icons/Folder";
import { EllipsisVertical } from "~/lib/icons/Menu";
import ListRow from "~/components/ListRow";

const folders = [
  { id: "2", name: "Work" },
  { id: "1", name: "Personal" },
  // Add more folders
];

export default function Screen() {
  return (
    <SafeAreaView
      className={` px-[30px] flex-1 items-center ${
        Platform.OS === "android" && "pt-[30px]"
      } ${Platform.OS === "ios" && "mx-[30px]"}`}
    >
      <View className="flex-1 max-w-3xl w-full">
        <Navbar />
        <Header
          leftIcon={
            <Folder className="text-foreground" size={20} strokeWidth={1.5} />
          }
          label="Folders"
          rightIcon={
            <EllipsisVertical
              className="text-foreground"
              size={20}
              strokeWidth={1.5}
            />
          }
        />
        <FlatList
          data={folders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListRow href={`/folder/${item.id}`} Label={item.name} />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
