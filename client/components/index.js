/**
 * `components/index.js` exists simply as a 'central export' for our components.
 * This way, we can import all of our components from the same place, rather than
 * having to figure out which file they belong to!
 */
export {default as Navbar} from './navbar'
export {default as UserHome} from './user-home'
export {Login, Signup} from './auth-form'
export {default as AllProducts} from './AllProducts'
export {default as SingleProduct} from './SingleProduct'
export {AlbumGenres} from './AlbumGenres'
export {default as FeaturedProducts} from './FeaturedProducts'
export {default as AddProduct} from './AddProduct'
export {default as Cart} from './Cart'
export {default as Admin} from './Admin'
export {Product} from './Product'
export {default as AllUsers} from './AllUsers'
export {User} from './User'
export {Checkout} from './Checkout'
