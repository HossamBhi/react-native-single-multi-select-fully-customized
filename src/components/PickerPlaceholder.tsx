import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import CustomeText from './CustomeText';
import { useTheme } from 'react-native-paper';
import type { PickerPlaceholderProps } from './types';

const PickerPlaceholder: FC<PickerPlaceholderProps> = ({
  placeholder = 'Pick item...',
  showPicker,
  containerPlaceholderStyle,
  placeholderStyle,
  renderPlaceholder,
  placeholderOnpress,
}) => {
  const { colors } = useTheme();
  if (renderPlaceholder) return renderPlaceholder();
  return (
    <Pressable
      onPress={() => {
        showPicker();
        placeholderOnpress && placeholderOnpress();
      }}
      style={[
        styles.container,
        { backgroundColor: colors.surface },
        containerPlaceholderStyle,
      ]}
    >
      <CustomeText
        style={[
          { color: colors.onSurface, textAlign: 'center' },
          placeholderStyle,
        ]}
      >
        {placeholder}
      </CustomeText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: { paddingHorizontal: 14, paddingVertical: 12, borderRadius: 4 },
});

export default PickerPlaceholder;
