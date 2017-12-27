import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View,Text,TextInput,StyleSheet,TouchableOpacity,KeyboardAvoidingView} from 'react-native';
import {emailChanged, passwordChanged, loginUser} from "../actions";
import {Card, CardSection, Input, Button, Spinner} from './common';

class LoginForm extends Component {
    onEmailChange(text){
        this.props.emailChanged(text);
    }
    onPasswordChange(text){
        this.props.passwordChanged(text);
    }
    onButtonPress() {
        const {email, password} = this.props;
        this.props.loginUser({email, password});
    }

    renderErrorMessage() {
        if(this.props.error) {
            return (
                <View style={{ marginBottom: 10}}>
                    <Text style={styles.errorMsgStyle}>{this.props.error}</Text>
                </View>
            );
        }
    }

    renderButton() {
        if(this.props.loading) {
            return <Spinner size='large' />;
        }

        return (
            <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}
                    onPress={this.onButtonPress.bind(this)} 
                >
                    Iron man sucks !!
                 </Text>
            </TouchableOpacity>
        );
    }
    render() {                                                   
        return(
            <KeyboardAvoidingView>
                <View style={styles.formContainer}>
                <TextInput 
                    style={styles.input}
                    placeholder={'email@email.com'}
                    returnKeyType={'next'}
                    keyboardType='email-address'
                    autoCorrect={false}
                    placeholderTextColor='rgb(255,255,255)'
                    underlineColorAndroid='transparent'
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />

                <TextInput style={styles.input} 
                    placeholderTextColor='rgba(255,255,255,.8)'
                    underlineColorAndroid='transparent'
                    returnKeyType={'go'}
                    secureTextEntry
                    placeholder={'password'}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
                    {this.renderErrorMessage()}
                    {this.renderButton()}
                </View>
            </KeyboardAvoidingView>
        );
    }
};

const styles = {
    errorMsgStyle: {
        fontSize: 20, 
        alignSelf: 'center',
        color: 'red'
    },
    formContainer: {
        padding: 10,
        marginBottom: 10
    },
    input: {
        backgroundColor: 'rgba(255,255,255, .6)',
        height: 60,
        opacity: .7,
        marginBottom: 15,
        paddingHorizontal: 20,
        color: '#fff',
        fontSize: 20
    },
    btn: {
        backgroundColor: 'rgba(255,255,255, .6)',
        paddingVertical: 20
    },
    btnText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18
}
}

const mapStateToProps = ({auth}) => {
    const {email, password, error, loading} = auth;
    return {
        email,
        password,
        error,
        loading
    };

};

export default  connect(mapStateToProps,{emailChanged, passwordChanged, loginUser })(LoginForm);