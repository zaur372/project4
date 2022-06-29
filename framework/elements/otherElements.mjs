const welcome = "#user-greeting";
const loginButton = "#login-button";
const openAccountButton = "[href='/accounts/new']";
const newAccount = ".alert-success";
const homePageText = "[id='show-all-offers']";
const offerList = ".page-header"; 

const OtherElements ={
    getWelcome: async (page) => {
        return await page.locator(welcome);
    },
    getLoginButton: async (page) => {
        return await page.locator(loginButton);
    },
    getAccount: async (page) => {
        return await page.locator(openAccountButton);
    },
    getHome: async (page) => {
        return await page.locator(homePageText);
    },
    getOffer: async (page) => {
        return await page.locator(offerList);
    },
    getNewAccount: async (page) => {
        return await page.locator(newAccount);
    },
}

export default OtherElements;