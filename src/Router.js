import React from 'react';
import {View} from 'react-native';
import {Scene, Router,Stack, Actions} from 'react-native-router-flux';

import LoginForm from './components/LoginForm';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';


const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#2980b9'}}  titleStyle={{alignSelf: 'center', color: '#fff'}} >
            <Scene key="root" hideNavBar={true}>
                <Scene key='auth'>
                    <Scene key='login' component={LoginForm} title = 'Please login' />
                </Scene>
                <Scene key='main'>
                    <Scene
                        key='employeeList'
                        component={EmployeeList}
                        title ='Employee'
                        rightTitle="Add"
                        onRight={()=> Actions.createEmployee()}  
                        initial
                    /> 
                    <Scene
                        key='createEmployee'
                        component={EmployeeCreate}
                        title='Create Employee'                   
                    />     
                </Scene>
            </Scene>
        </Router>
    );
};

export default RouterComponent;