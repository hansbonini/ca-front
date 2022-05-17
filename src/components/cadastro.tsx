import { Card, Placeholder, Button } from "react-bootstrap";

export default function Cadastro(props) {
  return (
    <>
      <h2 className="text-center">Cadastro</h2>
      <Card className="mb-2">
        <Card.Body>
          <Placeholder as={Card.Title} animation="glow">
            <Placeholder xs={6} />
          </Placeholder>
          <Placeholder as={Card.Text} animation="glow">
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} /> <Placeholder xs={7} />{" "}
            <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
            <Placeholder xs={8} />
            <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
            <Placeholder xs={8} />
            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={6} /> <Placeholder xs={8} /> <Placeholder xs={7} />{" "}
            <Placeholder xs={4} /> <Placeholder xs={4} /> <Placeholder xs={6} />{" "}
            <Placeholder xs={8} /> <Placeholder xs={7} /> <Placeholder xs={4} />{" "}
            <Placeholder xs={4} /> <Placeholder xs={6} /> <Placeholder xs={8} />
          </Placeholder>
        </Card.Body>
      </Card>
    </>
  );
}
