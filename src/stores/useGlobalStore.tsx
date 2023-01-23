import { create } from 'zustand';
import { ImageListType } from 'react-images-uploading';

interface IGlobalStore {
  image: ImageListType;
  brightness: number;
  blur: number;
  saturate: number;
  contrast: number;
  grayscale: number;
  opacity: number;
  invert: number;
  sepia: number;
}

const useGlobalStore = create<IGlobalStore>((set) => ({
  image: [],
  brightness: 100,
  blur: 0,
  opacity: 100,
  grayscale: 0,
  saturate: 100,
  contrast: 100,
  invert: 0,
  sepia: 0,
}));

export default useGlobalStore;
