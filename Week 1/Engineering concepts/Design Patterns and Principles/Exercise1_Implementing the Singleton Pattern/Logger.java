package singleton;

public class Logger
{
    private static Logger instance;

    private Logger()
    {
        System.out.println("Logger object created");
    }

    public static Logger getInstance()
    {
        if(instance == null)
        {
            instance = new Logger();
        }

        return instance;
    }

    public void displayMessage(String message)
    {
        System.out.println("Log: " + message);
    }
    
}
