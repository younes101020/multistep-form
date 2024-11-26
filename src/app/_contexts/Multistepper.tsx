"use client";

import { CardContent } from "@/components/ui/card";
import React, { createContext, ReactNode, Suspense, useContext } from "react";
import { StepsHeader } from "../_components/stepsheader";
import { useStepHook } from "../_hooks/useStep";

export type UseStepActionsProps = {
  helpers: UseStepActions;
};

export type UseStepActions = {
  goToNextStep: () => void;
  goToPrevStep: () => void;
  reset: () => void;
  canGoToNextStep: boolean;
  canGoToPrevStep: boolean;
  setStep: (step: number | ((step: number) => number)) => void;
} & { currentStep?: number };

const StepContext = createContext<UseStepActions | null>(null);

export function useStep(): UseStepActions {
  const context = useContext(StepContext);
  if (context === null) {
    throw new Error("useStep must be used within a UserProvider");
  }
  return context;
}

export function StepProvider({ children }: { children: ReactNode }) {
  const [currentStep, helpers] = useStepHook(React.Children.count(children));

  const {
    goToNextStep,
    goToPrevStep,
    canGoToNextStep,
    canGoToPrevStep,
    setStep,
    reset,
  } = helpers;

  return (
    <Suspense>
      <StepContext.Provider
        value={{
          goToNextStep,
          goToPrevStep,
          canGoToNextStep,
          canGoToPrevStep,
          setStep,
          reset,
          currentStep,
        }}
      >
        <StepsHeader currentStep={currentStep} className="p-10" />
        {React.Children.map(children, (child, index) => {
          if (React.isValidElement(child) && index + 1 === currentStep) {
            return <CardContent>{React.cloneElement(child)}</CardContent>;
          }
          return null;
        })}
      </StepContext.Provider>
    </Suspense>
  );
}
