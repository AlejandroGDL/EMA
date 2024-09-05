import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const CarreraBook = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAESElEQVR4nO2dS4gUZxRGT0Qx6iIqQTJGCYriIxuDibgJiUF04RPFuFEhLiYhC7OSSUwWouRFDNEBBQWZhYIPVATdiIISxIWKYxLUjcNIFCELFRRCnGTs8MM30DRO2213V93u+Q7cTc9U1b33VFVX9eK/YIwxxhhjjDHGmOZjDDAOeBOYWhTjFCMZ2owp6sWUkh5N1ufpf+pGF1CoIP4FHgL3gN+A88AxYA/wDbABWABMB14lLqOU4wfAOmAzsFO1XACuAT2q9b8Ke5N6mLmQaqIfuA2cAn4EPgHeA0aQHcOB2cDHwHbghHLqb0C94YUMFn8DvwI/AMuB1+tYxwRgFfALcAV4mmFdTSuk8Jwr6RLQAcyoMu9XdNVtlYBnOdbRMkIKJXEL+BaYVibfaZLQEyDflhdSUKSz/RywRFdCisXA2QC55SLkQ2A+sFCxGlgDrAfagU91m/lO25/WbeNuA+7dfwC/13mfT5XrFeXepVo6VFu7al2j2gf6MF+9yVzI2Br3OV5POOlL9ivggIp/kuFZ+0THPKAcVimnlFstjG1GIeV4S2deJ3C9To+h/dpXp/adjtEoGiakTY+elzMWUko61jJgP/CgCgkPtM2yHPItzeWyepl6WjHvAl8CJ/W2Xa7YLAssZoS+vA/rl4HSvPqAQ8CijF8yXySkOO6pxx3q+aD0VnH25SWkmEn6SaNPsVOf5c2LhBRH6nnLCBlgliIKQ15INCwkGBYSDAsJhoUEw0KCYSHBsJBgWEgwLCQYFhIMCwmGhQTDQoJhIcGwkGBYSDAsJBgWEgwLCYaFBMNCgmEhwbCQYFhIMCwkGBYSDAsJhoUEw0KCYSHBsJBgWEgwLCQYFhIMCwmGhQTDQoJhIcGwkGBYSDAsJBgWEgwLCYaFBMNCgmEhwbCQYFhIMCwkGBYSjFyEDCxEnGZo/KV11ns0W+MqcFHLfqfVQ3dpfshGYCkwT4NOIg6CGanc5inXjcp9l2o5q9quFs0R6VEPHr7EQtB1FVKPuK8i9wJfaLnuNzI6i+dqyEwajXEUuFHFgJZ6RTgh5UQd1Rrrb9dBwEStaL1Xjc9zdEVTCimUxJ+6bbwPDKtAwDD9b6e2zTv/lhNSKLl6vh9k0eTJugXdD5DnkBFSUPRpkfs2Rdcgy49HjpYSUlA8VuSdh4WQf0MthPybGF5Iul3c1CDJg3q03KEv1y0lY4JSfKbP0gvXT8A+4LheuO5kNM7uH9V7Ucfep1y+LpPvFtW0QzUe1KDJWzXcMl9KyDP97YweIz/XC1yahjmaxtCmSZupIT8Dj2po/iPto137bNSL52j1ZKF61Kme9ZZ576lISHpkPKKRo2lU6mvkT3cNQtK2eZN+GfhIPT1S9FheVshaYCYx6W5yIc9jpnrelHS3oJCm5h3NsK3mwaNX28zJO/lWpw1YCWwCtgG7Fdv02Ypqp6EZY4wxxhhjjDFE4H+FojKmomcx8AAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
);
export default CarreraBook;
