import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const AvailableEvents = (props) => (
  <Svg
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M0 0h30v30H0z"
    />
    <Defs>
      <Pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <Use
          xlinkHref="#b"
          transform="scale(.01)"
        />
      </Pattern>
      <Image
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAADlUlEQVR4nO2dTWwOQRyHVylpbyRImqiDxEU0DYdGfZT4qIOSSCgOPqo3DsrBoQeNSx049OjQRCQUN0ffCYngIHFxEGcfh1IkVNFHJhlBtbtb2Z2dnf09yVze7Mfvv0/67jvTndkoEkIIIYQQQgghhBCi4gBzgDXAXqAHOFny1mNrWQ3MjsoCsBW4CnwkXD7YGtsjXwFWAHepHneA5sgngH3AF6rLKHAo8gHgdNFXwyP6ipZxoOgr4CHdRd4zvhZdvadfX+7vKcDtoiv3mHtF/LQV8WxxKeRaQhgBQy574CF3+rLsPObfo7fDISIdrS6EmPEckY5OF0JOpAwjoMeFkD5daY967hIyLSSkikIagJVqpLkGDbkLEUIIIUQgAB3AeTXSXIMOF0LUU0+POoaeISGeISGeISGeISGeUUkhP4DHwBNgHL+onJARYNUf2VrtZ75QOSG9k+TrxR8qJWQcWDxJvkX2a8wHKiXkfkzGB/hBpYQcicl4FD+ojJDvwMKYjPOBb0WHrJKQmyly3io6ZJWEHE6Rs7vokFURMgbMS5FzrgcTikot5A7QBexKaKnnXZhtUxyvy547D0or5DpQk3v4qWuqsRmyprRCNuYePAFgUw51lVZIW+7BEwA25FBXaYVcAWbkHn7qmmbkNE2vtEIMF4D63Av4t556e+48KLUQw3NgWe5F/K5lKfCM/Ci9EMMnM23OQR07HfzvJAghv7gI1OU0i3gANwQlxPAUWJJh9kbgEe4ITojhPdCSQe4WeyyXBCnEsDyD3E24J0ghLzPM/sJx9iCFnM0w+znH2YMUsjbD7OscZw9OyFtgZsajum8c5g9OyGDKTNtMS7ntoMP8wQnpSMgyy+b5YZ/TGkhaEgnY7jB/UELG4nrqtpP3cJL9zGeNMfvV2WO7ICgh7xLmOQ7H7Dsc99dlju2ohqCEGFZPOHet+Rmc8in3cbttbYELsAUn5BWwA1gArP/PcSizT5s9hjnWawITctxhQWXnmAshe4quskTsdiFEi2B6tghmbQHD2GVkxNmLX+xTIiKeS05kWCHtCWEEbHYmxKPH/X3lhlMZVkizfTWD+BvzpqEm50KslP0TwgiS566EPl/EJ05FPmDXg/9MdRkFDkY+Ye8pVXzrzs3C7hnTmLU05NkSF1ljarts5pREZcH0Uu3aI2bs6xjQD5wpaeu3NXSatVVK9epVIYQQQgghhBBCCCGifPgJHJXqTb2tj90AAAAASUVORK5CYII="
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
);
export default AvailableEvents;
