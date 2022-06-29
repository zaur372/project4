const logOutButton = "#logout-button";
const accountsButton = "#accounts-index";
const home = "#logo";
const creditButton = "#loans";

const MainPage ={
    logout: async (page) => {
        await page.click(logOutButton);
    },
    goAccounts: async (page) => {
        await page.click(accountsButton);
    },
    goHome: async (page) => {
        await page.click(home);
    },
    goLoans: async (page) => {
        await page.click(creditButton);
    },
}

export default MainPage;