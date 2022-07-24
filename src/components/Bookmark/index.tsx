import React from 'react';
import { Image } from 'react-native';
import bookmarkCheck from '../../assets/icons/bookmark-check.png';
import bookmark from '../../assets/icons/bookmark.png';
import styles from './styles';

interface IBookmark {
  checked?: boolean;
}

const Bookmark = ({ checked }: IBookmark) => {
  if (checked) {
    return <Image style={styles.icon} source={bookmarkCheck} />;
  }
  return <Image style={styles.icon} source={bookmark} />;
};

export default Bookmark;
