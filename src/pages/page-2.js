import * as React from "react"
import { graphql, Link } from "gatsby"
import Seo from "../components/seo"

const SecondPage = ({data}) => {
    console.log("data: ", data)
    return ( <main>
    <Seo title="Page two" />
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </main>
)
}

export default SecondPage

export const query = graphql`
    query myQuery {
        allImageSharp {
            nodes {
                fluid {
                    src
                }
            }
        }
    }
`;
