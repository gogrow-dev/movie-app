import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageSourcePropType,
} from 'react-native';
import styles from './styles';

interface IFloatingActionButton {
  text?: string;
  position: 'right' | 'left';
  primary?: boolean;
  rightIcon?: ImageSourcePropType;
  leftIcon?: ImageSourcePropType;
}

const FloatingActionButton = ({
  text,
  position,
  primary,
  rightIcon,
  leftIcon,
}: IFloatingActionButton) => {
  const right = position === 'right';
  const addRightIconMargin = Boolean(rightIcon) && Boolean(text);
  const addLeftIconMargin = Boolean(leftIcon) && Boolean(text);
  return (
    <TouchableOpacity activeOpacity={0.7}>
      <View
        style={[
          styles.container,
          primary && styles.primary,
          right ? styles.right : styles.left,
        ]}>
        {!!leftIcon && (
          <Image
            source={leftIcon}
            style={[styles.icon, addLeftIconMargin && styles.iconLeftMargin]}
          />
        )}
        {Boolean(text) && (
          <Text style={[styles.text, primary && styles.textPrimary]}>
            {text}
          </Text>
        )}
        {!!rightIcon && (
          <Image
            source={rightIcon}
            style={[styles.icon, addRightIconMargin && styles.iconRightMargin]}
          />
        )}
      </View>
    </TouchableOpacity>
  );
};

export default FloatingActionButton;
