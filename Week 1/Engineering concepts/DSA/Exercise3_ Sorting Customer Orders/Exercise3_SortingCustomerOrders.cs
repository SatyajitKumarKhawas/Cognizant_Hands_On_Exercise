using System;

class Order
{
    public int OrderId;
    public string CustomerName;
    public double TotalPrice;

    public Order(int orderId, string customerName, double totalPrice)
    {
        OrderId = orderId;
        CustomerName = customerName;
        TotalPrice = totalPrice;
    }
}

class Program
{
    // Bubble Sort
    static void BubbleSort(Order[] orders)
    {
        int n = orders.Length;

        for (int i = 0; i < n - 1; i++)
        {
            for (int j = 0; j < n - i - 1; j++)
            {
                if (orders[j].TotalPrice > orders[j + 1].TotalPrice)
                {
                    Order temp = orders[j];
                    orders[j] = orders[j + 1];
                    orders[j + 1] = temp;
                }
            }
        }
    }

    // Partition Method for Quick Sort
    static int Partition(Order[] orders, int low, int high)
    {
        double pivot = orders[high].TotalPrice;
        int i = low - 1;

        for (int j = low; j < high; j++)
        {
            if (orders[j].TotalPrice < pivot)
            {
                i++;

                Order temp = orders[i];
                orders[i] = orders[j];
                orders[j] = temp;
            }
        }

        Order temp1 = orders[i + 1];
        orders[i + 1] = orders[high];
        orders[high] = temp1;

        return i + 1;
    }

    // Quick Sort
    static void QuickSort(Order[] orders, int low, int high)
    {
        if (low < high)
        {
            int pi = Partition(orders, low, high);

            QuickSort(orders, low, pi - 1);
            QuickSort(orders, pi + 1, high);
        }
    }

    static void DisplayOrders(Order[] orders)
    {
        foreach (Order order in orders)
        {
            Console.WriteLine(
                $"Order ID: {order.OrderId}, Customer: {order.CustomerName}, Total Price: {order.TotalPrice}");
        }
    }

    static void Main()
    {
        Console.Write("Enter Number of Orders: ");
        int n = Convert.ToInt32(Console.ReadLine());

        Order[] orders1 = new Order[n];
        Order[] orders2 = new Order[n];

        for (int i = 0; i < n; i++)
        {
            Console.WriteLine($"\nEnter Details of Order {i + 1}");

            Console.Write("Enter Order ID: ");
            int id = Convert.ToInt32(Console.ReadLine());

            Console.Write("Enter Customer Name: ");
            string name = Console.ReadLine();

            Console.Write("Enter Total Price: ");
            double price = Convert.ToDouble(Console.ReadLine());

            orders1[i] = new Order(id, name, price);
            orders2[i] = new Order(id, name, price);
        }

        BubbleSort(orders1);

        Console.WriteLine("\n===== Orders Sorted Using Bubble Sort =====");
        DisplayOrders(orders1);

        QuickSort(orders2, 0, orders2.Length - 1);

        Console.WriteLine("\n===== Orders Sorted Using Quick Sort =====");
        DisplayOrders(orders2);
    }
}
