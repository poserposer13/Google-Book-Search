import React, { useState, useEffect} from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import SaveBtn from "../components/SaveBtn";
import { Container, Row, Col } from "react-bootstrap";
import List from "../components/List";
import ListItem from "../components/ListItems";



function Search() {
    
        const [books, setBooks] = useState([])
        const [formObject, setFormObject] = useState({})
      
        useEffect(() => {
          loadBooks()
        }, [])
      
        function loadBooks() {
          API.getBooks()
            .then(res => 
              setBooks(res.data)
            )
            .catch(err => console.log(err));
        };
      
        function saveBook(id) {
          API.saveBook(id)
            .then(res => loadBooks())
            .catch(err => console.log(err));
        }
      
        function handleInputChange(event) {
          const { name, value } = event.target;
          setFormObject({...formObject, [name]: value})
        };
      
        function handleFormSubmit(event) {
          event.preventDefault();
          if (formObject.title && formObject.author) {
            API.saveBook({
              title: formObject.title,
              author: formObject.author,
              synopsis: formObject.synopsis
            })
              .then(res => loadBooks())
              .catch(err => console.log(err));
          }
        
    return (
        <>
            <Container fluid>
                <Row>
                    <Col>
                        {books.length ? (
                            <List>
                                {books.map(book => (
                                    <ListItem key={book._id}>
                                        <Link to={"/books/" + book._id}>
                                            <strong>
                                                {book.title} by {book.author}
                                            </strong>
                                        </Link>
                                        <SaveBtn onClick={() => saveBook(book._id)} />
                                    </ListItem>
                                ))}
                            </List>
                        ) : (
                                <h3>No Results to Display</h3>
                            )}
                    </Col>
                </Row>
            </Container>
        </>
    )
};
};

export default Search;