import { test, expect } from "@playwright/test";
import { AJOUTER } from "./constants/global";
import {
  AGENT_REQUIS,
  DATE_DEBUT,
  DATE_DEBUT_REQUIS,
  DATE_FIN,
  DATE_FIN_REQUIS,
  ELEMENTS_REALISES_REQUIS_COMPORTER_10_CARACTERES,
  PROJET_REQUIS_COMPORTER_3_CARACTERES,
  REPORTER_ACTIVITE,
} from "./constants/activity-report";

test("Check Activity Report", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/activity-report");

  await expect(page.getByText(AJOUTER)).toBeVisible();
  await expect(page.getByText(REPORTER_ACTIVITE)).toBeVisible();
  await expect(page.getByText(DATE_DEBUT)).toBeVisible();
  await expect(page.getByText(DATE_FIN)).toBeVisible();
});

test("Check activity errors", async ({ page }) => {
  await page.goto("https://operation-cra.vercel.app/activity-report");

  await page.locator('select[name="agents"]').click();
  await page.locator('input[id="project"]').click();
  await page.locator('input[id="startDate"]').click();
  await page.locator('input[id="endDate"]').click();
  await page.locator('textarea[id="activity"]').click();
  await page.locator('select[name="agents"]').click();

  await expect(page.getByText(AGENT_REQUIS)).toBeVisible();
  await expect(page.getByText(DATE_DEBUT_REQUIS)).toBeVisible();
  await expect(page.getByText(DATE_FIN_REQUIS)).toBeVisible();
  await expect(
    page.getByText(ELEMENTS_REALISES_REQUIS_COMPORTER_10_CARACTERES)
  ).toBeVisible();
  await expect(
    page.getByText(PROJET_REQUIS_COMPORTER_3_CARACTERES)
  ).toBeVisible();
});
