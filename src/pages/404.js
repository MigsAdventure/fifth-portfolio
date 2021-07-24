import * as React from "react"
import Seo from "../components/seo"

const NotFoundPage = (props) => (
  <main className="not-found">
    <Seo title="Migs ERROR Page" />
    <section>
      <h1>Sorry, This page doesn't exist!</h1>
      <a>Click here to return to the main page.</a>
    </section>
  </main>
)

export default NotFoundPage
