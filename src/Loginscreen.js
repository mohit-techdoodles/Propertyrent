import React, {Component} from 'react';
import {
  View,
  Text,
  Dimensions,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
var {width, height} = Dimensions.get('window');

import { COLORS } from '../common/Color';
import { Font } from '../common/Font';
class Login extends React.Component {

  render() {
    return (
      <View style={styles.container}>
          <View style={{marginBottom:width * 0.4}}>
        <View style={styles.textinput_main}>
          <View style={styles.input}>
            <View style={styles.textinput_view}>
              <TextInput
                style={styles.textinput}
                placeholder="Email"
                placeholderTextColor={COLORS.white}
              
                // value={this.state.Phone}
                onChangeText={(value) => this.setState({Email: value})}
                keyboardType={'default'}
              />
            </View>
          </View>
          <View style={styles.line_top}></View>
          <View style={styles.input}>
            <View style={styles.textinput_view}>
              <TextInput
                style={styles.textinput}
                placeholder="Password"
                placeholderTextColor={COLORS.white}
                  
                // value={this.state.Phone}
                 
                onChangeText={(value) => this.setState({Email: value})}
                keyboardType={'default'}
              />
               
            </View>
          </View>
          <View style={styles.line_top}></View>
        </View>
        <View style={styles.forgot_view}>
          <TouchableOpacity
              onPress={() => this.props.navigation.navigate('Forgotpass')}>
            <Text style={styles.forgot}>Forgot your password?</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.button_view}>
            <TouchableOpacity style={styles.button} onPress={() => this.props.navigation.navigate('Dashboard')}>
            <Text style={styles.button_text}>LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View
          style={styles.bottom_view}>
          <Text style={styles.bottom_text}>Don't have an account? </Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Signup')}>
            <Text style={styles.bottom_text2}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
} 
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#4668D9',
    justifyContent: 'center'
  },
  input: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: width * 0.070,

  },
  textinput: {
    width: width * 0.7,
    height: height * 0.050,
    marginLeft: width * 0.02,
    fontFamily: Font.extrabold,

    marginVertical: width * 0.02,

  },
  line_top: {
    width: width * 0.87,
    height: width * 0.003,
    marginLeft: width * 0.070,
    backgroundColor: COLORS.white,
    marginTop: width * 0.019
  },
  textinput_view: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textinput_main: {
    marginTop: width * 0.1
  },
  forgot_view: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginRight: width * 0.058,
    marginTop: width * 0.04
  },
  forgot: {
    color: COLORS.white,
    fontSize: width * 0.038,
    fontFamily: Font.regular,
  },
  button: {
    backgroundColor: COLORS.white,
    width: width * 0.70,
    height: height * 0.066,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 9,
    marginTop: width * 0.04
  },
  button_text: {
    color: '#4668D9',
    fontSize: width * 0.040,
    fontFamily: Font.regular,
  },
  button_view: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.07
  },
  login_option_text: {
    color: COLORS.white,
    fontSize: width * 0.038
  },
  line: {
    width: width * 0.01,
    height: width * 0.001,
    backgroundColor: COLORS.white,
    marginTop: width * 0.01
  },
  bottom_text: {
    color: COLORS.white,
    fontSize: width * 0.038,
    fontFamily: Font.regular,
  },
  bottom_text2: {
    color: COLORS.white,
    fontSize: width * 0.035,
    textDecorationLine: 'underline',
    fontFamily: Font.extrabold,
  },
  bottom_view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: width * 0.12,

  }
});

export default Login;
