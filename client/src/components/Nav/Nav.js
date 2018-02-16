import React from "react";
import { Col, Row, Container } from "../Grid";

const Nav = () =>
  <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
    <a className="navbar-brand" href="/"><h3>Contact Searcher App</h3></a>
      <form className="form-inline my-0 my-lg-0">
        <input className="form-control form-control-lg mr-sm-2" type="text" placeholder="Search"/>
        <button className="btn-lg btn-secondary my-2 my-sm-0" type="submit">Search</button>
      </form>
  </nav>;

export default Nav;
