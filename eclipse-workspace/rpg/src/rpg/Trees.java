package rpg;


public class Trees extends Obstacle{
	
	static final double HEALTH = 7;

	public Trees() {
		super(HEALTH);
	}
	
	public String ascii_art() {
		return 
			
	 "              		,@@@@@@@,					\n"+
	 "              ,,,.   ,@@@@@@/@@,  .oo8888o.		\n"+
	 "           ,&%%&%&&%,@@@@@/@@@@@@,8888\\88/8o		\n"+
	 "          ,%&\\%&&%&&%,@@@\\@@@/@@@88\\88888/88'		\n"+
	 "          %&&%&%&/%&&%@@\\@@/ /@@@88888\\88888'		\n"+
	 "          %&&%/ %&%%&&@@\\ V /@@' `88\\8 `/88'		\n"+
	 "          `&%\\ ` /%&'    |.|        \\ '|8'		\n"+
	 "              |o|        | |         | |			\n"+
	 "              |.|        | |         | |			\n"+
	 "       	 \\/ ._\\//_/__/  ,\\_//__\\/.  \\_//__/_	\n";

	}
	
	public String toString() {
		return "Health = "+ health;
	}
}
