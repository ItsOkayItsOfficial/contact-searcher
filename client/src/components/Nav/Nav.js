import React from "react";
import { Col, Row, Container } from "../Grid";

const Nav = () =>
  <nav class="navbar navbar-dark bg-primary">
    <a class="navbar-brand" href="/"><h3>Contact Searcher App</h3></a>

    <div>
      <form class="form-inline my-0">
        <input class="form-control form-control-lg mr-sm-2" type="text" placeholder="Search"/>
        <button class="btn-lg btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
    </div>

  </nav>;

export default Nav;
