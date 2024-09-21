import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const Clock2 = (props) => (
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
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADzklEQVR4nO2dT0uVQRTGH7EMwjYRFdfoS7iRFkVpkp+iWqXSR9CKaKVuUqp95HfQPkCb/qD9uWFRNzeB5a2tYnpiYIQQXzXfmXeeM+/5wbOR623OefL9M3PmDGAYhmEYhmEYhsHFSQADAEYBzAB4DmARwBcAbQDrXm3/s0X/mRn/OwP+O4wDcgzAEIApAK8BbAKQktr03zXpv9v9G8YOegE8BPAjQML3028AT/1fR0ednTgK4AaAjxUkvUhNPwY3ltrQBWAEQCth4neq5cfkxpY1lwB8IEi4FOgTgEFkyFkAswQJlgNq1o85Cy4D+E6QVPlPuQeCa1BMJ4B7gR4lJZG2/NOZupt0t38hkkw072NSgXvzfEGQNAmslwBOg5zzAJYIkiWRtORjpORU4pcqqUifAZwBGcczvezIHpejEyDhiL9JSc0075/0kvOAIBmSSPdTJ38wwXP+BoAxAA0APQDG/c9SGOBiv5oq+e5VfSVB0GO7jOVOwr+ClVTTFqnmdhq7jKWR0ACnZylmNbcSBVuEJNYVVESXX8hIFSirAUtVLXeOJA6U1QCnYUTGzQp+NQNQZMBy7FW1mwT/y4oQEl1HJDoSX/tFiQHNWNUWFwiCEwUGOPXFMOAJQWCixIDHoZPvbiyrBIGJEgN+hX4kHSIIShQZID5nwZgiCEiUGTAR0oA3BAGJMgNehVxkZyotKULItBmqNH6AIBhRaIBTfwgDbhMEIkoNcJtESjNDEIgoNcBV1ZWGrcKtCCFduC/NO4JARKkBbs9aab4RBCJKDXBT96VpEwQiSg34GcKAdYJARKkBayEMWFNiwGGIXVcUxIDVjA2IXVcU5BLUqoEBDeab8FuCpMs+hVllORdprAshBsdW+TyO8NxlfhGbJki6/KMNf812N9Cy9Pjkx7oJu9xlNxknijSa43S0KFJ/jgsyokTBFmTYliRFiYItSbItyosSTeRaliJKdC3XwixRoHaMvQIspYmiQI+QcXGuKFBfzuXpQq5o5eksGzSEXNE2aLBsURJiLVfR3Cn1Jj0h1i3UYJuqkKqybaqOiwk3agupKtuovY2mNpSSW6uClM06hEzJmnVs9wT9Q5AESTjlnLzTrjVsSkwn4cK9VKA5lpZldW3a1w0yrG0lAda4lQBrXUxAd2Y35jnGa/5+WPt6EuwABwLsCBMSXLvL9wTXdKnbIT471xOGyTZ+tPyYsj/GareD3JoJE9/0a7jqzogJTa8dZch1mOdkpMM8XbmgHeZ5yONsp/3L3cIex9ku+M+4z9pxtoZhGIZhGIZhgJG/Rrx6/lkVYcgAAAAASUVORK5CYII='
        id='b'
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
);
export default Clock2;
