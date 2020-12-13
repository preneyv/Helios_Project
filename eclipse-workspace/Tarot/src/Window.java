import javax.swing.JFrame;

public class Window extends JFrame{
	
	WindowContainer panel;
	
	public Window() {
		super();
		propertiesWindow();
	}
	
	private void propertiesWindow() {
		this.setSize(600,350);
		this.setResizable(false);
		this.setLocationRelativeTo(null);
		this.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		this.setAlwaysOnTop(true);
		panel = new WindowContainer();
		this.setContentPane(panel);
	}
}
