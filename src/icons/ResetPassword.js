import * as React from 'react';
import Svg, { Path, Defs, Pattern, Use, Image } from 'react-native-svg';
const ResetPassword = (props) => (
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
        xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAD4klEQVR4nO2c22oUQRCGK4hRH8B4iAZRb0VEAxoU9C3UZ/CEp5VgNMmNSUTvFMU3UIzBE16reLjwhIcHULyIh4gmGE00n7TbQogzs7PZmZ5Md32wEDbNVPWf3urq6tqIKIqiKIqiKIqi+AawENgPPAbG8Jcx4BGwD1jgWuQVwAvC47mZu8uVHKLI08XOf2XbcBE6e10IbWJy6Dx0IfRo0bOcA4y6EFoBVGhHqNABCP0TOAost6+Kfc/L8UUKXYkYW/F1vORNgqPLIsYu9XW85E2Co8sjxrb6Ol7yps6P3jFfx0veJDj608a0ejafSlnHFyl0UIgK7QYV2iOhtagEX10IrWVS3JRJzd1Z6OxxIfQCe50TKs+A5tyFnnY5+zxQkVudiDxjZe818crzDXIUeGDChbOVrCiKoiiK4h9U08ftQA9wDXgDjAATtk5sfn5tf9djx7rt9iwzwAbgIvBlFjmvEf+CeUbR85izAOuB28BUBocM84ybwLqi5zVnoNoGfBaYJHvMM08HH1KAtbZ+kDdPgTUSIsAmYBh3fAY2S0gA7cC3FOL8Au4Ch4xIQAsw375a7HuHgXt2bC2MzY0SULj4UEOQ70C/EbOO5xrhB4DxGs82n6LVEsDG96yGEFeAlQ3YaAMGa9h44vUGCZxJmPxvoBNoysBOE9BVI1UcEI/z5MkEkXfmYHN3gtgTXubZVA8jcXTmaPdEgt3r4uGxeiohJjflaLspIWYbn9aLL1CtXUQx3sjGV4f9VpvJRHFOPKrCfYmZZL9DP8xRPO4gU/5LV2BHzAR/1ZMnZ+DHErvpRrFNyo6tFUdxtwBf7kd6Aiel7ABDMZM7WIAvR2J8uSplx96MROG8wAN0RHoCr6TsAJ9iJre4AF9MnI7io5SdhO+BNBeUAUXxQ8rOHBN6UYwvY+Jx6GgpwJdlMb68FY83wy0F+LI1xpenUnZs30UUh3K2213HtxUui8cHlns522Wm2MCdGF8OSNmxHUTOj+DT7PwV26STCRtzu5Qdm1KNuL7lmGGnG+iN8eEdME98gGqbVlyZtC0nmzOJW829EkjhfzCPwj/pMNW8VeITwK2ECR/PwV4aLolvAOsSLmfNat+Vsb0037b677/OeAHxtxz/xO7KKoykEHpIfIVqBmKaV5IYzGKDJB3/HWq8AViTorlx3K7+JQ3YSUu3752k31JmBfftzUiHrSc3Zyx0EGIPMzveA31e3F47DCNPmD19Rc+hbBvkgO2Fq3tlF+1/WfPsG3V+WUiFbrDr9LztIKrFqUz/2iECNJsOIlt5uwq8tNdipjikm6GiKIqiKIqiKIpkxB+6NnxEzoBunAAAAABJRU5ErkJggg=='
        id='b'
        width={90}
        height={90}
      />
    </Defs>
  </Svg>
);
export default ResetPassword;
