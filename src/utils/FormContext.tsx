import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";

export type FormContextType = {
  activeFormId: string;
  setActiveFormId: (activeFormId: string) => void;
};

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [activeFormId, setActiveFormId] = useState<string>("");

  useEffect(() => {
    setActiveFormId("Info");
  }, []);

  const value = useMemo(
    () => ({
      activeFormId,
      setActiveFormId,
    }),
    []
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
