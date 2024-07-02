import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { PropsWithChildren } from "react";
import Markdown from "react-native-markdown-display";
import { useColorScheme } from "~/lib/useColorScheme";

const MarkdownDisplay = ({ children }: PropsWithChildren) => {
  const { isDarkColorScheme } = useColorScheme();

  const styles = StyleSheet.create({
    page: {
      backgroundColor: isDarkColorScheme ? "#1e1e1e" : "white",
      flex: 1,
      padding: 10,
      borderRadius: 10,
    },
  });

  const markdownStyles = StyleSheet.create({
    heading1: {
      fontFamily: "InterBlack",
      color: isDarkColorScheme ? "#e0e0e0" : "#212020",
      marginTop: 15,
      marginBottom: 10,
      lineHeight: 40,
    },
    heading2: {
      fontFamily: "InterBold",
      color: isDarkColorScheme ? "#c0c0c0" : "#404040",
      marginTop: 10,
      marginBottom: 5,
      lineHeight: 30,
    },
    body: {
      fontSize: 16,
      // fontFamily: 'Inter',
      lineHeight: 24,
      color: isDarkColorScheme ? "#d0d0d0" : "black",
    },
  });

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <Markdown style={markdownStyles}>{children}</Markdown>
    </ScrollView>
  );
};

export default MarkdownDisplay;
