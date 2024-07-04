import React, { ReactNode } from "react";
import { TouchableOpacity, Text, View } from "react-native";
import { useColorScheme } from "~/lib/useColorScheme";
import { Link } from "expo-router";

interface ListRowProps {
  href: string;
  Label: string;
  LeftIcon?: ReactNode;
  RightIcon?: ReactNode;
  subtitle?: string;
}

const ListRow: React.FC<ListRowProps> = ({
  href,
  Label,
  LeftIcon,
  RightIcon,
  subtitle,
}) => {
  const { isDarkColorScheme } = useColorScheme();
  return (
    <Link href={href} asChild>
      <TouchableOpacity
        style={{
          padding: 10,
          borderBottomWidth: 1,
          borderBottomColor: isDarkColorScheme ? "#333" : "#ccc",
        }}
        className="flex-1 flex-row justify-between items-center"
      >
        <View className="flex-row items-center flex-1">
          {LeftIcon && <View className="mr-2">{LeftIcon}</View>}
          <View className="flex-1">
            <Text
              style={{
                color: isDarkColorScheme ? "#e0e0e0" : "black",
              }}
            >
              {Label}
            </Text>
            {subtitle && (
              <Text
                style={{
                  color: isDarkColorScheme ? "#999" : "gray",
                }}
                className="text-xs"
              >
                {subtitle}
              </Text>
            )}
          </View>
        </View>
        {RightIcon && <View className="ml-2">{RightIcon}</View>}
      </TouchableOpacity>
    </Link>
  );
};

export default ListRow;
