import { test, expect } from "@playwright/test";
import { ACCUEIL, AGENTS, CONGES, RAPPORT_ACTIVITE } from "./constants/header";

test("Check header", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/");

  await expect(page.getByText(ACCUEIL)).toBeVisible();
  await expect(page.getByText(AGENTS)).toBeVisible();
  await expect(page.getByText(RAPPORT_ACTIVITE)).toBeVisible();
  await expect(page.getByText(CONGES)).toBeVisible();
});
