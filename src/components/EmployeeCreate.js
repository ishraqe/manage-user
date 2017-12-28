import React, {Component} from 'react';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions'
import {Card, CardSection,Button} from './common';
import EmployeeForm from './EmployeeForm';



class EmployeeCreate extends Component {

    onButtonPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift: shift || 'monday'});
    }
    render() {
        return (
           <Card>
                <EmployeeForm
                    {...this.props}
                />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
           </Card> 
        );
    }
}



const mapsStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift: shift || 'monday'};
};

export default connect(mapsStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);