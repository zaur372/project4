import AuthPage from './authPage.mjs';
import MainPage from './mainPage.mjs';
import LoansPage from './loansPage.mjs';
import AccountPage from './accountPage.mjs';
import NewAccountPage from './NewAccountPage.mjs';
import OtherElements from '../../framework/elements/otherElements.mjs';

const app = () => ({
    Auth: () => ({...AuthPage}),
    Main: () => ({...MainPage}),
    Loan: () => ({...LoansPage}),
    Account: () => ({...AccountPage}),
    NewAccount: () => ({...NewAccountPage}),
    OtherElements: () => ({...OtherElements}),
})

export default app;