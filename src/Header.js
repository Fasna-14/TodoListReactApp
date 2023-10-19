import React from 'react'

// const Header = (props) => {
//   return (
//     <header>
//         <h1>
//             {props.title}
//         </h1>
//     </header>
//   )
// }
const Header = ({title}) => {
    return (
      <header>
          <h1>
              {title}
          </h1>
      </header>
    )
  }


Header.defaultProps = {
    title : "To do List"
}
export default Header;