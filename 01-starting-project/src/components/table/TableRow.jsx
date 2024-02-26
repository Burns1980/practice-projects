import React from 'react';
import { formatter } from '../../util/investment';

const TableRow = ({ rowData, ...props }) => {
  return (
    <tr {...props}>
      <td>{rowData.year}</td>
      <td>{formatter.format(rowData.valueEndOfYear)}</td>
      <td>{formatter.format(rowData.interest)}</td>
      <td>{formatter.format(rowData.totalInterest)}</td>
      <td>{formatter.format(rowData.totalInvested)}</td>
    </tr>
  );
};

export default TableRow;
