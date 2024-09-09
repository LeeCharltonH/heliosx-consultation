import { useCallback, useState } from 'react';
import FormRadioGroup from './FormRadioGroup';
import { RADIO_GROUPS } from './Form.consts';

const consultationStepsConfig = [
  {
    question: 'Question 1',
    radioGroup: RADIO_GROUPS.Q1,
    values: ['Yes', 'No']
  },
  {
    question: 'Question 2',
    radioGroup: RADIO_GROUPS.Q2,
    values: ['Yes', 'No']
  },
  {
    question: 'Question 3',
    radioGroup: RADIO_GROUPS.Q3,
    values: ['Yes', 'No']
  },
  {
    question: 'Question 4',
    radioGroup: RADIO_GROUPS.Q4,
    values: ['Yes', 'No']
  },
  {
    question: 'Question 5',
    radioGroup: RADIO_GROUPS.Q5,
    values: ['Yes', 'No']
  }
];

export const Form = () => {
  const [formData, setFormData] = useState({});

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, radioGroup: keyof typeof RADIO_GROUPS) => {
      setFormData((prev) => ({
        ...prev,
        [radioGroup]: event?.target?.value
      }));
    },
    []
  );

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        console.log(formData);
      }}>
      {consultationStepsConfig.map((consultationStep) => (
        <FormRadioGroup
          key={consultationStep.radioGroup}
          question={consultationStep.question}
          values={consultationStep.values}
          radioGroup={consultationStep.radioGroup}
          handleOnChange={handleOnChange}
        />
      ))}
      <button>Submit</button>
    </form>
  );
};
