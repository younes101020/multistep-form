"use client";

import { Card } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "next-themes";

export function ToggleTheme() {
  const { setTheme } = useTheme();
  return (
    <header className="flex items-center justify-end p-2 absolute right-0">
      <Card className="space-x-2 px-5 py-2 rounded-none">
        <Switch
          id="theme"
          onClick={() =>
            setTheme(theme => (theme === "light" ? "dark" : "light"))
          }
        />
      </Card>
    </header>
  );
}
