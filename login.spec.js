import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/login_page'

test('test', async ({ page }) => {

  const Login = new LoginPage(page)

  await Login.gotoLoginURL()
  await Login.fillLogin("tomsmith","SuperSecretPassword!")
  
}); 