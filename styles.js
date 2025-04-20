import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(240, 240, 206, 0.76)',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.53)',
  },
  scrollContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    color: 'rgb(199, 146, 234)',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    color: 'rgb(130, 170, 255)',
    fontSize: 16,
    marginBottom: 5,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    fontSize: 16,
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
  switchContainer:{
    width: '100%',
    marginBottom: 30,
  },
  buttonContainer: {
    width: '100%',
    marginTop: 10,
    marginBottom: 30,
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
  }
});