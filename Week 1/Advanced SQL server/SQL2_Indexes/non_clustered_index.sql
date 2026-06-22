-- Before Index

SELECT *
FROM Products
WHERE ProductName = 'Laptop';

-- Create Non-Clustered Index

CREATE NONCLUSTERED INDEX IX_Products_ProductName
ON Products(ProductName);

-- After Index

SELECT *
FROM Products
WHERE ProductName = 'Laptop';