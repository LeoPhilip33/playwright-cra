import { test, expect } from "@playwright/test";
import { APRES, AVANT } from "./constants/home";

test("Check home", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/");

  await expect(page.getByText(AVANT)).toBeVisible();
  await expect(page.getByText(APRES)).toBeVisible();

  await page.getByText(AVANT).click();
  await expect(page.locator('button[disabled="true"]')).toBeVisible();

  await page.getByText(APRES).dblclick();
  await expect(page.locator('button[disabled="true"]')).toBeVisible();
});
