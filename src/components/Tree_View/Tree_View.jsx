import React from 'react'
import menus from "./data.js"
import Menu_List from './Menu_List'

const Tree_View = () => {
  return (
    <div className="container w-screen h-screen bg-blue-700 p-3 text-4xl flex flex-row justify-center items-center">
        <Menu_List items={menus} />
    </div>
  )
}

export default Tree_View