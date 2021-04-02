import Head from 'next/head'
import { useState } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import Header from '../src/components/Header'
import SignIn from '../src/screens/auth/SignIn'
import Register from '../src/screens/auth/Register'



export default function Home() {
  const [signInVisibility, setSignInVisiblity] = useState(false)
  const [registerVisibility, setRegisterVisibility] = useState(false)

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* header */}
      <Header signInVisibility={signInVisibility} setSignInVisiblity={setSignInVisiblity} registerVisibility={registerVisibility} setRegisterVisibility={setRegisterVisibility} />
      {/* main */}
      <main className='my-2' style={{ minHeight: '75vh' }}>
        <Container fluid>
          <Col>
            <Row>
              {
                signInVisibility &&
                <SignIn signInVisibility={signInVisibility} setSignInVisiblity={setSignInVisiblity} setRegisterVisibility={setRegisterVisibility} />}
              {registerVisibility ?
                <Register registerVisibility={registerVisibility} setRegisterVisibility={setRegisterVisibility} /> :
                <h1>Yep!</h1>
              }
            </Row>
          </Col>
        </Container>
      </main>

      {/* footer */}


      <Container as='footer' fluid>
        <div className="card border-light">
          <div className="card-body">
            <span className="card-title"><img src='https://www.flaticon.com/svg/vstatic/svg/3884/3884466.svg?token=exp=1617359001~hmac=c874397d70928fe92b16bc1d620cef78' width='30' height='30' className='d-inline-block align-top' /></span>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
        </div>
      </Container>
    </div>
  )
}
