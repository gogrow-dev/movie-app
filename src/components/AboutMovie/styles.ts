import { StyleSheet } from 'react-native';
import colors from '../../styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 29,
    marginTop: 18,
  },
  content: {
    paddingBottom: 100,
  },
  heading: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 14,
    color: colors.white,
  },
  divider: {
    width: 90,
    height: 4,
    backgroundColor: colors.gray,
    marginTop: 12,
    marginBottom: 6,
  },
  overview: {
    marginTop: 5,
  },
  sectionTitle: {
    fontFamily: 'Poppins-SemiBold',
    fontSize: 12,
    color: colors.white,
    marginTop: 12,
  },
  sectionText: {
    fontFamily: 'Poppins-Regular',
    fontSize: 12,
    color: colors.white,
  },
  subSection: {
    flexDirection: 'row',
  },
  subSectionMargin: {
    marginRight: 80,
  },
});
