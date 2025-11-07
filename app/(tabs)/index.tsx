import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Image } from "expo-image";
import backgroundImage from "@/assets/images/bg-foot.png";

export default function IndexScreen() {
  return (
    <View style={styles.container}>
      <Image source={backgroundImage} style={styles.image} contentFit="cover" />
      <View style={styles.overlay} />

      <View style={styles.textContainer}>
        <Text style={styles.text}>New Shoe Store</Text>
        <Text style={styles.subText}>ร้านขายรองเท้าบาสรุ่นใหม่</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000", // fallback เผื่อโหลดภาพไม่ทัน
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    width: "100%",
    height: "100%",
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.45)", // overlay มืดนิดๆ ให้ข้อความเด่น
  },
  textContainer: {
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  text: {
    fontSize: 56,
    fontWeight: "900",
    color: "#FFEFD5", // Pale Peach
    textAlign: "center",
    textTransform: "uppercase",
    letterSpacing: 3,
    marginBottom: 12,
    textShadowColor: "rgba(0, 0, 0, 0.9)",
    textShadowOffset: { width: 3, height: 3 },
    textShadowRadius: 8,
  },
  subText: {
    fontSize: 20,
    color: "#FFFFFF",
    fontWeight: "700",
    textAlign: "center",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    paddingHorizontal: 20,
    paddingVertical: 8,
    borderRadius: 16,
    textShadowColor: "rgba(0, 0, 0, 0.6)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 4,
  },
});
