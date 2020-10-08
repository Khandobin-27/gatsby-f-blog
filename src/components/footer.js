import React from "react"
import { graphql, useStaticQuery } from "gatsby"


export default function Header() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
        <footer>
            <p>Created by {data.site.siteMetadata.author}, © 2020</p>
        </footer>
    </div>
  )
}
