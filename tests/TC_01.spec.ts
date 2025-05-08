import { test, expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';
import dotenv from 'dotenv';
import path from 'path';
import { ExtraCurriculumPage } from '../Pages/ExtraCurriculumPage';
import { UtilityPage } from '../Pages/UtilityPage';

dotenv.config({ path: path.resolve(__dirname, '..', '.env') });

const utility = new UtilityPage();

let Base_URL: string = String(process.env.Base_URL);
let firstname = utility.Generate_firstname();
let lastname = utility.Generate_lastname();
let mobile = utility.Generate_mobile();
let password = utility.Generate_password();
let street: string = String(process.env.street);
let city: string = String(process.env.city);
let zip: string = String(process.env.zip);
let Email_id = utility.Generate_username();

test('Register New user', async ({ page }) => {
  // Navigate to the base URL
  await page.goto(Base_URL);

  // Create an instance of LoginPage and interact with the login form
  const login = new LoginPage(page);
  await expect(login.logo).toBeVisible();
  await login.Click_on_Login();
  await login.click_on_email(Email_id);
  await login.Click_On_Nxt_btn();
  await login.Create_new_account(firstname, lastname, mobile, password);
  await page.waitForTimeout(2000);
  await login.Lets_get_to_know(street, city, zip);


  // Verify ExtraCurriculum field is present and has the expected error message
  await login.Click_On_Nxt_btn();
  const extraCurriculumPage = new ExtraCurriculumPage(page);
  await expect(extraCurriculumPage.Error_message).toHaveText("Please add at least 2 entries");

  // Parse activities from the environment variable and add them
  const activities = JSON.parse(process.env.ACTIVITIES ?? '[]');

  for (const activity of activities) {
   
      await extraCurriculumPage.Add_Activities(
      activity.activityName,
      activity.numOfYears.toString(),
      activity.leaderRole ? 'Yes' : 'No', // Assuming leaderRole is a boolean
      activity.description
    );
  }
});
