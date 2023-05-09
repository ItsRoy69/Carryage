import * as React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { FontFamily, FontSize, Color, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AddCard = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.addcard}>
      <TouchableOpacity
        onPress={() => navigation.navigate("AddPayment")}
        style={[styles.frameParent, styles.parentFlexBox]}
      >
        <View style={styles.parentFlexBox}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={styles.addCardWrapper}>
            <Text style={styles.addCard}>{`Add Card `}</Text>
          </View>
        </View>
        <Text style={[styles.text, styles.textTypo1]}>Withdraw</Text>
      </TouchableOpacity>
      <View style={[styles.location, styles.buttonPosition]}>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputWithLabel}>
              <Text style={[styles.label, styles.textLayout]}>Card Number</Text>
              <View style={[styles.input, styles.inputSpaceBlock1]}>
                <View style={[styles.content, styles.parentFlexBox]}>
                  <Image
                    style={styles.creditCardLayout}
                    resizeMode="cover"
                    source={require("../assets/creditcard.png")}
                  />
                  <TextInput
                    placeholder="1234 4567 8910"
                    style={[styles.text1, styles.textTypo]}
                  />
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
        <View style={[styles.inputFieldParent, styles.inputSpaceBlock]}>
          <View style={styles.inputField1}>
            <View style={styles.inputFieldBase}>
              <View style={styles.inputWithLabel}>
                <Text style={[styles.label, styles.textLayout]}>Exp. Date</Text>
                <View style={[styles.input1, styles.inputSpaceBlock1]}>
                  <View style={[styles.content, styles.parentFlexBox]}>
                    <TextInput
                      placeholder="MM/YY"
                      Date
                      style={[styles.text1, styles.textTypo]}
                    />
                  </View>
                </View>
              </View>
              <Text style={[styles.hintText, styles.textTypo]}>
                This is a hint text to help user.
              </Text>
            </View>
          </View>
          <View style={styles.inputField2}>
            <View style={styles.inputFieldBase}>
              <View style={styles.inputWithLabel}>
                <Text style={[styles.label, styles.textLayout]}>CVV</Text>
                <View style={[styles.input2, styles.inputSpaceBlock1]}>
                  <View style={[styles.content, styles.parentFlexBox]}>
                    <TextInput
                      placeholder="123"
                      style={[styles.text1, styles.textTypo]}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.inputSpaceBlock}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputWithLabel}>
              <Text style={[styles.label, styles.textLayout]}>
                Nickname (optional)
              </Text>
              <View style={[styles.input3, styles.inputSpaceBlock1]}>
                <View style={[styles.content, styles.parentFlexBox]}>
                  <TextInput
                    placeholder="example: work card or personal card"
                    style={[styles.text1, styles.textTypo]}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.button, styles.buttonFlexBox]}>
        <View style={[styles.buttonBase, styles.buttonFlexBox]}>
          <Text style={[styles.text5, styles.textLayout]}>Continue</Text>
        </View>
      </View>
      <View style={[styles.bottomBar, styles.bottomBarFlexBox]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image
            style={styles.tokensIconLayout}
            resizeMode="cover"
            source={require("../assets/frame.png")}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Wallet")}>
          <Image
            style={styles.tokensIconLayout}
            resizeMode="cover"
            source={require("../assets/frame1.png")}
          />
        </TouchableOpacity>
        <Image
          style={styles.tokensIconLayout}
          resizeMode="cover"
          source={require("../assets/frame2.png")}
        />
        <Image
          style={styles.tokensIconLayout}
          resizeMode="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={styles.tokensIconLayout}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textTypo1: {
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  buttonPosition: {
    width: "88%",
    left: 25,
    position: "absolute",
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.textSmSemiboldsize,
  },
  inputSpaceBlock1: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
    textAlign: "left",
  },
  inputSpaceBlock: {
    marginTop: 20,
    alignSelf: "stretch",
  },
  creditCardLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  buttonFlexBox: {
    justifyContent: "center",
    borderRadius: Border.bR5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  vectorIcon: {
    width: 7,
    height: 12,
  },
  addCard: {
    fontSize: FontSize.textLgBoldsize,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.textLgBold,
    textAlign: "left",
    color: Color.gray900,
  },
  addCardWrapper: {
    marginLeft: 8,
  },
  text: {
    opacity: 0,
    lineHeight: 24,
    fontSize: FontSize.textMdRegularsize,
    color: Color.gray900,
  },
  frameParent: {
    top: 52,
    justifyContent: "space-between",
    width: "100%",
    left: 25,
    position: "absolute",
  },
  label: {
    fontWeight: "500",
    fontFamily: FontFamily.textSmMedium,
    color: Color.gray700,
    textAlign: "left",
  },
  text1: {
    lineHeight: 24,
    fontSize: FontSize.textMdRegularsize,
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
    overflow: "hidden",
    flex: 1,
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    borderRadius: Border.bR5xs,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  inputWithLabel: {
    alignSelf: "stretch",
    flex: 1,
  },
  hintText: {
    display: "none",
    marginTop: 6,
    alignSelf: "stretch",
    lineHeight: 20,
    fontSize: FontSize.textSmSemiboldsize,
  },
  inputFieldBase: {
    height: 70,
    alignSelf: "stretch",
  },
  inputField: {
    alignSelf: "stretch",
  },
  creditCardIcon1: {
    display: "none",
  },
  input1: {
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
    overflow: "hidden",
    flex: 1,
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    borderRadius: Border.bR5xs,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  inputField1: {
    flex: 1,
  },
  input2: {
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
    overflow: "hidden",
    flex: 1,
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    borderRadius: Border.bR5xs,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  bottomBar: {
    marginTop: 326,
    top: "50%",
    right: "0%",
    left: "0%",
    shadowColor: "rgba(16, 24, 40, 0.06)",
    shadowRadius: 32,
    elevation: 32,
    paddingHorizontal: 24,
    alignItems: "center",
    paddingVertical: Padding.pXs,
    justifyContent: "space-between",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    position: "absolute",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    zIndex: 1,
  },
  bottomBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  inputField2: {
    marginLeft: 16,
    flex: 1,
  },
  inputFieldParent: {
    flexDirection: "row",
    marginTop: 20,
  },
  input3: {
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
    overflow: "hidden",
    flex: 1,
    paddingHorizontal: Padding.psm,
    borderColor: "#d0d5dd",
    borderRadius: Border.bR5xs,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  location: {
    top: 104,
  },
  text5: {
    color: Color.white,
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  buttonBase: {
    backgroundColor: Color.primary800,
    borderColor: "#1d2939",
    paddingHorizontal: 16,
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
    overflow: "hidden",
    flex: 1,
    justifyContent: "center",
    alignSelf: "stretch",
  },
  button: {
    top: 629,
    width: "86%",
    left: 25,
    position: "absolute",
  },
  addcard: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    backgroundColor: Color.white,
    flex: 1,
  },
});

export default AddCard;
