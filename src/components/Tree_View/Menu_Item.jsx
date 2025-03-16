import React, { useState } from 'react'
import Menu_List from './Menu_List'
const Menu_Item = ({item=null}) => {
  const [hidden, setHidden] = useState(true);
  const hasChildren = item?.children?.length>0;
  const showHidden = () => {
    setHidden(!hidden)
  }

  return (
    <div>
      {item?.label &&  
        (<h2>
          {item.label}
          {hasChildren && (
            <button 
              className='cursor-pointer ml-1.5'
              onClick={showHidden}
              aria-expanded={!hidden}
              aria-label={hidden ? 'Closed' : "Expanded"}
              >
              {hidden ? '+' : '-'}
            </button>)
          }
        </h2>
        )
      }
      {hasChildren &&
        <Menu_List 
          style={{display: hidden ? 'none' : 'block'}}
          items={item.children}/>
      }
    </div>
  )
}

export default Menu_Item