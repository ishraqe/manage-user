import { EMPLOYEE_UPDATE } from "../actions/types";

const INITIAL_STATE = {
    name : '',
    phone : '',
    shift: ''
};

export default (state = INITIAL_STATE, action) => {
    console.log(action);
    switch(action.type) {
        case EMPLOYEE_UPDATE:
            return {...state, [action.payload.props]: action.payload.value};
        default: 
            return state;
    }
}