import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JPanel;

public class WindowContainer extends JPanel{
	
	private JButton buttonAdd;
	private JButton buttonEdit;
	private JButton buttonSearch;
	private JLabel welcLabel;
	
	public WindowContainer() {
		
		super();
		this.propertiesContainer();
	}
	
	private void propertiesContainer() {

		this.propLabelWelc();
		this.setLayout(null);
		this.propButtonAdd();
		this.propButtonEdit();
		this.propButtonSearch();
	}
	
	private void propLabelWelc() {
		
		welcLabel = new JLabel();
		this.welcLabel.setText("Welcome to the tarot game interface !");
		this.welcLabel.setBounds(180,10,500,50);
		this.add(welcLabel);
		
	}
	
	private void propButtonAdd() {
		
		buttonAdd = new JButton();
		this.buttonAdd.setText("Add a card");
		this.buttonAdd.setBounds(150,80,130,50);
		this.add(buttonAdd);
		
	}
	
	private void propButtonEdit() {
		
		buttonEdit = new JButton();
		this.buttonEdit.setText("Edit a card");
		this.buttonEdit.setBounds(300,80,130,50);
		this.add(buttonEdit);
		
	}
	
	private void propButtonSearch() {
		
		buttonSearch = new JButton();
		this.buttonSearch.setText("Search a card");
		this.buttonSearch.setBounds(225,150,130,50);
		this.add(buttonSearch);
		
	}
}
