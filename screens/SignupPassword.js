import * as React from "react";
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const SignupPassword = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signupPassword}>
      <View style={[styles.logomarkParent, styles.contentFlexBox]}>
        <Image
          style={styles.logomarkIcon}
          resizeMode="cover"
          source={require("../assets/logomark.png")}
        />
        <Text style={[styles.carryage, styles.carryageTypo]}>Carryage</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("VerifyNum")} style={styles.buttonBase}>
          <Text style={[styles.text, styles.textTypo1]}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.createPassword, styles.carryageTypo]}>
            Create password
          </Text>
          <Text style={styles.createASafe}>
            Create a safe and secure password for Carryage and you’ll be good to
            go!
          </Text>
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={[styles.label, styles.textTypo1]}>Password</Text>
              <TextInput secureTextEntry={true} style={[styles.input, styles.inputSpaceBlock]} />
            </View>
            <Text style={[styles.hintText, styles.textTypo]}>
              This is a hint text to help user.
            </Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={[styles.label, styles.textTypo1]}>
                Retype Password
              </Text>
              <TextInput secureTextEntry={true} style={[styles.input1, styles.inputSpaceBlock]} />
            </View>
            <Text style={[styles.hintText, styles.textTypo]}>
              This is a hint text to help user.
            </Text>
          </View>
        </View>
        <View style={styles.frameGroup}>
          <View>
            <View style={styles.contentFlexBox}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/framex5.png")}
              />
              <Text style={[styles.mustIncludeAtleast, styles.mustTypo]}>
                Must include atleast 8 letters
              </Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.contentFlexBox}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/framex5.png")}
              />
              <Text style={[styles.mustIncludeAtleast, styles.mustTypo]}>
                Must atleast include one number
              </Text>
            </View>
          </View>
          <View style={styles.frameView}>
            <View style={styles.contentFlexBox}>
              <Image
                style={[styles.frameIcon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/framey5.png")}
              />
              <Text style={[styles.mustIncludeOne, styles.mustTypo]}>
                Must include one symbol
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  carryageTypo: {
    textAlign: "left",
    color: Color.black,
    fontFamily: FontFamily.displaySmBold,
    fontWeight: "700",
  },
  textTypo1: {
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  inputSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  iconLayout: {
    height: 16,
    width: 16,
  },
  mustTypo: {
    marginLeft: 6,
    fontFamily: FontFamily.textSmRegular,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  logomarkIcon: {
    width: 32,
    height: 32,
    overflow: "hidden",
  },
  carryage: {
    fontSize: FontSize.displayXsBoldsize,
    lineHeight: 32,
    marginLeft: 8,
  },
  logomarkParent: {
    top: 68,
    left: 105,
    position: "absolute",
    flexDirection: "row",
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.textSmSemibold,
    color: Color.white,
  },
  buttonBase: {
    backgroundColor: Color.primary800,
    borderColor: "#1d2939",
    paddingHorizontal: Padding.pBase,
    paddingVertical: Padding.p3xs,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(16, 24, 40, 0.05)",
    alignSelf: "stretch",
    justifyContent: "center",
    borderRadius: Border.bR5xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  button: {
    top: 672,
    width: 294,
    justifyContent: "center",
    borderRadius: Border.bR5xs,
    left: 33,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  createPassword: {
    fontSize: FontSize.displaySmBoldsize,
    lineHeight: 38,
  },
  createASafe: {
    fontSize: FontSize.textMdRegularsize,
    lineHeight: 24,
    marginTop: 8,
    width: 293,
    color: Color.gray700,
    fontFamily: FontFamily.textSmRegular,
    textAlign: "left",
  },
  label: {
    fontWeight: "500",
    fontFamily: FontFamily.textSmMedium,
    color: Color.gray700,
  },
  mailIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  text1: {
    marginLeft: 8,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  helpIcon: {
    display: "none",
    marginLeft: 8,
  },
  input: {
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    marginTop: 6,
    paddingVertical: Padding.p3xs,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(16, 24, 40, 0.05)",
    borderRadius: Border.bR5xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
  inputFieldBase: {
    alignSelf: "stretch",
    flex: 1,
  },
  hintText: {
    display: "none",
    marginTop: 6,
    alignSelf: "stretch",
  },
  inputField: {
    height: 66,
    marginTop: 24,
    width: 293,
  },
  input1: {
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    marginTop: 6,
    paddingVertical: Padding.p3xs,
    borderWidth: 1,
    borderStyle: "solid",
    shadowOpacity: 1,
    elevation: 2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: "rgba(16, 24, 40, 0.05)",
    borderRadius: Border.bR5xs,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
  frameIcon: {
    overflow: "hidden",
  },
  mustIncludeAtleast: {
    color: Color.gray700,
  },
  frameView: {
    marginTop: 8,
  },
  mustIncludeOne: {
    color: Color.error600,
  },
  frameGroup: {
    marginTop: 24,
  },
  frameParent: {
    top: 124,
    left: 33,
    position: "absolute",
  },
  signupPassword: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default SignupPassword;
