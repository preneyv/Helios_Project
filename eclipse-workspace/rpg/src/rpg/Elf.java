package rpg;

public class Elf extends Player{
	
	public Elf() {
		super("Elf", 80, 130 );
	}
	
	public String toString() {
		return "Name = "+ name + "\nExperience = "+ exp + "\nMoney = " + money;
	}
}
