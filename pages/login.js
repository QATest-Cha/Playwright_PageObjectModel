
exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page
        this.username_textbox = page.getByLabel('Username')
        this.password_textbox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
        this.header = page.getByRole('heading', { name: 'Welcome to the Secure Area.' })
        this.logout_buton = page.getByRole('link', { name: 'Logout' })
    }
    //Navigate to Login Page
    async gotoLoginPage() {
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }

    //Enter User name and password
    async login(username, password) {
        await this.username_textbox.fill(username)
        await this.password_textbox.fill(password)
        await this.login_button.click()
    }

    //Log out 
    async homePagelogout() {
        await this.header.getByRole()
        await this.logout_buton.click()
        
    }
}