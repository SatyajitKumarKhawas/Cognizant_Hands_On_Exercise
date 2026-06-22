-- Create Database
CREATE DATABASE RetailStore;
GO

USE RetailStore;
GO

-- Customers Table
CREATE TABLE Customers
(
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(100),
    Region VARCHAR(50)
);

-- Orders Table
CREATE TABLE Orders
(
    OrderID INT PRIMARY KEY,
    CustomerID INT,
    FOREIGN KEY (CustomerID)
    REFERENCES Customers(CustomerID)
);

-- Insert Customers

INSERT INTO Customers VALUES
(1,'Akanksha','West'),
(2,'Riya','North'),
(3,'Aman','South');

-- Insert Orders

INSERT INTO Orders VALUES
(101,1),
(102,2),
(103,3),
(104,1),
(105,1),
(106,1);

-- Verify Setup

SELECT * FROM Customers;
SELECT * FROM Orders;
