class Department {
  // private id: string;
  // private name: string;
  private employees: string[] = [];

  constructor(private readonly id: string, public name: string ) {
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

const accounting = new Department('D1','Accounting');

accounting.addEmployee('Meya');
accounting.addEmployee('Malee');

// accounting.employees[2] = 'Mario';

accounting.describe();
accounting.name = 'New name';
accounting.printEmployeeInformattion();
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe };

// accountingCopy.describe();