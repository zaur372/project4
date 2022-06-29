const openAccountButton = "[href='/accounts/new']";

const AccountPage ={
    goNewAccount: async (page) => {
        await page.click(openAccountButton);
    }
}

export default AccountPage;