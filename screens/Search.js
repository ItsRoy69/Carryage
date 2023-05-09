import * as React from "react";
import { Image, StyleSheet, View, Text } from "react-native";
import { Color, FontFamily, Padding, FontSize, Border } from "../GlobalStyles";

const Search = () => {
  return (
    <View style={styles.search}>
      <View style={[styles.searchInner, styles.contentFlexBox]}>
        <View style={styles.contentFlexBox}>
          <Image
            style={styles.vectorIcon}
            resizeMode="cover"
            source={require("../assets/vector.png")}
          />
          <View style={styles.frameChild} />
          <Text style={styles.search1}>Search</Text>
        </View>
      </View>
      <View style={styles.location}>
        <View style={styles.inputLayout}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={styles.label}>Email</Text>
              <View style={[styles.input, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../assets/mappin.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>
                    Enter Pickup Location
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
        <View style={[styles.inputField1, styles.inputLayout]}>
          <View style={styles.inputFieldBase}>
            <View style={styles.inputFieldBase}>
              <Text style={styles.label}>Email</Text>
              <View style={[styles.input1, styles.inputSpaceBlock]}>
                <View style={[styles.content, styles.contentFlexBox]}>
                  <Image
                    style={styles.mapPinIcon}
                    resizeMode="cover"
                    source={require("../assets/mappin.png")}
                  />
                  <Text style={[styles.text, styles.textTypo]}>Where To?</Text>
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
      <View style={styles.frameParent}>
        <View style={[styles.frameWrapper, styles.frameSpaceBlock]}>
          <View style={styles.frameGroup}>
            <Image
              style={styles.frameItem}
              resizeMode="cover"
              source={require("../assets/frame-24.png")}
            />
            <Text style={styles.favoritePlaces}>Favorite Places</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-241.png")}
          />
          <View style={styles.samratChawkParent}>
            <Text style={[styles.samratChawk, styles.samratChawkTypo]}>
              Samrat Chawk
            </Text>
            <Text
              style={[styles.talwandi484aNagar, styles.textTypo]}
            >{`Talwandi, 484A Nagar Example Road Is Take Here `}</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-241.png")}
          />
          <View style={styles.samratChawkParent}>
            <Text style={[styles.yetAnotherMall, styles.samratChawkTypo]}>
              Yet Another Mall
            </Text>
            <Text
              style={[styles.talwandi484aNagar, styles.textTypo]}
            >{`Gumanpura, 322F Nagar Example Road Is Take Here `}</Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-241.png")}
          />
          <View style={styles.samratChawkParent}>
            <Text style={[styles.yetAnotherMall, styles.samratChawkTypo]}>
              Boring School
            </Text>
            <Text style={[styles.talwandi484aNagar, styles.textTypo]}>
              Mahaveer Nagar Extension, Marketplace Road is over here
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-241.png")}
          />
          <View style={styles.samratChawkParent}>
            <Text style={[styles.yetAnotherMall, styles.samratChawkTypo]}>
              GOAT Music School
            </Text>
            <Text style={[styles.talwandi484aNagar, styles.textTypo]}>
              Mahaveer Nagar 3rd, Suckless Road Over here
            </Text>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameSpaceBlock]}>
          <Image
            style={styles.frameItem}
            resizeMode="cover"
            source={require("../assets/frame-241.png")}
          />
          <View style={styles.samratChawkParent}>
            <Text style={[styles.yetAnotherMall, styles.samratChawkTypo]}>
              Govind Guitar Classes
            </Text>
            <Text style={[styles.talwandi484aNagar, styles.textTypo]}>
              Mahaveer Nagar 3rd, Suckless Road Over here
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
  inputSpaceBlock: {
    marginTop: 6,
    alignSelf: "stretch",
  },
  textTypo: {
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
    textAlign: "left",
  },
  inputLayout: {
    height: 45,
    width: 320,
  },
  frameSpaceBlock: {
    paddingVertical: Padding.pXs,
    paddingHorizontal: Padding.pXl,
    width: 360,
    borderColor: "#eaecf0",
    borderStyle: "solid",
    alignItems: "center",
    flexDirection: "row",
  },
  samratChawkTypo: {
    height: 21,
    color: Color.gray800,
    lineHeight: 24,
    fontSize: FontSize.textMdMedium_size,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "left",
  },
  vectorIcon: {
    width: 7,
    height: 12,
  },
  frameChild: {
    marginLeft: 8,
  },
  search1: {
    fontWeight: "700",
    fontFamily: FontFamily.textLgBold,
    color: Color.gray900,
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.textLgMediumsize,
    marginLeft: 8,
  },
  searchInner: {
    top: 52,
    left: 24,
    width: 312,
    position: "absolute",
  },
  label: {
    color: Color.gray700,
    display: "none",
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  mapPinIcon: {
    width: 20,
    height: 20,
    overflow: "hidden",
  },
  text: {
    lineHeight: 24,
    fontSize: FontSize.textMdMedium_size,
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
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
    paddingHorizontal: Padding.psm,
    borderWidth: 1,
    borderColor: "#d0d5dd",
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
    marginTop: 6,
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
    marginTop: 6,
    alignSelf: "stretch",
    display: "none",
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
  },
  input1: {
    paddingVertical: Padding.p3xs,
    paddingHorizontal: Padding.psm,
    borderWidth: 1,
    borderColor: "#d0d5dd",
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
    marginTop: 6,
    alignItems: "center",
    flexDirection: "row",
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
  inputField1: {
    marginTop: 20,
  },
  location: {
    top: 104,
    left: 20,
    position: "absolute",
    overflow: "hidden",
  },
  frameItem: {
    borderRadius: 58,
    width: 28,
    height: 28,
    overflow: "hidden",
  },
  favoritePlaces: {
    color: Color.gray800,
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.textLgMediumsize,
    marginLeft: 8,
  },
  frameGroup: {
    flexDirection: "row",
  },
  frameWrapper: {
    borderBottomWidth: 2,
  },
  samratChawk: {
    width: 112,
  },
  talwandi484aNagar: {
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
  },
  samratChawkParent: {
    marginLeft: 8,
  },
  frameContainer: {
    borderBottomWidth: 1,
  },
  yetAnotherMall: {
    alignSelf: "stretch",
  },
  frameParent: {
    top: 234,
    left: 0,
    position: "absolute",
    overflow: "hidden",
  },
  search: {
    width: "100%",
    height: 800,
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Search;
