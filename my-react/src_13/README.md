## Kapitel 13
## Spaces erzwingen Global CSS & Inline CSS
1. **Leerzeichen:** {" "} oder &nbsp;
2. **Import CSS:** import "../styles/global.css";
3. **Inline Style:** <nav style={{ padding: "10px", fontSize: "20px",}}>

## SASS & CSS Modules
1. npm install sass
2. **CSS Modules Konzept:** Hero.modules.scss<br>
   import styles from "../styles/Home.module.scss";<br>
   **Local gescoped styles:**<br>
   \<div className={styles.home}><br>
   \<aside className={styles["side-info"]}>

## Weitere Möglichkeiten
**CSS in JS libraries**
1. **JSS:** https://cssinjs.org
2. **Emotion:** https://emotion.sh/docs/introduction <br>
   npm i @emotion/react
3. **Styled Components:** https://styled-components.com
4. **Styled JSX:** https://github.com/vercel/styled-jsx
5. **Radium:** https://github.com/FormidableLabs/radium

