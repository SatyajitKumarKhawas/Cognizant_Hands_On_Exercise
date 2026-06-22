using System;

class Product
{
    public int ProductId;
    public string ProductName;
    public string Category;

    public Product(int productId, string productName, string category)
    {
        ProductId = productId;
        ProductName = productName;
        Category = category;
    }
}

class Program
{
    // Linear Search
    static int LinearSearch(Product[] products, int searchId)
    {
        for (int i = 0; i < products.Length; i++)
        {
            if (products[i].ProductId == searchId)
            {
                return i;
            }
        }
        return -1;
    }

    // Binary Search
    static int BinarySearch(Product[] products, int searchId)
    {
        int low = 0;
        int high = products.Length - 1;

        while (low <= high)
        {
            int mid = (low + high) / 2;

            if (products[mid].ProductId == searchId)
            {
                return mid;
            }
            else if (products[mid].ProductId < searchId)
            {
                low = mid + 1;
            }
            else
            {
                high = mid - 1;
            }
        }

        return -1;
    }

    // Sort products by ProductId for Binary Search
    static void SortProducts(Product[] products)
    {
        for (int i = 0; i < products.Length - 1; i++)
        {
            for (int j = 0; j < products.Length - i - 1; j++)
            {
                if (products[j].ProductId > products[j + 1].ProductId)
                {
                    Product temp = products[j];
                    products[j] = products[j + 1];
                    products[j + 1] = temp;
                }
            }
        }
    }

    static void Main()
    {
        Console.Write("Enter Number of Products: ");
        int n = Convert.ToInt32(Console.ReadLine());

        Product[] products = new Product[n];

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine($"\nEnter Details of Product {i + 1}");

            Console.Write("Enter Product ID: ");
            int id = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Product Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Category: ");
            string category = Console.ReadLine();

            products[i] = new Product(id, name, category);
        }

        // Sort array before Binary Search
        SortProducts(products);

        Console.Write("\nEnter Product ID to Search: ");
        int searchId = Convert.ToInt32(Console.ReadLine());

        // Linear Search
        int linearResult = LinearSearch(products, searchId);

        if (linearResult != -1)
        {
            Console.WriteLine("\nProduct Found using Linear Search");
            Console.WriteLine("Product ID: " + products[linearResult].ProductId);
            Console.WriteLine("Product Name: " + products[linearResult].ProductName);
            Console.WriteLine("Category: " + products[linearResult].Category);
        }
        else
        {
            Console.WriteLine("\nProduct Not Found using Linear Search");
        }

        // Binary Search
        int binaryResult = BinarySearch(products, searchId);

        if (binaryResult != -1)
        {
            Console.WriteLine("\nProduct Found using Binary Search");
            Console.WriteLine("Product ID: " + products[binaryResult].ProductId);
            Console.WriteLine("Product Name: " + products[binaryResult].ProductName);
            Console.WriteLine("Category: " + products[binaryResult].Category);
        }
        else
        {
            Console.WriteLine("\nProduct Not Found using Binary Search");
        }
    }
}
