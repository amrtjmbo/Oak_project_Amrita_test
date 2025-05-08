import { expect } from "@playwright/test";
import { count } from "console";

export class LoginPage{
page: any;
logo: any;
    login_btn: any;
    email: any;
    nxt_btn: any;
    firstname: any;
    lastname: any;
    mobile: any;
    Password: any;
    Click_checkbox: any;
    submit: any;
    country_code: any;
    India: any;
    street: any;
    state: any;
    city: any;
    zip: any;
    country: any;
    Next_page: any;
    state_name: any;
    country_name: any;

constructor(page) {
    this.page=page;
    this.logo =page.locator("//div[@class='m_4451eb3a mantine-Center-root']");
    this.login_btn= page.getByRole('link', { name: 'Login' });
    this.email=page.getByRole('textbox', { name: 'Email Address' });
    this.nxt_btn=page.getByRole('button', { name: 'Next' });
    this.firstname=page.getByRole('textbox', { name: 'First Name' });
    this.lastname=page.getByRole('textbox', { name: 'Last Name' });
    this.country_code=page.getByRole('button', { name: 'United States: +' });
    this.India=page.getByText('India', { exact: true });
    this.mobile=page.getByRole('textbox', { name: '1 (702) 123-' });
    this.Password=page.getByRole('textbox', { name: 'Create a Password' });
    this.Click_checkbox=page.getByRole('checkbox', { name: 'I confirm that I am at least' });
    this.submit=page.getByRole('button', { name: 'Submit' });
    this.street=page.getByRole('textbox', { name: 'Street Address', exact: true });
    this.state=page.getByRole('textbox', { name: 'State (Full)' });
    this.state_name=page.getByRole('option', { name: 'Alabama' });
    this.city=page.getByRole('textbox', { name: 'City' });
    this.zip=page.getByRole('textbox', { name: 'Zip Code' });
    this.country=page.getByRole('textbox', { name: 'Country' });
    this.country_name=page.getByText('United States of America');
    this.Next_page=page.locator("//span[text()='Next Page']");
}

async Click_on_Login(){

    await this.login_btn.click();

}

async click_on_email(Username){
    await this.email.fill(Username);

}

async Click_On_Nxt_btn(){

    await this.nxt_btn.click();

}

async Create_new_account(firstname,lastname,mobile_number,Password)

{
await this.firstname.fill(firstname);
await this.lastname.fill(lastname);
await this.country_code.click();
await this.India.click();
await this.mobile.fill(String(mobile_number));
await this.Password.fill(Password);
await this.Click_checkbox.click()
await this.submit.click();

}

async Lets_get_to_know(streetname,city,zip){

    await this.street.click();
    await this.street.fill(streetname);
    await this.state.click();
    await this.state_name.click();
    await this.city.click();
    await this.city.fill(city);
    await this.zip.click();
    await this.zip.fill(zip);
    await this.country.click();
   await this.country_name.click();
    await this.Next_page.click();
}
    
}


