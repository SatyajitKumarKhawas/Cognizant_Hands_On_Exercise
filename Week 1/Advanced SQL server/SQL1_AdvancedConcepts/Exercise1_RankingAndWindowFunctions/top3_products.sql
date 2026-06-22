WITH RankedProducts AS
(
    SELECT
        ProductID,
        ProductName,
        Category,
        Price,
        ROW_NUMBER() OVER
        (
            PARTITION BY Category
            ORDER BY Price DESC
        ) AS RowNum
    FROM Products
)

SELECT *
FROM RankedProducts
WHERE RowNum <= 3;
