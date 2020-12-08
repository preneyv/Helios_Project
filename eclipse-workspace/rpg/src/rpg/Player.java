package rpg;

abstract class Player {
	
	protected String name;	
	protected double exp; 
	protected double money;
	
	public Player() {
		this.name="Inconnu";
		this.exp=0;
		this.money=0;
	}
	
	public Player(String n, double e, double m) {
		this.name=n;
		this.exp=e;
		this.money=m;
	}
	
	public String toString() {
		return name;
	}
	
	public double getExp() {
		return exp;
	}
	
	public double getMoney() {
		return money;
	}
	
	public void setName(String name) {
		this.name=name;
	}
	
	public void setExp(double exp) {
		this.exp=exp;
	}
	
	public void setMoney(double money) {
		this.money=money;
	}
	
}
