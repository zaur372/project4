const checkbox = "[type='checkbox']";
const openAccountButton2 = "[id='submit']";

const NewAccountPage ={
    clickCheckbox: async (page) => {
        await page.click(checkbox);
    },
    openAccount: async (page) => {
        await page.click(openAccountButton2);
    },
}

export default NewAccountPage;