import * as React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Color, Padding, FontSize, FontFamily, Border } from "../GlobalStyles";
import { useNavigation } from "@react-navigation/native";

const AddPayment = () => {
  const navigation = useNavigation();

  return (
    <View style={[styles.addPayments, styles.bottomBarLayout]}>
      <TouchableOpacity onPress={() => navigation.navigate("Wallet")} style={[styles.frameParent]}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector3.png")}
          />
          <View style={styles.addPaymentWrapper}>
            <Text
              style={[styles.addPayment, styles.textClr]}
            >{`Add Payment `}</Text>
          </View>
      </TouchableOpacity>
      <View style={styles.creditCardParent}>
        <TouchableOpacity onPress={() => navigation.navigate("AddCard")} style={styles.creditCardSpaceBlock}>
          <Image
            style={[styles.creditCardChild, styles.frameIconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-156.png")}
          />
          <Text style={styles.creditDebit}>Credit / Debit Card</Text>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.frame}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.frameGroup, styles.creditCardSpaceBlock]}>
          <View style={[styles.image5Wrapper, styles.frameIconLayout]}>
            <Image
              style={[styles.image5Icon, styles.iconLayout]}
              resizeMode="cover"
              source={require("../assets/image-5.png")}
            />
          </View>
          <Text style={styles.creditDebit}>Paytm Wallet</Text>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.frame}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector11.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.creditCardSpaceBlock]}>
          <View style={[styles.image5Wrapper, styles.frameIconLayout]}>
            <Image
              style={styles.image5Icon1}
              resizeMode="cover"
              source={require("../assets/image-51.png")}
            />
          </View>
          <Text style={styles.creditDebit}>PhonePe</Text>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.frame}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
        </View>
        <View style={[styles.frameGroup, styles.creditCardSpaceBlock]}>
          <View style={[styles.image5Wrapper, styles.frameIconLayout]}>
            <Image
              style={styles.image5Icon1}
              resizeMode="cover"
              source={require("../assets/image-52.png")}
            />
          </View>
          <Text style={styles.creditDebit}>BharatPe</Text>
          <View style={[styles.frameWrapper, styles.frameWrapperFlexBox]}>
            <View style={styles.frame}>
              <Image
                style={styles.vectorIcon1}
                resizeMode="cover"
                source={require("../assets/vector2.png")}
              />
            </View>
          </View>
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
  bottomBarLayout: {
    width: "100%",
    backgroundColor: Color.white,
    overflow: "hidden",
  },
  textClr: {
    color: Color.gray900,
    textAlign: "left",
  },
  frameIconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameWrapperFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    top: 52,
    left: 24,
  },
  creditCardSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    alignItems: "center",
    flexDirection: "row"
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  vectorIcon: {
    width: 8,
    height: 12,
  },
  addPayment: {
    fontSize: FontSize.textLgBoldsize,
    lineHeight: 28,
    fontFamily: FontFamily.displaySmBold,
    fontWeight: "700",
    color: Color.gray900,
  },
  addPaymentWrapper: {
    marginLeft: 12,
  },
  text: {
    fontSize: FontSize.textSmSemiboldsize,
    lineHeight: 24,
    fontWeight: "600",
    fontFamily: FontFamily.textSmSemibold,
    opacity: 0,
    textAlign: "left",
  },
  frameParent: {
    top: 52,
    left: 24,
    alignItems: "center",
    flexDirection: "row",
    position: "absolute",
  },
  creditCardChild: {
    borderRadius: Border.bR9xs,
    width: 24,
  },
  creditDebit: {
    fontSize: FontSize.textXsMedium_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.textXsMedium,
    color: Color.gray800,
    marginLeft: 10,
    textAlign: "left",
  },
  vectorIcon1: {
    width: 8,
    height: 7,
  },
  frame: {
    paddingHorizontal: Padding.p_11xs,
    paddingVertical: Padding.p_10xs,
    opacity: 0,
    overflow: "hidden",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  frameWrapper: {
    justifyContent: "flex-end",
    marginLeft: 10,
    overflow: "hidden",
    flex: 1,
  },
  image5Icon: {
    top: 2,
    left: 2,
    position: "absolute",
  },
  image5Wrapper: {
    backgroundColor: Color.gray100,
    borderRadius: Border.bR9xs,
    width: 24,
  },
  frameGroup: {
    marginTop: 12,
  },
  image5Icon1: {
    top: 4,
    left: 4,
    borderRadius: Border.br_8xl,
    width: 16,
    height: 16,
    position: "absolute",
  },
  creditCardParent: {
    top: 104,
    left: 24,
    position: "absolute",
  },
  frameIcon2: {
    overflow: "hidden",
  },
  frameWrapper2: {
    borderRadius: 179,
    backgroundColor: Color.gray900,
    padding: Padding.p_9xs,
    justifyContent: "center",
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
  addPayments: {
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
});

export default AddPayment;
