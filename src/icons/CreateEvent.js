import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const CreateEvent = (props) => (
  <Svg
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
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAAFF0lEQVR4nO2dXahVRRTHj5mZZaEgZdiHlpUY2odFRZBeqVDB6qWn6iGSohdFyTQRoygfeupGL0VFD5L0BXaNSL0JElSEUGmQFV0tsQ9RgzS0svOT6Uyg0/66e2bvmdl7/WC/3HP3mrXnv/ec2WutmdPpCIIgCIIgCIIgCIIgCEJJgCuBFcAg8DVwhHg5oq9hC/AYcEWwNwZwPfAhzWcQmNUJBWAU8ALQpT10geeB0313/nhgK+1lEBjn885vw5CTxzbgDB8CqGFH6NHv4wu3TWN+Ht1av5hl6ElkS12dPy25fYE63hOAldLVqSyvQwD1Vigks7kOAb5NaVyAXXUIcFh6OpXDdQggZCACeEYEaLoAgiAIgiAI7cT3NC90RADPiACeEQE8IwJ4RgTwjAjgGRHAMyKAZ0QAz8QgwAZgNnC2PuYAAx5soGv/XwIeAuYCl+qCY1X3OgaYBMzUny0GXgf2xCzAigy7q2qy8QXwKHCxRR9MBtYA35vGy9ocTuNl2VDA9sYKbai/z3HWEb22RgB9J5dqurSf1mhZZhew3VeBje3Arc46IL3dBcDOkAUYW8D2OQ5tHNNllCNz7mA1xi8BXgY+0sPKL8AhYEgPWW8BTwF3AGdl2Ettq20C/ABcm1Ng/Cywr8R1KGHfBhYCp3XqhvLkjr/0Zhu2NiYC56V8pu72d4B/cIOaRd1fqxAWzg4UsP2erY2Mp6If+Jtq+AS4ulSHlrgYG1Zl2F1tayPF7jU1FRQf0+8KI5x0dMYF2bJRz1TG6mNugTs/y4a6u6em+HoXcJR6ea3S5auEx1F1lyf4eV/JIUc9Lbfol61XS/qk3spHtUWAxQk+LrQY7+8+yY4KSRwoaWddJcMRYfGZOfcGrgL+sLB5ytMEfG5ha3WTBegCNxq+qQDaV5Z2XQpw3PlbOOHwboJvTzuw61KA/75TRjdRgJsMvy7TU8HQBFCsbJoAXyb4pWI5BCrAQTVdbpIASwyfLgD+DFgAxdJQBLDNZnWBSwyfluOOqgTY0ZSM2I6Ec1XIOHQBFDNiz4gpXjTOOd/xzi1VCrAs9oyYYpFxzj24pUoBBmJPyPwvJwA8STwCDDVBgMnGOeuJRwCVCDoz5owY5iZ5euO8rKjm+GEeZmzp3GGenxdFnRRzRgwzzAt8Sk5Us25yoqjTbI37zoiNMc5TEdEk5nU8oastfk7xa7qt8d/xmxG70PAnbevM7TbVbxb9MxpYW9T/Mg18g19mGv68mfP/v+kan6LHKS9Lel/Q4Zz/V4Yv3ay6oli2LOsz/HkmolnQj1adrx1Su4gHk4IE7o1IgA9cCDAVv6w3/LkoIgEetxYgZ+5dB3sS/NkViQA3uBJglueti6cY/jwRgQDfOa2S0Pvn+2KN4csUnQAPWQC3FRKq+svjUDRk3k3AGwELoH4KZYJTAbRz4zyK0JdQ+Xw8UAHWOu9840nod1jyXZStFf2mgWsB9haJBLsQ4joPL2kLEp5ItTgjFAHUROXOyjvfcPhynSTfrBcwVLnV8c6E8PHNOeGAOgV4rtNGgActpsnzCkY189jk5bdlQoHyIZN/o6gFopp5K2aqH/dDB3jYYmZUtrz9fVXv5Pvag4Fe7uEnqqerZ4PVLMyIGXorJ/PyBrZhhtt8X2fwALdn5JDLsF//cKldpUPboJcGXWexkuZj4BEZ6y3RxcHz9ap5NW3cbawxUOP6r3pW8wrwgI88c+ugV1YiMxlBEDoN5wTTBsYLfrlIVgAAAABJRU5ErkJggg=='
        id='b'
        width={96}
        height={96}
      />
    </Defs>
  </Svg>
);
export default CreateEvent;
