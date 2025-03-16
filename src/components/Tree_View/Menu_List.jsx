import React from 'react'
import Menu_Item from "./Menu_Item"

const Menu_List = ({items=[] , style}) => {
  return (
    <ul className='list-disc ml-3' style={style}>
      {(items?.length > 0) && 
        items.map((item) => {
          return <li key={item.label}>
            <Menu_Item item={item} />
          </li>
        })
      }
    </ul>
  )
}

export default Menu_List