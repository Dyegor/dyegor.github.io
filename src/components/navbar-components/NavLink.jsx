import React from 'react';
import { Link } from 'react-router-dom';

export default function NavLink(props) {
  return (
    <Link to={props.link}>
      <li className="nav-item" data-toggle="collapse" data-target=".navbar-collapse.show">
        <a className="nav-link js-scroll-trigger active" href="/">{props.title}</a>
      </li>
    </Link>
  );
}