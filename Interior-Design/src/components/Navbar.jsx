import {Link} from 'react-router-dom'

function Navbar(){
    return (
        <nav className="absolute top-0 left-0 w-full z-20 flex justify-between items-center px-8 py-4 text-white">
            
            <h1 className="text-2xl font-bold">LifeNice Interiors</h1>

            <div className="flex gap-6">
                <Link to="/" className="hover:text-amber-600 transition">Home</Link>
                <Link to="/products" className="hover:text-amber-600 transition">Products</Link>
                <Link to="/cart" className="hover:text-amber-600 transition">Cart</Link>
            </div>
        </nav>
    );
}

export default Navbar;
