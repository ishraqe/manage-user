import React, {Component} from 'react';
import _ from 'lodash';
import {View, Text, ListView} from 'react-native';
import { connect } from 'react-redux';
import {employeesFetch} from '../actions';
import ListItem from './ListItem';



class EmployeeList extends Component {
    
    componentWillMount(){
        this.props.employeesFetch();

        //creating data source
        this.createDataSource(this.props);
    }

    componentWillReceiveProps(nextProps){
        this.createDataSource(nextProps);
    }

    createDataSource({ employees }){
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.dataSource = ds.cloneWithRows(employees);
    }
    renderRow(employee) {
        return <ListItem employee={employee} />
    }
    render() {
        console.log(this.props);
        return (
           <View>
               <ListView
                    enableEmptySections
                    dataSource = {this.dataSource}
                    renderRow={this.renderRow}
               />
           </View>     
        ); 
    }
}
const mapStateToProps = (state) => {
    const employees = _.map(state.employee,(val,uid) => {
        return { ...val, uid };
    });
    return {employees};
};

export default connect(mapStateToProps, {employeesFetch})(EmployeeList);