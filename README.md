# NOTE: Get back to init to reenable Tailwindcss

This is my play ground to experience [NextJS](https://vercel.com) and [Tailwindcss](https://tailwindcss.com).

## Experiments
1. Workshop
2. Enable bootstrap


### Bootstrap 
> Enabling bootstrap on Next.

```bash
  yarn add bootstrap react-bootstrap
```

Add `import 'bootstrap/dist/css/bootstrap.min.css';` to `_app.js`.

_Some sample code_ and maybe futueristic errors.

```javascript
<Link href="/" passHref>
    <Nav.Link>Home</Nav.Link>
</Link>
<Link href="/contact" passHref>
    <Nav.Link>Contact</Nav.Link>
</Link>
```

```javascript
import {Container, Col, Row} from 'react-bootstrap';

<Container>
  <Col>
    <Row>
      <h1>Yep!</h1>
    </Row>
  </Col>
</Container>
```

Sample bootstrap template and the one is used in this site access [bootswatch](https://bootswatch.com/litera/).