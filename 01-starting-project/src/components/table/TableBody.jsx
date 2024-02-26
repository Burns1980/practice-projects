import React from 'react';

import TableRow from './TableRow';
import { calculateInvestmentResults } from '../../util/investment';

const TableBody = ({ investmentData }) => {
  const transformedInvData = {};
  investmentData.forEach(
    (item) => (transformedInvData[item.name] = +item.value)
  );
  const calculatedData = calculateInvestmentResults(transformedInvData);

  const TableRows = calculatedData.map((item, idx) => (
    <TableRow key={idx} rowData={item} />
  ));

  return <tbody className='center'>{TableRows}</tbody>;
};

export default TableBody;
