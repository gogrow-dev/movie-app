import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 32,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 17,
    paddingVertical: 14,
    borderRadius: 16,
    backgroundColor: colors.gray,
  },
  primary: {
    backgroundColor: colors.primary,
  },
  right: {
    right: 32,
  },
  left: {
    left: 32,
  },
  text: {
    fontFamily: 'Poppins-Bold',
    color: colors.white,
  },
  textPrimary: {
    color: colors.background,
  },
  icon: {
    width: 22,
    height: 22,
  },
  iconRightMargin: {
    marginLeft: 14,
  },
  iconLeftMargin: {
    marginRight: 14,
  },
});
