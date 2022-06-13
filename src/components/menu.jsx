import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';

const menu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem action tag="a" href='/department'>Department</ListGroupItem>
        <ListGroupItem action tag="a" href='/inspection'>Inspection</ListGroupItem>
        <ListGroupItem action tag="a" href='/lecture'>Lecture</ListGroupItem>
        <ListGroupItem action tag="a" href='/student'>Student</ListGroupItem>
        <ListGroupItem action tag="a" href='/student-password'>Student Password</ListGroupItem>
        <ListGroupItem action tag="a" href='/subject'>Subject</ListGroupItem>
        <ListGroupItem action tag="a" href='/classroom'>Classroom</ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default menu