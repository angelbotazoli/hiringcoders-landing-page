import style from 'styled-components'
import img from '../../assets/Banner.jpg'

export const Banner = style.div`
  background-image: url(${img});
  width: 100%;
  height: 300px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 100% 300px;
`