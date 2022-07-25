import React from 'react';
import { Image, Text, View } from 'react-native';
import starSolid from '../../assets/icons/star-solid.png';
import star from '../../assets/icons/star.png';
import styles from './styles';

interface IStar {
  popularity: number;
  addMargin: boolean;
}

const Star = ({ popularity, addMargin }: IStar) => {
  const isPopular = popularity > 0;
  return (
    <View style={[styles.container, addMargin && styles.marginTop]}>
      {isPopular ? (
        <>
          <Image style={styles.icon} source={starSolid} />
          <Text style={[styles.text, styles.checked]}>{popularity}</Text>
        </>
      ) : (
        <>
          <Image style={styles.icon} source={star} />
          <Text style={styles.text}>na</Text>
        </>
      )}
    </View>
  );
};

export default Star;
