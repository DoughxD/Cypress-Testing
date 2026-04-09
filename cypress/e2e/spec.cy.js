import userData from '../fixtures/users/userData.json'
import selectorsList from '../fixtures/users/selectorsList.json'
import LoginPage from '../pages/loginPage'
import MyInfoPage from '../pages/mytInfoPage'
import MenuPage from '../pages/menuPage'


const loginPage = new LoginPage()
const myInfoPage = new MyInfoPage()
const menuPage = new MenuPage()


  it('Login with class', () =>{
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)



  })
  
   it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithWrongUser(userData.userFail.username, userData.userFail.password)

    
   })

  it.only('my info change', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithUser(userData.userSuccess.username, userData.userSuccess.password)
    menuPage.accessPage()
    myInfoPage.myInfoChange()
   
  })





