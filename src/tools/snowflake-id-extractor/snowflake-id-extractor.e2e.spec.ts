/**
 * author https://github.com/antegral
 * form https://github.com/CorentinTh/it-tools/pull/1211
 */
import { expect, test } from '@playwright/test';

test.describe('Tool - Snowflake id extractor', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/snowflake-id-extractor');
  });

  test('Has correct title', async ({ page }) => {
    await expect(page).toHaveTitle('Snowflake id extractor - IT Tools');
  });

  test('', async ({ page }) => {

  });
});