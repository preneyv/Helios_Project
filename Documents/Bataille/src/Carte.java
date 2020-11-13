
public class Carte {

    public static String[] couleurs = new String[] {"Coeur", "Trèfle", "Pique", "Carreau"};
    public static int[] valeurs = new int[] {1,2,3,4,5,6,7,8,9,10,11,12,13};
	
	private String couleur;
	private int valeur;
	
	// Constructeur par défaut
	  public Carte(){        
		  	couleur = "Inconnu";
		  	valeur = 0;
		  }
	  		// Constructeur avec paramètres
		  public Carte(String uneCouleur, int uneValeur)
		  {
		    this.couleur = uneCouleur;
		    this.valeur = uneValeur;
		  }  
		  
		  // Retourne la couleur de la carte
		  public String getCouleur()
		  {
		    return couleur;
		  }
		  
		  public String toString() 
		  {
			  String valeur;
			  valeur = Integer.toString(this.valeur);
			  return valeur + " de " + this.couleur;
		  }
		  

		  // Retourne la valeur de la carte
		  public int getValeur()
		  {
		    return valeur;
		  } 

		  
		//Définit la couleur de la carte
		  public void setCouleur(String uneCouleur)
		  {
		    couleur = uneCouleur;
		  }

		  //Définit la valeur de la carte
		  public void setValeur(int uneValeur)
		  {
		    valeur = uneValeur;
		  }    
		  
		   public int comparateur(Carte carte) {
			   
		        if (this.valeur == carte.getValeur()) {
		            return 1;
		        }
		        else if (this.valeur == 1) {
		            return 2;
		        }
		        else if (carte.getValeur() == 1) {
		            return 0;
		        }
		        else if (this.valeur > carte.getValeur()) {
		            return 2;
		        }
		        else {
		            return 0;
		        }
		    }
		  
}
