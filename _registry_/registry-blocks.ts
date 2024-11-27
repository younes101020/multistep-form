import { Registry } from "./schema";

export const ui: Registry = [
  {
    name: "multistep-01",
    type: "registry:block",
    registryDependencies: ["input", "button", "card", "label"],
    files: [
      "block/multistep-01/step.tsx",
      "block/multistep-01/step-header.tsx",
    ],
    dependencies: ["lucide-react"],
  },
];
