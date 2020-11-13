import java.util.Scanner;

public class Bataille {

	public static void main(String[] args) {
		
        System.out.println("Vous vous apprêtez à jouer à la bataille");
		

		Scanner sc1 = new Scanner(System.in);
		Scanner sc2 = new Scanner(System.in);
		  
        System.out.println("Nom du premier joueur :"); 
	    String premier = sc1.nextLine();
	    
        System.out.println("Nom du deuxième joueur :");  
	    String deuxieme = sc2.nextLine();
	    
        Joueur joueur1 = new Joueur(premier, 0);
		Joueur joueur2 = new Joueur(deuxieme, 0);
		
		
		// Création du paquet de cartes
		Carte [] paquet = new Carte[52];
		
		// Pour chaque couleur, et chaque valeur du tableau, on créé un objet Carte
		// Ensuite, on introduit cette carte dans le paquet
		
		for(int i=0; i < Carte.couleurs.length; i++) 
		{
			for(int j=0; j < Carte.valeurs.length; j++) 
			{
				Carte carte = new Carte(Carte.couleurs[i], Carte.valeurs[j]);
				
				// On insère la carte dans le tableau paquet en lui indiquant son emplacement
				paquet[i*13+j] = carte;
			}
		}
		
		// Mix du paquet	
		// int nombre aleatoire = Min + (int)(Math.random() * (Max - Min)
		
		for (int i = 0; i < paquet.length ; i++)
			
		{
            int j = i + (int)(Math.random() * (paquet.length - i));
            Carte paquetMelange = paquet[j];
            paquet[j] = paquet[i];
            paquet[i] = paquetMelange;
		}
		
		
		// Distribution du paquet à chacun des joueurs, via la méthode ajouterCarte
		
        for (int i = 0; i < paquet.length; i+=2) 
        {
            joueur1.ajouterCarte(paquet[i]);
            joueur2.ajouterCarte(paquet[i+1]);
        }
       
        
        while(joueur1.getNbCartes() != 0 && joueur2.getNbCartes() != 0)
        {
      	         
            Carte carte1 = joueur1.tirerCarte();
            System.out.println(joueur1.getNom() + " a tiré un " + carte1);
            Carte carte2 = joueur2.tirerCarte();
            System.out.println(joueur2.getNom() + " a tiré un " + carte2);
            
            System.out.println();
            // Dans le cas d'une égalité, si les deux joueurs ont plus de deux cartes, il y a bataille
            
            if (carte1.comparateur(carte2) == 1)
            {
                
                System.out.println("Il y a donc égalité");
                
                if(joueur1.getNbCartes() >= 2 && joueur2.getNbCartes() >= 2) 
                {
                    
                System.out.println("BATAILLE");     	        	
                // Les deux joueurs tirent une carte et la pose face cachee, puis en tirent une autre pour les comparer
                
                Carte carte3 = joueur1.tirerCarte();
                Carte carte4 = joueur1.tirerCarte();
                
                Carte carte5 = joueur2.tirerCarte();
                Carte carte6 = joueur2.tirerCarte();
                
                System.out.println(carte4 + " contre " + carte6);

                if(carte4.comparateur(carte6) == 2) {
                    
                    System.out.println(joueur1.getNom() + " remporte le pli");
                    
                    joueur1.ajouterCarte(carte1);
                    joueur1.ajouterCarte(carte2);
                    joueur1.ajouterCarte(carte3);
                    joueur1.ajouterCarte(carte4);
                    joueur1.ajouterCarte(carte5);
                    joueur1.ajouterCarte(carte6);
                    joueur1.score();
                }
                else if(carte4.comparateur(carte6) == 0) {
                    
                    System.out.println(joueur2.getNom()+ " remporte le pli");
                    
                    // Le joueur 2 gagne !
                    joueur2.ajouterCarte(carte1);
                    joueur2.ajouterCarte(carte2);
                    joueur2.ajouterCarte(carte3);
                    joueur2.ajouterCarte(carte4);
                    joueur2.ajouterCarte(carte5);
                    joueur2.ajouterCarte(carte6);
                    joueur2.score();
                }
                else {
                	
                    // Il y a a nouveau égalité, une nouvelle carte et tirée puis comparée
                    
                    Carte carte7 = joueur1.tirerCarte();
                    Carte carte8 = joueur2.tirerCarte();
                    Carte carte9 = joueur1.tirerCarte();
                    Carte carte10 = joueur2.tirerCarte(); 
                    
                    
                    System.out.println("Egalite, " + carte9 + " contre " + carte10);
                    
                    if (carte9.comparateur(carte10) == 2) {
                        System.out.println(joueur1.getNom() + " remporte le pli");
                        
                        joueur1.ajouterCarte(carte1);
                        joueur1.ajouterCarte(carte2);
                        joueur1.ajouterCarte(carte3);
                        joueur1.ajouterCarte(carte4);
                        joueur1.ajouterCarte(carte5);
                        joueur1.ajouterCarte(carte6);
                        joueur1.ajouterCarte(carte7);
                        joueur1.ajouterCarte(carte8);
                        joueur1.ajouterCarte(carte9);
                        joueur1.ajouterCarte(carte10);
                        joueur1.score();
                    }
                    else {
                        System.out.println(joueur2.getNom()+ " remporte le pli");
                        
                        joueur2.ajouterCarte(carte1);
                        joueur2.ajouterCarte(carte2);
                        joueur2.ajouterCarte(carte3);
                        joueur2.ajouterCarte(carte4);
                        joueur2.ajouterCarte(carte5);
                        joueur2.ajouterCarte(carte6);
                        joueur2.ajouterCarte(carte7);
                        joueur2.ajouterCarte(carte8);
                        joueur2.ajouterCarte(carte9);
                        joueur2.ajouterCarte(carte10);
                        joueur2.score();
                    }
                    
                }
            }
            else {
                // Si un des deux joueurs n'a plus assez de carte pour la bataille
                if(joueur1.getNbCartes() < 2) {
                    System.out.println(joueur1.getNom() +" n'a plus assez de carte, victoire de "+joueur2.getNom());
                    joueur2.score();
                }
                else {
                    System.out.println(joueur2.getNom()+" n'a plus assez de carte, victoire de "+joueur1.getNom());
                    joueur1.score();
                }
            }
        }
        else if(carte1.comparateur(carte2) == 2) {
            System.out.println(joueur1.getNom()+ " remporte le pli");
            // Le joueur 1 gagne !
            joueur1.ajouterCarte(carte1);
            joueur1.ajouterCarte(carte2);
            joueur1.score();
        }
        else {
            System.out.println(joueur2.getNom()+ " remporte le pli");
            // Le joueur 2 gagne !
            joueur2.ajouterCarte(carte2);
            joueur2.ajouterCarte(carte1);
            joueur2.score();
        }
        System.out.println();
        System.out.println(joueur1.getNom() + " : " + joueur1.getScore());
        System.out.println(joueur2.getNom() + " : " + joueur2.getScore());
    }
    
    System.out.println();
    
    if (joueur1.getNbCartes() == 0) {
        
        System.out.println(joueur2.getNom() + " remporte la partie !!");
    }
    else {
        System.out.println(joueur1.getNom() + " remporte la partie !!");
    }
    
}
          
		
}


