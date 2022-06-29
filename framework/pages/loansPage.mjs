const sentenceButton = "#loan-application-btn";

const LoansPage ={
    goLoanApplications: async (page) => {
        await page.click(sentenceButton);
    }
}

export default LoansPage;