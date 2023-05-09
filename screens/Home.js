import * as React from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { Color, FontFamily, FontSize, Padding, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const HomeScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.homeScreen}>
      <View style={[styles.inputField, styles.headerLayout]}>
        <View style={styles.inputFieldBase}>
          <View style={styles.inputFieldBase}>
            <Text style={[styles.label, styles.textTypo]}>Email</Text>
            <View style={[styles.input, styles.inputSpaceBlock]}>
              <View style={[styles.content, styles.timeGeoFlexBox]}>
                <Image
                  style={[styles.searchIcon, styles.searchIconLayout]}
                  resizeMode="cover"
                  source={require("../assets/search.png")}
                />
                <TextInput
                  style={[styles.text, styles.textTypo]}
                  placeholder="Where to drop?"
                />
              </View>
              <Image
                style={styles.helpIcon}
                resizeMode="cover"
                source={require("../assets/help-icon.png")}
              />
            </View>
          </View>
          <Text style={[styles.hintText, styles.hintTextTypo]}>
            This is a hint text to help user.
          </Text>
        </View>
      </View>
      <View style={[styles.header, styles.headerFlexBox]}>
        <View>
          <Text style={[styles.goodEveningRamesh]}>
            Good Evening Ramesh! 👋
          </Text>
          <Text style={[styles.whatCanWe, styles.hintTextTypo]}>
            What can we drop today?
          </Text>
        </View>
        <Image
          style={styles.tokensIconLayout}
          resizeMode="cover"
          source={require("../assets/tokens.png")}
        />
      </View>
      <View style={styles.content1}>
        <View>
          <Text style={styles.getStartedHead}>{`Suggestions `}</Text>
          <View style={[styles.suggestions1, styles.suggestionsSpaceBlock]}>
            <TouchableOpacity
              style={styles.frameBorder}
              onPress={() => navigation.navigate("BookVehicle")}
            >
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-152.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                In City
              </Text>
            </TouchableOpacity>
            <View style={[styles.frameGroup, styles.frameBorder]}>
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-153.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                Out Stations
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.suggestions2}>
          <Text style={styles.getStartedHead}>Manage Customers</Text>
          <View style={styles.suggestionsSpaceBlock}>
            <TouchableOpacity
              style={styles.frameBorder}
              onPress={() => navigation.navigate("Customers")}
            >
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-157.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                View Customers
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate("AddCustomer")}
              style={[styles.frameGroup, styles.frameBorder]}
            >
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-158.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                Add Customer
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.suggestions2}>
          <Text style={styles.getStartedHead}>Recent Rewards</Text>
          <View style={styles.suggestionsSpaceBlock}>
            <View style={styles.frameBorder}>
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-15.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                ₹199 Credits
              </Text>
            </View>
            <View style={[styles.frameGroup, styles.frameBorder]}>
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-154.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                ₹42 Voucher
              </Text>
            </View>
            <View style={[styles.frameGroup, styles.frameBorder]}>
              <Image
                style={[styles.frameChild, styles.tokensIconLayout]}
                resizeMode="cover"
                source={require("../assets/frame-154.png")}
              />
              <Text style={[styles.addPaymentProvider, styles.textTypo]}>
                ₹42 Voucher
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.bottomBar, styles.headerFlexBox]}>
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
          style={[styles.searchIcon, styles.searchIconLayout]}
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
  timeGeoFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  sbIconGeoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  searchIconLayout: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  iconLayout: {
    width: 2,
    height: 9,
  },
  headerLayout: {
    width: 312,
    left: 24,
  },
  textTypo: {
    textAlign: "left",
    fontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
  },
  inputSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  hintTextTypo: {
    fontFamily: FontFamily.textSmRegular,
    textAlign: "left",
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
  },
  headerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  getStartedTypo: {
    color: Color.gray900,
    lineHeight: 28,
    fontSize: FontSize.textLgSemiboldsize,
    textAlign: "left",
  },
  suggestionsSpaceBlock: {
    marginTop: 12,
    flexDirection: "row",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  frameBorder: {
    width: 145,
    padding: Padding.p5xs,
    borderColor: "#eaecf0",
    backgroundColor: Color.gray50,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.bR5xs,
    overflow: "hidden",
  },
  time: {
    letterSpacing: 0,
    textAlign: "right",
    fontSize: FontSize.textMdMedium_size,
  },
  sbIconGeo: {
    height: "100%",
    fontSize: 11,
    textAlign: "center",
    display: "flex",
    color: Color.black,
    fontFamily: FontFamily.openSans,
    lineHeight: 21,
    fontWeight: "600",
    left: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
    justifyContent: "center",
  },
  label: {
    color: Color.gray700,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    fontFamily: FontFamily.textSmMedium,
    fontWeight: "500",
    display: "none",
  },
  searchIcon: {
    height: 20,
  },
  text: {
    lineHeight: 24,
    marginLeft: 8,
    color: Color.gray500,
    fontSize: FontSize.textLgMediumsize,
    flex: 1,
  },
  content: {
    flex: 1,
  },
  helpIcon: {
    marginLeft: 8,
    display: "none",
    height: 16,
    width: 16,
  },
  input: {
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowRadius: 2,
    elevation: 2,
    borderColor: "#d0d5dd",
    paddingHorizontal: Padding.psm,
    paddingVertical: Padding.p3xs,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.bR5xs,
    marginTop: 6,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
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
    color: Color.gray500,
    marginTop: 6,
    alignSelf: "stretch",
    display: "none",
  },
  inputField: {
    top: 124,
    height: 55,
    position: "absolute",
  },
  goodEveningRamesh: {
    fontWeight: "800",
    fontFamily: FontFamily.textLgBold,
    lineHeight: 28,
    fontSize: 16,
  },
  whatCanWe: {
    marginTop: 4,
    color: Color.gray700,
  },
  header: {
    top: 52,
    width: 312,
    left: 24,
  },
  getStarted: {
    fontFamily: FontFamily.textLgSemibold,
    fontWeight: "500",
    lineHeight: 28,
    fontSize: FontSize.textLgSemiboldsize,
  },
  getStartedHead: {
    fontFamily: FontFamily.displaySmBold,
    fontWeight: "800",
    lineHeight: 28,
    fontSize: 16,
  },
  frameChild: {
    borderRadius: Border.bR9xs,
  },
  addPaymentProvider: {
    fontSize: FontSize.textXsMediumsize,
    lineHeight: 18,
    color: Color.gray800,
    marginTop: 8,
    paddingLeft: 8,
  },
  frameParent: {
    padding: Padding.p5xs,
    borderColor: "#eaecf0",
    backgroundColor: Color.gray50,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.bR5xs,
    overflow: "hidden",
    flex: 1,
  },
  frameGroup: {
    marginLeft: 22,
  },
  suggestions1: {
    width: 311,
  },
  suggestions2: {
    marginTop: 20,
  },
  content1: {
    top: 189,
    left: 24,
    position: "absolute",
  },
  frameWrapper: {
    borderRadius: 179,
    backgroundColor: Color.gray900,
    padding: 4,
    flexDirection: "row",
    justifyContent: "center",
    overflow: "hidden",
  },
  bottomBar: {
    marginTop: 320,
    top: "50%",
    shadowColor: "rgba(16, 24, 40, 0.06)",
    shadowRadius: 32,
    elevation: 32,
    paddingHorizontal: 24,
    paddingVertical: 12,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    justifyContent: "space-between",
    alignItems: "center",
    left: "0%",
    right: "0%",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  homeScreen: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
    flex: 1,
  },
});

export default HomeScreen;
