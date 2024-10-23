exports.LoginPage= class LoginPage{
  
    constructor(page){
        this.page = page
        this.userName_textBox = page.getByLabel('Username')
        this.password_textBox = page.getByLabel('Password')
        this.login_button = page.getByRole('button', { name: 'Login' })
    }
    
    async gotoLoginURL(){
        await this.page.goto('https://the-internet.herokuapp.com/login');
    }
    async fillLogin(us,pwd){
        await this.userName_textBox.fill(us)
        await this.password_textBox.fill(pwd)
        await this.login_button.click()
    }

}





