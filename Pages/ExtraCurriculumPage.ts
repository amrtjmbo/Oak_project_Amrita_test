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
    this.Num_of_years = page.getByRole('textbox', { name: 'Total Number of Years Involved' });
    this.Leader_role = page.getByRole('textbox', { name: 'List any leadership roles,' });
    this.Description = page.getByRole('textbox', { name: 'Description of Involvement' })
    this.Click_on_add = page.getByRole('button', { name: 'Add' }); 
  }

  
  async Add_Activities(ActivityName, Num_of_years, Leader_role, Description) {
    await this.add_entry.waitFor({ state: 'visible' });
    await this.add_entry.click();
    await this.Activity_name.click();
    await this.Activity_name.fill(ActivityName);
    await this.Activity_name.press('Tab');
    await this.Num_of_years.click()
    await this.Num_of_years.fill(Num_of_years);
    await this.Num_of_years.press('Tab');
    await this.Leader_role.click();
    await this.Leader_role.fill(Leader_role);
    await this.Leader_role.press('Tab');
    await this.Description.click()
    await this.Description.fill(Description);
    await this.Description.press('Tab');
    await this.Click_on_add.first().click();
}}