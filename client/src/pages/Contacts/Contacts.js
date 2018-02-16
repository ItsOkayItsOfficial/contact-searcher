import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";

class Contacts extends Component {
  state = {
    contacts: [],
    name: "",
    picture: "",
    cell: ""
  };

  componentDidMount() {
    this.loadContacts();
  }

  loadContacts = () => {
    API.getContacts()
      .then(res =>
        this.setState({ contacts: res.data, name: "", picture: "", cell: "" })
      )
      .catch(err => console.log(err));
  };

  deleteContact = id => {
    API.deleteContact(id)
      .then(res => this.loadContacts())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.picture) {
      API.saveContact({
        name: this.state.name,
        picture: this.state.picture,
        cell: this.state.number
      })
        .then(res => this.loadContacts())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          {/* <Col size="md-6">
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
              <Input
                value={this.state.picture}
                onChange={this.handleInputChange}
                name="picture"
                placeholder="Picture (optional)"
              />
              <TextArea
                value={this.state.number}
                onChange={this.handleInputChange}
                name="number"
                placeholder="Number (required)"
              />
              <FormBtn
                disabled={!(this.state.picture && this.state.name)}
                onClick={this.handleFormSubmit}
              >
                Submit Contact
              </FormBtn>
            </form>
          </Col> */}
          <Col size="md-12">
            {this.state.contacts.length ? (
              <List>
                {this.state.contacts.map(contact => (
                  <ListItem key={contact._id}>
                    <Link to={"/contacts/" + contact._id}>
                      <img className="rounded-circle mr-5" src={contact.picture.large}/>
                      <strong>
                        {contact.name.first} {contact.name.last} {contact.cell}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteContact(contact._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Contacts;
