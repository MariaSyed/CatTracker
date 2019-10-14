import * as React from 'react';
import { Image, ImageSourcePropType, StyleSheet } from 'react-native';

export interface ImageHeaderProps {
  source: ImageSourcePropType;
}

const ImageHeader: React.SFC<ImageHeaderProps> = ({ source }) => {
  return <Image source={source} style={styles.imageHeader} />;
};

const styles = StyleSheet.create({
  imageHeader: {
    width: '100%',
    height: 150,
    opacity: 0.9
  }
});

export default ImageHeader;
