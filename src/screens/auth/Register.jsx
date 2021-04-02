import { Form, Button, Modal, Alert, Container } from 'react-bootstrap'
import NotYet from '../../components/NotYet'

export default function Register({ registerVisibility, setRegisterVisibility, setSignInVisibility }) {
  let error, isLoading = false
  return (
    <Container fluid>
      <Modal show={registerVisibility} onHide={() => setRegisterVisibility(!registerVisibility)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Your Account</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {error &&
            <Alert variant='danger'>
              {error}
            </Alert>
          }
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                onChange={(e) => setFormValue({ ...form, name: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Age</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter your age"
                onChange={(e) => setFormValue({ ...form, age: e.target.value })} />
            </Form.Group>

            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => setFormValue({ ...form, email: e.target.value })} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Password"
                onChange={(e) => setFormValue({ ...form, password: e.target.value })} />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setRegisterVisibility(false)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => console.log('not yet')}
            disabled={isLoading}>
            {isLoading ? '...loading' : 'Register'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}