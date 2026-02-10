import { Counter } from "../components/counter.js";

function About() {
  return (
    <div className="page">
      <h1>About Page</h1>
      <p>
        This is a dummy About page to demonstrate how client-side routing works
        in React using React Router.
      </p>
      <Counter />
    </div>
  )
}

export default About


