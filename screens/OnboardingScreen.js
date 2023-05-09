import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Color, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const OnboardingScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.onboardingScreen}>
      <View style={styles.frameParent}>
        <View style={styles.logomarkParent}>
          <Image
            style={styles.logomarkIcon}
            resizeMode="cover"
            source={require("../assets/logomark1.png")}
          />
          <Text style={styles.carryage}>Carryage</Text>
        </View>
        <Text style={styles.deliverHeavyLoads}>
          Deliver heavy loads, cut costs, stay competitive.
        </Text>
      </View>
      <View style={[styles.button, styles.buttonFlexBox1]}>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")} style={[styles.buttonBase, styles.buttonFlexBox]}>          
            <Text style={[styles.text, styles.textTypo]}>Get Started</Text>          
        </TouchableOpacity>
      </View>
      <View style={[styles.button1, styles.buttonFlexBox1]}>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}  style={[styles.buttonBase1, styles.buttonFlexBox]}>
          <Text style={[styles.text1, styles.textTypo]}>Login Instead</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonFlexBox1: {
    justifyContent: "center",
    width: 294,
    flexDirection: "row",
    alignItems: "center",
    left: 33,
    position: "absolute",
  },
  buttonFlexBox: {
    alignSelf: "stretch",
    justifyContent: "center",
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
  },
  textTypo: {
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  logomarkIcon: {
    width: 36,
    height: 36,
    overflow: "hidden",
  },
  carryage: {
    fontSize: FontSize.displaySmBoldsize,
    lineHeight: 38,
    fontWeight:700,
    fontFamily: FontFamily.displaySmBold,
    color: Color.black,
    marginLeft: 8,
    textAlign: "left",
  },
  logomarkParent: {
    flexDirection: "row",
    alignItems: "center",
  },
  deliverHeavyLoads: {
    fontSize: FontSize.textLgMediumsize,
    lineHeight: 28,
    fontWeight: "500",
    fontFamily: FontFamily.textSmMedium,
    textAlign: "center",
    width: 293,
    marginTop: 20,
    color: Color.gray700,
  },
  frameParent: {
    top: 265,
    alignItems: "center",
    left: 33,
    position: "absolute",
  },
  text: {
    color: Color.white,
  },
  buttonBase: {
    backgroundColor: Color.primary800,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 1,
    borderStyle: "solid",
    borderColor: "#1d2939",
    borderWidth: 1,
    paddingHorizontal: Padding.pBase,
    paddingVertical: Padding.p3xs,
    borderRadius: Border.bR5xs,
    overflow: "hidden",
  },
  buttonBase1: {
    shadowColor: "rgba(16, 24, 40, 0.05)",
    opacity: 0.5,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowRadius: 2,
    elevation: 2,
    shadowOpacity: 0.5,
    borderStyle: "solid",
    borderColor: "#1d2939",
    paddingHorizontal: Padding.pBase,
    paddingVertical: Padding.p3xs,
    borderRadius: Border.bR5xs,
    overflow: "hidden",
  },
  button: {
    top: 640,
    borderRadius: Border.bR5xs,
  },
  text1: {
    color: Color.primary800,
    opacity: 2
  },
  button1: {
    top: 700,borderRadius: Border.bR5xs,
  },
  onboardingScreen: {
    backgroundColor: Color.white,
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default OnboardingScreen;
