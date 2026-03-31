import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F6FF',
    padding: 14,
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: '#ffffff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#4F5A6C',
    marginBottom: 6,
  },
  date: {
    fontSize: 12,
    color: '#7E8C9E',
  },
  indicator: {
    fontSize: 14,
    fontWeight: '500',
    marginVertical: 6,
    textAlign: 'center',
  },
  message: {
    fontSize: 13,
    color: '#3A4B63',
    textAlign: 'center',
    marginBottom: 12,
  },
  button: {
    backgroundColor: '#1E88E5',
    borderRadius: 8,
    padding: 12,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
  },
});
