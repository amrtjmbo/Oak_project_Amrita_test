// UtilityPage.ts

export class UtilityPage {
    // Generate a random username
    Generate_username() {
      const randomNum = Math.floor(Math.random() * 1000);
      return `user_${randomNum}@gmail.com`;
    }
  
    // Generate a random first name
    Generate_firstname(){
      const randomNum = Math.floor(Math.random() * 1000);
      return `usertest_${randomNum}`;
    }
  
    // Generate a random last name
    Generate_lastname() {
      const randomNum = Math.floor(Math.random() * 1000);
      return `testing_${randomNum}`;
    }
  
    // Generate a random 10-digit mobile number starting with 7
    Generate_mobile() {
      const min = 7000000000;
      const max = 7999999999;
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  
    // Generate a random password
    Generate_password() {
      const randomNum = Math.floor(Math.random() * 1000);
      return `Mine2201@_${randomNum}`;
    }
  }
  