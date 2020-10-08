import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default function AboutPage() {
    return (
        <div>
            <Layout>
                <h1>Fedor Khandobin</h1>
                <p>I can write tons of informaton about myself</p>
                <p>My <Link to="/contact">contact</Link> section</p>
            </Layout>
        </div>
    )
}
