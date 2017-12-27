import {combineReducers} from 'redux';
import AuthReducer from './AuthReducers';
import EmployeeFormReducers from './EmployeeFormReducers';
import EmployeesReducers from './EmployeesReducers';

export default combineReducers ({
    auth: AuthReducer,
    employeeForm: EmployeeFormReducers,
    employee: EmployeesReducers
});