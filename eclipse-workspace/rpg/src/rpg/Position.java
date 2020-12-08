package rpg;

public class Position {


	public int n_row;
	public int n_col;

	public Position(int n_row, int n_col) {
		this.n_row = n_row;
		this.n_col = n_col;
	}


	public int getN_row() {
		return n_row;
	}
	public int getN_col() {
		return n_col;
	}


	public void setN_row(int n_row) {
		this.n_row = n_row;
	}
	public void setN_col(int n_col) {
		this.n_col = n_col;
	}
	
}
