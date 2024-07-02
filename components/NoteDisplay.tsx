import { View, Text, StyleSheet, TextInput, Pressable } from "react-native";
import React, { useState } from "react";
import MarkdownDisplay from "~/components/MarkdownDisplay";
import { useColorScheme } from "~/lib/useColorScheme";

const template = `# 🎉 Fun with Markdown!
## 🚀 Introduction
Welcome to this **fun and exciting** markdown guide! Let's dive into the world of Markdown and discover how it makes text formatting cool and easy!
## 🎈 Basics: Add Some Flair
- **Bold and Beautiful:** Make your text stand out! Use \`**\` or \`__\`. Example: **Look at me!**
- *Sassy Italics:* Add a slant with \`*\` or \`_\`. Example: *I'm leaning!*
### 🍔 Let's List Some Fun Things!
- [ ] task
1. 🌟 Star gazing
2. 🏖 Beach parties
3. 🍕 Pizza nights
- 🎮 Video games
- 📚 Reading a good book
- 🧘 Yoga time
## 🌈 Advanced Fun
### 🖼 Adding Images and Links
A cute pic: 
![Cute Cat](https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/6.jpg)
Visit a fun site: [Fun Site](https://example.com)
### 🎶 Code Block Party
\`\`\`javascript
// JavaScript party trick
function partyTime() {
    console.log("Let's dance 💃🕺!");
}
\`\`\`
## 🎤 Conclusion
Markdown is not just for formatting; it's for having fun while expressing yourself! Keep exploring and enjoy the markdown party! 🎊
> Enjoy crafting your own fun markdown documents! 🎨🎉
`;

const EditorScreen = () => {
  const { isDarkColorScheme } = useColorScheme();
  const [content, setContent] = useState(template);
  const [tab, setTab] = useState("preview");

  const styles = StyleSheet.create({
    page: {
      backgroundColor: isDarkColorScheme ? "#1d1d1d" : "whitesmoke",
      flex: 1,
      padding: 10,
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
    <View style={styles.page}>
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
          value={content}
          onChangeText={setContent}
          multiline
          numberOfLines={50}
          style={styles.input}
        />
      ) : (
        <MarkdownDisplay>{content}</MarkdownDisplay>
      )}
    </View>
  );
};

export default EditorScreen;
