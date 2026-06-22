-- Convert columns back into rows using UNPIVOT

SELECT
    ProductName,
    SalesMonth,
    Quantity
FROM
(
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
    ) AS PivotTable
) p

UNPIVOT
(
    Quantity FOR SalesMonth IN ([Jan],[Feb],[Mar])
) AS UnpivotTable;