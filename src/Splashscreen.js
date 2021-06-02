import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity, ImageBackground, StatusBar } from 'react-native';
var { width, height } = Dimensions.get('window');
import Splash_icon from "../assets/Images/Splash_icon.png";
class Splash extends React.Component {
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate("Login");

        }, 2000)
    }
    render() {
        return (
            <View style={{ flex: 1, }}>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Image source={Splash_icon} style={{
                        width: width * 0.18,
                        height: height * 0.65,
                        resizeMode: 'contain'
                    }} />

                </View>
            </View>
        );
    }
}
export default Splash;

