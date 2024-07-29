import {
  View,
  Text,
  ImageBackground,
  Pressable,
  ScrollView,
} from "react-native";
import React, { useEffect, useState } from "react";
import { router, useLocalSearchParams } from "expo-router";
import { GalleryPreviewData } from "@/constants/AffirmationCategory";
import AFFIRMATION_GALLERY from "@/constants/affrimation-gallery";
import AppGradient from "@/components/AppGradient";
import AntDesign from "@expo/vector-icons/AntDesign";

const AffirmationsPractice = () => {
  const { itemId } = useLocalSearchParams();
  const [affirmation, setAffirmation] = useState<GalleryPreviewData>();
  const [sentences, setSentences] = useState<string[]>([]);
  useEffect(() => {
    for (let idx = 0; idx < AFFIRMATION_GALLERY.length; idx++) {
      const affirmationData = AFFIRMATION_GALLERY[idx].data;

      const affirmationToStart = affirmationData.find(
        (a) => a.id === Number(itemId)
      );
      if (affirmationToStart) {
        setAffirmation(affirmationToStart);
        const affirmationArray = affirmationToStart.text.split(".");

        // Remove the last element if its an empty string
        if (affirmationArray[affirmationArray.length - 1] === "") {
          affirmationArray.pop();
        }
        setSentences(affirmationArray);
        return;
      }
    }
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={affirmation?.image}
        resizeMode="cover"
        className="flex-1"
      >
        <AppGradient colors={["rgba(0,0,0,0.4)", "rgba(0,0,0,0.8)"]}>
          <Pressable
            onPress={() => router.back()}
            className="absolute top-16 left-5 z-10"
          >
            <AntDesign name="arrowleft" size={30} color="white" />
          </Pressable>
          <ScrollView className="mt-20" showsVerticalScrollIndicator={false}>
            <View className="h-full mx-5 justify-center">
              <View className="h-4/5 justify-center">
                {sentences.map((sentence, idx) => (
                  <Text
                    key={idx}
                    className="text-white text-3xl mb-12 font-bold text-center"
                  >
                    {sentence}.
                  </Text>
                ))}
              </View>
            </View>
          </ScrollView>
        </AppGradient>
      </ImageBackground>
    </View>
  );
};

export default AffirmationsPractice;
