import * as React from "react"
import { Link } from "gatsby"
import "../styles.css"



const NewPage = () => {
  return (
    <div>
        <header>
            <nav className="navstyle">
            <Link to="/">Go to Index Page</Link>
            </nav>
            <h1>New Page</h1>
        </header>

        <body>
        <p>This is a new page in my Gatsby site.</p>
        </body>

    </div>
  )
}

export default NewPage