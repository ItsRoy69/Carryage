import * as React from "react";
import { Image, StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const Signup = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.signup}>
      <View style={[styles.logomarkParent, styles.contentFlexBox]}>
        <Image
          style={styles.logomarkIcon}
          resizeMode="cover"
          source={require("../assets/logomark.png")}
        />
        <Text style={[styles.carryage, styles.carryageTypo]}>Carryage</Text>
      </View>
      <View style={styles.button}>
        <TouchableOpacity onPress={() => navigation.navigate("SignupPassword")} style={styles.buttonBase}>
          <Text style={styles.text}>Continue</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.frameParent}>
        <View>
          <Text style={[styles.createAnAccount, styles.carryageTypo]}>
            Create an account
          </Text>
          <Text style={[styles.deliverHeavyLoads, styles.labelClr]}>
            Deliver heavy loads, cut costs, and stay competitive with ease.
          </Text>
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={[styles.label, styles.labelTypo]}>Name</Text>
              <View style={[styles.input, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mailIcon}
                    resizeMode="cover"
                    source={require("../assets/mail.png")}
                  />
                  <TextInput placeholder="Derik Thompson" style={[styles.text1, styles.textTypo]} />
                </View>
                <Image
                  style={styles.helpIcon}
                  resizeMode="cover"
                  source={require("../assets/help-icon.png")}
                />
              </View>
            </View>
            <Text style={[styles.hintText, styles.textTypo]}>
              This is a hint text to help user.
            </Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={[styles.label, styles.labelTypo]}>Email</Text>
              <View style={[styles.input1, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mailIcon}
                    resizeMode="cover"
                    source={require("../assets/mail.png")}
                  />
                  <TextInput placeholder="olivia@untitledui.com" style={[styles.text1, styles.textTypo]} />
                </View>
                <Image
                  style={styles.helpIcon}
                  resizeMode="cover"
                  source={require("../assets/help-icon.png")}
                />
              </View>
            </View>
            <Text style={[styles.hintText, styles.textTypo]}>
              This is a hint text to help user.
            </Text>
          </View>
        </View>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={[styles.label, styles.labelTypo]}>Phone</Text>
              <View style={[styles.input2, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mailIcon}
                    resizeMode="cover"
                    source={require("../assets/mail.png")}
                  />
                  <TextInput placeholder="+91 12345 56879" style={[styles.text1, styles.textTypo]} />
                </View>
                <Image
                  style={styles.helpIcon}
                  resizeMode="cover"
                  source={require("../assets/help-icon.png")}
                />
              </View>
            </View>
            <Text style={[styles.hintText, styles.textTypo]}>
              This is a hint text to help user.
            </Text>
          </View>
        </View>
      </View>
      <Text style={[styles.byContinuingYouContainer, styles.labelTypo]}>
        {`By continuing, you agree to our `}
        <Text style={styles.privacyPolicy}>privacy policy</Text>
        {` and `}
        <Text style={styles.privacyPolicy}>terms of service</Text>
      </Text>
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
  labelClr: {
    color: Color.gray700,
    textAlign: "left",
  },
  labelTypo: {
    fontFamily: FontFamily.textSmMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
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
  },
  text: {
    fontWeight: "600",
    fontFamily: FontFamily.textSmSemibold,
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
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
  createAnAccount: {
    fontSize: FontSize.displaySmBoldsize,
    lineHeight: 38,
  },
  deliverHeavyLoads: {
    fontSize: FontSize.textMdRegularsize,
    lineHeight: 24,
    marginTop: 8,
    width: 293,
    fontFamily: FontFamily.textSmRegular,
    color: Color.gray700,
  },
  label: {
    color: Color.gray700,
    textAlign: "left",
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
    width: 16,
    height: 16,
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
    marginTop: 12,
    width: 293,
  },
  input1: {
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    marginTop: 3,
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
  input2: {
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    marginTop: 3,
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
  frameParent: {
    top: 124,
    left: 33,
    position: "absolute",
  },
  privacyPolicy: {
    textDecorationLine: "underline",
  },
  byContinuingYouContainer: {
    top: 620,
    left: 32,
    color: Color.gray600,
    textAlign: "center",
    width: 297,
    position: "absolute",
  },
  signup: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Signup;
