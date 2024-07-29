// App.tsx
import { View, Text, ImageBackground, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { useRouter } from "expo-router";
import AppGradient from "@/components/AppGradient";
import beachImage from "@/assets/meditation-images/beach.webp";
import CustomButton from "@/components/CustomButton";

const App = () => {
  const router = useRouter();

  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={beachImage}
        resizeMode="cover"
        style={{ flex: 1 }}
      >
        <AppGradient colors={["rgba(0, 0, 0 ,0.4)", "rgba(0, 0, 0, 0.8)"]}>
          <SafeAreaView
            style={{
              flex: 1,
              paddingHorizontal: 16,
              justifyContent: "space-between",
            }}
          >
            <View>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 32,
                }}
              >
                Simple Meditation
              </Text>
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 24,
                  marginTop: 12,
                }}
              >
                Simplifying Meditation for Everyone
              </Text>
            </View>
            <View>
              <CustomButton
                onPress={() => router.push("/nature-meditate")}
                title="Get started"
              />
            </View>
          </SafeAreaView>
          <StatusBar style="auto" />
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default App;
