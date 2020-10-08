import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

//static query will not work here (as in header etc)
// because we cannot access to the content of the .md
//this alternative gonna work for the temaplte files
export const query = graphql`
query (
    $slug: String!
  ){
    markdownRemark (
      fields: {
        slug: {
          eq: $slug
        }
      }
    ) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default function Blog(props) {
    return (
        <Layout>
            <h1>{props.data.markdownRemark.frontmatter.title}</h1>
            <p>{props.data.markdownRemark.frontmatter.date}</p>
            <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
        </Layout>
    )
}
