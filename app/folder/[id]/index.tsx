import React from "react";
import {
  Platform,
  View,
  Pressable,
  FlatList,
  SafeAreaView,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Text } from "~/components/ui/text";
import { getNotesByFolderId, getFolderById } from "~/assets/dummy_data";
import Header from "~/components/Header";
import { MoveLeft } from "~/lib/icons/MoveLeft";
import ListRow from "~/components/ListRow";

export default function FolderScreen() {
  const { id } = useLocalSearchParams();
  const folderNotes = getNotesByFolderId(id);
  const folder = getFolderById(id);
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
        <Header
          leftIcon={
            <Pressable onPress={() => router.back()}>
              <MoveLeft
                className="text-foreground"
                size={20}
                strokeWidth={1.5}
              />
            </Pressable>
          }
          label={folder ? folder.name : "Folder"}
        />
        <FlatList
          data={folderNotes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <ListRow
              href={`/folder/${id}/note/${item.id}`}
              Label={item.title}
              RightIcon={
                <Text className="text-xs text-foreground/40">
                  {new Date(item.updatedAt).toLocaleDateString()}
                </Text>
              }
            />
          )}
        />
      </View>
    </SafeAreaView>
  );
}
