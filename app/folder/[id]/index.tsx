import React from "react";
import {
  Platform,
  View,
  Pressable,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
} from "react-native";
import { Link, useLocalSearchParams, useRouter } from "expo-router";
import { Text } from "~/components/ui/text";
import { getNotesByFolderId, getFolderById } from "~/assets/dummy_data";
import { Ionicons } from "@expo/vector-icons";
import { useColorScheme } from "~/lib/useColorScheme";
import Navbar from "~/components/Navbar";

export default function FolderScreen() {
  const { id } = useLocalSearchParams();
  const folderNotes = getNotesByFolderId(id);
  const folder = getFolderById(id);
  const { isDarkColorScheme } = useColorScheme();
  const router = useRouter();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingHorizontal: 30,
        paddingTop: Platform.OS === "android" ? 30 : 0,
      }}
    >
      <View
        style={{
          flex: 1,
          maxWidth: 768,
          width: "100%",
          alignSelf: "center",
          marginTop: 50,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginBottom: 20,
          }}
        >
          <Pressable onPress={() => router.back()}>
            <Ionicons
              name="arrow-back"
              size={20}
              color={isDarkColorScheme ? "#e0e0e0" : "black"}
            />
          </Pressable>
          <Text className="ml-[2px] text-sm">
            {folder ? folder.name : "Folder"}
          </Text>
        </View>
        <FlatList
          data={folderNotes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Link href={`/folder/${id}/note/${item.id}`} asChild>
              <TouchableOpacity
                style={{
                  padding: 10,
                  borderBottomWidth: 1,
                  borderBottomColor: isDarkColorScheme ? "#333" : "#ccc",
                }}
                className="flex-1 flex-row justify-between"
              >
                <Text
                  style={{
                    color: isDarkColorScheme ? "#e0e0e0" : "black",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    color: isDarkColorScheme ? "#999" : "gray",
                  }}
                  className="text-xs"
                >
                  {new Date(item.updatedAt).toLocaleDateString()}
                </Text>
              </TouchableOpacity>
            </Link>
          )}
        />
      </View>
    </SafeAreaView>
  );
}
