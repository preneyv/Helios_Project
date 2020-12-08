package rpg;

public class Axe extends Weapon {

	private static final String NAME = "Demonic Axe";
	private static final double DAMAGE = 10;
	private static final double PRICE = 25;
	
	static final double MONSTER_DAMAGE_RATIO = 1.2;
	static final double OBSTACLE_DAMAGE_RATIO = 2.6;
	static final double DESTRUCTIBLE_DAMAGE_RATIO = 1.4;
	
	public Axe() {
		super(NAME, DAMAGE, PRICE);
	}
	
	public String ascii_art() {
		return 
		"		    _    _.		\n"+
		"		  .|_|_,'  |    \n"+
		"		  |_       |    \n"+
		"		    |`'`-._|    \n"+
		"		    | |   		\n"+
		"		    | |   		\n"+
		"		    | |  		\n"+
		"		    | |  		\n"+
		"		    | | 		\n"+
		"		   |` |  		\n"+
		"		   `--' 		\n";
	}
	
	public void attack(Monster m, Obstacle o) {
		m.hit_me(damage*MONSTER_DAMAGE_RATIO);
	}
	
	public void attack(Obstacle o) {
		o.hit_me(damage*OBSTACLE_DAMAGE_RATIO);
	}
	
	public void attack_destructible(Destructible d) {
		d.hit_me(damage*DESTRUCTIBLE_DAMAGE_RATIO);
	}
}
