import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
// import { fontBold, fontRegular, fontSemi } from '../helpers/_config';
import Animated, {Easing} from 'react-native-reanimated';
import PropTypes from 'prop-types';
import React, {useState, useEffect, useRef} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Dimensions,
  PixelRatio,
  ScrollView,
  ImageBackground,
  StatusBar,
  RefreshControl,
  TextInput,
  StyleSheet,
  Platform,
  Image,
} from 'react-native';
// import Entypo from 'react-native-vector-icons/Entypo';
// import AppColors from '../helpers/_colors';
const {Value} = Animated;
const {width, height} = Dimensions.get('window');

interface GeneralProps {
  style?: any;
  backgroundColor?: any;
  color?: any;
}

interface MarginProps {
  margin?: number;
  marginRight?: number;
  marginLeft?: number;
  marginTop?: any;
  marginBottom?: number;
  marginVertical?: number;
  marginHorizontal?: number;
}

interface PaddingProps {
  padding?: number;
  paddingLeft?: number;
  paddingRight?: number;
  paddingTop?: number;
  paddingBottom?: number;
  paddingVertical?: number;
  paddingHorizontal?: any;
}

interface BorderRadiusProps {
  borderRadius?: number;
  borderBottomLeftRadius?: number;
  borderBottomRightRadius?: number;
  borderTopLeftRadius?: number;
  borderTopRightRadius?: number;
}

interface BorderWidth {
  borderBottomWidth?: number;
  borderTopWidth?: number;
  borderLeftWidth?: number;
  borderRightWidth?: number;
  borderWidth?: number;
  borderColor?: any;
  borderStyle?: any;
}

export const scaleFont = (val: any) => {
  let factor = PixelRatio.get();
  factor > 2.2 ? (factor = 2) : null;
  let size = ((factor * width) / 1000) * val;
  return size + 7;
};

const Elevation = (elevation: any) => {
  let response = {};
  elevation == null || undefined
    ? (response = {})
    : (response = {
        elevation,
        shadowColor: '#0001',
        shadowOffset: {width: 0, height: elevation * 0.6},
        shadowOpacity: 0.8,
        shadowRadius: elevation * 0.5,
      });
  return response;
};

export const Height = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * height);
  return res;
};

export const Width = (val: any) => {
  let res;
  val === undefined || null ? (res = null) : (res = (val / 100) * width);
  return res;
};

/**ANCHOR H1 */
interface H {
  color?: any;
  fontSize?: number;
  lineHeight?: number;
  style?: any; //edited style propType. fron array to object
  textAlign?: 'center' | 'left' | 'right';
  fontWeight?: 'bold' | 'medium' | 'regular';
  numberOfLines?: number;
  text?: any;
  children: React.ReactNode;
  flex?: number;
  ellipses?: 'head' | 'tail' | 'middle' | 'clip';
}

