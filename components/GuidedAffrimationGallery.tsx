import { View, Text, FlatList, Pressable, Image } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { GalleryPreviewData } from "@/constants/AffirmationCategory";

interface GuidedAffrimationGalleryProps {
  title: string;
  previews: GalleryPreviewData[];
}

const GuidedAffrimationGallery = ({
  title,
  previews,
}: GuidedAffrimationGalleryProps) => {
  return (
    <View style={{ marginVertical: 20 }}>
      <View style={{ marginBottom: 8 }}>
        <Text style={{ color: "white", fontWeight: "bold", fontSize: 20 }}>
          {title}
        </Text>
      </View>
      <View className="space-y-2">
        <FlatList
          data={previews}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <Link href={`/affirmations/${item.id}`} asChild>
              <Pressable>
                <View
                  style={{
                    height: 144,
                    width: 128,
                    borderRadius: 8,
                    marginRight: 16,
                  }}
                >
                  <Image
                    source={item.image}
                    resizeMode="cover"
                    style={{ width: "100%", height: "100%" }}
                  />
                </View>
              </Pressable>
            </Link>
          )}
          horizontal
        />
      </View>
    </View>
  );
};

export default GuidedAffrimationGallery;
