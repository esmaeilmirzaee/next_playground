import { Form, Button, Modal, Alert, Container } from 'react-bootstrap'

export default function SignIn({ signInVisibility, setSignInVisiblity, setRegisterVisibility }) {
  let error, isLoading = false

  return (
    <Container fluid>
      <Modal show={signInVisibility} onHide={() => setSignInVisiblity(!signInVisibility)}>
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
          <Button variant="secondary" onClick={() => setSignInVisiblity(!signInVisibility)}>
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={() => { setRegisterVisibility(true); setSignInVisiblity(false) }}
            disabled={isLoading}>
            {isLoading ? '...loading' : 'Register'}
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  )
}