import React from "react"
import { View, Image, ImageBackground } from "react-native"
import {
  withStyles,
  Text,
  Button,
  CheckBox,
  Radio,
  Toggle,
  Icon,
  Input,
  Datepicker
} from "react-native-ui-kitten"
import Slider from "@react-native-community/slider"

import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export class _Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = { Toggle_67: true }

  render = () => (
    <View
      style={{
        width: "100%",
        height: "100%",
        marginLeft: 0,
        marginRight: 0,
        marginTop: 0,
        marginBottom: 0,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0,
        paddingBottom: 0,
        overflow: "visible",
        textAlign: "left",
        verticalAlign: "baseline",
        fontSize: 12,
        color: "#000000",
        backgroundColor: "#ffffff",
        fontFamily: "Roboto-Regular",
        flexDirection: "column",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "stretch",
        alignContent: "stretch",
        borderColor: "#000000",
        borderStyle: "solid",
        borderWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderTopWidth: 0,
        borderBottomWidth: 0,
        borderRadius: 0,
        backgroundSize: "auto"
      }}
    >
      <View
        style={{
          width: "100%",
          height: "100%",
          marginLeft: 0,
          marginRight: 0,
          marginTop: 0,
          marginBottom: 0,
          paddingLeft: 0,
          paddingRight: 0,
          paddingTop: 0,
          paddingBottom: 0,
          overflow: "visible",
          textAlign: "left",
          verticalAlign: "baseline",
          fontSize: 12,
          color: "#000000",
          backgroundColor: "#ffffff",
          fontFamily: "Roboto-Regular",
          flexDirection: "column",
          flexWrap: "wrap",
          justifyContent: "flex-start",
          alignItems: "stretch",
          alignContent: "stretch",
          borderColor: "#000000",
          borderStyle: "solid",
          borderWidth: 0,
          borderLeftWidth: 0,
          borderRightWidth: 0,
          borderTopWidth: 0,
          borderBottomWidth: 0,
          borderRadius: 0,
          backgroundSize: "auto"
        }}
      >
        <View
          style={{
            width: "100%",
            height: "50%",
            marginLeft: 0,
            marginRight: 0,
            marginTop: 0,
            marginBottom: 0,
            paddingLeft: 0,
            paddingRight: 0,
            paddingTop: 0,
            paddingBottom: 0,
            overflow: "visible",
            textAlign: "left",
            verticalAlign: "baseline",
            fontSize: 12,
            color: "#000000",
            backgroundColor: "#ffffff",
            fontFamily: "Roboto-Regular",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "flex-start",
            alignItems: "stretch",
            alignContent: "stretch",
            borderColor: "#000000",
            borderStyle: "solid",
            borderWidth: 0,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            borderTopWidth: 0,
            borderBottomWidth: 0,
            borderRadius: 0,
            backgroundSize: "auto"
          }}
        >
          <View
            style={{
              width: "50%",
              height: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 12,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontFamily: "Roboto-Regular",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          >
            <View
              style={{
                width: "100%",
                height: "50%",
                marginLeft: 0,
                marginRight: 0,
                marginTop: 0,
                marginBottom: 0,
                paddingLeft: 0,
                paddingRight: 0,
                paddingTop: 0,
                paddingBottom: 0,
                overflow: "visible",
                fontSize: 12,
                color: "#000000",
                backgroundColor: "#ffffff",
                fontFamily: "Roboto-Regular",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "flex-start",
                alignItems: "stretch",
                alignContent: "stretch",
                borderColor: "#000000",
                borderStyle: "solid",
                borderWidth: 0,
                borderLeftWidth: 0,
                borderRightWidth: 0,
                borderTopWidth: 0,
                borderBottomWidth: 0,
                borderRadius: 0,
                backgroundSize: "auto"
              }}
            >
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  fontSize: 12,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <Image
                  resizeMode="cover"
                  source={{
                    uri:
                      "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/256px-Fractal_Broccoli_kRQMHhM.jpg"
                  }}
                  style={{
                    width: "100%",
                    height: 200,
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0
                  }}
                />
              </View>
              <View
                style={{
                  width: "50%",
                  height: "100%",
                  marginLeft: 0,
                  marginRight: 0,
                  marginTop: 0,
                  marginBottom: 0,
                  paddingLeft: 0,
                  paddingRight: 0,
                  paddingTop: 0,
                  paddingBottom: 0,
                  overflow: "visible",
                  fontSize: 12,
                  color: "#000000",
                  backgroundColor: "#ffffff",
                  fontFamily: "Roboto-Regular",
                  flexDirection: "column",
                  flexWrap: "wrap",
                  justifyContent: "flex-start",
                  alignItems: "stretch",
                  alignContent: "stretch",
                  borderColor: "#000000",
                  borderStyle: "solid",
                  borderWidth: 0,
                  borderLeftWidth: 0,
                  borderRightWidth: 0,
                  borderTopWidth: 0,
                  borderBottomWidth: 0,
                  borderRadius: 0,
                  backgroundSize: "auto"
                }}
              >
                <View
                  style={{
                    width: "100%",
                    height: "50%",
                    marginLeft: 0,
                    marginRight: 0,
                    marginTop: 0,
                    marginBottom: 0,
                    paddingLeft: 0,
                    paddingRight: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    overflow: "visible",
                    fontSize: 12,
                    color: "#000000",
                    backgroundColor: "#ffffff",
                    fontFamily: "Roboto-Regular",
                    flexDirection: "column",
                    flexWrap: "wrap",
                    justifyContent: "flex-start",
                    alignItems: "stretch",
                    alignContent: "stretch",
                    borderColor: "#000000",
                    borderStyle: "solid",
                    borderWidth: 0,
                    borderLeftWidth: 0,
                    borderRightWidth: 0,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                    borderRadius: 0,
                    backgroundSize: "auto"
                  }}
                >
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      overflow: "visible",
                      fontSize: 12,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontFamily: "Roboto-Regular",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      alignContent: "stretch",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      backgroundSize: "auto"
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: "50%",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "visible",
                        fontSize: 12,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontFamily: "Roboto-Regular",
                        flexDirection: "column",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        alignContent: "stretch",
                        borderColor: "#000000",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 0,
                        backgroundSize: "auto"
                      }}
                    >
                      <View
                        style={{
                          width: "100%",
                          height: "50%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          fontSize: 12,
                          color: "#000000",
                          backgroundColor: "#ffffff",
                          fontFamily: "Roboto-Regular",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                          alignItems: "stretch",
                          alignContent: "stretch",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0,
                          backgroundSize: "auto"
                        }}
                      />
                      <View
                        style={{
                          width: "100%",
                          height: "50%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          fontSize: 12,
                          color: "#000000",
                          backgroundColor: "#ffffff",
                          fontFamily: "Roboto-Regular",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                          alignItems: "stretch",
                          alignContent: "stretch",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0,
                          backgroundSize: "auto"
                        }}
                      />
                    </View>
                  </View>
                  <View
                    style={{
                      width: "100%",
                      height: "50%",
                      marginLeft: 0,
                      marginRight: 0,
                      marginTop: 0,
                      marginBottom: 0,
                      paddingLeft: 0,
                      paddingRight: 0,
                      paddingTop: 0,
                      paddingBottom: 0,
                      overflow: "visible",
                      fontSize: 12,
                      color: "#000000",
                      backgroundColor: "#ffffff",
                      fontFamily: "Roboto-Regular",
                      flexDirection: "column",
                      flexWrap: "wrap",
                      justifyContent: "flex-start",
                      alignItems: "stretch",
                      alignContent: "stretch",
                      borderColor: "#000000",
                      borderStyle: "solid",
                      borderWidth: 0,
                      borderLeftWidth: 0,
                      borderRightWidth: 0,
                      borderTopWidth: 0,
                      borderBottomWidth: 0,
                      borderRadius: 0,
                      backgroundSize: "auto"
                    }}
                  >
                    <View
                      style={{
                        width: "100%",
                        height: "50%",
                        marginLeft: 0,
                        marginRight: 0,
                        marginTop: 0,
                        marginBottom: 0,
                        paddingLeft: 0,
                        paddingRight: 0,
                        paddingTop: 0,
                        paddingBottom: 0,
                        overflow: "visible",
                        fontSize: 12,
                        color: "#000000",
                        backgroundColor: "#ffffff",
                        fontFamily: "Roboto-Regular",
                        flexDirection: "row",
                        flexWrap: "wrap",
                        justifyContent: "flex-start",
                        alignItems: "stretch",
                        alignContent: "stretch",
                        borderColor: "#000000",
                        borderStyle: "solid",
                        borderWidth: 0,
                        borderLeftWidth: 0,
                        borderRightWidth: 0,
                        borderTopWidth: 0,
                        borderBottomWidth: 0,
                        borderRadius: 0,
                        backgroundSize: "auto"
                      }}
                    >
                      <View
                        style={{
                          width: "50%",
                          height: "100%",
                          marginLeft: 0,
                          marginRight: 0,
                          marginTop: 0,
                          marginBottom: 0,
                          paddingLeft: 0,
                          paddingRight: 0,
                          paddingTop: 0,
                          paddingBottom: 0,
                          overflow: "visible",
                          fontSize: 12,
                          color: "#000000",
                          backgroundColor: "#ffffff",
                          fontFamily: "Roboto-Regular",
                          flexDirection: "column",
                          flexWrap: "wrap",
                          justifyContent: "flex-start",
                          alignItems: "stretch",
                          alignContent: "stretch",
                          borderColor: "#000000",
                          borderStyle: "solid",
                          borderWidth: 0,
                          borderLeftWidth: 0,
                          borderRightWidth: 0,
                          borderTopWidth: 0,
                          borderBottomWidth: 0,
                          borderRadius: 0,
                          backgroundSize: "auto"
                        }}
                      >
                        <View
                          style={{
                            width: "100%",
                            height: "50%",
                            marginLeft: 0,
                            marginRight: 0,
                            marginTop: 0,
                            marginBottom: 0,
                            paddingLeft: 0,
                            paddingRight: 0,
                            paddingTop: 0,
                            paddingBottom: 0,
                            overflow: "visible",
                            fontSize: 12,
                            color: "#000000",
                            backgroundColor: "#ffffff",
                            fontFamily: "Roboto-Regular",
                            flexDirection: "column",
                            flexWrap: "wrap",
                            justifyContent: "flex-start",
                            alignItems: "stretch",
                            alignContent: "stretch",
                            borderColor: "#000000",
                            borderStyle: "solid",
                            borderWidth: 0,
                            borderLeftWidth: 0,
                            borderRightWidth: 0,
                            borderTopWidth: 0,
                            borderBottomWidth: 0,
                            borderRadius: 0,
                            backgroundSize: "auto"
                          }}
                        >
                          <View
                            style={{
                              width: "100%",
                              height: "50%",
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              fontSize: 12,
                              color: "#000000",
                              backgroundColor: "#ffffff",
                              fontFamily: "Roboto-Regular",
                              flexDirection: "column",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              alignContent: "stretch",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              backgroundSize: "auto"
                            }}
                          />
                          <View
                            style={{
                              width: "100%",
                              height: "50%",
                              marginLeft: 0,
                              marginRight: 0,
                              marginTop: 0,
                              marginBottom: 0,
                              paddingLeft: 0,
                              paddingRight: 0,
                              paddingTop: 0,
                              paddingBottom: 0,
                              overflow: "visible",
                              fontSize: 12,
                              color: "#000000",
                              backgroundColor: "#ffffff",
                              fontFamily: "Roboto-Regular",
                              flexDirection: "column",
                              flexWrap: "wrap",
                              justifyContent: "flex-start",
                              alignItems: "stretch",
                              alignContent: "stretch",
                              borderColor: "#000000",
                              borderStyle: "solid",
                              borderWidth: 0,
                              borderLeftWidth: 0,
                              borderRightWidth: 0,
                              borderTopWidth: 0,
                              borderBottomWidth: 0,
                              borderRadius: 0,
                              backgroundSize: "auto"
                            }}
                          >
                            <Toggle
                              text="switch ON/OFF"
                              activeColor="#409EFF"
                              inactiveColor="#C0CCDA"
                              disabled={false}
                              style={{
                                marginLeft: 0,
                                marginRight: 0,
                                marginTop: 5,
                                marginBottom: 5,
                                paddingLeft: 5,
                                paddingRight: 5,
                                paddingTop: 5,
                                paddingBottom: 5,
                                overflow: "visible",
                                borderColor: "#000000",
                                borderStyle: "solid",
                                borderWidth: 0,
                                borderLeftWidth: 0,
                                borderRightWidth: 0,
                                borderTopWidth: 0,
                                borderBottomWidth: 0,
                                borderRadius: 0,
                                textAlign: "left",
                                textAlignVertical: "center",
                                textDecorationLine: "none",
                                textTransform: "none",
                                lineHeight: 12,
                                letterSpacing: 0
                              }}
                              checked={this.state.Toggle_67}
                              onChange={nextChecked =>
                                this.setState({ Toggle_67: nextChecked })
                              }
                            />
                          </View>
                        </View>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/256px-Fractal_Broccoli_kRQMHhM.jpg"
            }}
            style={{
              width: "50%",
              height: "100%",
              marginLeft: 0,
              marginRight: 0,
              marginTop: 0,
              marginBottom: 0,
              paddingLeft: 0,
              paddingRight: 0,
              paddingTop: 0,
              paddingBottom: 0,
              overflow: "visible",
              textAlign: "left",
              verticalAlign: "baseline",
              fontSize: 12,
              color: "#000000",
              backgroundColor: "#ffffff",
              fontFamily: "Roboto-Regular",
              flexDirection: "column",
              flexWrap: "wrap",
              justifyContent: "flex-start",
              alignItems: "stretch",
              alignContent: "stretch",
              borderColor: "#000000",
              borderStyle: "solid",
              borderWidth: 0,
              borderLeftWidth: 0,
              borderRightWidth: 0,
              borderTopWidth: 0,
              borderBottomWidth: 0,
              borderRadius: 0,
              backgroundSize: "auto"
            }}
          />
        </View>
      </View>
    </View>
  )
}

export default Blank = withStyles(_Blank, theme => ({
  container: {
    backgroundColor: theme["color-basic-100"]
  }
}))
