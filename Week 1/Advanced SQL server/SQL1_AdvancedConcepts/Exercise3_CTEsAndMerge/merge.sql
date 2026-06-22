-- Update existing products and insert new products

MERGE Products AS Target
USING StagingProducts AS Source
ON Target.ProductID = Source.ProductID

WHEN MATCHED THEN
    UPDATE SET Target.Price = Source.Price

WHEN NOT MATCHED THEN
    INSERT
    (
        ProductID,
        ProductName,
        Category,
        Price
    )
    VALUES
    (
        Source.ProductID,
        Source.ProductName,
        Source.Category,
        Source.Price
    );
