import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const EditEvent = (props) => (
  <Svg
    xmlns='http://www.w3.org/2000/svg'
    xmlnsXlink='http://www.w3.org/1999/xlink'
    width={30}
    height={30}
    fill='none'
    {...props}
  >
    <Path
      fill='url(#a)'
      d='M0 0h30v30H0z'
    />
    <Defs>
      <Pattern
        id='a'
        width={1}
        height={1}
        patternContentUnits='objectBoundingBox'
      >
        <Use
          xlinkHref='#b'
          transform='scale(.01042)'
        />
      </Pattern>
      <Image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAD9ElEQVR4nO2dS2wNURjHh3gsWpQVtaxXWGiw8cjtM5ZYWmMjYkW1aawssGBRsRERJDbComltaFUtrLGq2nokpK+0JULcn5zcc5ObMXM7nTl3zrkz3y+ZVW+/+b7//9wzj2/mXM8TBEEQBEEQBEEQBEEQhJgAO4FeYBSYABapXxZ1DSPAJWCHswMDOAC8JPuMAvs9VwBWA7eBIvmhCNwCVtkWfyMwRn4ZBZpsjvw8TDlL8RpYY8MANe0IJQZsHHDzNOcvRTHVA7NMPYGMpCX+ruD9C6RxnQD0idSh9KRhgLoqFIJ5kYYBH0N2LsCHNAxYEKVDWUjDAKEKYkAODJiRjVANam6AIAiCIAh2u2CyEaxBGgYI4RTFALuIAZYRAywjBlhGDLCMGGAZMcAyYoBlxADL1IUBg0Ab0KC3dmCoDmO8B64AncBmYIV6XtZ1A3qrxO2vkxhvlOieLYjPYITYww7H+AWcB1Z6NklgQFuE2B2OxlD93nbPBRIY0Bgh9joHY0wBrSGf6wYeAJP6fbJF/eDaXfU3rxbkzICpIPGB7frFjKUYB1o8kxCfJb/ClM4oXIkRJr46c5pdRt3TwBHPFMRnKELsZ47EeBgifhfwM0btyoRtnglIRn+VuJcdiXHWsPhlxmNK/l8iSRnWZxmNeuuMMGrTimF65PtJfmAmu8yod98C6i0YfNv/jhgQzFSNR36ZCTHAzsgvMy8G2BNfIQZYmHYqmZRvQInZlEd+mXtiANbEx8gNPeqbKQvTTplXicU3ZICJbtYYcAzYqrfj+saXq+JPG7splzARE92sq6r9F/D/qiV43UHxVfyCEfETGmCim/U8SHyfCSOOid9lQvfKxONiopvVHSHG0cyKr5OPi4lmyvoIMTY4IP6PmoivC7BpQEOEGI2ZFV8XERcT3azDEWLszqz4upC4mOhmPY6ZczbE18UkwUQ361xuxdcFzSdM1kQ36xGwTz0kpbeWXIivi1LPwLjCH/3EWkcuxHd0ybIbuRFfF6dWEXeFeWCTL79DmRW/Ynl6V7jvy60J+JJZ8SsKVYtWu8AJX14XMy++LnQv8Be7/Fa3HXx5vc28+GX0+vk2Gffl01zD9azdEl+hfrzA8lTU58vnVG7E9x30bJnQ6svlSa7E930TBlI+JnytbMzoHOZyJ34lwJ4IHa1anX4Wci1+wNsjPWoha/0TULVY6vikb5/XDMauX/FtQemdXRHfkvjNhk4/ZeTHATgj4lsEeJrQgE/AQZs11DXA5xiiF/Vtiwv+2xnCMgG+RRR9Tl+sqSvmLcvdjxACcLOK6O/0KWrB+u8+ZhVgrTbhu56O1DHhtHpo13ZugiAIguBV4R/onuZGEZTiPAAAAABJRU5ErkJggg=='
        id='b'
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
);
export default EditEvent;