-- Create StagingProducts table
CREATE TABLE StagingProducts
(
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(100),
    Category VARCHAR(50),
    Price DECIMAL(10,2)
);

-- Insert sample data
INSERT INTO StagingProducts
VALUES
(1,'Laptop','Electronics',70000),
(10,'Smart Watch','Electronics',12000);

-- Verify setup
SELECT * FROM StagingProducts;
