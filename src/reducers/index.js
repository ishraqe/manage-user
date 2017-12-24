import {combineReducers} from 'redux';
import AuthReducer from './AuthReducers';
import EmployeeFormReducers from './EmployeeFormReducers';

export default combineReducers ({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducers
});