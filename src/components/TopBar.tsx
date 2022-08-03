import React, { FC } from 'react';
import { View, Pressable, StyleSheet } from 'react-native';
import CustomeText from './CustomeText';
import SearchBar from './SearchBar';
import { useTheme } from 'react-native-paper';
import type { TopBarProps } from './types';

const TobBar: FC<TopBarProps> = ({
  topbarStyle,
  onRequestClose,
  closeIcon = true,
  title,
  titleStyle,
  showSearch,
  searchValue,
  setSearchValue,
  searchPlaceholder,
  searchIcon,
  closeSearchIcon,
  searchInputProps,
}) => {
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.container,
        { borderBottomColor: colors.backdrop },
        topbarStyle,
      ]}
    >
      {closeIcon && (
        <Pressable onPress={onRequestClose}>
          {closeIcon !== true ? closeIcon : <CustomeText>Back</CustomeText>}
        </Pressable>
      )}
      {title && (
        <CustomeText style={[styles.title, titleStyle]}>{title}</CustomeText>
      )}
      {showSearch && (
        <SearchBar
          {...{
            searchValue,
            setSearchValue,
            searchPlaceholder,
            searchIcon,
            closeSearchIcon,
            searchInputProps,
          }}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    alignItems: 'center',
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
  },
});

export default TobBar;
