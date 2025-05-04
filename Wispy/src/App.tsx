import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import COLORS from './constants/colors';
import FONTS from './constants/fonts';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello, Wispy 👀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.wispyPink,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: COLORS.wispyWhite,
    fontSize: 32,
    fontFamily: FONTS.suitBold,
  },
});

export default App;
