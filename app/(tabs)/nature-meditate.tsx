// screens/nature-meditate.tsx
import React from "react";
import { View, Text, FlatList, Pressable, ImageBackground } from "react-native";
import { StatusBar } from "expo-status-bar";
import AppGradient from "@/components/AppGradient";
import { MEDITATION_DATA } from "@/constants/meditaionData";
import MEDITATION_IMAGES from "@/constants/meditaion-images";
import { LinearGradient } from "expo-linear-gradient";

const NatureMeditateScreen = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppGradient colors={["#161b2e", "#0a4d4a", "#766e67"]}>
        <View style={{ marginBottom: 24, marginHorizontal: 12 }}>
          <Text
            style={{
              color: "#c2c7db",
              marginBottom: 12,
              fontWeight: "bold",
              fontSize: 32,
            }}
          >
            Welcome Aman
          </Text>
          <Text
            style={{ color: "#a5b1e6", fontSize: 20, fontWeight: "medium" }}
          >
            Start your meditation today
          </Text>
        </View>
        <View>
          <FlatList
            data={MEDITATION_DATA}
            keyExtractor={(item) => item.id.toString()}
            style={{ marginBottom: 80 }}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
              <Pressable
                onPress={() => console.log("press")}
                style={{
                  height: 192,
                  marginVertical: 12,
                  marginHorizontal: 12,
                  borderRadius: 8,
                  overflow: "hidden",
                }}
              >
                <ImageBackground
                  resizeMode="cover"
                  source={MEDITATION_IMAGES[item.id - 1]}
                  style={{ flex: 1, borderRadius: 8, justifyContent: "center" }}
                >
                  <LinearGradient
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    colors={["transparent", "rgba(0,0,0,0.8)"]}
                  >
                    <Text
                      style={{
                        color: "#e5e7eb",
                        fontSize: 24,
                        fontWeight: "bold",
                        textAlign: "center",
                      }}
                    >
                      {item.title}
                    </Text>
                  </LinearGradient>
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

export default NatureMeditateScreen;
