import { create } from 'zustand';

interface ConsultationStore {
  isFormComplete: boolean;
  setIsFormComplete: () => void;
  currentStep: number;
  stepForward: (activeStep: number) => void;
  formData: Record<string, string>;
  setFormData: (answer: Record<string, string>) => void;
}

const useConsultationStore = create<ConsultationStore>((set) => ({
  isFormComplete: false,
  setIsFormComplete: () =>
    set(() => {
      return { isFormComplete: true };
    }),
  currentStep: 1,
  stepForward: (activeStep) =>
    set(() => {
      return { currentStep: activeStep + 1 };
    }),
  formData: {},
  setFormData: (answer) =>
    set((state) => {
      const updatedAnswers = Object.assign(state.formData, answer);

      return { formData: updatedAnswers };
    })
}));

export const useCurrentStep = () => useConsultationStore((state) => state.currentStep);
export const useStepForward = () => useConsultationStore((state) => state.stepForward);
export const useFormData = () => useConsultationStore((state) => state.formData);
export const useSetFormData = () => useConsultationStore((state) => state.setFormData);
export const useIsFormComplete = () => useConsultationStore((state) => state.isFormComplete);
export const useSetIsFormComplete = () => useConsultationStore((state) => state.setIsFormComplete);
