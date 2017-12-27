import React,{Component} from 'react';
import {View,Text,Image} from 'react-native';
import LoginForm from './LoginForm';

class Login extends Component {
    render(){
        return(
            <View style={{flex:1}}>
                <Image
                    style={styles.backgroudImage}
                    source={require('../assets/images/batcave.jpg')}
                >
                </Image>
                <View style={styles.container}>
                    <Text style={styles.textStyle}>What is the password ?? </Text>
                    <LoginForm/>
                </View>
            </View>
        );
    }
}

const styles = {
    backgroudImage:{
        flex:1,
        alignSelf: 'stretch',
        width:null,
        justifyContent: 'center'
    },
    textStyle:{
        color: '#fff',
        top:0,
        alignSelf: 'center',
        marginBottom: 200,
        fontSize: 20,
        fontWeight: 'bold'
    },
    container: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
    }
}


export default Login;