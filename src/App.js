import React,{Component} from 'react';
import {Text, View} from 'react-native';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import LoginForm from './components/LoginForm';

import reducers from './reducers';

class App extends  Component {

    componentWillMount(){
        const config = {
            apiKey: "AIzaSyBxnIgc4beKEcsFJkCrDHNwUjZstLHFJpk",
            authDomain: "manager-react-ce2e6.firebaseapp.com",
            databaseURL: "https://manager-react-ce2e6.firebaseio.com",
            projectId: "manager-react-ce2e6",
            storageBucket: "",
            messagingSenderId: "46279955929"
        };
        firebase.initializeApp(config);
    }

    render(){
        const store = createStore(reducers,{}, applyMiddleware(ReduxThunk));
        return(
            <Provider store={store}>
                <View>
                    <LoginForm/>
                </View>
            </Provider>
        );
    }
}

export default App;