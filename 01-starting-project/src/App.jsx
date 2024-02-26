import { useState } from 'react';

import { Header } from './components';
import { Table, UserInput } from './containers';

const userInputConfig = [
  {
    label: 'Initial Investment',
    inputType: 'number',
    name: 'initialInvestment',
    defaultValue: 15000,
  },
  {
    label: 'Annual Investment',
    inputType: 'number',
    name: 'annualInvestment',
    defaultValue: 1200,
  },
  {
    label: 'Expected Return',
    inputType: 'number',
    name: 'expectedReturn',
    defaultValue: 6,
  },
  {
    label: 'Duration',
    inputType: 'number',
    name: 'duration',
    defaultValue: 10,
  },
];

const initState = userInputConfig.map((input) => ({
  name: input.name,
  value: input.defaultValue,
}));

function App() {
  const [investmentData, setInvestmentData] = useState(initState);

  const handleChange = (target) => {
    const data = [...investmentData.map((data) => ({ ...data }))];
    const name = target.name;
    const value = target.value;
    const dataObjToUpdate = data.find((item) => item.name === name);
    dataObjToUpdate.value = value;
    setInvestmentData(data);
  };

  const isValid =
    investmentData.find((dataProp) => dataProp.name === 'duration').value > 0;

  return (
    <>
      <Header />
      <UserInput
        handleChange={handleChange}
        inputConfig={userInputConfig}
        investmentData={investmentData}
      />
      {isValid ? (
        <Table investmentData={investmentData} />
      ) : (
        <p className='center'>Please enter duration that is greater than 0</p>
      )}
    </>
  );
}

export default App;
