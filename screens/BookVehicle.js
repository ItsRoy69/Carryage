import React, { useState, useEffect } from "react";
import { Image, StyleSheet, View, Text, TouchableOpacity, Button, ScrollView } from "react-native";
import { FontFamily, FontSize, Border, Color, Padding } from "../GlobalStyles";
import MapView, { Marker } from "react-native-maps";
import * as Location from "expo-location";
import { useNavigation } from "@react-navigation/native";

const BookVehicle = () => {
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
    <View style={styles.bookVehicle}>
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
      <View style={styles.drawer}>
        <Text style={[styles.preferredVehicle, styles.text3Typo]}>
          Preferred Vehicle
        </Text>
        <Image
          style={styles.drawerChild}
          resizeMode="cover"
          source={require("../assets/line-1.png")}
        />
        <View style={styles.vehicle}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-153.png")}
          />
          <View style={styles.body}>
            <View style={[styles.truckParent, styles.bottomBarFlexBox]}>
              <Text style={[styles.truck, styles.truckTypo]}>Truck</Text>
              <View style={styles.parent}>
                <Text style={[styles.truck, styles.truckTypo]}>₹197.49</Text>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/frame5.png")}
                />
              </View>
            </View>
            <Text style={styles.pm3}>6:51PM ・ 3 mins away</Text>
          </View>
        </View>
        <View style={[styles.vehicle1, styles.vehicleBorder]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-159.png")}
          />
          <View style={styles.body}>
            <View style={[styles.truckParent, styles.bottomBarFlexBox]}>
              <Text style={[styles.truck, styles.truckTypo]}>Mini Tempo</Text>
              <View style={styles.parent}>
                <Text style={[styles.truck, styles.truckTypo]}>₹97.27</Text>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/frame5.png")}
                />
              </View>
            </View>
            <Text style={styles.pm3}>6:51PM ・ 3 mins away</Text>
          </View>
        </View>
        <View style={[styles.vehicle2, styles.vehicleBorder]}>
          <Image
            style={[styles.icon, styles.iconLayout]}
            resizeMode="cover"
            source={require("../assets/frame-160.png")}
          />
          <View style={styles.body}>
            <View style={[styles.truckParent, styles.bottomBarFlexBox]}>
              <Text style={[styles.truck, styles.truckTypo]}>E-Rickshaw</Text>
              <View style={styles.parent}>
                <Text style={[styles.truck, styles.truckTypo]}>₹49.17</Text>
                <Image
                  style={styles.frameIcon5}
                  resizeMode="cover"
                  source={require("../assets/frame5.png")}
                />
              </View>
            </View>
            <Text style={styles.pm3}>6:51PM ・ 3 mins away</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate("VehicleConfirm")}
          style={styles.button}
        >
          <View style={[styles.buttonBase, styles.vehicleBorder]}>
            <Text style={[styles.text3, styles.truckTypo]}>
              Book Carryage Truck
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
  },
  buttonBaseFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mapIconPosition: {
    height: 748,
    top: 0,
    width: 360,
    left: 0,
    position: "absolute",
  },
  text3Typo: {
    fontFamily: FontFamily.textSmSemibold,
  },
  iconLayout: {
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  truckTypo: {
    lineHeight: 20,
    fontSize: FontSize.textSmSemiboldsize,
    textAlign: "left",
  },
  vehicleBorder: {
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
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
  headerFlexBox: {
    justifyContent: "space-between",
    flexDirection: "row",
    position: "absolute",
  },
  tokensIconLayout: {
    height: 24,
    width: 24,
    margin: 5,
    overflow: "hidden",
  },
  mapChild: {
    top: 227,
    left: 134,
    width: 192,
    height: 180,
    opacity: 0,
    position: "absolute",
  },
  preferredVehicle: {
    fontSize: FontSize.textLgSemiboldsize,
    lineHeight: 28,
    color: Color.gray900,
    zIndex: 0,
    textAlign: "left",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  drawerChild: {
    top: 8,
    left: "50%",
    width: 44,
    height: 2,
    zIndex: 1,
    marginTop: 10,
    position: "absolute",
  },
  icon: {
    borderRadius: Border.bR9xs,
  },
  truck: {
    fontWeight: "500",
    fontFamily: FontFamily.textSmMedium,
    color: Color.primary800,
  },
  frameIcon5: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  parent: {
    alignItems: "center",
    flexDirection: "row",
  },
  truckParent: {
    alignSelf: "stretch",
  },
  pm3: {
    fontSize: FontSize.sizexs,
    lineHeight: 18,
    fontFamily: FontFamily.interRegular,
    color: Color.gray500,
    marginTop: 4,
    textAlign: "left",
  },
  body: {
    marginTop: 8,
    alignSelf: "stretch",
  },
  vehicle: {
    backgroundColor: "#f2f4f7",
    borderWidth: 2,
    zIndex: 2,
    paddingHorizontal: Padding.p3xs,
    borderColor: "#eaecf0",
    borderStyle: "solid",
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
    marginTop: 10,
    paddingVertical: Padding.pXs,
  },
  vehicle1: {
    zIndex: 3,
    backgroundColor: Color.gray50,
    borderWidth: 1,
    paddingHorizontal: Padding.p3xs,
    borderColor: "#eaecf0",
    marginTop: 10,
    paddingVertical: Padding.pXs,
  },
  vehicle2: {
    zIndex: 4,
    backgroundColor: Color.gray50,
    borderWidth: 1,
    paddingHorizontal: Padding.p3xs,
    borderColor: "#eaecf0",
    marginTop: 10,
    paddingVertical: Padding.pXs,
  },
  text3: {
    color: Color.white,
    fontFamily: FontFamily.textSmSemibold,
    fontWeight: "600",
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
  drawer: {
    top: 260,
    borderTopLeftRadius: Border.bRxs,
    borderTopRightRadius: Border.bRxs,
    shadowColor: "rgba(16, 24, 40, 0.07)",
    shadowRadius: 20,
    elevation: 20,
    paddingHorizontal: Padding.pXl,
    paddingTop: Padding.pXl,
    paddingBottom: 16,
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
  bookVehicle: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default BookVehicle;
