import { createGlobalStyle } from "styled-components";
import "@fontsource/akaya-telivigala";
import "@fontsource/sora";
import "@fontsource/hind";
import "@fontsource/outfit"

const GlobalStyles = createGlobalStyle`

/* *{
  outline: 1px solid red !important;
} */

*,*::beforeAll,*::after{
  margin: 0;
  padding: 0;
}

body{
  //font-family: 'Sora', sans-serif;
  font-family: 'Outfit', sans-serif;
  overflow-x: Sora;
}

h2, h3, h4, h5, h6{
  //font-family: 'Sora', sans-serif;
  font-family: 'Outfit', sans-serif;
  margin: 0;
  padding: 0;
}

h1{
  font-family: 'Sora', sans-serif;
  margin: 0;
  padding: 0;  
}

a{
  color: inherit;
  text-decoration:none;
}
`;

export default GlobalStyles;
