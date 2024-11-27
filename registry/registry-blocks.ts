import { Registry } from "@/registry/schema";

export const ui: Registry = [
  {
    name: "multistep-01",
    type: "registry:block",
    registryDependencies: ["input", "button", "card", "label"],
    files: [
      "block/multistep-01/step.tsx",
      "block/multistep-01/step-header.tsx",
      "block/multistep-01/step-form.tsx",
    ],
    dependencies: ["lucide-react"],
  },
];
