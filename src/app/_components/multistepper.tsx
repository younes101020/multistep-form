"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { StepProvider } from "../_contexts/Multistepper";
import { Login } from "./loginform";

export function MultiStepper() {
  return (
    <Card className="w-[90%] lg:w-[60%] rounded-none">
      <CardTitle className="flex justify-center">
        <h1 className="border border-t-0 p-4 text-2xl font-thin italic underline decoration-primary underline-offset-4">
          Multi Stepper
        </h1>
      </CardTitle><StepProvider>
          <Login />
          <Login />
          <Login />
        </StepProvider>

    </Card>
  );
}
