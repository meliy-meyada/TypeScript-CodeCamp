class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private id: string, public name: string ) {
    // this.id = id;
    // this.name = n;
  }
  describe(this: Department) {
    console.log(`Department (${this.id}: ${this.name})`);
  }
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
}

class AccountingDepartment extends Department {
  constructor(id: string, private reports: string[]){
    super(id, 'Accounting');
  }
  addReport(text: string) {
    this.reports.push(text);
  }
  printReports() {
    console.log(this.reports);
  }
}

const it = new ITDepartment('D1', ['Meya']);

it.addEmployee('Meya');
it.addEmployee('Malee');

// it.employees[2] = 'Mario';

it.describe();
it.name = 'New name';
it.printEmployeeInformattion();

console.log(it);

const accounting = new AccountingDepartment('D2', []);

accounting.addReport('Something went wrong...');
accounting.printReports();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();