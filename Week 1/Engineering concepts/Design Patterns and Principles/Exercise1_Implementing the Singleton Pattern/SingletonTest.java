package singleton;

public class SingletonTest
{
    public static void main(String[] args)
    {
        Logger logger1 = Logger.getInstance();
        Logger logger2 = Logger.getInstance();

        logger1.displayMessage("Application Started");
        logger2.displayMessage("User Logged In");

        if(logger1 == logger2)
        {
            System.out.println("Only one Logger instance is created.");
        }
        else
        {
            System.out.println("Multiple Logger instances are created.");
        }
    }
}
