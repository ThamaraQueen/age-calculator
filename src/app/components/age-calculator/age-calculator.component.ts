import { Component } from '@angular/core';

@Component({
  selector: 'app-age-calculator',
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.css']
})
export class AgeCalculatorComponent {
  day!: number;
  month!: number;
  year!: number;

  years: number = 0;
  months: number = 0;
  days: number = 0;

  private targetYears: number = 0;
  private targetMonths: number = 0;
  private targetDays: number = 0;

  calculateAge() {
    const birthDate = new Date(this.year, this.month - 1, this.day); // Create a birthDate from the form inputs
    const currentDate = new Date(); // Get the current date

    // Validation: Check if the birthDate is valid and not in the future
    if (birthDate > currentDate || this.month < 1 || this.month > 12 || this.day < 1 || this.day > 31) {
      alert("Please enter a valid date.");
      return;
    }

    let ageInMilliseconds = currentDate.getTime() - birthDate.getTime(); // Get the difference in milliseconds
    let ageDate = new Date(ageInMilliseconds); // Convert milliseconds to a Date object

    this.targetYears = ageDate.getUTCFullYear() - 1970; // Subtract epoch year to get the age in years
    this.targetMonths = ageDate.getUTCMonth(); // Get the age in months
    this.targetDays = ageDate.getUTCDate() - 1; // Get the age in days

    this.animateAge();
  }

  private animateAge() {
    this.years = 0;
    this.months = 0;
    this.days = 0;

    const yearsInterval = setInterval(() => {
      if (this.years < this.targetYears) {
        this.years++;
      } else {
        clearInterval(yearsInterval);
      }
    }, 100);

    const monthsInterval = setInterval(() => {
      if (this.months < this.targetMonths) {
        this.months++;
      } else {
        clearInterval(monthsInterval);
      }
    }, 100);

    const daysInterval = setInterval(() => {
      if (this.days < this.targetDays) {
        this.days++;
      } else {
        clearInterval(daysInterval);
      }
    }, 100);
  }
}
