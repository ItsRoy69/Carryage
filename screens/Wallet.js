import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, FontFamily, FontSize, Border, Padding } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";


const Wallet = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.wallet, styles.walletLayout]}>
      <View style={[styles.header, styles.headerFlexBox]}>
        <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.vectorParent}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={styles.yourWalletWrapper}>
            <Text style={[styles.yourWallet, styles.textFlexBox]}>
              Your Wallet
            </Text>
          </View>
        </TouchableOpacity>
        <Text style={[styles.text, styles.textTypo]}>Withdraw</Text>
      </View>
      <View style={styles.paymentAvail}>
        <Text style={[styles.text1, styles.textFlexBox]}>₹4,429</Text>
        <Text
          style={[styles.availableForWithdrawal, styles.hdfcCreditCardTypo]}
        >
          Available for withdrawal
        </Text>
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
      <View style={[styles.statusBarsStatusBasic, styles.statusPosition]}>
        <View style={styles.mastersStatusBar}>
          <View style={[styles.mastersStatusBarPartsL, styles.mastersLayout]}>
            <View style={styles.timeGeo}>
              <Text style={[styles.time, styles.timeTypo]}>11:39</Text>
              <View style={styles.mastersStatusBarPartsA}>
                <Text style={[styles.sbIconGeo, styles.timeTypo]}>􀋒</Text>
              </View>
            </View>
          </View>
          <View style={[styles.mastersStatusBarPartsR, styles.mastersLayout]}>
            <View style={styles.indicators}>
              <Image
                style={styles.mastersStatusBarPartsA1}
                resizeMode="cover"
                source={require("../assets/-masters--status-bar-parts--atoms--indicator-signal.png")}
              />
              <Image
                style={[
                  styles.mastersStatusBarPartsA2,
                  styles.mastersSpaceBlock,
                ]}
                resizeMode="cover"
                source={require("../assets/-masters--status-bar-parts--atoms--indicator-wifi.png")}
              />
              <View
                style={[
                  styles.mastersStatusBarPartsA3,
                  styles.mastersSpaceBlock,
                ]}
              >
                <View style={styles.levels}>
                  <View style={styles.batteryLevels}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/levelstart.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/level2.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/level2.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/level2.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/level2.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/level2.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/level2.png")}
                    />
                    <Image
                      style={[styles.level8Icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/level8.png")}
                    />
                    <Image
                      style={[styles.level8Icon, styles.iconLayout]}
                      resizeMode="cover"
                      source={require("../assets/level8.png")}
                    />
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/levellast.png")}
                    />
                  </View>
                </View>
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.paymentProviders}>
        <Text style={[styles.paymentProviders1, styles.hdfcCreditCardClr]}>
          Payment Providers
        </Text>
        <View style={styles.creditCard}>
          <Image
            style={styles.image5WrapperLayout}
            resizeMode="cover"
            source={require("../assets/frame-156.png")}
          />
          <Text style={[styles.hdfcCreditCard, styles.hdfcCreditCardClr]}>
            HDFC Credit Card
          </Text>
          <View style={styles.frameContainer}>
            <View style={styles.frameSpaceBlock}>
              <Image
                style={[styles.vectorIcon2, styles.vectorIconLayout]}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
        </View>
        <View style={styles.creditCard}>
          <View style={[styles.image5Wrapper, styles.image5WrapperLayout]}>
            <Image
              style={styles.image5Icon}
              resizeMode="cover"
              source={require("../assets/image-5.png")}
            />
          </View>
          <Text style={[styles.hdfcCreditCard, styles.hdfcCreditCardClr]}>
            Paytm Wallet
          </Text>
          <View style={styles.frameContainer}>
            <View style={[styles.frame1, styles.frameSpaceBlock]}>
              <Image
                style={styles.vectorIconLayout}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
          </View>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("AddPayment")} style={styles.creditCard}>
          <Image
            style={styles.image5WrapperLayout}
            resizeMode="cover"
            source={require("../assets/frame-155.png")}
          />
          <Text style={[styles.hdfcCreditCard, styles.hdfcCreditCardClr]}>
            Add Payment Method
          </Text>
          <View style={styles.frameContainer}>
            <View style={[styles.frame1, styles.frameSpaceBlock]}>
              <Image
                style={styles.vectorIconLayout}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletLayout: {
    width: "100%",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  headerFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  textFlexBox: {
    textAlign: "left",
    color: Color.gray900,
  },
  textTypo: {
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.textSmSemiboldsize,
  },
  hdfcCreditCardTypo: {
    fontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  statusPosition1: {
    left: "0.28%",
    right: "-0.28%",
  },
  sbIconGeoFlexBox: {
    justifyContent: "center",
    alignItems: "center",
  },
  statusPosition: {
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  mastersLayout: {
    height: 44,
    top: 0,
    position: "absolute",
  },
  timeTypo: {
    color: Color.black,
    fontFamily: FontFamily.openSans,
    lineHeight: 21,
    fontWeight: "600",
  },
  mastersSpaceBlock: {
    marginLeft: 4,
    height: 16,
    overflow: "hidden",
  },
  iconLayout: {
    width: 2,
    height: 9,
  },
  hdfcCreditCardClr: {
    color: Color.gray800,
    textAlign: "left",
  },
  vectorIconLayout: {
    height: 7,
    width: 8,
  },
  image5WrapperLayout: {
    borderRadius: Border.bR9xs,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameSpaceBlock: {
    paddingVertical: Padding.p_10xs,
    paddingHorizontal: Padding.p_11xs,
    overflow: "hidden",
  },
  vectorIcon: {
    width: 7,
    height: 12,
  },
  yourWallet: {
    fontSize: FontSize.textLgBoldsize,
    lineHeight: 28,
    fontFamily: FontFamily.displaySmBold,
    fontWeight: "700",
    color: Color.gray900,
  },
  yourWalletWrapper: {
    marginLeft: 8,
  },
  vectorParent: {
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    textAlign: "left",
    color: Color.gray900,
  },
  header: {
    top: 52,
    width: "90%",
    left: 24,
  },
  text1: {
    fontSize: FontSize.displaySmBoldsize,
    lineHeight: 38,
    fontFamily: FontFamily.displaySmBold,
    fontWeight: "700",
    color: Color.gray900,
  },
  availableForWithdrawal: {
    color: Color.gray500,
    marginTop: 4,
    lineHeight: 24,
    fontWeight: "500",
    fontSize: FontSize.textSmSemiboldsize,
    textAlign: "left",
  },
  paymentAvail: {
    top: 112,
    left: 89,
    alignItems: "center",
    position: "absolute",
  },
  frameIcon: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameIcon2: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: 179,
    backgroundColor: Color.gray900,
    padding: Padding.p_9xs,
    flexDirection: "row",
    overflow: "hidden",
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
  time: {
    letterSpacing: 0,
    textAlign: "right",
    fontSize: FontSize.textSmSemiboldsize,
    color: Color.black,
    fontFamily: FontFamily.openSans,
    lineHeight: 21,
  },
  sbIconGeo: {
    height: "100%",
    left: "0%",
    fontSize: 11,
    textAlign: "center",
    display: "flex",
    top: "0%",
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  mastersStatusBarPartsA: {
    height: 21,
    marginLeft: 2,
    width: 16,
  },
  timeGeo: {
    marginLeft: -24.5,
    top: 14,
    left: "50%",
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  mastersStatusBarPartsL: {
    left: 0,
  },
  mastersStatusBarPartsA1: {
    height: 16,
    width: 20,
    overflow: "hidden",
  },
  mastersStatusBarPartsA2: {
    width: 16,
  },
  level8Icon: {
    display: "none",
    opacity: 0.2,
  },
  batteryLevels: {
    left: 0,
    top: 0,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  levels: {
    top: 5,
    height: 9,
    left: 2,
    width: 16,
    position: "absolute",
  },
  vectorIcon1: {
    top: 3,
    width: 27,
    height: 13,
    opacity: 0.5,
    left: 0,
    position: "absolute",
  },
  mastersStatusBarPartsA3: {
    width: 28,
  },
  indicators: {
    top: 16,
    right: 16,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
    overflow: "hidden",
  },
  mastersStatusBarPartsR: {
    right: 0,
    width: 96,
  },
  mastersStatusBar: {
    height: 44,
    left: 0,
    right: 0,
    top: 0,
    position: "absolute",
  },
  statusBarsStatusBasic: {
    height: "5.5%",
    bottom: "94.5%",
    left: "0.28%",
    right: "-0.28%",
  },
  paymentProviders1: {
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.textSmSemiboldsize,
  },
  hdfcCreditCard: {
    fontSize: FontSize.textXsMedium_size,
    lineHeight: 18,
    marginLeft: 10,
    fontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
  },
  vectorIcon2: {
    opacity: 0,
  },
  frameContainer: {
    justifyContent: "flex-end",
    marginLeft: 10,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  creditCard: {
    paddingHorizontal: 0,
    paddingVertical: Padding.p_9xs,
    marginTop: 12,
    alignItems: "center",
    flexDirection: "row",
    width: 312,
  },
  image5Icon: {
    top: 2,
    left: 2,
    height: 20,
    width: 20,
    position: "absolute",
  },
  image5Wrapper: {
    backgroundColor: "#f2f4f7",
  },
  frame1: {
    opacity: 0,
  },
  paymentProviders: {
    top: 210,
    left: 24,
    position: "absolute",
  },
  wallet: {
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default Wallet;
