const loginButton = "#login-button";
const loginOtpButton = "#login-otp-button";

const AuthPage ={
    login: async (page, link) => {
        await page.goto(link)
        await page.click(loginButton);
        await page.click(loginOtpButton);
    }
}

export default AuthPage;