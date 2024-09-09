import { Fragment, memo } from 'react';
import { RADIO_GROUPS } from './Form.consts';
import styles from './FormRadioGroup.module.scss';

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
  ({ question, values, radioGroup, handleOnChange }: FormRadioGroupProps) => (
    <div>
      <h2>{question}</h2>
      <div className={styles.formGroupContainer}>
        {values.map((value) => (
          <div key={value} className={styles.formGroup}>
            <label htmlFor={`${radioGroup}-${value}`}>{value}</label>
            <input
              type="radio"
              id={`${radioGroup}-${value}`}
              value={value}
              name={radioGroup}
              onChange={(event) => handleOnChange(event, radioGroup)}
            />
          </div>
        ))}
      </div>
    </div>
  )
);

FormRadioGroup.displayName = 'FormRadioGroup';

export default FormRadioGroup;
