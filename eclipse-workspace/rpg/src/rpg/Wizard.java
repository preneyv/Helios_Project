package rpg;

public class Wizard extends Player {
	
	public Wizard() {
		super("Wizard", 110, 90);
	}
	
	public String toString() {
		return "Name = "+ name + "\nExperience = "+ exp + "\nMoney = " + money;
	}
}
