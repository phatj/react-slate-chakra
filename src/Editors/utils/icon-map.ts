import {
  FaAlignCenter,
  FaAlignJustify,
  FaAlignLeft,
  FaAlignRight,
  FaBold,
  FaCode,
  FaItalic,
  FaListOl,
  FaListUl,
  FaQuoteLeft,
  FaUnderline,
} from 'react-icons/fa';
import { TbSquareNumber1, TbSquareNumber2 } from 'react-icons/tb';

export const IconMap = {
  format_bold: FaBold,
  format_italic: FaItalic,
  format_underlined: FaUnderline,
  code: FaCode,
  looks_one: TbSquareNumber1,
  looks_two: TbSquareNumber2,
  format_quote: FaQuoteLeft,
  format_list_numbered: FaListOl,
  format_list_bulleted: FaListUl,
  format_align_left: FaAlignLeft,
  format_align_center: FaAlignCenter,
  format_align_right: FaAlignRight,
  format_align_justify: FaAlignJustify,
};

export type IconMap = typeof IconMap;
export type IconKeys = keyof IconMap;
