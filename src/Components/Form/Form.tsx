import { useCallback, useState } from 'react';
import FormRadioGroup from './FormRadioGroup';
import { CONSULTATION_STEPS_CONFIG, RADIO_GROUPS } from './Form.consts';
import {
  useFormData,
  useCurrentStep,
  useSetFormData,
  useStepForward,
  useSetIsFormComplete
} from '../../stores/consultationStore';
import { Button } from '../Button/Button';
import styles from './Form.module.scss';
import { sendFormData } from './Form.helpers';

const Form = () => {
  const [hasSelected, setHasSelected] = useState<boolean>(false);
  const formData = useFormData();
  const currentStep = useCurrentStep();
  const setFormData = useSetFormData();
  const stepForward = useStepForward();
  const setIsFormComplete = useSetIsFormComplete();
  const isLastStep = CONSULTATION_STEPS_CONFIG.length === currentStep;
  const consultationStep = CONSULTATION_STEPS_CONFIG.find(
    (consultationStep) => consultationStep.step === currentStep
  );

  const handleOnChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>, radioGroup: keyof typeof RADIO_GROUPS) => {
      setFormData({ [radioGroup]: event?.target?.value });
      setHasSelected(true);
    },
    [setFormData]
  );

  if (!consultationStep) {
    return <div>Error</div>;
  }

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();

        sendFormData({ config: CONSULTATION_STEPS_CONFIG, formData });

        setIsFormComplete();
      }}>
      <FormRadioGroup
        key={consultationStep.radioGroup}
        question={consultationStep.question}
        values={consultationStep.values}
        radioGroup={consultationStep.radioGroup}
        handleOnChange={handleOnChange}
      />
      {!isLastStep && (
        <Button
          disabled={!hasSelected}
          value="Next"
          onClick={() => {
            stepForward(currentStep);
            setHasSelected(false);
          }}
        />
      )}
      {isLastStep && <Button disabled={!hasSelected} type="submit" value="Submit" />}
    </form>
  );
};

export default Form;
