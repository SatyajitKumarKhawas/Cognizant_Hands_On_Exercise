USE RetailStore;
GO

-- Customers
INSERT INTO Customers
VALUES
(1,'Akanksha','West'),
(2,'Riya','North'),
(3,'Aman','South');

-- Products
INSERT INTO Products
VALUES
(1,'Laptop','Electronics',65000),
(2,'Mobile','Electronics',45000),
(3,'Headphones','Electronics',4500),
(4,'Shirt','Clothing',1500),
(5,'Jeans','Clothing',2500),
(6,'Jacket','Clothing',3500),
(7,'Book A','Books',500),
(8,'Book B','Books',800),
(9,'Book C','Books',600);

-- Orders
INSERT INTO Orders
VALUES
(101,1),
(102,2),
(103,3);

-- OrderDetails
INSERT INTO OrderDetails
VALUES
(1,101,1,2),
(2,101,4,3),
(3,102,2,1),
(4,102,5,2),
(5,103,3,4),
(6,103,8,5);
