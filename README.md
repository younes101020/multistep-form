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

You have to export 2 files available in this repository into your project,
namely: `./src/app/_contexts/StepProvider.tsx` and
`./src/app/_components/StepsHeader.tsx`

### How to start my project from this ?

Clone repository

```bash
git clone git@github.com:younes101020/multistep-form.git
```

Install dependencies

```bash
yarn install
```

Preview with dev environment

```bash
yarn dev
```

## How to use it ?

Wrap your steps in StepProvider. The order of the steps is determined by their
placement within the StepProvider. Example:

```tsx
<StepProvider>
  <Login />
  <Synchronize />
  <CreateTeam />
</StepProvider>
```

Here, Login will be considered as the first step, and CreateTeam will be the
last one.

You can control the step flow directly from your step components using
`useStep()`.

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

You also have to add some description about your step inside `STEP_METADATA`
object you will find it inside `./src/app/_components/StepsHeader.tsx`.

> **_TIPS:_** The component uses React's Context API. When the context is
> updated, all components subscribed to that context will re-render, which can
> impact the user experience, especially when you have many components. I
> recommend placing the StepProvider as low as possible in your component tree
> to minimize this impact.
