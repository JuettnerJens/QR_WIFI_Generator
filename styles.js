import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    resizeMode: 'cover'
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'rgb(125, 78, 157)',
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'rgba(47, 73, 129, 0.7)',
    fontSize: 20,
    marginBottom: 5,
    fontWeight: '700',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  pickerContainer: {
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    overflow: 'hidden',
    paddingVertical: 0,
  },
  picker: {
    height: 175,
    width: '100%',
    marginTop: -50,
    marginBottom: -10,
  },
  switchContainer: {
    width: '100%',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    marginVertical: 20, // Falls bereits vorhanden
    alignItems: 'center', // Falls bereits vorhanden
    
    // Neues Styling für iOS-ähnlichen Look
    borderRadius: 10,
    overflow: 'hidden', // Wichtig für das Abschneiden der Ecken des Buttons
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 20 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3, 
    backgroundColor: 'rgb(47,47,47)'
  },
  qrContainer: {
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 30,
    padding: 20,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    width: '100%',
  },
  qrText: {
    marginTop: 15,
    textAlign: 'center',
    fontSize: 14,
    color: '#666666',
  },
});
