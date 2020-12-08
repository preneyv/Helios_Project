package rpg;

abstract class Weapon {
	
	protected String name;
	protected double damage; 
	protected double price; 
	
	public Weapon() {
		this.name="Inconnu";
		this.damage=0;
		this.price=0;
	}
	
	public Weapon(String n, double d, double p) {
		this.name=n;
		this.damage=d;
		this.price=p;
	}
	
	public double doDamage()
	{
		return damage;
		
	}
	
	public double getDamage()
	{
		return damage;
		
	}
	
	abstract public String ascii_art();
	
	
}
