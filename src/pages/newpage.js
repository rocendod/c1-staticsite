import * as React from "react"
import { Link } from "gatsby"
import "../styles.css"



const NewPage = () => {
  return (
    <div>
        <header>
            <nav className="navstyle">
            <Link className="navstyle" to="/">Go to Home Page</Link>
            </nav>
            <h1>About Prisma Starship CO.</h1>
        </header>

        <body>
        <p className="about-text">Introducing Prisma Starship CO., a pioneering starship company at the forefront of interstellar exploration and transportation. Founded in 2042 and the visionary principles of innovation and reliability, Prisma Starship CO. has redefined the boundaries of space travel.

  Prisma Starship CO. has consistently pushed the boundaries of technological advancement, crafting vessels that blend cutting-edge engineering. From sleek, state-of-the-art cruisers to nimble exploration vessels, each Prisma Starship CO. starship embodies the company's commitment to excellence and exploration.

  At Prisma Starship CO., our mission goes beyond mere transportation; we want to inspire, connecting civilizations and unlocking the mysteries of our Solar System. With a dedicated team of engineers, designers, and visionaries, we continue to shape the future of space travel, one journey at a time.</p>
        </body>

    </div>
  )
}

export default NewPage
export const Head = () => <title>About Page</title>