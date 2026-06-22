using System;

class Employee
{
    public int EmployeeId;
    public string Name;
    public string Position;
    public double Salary;

    public Employee(int employeeId, string name, string position, double salary)
    {
        EmployeeId = employeeId;
        Name = name;
        Position = position;
        Salary = salary;
    }
}

class Program
{
    static Employee[] employees = new Employee[100];
    static int count = 0;

    static void AddEmployee()
    {
        Console.Write("Enter Employee ID: ");
        int id = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter Name: ");
        string name = Console.ReadLine();

        Console.Write("Enter Position: ");
        string position = Console.ReadLine();

        Console.Write("Enter Salary: ");
        double salary = Convert.ToDouble(Console.ReadLine());

        employees[count] = new Employee(id, name, position, salary);
        count++;

        Console.WriteLine("Employee Added Successfully.");
    }

    static void SearchEmployee()
    {
        Console.Write("Enter Employee ID to Search: ");
        int id = Convert.ToInt32(Console.ReadLine());

        for (int i = 0; i < count; i++)
        {
            if (employees[i].EmployeeId == id)
            {
                Console.WriteLine("Employee Found");
                Console.WriteLine("ID: " + employees[i].EmployeeId);
                Console.WriteLine("Name: " + employees[i].Name);
                Console.WriteLine("Position: " + employees[i].Position);
                Console.WriteLine("Salary: " + employees[i].Salary);
                return;
            }
        }

        Console.WriteLine("Employee Not Found.");
    }

    static void TraverseEmployees()
    {
        if (count == 0)
        {
            Console.WriteLine("No Employees Found.");
            return;
        }

        Console.WriteLine("\nEmployee Records:");

        for (int i = 0; i < count; i++)
        {
            Console.WriteLine(
                $"ID: {employees[i].EmployeeId}, Name: {employees[i].Name}, Position: {employees[i].Position}, Salary: {employees[i].Salary}");
        }
    }

    static void DeleteEmployee()
    {
        Console.Write("Enter Employee ID to Delete: ");
        int id = Convert.ToInt32(Console.ReadLine());

        int index = -1;

        for (int i = 0; i < count; i++)
        {
            if (employees[i].EmployeeId == id)
            {
                index = i;
                break;
            }
        }

        if (index == -1)
        {
            Console.WriteLine("Employee Not Found.");
            return;
        }

        for (int i = index; i < count - 1; i++)
        {
            employees[i] = employees[i + 1];
        }

        count--;

        Console.WriteLine("Employee Deleted Successfully.");
    }

    static void Main()
    {
        while (true)
        {
            Console.WriteLine("\n1. Add Employee");
            Console.WriteLine("2. Search Employee");
            Console.WriteLine("3. Display Employees");
            Console.WriteLine("4. Delete Employee");
            Console.WriteLine("5. Exit");

            Console.Write("Enter Choice: ");
            int choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    AddEmployee();
                    break;

                case 2:
                    SearchEmployee();
                    break;

                case 3:
                    TraverseEmployees();
                    break;

                case 4:
                    DeleteEmployee();
                    break;

                case 5:
                    return;

                default:
                    Console.WriteLine("Invalid Choice.");
                    break;
            }
        }
    }
}
