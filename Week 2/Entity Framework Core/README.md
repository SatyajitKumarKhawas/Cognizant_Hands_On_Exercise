# Retail Inventory System using EF Core

## Overview

This project demonstrates the basics of Entity Framework Core using a Retail Inventory Management System. It performs database creation, data insertion, and data retrieval using SQL Server and EF Core.

## Technology Stack

- C#
- .NET Console Application
- Entity Framework Core
- SQL Server Express
- SQL Server Management Studio (SSMS)

## Features

### Lab 1: Understanding ORM
- Created .NET Console Application
- Installed EF Core packages
- Understood Object Relational Mapping (ORM)

### Lab 2: Database Context
- Created Product model
- Created Category model
- Configured InventoryContext (DbContext)
- Connected to SQL Server

### Lab 3: EF Core Migrations
- Created Initial Migration
- Applied Migration
- Generated RetailInventoryDB database

### Lab 4: Insert Data
- Added Categories
- Added Products
- Saved records using EF Core

### Lab 5: Retrieve Data
- Displayed all products
- Retrieved product by ID
- Retrieved first expensive product using FirstOrDefault()

## Project Structure

```
RetailInventory
│
├── Data
│   └── InventoryContext.cs
│
├── Models
│   ├── Product.cs
│   └── Category.cs
│
├── Migrations
│
├── Program.cs
│
└── RetailInventory.csproj
```

## Database

Database Name:

```
RetailInventoryDB
```

Tables:

- Categories
- Products
- __EFMigrationsHistory

## EF Core Commands Used

Create Migration

```bash
dotnet ef migrations add InitialCreate
```

Apply Migration

```bash
dotnet ef database update
```

Run Project

```bash
dotnet run
```

## Sample Output

```
Categories added successfully!
Products added successfully!

All Products:
Laptop - ₹75000
Rice Bag - ₹1200

Found: Laptop
Expensive: Laptop
```

## Learning Outcomes

- Learned Object Relational Mapping (ORM)
- Connected EF Core with SQL Server
- Created and applied migrations
- Inserted records into SQL Server
- Retrieved records using EF Core
- Performed CRUD basics using Entity Framework Core

## Author

Name: Akanksha Abhaykumar Saraf

Course: Third Year Computer Engineering

Subject: Entity Framework Core 8.0 Practical
