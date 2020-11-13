import java.util.*;

public class Joueur {
	
    private int score;   
    private String nom;
    private LinkedList <Carte> paquetTotal = new LinkedList <Carte>() ;

    
    public Joueur ()
    {
        score = 0;
    }
    
    public Joueur (String unNom, int unScore)
    {
    	this.nom = unNom;
    	this.score = unScore;
    }
    
    public int getScore()
    {
        return score;
    }
    
    public String getNom()
    {
        return nom;
    }
    
    public LinkedList<Carte> getPaquetTotal()
    {
        return paquetTotal;
    }
    
    public void setScore(int score) {
        this.score = score;
    }
    
    public void setNom (String nom)
    {
        this.nom = nom;
    }
    
    public Carte tirerCarte()
    {
            return this.paquetTotal.pollFirst();
    }

    
    public void ajouterCarte(Carte carte)
    {
        this.paquetTotal.add(carte);
    }
    
    public void score()
    {
        this.score++;
    }

    public int getNbCartes()
    {
    	return this.paquetTotal.size();
    }
    }

	