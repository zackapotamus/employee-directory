import React from 'react';
import Container from './Container';

const Jumbotron = () => {
    return (
<div className="jumbotron jumbotron-fluid">
  <Container>
    <h1 className="display-4">Employee Directory</h1>
    <p className="lead">Sort and filter employees.</p>
  </Container>
</div>
    );
};

export default Jumbotron;