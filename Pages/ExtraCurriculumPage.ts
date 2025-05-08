export class ExtraCurriculumPage {
  add_entry: any;
  Activity_name: any;
  Num_of_years: any;
  Leader_role: any;
  Description: any;
  Click_on_add: any;
  Error_message: any;
  Nxt_Page_btn_EC: any;
  page: any;

  constructor(page) {
    this.page = page;
    this.Error_message = page.getByText('Please add at least 2 entries');
    this.add_entry = page.getByRole('button', { name: 'Add Entry' });
    this.Activity_name = page.getByRole('textbox', { name: 'Extracurricular Activity Name' });
    this.Num_of_years = page.locator("//input[@id='mantine-m1dkucr7s']");
    this.Leader_role = page.locator("//*[@id='mantine-4djqne49d']");
    this.Description = page.locator("//*[@id='mantine-uo4d9agwa']");
    this.Click_on_add = page.getByRole('button', { name: 'Add' }); // Adjust based on actual button name
  }

  
  async Add_Activities(ActivityName, Num_of_years, Leader_role, Description) {
    await this.add_entry.waitFor({ state: 'visible' });
    await this.add_entry.click();
    await this.Activity_name.fill(ActivityName);
    // await this.Num_of_years.waitFor({ state: 'visible',timeout: 10000 });
    await this.page.keyboard.press('Tab');
    await this.Num_of_years.click()
    await this.Num_of_years.fill(Num_of_years);
    await this.page.keyboard.press('Tab');
    await this.Leader_role.waitFor({ state: 'visible' ,timeout: 10000});

    await this.Leader_role.click();
    await this.Leader_role.fill(Leader_role);
    //await this.Description.waitFor({ state: 'visible' ,timeout: 10000});
    await this.page.keyboard.press('Tab');
    // await this.Description.click()
    await this.Description.fill(Description);
    await this.page.keyboard.press('Tab');
    await this.Click_on_add.click();
  }
}