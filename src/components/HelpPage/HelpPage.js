import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import "./styles.scss";

const Help = () => {
  return (
    <div className='help-page'>
      
      <h1>Welcome to The Help Page</h1>

      
      
      <article>
      <Outlet />
      </article>

      <aside>
        <NavLink to='/help' end>Introduction</NavLink>
        <NavLink to='/help/adding-tasks'>Adding Tasks</NavLink>
        <NavLink to='/help/removing-tasks'>Removing tasks</NavLink>
        <NavLink to='/help/changing-status'>Changing status</NavLink>
      </aside>
    </div>
  )
}

export default Help
