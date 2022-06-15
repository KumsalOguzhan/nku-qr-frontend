import React from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Link } from 'react-router-dom';

const menu = () => {
  return (
    <div>
      <ListGroup>
        <ListGroupItem action><Link to="/department">Department</Link></ListGroupItem>
        <ListGroupItem action><Link to="/inspection">Inspection</Link></ListGroupItem>
        <ListGroupItem action><Link to="/lecture">Lecture</Link></ListGroupItem>
        <ListGroupItem action><Link to="/student">Student</Link></ListGroupItem>
        <ListGroupItem action><Link to="/subject">Subject</Link></ListGroupItem>
        <ListGroupItem action><Link to="/classroom">Classroom</Link></ListGroupItem>
        <ListGroupItem action><Link to="/teacher">Teacher</Link></ListGroupItem>
      </ListGroup>
    </div>
  );
}

export default menu