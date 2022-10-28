import 'react-native-gesture-handler';
import React, { FunctionComponent, useState } from 'react';
import {
  Modal,
  Pressable,
  View,
  useWindowDimensions,
} from 'react-native';
import Items from './Items';
import TopBar from './TopBar';
import PickerPlaceholder from './PickerPlaceholder';
import { useTheme } from 'react-native-paper';
import type { CustomizePickerProps } from './types';

const CustomizePicker: FunctionComponent<CustomizePickerProps> = ({
  containerStyle,
  visible,
  onRequestClose = () => {},
  animationType = 'slide',
  transparent = true,
  title,
  showSearch = true,
  checkboxProps,
  radioButtonProps,
  itemActiveStyle,
  itemActiveLabelStyle,
  itemLabelStyle,
  itemStyle,
  onItemPress = () => {},
  items = [],
  isBackAfterPick = true,
  renderItem,
  isTopBar = false,
  renderTopBar,
  closeIcon,
  selectedValue,
  overlayStyle,
  containerPlaceholderStyle,
  placeholderStyle,
  renderPlaceholder,
  placeholder,
  isMultiPick,
  renderItemRight,
  renderItemLeft,
  renderFooter,
  placeholderOnpress,
  titleStyle,
  searchValue,
  setSearchValue,
  searchPlaceholder,
  searchIcon,
  closeSearchIcon,
  searchInputProps,
  renderItems,
  getLabel = (item) => item?.label,
  getValue = (item) => item?.value,
  showCheckbox = false,
  showRadioButton = true,
}) => {
  const [interanlSearchValue, setInternalSearchValue] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const handleOnRequestClose = () => {
    onRequestClose && onRequestClose();
    setIsVisible(false);
  };
  const { colors } = useTheme();
  const { height } = useWindowDimensions();
  return (
    <>
      <PickerPlaceholder
        showPicker={() => setIsVisible(true)}
        {...{
          containerPlaceholderStyle,
          placeholderStyle,
          renderPlaceholder,
          placeholder,
          placeholderOnpress,
        }}
      />
      <Modal
        visible={visible === undefined ? isVisible : visible}
        {...{
          onRequestClose: handleOnRequestClose,
          animationType,
          transparent,
        }}
      >
        <Pressable
          style={[
            {
              flex: 1,
              justifyContent: 'center',
              paddingHorizontal: '10%',
              backgroundColor: '#00000065',
            },
            overlayStyle,
          ]}
          onPress={handleOnRequestClose}
        >
          <Pressable
            style={[
              {
                backgroundColor: colors.background,
                borderRadius: 4,
                maxHeight: height - 60,
              },
              containerStyle,
            ]}
          >
            <View>
              {isTopBar &&
                (renderTopBar ? (
                  renderTopBar()
                ) : (
                  <TopBar
                    {...{
                      title,
                      searchValue: searchValue || interanlSearchValue,
                      setSearchValue: setSearchValue || setInternalSearchValue,
                      showSearch,
                      // placeholder: 'Typesome thing...',
                      onRequestClose: handleOnRequestClose,
                      closeIcon,
                      titleStyle,
                      searchPlaceholder,
                      searchIcon,
                      closeSearchIcon,
                      searchInputProps,
                    }}
                  />
                ))}

              {renderItems ? (
                renderItems(items)
              ) : (
                <Items
                  items={items?.filter((item) =>
                    getLabel(item)
                      ?.toLocaleLowerCase()
                      .includes(
                        searchValue?.toLocaleLowerCase() ||
                          interanlSearchValue?.toLocaleLowerCase()
                      )
                  )}
                  {...{
                    checkboxProps,
                    radioButtonProps,
                    itemActiveStyle,
                    itemStyle,
                    onItemPress,
                    itemActiveLabelStyle,
                    itemLabelStyle,
                    isBackAfterPick,
                    onRequestClose: handleOnRequestClose,
                    renderItem,
                    selectedValue,
                    isMultiPick,
                    renderItemRight,
                    renderItemLeft,
                    getLabel,
                    getValue,
                    showCheckbox,
                    showRadioButton,
                  }}
                />
              )}
              {renderFooter && renderFooter()}
            </View>
          </Pressable>
        </Pressable>
      </Modal>
    </>
  );
};
export default CustomizePicker;
