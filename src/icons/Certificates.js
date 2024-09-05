import * as React from "react";
import Svg, { Path, Defs, Pattern, Use, Image } from "react-native-svg";
const Certificates = (props) => (
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
        xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAACXBIWXMAAAsTAAALEwEAmpwYAAAEUUlEQVR4nO2dW6hVRRiAp07mm5VmCKLRi1EPVkrhm8e7hPgimxMl6NMhtLxEIQSCFxAEUVALjIxKe8gnUTEkqIyylxDSl7SSQLyg4iUEu2if/DDC9rj32TNr77XWP2v9H8zT2fusmfXttdasf2b+cc4wDMMwDMMwDCNBgOeBt4HNwOfAvoqUj4B1wBvAGKcZ4FFgBXCaevAf8DUw3WkDmAX8QX05ADzlNAAMAv+WfUYUcBaYWraMt8o+C8q4Ckwq8zYl91Hjfn4FHivjAd7pmSG3sW+AT4BdSsse8mFL0UKkN9WO/4HtwJNOOcA7OQm5BTxdZENODSNjqUsA4CHgDPmxociXvnZsd4kATCVffimqIfIG3op/UrhNBbSjl4x1eePDIa341iUEsLMAIVOKaIjEplqx2yUE8EUBQhYU0RAJsrVip0sI2rejlzTKbMjHwBMJlf1VF2I8iAlRhgmpo5AdZbcyIQoR0u9DJIYGIU2DUjcCKlR3GoUI8VL6gOd8TKi5rCn7LNRSyDCiGmWfBUWYEGWYEGUkLeQcsBYY8P+joaAM+Dqdq5sQGZ8f7ZQCjM447yxZIUuccoCldRIyzSkHmFYnIYNOOcCbdRJyHpjolAJM9HWsjRDhuh/nXuZDM4MKitTlA1836iakijTK9mFC7seEKMOEKMOEKCN5IX/LnFjg5wzlOPAXukhWyB0/sDWiy2M/DLwO3EQHyQr5MMGJ1JUWMrPHdRiHDpIVMrfHdZiADpIVsqfHdXgfHSQrRNja7QIXYBSw2i8e0kDSQu5xza/3vpqhSG9NE5UQUiUaZftIVciPwLvSufCT/Wb40PtXXV51JiRD1oUZHX5gk4EfyIYJieA74PGIzBWfEY8JCeQ3WdYWeSseISuNicOEBPJqjIwmKZMiU1GZkABOZJHRJOVLwjEhAWzsUohEk0MxIQEMdCnkBcIxIXkHMoHxhGNCAnitSyEvEo4JKeAZIjl7QzEhAZwsMJOFCckzSw/wbGTiTxMSyO+xC4T8m/pR4jAhEXwfGj7xsay9xGNCIpE89bM7yHgJOEY2TEhGfgLeA+b78ZCZwHLgiI2HVIuGK5tERwzzwoQow4QEIPnob5Md2cQlFBMSgOT7mgIcinxgy0SIeTJ3LOI7JiSA/qbn3TN+1r3IuTjkyrnsr6b1EnJv+o4JyUtIm06JpJDtG+bvJqRIIQG9SBPSY0yIMvrtCtFFf92ELEQ38zvUv6+Hi4EWurIBXkE3m9rUe6TvAl8BtrULzQOLI471sisb2TJO+UaTt2TLvyF1XtQiY9wVH/F9ZMh2TxcCjyOLhkY5DUSGF8rgTtOWfic7fPZP4FPgYOTKrCNOCzJ3tssTVgXmOU0Ah6kvh5zSTJ512cq7mdOxSx0Kw/fZY2dqpMwxSVrgNONnbKzy0dOqcglYKW11qeDnNc0B1skWe34GYMplt2/L7G6T5hiGYRiGYRiGYThF3AXR4sP80PtZQAAAAABJRU5ErkJggg=="
        id="b"
        width={100}
        height={100}
      />
    </Defs>
  </Svg>
);
export default Certificates;
