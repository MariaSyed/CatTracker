import { ImageSourcePropType } from 'react-native';

export interface Cat {
  key: string;
  name: string;
  lastFedBrand: string;
  lastFedFlavour: string;
  lastFed: string;
  leftAlone: string;
  foodPacketsLeft: number;
  photo: ImageSourcePropType;
}
