import React from "react";

// reactstrap components
import { Alert, Container } from "reactstrap";

// core components

function DividerBar() {
  const [alert1, setAlert1] = React.useState(true);
  const [alert2, setAlert2] = React.useState(true);
  const [alert3, setAlert3] = React.useState(true);
  const [alert4, setAlert4] = React.useState(true);
  return (
    <>
      <div className="section section-notifications">
        <Alert color="warning" isOpen={alert3}>
          <Container>
            <div className="alert-icon">
            <i class="fa fa-lightbulb"></i>
            </div>
            <strong>Tobler's First Law of Geography!</strong> Everything is related to everything else, but near things are more related than distant things.
            <button
              type="button"
              className="close"
              onClick={() => setAlert3(false)}
            >
              <span aria-hidden="true">
                <i className="now-ui-icons ui-1_simple-remove"></i>
              </span>
            </button>
          </Container>
        </Alert>
      </div>
    </>
  );
}

export default DividerBar;
