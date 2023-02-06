//import { LogoContainer, LogoImg, LogoTitle } from "./StyledLogo";
import s from "./style.module.css";

const Logo = ({ image, title }) => (
  <div>
    <div className={s.container}>
      <img className={s.img} src={image} alt="logo" />
      <span className={s.title}>{title}</span>
    </div>
  </div>
);

// STYLED COMPONENTS
/*const Logo = ({ image, title }) => (
  <div>
    <LogoContainer>
      <LogoImg src={image} alt="logo" />
      <LogoTitle>{title}</LogoTitle>
    </LogoContainer>
  </div>
);*/

export default Logo;
