import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEF2F7',
    padding: 10,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 18,
    shadowColor: '#000',
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 3 },
    elevation: 5,
  },
  emoji: {
    fontSize: 30,
    marginBottom: 8,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 6,
  },
  text: {
    fontSize: 15,
    marginBottom: 4,
    color: '#3E4856',
  },
  description: {
    fontSize: 14,
    marginVertical: 8,
    color: '#546579',
  },
  button: {
    backgroundColor: '#1A73E8',
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonActive: {
    backgroundColor: '#DB4437',
  },
  buttonSecondary: {
    backgroundColor: '#6C757D',
    padding: 10,
    borderRadius: 8,
    marginVertical: 6,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
  ps5: {
    borderColor: '#4A76BB',
    borderWidth: 1.5,
  },
  xbox: {
    borderColor: '#107C10',
    borderWidth: 1.5,
  },
  pc: {
    borderColor: '#3B8BCC',
    borderWidth: 1.5,
  },
  switch: {
    borderColor: '#DB0A5B',
    borderWidth: 1.5,
  },
  genreAction: {
    backgroundColor: '#FFE5E5',
  },
  genreAdventure: {
    backgroundColor: '#E8F7FF',
  },
  genreRPG: {
    backgroundColor: '#F4E6FF',
  },
  genreStrategy: {
    backgroundColor: '#EDF7E3',
  },
  genreDefault: {
    backgroundColor: '#F8F8F8',
  },
});
