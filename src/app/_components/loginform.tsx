import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import { useStep } from "../_contexts/Multistepper";

export function Login() {
  const { goToNextStep, canGoToPrevStep, goToPrevStep, canGoToNextStep } =
    useStep();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (canGoToNextStep) {
      goToNextStep();
    } else {
      // last step submit handling
    }
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email" className="block text-sm font-medium">
          Email
        </Label>
        <div className="mt-1">
          <Input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            maxLength={50}
            className="appearance-none relative block w-full px-3 py-2 border focus:z-10 sm:text-sm"
            placeholder="Enter your email"
          />
        </div>
      </div>

      <div>
        <Label htmlFor="password" className="block text-sm font-medium">
          Password
        </Label>
        <div className="mt-1">
          <Input
            id="password"
            name="password"
            type="password"
            required
            minLength={8}
            maxLength={100}
            className="appearance-none relative block w-full px-3 py-2 border focus:outline-none focus:z-10 sm:text-sm"
            placeholder="Enter your password"
          />
        </div>
      </div>

      <CardFooter className="flex px-0 pt-8 justify-between">
        {canGoToPrevStep && (
          <Button onClick={goToPrevStep} className="bg-secondary">
            <ChevronLeft /> Previous
          </Button>
        )}
        <Button type="submit">
          {canGoToNextStep ? "Next" : "Finish"}
          <ChevronRight />
        </Button>
      </CardFooter>
    </form>
  );
}
