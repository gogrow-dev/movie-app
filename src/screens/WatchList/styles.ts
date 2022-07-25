import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 29,
  },
  title: {
    fontFamily: 'Poppins-Bold',
    fontSize: 36,
    color: colors.white,
  },
  subtitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 18,
    color: colors.white,
    marginTop: 22,
  },
  list: {
    marginTop: 29,
    paddingHorizontal: 29,
  },
  contentList: {
    paddingBottom: 100,
  },
});
