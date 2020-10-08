import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby"
// import { Link } from 'gatsby'
import Layout from '../components/layout'
import headerStyles from "../components/header.module.scss"

export default function BlogPage() {
    const data = useStaticQuery(graphql`
    query {
        allMarkdownRemark {
          edges {
            node {
              frontmatter {
                title
                date
              }
              fields {
                slug
              }
            }
          }
        }
      }
      `)

      console.log(data)
    return (
        <div>
            <Layout>
                <h1>My blog</h1>
                <ol>
                    {data.allMarkdownRemark.edges.map((edge) => {
                        return (
                            <li>
                              {/* link to slug (stringify name of the marckdown)
                              for example in gatsby.md slug is jsut 'gatsby'
                              and link will be /blog/gatsby */}
                              <Link className={headerStyles.title} 
                              to={`/blog/${edge.node.fields.slug}`}>
                                <h2>{edge.node.frontmatter.title}</h2>
                                <p>{edge.node.frontmatter.date}</p>
                              </Link>
                            </li>
                        )
                    })}
                </ol>
            </Layout>
        </div>
    )
}
