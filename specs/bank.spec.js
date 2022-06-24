const { test, expect } = require('@playwright/test');
    const usernameField = "[name='username']";
    const passwordField = "[name='password']";
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
    const listApplications = ".description-car";

test.only('Авторизоваться демо пользователем', async ({page}) => {
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

/* test('Ознокомиться с предложениями по кредитам', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(creditButton);
    await page.click(sentenceButton);
    await page.waitForSelector(listApplications);
    const listApplicationsText = await page.textContent(loc.listApplications);
    assert.strictEqual(listApplicationsText, 'Автокредит на новый автомобиль', 'Переход к предложениями по кредитам не выполнен' );
});

test('Проверить открытие нового счета', async ({page}) => {
    await page.goto('https://idemo.bspb.ru/')
    await page.click(loginButton);
    await page.click(loginOtpButton);
    await page.click(accountsButton);
    await page.click(openAccountButton);
    await page.click(checkbox);
    await page.click(openAccountButton2);
    await page.waitForSelector(loc.newAccount);
    const previousText = await page.textContent(loc.newAccount);
    assert.strictEqual(previousText, 'Открыт новый счёт для операций в RUB, номер счёта:', 'Новый счет не открыт' );
}); */