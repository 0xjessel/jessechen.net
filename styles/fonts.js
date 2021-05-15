import { Global } from "@emotion/react"

export const FontsGlobal = () => {
  return (
    <Global
      styles={`
        @font-face {
          font-family: 'Merriweather';
          font-style: normal;
          font-weight: 400;
          src: 
            url('/fonts/merriweather-v22-latin-regular.woff2') format('woff2'), /* Chrome 26+, Opera 23+, Firefox 39+ */
            url('/fonts/merriweather-v22-latin-regular.woff') format('woff'); /* Chrome 6+, Firefox 3.6+, IE 9+, Safari 5.1+ */
        }
        @font-face {
          font-family: "Hoefler Text";
          url("hoefler-text.woff2") format("woff2"), /* chrome、firefox */
          url("hoefler-text.woff") format("woff"), /* chrome、firefox */
          url("hoefler-text.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        }
        @font-face {
          font-family: "Neue Haas Unica Pro";
          url("neue-haas-unica-pro.woff2") format("woff2"), /* chrome、firefox */
          url("neue-haas-unica-pro.woff") format("woff"), /* chrome、firefox */
          url("neue-haas-unica-pro.ttf") format("truetype"), /* chrome、firefox、opera、Safari, Android, iOS 4.2+*/
        }
      `}
    />
  )
}
