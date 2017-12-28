import React, {Component} from 'react';
import {View, Text, Picker} from 'react-native';
import {connect} from 'react-redux';
import {CardSection, Input} from './common';
import {employeeUpdate} from '../actions';




class EmployeeForm extends Component {
    render() {
        console.log(this.props.shift, this.props.name);
        return (
            <View>
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
                        value={this.props.phone}
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
                        onValueChange={
                            value => this.props.employeeUpdate({props:'shift', value})
                        }>
                        <Picker.Item label="Satday" value="satday" />
                        <Picker.Item label="Sunday" value="sunday" />
                        <Picker.Item label="Monday" value="monday" />
                        <Picker.Item label="Tuesday" value="tuesday" />
                        <Picker.Item label="Wednesday" value="wednesday" />
                        <Picker.Item label="Thursday" value="thursday" />
                        <Picker.Item label="Friday" value="friday" />
                    </Picker>
                </CardSection>
            </View>
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
};

const mapStateToProps = (state) => {
    const {name, phone, shift} = state.employeeForm;
    return {name, phone, shift: shift || 'monday'};
};


export default connect(mapStateToProps, {employeeUpdate})(EmployeeForm); 