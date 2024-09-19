import { test, expect } from "@playwright/test";
import { POSER_ABSENCE } from "./constants/leaves";
import { ENVOYER } from "./constants/global";

test("Check leaves", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/leave");

  await expect(page.getByText(POSER_ABSENCE)).toBeVisible();
  await expect(page.getByText(ENVOYER)).toBeVisible();
});
