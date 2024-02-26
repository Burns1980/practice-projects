import React from 'react';
import { Input } from '../../components';

export const UserInput = ({ inputConfig, handleChange }) => {
  return (
    <section id='user-input'>
      {inputConfig.map((input, i, arr) => {
        if (i % 2 === 0) {
          return (
            <div key={`input-group ${input.name + i}`} className='input-group'>
              <Input
                onChange={(e) => handleChange(e)}
                type={input.inputType}
                name={input.name}
                value={input.value}
                required
              >
                {input.label}
              </Input>
              {i + 1 < arr.length && (
                <Input
                  onChange={(e) => handleChange(e)}
                  type={arr[i + 1].inputType}
                  name={arr[i + 1].name}
                  value={input.value}
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
