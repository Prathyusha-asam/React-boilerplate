import { Link } from 'react-router-dom'



function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>This is the home page in a simple React Router demo.</p>

      <nav className="nav">
        <Link to="/about">Go to About</Link> |{' '}
        <Link to="/contact">Go to Contact</Link> |{' '}
        <Link to="/products">Go to Products</Link> |{' '}
        <Link to="/gallery">Go to Gallery</Link>
      </nav>
  
    </div>
  )
}

export default Home


