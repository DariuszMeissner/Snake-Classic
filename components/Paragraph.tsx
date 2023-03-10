import React, { FC } from 'react';
import { StyleSheet, Text } from 'react-native';
import { useFonts } from 'expo-font';

interface IParagraphProps {
  children: React.ReactNode;
}

const Paragraph: FC<IParagraphProps> = ({ children }) => {
  return <Text style={styles.paragraph}>{children}</Text>;
};

const styles = StyleSheet.create({
  paragraph: {
    fontSize: 14,
  },
});

export default Paragraph;
