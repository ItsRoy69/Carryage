import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const VehicleConfirm = () => {
  const [location, setLocation] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);

  return (
    <View style={[styles.vehicleConfirm, styles.bottomBarLayout]}>
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
      {location && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location.coords.latitude,
            longitude: location.coords.longitude,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: location.coords.latitude,
              longitude: location.coords.longitude,
            }}
            title="My Location"
            description="This is my current location"
          />
        </MapView>
      )}
      <View style={styles.choosePaymentOption}>
        <Text style={[styles.paymentProviders, styles.textTypo]}>
          Payment Providers
        </Text>
        <Image
          style={styles.choosePaymentOptionChild}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={styles.paymentProviders1}>
          <View style={styles.creditCardSpaceBlock}>
            <Image
              style={styles.image5WrapperLayout}
              resizeMode="cover"
              source={require("../assets/frame-156.png")}
            />
            <Text style={styles.hdfcCreditCard}>HDFC Credit Card</Text>
            <View style={[styles.frameContainer, styles.bottomBarFlexBox]}>
              <View style={styles.frameSpaceBlock}>
                <Image
                  style={styles.vectorIcon}
                  resizeMode="cover"
                  source={require("../assets/framex5.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.frameParent, styles.creditCardSpaceBlock]}>
            <View style={[styles.image5Wrapper, styles.image5WrapperLayout]}>
              <Image
                style={[styles.image5Icon, styles.iconLayout]}
                resizeMode="cover"
                source={require("../assets/image-5.png")}
              />
            </View>
            <Text style={styles.hdfcCreditCard}>Paytm Wallet</Text>
            <View style={[styles.frameContainer, styles.bottomBarFlexBox]}>
              <View style={[styles.frame1, styles.frameSpaceBlock]}>
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.frameParent, styles.creditCardSpaceBlock]}>
            <Image
              style={styles.image5WrapperLayout}
              resizeMode="cover"
              source={require("../assets/frame-155.png")}
            />
            <Text style={styles.hdfcCreditCard}>Add Payment Method</Text>
            <View style={[styles.frameContainer, styles.bottomBarFlexBox]}>
              <View style={[styles.frame1, styles.frameSpaceBlock]}>
                <Image
                  style={styles.vectorIcon1}
                  resizeMode="cover"
                  source={require("../assets/vector2.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("ConfirmPayment")}
          style={[styles.button, styles.buttonFlexBox]}
        >
          <View style={[styles.buttonBase, styles.buttonFlexBox]}>
            <Text style={[styles.text, styles.textTypo]}>
              Pay and Confirm Booking
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarLayout: {
    width: "100%",
    backgroundColor: Color.white,
  },
  bottomBarFlexBox: {
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
  },
  iconLayout: {
    height: 20,
    width: 20,
  },
  textTypo: {
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    textAlign: "left",
  },
  creditCardSpaceBlock: {
    paddingVertical: Padding.p_9xs,
    paddingHorizontal: 0,
    width: 312,
    alignItems: "center",
    flexDirection: "row",
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
  buttonFlexBox: {
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  iconLayout1: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameIcon2: {
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: Border.br_160xl,
    backgroundColor: Color.gray900,
    padding: Padding.p_9xs,
    justifyContent: "center",
    alignItems: "center",
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
  paymentProviders: {
    fontSize: FontSize.textLgSemiboldsize,
    lineHeight: 28,
    color: Color.gray900,
    zIndex: 0,
    textAlign: "left",
  },
  choosePaymentOptionChild: {
    top: 8,
    left: "50%",
    width: 44,
    height: 2,
    zIndex: 1,
    marginTop: 10,
    position: "absolute",
  },
  hdfcCreditCard: {
    fontSize: FontSize.textXsMedium_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.textXsMedium,
    color: Color.primary800,
    marginLeft: 10,
    textAlign: "left",
  },
  vectorIcon: {
    width: 9,
    height: 8,
  },
  frameContainer: {
    justifyContent: "flex-end",
    marginLeft: 10,
    flex: 1,
  },
  image5Icon: {
    top: 2,
    left: 2,
    position: "absolute",
  },
  image5Wrapper: {
    backgroundColor: Color.whitesmoke_100,
  },
  vectorIcon1: {
    width: 8,
    height: 7,
  },
  frame1: {
    opacity: 0,
  },
  frameParent: {
    marginTop: 12,
  },
  paymentProviders1: {
    zIndex: 2,
    marginTop: 10,
  },
  text: {
    fontSize: FontSize.textSmSemiboldsize,
    lineHeight: 20,
    color: Color.white,
    textAlign: "left",
  },
  buttonBase: {
    backgroundColor: Color.primary800,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    shadowRadius: 2,
    elevation: 2,
    borderColor: "#1d2939",
    paddingHorizontal: 14,
    paddingVertical: 8,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    borderWidth: 1,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    flex: 1,
  },
  button: {
    zIndex: 5,
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  choosePaymentOption: {
    top: 490,
    borderTopLeftRadius: Border.bRxs,
    borderTopRightRadius: Border.bRxs,
    shadowColor: "rgba(16, 24, 40, 0.07)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.pXl,
    paddingTop: Padding.pXl,
    paddingBottom: Padding.pBase,
    width: "100%",
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  map: {
    width: "100%",
    height: "100%",
  },
  locationmarkerIcon: {
    top: 214,
    left: 98,
    position: "absolute",
  },
  pickupIcon: {
    top: 166,
    left: 84,
    width: 27,
    height: 42,
    position: "absolute",
  },
  mapIcon: {
    overflow: "hidden",
  },
  vehicleConfirm: {
    height: 800,
    overflow: "hidden",
    flex: 1,
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
});

export default VehicleConfirm;
