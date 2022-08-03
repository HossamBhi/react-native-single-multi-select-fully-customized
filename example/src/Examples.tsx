import React, { useState } from 'react';
import { View, ScrollView, Text, Pressable, Image } from 'react-native';
import { useTheme } from 'react-native-paper';
import { CustomizePicker } from 'react-native-single-multi-select-fully-customized';
import CustomeText from './components/CustomeText';

const DUMMY_ITEMS_1 = [
  { label: 'Red', color: '#CE4C4E', value: '#CE4C4E' },
  { label: 'Orange', color: '#FFA200', value: '#FFA200' },
  { label: 'Yellow', color: '#FFE001', value: '#FFE001' },
  { label: 'Green', color: '#6FC330', value: '#6FC330' },
  { label: 'Blue', color: '#0070CE', value: '#0070CE' },
  { label: 'Purple', color: '#7B35BC', value: '#7B35BC' },
  { label: 'White', color: '#ffffff', value: '#ffffff' },
  { label: 'Black', color: '#000000', value: '#000000' },
  { label: 'Gray', color: '#696969', value: '#696969' },
];

export default function Examples() {
  const [selectedValue, setSelectedValue] = useState(DUMMY_ITEMS_1[0].value);
  const [showCustomePicker, setShowCustomePicker] = useState(false);
  const { colors } = useTheme();
  const [multiPickerValue, setMultiValues] = useState<any>([
    DUMMY_ITEMS_1[0].value,
  ]);
  return (
    <View style={[{ flex: 1, backgroundColor: colors.background }]}>
      <CustomeText
        style={{
          textAlign: 'center',
          padding: 14,
          borderBottomColor: colors.backdrop,
          borderBottomWidth: 1,
          marginBottom: 10,
        }}
      >
        Examples
      </CustomeText>
      <ScrollView style={{ paddingHorizontal: 20, paddingTop: 20 }}>
        <CustomizePicker
          visible={showCustomePicker}
          onRequestClose={() => setShowCustomePicker(false)}
          key={'single'}
          items={DUMMY_ITEMS_1}
          onItemPress={(item) => setSelectedValue(item.value)}
          selectedValue={selectedValue}
          placeholder={"I'm a single picker full customize"}
          containerPlaceholderStyle={{
            backgroundColor: '#333',
            marginBottom: 16,
          }}
          placeholderOnpress={() => setShowCustomePicker(true)}
          isTabBar={true}
          overlayStyle={{ paddingHorizontal: 0 }}
          containerStyle={{ maxHeight: '100%', height: '100%' }}
          renderFooter={() => (
            <Pressable
              onPress={() => setShowCustomePicker(false)}
              style={{
                padding: 4,
                backgroundColor: '#333',
                marginTop: 50,
                marginHorizontal: '10%',
                borderRadius: 4,
              }}
            >
              <Text style={{ color: '#ddd', textAlign: 'center' }}>
                Close Me
              </Text>
            </Pressable>
          )}
          renderItemLeft={(item) => (
            <View
              style={{
                width: 25,
                backgroundColor: item?.color || '#345',
                height: '100%',
              }}
            ></View>
          )}
          itemLabelStyle={{ paddingHorizontal: 16 }}
          closeIcon={
            <Image
              source={require('./assets/icons8-back-48.png')}
              style={{ width: 36, height: 36, backgroundColor: '#ddd' }}
              resizeMode="center"
            />
          }
          searchIcon={
            <Image
              source={require('./assets/icons8-search-48.png')}
              style={{ width: 36, height: 36, backgroundColor: '#ddd' }}
              resizeMode="center"
            />
          }
          closeSearchIcon={
            <Image
              source={require('./assets/icons8-close-48.png')}
              style={{ maxWidth: 36, maxHeight: 36, backgroundColor: '#ddd' }}
              resizeMode="center"
            />
          }
        />
        <CustomizePicker
          key={'single withh radio button'}
          items={DUMMY_ITEMS_1}
          onItemPress={(item) => setSelectedValue(item.value)}
          selectedValue={selectedValue}
          placeholder={"I'm a single with radio button"}
          containerPlaceholderStyle={{
            backgroundColor: '#333',
            marginBottom: 16,
          }}
          isSinglePick={true}
        />
        <CustomizePicker
          key={'multi'}
          items={DUMMY_ITEMS_1}
          onItemPress={(item) => {
            const findIndex = multiPickerValue?.indexOf(item.value);
            if (findIndex > -1)
              setMultiValues(
                multiPickerValue.filter((value: any) => value !== item.value)
              );
            else
              setMultiValues([...new Set([...multiPickerValue, item.value])]);
          }}
          selectedValue={multiPickerValue}
          placeholder={'Multi picker'}
          isMultiPick={true}
          isBackAfterPick={false}
          containerPlaceholderStyle={{
            backgroundColor: '#333',
          }}
        />
      </ScrollView>
    </View>
  );
}
