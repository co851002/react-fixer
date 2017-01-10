import React from 'react';
import axios from 'axios';
import NewFormContainer from './../containers/newFormContainer';

const ResultsTable = ({ rates }) => (


<div className="table">
  <table>
     <thead>
        <tr>
           <th>Currency</th>
           <th>Value</th>
        </tr>
     </thead>
     <tbody>
       {Object.keys(rates).map((value,idx) => {
        //Needs polyfill for backward compatibility _.keys()  or import { keys } from ‘lodash’; keys()
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
  rates: React.PropTypes.object.isRequired
	//controlFunc: React.PropTypes.func.isRequired,
  //options: React.PropTypes.array.isRequired

};

export default ResultsTable;
