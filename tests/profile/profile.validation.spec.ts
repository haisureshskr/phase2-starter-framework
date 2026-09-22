import { test, expect } from '../../fixtures/baseFixtures';

//read from JSON
import addresses from '../../data/addresses.json'
import { AddressPage } from '../../pages/AddressPage';

<<<<<<< HEAD
//read from Excel
// import { readExcel } from '../../utils/excel-reader';
// import { AddressData } from '../../utils/types';
// const addresses=readExcel<AddessData>('addresses.xlsx')
=======
const loginData = {
  user: 'anuradha.learn@gmail.com',
  password: 'Play@1234#$',
  baseUrl: 'https://qa-cart.com/',
};

const billingAddress = {
  firstName: 'Anuradha',
  lastName: 'Agarwal',
  street: '123 Test Street',
  city: 'Dubai',
  country: 'AE',
};

// ============================================================
// Shared Login Hook
// ============================================================

test.beforeEach(async ({ page }) => {

    // Navigate to application
    await page.goto(loginData.baseUrl);

    // Login using registered user credentials
    await page.getByRole('textbox', {
        name: 'Username or email address'
    }).fill(loginData.user);

    await page.getByRole('textbox', {
        name: 'Password Required'
    }).fill(loginData.password);

    await page.getByRole('button', {
        name: 'Log in'
    }).click();

    // Verify login succeeded
    await expect(
        page.getByLabel('Account pages')
            .getByRole('link', { name: 'Log out' })
    ).toBeVisible();
});
>>>>>>> 67d5927c1beae166de0ca5150dc243c144b5e3be

// ============================================================
// Billing Address Update Test
// ============================================================
test.describe('Profile Management  @profile', () => {
  addresses.forEach((billingAddress) => {
    test(
      `registered user for ${billingAddress.firstName} in ${billingAddress.city} successfully updates billing address @regression`,
      async ({ loggedInPage: page }) => {


        // --------------------------------------------------------
        // Step 1 - Navigate to Billing Address Page
        // --------------------------------------------------------
        const addressPage = new AddressPage(page)

        await test.step('Navigate to Billing Address page', async () => {

          await addressPage.navigate()

        });

        // --------------------------------------------------------
        // Step 2 - Open Edit Billing Address Form
        // --------------------------------------------------------

        await test.step('Open Edit Billing Address form', async () => {

          await addressPage.openEditForm()

        });

        // --------------------------------------------------------
        // Step 3 - Update Billing Address
        // --------------------------------------------------------

        await test.step('Update billing address details', async () => {

          await addressPage.fillBillingAddress(billingAddress)
          await test.info().attach('Address used', {
body: `${billingAddress.firstName}, ${billingAddress.city}`
})

        });

        // --------------------------------------------------------
        // Step 4 - Save Billing Address
        // --------------------------------------------------------

        await test.step('Save updated billing address', async () => {

          await addressPage.save()

        });

        // --------------------------------------------------------
        // Step 5 - Verify Saved Address
        // --------------------------------------------------------

        await test.step('Verify updated billing address is displayed', async () => {

          await addressPage.verifyAddress(billingAddress)

        }
        )
      }
    )

  }
  )

})
