import React, { useState, useEffect } from "react";
import {
  Platform,
  View,
  StyleSheet,
  TextInput,
  Pressable,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text } from "~/components/ui/text";
import MarkdownDisplay from "~/components/MarkdownDisplay";
import { useColorScheme } from "~/lib/useColorScheme";
import { getNoteById } from "~/assets/dummy_data";
import { Ionicons } from "@expo/vector-icons"; // Make sure to install @expo/vector-icons if you haven't already
import Navbar from "~/components/Navbar";

export default function NoteScreen() {
  const { id } = useLocalSearchParams();
  const { isDarkColorScheme } = useColorScheme();
  const [note, setNote] = useState({ title: "", content: "" });
  const [tab, setTab] = useState("preview");
  const router = useRouter();

  useEffect(() => {
    const fetchedNote = getNoteById(id);
    if (fetchedNote) {
      setNote(fetchedNote);
    }
  }, [id]);

  const styles = StyleSheet.create({
    safeArea: {
      flex: 1,
      backgroundColor: isDarkColorScheme ? "#1d1d1d" : "whitesmoke",
    },
    page: {
      flex: 1,
      padding: 10,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 20,
    },
    backButton: {
      padding: 0,
    },
    title: {
      color: isDarkColorScheme ? "#e0e0e0" : "black",
    },
    input: {
      backgroundColor: isDarkColorScheme ? "#2d2d2d" : "white",
      color: isDarkColorScheme ? "#e0e0e0" : "black",
      flex: 1,
      padding: 20,
      paddingTop: 20,
      borderRadius: 10,
      fontSize: 16,
    },
    tabsContainer: {
      flexDirection: "row",
      gap: 10,
      marginVertical: 10,
    },
    tab: {
      flex: 1,
      padding: 10,
      borderColor: "gray",
      borderWidth: 2,
      borderRadius: 10,
      alignItems: "center",
    },
    tabText: {
      fontFamily: "InterBold",
      color: isDarkColorScheme ? "#e0e0e0" : "black",
    },
  });

  return (
    <SafeAreaView
      className={` px-[30px] flex-1 items-center ${
        Platform.OS === "android" && "pt-[30px]"
      }`}
    >
      <View className="flex-1 max-w-3xl w-full mt-[50px]">
        <View style={styles.header}>
          <Pressable onPress={() => router.back()} style={styles.backButton}>
            <Ionicons
              name="arrow-back"
              size={20}
              color={isDarkColorScheme ? "#e0e0e0" : "black"}
            />
          </Pressable>
          <Text className=" text-sm ml-[2px]">{note.title}</Text>
        </View>
        <View style={styles.tabsContainer}>
          <Pressable
            onPress={() => setTab("preview")}
            style={[
              styles.tab,
              { borderColor: tab === "preview" ? "#3b86ff" : "gray" },
            ]}
          >
            <Text style={styles.tabText}>Preview</Text>
          </Pressable>
          <Pressable
            onPress={() => setTab("edit")}
            style={[
              styles.tab,
              { borderColor: tab === "edit" ? "#3b86ff" : "gray" },
            ]}
          >
            <Text style={styles.tabText}>Edit</Text>
          </Pressable>
        </View>
        {tab === "edit" ? (
          <TextInput
            value={note.content}
            onChangeText={(content) => setNote({ ...note, content })}
            multiline
            style={styles.input}
          />
        ) : (
          <MarkdownDisplay>{note.content}</MarkdownDisplay>
        )}
      </View>
    </SafeAreaView>
  );
}
