import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const RegisterAttendace = (props) => (
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
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFJklEQVR4nO2dXagWRRjHn0Ls2MXBPjCPBFqSURF1DI0utDKiLKSI7oIoqZsUg27OCYq0LgoMxaw0u8iboC6yD7Gw7wvJILLvTMI+oC7KrMjIt89fPLwjHA5nd2d3Z3bmnd0fvPByzrszs39mZ5555nlmRTo6Ojo6Ojo6Ojo6OjrKAcwHVgJPAm8B3wI/A38DvwPfmL+vBUZLFt9ugBOBVcD7lOd14LzQ9xA1wHHAbcAh6nEUuCn0/UQJcAqwG3f8C1wX+r6iAjgd+BL36JOxBlgBzJI2A5wEfIF/esB2YI60dEzeRbN8DyySNgHcTBgOA3OlDQAnAN8RjrelDQC3E54rJXWAvaFVBl6TlAFmEQe6jD9ZUgW4nnhIdwUJrCceNkqqAG8SD7slVYBPiIeDkir0V2excEhShb4bMxZ6kirAEeLhN0kV4ADxcEBSBbcO/rq8IakC3Es8rJNUAS4mHi6VlAH2h1YY+Ao4XlIG2BxaZeBRSRngcrNLHRptw2WSKsBLxMOLkirE5ev4SFIFeJd42CupAjxBPDwuqQJcQzxcLSkD7AmtMPCOBvFIygBnAB8GFPkDYJ60BWBTAJE3SNugH+nZJP8By6RtANOBHxoQ+E9gK3CutBVgzHMPfrpV43FBzsrXHkQ+2MphIg8NOHTsaHoWGM6ttK0A9zgS+UFb+9iED6s38X7geeBzk173lxnX9ftn5n/r1Nun10gCGQDP1ByP77Ks6yJgG/BrhXp+MW6EhTKoANOAxyqKvNKi/IWON4dfAS6UQYXyPFRQ3gyzOPoHP+G/G4EhGTQox8t5e3/A2cDH+EddCmfJIEE5E25mwY77TzSH5jYulkEBe64tEDlE+NmRgREbO3YWDBdN9uSpenb8wwh2mbALMq4dMm7Q0Oi8MENiBbjC4iY2R+Z6HSyXLH2/R9E5HWqizc+xk32YcHVMvwskJoBhc7BJ5fzAyCJVj7FLIlp631giZfmWnGV1E/SMa3e2+YwZv0jeqnU0dGLnHSUDHtXDd2pGeeq7aELk5VPUPV5w3dZGRJ10CMoaTXqvOJa+l+OFq+Igqi2yqX+k4Fr1Ak73Le6ZwJ0mxEAfozpsyqhjGX7RoWFFzj3OsShjqQ9xz1FHj4d8lVsz6lN/cuM9eUL9d1uUs9blpHaD5+CYJRl1vxBQ5OXmd0XscCHyVRqZiX/mZtSvOyM2j/9ka6HXkMjKp3UEngk8RXMMZ7TDxq8xVkIo1yJXz9I1M20Tft6JTMtoS54de4zZOU/jUduJL+MaP1m6xpLQc0KbZqiG0CMWvdNHT64mtLFZq5wb6oLTagwd4xYC+hK5/NABPEI4FtSYDAt7q0eRy02GZshQj1RUCZjYm3eVxHYgcjnzrmIogEtWZ7RLg1vwIbYjkZX7yviK/yAs2zLaphFEuBbbocj2S3DLnY8g6Wr0J2iNIHImtmORD1s7lYAHiIN5Dt2kU9rMFe3kPLZYiWwqf5U4WJ2zjVWFnvEnj5jPuMOejPFY2oeNBU7umcienDZqLFxsZIZFZN1EyNNxJzPlGdDA+YHNz/qbsxFYHBPZntNODTiMhfWSKvQDaPaFVti4jeMNoHGBhmM5eM1IHX7Mij1JDmBxwCDH1r1HYJHpXU2hC5NLpI3QH0aaME33tWa4KJggN3gy/bTMhwcytcIXatOad7/UjS/BlLFTbXdvDR50gFGTG64RRFXG4S0DnY0lDWOS/pea9yHu0F0Qsy2mzib96Hc9bOs585sldUK7/gdu57bZEsU5TgAAAABJRU5ErkJggg=='
        id='b'
        width={90}
        height={90}
      />
    </Defs>
  </Svg>
);
export default RegisterAttendace;