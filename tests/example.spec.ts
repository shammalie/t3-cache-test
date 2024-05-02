import { test, expect } from "@playwright/test";

test("test theme change", async ({ page }) => {
  await page.goto("http://localhost:3000/");

  await expect(page).toHaveURL("http://localhost:3000");

  await expect(page.locator("h1")).toContainText("Hello World!");
});
