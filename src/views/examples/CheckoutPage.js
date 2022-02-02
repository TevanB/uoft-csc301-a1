import React from "react";
// reactstrap components
import {

  Container,
  Row,
  Col,
} from "reactstrap";

// core components
import ExamplesNavbar from "../../components/Navbars/ExamplesNavbar.js";
import CheckoutPageHeader from "../../components/Headers/CheckoutPageHeader.js";
import DefaultFooter from "../../components/Footers/DefaultFooter.js";
import Shop from "../shop/Shop";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  }, []);
  
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <CheckoutPageHeader />
        <div className="section">
          <Shop/>
        </div>
        <div className="section section-about-us">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Checkout Page</h2>
                <h5 className="description">
                  Choose some products here and checkout with our checkout form.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            
          </Container>
        </div>
     
      
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
