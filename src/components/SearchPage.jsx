import React from "react";
import { Container, Card } from "react-bootstrap";
import JobCards from "./JobCards";

function SearchPage() {
  return (
    <Card className="containerborder">
      <h1 className="mt-3">Jobs Search Engine</h1>
      <h3 className="mt-4">Search for a job:</h3>
      <Container className="d-flex">
        <JobCards></JobCards>
      </Container>
      </Card>  
  );
}

export default SearchPage;
