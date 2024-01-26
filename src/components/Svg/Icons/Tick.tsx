import React from 'react'
import Svg from '../Svg'
import { SvgProps } from '../types'

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 16 16" {...props}>
      <path
        d="M8 13.7812C11.3137 13.7812 14 11.1369 14 7.875C14 4.61307 11.3137 1.96875 8 1.96875C4.68629 1.96875 2 4.61307 2 7.875C2 11.1369 4.68629 13.7812 8 13.7812Z"
        stroke="#5BC8AF"
        strokeWidth="1.3125"
        strokeMiterlimit="10"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill='none'
      />
      <path
        d="M10.4604 7.03018C10.7187 6.77592 10.7219 6.36042 10.4677 6.10213C10.2134 5.84384 9.79792 5.84057 9.53963 6.09482L10.4604 7.03018ZM7.33333 9.1875L6.87296 9.65518C7.12838 9.90661 7.53828 9.90661 7.7937 9.65518L7.33333 9.1875ZM6.46037 7.40732C6.20208 7.15307 5.78658 7.15634 5.53232 7.41463C5.27807 7.67292 5.28134 8.08842 5.53963 8.34268L6.46037 7.40732ZM9.53963 6.09482L6.87296 8.71982L7.7937 9.65518L10.4604 7.03018L9.53963 6.09482ZM7.7937 8.71982L6.46037 7.40732L5.53963 8.34268L6.87296 9.65518L7.7937 8.71982Z"
        fill="#5BC8AF"
      />
    </Svg>
  )
}

export default Icon