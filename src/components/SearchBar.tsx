import React, { FC, useState } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { useTheme } from 'react-native-paper';
import CustomeText from './CustomeText';
import type { SearchBarProps } from './types';

const SearchBar: FC<SearchBarProps> = ({
  searchInputProps,
  searchPlaceholder,
  searchIcon,
  closeSearchIcon,
  searchValue,
  setSearchValue,
}) => {
  const [toggleSearch, setToggleSearch] = useState(false);
  const { colors } = useTheme();
  return (
    <View
      style={[
        styles.container,
        { backgroundColor: colors.surface },
        toggleSearch && { flex: 1 },
      ]}
    >
      {toggleSearch && (
        <TextInput
          style={[styles.input, { color: colors.onSurface }]}
          placeholder={searchPlaceholder || 'Type something...'}
          value={searchValue}
          onChangeText={setSearchValue}
          placeholderTextColor={colors.onSurface}
          {...searchInputProps}
        />
      )}
      {
        <Pressable
          onPress={() => {
            toggleSearch === true && setSearchValue('');
            setToggleSearch(!toggleSearch);
          }}
          style={{ alignItems: 'center', justifyContent: 'center' }}
        >
          {toggleSearch
            ? closeSearchIcon || <CustomeText>X</CustomeText>
            : searchIcon || <CustomeText>Search</CustomeText>}
        </Pressable>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    paddingHorizontal: 12,
    marginStart: 10,
    paddingVertical: 6,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#B1B1B1',
    paddingEnd: 12,
  },
});

export default SearchBar;
