using System;
using System.Collections.Generic;

class Product
{
    public int ProductId { get; set; }
    public string ProductName { get; set; }
    public int Quantity { get; set; }
    public double Price { get; set; }

    public Product(int id, string name, int quantity, double price)
    {
        ProductId = id;
        ProductName = name;
        Quantity = quantity;
        Price = price;
    }
}

class InventoryManagement
{
    static Dictionary<int, Product> inventory = new Dictionary<int, Product>();

    static void AddProduct()
    {
        Console.Write("Enter Product ID: ");
        int id = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter Product Name: ");
        string name = Console.ReadLine();

        Console.Write("Enter Quantity: ");
        int quantity = Convert.ToInt32(Console.ReadLine());

        Console.Write("Enter Price: ");
        double price = Convert.ToDouble(Console.ReadLine());

        Product product = new Product(id, name, quantity, price);
        inventory[id] = product;

        Console.WriteLine("Product Added Successfully!");
    }

    static void UpdateProduct()
    {
        Console.Write("Enter Product ID to Update: ");
        int id = Convert.ToInt32(Console.ReadLine());

        if (inventory.ContainsKey(id))
        {
            Console.Write("Enter New Quantity: ");
            int quantity = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter New Price: ");
            double price = Convert.ToDouble(Console.ReadLine());

            inventory[id].Quantity = quantity;
            inventory[id].Price = price;

            Console.WriteLine("Product Updated Successfully!");
        }
        else
        {
            Console.WriteLine("Product Not Found!");
        }
    }

    static void DeleteProduct()
    {
        Console.Write("Enter Product ID to Delete: ");
        int id = Convert.ToInt32(Console.ReadLine());

        if (inventory.Remove(id))
        {
            Console.WriteLine("Product Deleted Successfully!");
        }
        else
        {
            Console.WriteLine("Product Not Found!");
        }
    }

    static void DisplayProducts()
    {
        if (inventory.Count == 0)
        {
            Console.WriteLine("Inventory is Empty!");
            return;
        }

        Console.WriteLine("\nInventory Details:");

        foreach (Product product in inventory.Values)
        {
            Console.WriteLine(
                $"ID: {product.ProductId}, Name: {product.ProductName}, Quantity: {product.Quantity}, Price: {product.Price}");
        }
    }

    static void Main()
    {
        int choice;

        do
        {
            Console.WriteLine("\n===== Inventory Management System =====");
            Console.WriteLine("1. Add Product");
            Console.WriteLine("2. Update Product");
            Console.WriteLine("3. Delete Product");
            Console.WriteLine("4. Display Products");
            Console.WriteLine("5. Exit");

            Console.Write("Enter Your Choice: ");
            choice = Convert.ToInt32(Console.ReadLine());

            switch (choice)
            {
                case 1:
                    AddProduct();
                    break;

                case 2:
                    UpdateProduct();
                    break;

                case 3:
                    DeleteProduct();
                    break;

                case 4:
                    DisplayProducts();
                    break;

                case 5:
                    Console.WriteLine("Exiting Program...");
                    break;

                default:
                    Console.WriteLine("Invalid Choice!");
                    break;
            }

        } while (choice != 5);
    }
}
