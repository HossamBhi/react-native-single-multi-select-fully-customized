import React, { FC } from 'react';
import { Pressable, StyleSheet } from 'react-native';
import { Checkbox, RadioButton } from 'react-native-paper';
import CustomeText from './CustomeText';
import type { ItemProps } from './types';

const Item: FC<ItemProps> = ({
  label,
  itemStyle,
  checked,
  checkboxProps,
  radioButtonProps,
  isMultiPick,
  value,
  itemActiveStyle = {},
  itemActiveLabelStyle,
  itemLabelStyle,
  onItemPress,
  lastItem,
  firstItem,
  renderItemRight,
  renderItemLeft,
  showCheckbox,
  showRadioButton,
}) => {
  return (
    <Pressable
      style={[
        styles.container,
        itemStyle,
        checked &&
          firstItem &&
          checked && { borderTopLeftRadius: 4, borderTopRightRadius: 4 },
        lastItem &&
          checked && { borderBottomLeftRadius: 4, borderBottomRightRadius: 4 },
        checked && { backgroundColor: '#2E7D32', ...itemActiveStyle },
      ]}
      onPress={() => onItemPress()}
    >
      {renderItemLeft && renderItemLeft()}
      <CustomeText
        style={[
          styles.label,
          itemLabelStyle,
          checked && { color: '#ffffff', ...itemActiveLabelStyle },
        ]}
      >
        {label}
      </CustomeText>
      {isMultiPick && showCheckbox === true && (
        <Checkbox
          status={checked ? 'checked' : 'unchecked'}
          onPress={onItemPress}
          color="#41c300"
          uncheckedColor="#333333"
          {...checkboxProps}
        />
      )}
      {showRadioButton && (
        <RadioButton
          value={value}
          status={checked ? 'checked' : 'unchecked'}
          onPress={onItemPress}
          color="#41c300"
          uncheckedColor="#333333"
          {...radioButtonProps}
        />
      )}
      {renderItemRight && renderItemRight()}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: { flex: 1 },
});

export default Item;
