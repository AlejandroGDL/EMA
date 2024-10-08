import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const Semester = (props) => (
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
          transform='scale(.01)'
        />
      </Pattern>
      <Image
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAERUlEQVR4nO2dT4hVVRjAf45/o5FQyc0MihI6LQLDlYuIUDAUBE3chVBS7YpsUbhJdCEYbqwcxcqwTepCW9giKUJw4z7KapcWMxfKyD85Y1+cmfNgeMwb333vnnO/c8/3gw/ee7x377nf7557zrnn3vvAMAzDMAzDMAzDMAyjKtYDnwJ/AX/61+ssvfFZA5wEJgBpi4fAOS/LqFGEmBidIsTE6BQhJkanCDExOkVIBzEjFe5IjSGmCDExOkWIidEpQnIWo1mE5CQmJRHSZDEpi5AmiWmSCElZTJNFSEpi1mYkQjSLyVmEaBJjItAhxkSgo8aYCHQcykwEOtoYE4GOxt9EoKNX5gZ0XwCTCrqPkllM+tw7B1NsBP5WUDDJPG4Dzzoh3ysojAVTOfjOCblrCUHLDnHHCflZQUEsmMrBDSfkNUsIWnaIfa2G/Q2gUFAgyTRc7l9v7/oOAm8CfygooGQk4n3gibkGhyYGHSJMDDpFmBh0ijAx6BRhYtApop3HrVeGChHtLAXey3wcU/gcuFyUZRGByLHGFH3UiJXAEeBzApODmKICEa2Tum6SKgpNFFNUKEJiC2lvY8YzbSNa3Ouw7OhC2mvM75nUiHZEm5CUxBQBuq9qhWgWUwQcR6gXoklMEWFAV5uQ48BQD78bBN6N3Pj301gP+W1VL8St5F9/m8Kw0hpTVNh9TUKIKBVTBBhHJCVEi5gigIikhdQlpggoohFCYokpIoholJBW3Pc9leE+emVjM5Y3XkGv6X7JbWiUkCrELAG2+HCvY4lotJAqDmWhD01ZCpEIYqoSkZUQCSCmahFZCpEKxIQSkbUQ8eEa3g+7FDPsG+tOE0MmpMIkPAC+Al7xN00O+hjxn13y3wkpIpka8k+kRIiCcPdmqheS0x1ZP6Ug5IyCREmk+CQFITsVJEoixY4UhMz3Ny9Kw+NHYCAFIY5tChImgePFkjmpVYjjtIKkSaBwg1RSE+Ku6v5WQfKk4vgGWJiikNZk0tcKkigVxZU+LidVIaRVU04oSKb0GR/1WDPUCWmxJ9ELrseA3X1u+7w5ln+eGlkBnErkuVyTvvFe3uc2LwMuzrEed87tLWpmvX9ol8bn/U4AZyv6P0R3iLva5XrfRgHuFPkh4KYCEb8BB3u8DLYTB0ruCE+jBDfifd7PdfwaUcIvfs7kuZKj7m47M2Uv7vsYpawFXgVGget9XBEyM+75ZZ3wcyZuHSF5pocy/kAiDACrgc3AXuAd4APf6J72Xcdz/rX77Ciw33/X/WaV7+nEZHuvT5QzwrChxxOWRiAW+3+wLiPks1CFMaYZLSnkBf87IxDuObz/lThcxW7nsuRyl0JerrugubCpi1riZlgX1F3QnLjwCCEv1V3A3HjKXw47m4xr1nbUw+EOZ5SnHsBvxOexWc7THauhHMYMts6QcavuRwEa03zphezy7w3q5Uk/zTAr/wNTqlJ3OdU+zQAAAABJRU5ErkJggg=='
        id='b'
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
);
export default Semester;
