import java.util.ArrayList;

public class ReaderReverse extends ReaderFile {

	protected ArrayList<String> lines;
	public ReaderReverse(String file_name){
		super(file_name);
	}
	
	public void show() {
		this.lines = new ArrayList<String>();
		String line = new String();
		for(int i = 0; i < this.content.size(); i++){
			line+=this.content.get(i);
			if (this.content.get(i).equals("\n")){
				this.lines.add(line);
				line="";
			}
		}
		for(int i = this.lines.size()-1; i >=0 ; i--){
			System.out.print(this.lines.get(i));
		}
	}
}
