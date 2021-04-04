import Head from 'next/head';
import { useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';



export default function Home() {

  return (
    <div>
      <Head>
        <title>Next App Playground</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}

      {/* main */}
      <main className='my-2' style={{ minHeight: '75vh' }}>
        <Container fluid>
          <Row>
            <Col xs={12}>
              <h1>Hi</h1>
            </Col>
          </Row>
        </Container>
      </main>

      {/* footer */}
      <Container as='footer' fluid>
        <div className="card border-light">
          <div className="card-body">
            <span className="card-title"><img src='https://thebeaver.xyz/static/media/TheBeaverLight.cc3563db.svg' width='30' height='30' className='d-inline-block align-top' /></span>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Container>
    </div>
  );
}
