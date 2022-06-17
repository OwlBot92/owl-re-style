/* STYLED COMPONETS */
import Button from './components/buttons/Button';

/* STYLE */
//size
import { fSize } from './style/font/fSize';
import { getScreenHeight, getScreenWidth } from './style/size/size';
//alignment
import { m } from './style/alignment/margin/margin';
import { p } from './style/alignment/padding/padding';
import { atomic, flexRow, flexColumn } from './style/alignment/flex/display'; // atomic contains atomic flex options
//font
import { fColor } from './style/font/fColor';
import { fWeight } from './style/font/fWeight';
//color
import { bgColor } from './style/color/background/bgColor';

export {
  // * STYLED COMPONENTS
  Button,

  // * STYLE
  // size
  getScreenHeight,
  getScreenWidth,

  // font
  fSize,
  fColor,
  fWeight,

  // alignment
  m,
  p,
  atomic,
  flexRow,
  flexColumn,

  // color
  bgColor,
}

