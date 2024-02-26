import React from 'react';

import './table.css';
import { TableHeader, TableBody } from '../../components/index.js';

const colNames = [
  'Year',
  'Investment Value',
  'Interest (Year)',
  'Total Interest',
  'Invested Capital',
];

const Table = ({ investmentData }) => {
  return (
    <>
      <table id='result'>
        <TableHeader columnNames={colNames} />
        <TableBody investmentData={investmentData} />
      </table>
    </>
  );
};

export default Table;