export const H1 = ({...props}: H) => {
  return (
    <Text
      allowFontScaling={false}
      numberOfLines={props.numberOfLines}
      style={[
        {
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(25),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(25),
          //   fontFamily: fontBold,
          textAlign: props.textAlign,
          fontWeight: props.fontWeight, // added this
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

/**ANCHOR H2 */
export const H2 = ({...props}: H) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      ellipsizeMode={props.ellipses}
      allowFontScaling={false}
      style={[
        {
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(20),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(20),
          //   fontFamily: fontRegular,
          textAlign: props.textAlign,
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

/**ANCHOR P */
export const P = (props: H) => {
  return (
    <Text
      numberOfLines={props.numberOfLines}
      allowFontScaling={false}
      style={[
        {
          color: props.color,
          fontSize: scaleFont(props.fontSize) || scaleFont(14),
          lineHeight:
            scaleFont(props.lineHeight) ||
            scaleFont(props.fontSize) ||
            scaleFont(14),
          //   fontFamily: fontRegular,
          textAlign: props.textAlign,
          flex: props.flex, //added this
        },
        props.style,
      ]}>
      {props.children || props.text}
    </Text>
  );
};

/**ANCHOR CONTAINER */

interface Container {
  overflow?: boolean;
  opacity?: number;
  left?: number;
  right?: number;
  top?: number;
  bottom?: number;
  position?: any;
  maxWidth?: any;
  maxHeight?: any;
  minWidth?: any;
  minHeight?: any;
  widthPercent?: any;
  elevation?: any;
  dir?: 'row' | 'column' | 'row-reverse';
  wrap?: string;
  flex?: number;
  height?: number;
  width?: number;
  verticalAlignment?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  horizontalAlignment?: 'flex-start' | 'flex-end' | 'center' | 'space-between';
  selfAlignment?: 'flex-start' | 'flex-end' | 'center';
  backgroundColor?: any;
  style?: object;
  borderColor?: any;
  onLayout?: any;
  // selfAlignment?: any;
  borderStyle?: object;
  children?: React.ReactNode;
}

export const Container = ({
  ...props
}: Container &
  MarginProps &
  PaddingProps &
  BorderWidth &
  BorderRadiusProps) => {
  return (
    <View
      {...props}
      onLayout={props.onLayout}
      style={[
        {
          // overflow: props.overflow ? 'hidden' : null,
          opacity: props.opacity,
          ...Elevation(props.elevation),
          flexDirection: props.dir,
          alignSelf: props.selfAlignment,
          flexWrap: props.wrap,
          flex: props.flex,
          height: Height(props.height),
          width: Width(props.width) || props.widthPercent,
          justifyContent:
            props.dir === 'row'
              ? props.horizontalAlignment
              : props.verticalAlignment,
          alignItems:
            props.dir === 'row'
              ? props.verticalAlignment
              : props.horizontalAlignment,
          backgroundColor:
            props.elevation > 0 && props.backgroundColor == null
              ? '#fff'
              : props.backgroundColor,
          borderRadius: props.borderRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderBottomRightRadius: props.borderBottomRightRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderTopRightRadius: props.borderTopRightRadius,
          margin: Width(props.margin),
          marginVertical: Height(props.marginVertical),
          marginHorizontal: Width(props.marginHorizontal),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
          marginTop: Height(props.marginTop),
          marginBottom: Height(props.marginBottom),
          paddingRight: Width(props.paddingRight),
          paddingLeft: Width(props.paddingLeft),
          paddingTop: Height(props.paddingTop),
          paddingBottom: Height(props.paddingBottom),
          padding: Width(props.padding),
          borderBottomWidth: props.borderBottomWidth,
          borderTopWidth: props.borderTopWidth,
          borderLeftWidth: props.borderLeftWidth,
          borderRightWidth: props.borderRightWidth,
          borderWidth: props.borderWidth,
          borderStyle: props.borderStyle,
          borderColor: props.borderColor,
          maxWidth: props.maxWidth,
          maxHeight: props.maxHeight,
          minWidth: props.minWidth,
          minHeight: props.minHeight,
          position: props.position,
          left: props.left, //added this
          right: props.right, //added this
          top: props.top, //added this
          bottom: props.bottom, //added this
        },
        props.style,
      ]}>
      {props.children}
    </View>
  );
};

/* ANCHOR AVATAR */
interface Avatar {
  marginLeft?: number;
  marginRight?: number;
  borderWidth?: number;
  borderColor?: any;
  url?: string;
  source?: any;
  elevation?: number;
  size?: number;
  backgroundColor?: any;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  fit?: 'cover' | 'contain';
}

export const Avatar = ({
  ...props
}: Avatar & MarginProps & PaddingProps & BorderWidth & BorderRadiusProps) => {
  return (
    <Container
      style={[
        {
          ...Elevation(props.elevation),
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          height: Width(props.size) || Width(10),
          width: Width(props.size) || Width(10),
          backgroundColor: props.backgroundColor,
          borderRadius: Width(props.size) / 2 || Width(10) / 2,
          marginRight: Width(props.marginRight),
          marginLeft: Width(props.marginLeft),
        },
      ]}>
      <ImageWrap
        source={props.source || {uri: props.url}}
        resizeMode={props.fit || 'cover'}
        style={[
          styles.overflow,
          {
            height: Width(props.size) || Width(10),
            width: Width(props.size) || Width(10),
            borderRadius: Width(props.size) / 2 || Width(10) / 2,
            borderWidth: props.borderWidth,
            borderColor: props.borderColor,
          },
        ]}
      />
    </Container>
  );
};

/* ANCHOR SIZED BOX */
interface SizedBox {
  height?: number;
  width?: number;
  backgroundColor?: any;
  flex?: number;
}
export const SizedBox = ({...props}: SizedBox) => {
  return (
    <Container
      style={{
        width: Width(props.width),
        height: Height(props.height),
        flex: props.flex,
        backgroundColor: props.backgroundColor,
      }}
    />
  );
};

/* ANCHOR SCROLL AREA */
interface ScrollArea {
  horizontal?: boolean;
  flexGrow?: number;
  refValue?: any;
  children: React.ReactNode;
}
export const ScrollArea = ({...props}: ScrollArea) => (
  <ScrollView
    keyboardShouldPersistTaps="handled"
    contentContainerStyle={{flexGrow: props.flexGrow}}
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    ref={props.refValue}>
    {props.children}
  </ScrollView>
);

/* ANCHOR SCROLL AREA REFRESH */
interface ScrollAreaRefresh {
  horizontal: boolean;
  onRefresh: () => void;
  refreshing: boolean;
  flexGrow: number;
  children: React.ReactNode;
}
export const ScrollAreaRefresh = ({...props}: ScrollAreaRefresh) => (
  <ScrollView
    refreshControl={
      <RefreshControl
        onRefresh={props.onRefresh}
        refreshing={props.refreshing || false}
      />
    }
    horizontal={props.horizontal}
    showsVerticalScrollIndicator={false}
    showsHorizontalScrollIndicator={false}
    contentContainerStyle={{flexGrow: props.flexGrow}}>
    {props.children}
  </ScrollView>
);

/* ANCHOR IMAGE WRAP */
interface ImageWrapProps {
  elevation?: number;
  source: any;
  url?: any;
  height?: any;
  width?: any;
  widthPercent?: any;
  onPress?: () => void;
  backgroundColor?: any;
  overlayColor?: any;
  horizontalAlignment?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  verticalAlignment?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  position?: 'absolute' | 'relative';
  fit?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
  children?: React.ReactNode;
}

export const ImageWrap = ({
  ...props
}: ImageWrapProps &
  BorderRadiusProps &
  MarginProps &
  PaddingProps &
  BorderWidth) => {
  return (
    <ImageBackground
      source={props.source || {uri: props.url}}
      resizeMode={props.fit || 'contain'}
      style={[
        styles.overflow,
        {
          position: props.position,
          width: Width(props.width) || props.widthPercent || '100%',
          height: Height(props.height) || '100%',
          backgroundColor: props.backgroundColor,
          borderRadius: props.borderRadius,
          borderTopLeftRadius: props.borderTopLeftRadius,
          borderBottomLeftRadius: props.borderBottomLeftRadius,
          borderWidth: props.borderWidth, //added this
          borderColor: props.borderColor, //added this
          margin: props.margin,
          marginVertical: props.marginVertical,
          marginHorizontal: props.marginHorizontal,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginTop,
          marginBottom: props.marginBottom,
          padding: props.padding,
        },
      ]}>
      <Container flex={1} backgroundColor={props.overlayColor}>
        {props.children}
      </Container>
    </ImageBackground>
  );
};

/* ANCHOR TOUCH WRAP */
interface TouchWrapProps {
  disabled?: boolean;
  opacity?: number;
  elevation?: number;
  height?: any;
  width?: any;
  widthPercent?: any;
  onPress?: () => void;
  backgroundColor?: any;
  borderBottomColor?: any;
  borderBottomWidth?: number;
  flex?: number;
  verticalAlignment?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  horizontalAlignment?:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'stretch'
    | 'baseline';
  borderRadius?: number;
  justifyContent?: string;
  alignItems?: string;
  style?: any;
  children?: any;
}

export const TouchWrap = ({
  ...props
}: TouchWrapProps & PaddingProps & BorderWidth) => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      disabled={props.disabled}
      // activeOpacity={0.9}
      style={[
        {
          ...Elevation(props.elevation),
          opacity: props.opacity,
          padding: Width(props.padding),
          paddingTop: Width(props.paddingTop),
          paddingBottom: Width(props.paddingBottom),
          paddingLeft: Width(props.paddingLeft),
          paddingRight: Width(props.paddingRight),
          paddingVertical: Height(props.paddingVertical),
          paddingHorizontal: Width(props.paddingHorizontal),
          flex: props.flex,
          backgroundColor: props.backgroundColor,
          borderBottomColor: props.borderBottomColor,
          borderBottomWidth: Width(props.borderBottomWidth),
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
          borderStyle: props.borderStyle,
          width: Width(props.width) || props.widthPercent,
          height: Height(props.height),
          borderRadius: props.borderRadius,
          justifyContent: props.verticalAlignment,
          alignItems: props.horizontalAlignment,
        },
        props.style,
      ]}>
      {props.children}
    </TouchableOpacity>
  );
};

/**ANCHOR PAGE */
interface PageProps {
  fullscreen?: boolean;
  backgroundColor?: any;
  barColor: any;
  barIconColor: 'dark' | 'light';
  children?: React.ReactNode;
}

export const Page = ({
  ...props
}: PageProps & PaddingProps & BorderWidth & MarginProps) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.flex}>
      {Platform.OS === 'ios' && (
        <Container height={4} backgroundColor={props.barColor || '#f4f4f4'} />
      )}
      <Container
        flex={1}
        backgroundColor={props.backgroundColor || '#fff'}
        padding={props.padding}
        paddingTop={props.paddingTop}
        paddingBottom={props.paddingBottom}
        paddingLeft={props.paddingLeft}
        paddingRight={props.paddingRight}
        paddingVertical={props.paddingVertical}
        paddingHorizontal={Width(props.paddingHorizontal)}>
        <StatusBar
          translucent={true}
          backgroundColor={props.barColor || '#0000'}
          barStyle={
            props.barIconColor === 'dark' ? 'dark-content' : 'light-content'
          }
        />
        {props.children}
      </Container>
    </KeyboardAvoidingView>
  );
};

/**ANCHOR ROUNDED */
interface RoundedProps {
  backgroundColor?: any;
  size?: number;
  radius?: number;
  height?: number;
  position?: 'absolute' | 'relative';
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
  elevation?: number;
  children?: React.ReactNode;
}

export const Rounded = ({
  ...props
}: RoundedProps & MarginProps & BorderRadiusProps & BorderWidth) => {
  return (
    <Container
      style={[
        styles.rounded,
        {
          backgroundColor: props.backgroundColor,
          height: Height(props.size),
          width: Height(props.size),
          ...Elevation(props.elevation),
          borderRadius: props.radius || Height(props.size) / 2,
          marginRight: props.marginRight,
          marginLeft: props.marginLeft,
          marginTop: props.marginRight,
          marginBottom: props.marginLeft,
          position: props.position,
          top: Height(props.top),
          bottom: Height(props.bottom),
          left: Width(props.left),
          right: Width(props.right),
          borderWidth: props.borderWidth,
          borderColor: props.borderColor,
        },
      ]}>
      {props.children}
    </Container>
  );
};

/* ANCHOR  INPUT(ICON SECURE) */
interface InputWrapProps {
  multiline?: boolean;
  maxHeight?: number;
  maxLength?: number;
  width?: number;
  height?: number;
  borderColor?: any;
  borderWidth?: number;
  color?: any;
  showSecure?: boolean;
  onToggleSecure?: () => void;
  secureIcon?: any;
  icon?: any;
  inputStyle?: object;
  fontSize?: number;
  returnKeyType?: 'next' | 'done' | 'go' | 'search';
  fontWeight?: string;
  fontFamily?: string;
  secure?: boolean;
  autoCompleteType?:
    | 'off'
    | 'cc-csc'
    | 'cc-exp'
    | 'cc-exp-month'
    | 'cc-exp-year'
    | 'cc-number'
    | 'email'
    | 'name'
    | 'password'
    | 'postal-code'
    | 'street-address'
    | 'tel'
    | 'username';
  autoCorrect?: boolean;
  numberOfLines?: number;
  placeholder?: string;
  onChangeText?: () => void;
  onFocus?: () => void;
  onBlur?: () => void;
  elevation?: number;
  backgroundColor?: any;
  borderRadius?: number;
  onSubmit?: () => void;
  onPress?: () => void;
  keyboardType?:
    | 'default'
    | 'email-address'
    | 'numeric'
    | 'phone-pad'
    | 'number-pad';
  textAlignVertical?: 'auto' | 'top' | 'bottom' | 'center';
  value?: any;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  placeholderTextColor?: any;
  refValue?: any;
  inputHeight?: number;
  verticalAlignment?: 'center';
  horizontalAlignment?: 'center';
  textAlign?: 'center' | 'left' | 'right';
  children?: Element;
  flex?: number;
  textPaddingVertical?: number;
  textPaddingHorizontal?: number;
}

export const InputWrap = ({...props}: InputWrapProps & PaddingProps) => {
  return (
    <Container
      dir="row"
      flex={props.flex}
      width={props.width}
      height={props.height}
      elevation={props.elevation}
      backgroundColor={props.backgroundColor}
      borderRadius={props.borderRadius}
      borderColor={props.borderColor}
      borderWidth={props.borderWidth}
      style={styles.overflow}>
      <TextInput
        blurOnSubmit={false}
        onFocus={props.onFocus}
        onBlur={props.onBlur}
        maxLength={props.maxLength}
        textAlign={props.textAlign}
        textAlignVertical={props.textAlignVertical || 'top'}
        multiline={props.multiline}
        onSubmitEditing={props.onSubmit}
        keyboardType={props.keyboardType}
        ref={props.refValue}
        onChangeText={props.onChangeText}
        value={props.value}
        placeholder={props.placeholder}
        placeholderTextColor={props.placeholderTextColor}
        numberOfLines={props.numberOfLines}
        autoCapitalize={props.autoCapitalize || 'none'}
        autoCompleteType={props.autoCompleteType || 'off'}
        autoCorrect={props.autoCorrect}
        secureTextEntry={props.secure}
        returnKeyType={props.returnKeyType}
        // maxHeight={Height(props.maxHeight)}
        style={[
          styles.flex,
          styles.input,
          {
            color: props.color || '#333',
            height: Height(props.inputHeight),
            fontFamily: props.fontFamily,
            fontWeight: props.fontWeight,
            fontSize: scaleFont(props.fontSize) || scaleFont(11),
            paddingTop: Height(props.paddingTop),
            paddingBottom: Height(props.paddingBottom),
            paddingVertical: Height(props.textPaddingVertical),
            paddingHorizontal: Height(props.textPaddingHorizontal),
            paddingLeft: Width(props.paddingLeft),
            paddingRight: Width(props.paddingRight),
          },
          props.inputStyle,
        ]}
      />
    </Container>
  );
};

/* ANCHOR  SLIDE VERTICAL TRANSITION */
interface SlideVerticalTransitionProps {
  duration?: number;
  from: any;
  style?: any;
  elastic?: number;
  index?: number;
  children?: React.ReactNode;
}

export const SlideVerticalTransition = ({
  ...props
}: SlideVerticalTransitionProps) => {
  const [animate] = useState(new Value(0));
  const slide = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: props.duration || 300,
      easing: Easing.elastic(0.3),
    }).start();
  };

  useEffect(() => {
    slide();
  }, [props.index]);

  const slideY = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [props.from, 0],
  });

  return (
    <Animated.View
      style={[
        props.style,
        {
          transform: [
            {
              translateY: slideY,
            },
          ],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

/* ANCHOR  SLIDE HORIZONTAL TRANSITION */
export const SlideHorizontalTransition = ({
  ...props
}: SlideVerticalTransitionProps) => {
  const [animate] = useState(new Value(0));
  const slide = () => {
    Animated.timing(animate, {
      toValue: 1,
      duration: props.duration || 300,
      easing: Easing.elastic(0.3),
    }).start();
  };

  useEffect(() => {
    slide();
  }, [props.index]);

  const slideX = animate.interpolate({
    inputRange: [0, 1],
    outputRange: [props.from, 0],
  });

  return (
    <Animated.View
      style={[
        props.style,
        {
          transform: [
            {
              translateX: slideX,
            },
          ],
        },
      ]}>
      {props.children}
    </Animated.View>
  );
};

/* ANCHOR  STYLES*/
const styles = StyleSheet.create({
  overflow: {overflow: 'hidden'},
  flex: {flex: 1},
  input: {paddingLeft: 15},
  rounded: {justifyContent: 'center', alignItems: 'center'},
});
