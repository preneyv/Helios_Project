package rpg;

abstract class Monster extends Destructible {
	
	protected double health;
	
	public Monster() {
		this.health=0;
	}
	
	public Monster(double h) {
		this.health=h;
	}
	
	public void hit_me(double damage) {
		health -= damage;
	}
	
	public double doHealth()
	{
		return health;
		
	}
	
	public double getHealth()
	{
		return health;
		
	}
	
	abstract public String ascii_art();
	
	
}
