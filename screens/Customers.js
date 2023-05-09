import * as React from "react";
import {
  Image,
  StyleSheet,
  View,
  Text,
  TextInput,
  ScrollView,
} from "react-native";
import { Padding, Color, Border, FontSize, FontFamily } from "../GlobalStyles";

const Customers = () => {
  return (
    <View style={styles.customers}>
      <View style={[styles.bottomBar, styles.bottomBarFlexBox]}>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame.png")}
        />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame1.png")}
        />
        <View style={[styles.frameWrapper, styles.checkboxFlexBox]}>
          <Image
            style={styles.iconLayout}
            resizeMode="cover"
            source={require("../assets/frame2.png")}
          />
        </View>
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame3.png")}
        />
        <Image
          style={styles.frameIcon}
          resizeMode="cover"
          source={require("../assets/frame4.png")}
        />
      </View>
      <View style={[styles.mainParent, styles.mainPosition]}>
        <View style={[styles.main, styles.mainPosition]}>
          <View style={styles.section}>
            <View style={[styles.container, styles.containerSpaceBlock]}>
              <View style={styles.filtersBar}>
                <View style={styles.inputDropdownLayout}>
                  <View
                    style={[
                      styles.inputDropdownBase,
                      styles.frameContainerPosition,
                    ]}
                  >
                    <View style={styles.filtersBar}>
                      <View style={styles.input}>
                        <View style={[styles.content, styles.contentFlexBox]}>
                          <Image
                            style={styles.iconLayout}
                            resizeMode="cover"
                            source={require("../assets/search.png")}
                          />
                          <TextInput
                            style={[styles.text, styles.textClr]}
                            placeholder="Search"
                          />
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.buttonParent, styles.buttonParentSpaceBlock]}
                >
                  <View style={[styles.button, styles.buttonFlexBox]}>
                    <View style={[styles.buttonBase, styles.buttonShadowBox1]}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/filters-lines.png")}
                      />
                      <Text style={[styles.text1, styles.text1Typo]}>
                        Edit filters
                      </Text>
                    </View>
                  </View>
                  <View style={[styles.button1, styles.buttonFlexBox]}>
                    <View style={[styles.buttonBase1, styles.buttonShadowBox1]}>
                      <Image
                        style={styles.iconLayout}
                        resizeMode="cover"
                        source={require("../assets/plus.png")}
                      />
                      <Text style={[styles.text2, styles.textTypo1]}>
                        Add customer
                      </Text>
                    </View>
                  </View>
                </View>
                <View
                  style={[styles.filtersApplied, styles.buttonParentSpaceBlock]}
                >
                  <View style={styles.badge}>
                    <View style={[styles.badgeBase, styles.checkboxFlexBox]}>
                      <Text style={[styles.text3, styles.textTypo]}>
                        All time
                      </Text>
                      <Image
                        style={styles.xIcon}
                        resizeMode="cover"
                        source={require("../assets/x.png")}
                      />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <ScrollView vertical={true} style={styles.scrollView}>
              <View style={[styles.table, styles.tableBorder1]}>
                <View style={styles.content1}>
                  <View style={styles.column}>
                    <View style={styles.tableCellParent}>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Gaurav Sharman
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            42910 50140
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Rajvendra Singh
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            92920 10888
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Rajvendra Singh
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            92920 10888
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Mukesh Lal
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            83105 50185
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Lalu Dev
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            92009 10991
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Chirag Agarwal
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            83105 50185
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Ramen Noodles
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            83105 50185
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Raju Singh
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            83105 50185
                          </Text>
                        </View>
                      </View>
                      <View style={[styles.tableCell, styles.tableBorder]}>
                        <View style={styles.checkboxFlexBox}>
                          <Image
                            style={[styles.checkboxBaseIcon, styles.iconLayout]}
                            resizeMode="cover"
                            source={require("../assets/-checkbox-base1.png")}
                          />
                        </View>
                        <Image
                          style={styles.avatarIcon}
                          resizeMode="cover"
                          source={require("../assets/avatar.png")}
                        />
                        <View style={styles.textAndSupportingText}>
                          <Text style={[styles.text5, styles.text5Clr]}>
                            Lalu Dev
                          </Text>
                          <Text
                            style={[styles.supportingText, styles.textLayout]}
                          >
                            92009 10991
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </ScrollView>
            <View style={styles.container1}>
              <View style={[styles.pagination, styles.tableBorder1]}>
                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <View style={styles.buttonShadowBox}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/arrowleft.png")}
                    />
                  </View>
                </View>
                <Text style={styles.text1Typo}>
                  <Text style={styles.page}>{`Page `}</Text>
                  <Text style={styles.textTypo}>1</Text>
                  <Text style={styles.page}>{` of `}</Text>
                  <Text style={styles.textTypo}>10</Text>
                </Text>
                <View style={[styles.button2, styles.buttonFlexBox]}>
                  <View style={styles.buttonShadowBox}>
                    <Image
                      style={styles.iconLayout}
                      resizeMode="cover"
                      source={require("../assets/arrowright.png")}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={[styles.frameContainer, styles.frameContainerPosition]}>
          <View style={styles.contentFlexBox}>
            <Image
              style={styles.vectorIcon}
              resizeMode="cover"
              source={require("../assets/vector3.png")}
            />
            <View style={styles.frameChild} />
            <Text style={[styles.yourCustomers, styles.text5Clr]}>
              Your Customers
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  bottomBarFlexBox: {
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.pXs,
    flexDirection: "row",
  },
  checkboxFlexBox: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  mainPosition: {
    left: 0,
    position: "absolute",
  },
  containerSpaceBlock: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p5xl,
  },
  frameContainerPosition: {
    top: 0,
    left: 0,
    position: "absolute",
  },
  contentFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  textClr: {
    textAlign: "left",
    fontFamily: FontFamily.textXsMedium,
    fontWeight: "500",
    flex: 1,
  },
  buttonParentSpaceBlock: {
    marginTop: 12,
    flexDirection: "row",
  },
  buttonFlexBox: {
    borderRadius: Border.bR5xs,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  buttonShadowBox1: {
    paddingHorizontal: Padding.pBase,
    paddingVertical: Padding.p3xs,
    borderWidth: 1,
    borderStyle: "solid",
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    overflow: "hidden",
    flex: 1,
  },
  text1Typo: {
    color: Color.gray700,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  textTypo1: {
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
    marginLeft: 4,
  },
  textTypo: {
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
  },
  tableBorder1: {
    borderColor: "#eaecf0",
    borderStyle: "solid",
  },
  tableBorder: {
    borderBottomWidth: 1,
    borderColor: "#eaecf0",
    borderStyle: "solid",
    alignItems: "center",
    paddingHorizontal: Padding.p5xl,
    flexDirection: "row",
  },
  tableBorderx: {
    alignItems: "center",
    paddingHorizontal: Padding.p5xl,
    flexDirection: "row",
    paddingVertical: Padding.p3xs,
  },
  iconLayout: {
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  text5Clr: {
    color: Color.gray900,
    textAlign: "left",
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
  },
  frameIcon: {
    width: 24,
    height: 24,
    overflow: "hidden",
  },
  frameWrapper: {
    borderRadius: 179,
    backgroundColor: Color.gray900,
    padding: 4,
    overflow: "hidden",
  },
  bottomBar: {
    marginTop: 348,
    top: "50%",
    right: "0%",
    left: "0%",
    shadowColor: "rgba(16, 24, 40, 0.06)",
    shadowRadius: 32,
    elevation: 32,
    paddingHorizontal: Padding.p5xl,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    position: "absolute",
    justifyContent: "space-between",
    overflow: "hidden",
    width: "100%",
    backgroundColor: Color.white,
  },
  text: {
    fontSize: FontSize.textMdMedium_size,
    lineHeight: 24,
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.textSmRegular,
  },
  content: {
    flex: 1,
  },
  input: {
    paddingHorizontal: Padding.psm,
    paddingVertical: Padding.p3xs,
    borderStyle: "solid",
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    borderWidth: 1,
    borderColor: "#d0d5dd",
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    backgroundColor: Color.white,
  },
  filtersBar: {
    alignSelf: "stretch",
  },
  inputDropdownBase: {
    right: 0,
  },
  inputDropdownLayout: {
    height: 44,
    alignSelf: "stretch",
  },
  text1: {
    marginLeft: 4,
    fontFamily: FontFamily.interSemibold,
    fontWeight: "600",
  },
  buttonBase: {
    borderColor: "#d0d5dd",
    paddingHorizontal: Padding.pBase,
    backgroundColor: Color.white,
  },
  button: {
    flex: 1,
  },
  text2: {
    color: Color.white,
    marginLeft: 4,
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
    textAlign: "left",
  },
  buttonBase1: {
    backgroundColor: Color.gray800,
    borderColor: "#1d2939",
  },
  button1: {
    marginLeft: 12,
    flex: 1,
  },

  text3: {
    color: Color.primary700,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
  },
  xIcon: {
    width: 12,
    height: 12,
    marginLeft: 4,
    overflow: "hidden",
  },
  badgeBase: {
    borderRadius: 16,
    backgroundColor: "#f2f4f7",
    paddingLeft: Padding.p3xs,
    paddingTop: Padding.p_11xs,
    paddingRight: Padding.p5xs,
    paddingBottom: Padding.p_11xs,
  },
  badge: {
    flexDirection: "row",
  },
  filtersApplied: {
    alignSelf: "stretch",
  },
  container: {
    alignSelf: "stretch",
  },
  checkboxBaseIcon: {
    borderRadius: Border.br_7xs,
  },
  text4: {
    fontSize: 12,
    lineHeight: 18,
    textAlign: "left",
    color: Color.gray500,
  },
  arrowDownIcon: {
    width: 16,
    height: 16,
    marginLeft: 4,
    overflow: "hidden",
  },
  tableHeader: {
    marginLeft: 12,
  },
  tableHeaderCell: {
    backgroundColor: Color.gray50,
    height: 44,
    alignSelf: "stretch",
    paddingVertical: Padding.pXs,
    borderBottomWidth: 1,
  },
  avatarIcon: {
    borderRadius: Border.br_181xl,
    width: 40,
    height: 40,
    display: "none",
    marginLeft: 12,
  },
  text5: {
    fontFamily: FontFamily.textMdMedium,
    fontWeight: "500",
    lineHeight: 20,
    fontSize: FontSize.textSmRegularsize,
  },
  supportingText: {
    textAlign: "left",
    color: Color.gray500,
    fontFamily: FontFamily.textSmRegular,
  },
  textAndSupportingText: {
    marginLeft: 12,
  },
  tableCell: {
    height: 72,
    paddingVertical: Padding.pBase
  },
  column: {
    width: "100%"
  },
  content1: {
    alignSelf: "stretch",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  table: {
    height: 622,
    marginTop: 24,
    borderWidth: 1,
    borderColor: "#eaecf0",
    alignSelf: "stretch",
    overflow: "hidden",
    backgroundColor: Color.white,
  },
  buttonShadowBox: {
    padding: Padding.p5xs,
    borderWidth: 1,
    borderColor: "#d0d5dd",
    borderStyle: "solid",
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(16, 24, 40, 0.05)",
    borderRadius: Border.bR5xs,
    alignSelf: "stretch",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: -1,
    },
    overflow: "hidden",
    flex: 1,
    backgroundColor: Color.white,
  },
  button2: {
    width: 36,
  },
  page: {
    fontFamily: FontFamily.textSmRegular,
  },
  pagination: {
    borderTopWidth: 1,
    paddingHorizontal: Padding.pXl,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: Padding.pXs,
    flexDirection: "row",
  },
  container1: {
    marginTop: 24,
  },
  section: {
    height: 776,
    alignSelf: "stretch",
  },
  main: {
    top: 52,
    height: 650,
    paddingBottom: 48,
    backgroundColor: Color.white,
  },
  vectorIcon: {
    width: 7,
    height: 12,
  },
  frameChild: {
    marginLeft: 8,
  },
  yourCustomers: {
    fontSize: FontSize.textLgBoldsize,
    lineHeight: 28,
    fontWeight: "700",
    fontFamily: FontFamily.textLgBold,
    marginLeft: 8,
  },
  frameContainer: {
    paddingVertical: 0,
    paddingHorizontal: Padding.p5xl,
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: Color.white,
  },
  mainParent: {
    top: 44,
    height: 702,
    width: "100%",
  },
  customers: {
    height: 800,
    overflow: "hidden",
    width: "100%",
    flex: 1,
    backgroundColor: Color.white,
  },
});

export default Customers;
