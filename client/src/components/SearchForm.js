import React from "react";

function SearchForm() {
    return (
        <>
            <Form>
                <Form.Group>
                    <Form.Label>Search </Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Search for a book" 
                    id="search" 
                    onChange={props.handleInputChange}
                    value={props.search}
                    name="search" />
                </Form.Group>
            </Form>
        </>
    )
}

export default SearchForm