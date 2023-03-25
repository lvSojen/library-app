import { Button, Container } from "react-bootstrap"
import { Link } from "react-router-dom"

export const ExploreTopBooks: React.FC<{}> = () => {
  return (
    <div className="p-5 mb-4 bg-dark header">
      <Container
        fluid
        className="py-5 text-white d-flex justify-content-center align-items-center"
      >
        <div>
          <h1 className="display-5 fw-bold">Find your next adventure</h1>
          <p className="col-md-8 fs-4">Where would you like to go next?</p>
          <Link to="#" type="button">
            <Button size="lg">Explore top books</Button>
          </Link>
        </div>
      </Container>
    </div>
  )
}
