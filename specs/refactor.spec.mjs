import { test, expect } from '@playwright/test';
import app from '../framework/pages/index.mjs';
const link = 'https://idemo.bspb.ru/';

test('Авторизоваться демо пользователем', async ({page}) => {
    await app().Auth().login(page, link);      
    const welcomeText = await app().OtherElements().getWelcome(page);
    await expect(welcomeText).toContainText('Hello World!');
});

test('Выполнить выход из профиля демо пользователя', async ({page}) => {
    await app().Auth().login(page, link);
    await app().Main().logout(page);
    const LogInText = await app().OtherElements().getLoginButton(page);
    await expect(LogInText).toContainText('Login');
});

test('Проверить переход на вкладку Счета', async ({page}) => {
    await app().Auth().login(page, link);
    await app().Main().goAccounts(page);
    const accountPageText = await app().OtherElements().getAccount(page);
    await expect(accountPageText).toContainText('New account');
});

test('Проверить переход на главную страницу', async ({page}) => {
    await app().Auth().login(page, link);
    await app().Main().goAccounts(page);
    await app().Main().goHome(page);
    const homeText = await app().OtherElements().getHome(page);
    await expect(homeText).toContainText('View all personal offers'); 
});

test('Ознокомиться с предложениями по кредитам', async ({page}) => {
    await app().Auth().login(page, link);
    await app().Main().goLoans(page); 
    await app().Loan().goLoanApplications(page);
    const homeText = await app().OtherElements().getOffer(page)
    await expect(homeText).toBeVisible();
});

test('Проверить открытие нового счета', async ({page}) => {
    await app().Auth().login(page, link);
    await app().Main().goAccounts(page);
    await app().Account().goNewAccount(page);
    await app().NewAccount().clickCheckbox(page);
    await app().NewAccount().openAccount(page);
    const newAccountText = await app().OtherElements().getNewAccount(page)
    await expect(newAccountText).toBeVisible();
});