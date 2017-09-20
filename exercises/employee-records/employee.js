var employees = [];

function Employee(name, jobTitle, salary, status) {
    this.name = name;
    this.jobTitle = jobTitle;
    this.salary = salary;
    this.status = status || "Full Time";
}

Employee.prototype.printEmployeeForm = function() {
    console.log("Name:", this.name + "\n" + "Job Title:", this.jobTitle + "\n" + "Salary:", this.salary + "\n" + "Status:", this.status);
};

var kit = new Employee("Kit", "Web Developer", "$82,500", "Contract");
var daniel = new Employee("Daniel", "Project Manager", "$55,000");
var caitlin = new Employee("Caitlin", "Project Manager", "$55,000");

kit.printEmployeeForm();