package rpg;

public class Destructible {
	
	Obstacle trees = new Trees();
	Monster dragon = new Dragon();
	protected double health = 30;

	public double health(Obstacle o) {
		return o.health;
	}
	
	public double health(Monster m) {
		return m.health;
	}
	
	public void hit_me(double damage) {
		health -= damage;
	}
	
	public double getHealth() {
		return health;
	}
}

