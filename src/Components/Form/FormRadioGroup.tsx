import { Fragment } from 'react/jsx-runtime';

import { memo } from 'react';
import { RADIO_GROUPS } from './Form.consts';

interface FormRadioGroupProps {
  question: string;
  values: string[];
  radioGroup: keyof typeof RADIO_GROUPS;
  handleOnChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    radioGroup: keyof typeof RADIO_GROUPS
  ) => void;
}

const FormRadioGroup = memo(
  ({ question, values, radioGroup, handleOnChange }: FormRadioGroupProps) => {
    console.log(`render ${radioGroup}`);
    return (
      <div>
        <h2>{question}</h2>
        {values.map((value) => (
          <Fragment key={value}>
            <label htmlFor={`${radioGroup}-${value}`}>{value}</label>
            <input
              type="radio"
              id={`${radioGroup}-${value}`}
              value={value}
              name={radioGroup}
              onChange={(event) => handleOnChange(event, radioGroup)}
            />
          </Fragment>
        ))}
      </div>
    );
  }
);

FormRadioGroup.displayName = 'FormRadioGroup';

export default FormRadioGroup;
