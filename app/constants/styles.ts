import { StyleSheet } from 'react-native';
import Typography from './typography';
import Colours from './colours';

const Globalstyle = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colours.background,
    padding: 16,
  },
  heading: {
    fontFamily: Typography.heading,
    fontSize: 26,
    color: Colours.textPrimary,
  },
  subheading: {
    fontFamily: Typography.bodyBold,
    fontSize: 20,
    color: Colours.textSecondary,
  },
  bodyText: {
    fontFamily: Typography.body,
    fontSize: 16,
    color: Colours.textPrimary,
  },
});

export default Globalstyle;
