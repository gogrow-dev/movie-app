import { StyleSheet } from 'react-native';
import colors from '../../../styles/colors';

export default StyleSheet.create({
  container: {
    height: 32,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.gray,
    paddingHorizontal: 22,
    borderRadius: 16,
    marginRight: 12,
  },
  containerSelected: {
    backgroundColor: colors.primary,
  },
  text: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    color: colors.white,
  },
  textSelected: {
    color: colors.background,
  },
});
