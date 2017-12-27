import React, {Component} from 'react';
import {Picker, Text} from 'react-native';
import {connect} from 'react-redux';
import {employeeUpdate, employeeCreate} from '../actions'
import {Card, CardSection, Input, Spinner, Button} from './common';


class EmployeeCreate extends Component {

    onButtonPress() {
        const {name, phone, shift} = this.props;

        this.props.employeeCreate({name, phone, shift});
    }
    render() {
        return (
           <Card>
                <CardSection>
                    <Input
                        label='Name'
                        placeholder = 'jane'
                        value = {this.props.name}
                        onChangeText = {
                            value => this.props.employeeUpdate({props:'name', value})
                        }
                    />
                </CardSection>
                <CardSection>
                    <Input
                        label='Phone'
                        placeholder = '555-55-555'
                        name={this.props.phone}
                        onChangeText = {
                            value => this.props.employeeUpdate({props:'phone', value})
                        } 
                    />
                </CardSection>
                <CardSection>
                    <Text style={styles.pickerTitleStyle} >Shift</Text>
                    <Picker
                        style={{flex:1}}
                        selectedValue={this.props.shift}
                        onValueChange={value => this.props.employeeUpdate({props:'shift', value})}>
                        <Picker.Item label="Satday" value="satday" />
                        <Picker.Item label="Sunday" value="sunday" />
                        <Picker.Item label="Monday" value="monday" />
                        <Picker.Item label="Tuesday" value="tuesday" />
                        <Picker.Item label="Wednesday" value="wednesday" />
                        <Picker.Item label="Thursday" value="thursday" />
                        <Picker.Item label="Friday" value="friday" />
                    </Picker>
                </CardSection>

                <CardSection>
                    <Button onPress={this.onButtonPress.bind(this)}>
                        Create
                    </Button>
                </CardSection>
           </Card> 
        );
    }
}

const styles = {
    pickerTitleStyle: {
        paddingLeft: 20,
        fontSize: 18,
        paddingTop: 12,
        color: '#000'
    }
}

const mapsStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;

    return {name, phone, shift: shift || 'monday'};
};

export default connect(mapsStateToProps, {employeeUpdate, employeeCreate})(EmployeeCreate);