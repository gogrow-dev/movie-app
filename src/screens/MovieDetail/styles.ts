import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
  },
  backdropContainer: {
    width: '100%',
    height: 211,
    position: 'relative',
  },
  backdrop: {
    width: '100%',
    height: 211,
  },
  poster: {
    position: 'absolute',
    bottom: -60,
    left: 29,
    width: 95,
    height: 120,
    borderRadius: 16,
  },
  title: {
    marginTop: 12,
    paddingRight: 29,
    marginLeft: 136,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    lineHeight: 27,
    color: colors.white,
  },
  categoriesList: {
    flexGrow: 0,
    marginTop: 78,
    paddingLeft: 29,
  },
  categoriesContent: {
    paddingRight: 29,
  },
});
