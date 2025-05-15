import CartWidget from './CartWidget'
import { Link, useNavigate } from 'react-router'

const Navbar = () => {
  const Navigate = useNavigate()
  const [theme, setTheme] = useState(true)
  const [carrito, setCarrito] = useState([])

     return (
      <header>
       <img src='/public/logo r.PNG' alt='logo' />
        <nav>
         <Link to='/'>Home</Link>
         <Link to='/contact'>Contact</Link>
        </nav>
       
        <CartWidget carrito={carrito} />
      </header>
    )
}

export default Navbar