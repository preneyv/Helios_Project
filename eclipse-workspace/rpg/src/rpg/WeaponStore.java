package rpg;

public class WeaponStore {
	Weapon axe = new Axe();
	Weapon hammer = new Hammer();
	int number_weapons = 2;
	
	public double price(Weapon w) {
		return w.price;
	}
	
	public double damage(Weapon w) {
		return w.damage;
	}
	
	public String name(Weapon w) {
		return w.name;
	}
}
