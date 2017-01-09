import React from 'react';
import axios from 'axios';
import NewFormContainer from './../containers/newFormContainer';

var rates = {};

const ResultsTable = (props) => (


<div className="table">
  <table>
     <thead>
        <tr>
           <th>Currency</th>
           <th>Value</th>
        </tr>
     </thead>
     <tbody>
       {Object.keys(rates).map(function(value,idx) {
         return <tr key={idx}>
           <td>{value}</td>
           <td>{rates[value]}</td>
         </tr>
       })}
     </tbody>
   </table>
 </div>
);

ResultsTable.propTypes = {
	name: React.PropTypes.string,
	//controlFunc: React.PropTypes.func.isRequired,
  //options: React.PropTypes.array.isRequired

};

export default ResultsTable;
