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
        {/* <Header /> */}
        {/* <NoteDisplay /> */}
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

        <FlatList
          data={folders}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link href={`/folder/${item.id}`} asChild>
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: "#333",
                }}
              >
                <Text>{item.name}</Text>
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
