import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const SeeAttendance = (props) => (
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
          transform='scale(.01111)'
        />
      </Pattern>
      <Image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+ElEQVR4nO2dzW7TQBCA5wS99kTS8hycOHACVaJvws+JJjxgQZwob9KqoMSnD1k11EnttXcd785u5pOiHLIbjb+sJ94ZKxExDMMwDMPIBuAE+Az8AH6Tlgq4Bl5JSQAvgV/oYwO8lYJWskbJZclu0oV2NtnLbnJyDmyylg3co4s/RcpGH68HPvwt8F5yA2XIQ0zlyUYZ8hhXWbJRhuzGVo5slCFP4ytDNsqQ7hjzl40ypD/OvGWjDHHHmq9slCHD8eYpG2XIuJjzk40yZHzceclGGeIXez6yUYb4x5+HbJQhYcegXzbKkPDjeDOixJquB4k+zmaUfX1Ye37BaWM18XhcsqvDmfMPTBtVLXuulX1Ye35BHRViouNgoiNhoiNhoiNhoiNhoiNhoiNhoiNhop/uDBfNY9VU39psO8bU8wYx0Y5aB3DRkl0/X3SMWTMCE/3IoqdU8A64BS57Xn9BpqLrU/ELsNwbvwSuBk7VKXN35uzNP3W8tsxV9NXAvNVMc9eBx/E1V9HOMiVwNtPczhw88H7tHF6c6POZ5tKkls5c3JO76zbVKCQVoZ0O3N/yU+b+49aVk5v3OW3GjUZS4dvp4OG0H7punTLXK334pA2tolOxPbYcnVVzFtuwHGbDUvJ1tMad4Z1jZ+i6ZPyPpAJ9rANrHdluWFJRNfl22TzWPdW7/TFWvdOErehImOhImOhImOhImOhImOhwvBq1JjoM70atifanCmnUahSdqjk7uZTqKjBJKhQ2ZyfXq111D0mFwubsVMnOJoCkQqHoqueWsMmStYpO1Zxd9QicLFmr6FTN2UXAMVjPMAAv0SXc15GKtUfsXrca1Mxr0x1slrcbECC5Jo7V7oA1UrluCfNNF23i2t0NmpxkM0FyTRrLukX3NWG900UbEx0JEx0JE30EorX99Pyc3KUUncufKRyC7ylFf+J4+JBS9HPghvL5CTxLJrr1F043hUs+Fw00K/tjnccK+YK8B77V6SL5SjYMwzAMwxAf/gLhdMv44OfKuAAAAABJRU5ErkJggg=='
        id='b'
        width={90}
        height={90}
      />
    </Defs>
  </Svg>
);
export default SeeAttendance;
