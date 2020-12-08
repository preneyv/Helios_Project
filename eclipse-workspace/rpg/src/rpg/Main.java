package rpg;

import java.util.ArrayList;
import java.util.Scanner;

public class Main {

	public static void main(String[] args) {
		
		Scanner scanner = new Scanner(System.in);
		String condition="";
		String chemin="";
		String win =" - 2 - 3 - 4 - 2";
		
		System.out.println("- What creature are you? (1: Elf | 2: Wizard) ");
		int type;
		type = scanner.nextInt();
		
		if(type==1 || type==2) {
			if(type==1) {
				Elf player1 = new Elf();
				System.out.println("You chose the " + player1.name + " !\nExperience : " + player1.exp + "\nMoney : " + player1.money);
				
				Hammer weapon1 = new Hammer();
				Axe weapon2 = new Axe();
				System.out.println("\n- Welcome to the gun shop. To get to the end of the game, you\u2019re going to need a weapon. Which one do you choose?\n"
						+ "1: "+ weapon1.name + " : damage = " + weapon1.damage + " | price = " + weapon1.price + ".\n"
						+ "2: "+ weapon2.name + " : damage = " + weapon2.damage + " | price = " + weapon2.price + ".");
				int weapon;
				weapon = scanner.nextInt();
				
				double newPrice1 = player1.money-weapon1.price;
				double newPrice2 = player1.money-weapon2.price;
				
				if(weapon==1) {
					System.out.println("\nYou chose the " + weapon1.name + " ! Good choice. But now you only have " + newPrice1 +" pieces left.\n\nWell, serious things begin.\nNow you are walking blindly in a dark forest. You will have to choose your movements. But beware! You may encounter obstacles or monsters. \nKeep an eye out!  \n\nWhere do you want to go? (1: North | 2: South | 3: East | 4: West)");
					int direction1;
					direction1 = scanner.nextInt();
					if(direction1!=1 && direction1!=2 && direction1!=3 && direction1!=4) {
						System.out.println("\nThis command does not exist. Try again.");
					}
					while(condition=="") {
						System.out.println("\nGreat, where do you want to go now? (1: North | 2: South | 3: East | 4: West)");
						int direction;
						direction = scanner.nextInt();
						if(direction!=1 && direction!=2 && direction!=3 && direction!=4) {
							System.out.println("\nThis command does not exist. Try again.");
						}
						// on enregistre la liste des déplacements du joueur dans la variable chemin
						chemin = chemin + " - " + direction;
						// apparition d'un dragon
						String appearsDragon = " 4 - 2";
						int dragYesorNo = chemin.indexOf(appearsDragon);
						if(dragYesorNo!=-1) {
							// Dragon dragon = new Dragon();
							System.out.println("\n--- A DRAGON APPEARS --- \n- The dragon has a resistance of 13. \n- You attack him with your "+  weapon1.name +" ! \n--- It's a KO --- \n- You can continue your progress.");
						}
						// apparition d'un arbre
						String appearsTrees = " 2 - 2";
						int treesYesorNo = chemin.indexOf(appearsTrees);
						if(treesYesorNo!=-1) {
							System.out.println("Hello !");
							// Trees trees = new Trees();
							System.out.println("\n---  HUGE TREES APPEARS --- \n- Trees has a resistance of 7. \n- You attack him with your "+  weapon1.name +" ! \n--- The trees have been destroyed ---\n- You can continue your progress.");
						}
						
						// le chemin final est-il dans la liste des déplacements du joueur ?
						int place = chemin.indexOf(win);
						// si oui
						if(place!=-1) {
							// la boucle va s'arrêter
							condition = "finish";
							System.out.println("\nFELICITATIONS ! Vous avez terminé la partie !");
						}
					}
					
				} else if (weapon==2) {
					System.out.println("\nYou chose the " + weapon2.name + " ! Good choice. But now you only have " + newPrice2 +" pieces left.\n\nWell, serious things begin.\nNow you are walking blindly in a dark forest. You will have to choose your movements. But beware! You may encounter obstacles or monsters. \nKeep an eye out! \n\nWhere do you want to go? (1: North | 2: South | 3: East | 4: West)");
					int direction1;
					direction1 = scanner.nextInt();
					if(direction1!=1 && direction1!=2 && direction1!=3 && direction1!=4) {
						System.out.println("\nThis command does not exist. Try again.");
					}
					while(condition=="") {
						System.out.println("\nGreat, where do you want to go now? (1: North | 2: South | 3: East | 4: West)");
						int direction;
						direction = scanner.nextInt();
						if(direction!=1 && direction!=2 && direction!=3 && direction!=4) {
							System.out.println("\nThis command does not exist. Try again.");
						}
						// on enregistre la liste des déplacements du joueur dans la variable chemin
						chemin = chemin + " - " + direction;
						// apparition d'un dragon
						String appearsDragon = " 4 - 2";
						int dragYesorNo = chemin.indexOf(appearsDragon);
						if(dragYesorNo!=-1) {
							// Dragon dragon = new Dragon();
							System.out.println("\n--- A DRAGON APPEARS --- \n- The dragon has a resistance of 13. \n- You attack him with your "+  weapon2.name +" ! \n--- It's a KO --- \n- You can continue your progress.");
						}
						// apparition d'un arbre
						String appearsTrees = " 2 - 2";
						int treesYesorNo = chemin.indexOf(appearsTrees);
						if(treesYesorNo!=-1) {
							System.out.println("Hello !");
							// Trees trees = new Trees();
							System.out.println("\n---  HUGE TREES APPEARS --- \n- Trees has a resistance of 7. \n- You attack him with your "+  weapon2.name +" ! \n--- The trees have been destroyed ---\n- You can continue your progress.");
						}
						
						// le chemin final est-il dans la liste des déplacements du joueur ?
						int place = chemin.indexOf(win);
						// si oui
						if(place!=-1) {
							// la boucle va s'arrêter
							condition = "finish";
							System.out.println("\nFELICITATIONS ! Vous avez terminé la partie !");
						}
					}
				} else {
					System.out.println("\nThere\u2019s no such weapon, sorry.");
				}
				
			} else if (type==2) {
				Wizard player1 = new Wizard();
				System.out.println("You chose the " + player1.name + " !\nExperience : " + player1.exp + "\nMoney : " + player1.money);
				
				Hammer weapon1 = new Hammer();
				Axe weapon2 = new Axe();
				System.out.println("\n- Welcome to the gun shop. To get to the end of the game, you\u2019re going to need a weapon. Which one do you choose?\n"
						+ "1: "+ weapon1.name + " : damage = " + weapon1.damage + " | price = " + weapon1.price + ".\n"
						+ "2: "+ weapon2.name + " : damage = " + weapon2.damage + " | price = " + weapon2.price + ".");
				int weapon;
				weapon = scanner.nextInt();
				
				double newPrice1 = player1.money-weapon1.price;
				double newPrice2 = player1.money-weapon2.price;
				
				if(weapon==1) {
					System.out.println("\nYou chose the " + weapon1.name + " ! Good choice. But now you only have " + newPrice1 +" pieces left.\n\nWell, serious things begin.\nNow you are walking blindly in a dark forest. You will have to choose your movements. But beware! You may encounter obstacles or monsters. \nKeep an eye out!  \n\nWhere do you want to go? (1: North | 2: South | 3: East | 4: West)");
					int direction1;
					direction1 = scanner.nextInt();
					if(direction1!=1 && direction1!=2 && direction1!=3 && direction1!=4) {
						System.out.println("\nThis command does not exist. Try again.");
					}
					while(condition=="") {
						System.out.println("\nGreat, where do you want to go now? (1: North | 2: South | 3: East | 4: West)");
						int direction;
						direction = scanner.nextInt();
						if(direction!=1 && direction!=2 && direction!=3 && direction!=4) {
							System.out.println("\nThis command does not exist. Try again.");
						}
						// on enregistre la liste des déplacements du joueur dans la variable chemin
						chemin = chemin + " - " + direction;
						// apparition d'un dragon
						String appearsDragon = " 4 - 2";
						int dragYesorNo = chemin.indexOf(appearsDragon);
						if(dragYesorNo!=-1) {
							// Dragon dragon = new Dragon();
							System.out.println("\n--- A DRAGON APPEARS --- \n- The dragon has a resistance of 13. \n- You attack him with your "+  weapon1.name +" ! \n--- It's a KO --- \n- You can continue your progress.");
						}
						// apparition d'un arbre
						String appearsTrees = " 2 - 2";
						int treesYesorNo = chemin.indexOf(appearsTrees);
						if(treesYesorNo!=-1) {
							System.out.println("Hello !");
							// Trees trees = new Trees();
							System.out.println("\n---  HUGE TREES APPEARS --- \n- Trees has a resistance of 7. \n- You attack him with your "+  weapon1.name +" ! \n--- The trees have been destroyed ---\n- You can continue your progress.");
						}
						
						// le chemin final est-il dans la liste des déplacements du joueur ?
						int place = chemin.indexOf(win);
						// si oui
						if(place!=-1) {
							// la boucle va s'arrêter
							condition = "finish";
							System.out.println("\nFELICITATIONS ! Vous avez terminé la partie !");
						}
					}
				} else if (weapon==2) {
					System.out.println("\nYou chose the " + weapon2.name + " ! Good choice. But now you only have " + newPrice2 +" pieces left.\n\nWell, serious things begin.\nNow you are walking blindly in a dark forest. You will have to choose your movements. But beware! You may encounter obstacles or monsters. \nKeep an eye out! \n\nWhere do you want to go? (1: North | 2: South | 3: East | 4: West)");
					int direction1;
					direction1 = scanner.nextInt();
					if(direction1!=1 && direction1!=2 && direction1!=3 && direction1!=4) {
						System.out.println("\nThis command does not exist. Try again.");
					}
					while(condition=="") {
						System.out.println("\nGreat, where do you want to go now? (1: North | 2: South | 3: East | 4: West)");
						int direction;
						direction = scanner.nextInt();
						if(direction!=1 && direction!=2 && direction!=3 && direction!=4) {
							System.out.println("\nThis command does not exist. Try again.");
						}
						// on enregistre la liste des déplacements du joueur dans la variable chemin
						chemin = chemin + " - " + direction;
						// apparition d'un dragon
						String appearsDragon = " 4 - 2";
						int dragYesorNo = chemin.indexOf(appearsDragon);
						if(dragYesorNo!=-1) {
							// Dragon dragon = new Dragon();
							System.out.println("\n--- A DRAGON APPEARS --- \n- The dragon has a resistance of 13. \n- You attack him with your "+  weapon2.name +" ! \n--- It's a KO --- \n- You can continue your progress.");
						}
						// apparition d'un arbre
						String appearsTrees = " 2 - 2";
						int treesYesorNo = chemin.indexOf(appearsTrees);
						if(treesYesorNo!=-1) {
							System.out.println("Hello !");
							// Trees trees = new Trees();
							System.out.println("\n---  HUGE TREES APPEARS --- \n- Trees has a resistance of 7. \n- You attack him with your "+  weapon2.name +" ! \n--- The trees have been destroyed ---\n- You can continue your progress.");
						}
						
						// le chemin final est-il dans la liste des déplacements du joueur ?
						int place = chemin.indexOf(win);
						// si oui
						if(place!=-1) {
							// la boucle va s'arrêter
							condition = "finish";
							System.out.println("\nFELICITATIONS ! Vous avez terminé la partie !");
						}
					}
				} else {
					System.out.println("\nThere\u2019s no such weapon, sorry.");
				}
			} 
		} else {
			System.out.println("That creature doesn\u2019t exist, sorry.");
		}
		
		
		
		
		
		// TODO Auto-generated method stub
		ArrayList <Weapon> store = new ArrayList<>();
		store.add(new Axe());
		store.add(new Hammer());
		//for (Weapon w : store) {
			//System.out.println (w.ascii_art());
		//}
	}

}
