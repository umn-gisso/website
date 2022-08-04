import React from "react";

// reactstrap components
import { Container, Row, Col } from "reactstrap";

// core components

function CompleteExamples() {
  return (
    <>
      <div className="section">
        <Container className="text-center">
          <Row className="justify-content-md-center">
            <Col lg="8" md="12">
              <h2 className="title">About GISSO</h2>
              <h5 className="description" class="section-about">
              GISSO provides support to students enrolled in the MGIS program, geography department, and others interested in GIS; provides a forum for presentations in GIS and careers in GIS; provides or identifies opportunities to participate in GIS related conference and field trips; and provides social activities and events for members.
Our annual events include a variety of GIS Day activities and hosting the University of Minnesota GIS Career and Networking Fair. Our first annual GIS Career and Networking Fair was held in 2002 and since then the it has grown into a great event that provides GIS students from around the region a forum to network with potential employers in the public, private, non-profit and academic sectors. Vendor booths and interesting GIS-related presentations are both found at this event.
              </h5>
            </Col>
            {/* lg="5" md="8" */}
            <Col > 
              <h2 className="title">GISSO Officers: 2022 - 2023</h2>
              <h5 className="description" class="section-about-members">
              <ul>
                <li>
                <b>President:</b> Mohsen Ahmadkhani
                </li>
                <li>
                <b>Vice President:</b> Jake Ford
                </li>
                <li>
                <b>Secretary:</b> Devin Burri
                </li>
                <li>
                <b>Treasurer:</b> Maochuan Wang
                </li>
                <li>
                <b>Communications Officer:</b> Robert Hendrickson
                </li>
              </ul>
              Questions? Contact us at gisso@umn.edu if you have any questions or would like to become more involved!
              </h5>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default CompleteExamples;
