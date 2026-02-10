import { Link } from 'react-router-dom'

function Products() {
  return (
    <div className="page">
      <h1>Products Page</h1>
      <p>This is a dummy Products page with nested product details routes.</p>
      <ul>
        <li>
          <Link to="/products/1">Product 1</Link>
        </li>
        <li>
          <Link to="/products/2">Product 2</Link>
        </li>
      </ul>
    </div>
  )
}

export default Products


