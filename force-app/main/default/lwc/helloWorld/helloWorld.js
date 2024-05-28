import { LightningElement } from 'lwc';

export default class HelloWorld extends LightningElement {


    employee={
        fname:'Shijo',
        lname:'Joy',
        age :28,
        City :'Bangalore'
    }
   get getEmployeeRank()
   {
    const Rank=this.employee.age>=50?'One':this.employee.age>=30?'Two':'Three';
    return Rank;
   }



}