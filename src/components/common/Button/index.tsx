import React from 'react';
import './style.css'

function index(props:any) {
  return (
    <button className='button button--flex' onClick={props.onClick}>{props.name}</button>
  )
}

export default index
