import React, { FC, useCallback } from 'react';
import { Alert, View } from 'react-native';
import Item from './Item';
import type { ItemsProps } from './types';

const Items: FC<ItemsProps> = ({
  items = [],
  isMultiPick,
  isSinglePick,
  checkboxProps = {},
  radioButtonProps = {},
  itemActiveStyle,
  itemStyle,
  onItemPress,
  itemActiveLabelStyle,
  itemLabelStyle,
  isBackAfterPick,
  onRequestClose,
  renderItem,
  selectedValue,
  renderItemRight,
  renderItemLeft,
  getLabel,
  getValue,
  hideCheckbox,
}) => {
  const checkValue = useCallback(
    (value) => {
      return isMultiPick
        ? selectedValue?.find((val: any) => val === value)
        : selectedValue === value;
    },

    [selectedValue]
  );
  // get appropriate value
  const getAppropValue = useCallback((item) => getValue(item), [getValue]);
  // get appropriate label
  const getAppropLabel = useCallback((item) => getLabel(item), [getLabel]);
  return (
    <View>
      {items.map(
        renderItem
          ? renderItem
          : (item: any, i) => (
              <Item
                key={getAppropValue(item)}
                lastItem={items.length === i}
                firstItem={i === 0}
                label={getAppropLabel(item) || 'No label item'}
                value={getAppropValue(item)}
                isMultiPick={isMultiPick || item.isMultiPick}
                hideCheckbox={hideCheckbox}
                isSinglePick={isSinglePick || item.isSinglePick}
                checked={checkValue(getAppropValue(item))}
                onItemPress={() => {
                  if (isMultiPick && !Array.isArray(selectedValue)) {
                    return Alert.alert(
                      'Selected Value must be array in multi pick.'
                    );
                  }
                  onItemPress(item, i);
                  isBackAfterPick && onRequestClose();
                }}
                renderItemRight={
                  renderItemRight ? () => renderItemRight(item) : undefined
                }
                renderItemLeft={
                  renderItemLeft ? () => renderItemLeft(item) : undefined
                }
                {...{
                  checkboxProps,
                  radioButtonProps,
                  itemActiveStyle,
                  itemStyle,
                  itemActiveLabelStyle,
                  itemLabelStyle,
                  isBackAfterPick,
                }}
              />
            )
      )}
    </View>
  );
};

export default Items;
