import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  marginTop: {
    marginTop: 18,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.white,
  },
  checked: {
    color: colors.primary,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
