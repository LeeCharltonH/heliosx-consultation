import { ConsultationStep } from './Form.consts';

interface SendFormDataParams {
  config: ConsultationStep[];
  formData: Record<string, string>;
}

export const sendFormData = ({ config, formData }: SendFormDataParams) => {
  const mappedQuestions = () =>
    config.map((step) => {
      const answer = formData[step.radioGroup];

      return { question: step.question, answer };
    });

  console.log({ formData: mappedQuestions() });
};
