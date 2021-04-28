//import e from 'express';
import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/search-form/SearchForm.comp';


export const TicketLists = () =>
{
    const [str, setStr] = useState('');

    useEffect(() =>
    { }, [str]);
    
    const handleOnChange = e =>
    {
        setStr(e.target.value);
    }
    return (
      <Container>
        <Row>
          <Col>
            <PageBreadcrumb page="Ticket Lists" />
          </Col>
        </Row>

        <Row>
          <Col>
            <Button variant="info">Add New Ticket</Button>
          </Col>
                <Col className="text-right">
                    <SearchForm handleOnChange={handleOnChange} str={str}/>
          </Col>
        </Row>
      </Container>
    );
}