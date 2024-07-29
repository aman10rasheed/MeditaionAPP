import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import { StatusBar } from "expo-status-bar";
import { MEDITATION_DATA } from "@/constants/meditaionData";
import MEDITATION_IMAGES from "@/constants/meditaion-images";
const nature = () => {
  return (
    <View className="flex-1 ">
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View className="mb-6 mx-3">
          <Text className="text-gray-200 mb-3 font-bold text-4xl text-left">
            Welcome Aman
          </Text>
          <Text className="text-indigo-100 text-xl font-medium ">
            Start your meditaion today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            className="mb-20"
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log("press")}
                className="h-48 my-3 mx-3 rounded-md overflow-hidden"
              >
                <ImageBackground
                  resizeMode="cover"
                  source={MEDITATION_IMAGES[item.id - 1]}
                  className="flex-1 rounded-lg justify-center"
                >
                  <Text>{item.title}</Text>
                </ImageBackground>
              </Pressable>
            )}
          />
        </View>
      </AppGradient>
      <StatusBar style="auto" />
    </View>
  );
};

export default nature;
