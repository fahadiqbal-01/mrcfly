import React from 'react'

const List = ({ children, className }) => {
  return (
    <ul className={` flex justify-center items-center  ${className} `} >
        {children}
    </ul>
  )
}

export default List