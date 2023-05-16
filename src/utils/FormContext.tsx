import React, { createContext, useContext, useMemo, useState } from "react";

export type FormContextType = {
  activeForm: number;
  setActiveForm: (activeForm: number) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeForm, setActiveForm] = useState<number>(1);

  const value = useMemo(
    () => ({
      activeForm,
      setActiveForm,
    }),
    [activeForm, setActiveForm]
  );

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>;
};

export const useForm = (): FormContextType => {
  const value = useContext(FormContext);
  if (!value) {
    throw new Error(
      "useReminders can only be called from within a RemindersProvider"
    );
  }
  return value;
};
