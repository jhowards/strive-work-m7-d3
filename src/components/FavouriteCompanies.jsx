import React from 'react';
import { Card } from 'react-bootstrap';
import { connect } from 'react-redux';

function FavouriteCompanies(props) {
    return (
        <Card className="containerborder">
          <div className="position-relative">
          <h1 className="mt-3">Jobs Search Engine</h1>
          </div>
          <hr style={{ backgroundColor:"black" }}/>
          <h3 className="mt-2">Favourite Companies:</h3>
          <p>{props.companies}</p>
          </Card>  
      );
}

const mapStateToProps = (state) => ({
    companies: state.companies
})

export default connect(mapStateToProps)(FavouriteCompanies);