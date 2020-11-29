
public class Main {

	public static void main(String[] args) {
		String file_name = "file.txt";
		System.out.print("Dans le fichier "+ file_name+" : \n\n--- A L'ENDROIT --- \n");
		show_file(file_name);
		System.out.print("\n--- A L'ENVERS --- \n");
		show_file_reverse(file_name);
		System.out.print("\n\n--- PALINDROME --- \n");
		show_file_palindrome(file_name);
	}
	
	public static void show_file(String file_name){
		ReaderFile lf = new ReaderFile(file_name);
		if((boolean) lf.open_file()) {
			lf.read_file();
			lf.show();
		}
	}
	
	public static void show_file_reverse(String file_name){
		ReaderReverse lf = new ReaderReverse(file_name);
		if((boolean) lf.open_file()) {
			lf.read_file();
			lf.show();
		}
	}	
	
	public static void show_file_palindrome(String file_name){
		ReaderPalindromic lf = new ReaderPalindromic(file_name);
		if((boolean) lf.open_file()) {
			lf.read_file();
			lf.show();
		}
	}
	
}
