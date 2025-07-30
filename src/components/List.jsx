import React from 'react'

const List = ({ children, className }) => {
  return (
    <ul className={` flex xl:flex-row lg:flex-row md:flex-row sm:flex-col flex-col justify-center items-center  ${className} `} >
        {children}
    </ul>
  )
}

export default List