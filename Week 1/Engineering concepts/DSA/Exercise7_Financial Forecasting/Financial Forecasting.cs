using System;

class FinancialForecast
{
    static double PredictFutureValue(double currentValue, double growthRate, int years)
    {
        // Base Case
        if (years == 0)
            return currentValue;

        // Recursive Case
        return PredictFutureValue(
            currentValue * (1 + growthRate / 100),
            growthRate,
            years - 1
        );
    }

    static void Main()
    {
        Console.Write("Enter Initial Value: ");
        double initialValue = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Annual Growth Rate (%): ");
        double growthRate = Convert.ToDouble(Console.ReadLine());

        Console.Write("Enter Number of Years: ");
        int years = Convert.ToInt32(Console.ReadLine());

        double futureValue = PredictFutureValue(initialValue, growthRate, years);

        Console.WriteLine($"\nFuture Value after {years} years: {futureValue:F2}");
    }
}
