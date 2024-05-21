import React from 'react'

export default function Helmet(props) {
  document.title = 'Corvit ' + props.title;
  return (
    <div className=''>
      {props.children}
    </div>
  )
}
