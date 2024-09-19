import { test, expect } from "@playwright/test";
import { AGENTS } from "./constants/header";
import { AJOUTER_AGENT } from "./constants/agents";
import { FIRST_NAME_TEST, LAST_NAME_TEST } from "./constants/global";

test("Check Agent", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/agents");

  await expect(page.getByText(AJOUTER_AGENT)).toBeVisible();
  await expect(page.locator("h3").getByText(AGENTS)).toBeVisible();
});

test("Add Agent", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/agents");
  await expect(page.locator('button[class="disabled"]')).toBeVisible();
  await page.locator('input[id="lastName"]').fill(LAST_NAME_TEST);
  await page.locator('input[id="firstName"]').fill(FIRST_NAME_TEST);
  await expect(page.locator('button[class="disabled"]')).not.toBeVisible();
  await page.locator('button[type="submit"]').click();
  await expect(
    page
      .locator(".agents-container > div")
      .getByText(`${LAST_NAME_TEST} ${FIRST_NAME_TEST}`)
  ).toBeVisible();
});
