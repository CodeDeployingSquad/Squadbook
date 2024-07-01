import * as React from "react";
import { View, SafeAreaView, Platform } from "react-native";
import Navbar from "~/components/Navbar";
import Header from "~/components/Header";

export default function Screen() {
  return (
    <SafeAreaView
      className={` px-[30px] flex-1 items-center ${
        Platform.OS === "android" && "pt-[30px]"
      }`}
    >
      <View className="flex-1 max-w-3xl w-full">
        <Navbar />
        <Header />
      </View>
    </SafeAreaView>
  );
}
