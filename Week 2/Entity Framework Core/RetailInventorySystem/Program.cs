using Microsoft.EntityFrameworkCore;
using RetailInventory.Data;
using RetailInventory.Models;

using var context = new InventoryContext();

// Retrieve all products
Console.WriteLine("All Products:");
var products = await context.Products.ToListAsync();

foreach (var p in products)
{
    Console.WriteLine($"{p.ProductName} - ₹{p.Price}");
}

// Find product by ID
var product = await context.Products.FindAsync(1);

if (product != null)
{
    Console.WriteLine($"\nFound: {product.ProductName}");
}
else
{
    Console.WriteLine("\nProduct not found.");
}

// Find first expensive product
var expensive = await context.Products
    .FirstOrDefaultAsync(p => p.Price > 50000);

if (expensive != null)
{
    Console.WriteLine($"Expensive: {expensive.ProductName}");
}
else
{
    Console.WriteLine("No expensive product found.");
}