import React from 'react'
import children from '../Types/common/children'

function Container(props:children) {
  return (
    <div>
        {props.children}
    </div>
  )
}

export default Container