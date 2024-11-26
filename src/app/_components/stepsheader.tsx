import { CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export const STEP_METADATA = [
  {
    title: "First step",
    description: "This will blabla blabla blabla",
  },
  {
    title: "Second step",
    description: "This will blabla blabla blabla",
  },
  {
    title: "Third step",
    description: "This will blabla blabla blabla",
  },
] as const;

function BounceIndicator() {
  return (
    <span className="relative flex h-2 w-2 pt-[.25rem]">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
    </span>
  );
}

export function StepsHeader({
  currentStep,
  className,
}: {
  currentStep: number;
  className?: string;
}) {
  return (
    <CardHeader
      className={cn(
        "flex md:flex-row gap-8 md:gap-4 justify-around mt-8",
        className,
      )}
    >
      {STEP_METADATA.map((step, i) => (
        <div
          key={i}
          className={`w-56 ${i + 1 !== currentStep && "opacity-40"} relative`}
        >
          <CardTitle className="flex gap-2 font-mono">
            <div className="z-20">{step.title}</div>
            {i + 1 === currentStep && <BounceIndicator />}
          </CardTitle>
          <CardDescription className="italic">
            {step.description}
          </CardDescription>
          <div
            className={`
              absolute top-[-2rem] left-[-.8rem] text-muted-foreground font-bold text-6xl opacity-30
              before:content-[''] 
              before:absolute 
              before:w-4 
            `}
          >
            {i + 1}
          </div>
        </div>
      ))}
    </CardHeader>
  );
}
