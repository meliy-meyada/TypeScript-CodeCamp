class Department {
  public name: string;
  private employees: string[] = [];

  constructor( n: string ) {
    this.name = n;
  }
  describe(this: Department) {
    console.log('Department: ' +  this.name);
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

const accounting = new Department('Accounting');

accounting.addEmployee('Meya');
accounting.addEmployee('Malee');

// accounting.employees[2] = 'Mario';

accounting.describe();
accounting.name = 'New name';
accounting.printEmployeeInformattion();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();