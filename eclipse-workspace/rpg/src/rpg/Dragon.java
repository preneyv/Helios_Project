package rpg;


public class Dragon extends Monster{
	
	static final double HEALTH = 13;

	public Dragon() {
		super(HEALTH);
	}
	
	public String ascii_art() {
		return 
			"	        /     \\			\n"+
			"          ((     ))		\n"+
			"      ===  \\_v_//  ===	\n"+
			"        ====)_^_(====		\n"+
			"        ===/ O O \\===		\n"+
			"        = | /_ _\\ | =		\n"+
			"       =   \\/_ _\\/   =		\n"+
			"            \\_ _/			\n"+
			"            (o_o)			\n"+
			"             VwV			\n";

	}
	
	public String toString() {
		return "Health = "+ health;
	}
}
