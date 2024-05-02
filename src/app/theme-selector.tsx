"use client";

import * as React from "react";
import { useTheme } from "next-themes";

import { Button } from "~/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "~/components/ui/dropdown-menu";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Switch } from "~/components/ui/switch";
import { Label } from "~/components/ui/label";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => setTheme("light")}>
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")}>
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")}>
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function ModeSwitch() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="flex items-center space-x-2">
      <Switch
        id="theme-mode"
        aria-label="theme select"
        checked={theme === "dark" ? true : false}
        onCheckedChange={(checked) => setTheme(checked ? "dark" : "light")}
      />
      <Label>Switch to {theme === "dark" ? "light" : "dark"} mode</Label>
      <span className="sr-only">
        change to {theme === "dark" ? "light" : "dark"} theme
      </span>
    </div>
  );
}
