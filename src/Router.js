import React from 'react';
import {View} from 'react-native';
import {Scene, Router,Stack, Actions} from 'react-native-router-flux';

import Login from './components/Login';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';


const RouterComponent = () => {
    return (
        <Router navigationBarStyle={{ backgroundColor: '#5b1801'}}  titleStyle={{ color:'#fff', alignSelf:'center' }} >
            <Stack key="root" hideNavBar={true}>
                <Stack key='auth'>
                    <Scene key='login' component={Login} title = 'The Batcave' />
                </Stack>
                <Stack key='employeeList'>
                    <Scene
                        key='_employeeList'
                        component={EmployeeList}
                        title ="Robin's"
                        rightTitle="Add"
                        onRight={()=> Actions.createEmployee()} 
                        initial 
                        rightButtonTextStyle ={{ color:'white',alignSelf:'center',marginRight:5 }}
                    /> 
                    <Scene
                        key='createEmployee'
                        component={EmployeeCreate}
                        title='Create Employee'            
                    />    
                    <Scene
                        key='editEmployee'
                        component ={EmployeeEdit}
                        title='Edit Robin'
                    /> 
                </Stack>
            </Stack>
        </Router>
    );
};

export default RouterComponent;