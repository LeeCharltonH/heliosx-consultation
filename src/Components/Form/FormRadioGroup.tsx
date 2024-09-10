import { memo } from 'react';
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
      <h2 className={styles.formGroupHeading}>{question}</h2>
      <div className={styles.formGroupContainer}>
        {values.map((value) => (
          <label key={value} className={styles.formGroup} htmlFor={`${radioGroup}-${value}`}>
            {value}
            <input
              type="radio"
              id={`${radioGroup}-${value}`}
              value={value}
              name={radioGroup}
              onChange={(event) => handleOnChange(event, radioGroup)}
            />
          </label>
        ))}
      </div>
    </div>
  )
);

FormRadioGroup.displayName = 'FormRadioGroup';

export default FormRadioGroup;
