import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;

public abstract class AbstractMethods implements Interface {

	protected String file_name;
	protected ArrayList<String> content;
	protected File file;
	protected FileInputStream fis = null;
	
	public AbstractMethods(String file_name){
		this.file_name = file_name;
		this.content = new ArrayList<String>();
	}
	
	public boolean open_file() {
		this.file = new File(file_name);
		return (file.exists());
	}
	public void read_file() {
		try{
			try {
				this.fis = new FileInputStream(file);
			} catch (FileNotFoundException e2) {
				// TODO Auto-generated catch block
				e2.printStackTrace();
			}	
			int octet = 0;
			while (octet !=  -1 ) {
			   try {
				octet = fis.read();
			} catch (IOException e1) {
				// TODO Auto-generated catch block
				e1.printStackTrace();
			}
			   byte[] b ={(byte)octet};
			   try {
				this.content.add(new String(b,"UTF-8"));
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			}
		} finally{
			if(this.fis != null)
				try {
					fis.close();
				} catch (IOException e) {
					e.printStackTrace();
				}
		}

	}
	abstract public void show();
}
