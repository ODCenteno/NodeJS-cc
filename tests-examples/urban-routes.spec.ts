import { test, expect, type Page } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://02f5c30e-5e85-4811-a4ae-b79e0e5de5ee.serverhub.tripleten-services.com');
});

const DESDE_ITEMS = [
  'East 2nd Street, 601',
  '1300 1st St',
  '4201 Whittier Blvd'
];

const HASTA_ITEMS = [
  '1717 E 7th St',
  '1917 Bay St',
  '1811 E 20th St'
];

test.describe('Create Route', () => {
  test('should allow me to add the address from and to', async ( {page} ) => {
    // Crear localizador
    await page.getByText('Hasta').click();
    const desde = await page.getByPlaceholder('548 S Spring St');
    
    // Insertar dirección
    await desde.fill(DESDE_ITEMS[0]);
    await desde.press('Enter');
    
    await expect(desde.getByTestId('todo-desde')).toEqual(DESDE_ITEMS[0]);
  })
})