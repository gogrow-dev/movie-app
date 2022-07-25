import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    paddingVertical: 7,
    paddingHorizontal: 22,
    backgroundColor: colors.gray,
    borderRadius: 16,
    marginRight: 12,
  },
  text: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.white,
  },
});
