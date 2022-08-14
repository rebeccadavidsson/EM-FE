import { getProducts } from "../utils/api"

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"
import ProductsGallery from "../components/ProductsGallery";

import Header from "../components/Header";

const HomePage = ({products}) => {

    return (

        <div className={'fade-in'}>
            <Header />

            <ProductsGallery products={products}/>

        </div>

    )
}

export async function getStaticProps() {
    const products = await getProducts()
    return {props: {products}}
}

export default HomePage;
