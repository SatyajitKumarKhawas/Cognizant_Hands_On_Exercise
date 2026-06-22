-- Create SalesData table

CREATE TABLE SalesData
(
    ProductName VARCHAR(50),
    SalesMonth VARCHAR(10),
    Quantity INT
);

-- Insert Sample Data

INSERT INTO SalesData VALUES
('Laptop','Jan',10),
('Laptop','Feb',15),
('Laptop','Mar',20),
('Mobile','Jan',25),
('Mobile','Feb',30),
('Mobile','Mar',35),
('Headphones','Jan',12),
('Headphones','Feb',18),
('Headphones','Mar',22);

-- Verify Data

SELECT * FROM SalesData;
