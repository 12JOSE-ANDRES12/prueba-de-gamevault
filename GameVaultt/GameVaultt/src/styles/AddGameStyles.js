import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EFEFEF',
  },
  inner: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.14,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    color: '#505050',
  },
  input: {
    borderColor: '#D1D1D1',
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#0D47A1',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  buttonDisabled: {
    backgroundColor: '#A0A0A0',
  },
  buttonSecondary: {
    backgroundColor: '#455A64',
    borderRadius: 8,
    padding: 12,
    marginTop: 8,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
