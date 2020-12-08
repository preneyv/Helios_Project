package rpg;

public class Hammer extends Weapon {
	
	private static final String NAME = "Thor's Hammer";
	private static final double DAMAGE = 25;
	private static final double PRICE = 80;
	
	static final double MONSTER_DAMAGE_RATIO = 1;
	static final double OBSTACLE_DAMAGE_RATIO = 2.9;
	static final double DESTRUCTIBLE_DAMAGE_RATIO = 1.4;
	
	public Hammer() {
		super(NAME, DAMAGE, PRICE);
	}
	
	public String ascii_art() {
		return
	    "   ,					\n" +
	    "  /(  ___________		\n" +
	    " |  >:===========`		\n" +
	    "  )(					\n";
	}
	
	public void attack_monster(Monster m) {
		m.hit_me(damage*MONSTER_DAMAGE_RATIO);
	}
	
	public void attack_obstacle(Obstacle o) {
		o.hit_me(damage*OBSTACLE_DAMAGE_RATIO);
	}
	
	public void attack_destructible(Destructible d) {
		d.hit_me(damage*DESTRUCTIBLE_DAMAGE_RATIO);
	}
	
}
