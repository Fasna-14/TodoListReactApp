import React from 'react'

// const Footer = () => {
//     const year = new Date();

//   return (
//     <footer> Copyright &copy; {year.getFullYear()}</footer>
//   )
// }
const Footer = ({length}) => {
  return (
    <footer> {length} List {length==1 ? "Item":"Items"} </footer>
  )
}

export default Footer;