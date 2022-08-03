import { useTheme } from 'react-native-paper';
import React, { FC } from 'react';
import { I18nManager, StyleProp, Text } from 'react-native';

interface CustomeTextProps {
  style?: StyleProp<any>;
}
const CustomeText: FC<CustomeTextProps> = ({ children, style, ...props }) => {
  const { colors } = useTheme();
  return (
    <Text
      style={[
        {
          color: colors.text,
          writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',
        },
        style,
      ]}
      {...props}
    >
      {children}
    </Text>
  );
};

export default CustomeText;
