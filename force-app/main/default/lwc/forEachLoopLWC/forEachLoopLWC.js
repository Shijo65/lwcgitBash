import { LightningElement } from 'lwc';

export default class ForEachLoopLWC extends LightningElement {

    employee = {
        fname: 'Shijo',
        lname: 'Joy',
        age: 28,
        City: 'Bangalore'
    };

    employeeList = [
        {
            fname: 'Shinto',
            lname: 'Robin',
            age: 30,
            City: 'Kollam'
        },
        {
            fname: 'Robin',
            lname: 'Tommichan',
            age: 32,
            City: 'Allepy'
        },
        {
            fname: 'Amal',
            lname: 'Achankumju',
            age: 22,
            City: 'Panvely'
        }
    ];
}
