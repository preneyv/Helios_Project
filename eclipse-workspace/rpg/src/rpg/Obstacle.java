package rpg;

abstract class Obstacle extends Destructible{
	
	protected double health;
	
	public Obstacle() {
		this.health=0;
	}

	public Obstacle(double h) {
		this.health=h;
	}
	
	public void hit_me(double damage) {
		health -= damage;
	}
}
