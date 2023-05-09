import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { FontFamily, Color, Border, FontSize, Padding } from "../GlobalStyles";

const AddCustomer = () => {
  return (
    <View style={styles.addCustomer}>
      <View style={[styles.addCustomerInner, styles.contentFlexBox]}>
        <View style={styles.contentFlexBox}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={styles.frameChild} />
          <Text style={styles.addCustomer1}>Add Customer</Text>
        </View>
      </View>
      <View style={[styles.nameInput, styles.inputPosition]}>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputWithLabel}>
              <Text style={[styles.label, styles.labelTypo]}>Name</Text>
              <View style={[styles.input, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../assets/mappin.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>John Wick</Text>
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
      <View style={[styles.phoneInput, styles.inputPosition]}>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputWithLabel}>
              <Text style={[styles.label, styles.labelTypo]}>Phone</Text>
              <View style={[styles.input1, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../assets/mappin.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>
                    +9145971561
                  </Text>
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
      <View style={[styles.emailInput, styles.inputPosition]}>
        <View style={styles.inputField}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputWithLabel}>
              <Text style={[styles.label, styles.labelTypo]}>Email</Text>
              <View style={[styles.input2, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../assets/mappin.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>
                    john@wick.com
                  </Text>
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
      <View style={[styles.button, styles.buttonFlexBox]}>
        <View style={[styles.buttonBase, styles.buttonFlexBox]}>
          <Text style={[styles.text3, styles.text3Typo]}>Continue</Text>
        </View>
      </View>
      <View style={styles.additionalDetailsParent}>
        <Text style={[styles.additionalDetails, styles.text3Typo]}>
          Additional Details
        </Text>
        <View style={styles.frameParent}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/frame-24.png")}
            />
            <Text style={[styles.homeAddress, styles.labelTypo]}>
              Home Address
            </Text>
          </View>
          <View style={styles.frameContainer}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/frame-241.png")}
            />
            <Text style={[styles.homeAddress, styles.labelTypo]}>
              Office Address
            </Text>
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
  inputPosition: {
    width: 312,
    left: 24,
    position: "absolute",
  },
  labelTypo: {
    fontFamily: FontFamily.textLgMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  inputSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
    textAlign: "left",
  },
  buttonFlexBox: {
    justifyContent: "center",
    borderRadius: Border.br_5xs,
    alignItems: "center",
    flexDirection: "row",
  },
  text3Typo: {
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  vectorIcon: {
    width: 7,
    height: 12,
  },
  frameChild: {
    marginLeft: 8,
  },
  addCustomer1: {
    fontSize: FontSize.textLgBoldsize,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.textLgBold,
    marginLeft: 8,
  },
  addCustomerInner: {
    top: 52,
    width: 312,
    left: 24,
    position: "absolute",
  },
  label: {
    color: Color.gray700,
    lineHeight: 20,
    fontSize: FontSize.textSmRegular_size,
  },
  mapPinIcon: {
    width: 20,
    height: 20,
    display: "none",
    overflow: "hidden",
  },
  text: {
    fontSize: FontSize.textMdRegular_size,
    lineHeight: 24,
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
    paddingVertical: Padding.p_3xs,
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
    paddingHorizontal: Padding.p_sm,
    borderColor: "#d0d5dd",
    borderRadius: Border.br_5xs,
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
    fontSize: FontSize.textSmRegular_size,
  },
  inputFieldBase: {
    height: 70,
    alignSelf: "stretch",
  },
  inputField: {
    alignSelf: "stretch",
  },
  nameInput: {
    top: 104,
  },
  input1: {
    paddingVertical: Padding.p_3xs,
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
    paddingHorizontal: Padding.p_sm,
    borderColor: "#d0d5dd",
    borderRadius: Border.br_5xs,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  phoneInput: {
    top: 198,
  },
  input2: {
    paddingVertical: Padding.p_3xs,
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
    paddingHorizontal: Padding.p_sm,
    borderColor: "#d0d5dd",
    borderRadius: Border.br_5xs,
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  emailInput: {
    top: 292,
  },
  text3: {
    color: Color.white,
    lineHeight: 20,
    fontSize: FontSize.textSmRegular_size,
  },
  buttonBase: {
    backgroundColor: Color.primary800,
    borderColor: "#1d2939",
    paddingHorizontal: Padding.p_base,
    paddingVertical: Padding.p_3xs,
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
    top: 732,
    width: 312,
    left: 24,
    position: "absolute",
  },
  additionalDetails: {
    color: Color.gray900,
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    lineHeight: 28,
    fontSize: FontSize.textLgMedium_size,
  },
  frameItem: {
    borderRadius: 58,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  homeAddress: {
    color: Color.primary800,
    lineHeight: 28,
    fontSize: FontSize.textLgMedium_size,
    fontFamily: FontFamily.textLgMedium,
    fontWeight: "500",
    marginLeft: 8,
  },
  frameGroup: {
    flexDirection: "row",
  },
  frameContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  frameParent: {
    marginTop: 16,
  },
  additionalDetailsParent: {
    top: 390,
    left: 24,
    position: "absolute",
  },
  addCustomer: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default AddCustomer;
