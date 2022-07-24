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
import Footer from "../components/Footer";


const HomePage = ({products}) => {

    return (

        <div>
            <div>
                <h1 className={'p-4 xl:pt-16 font-roboto-mono text-5xl'}>Emely Davidsson</h1>
            </div>
            <hr/>

            <ProductsGallery products={products}/>
        </div>

    )
}

export async function getStaticProps() {
    const products = await getProducts()
    return {props: {products}}
}

export default HomePage;
