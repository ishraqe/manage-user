import _ from 'lodash';
import Communications from 'react-native-communications';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Card, CardSection, Button, Confirm} from './common';
import EmployeeForm from './EmployeeForm';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';


class EmployeeEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showmodal : false
        };
    }

    componentWillMount() {
        _.each(this.props.employee,(value, props)=> {
            this.props.employeeUpdate({props, value});
        });
    }
    onMessagePress() {
        const {phone,shift} = this.props;

        Communications.text(phone, `Your dating shift is ${shift}`);
    }
    onButtonPress() {
        const {name, phone, shift} = this.props; 
        this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid});
    }
    onAccept() {
        const {uid} = this.props.employee;    
        this.props.employeeDelete({uid});
    }
    onDecline(){
        this.setState({ showModal: false });
    }


    render() {
        return (
            <Card>
                <EmployeeForm />
                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Save Changes
                    </Button>
                </CardSection>
                <CardSection>
                    <Button onPress={this.onMessagePress.bind(this)}>
                        Send Message
                    </Button>
                </CardSection>

                <CardSection>
                    <Button onPress={() => this.setState({showmodal: !this.state.showmodal})}>
                        Fire
                    </Button>
                </CardSection>

                <Confirm
                    visible={this.state.showmodal}
                    onAccept={this.onAccept.bind(this)}
                    onDecline={this.onDecline.bind(this)}
                >
                    Are your sure you want to delete this ?? 
                </Confirm>
            </Card>
        );
    }
}

const mapStateToProps = (state) => {
    const {name, phone , shift} = state.employeeForm; 
    return {name , phone, shift: shift || 'monday'};
}

export default connect(mapStateToProps,{employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit);