import type {
  StyleProp,
  TextInputProps,
  TextProps,
  ViewProps,
} from 'react-native';

//
export interface CustomizePickerProps {
  /* ======> modal props <===== */
  //  show modal or not
  visible?: boolean;
  //   for close modal
  onRequestClose?: () => void;
  // modal transparent prop
  transparent?: boolean;
  // react native modal animated type
  animationType?: 'none' | 'slide' | 'fade';
  /* ======> container props <===== */
  renderItems?: (items: any) => JSX.Element;
  //   overlay style
  overlayStyle?: StyleProp<any>;
  //  style for container inside overlay
  containerStyle?: StyleProp<any>;
  /* ======> tab bar props <===== */
  //   if false then hide tabbar
  isTabBar?: boolean;
  //   render custome Tabbar JSX element
  renderTabBar?: () => JSX.Element;
  //   custome icon for close modal button
  closeIcon?: JSX.Element;
  // title modal
  title?: string;
  //   show search or hide
  showSearch?: boolean;
  /* ======> item props <===== */
  //   override props on check box react native paper
  checkboxProps?: StyleProp<any>;
  //   override props on radio button react native paper
  radioButtonProps?: StyleProp<any>;
  //   style for item container
  itemStyle?: StyleProp<ViewProps>;
  //   style for label inside item
  itemLabelStyle?: StyleProp<any>;
  // style for active item container
  itemActiveStyle?: StyleProp<any>;
  //   style for active item label
  itemActiveLabelStyle?: StyleProp<any>;
  // on item press
  onItemPress: (item: any, index: Number) => void;
  //   items to display in modal
  items: any[];
  //   if  modal hide when item click
  isBackAfterPick?: boolean;
  //   render custome JSX Elemnet for item
  renderItem?: (item: any) => JSX.Element;
  //    render JSX in right of item
  renderItemRight?: (item: any) => JSX.Element;
  //   render JSX in left of item
  renderItemLeft?: (item: any) => JSX.Element;
  //   user selected items
  selectedValue?: any;
  // if true show checkbox componetn
  isMultiPick?: boolean;
  // hide checkbox default to false
  hideCheckbox?: boolean;
  // if true show radio button component
  isSinglePick?: boolean;
  //  retrun appropriate label
  getLabel?: (item: any) => string;
  //  retrun appropriate value
  getValue?: (item: any) => string;
  /* ======> place holder component props <===== */
  // placeholder text
  placeholder?: string;
  // style for container placeholder
  containerPlaceholderStyle?: StyleProp<any>;
  //   style for text place holder
  placeholderStyle?: StyleProp<any>;
  //   render custome placeholder
  renderPlaceholder?: () => JSX.Element;
  //   render custome footer
  renderFooter?: () => JSX.Element;
  // click on place holder
  placeholderOnpress?: () => void;
  /* ======> topbar props <===== */
  // topbar style
  topbarStyle?: StyleProp<ViewProps>;
  // style for title
  titleStyle?: StyleProp<TextProps>;
  // search value
  searchValue?: string;
  // set Search value
  setSearchValue?: any;
  // search place holder
  searchPlaceholder?: string;
  // render icon search for more customize
  searchIcon?: JSX.Element;
  // close search icon show when search active
  closeSearchIcon?: JSX.Element;
  // override props for search input
  searchInputProps?: TextInputProps;
}

// items interface props
export interface ItemsProps {
  //  retrun appropriate label
  getLabel: (item: any) => string;
  //  retrun appropriate value
  getValue: (item: any) => string;
  // if true show checkbox componetn
  isMultiPick?: boolean;
  // hide checkbox default to false
  hideCheckbox?: boolean;
  // if true show radio button component
  isSinglePick?: boolean;
  //   for close modal
  onRequestClose: () => void;
  /* ======> item props <===== */
  //   override props on check box react native paper
  checkboxProps?: StyleProp<any>;
  //   override props on radio button react native paper
  radioButtonProps?: StyleProp<any>;
  //   style for item container
  itemStyle?: StyleProp<ViewProps>;
  //   style for label inside item
  itemLabelStyle?: StyleProp<any>;
  // style for active item container
  itemActiveStyle?: StyleProp<any>;
  //   style for active item label
  itemActiveLabelStyle?: StyleProp<any>;
  // on item press
  onItemPress: (item: any, index: Number) => void;
  //   items to display in modal
  items: any[];
  //   if  modal hide when item click
  isBackAfterPick?: boolean;
  //   render custome JSX Elemnet for item
  renderItem?: (item: object) => JSX.Element;
  //    render JSX in right of item
  renderItemRight?: (item: object) => JSX.Element;
  //   render JSX in left of item
  renderItemLeft?: (item: object) => JSX.Element;
  //   user selected items
  selectedValue?: any;
}

// item props
export interface ItemProps {
  label?: String;
  //   are this item is picked ?
  checked?: boolean;
  value?: any;
  //   first item in array
  lastItem: boolean;
  //  last item in array
  firstItem: boolean;
  // if true show checkbox componetn
  isMultiPick?: boolean;
  // hide checkbox default to false
  hideCheckbox?: boolean;
  // if true show radio button component
  isSinglePick?: boolean;
  //   override props on check box react native paper
  checkboxProps?: StyleProp<any>;
  //   override props on radio button react native paper
  radioButtonProps?: StyleProp<any>;
  //   style for item container
  itemStyle?: StyleProp<ViewProps>;
  //   style for label inside item
  itemLabelStyle?: StyleProp<any>;
  // style for active item container
  itemActiveStyle?: StyleProp<any>;
  //   style for active item label
  itemActiveLabelStyle?: StyleProp<any>;
  // on item press
  onItemPress: () => void;
  //   if  modal hide when item click
  isBackAfterPick?: boolean;
  //    render JSX in right of item
  renderItemRight?: () => JSX.Element;
  //   render JSX in left of item
  renderItemLeft?: () => JSX.Element;
}

// place holder component props
export interface PickerPlaceholderProps {
  // function to show picker when click
  showPicker: () => void;
  // place holder value default to Pick item
  placeholder?: string;
  // style for container placeholder
  containerPlaceholderStyle?: StyleProp<any>;
  //   style for text place holder
  placeholderStyle?: StyleProp<any>;
  //   render custome placeholder
  renderPlaceholder?: () => JSX.Element;
  // placeholder ononPress function
  placeholderOnpress?: () => void;
}

export interface TopBarProps {
  // topbar style
  topbarStyle?: StyleProp<ViewProps>;
  //   for close modal
  onRequestClose?: () => void;
  // close icon element
  closeIcon?: JSX.Element;
  // title for top bar
  title?: String;
  // style for title
  titleStyle?: StyleProp<TextProps>;
  // is show search bar
  showSearch?: boolean;
  // search value
  searchValue?: string;
  // set Search value
  setSearchValue?: any;
  // search place holder
  searchPlaceholder?: string;
  // render icon search for more customize
  searchIcon?: JSX.Element;
  // close search icon show when search active
  closeSearchIcon?: JSX.Element;
  // override props for search input
  searchInputProps?: TextInputProps;
}

export interface SearchBarProps {
  // override props for search input
  searchInputProps?: TextInputProps;
  // search place holder
  searchPlaceholder?: string;
  // render icon search for more customize
  searchIcon?: JSX.Element;
  // close search icon show when search active
  closeSearchIcon?: JSX.Element;
  // search value
  searchValue?: string;
  // set search value
  setSearchValue: any;
}
