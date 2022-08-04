/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="https://rc.umn.edu/uspatial"
                target="_blank"
              >
                U-Spatial
              </a>
            </li>
            <li>
              <a
                href="https://sites.google.com/a/umn.edu/gisso/about?authuser=0"
                target="_blank"
              >
                About Us
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          Last Update: August 2022
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
