// import React from "react"

// export default function Home() {
//   return <div>Fedos, You will do it!</div>
// }
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function IndexPage() {
  return (
    <Layout>
      <h1>Hey!</h1>
      <h2>I am Fedor, believing that already a junior developer. 
        Living in beautiful Tampere </h2>
        <p>Need a developer? <Link to="/contact">Contact me</Link></p>
    </Layout>
  )
}

