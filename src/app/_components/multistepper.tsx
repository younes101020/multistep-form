"use client";

import { Card } from "@/components/ui/card";
import { StepProvider } from "../_contexts/Multistepper";
import { Login } from "./loginform";

export function MultiStepper() {
  return (
    <Card className="w-[90%] lg:w-[60%] rounded-none">
      <StepProvider>
        <Login />
        <Login />
        <Login />
      </StepProvider>
    </Card>
  );
}
