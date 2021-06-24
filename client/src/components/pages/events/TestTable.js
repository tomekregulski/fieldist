import React from 'react';
import employ from './employ.json';
const columnHeader =["hello","goodbye"];
export default class ChildComponent extends React.Component{
   constructor(props){
       super(props);
       this.state={
       }
       this.generateHeader = this.generateHeader.bind(this);
       this.generateTableData = this.generateTableData.bind(this);
   }
   generateHeader(){
       let res=[];
     for(var i =0; i < columnHeader.length; i++){
         res.push(<th key={columnHeader[i]}>{columnHeader[i]}</th>)
     }
     return res;
   }
   generateTableData(){
       let res=[];
       let tableData = employ.data;
       for(var i =0; i < tableData.length; i++){
           res.push(
            <tr >
           <td key={tableData[i].id}>{tableData[i].id}</td>
           <td key={tableData[i].firstName}>{tableData[i].firstName}</td>
           <td key= {tableData[i].lastName}>{tableData[i].lastName}</td>
           <td key={tableData[i].email}>{tableData[i].email}</td>
           <td key={tableData[i].gender}>{tableData[i].gender}</td>
           </tr>
           )
       }
       return res;
   }
   render(){
       return(
           <div>
        <table className="table  table-hover">
        <thead>
            <tr>
            {this.generateHeader()}
            </tr>
        </thead>
        <tbody>
            {this.generateTableData()}
        </tbody>
        </table>
           </div>
       )
   }
}