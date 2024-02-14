import React from "react";
import classes from "./Aside.module.css"

export const Aside = () => {
  return (
    <aside className={classes.aside}>
      <nav className={classes.nav}>
        <ul>
          <li>
            <a href="">Profile</a>
          </li>
          <li>
            <a href="">Messages</a>
          </li>
          <li>
            <a href="">News</a>
          </li>
          <li>
            <a href="">Music</a>
          </li>
          <li>
            <a href="">Settings</a>
          </li>
        </ul>
      </nav>
    </aside>


  )
}
