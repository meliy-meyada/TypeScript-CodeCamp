abstract class Department {
  static fiscalYear = 2023;
  // private id: string;
  // private name: string;
  protected employees: string[] = [];

  constructor( protected readonly id: string, public name: string ) {
    // this.id = id;
    // this.name = n;
    // console.log(this.fiscalYear);
  }
  static createEmployee(name: string){
    return {name: name};
  }
  abstract describe(this: Department): void;

  addEmployee(employee: string){
    // Validation etc
    this.employees.push(employee);
  }
  printEmployeeInformattion(){
    console.log(this.employees.length);
    console.log(this.employees);
  }
} 

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]){
    super(id, 'IT');
    this.admins = admins;
  }
  describe(){
      console.log('IT Department -ID: ' + this.id);
  }
}
class AccountingDepartment extends Department {
  describe(this: Department): void {
    throw new Error("Method not implemented.");
  }
  private lastReport: string;

  get mostRecentReport(){
    if(this.lastReport){
      return this,this.lastReport;

    }
    throw new Error('No report found.');
  }

  set mostRecentReport(value: string){
    if(!value){
      throw new Error('Please pass in a valid value!');
    }
    this.addReport(value)
  }

  constructor(id: string, private reports: string[]){
    super(id, 'Accounting');
    this.lastReport = reports[0];
  }
  discribe() { 
    console.log('Accounting Department - ID: ' + this.id);

  }
  addEmployee(name: string) {
      if (name === 'Meya') {
        return;
      }
      this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  printReports() {
    console.log(this.reports);
  }
}

const employee1 = Department.createEmployee('Meya');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('D1', ['Meya']);

it.addEmployee('Meya');
it.addEmployee('Malee');

// it.employees[2] = 'Mario';

it.describe();
it.name = 'New name';
it.printEmployeeInformattion();

console.log(it);

const accounting = new AccountingDepartment('D2', []);

accounting.mostRecentReport = 'Year End Report';
accounting.addReport('Something went wrong...');
console.log(accounting.mostRecentReport);

accounting.addEmployee('Meya');
accounting.addEmployee('Malee');

accounting.describe();
// accounting.printReports();
// accounting.printEmployeeInformattion();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();