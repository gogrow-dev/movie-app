import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 120,
    width: '100%',
    marginBottom: 31,
  },
  image: {
    height: 120,
    width: 95,
    borderRadius: 16,
  },
  content: {
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 22,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    color: colors.white,
    fontSize: 12,
  },
  blurb: {
    fontFamily: 'Poppins-Regular',
    color: colors.white,
    fontSize: 12,
  },
  iconsContainer: { width: 40, alignItems: 'center' },
});
