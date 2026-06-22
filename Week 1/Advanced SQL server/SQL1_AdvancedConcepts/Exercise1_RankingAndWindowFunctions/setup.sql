CREATE DATABASE RetailStore;

USE RetailStore;

CREATE TABLE Products
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

INSERT INTO Products VALUES
(101,'Laptop','Electronics',80000),
(102,'Mobile','Electronics',50000),
(103,'Headphones','Electronics',5000),
(104,'Shoes','Fashion',3000),
(105,'Jacket','Fashion',4000),
(106,'Watch','Accessories',7000),
(107,'Smart Watch','Accessories',7000);
