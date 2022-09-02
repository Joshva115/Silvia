import {
  Button,
  Card,
  Container,
  Row,
  Col,
  CardGroup,
  Image,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";

function home() {
  return (
    <div>
      <Container className="px-4 my-5">
        <Row>
          <Col sm={7}>
            <Image src="https://picsum.photos/900/400" fluid rounded></Image>
          </Col>
          <Col sm={5}>
            <h1 class="font-weight-light">Welcome</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum."
            </p>
            <Button variant="outline-secondary" size="sm">
              Call to action
            </Button>
          </Col>
        </Row>
        <Row>
          <Card className="text-center my-3 bg-secondary text-white py-2">
            <Card.Body>This is some text within a card body.</Card.Body>
          </Card>
        </Row>
        <CardGroup>
          <Card>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/220/320/200"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="outline-secondary" size="sm">
                Link somewhere
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Updated: 19/6/22</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img
              variant="top"
              src="https://picsum.photos/id/221/320/200"
            />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="outline-secondary" size="sm">
                Link somewhere
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Updated: 19/6/22</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://picsum.photos/320/200" />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
              <Button variant="outline-secondary" size="sm">
                Link somewhere
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last Updated: 19/6/22</small>
            </Card.Footer>
          </Card>
        </CardGroup>
        <Card className="my-3">
          <Card.Img variant="top" src="https://picsum.photos/1527/270" />
          <Card.Body>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      </Container>
    </div>
  );
}

export default home;
