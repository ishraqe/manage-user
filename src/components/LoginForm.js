import React, {Component} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
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
                <View style={{backgroundColor: 'white'}}>
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
            <Button onPress={this.onButtonPress.bind(this)} >
                Log In
            </Button>
        );
    }
    render() {
        return(
          <Card>
            <CardSection>
                <Input
                    placeholder={'email@email.com'}
                    label={'Email'}
                    onChangeText={this.onEmailChange.bind(this)}
                    value={this.props.email}
                />
            </CardSection>
            <CardSection>
                <Input
                    secureTextEntry
                    placeholder={'password'}
                    label={'Password'}
                    onChangeText={this.onPasswordChange.bind(this)}
                    value={this.props.password}
                />
            </CardSection>
                {this.renderErrorMessage()}
            <CardSection>
                {this.renderButton()}
            </CardSection>
          </Card>
        );
    }
};

const styles = {
    errorMsgStyle: {
        fontSize: 20, 
        alignSelf: 'center',
        color: 'red'
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