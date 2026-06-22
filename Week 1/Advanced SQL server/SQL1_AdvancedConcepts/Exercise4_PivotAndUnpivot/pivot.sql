-- Convert rows into columns using PIVOT

SELECT *
FROM
(
    SELECT ProductName, SalesMonth, Quantity
    FROM SalesData
) AS SourceTable

PIVOT
(
    SUM(Quantity)
    FOR SalesMonth IN ([Jan],[Feb],[Mar])
) AS PivotTable;