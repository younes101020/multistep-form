# [Shadcn/ui x NextJS 15 multistep form](https://multistepform.younesfakallah.fr) &middot; [![Author Younès](https://img.shields.io/badge/Author-Younès-%3C%3E)](https://younesfakallah.fr/blog)

A multi-step form for Next.js built on top of [shadcn/ui](https://ui.shadcn.com)
complete with desktop and mobile responsiveness.

## Features

- ⚙️ URL state based
- 🎨 @shadcn based
- ♾️ 1 to many step
- 🍳 Easy to use

## Tech/framework used

- Next.js 15
- React Context
- Shadcn/ui
- Tailwind CSS
- TypeScript

## Use cases

### How to add it into my project ?

You can install the component using the Shadcn CLI
```bash
npx shadcn add https://multistep-form-sooty.vercel.app/registry/multistep-01.json
```

Or you can choose do it manually by exporting these 2 files available in this
repository to your project, namely: `./src/app/_contexts/StepProvider.tsx` and
`./src/app/_components/StepsHeader.tsx`

## How to use it ?

Wrap your steps inside `StepProvider`. The order of the steps is determined by
their placement within the StepProvider. Example:

```tsx
<StepProvider>
  <Login /> // First step
  <Synchronize /> // Second step
  <CreateTeam /> // Last step
</StepProvider>
```

You can control the step flow directly from your step components using
`useStep`.

```tsx
export function Login() {
  const {
    goToNextStep,
    goToPrevStep,
    canGoToNextStep,
    canGoToPrevStep,
    setStep,
    reset,
    currentStep,
  } = useStep();
  return <Button onClick={goToNextStep}>Next step</Button>;
}
```

You also have to add some description about your steps inside `headerData` object
you will find it inside `./src/app/_components/StepsHeader.tsx`.


> **_TIPS:_** The component uses React's Context API. When the context is
> updated, all components subscribed to that context will re-render, which can
> impact the user experience, especially when you have many components. I
> recommend placing the StepProvider as low as possible in your component tree
> to minimize this impact.
