export const RADIO_GROUPS = {
  Q1: 'Q1',
  Q2: 'Q2',
  Q3: 'Q3',
  Q4: 'Q4',
  Q5: 'Q5'
} as const;

export interface ConsultationStep {
  step: number;
  question: string;
  radioGroup: keyof typeof RADIO_GROUPS;
  values: string[];
}

export const CONSULTATION_STEPS_CONFIG: ConsultationStep[] = [
  {
    step: 1,
    question: 'Have your symptoms lasted longer than 1 week?',
    radioGroup: RADIO_GROUPS.Q1,
    values: ['Yes', 'No']
  },
  {
    step: 2,
    question: 'Have you had a fever?',
    radioGroup: RADIO_GROUPS.Q2,
    values: ['Yes', 'No']
  },
  {
    step: 3,
    question: 'Have you experienced any headaches?',
    radioGroup: RADIO_GROUPS.Q3,
    values: ['Yes', 'No']
  },
  {
    step: 4,
    question: 'Have you experienced any nausea?',
    radioGroup: RADIO_GROUPS.Q4,
    values: ['Yes', 'No']
  },
  {
    step: 5,
    question: 'Have you been feeling faint?',
    radioGroup: RADIO_GROUPS.Q5,
    values: ['Yes', 'No']
  }
];
