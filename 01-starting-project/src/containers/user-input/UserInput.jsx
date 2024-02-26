import React from 'react';

import { Input } from '../../components';
import './unserInput.css';

const UserInput = ({ inputConfig, handleChange, investmentData }) => {
  return (
    <section id='user-input'>
      {inputConfig.map((input, i, arr) => {
        if (i % 2 === 0) {
          return (
            <div key={`input-group ${input.name + i}`} className='input-group'>
              <Input
                onChange={(e) => handleChange(e.target)}
                type={input.inputType}
                name={input.name}
                value={investmentData[i].value ?? input.defaultValue}
                required
              >
                {input.label}
              </Input>
              {i + 1 < arr.length && (
                <Input
                  onChange={(e) => handleChange(e.target)}
                  type={arr[i + 1].inputType}
                  name={arr[i + 1].name}
                  value={investmentData[i + 1].value ?? arr[i + 1].defaultValue}
                  required
                >
                  {arr[i + 1].label}
                </Input>
              )}
            </div>
          );
        }

        return;
      })}
    </section>
  );
};

export default UserInput;
