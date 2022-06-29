/* const { test, expect } = require('@playwright/test');

    const loginButton = "#login-button";
    const loginOtpButton = "#login-otp-button";
    const welcome = "#user-greeting";
    const logOutButton = "#logout-button";
    const accountsButton = "#accounts-index";
    const openAccountButton = "[href='/accounts/new']";
    const checkbox = "[type='checkbox']";
    const openAccountButton2 = "[id='submit']";
    const newAccount = ".alert-success";
    const home = "#logo";
    const homePageText = "[id='show-all-offers']";
    const creditButton = "#loans";
    const sentenceButton = "#loan-application-btn";
    const offerList = ".page-header";

test('Авторизоваться демо пользователем', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);        
    const welcomeText = await page.locator(welcome);
    await expect(welcomeText).toContainText('Hello World!');
});

test('Выполнить выход из профиля демо пользователя', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(logOutButton);
    const LogInText = await page.locator(loginButton);
    await expect(LogInText).toContainText('Login');
});

test('Проверить переход на вкладку Счета', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(accountsButton);
    const accountPageText = await page.locator(openAccountButton);
    await expect(accountPageText).toContainText('New account');
});

test('Проверить переход на главную страницу', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(accountsButton);
    await page.click(home);
    const homeText = await page.locator(homePageText);
    await expect(homeText).toContainText('View all personal offers'); 
});

test('Ознокомиться с предложениями по кредитам', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(creditButton); 
    await page.click(sentenceButton);
    const locator = page.locator(offerList);
    await expect(locator).toBeVisible();
});

test('Проверить открытие нового счета', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(accountsButton);
    await page.click(openAccountButton);
    await page.click(checkbox);
    await page.click(openAccountButton2);
    const locator = page.locator(newAccount);
    await expect(locator).toBeVisible();
});  
 */