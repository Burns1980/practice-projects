import React from 'react';

const TableHeader = ({ columnNames }) => {
  return (
    <thead>
      <tr>
        {columnNames.map((col) => (
          <th key={col} scope='col'>
            {col}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
