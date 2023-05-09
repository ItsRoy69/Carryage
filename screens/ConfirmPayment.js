import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const ConfirmPayment = () => {
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
    <View style={styles.confirmPayment}>
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
        <Image
          style={styles.choosePaymentOptionChild}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <Image
          style={styles.avatarIcon}
          resizeMode="cover"
          source={require("../assets/avatar.png")}
        />
        <View style={[styles.driverInfoParent, styles.parentFlexBox]}>
          <View>
            <Text style={[styles.title, styles.titleTypo]}>
              Ram is on the way
            </Text>
            <Text style={[styles.title1, styles.textTypo]}>12:49PM ETA</Text>
          </View>
          <View>
            <Text style={[styles.title2, styles.titleTypo]}>RJ204101CD</Text>
            <Text style={[styles.title1, styles.textTypo]}>License Plate</Text>
          </View>
        </View>
        <View style={styles.choosePaymentOptionItem} />
        <View style={styles.startLocationParent}>
          <View>
            <Text style={styles.startLocation1}>Start Location</Text>
            <View style={styles.content}>
              <Image
                style={styles.mapPinIcon}
                resizeMode="cover"
                source={require("../assets/mappin.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>
                Vikas Nagar, Jaipur
              </Text>
            </View>
          </View>
          <View style={styles.startLocation2}>
            <Text style={styles.startLocation1}>Drop Location</Text>
            <View style={styles.content}>
              <Image
                style={styles.mapPinIcon}
                resizeMode="cover"
                source={require("../assets/mappin.png")}
              />
              <Text style={[styles.text, styles.textTypo]}>
                Sarojini Nagar, Delhi
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.buttonParent, styles.parentFlexBox]}>
          <View style={styles.buttonFlexBox1}>
            <View style={[styles.buttonBase, styles.buttonFlexBox]}>
              <Text style={[styles.text2, styles.textLayout]}>
                Contact Driver
              </Text>
            </View>
          </View>
          <View style={[styles.button1, styles.buttonFlexBox1]}>
            <View style={[styles.buttonBase1, styles.buttonFlexBox]}>
              <Text style={[styles.text3, styles.textLayout]}>Cancel</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  parentFlexBox: {
    alignSelf: "stretch",
    marginTop: 10,
    flexDirection: "row",
  },
  titleTypo: {
    color: Color.gray900,
    textAlign: "left",
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    lineHeight: 24,
    fontSize: FontSize.textMdRegularsize,
  },
  textTypo: {
    fontFamily: FontFamily.textMdRegular,
    textAlign: "left",
  },
  buttonFlexBox: {
    paddingVertical: Padding.p5xs,
    paddingHorizontal: Padding.psm,
    borderWidth: 1,
    borderRadius: Border.bR5xs,
    borderStyle: "solid",
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.textSmSemiboldsize,
  },
  buttonFlexBox1: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flex: 1,
    borderRadius: Border.bR5xs,
    paddingVertical: 8,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  frameIcon2: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: 179,
    backgroundColor: Color.gray900,
    padding: 4,
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
  choosePaymentOptionChild: {
    top: 8,
    left: "50%",
    width: 44,
    height: 2,
    zIndex: 0,
    position: "absolute",
  },
  avatarIcon: {
    borderRadius: 200,
    width: 52,
    height: 52,
    zIndex: 1,
    marginTop: 10,
    overflow: "hidden",
  },
  title: {
    display: "flex",
    width: 157,
    textAlign: "left",
    alignItems: "center",
  },
  title1: {
    color: Color.gray600,
    marginTop: 2,
    lineHeight: 20,
    fontSize: FontSize.textSmSemiboldsize,
  },
  title2: {
    textAlign: "left",
  },
  driverInfoParent: {
    height: 50,
    zIndex: 2,
    justifyContent: "space-between",
    alignItems: "center",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  choosePaymentOptionItem: {
    borderColor: "#eaecf0",
    borderTopWidth: 1,
    height: 1,
    zIndex: 3,
    borderStyle: "solid",
    alignSelf: "stretch",
    marginTop: 10,
  },
  startLocation1: {
    fontSize: FontSize.textXsMedium_size,
    lineHeight: 18,
    fontWeight: "500",
    fontFamily: FontFamily.textXsMedium,
    color: Color.gray500,
    textAlign: "left",
  },
  mapPinIcon: {
    width: 16,
    height: 16,
    overflow: "hidden",
  },
  text: {
    color: Color.primary800,
    marginLeft: 8,
    lineHeight: 24,
    fontSize: FontSize.textMdRegularsize,
    fontFamily: FontFamily.textMdRegular,
    flex: 1,
  },
  content: {
    width: 320,
    alignItems: "center",
    flexDirection: "row",
  },
  startLocation2: {
    marginTop: 10,
  },
  startLocationParent: {
    paddingBottom: 6,
    zIndex: 4,
    marginTop: 10,
  },
  text2: {
    color: Color.white,
    textAlign: "left",
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    fontSize: FontSize.textSmSemiboldsize,
  },
  buttonBase: {
    backgroundColor: Color.primary800,
    borderColor: "#1d2939",
  },
  text3: {
    color: Color.gray700,
    textAlign: "left",
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
    fontSize: FontSize.textSmSemiboldsize,
  },
  buttonBase1: {
    borderColor: "#d0d5dd",
    backgroundColor: Color.white,
    paddingVertical: Padding.p5xs,
    paddingHorizontal: Padding.psm,
    borderWidth: 1,
  },
  button1: {
    marginLeft: 9,
  },
  buttonParent: {
    zIndex: 5,
  },
  choosePaymentOption: {
    top: 380,
    borderTopLeftRadius: Border.bRxs,
    borderTopRightRadius: Border.bRxs,
    shadowColor: "rgba(16, 24, 40, 0.07)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.pXl,
    paddingTop: Padding.pXl,
    paddingBottom: 16,
    left: 0,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    position: "absolute",
    backgroundColor: Color.white,
  },
  mapChild: {
    top: 227,
    left: 134,
    width: 192,
    height: 180,
    opacity: 0,
    position: "absolute",
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
  confirmPayment: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default ConfirmPayment;
