import { Global } from "@emotion/react"

export const FontsGlobal = () => {
  return (
    <Global
      styles={`
        /* merriweather-regular - latin */
        @font-face {
          font-family: 'Merriweather';
          font-style: normal;
          font-weight: 400;
          src: 
            url('/fonts/merriweather-v22-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/merriweather-v22-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
      `}
    />
  )
}
