
public class ReaderPalindromic extends ReaderFile {
	
	public ReaderPalindromic(String file_name){
		super(file_name);
	}
	
	public void show() {
		for(int i = 0; i < this.content.size(); i++){
			System.out.print(this.content.get(i));
		}
		for(int i = this.content.size()-1; i >=0 ; i--){
			System.out.print(this.content.get(i));
		}
	}
}
