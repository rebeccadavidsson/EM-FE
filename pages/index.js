import { getProducts } from "../utils/api"
import logo from '../public/logo_transparent.png';

// Import Swiper styles
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import "swiper/css/effect-cube";
import "swiper/css/effect-cards";
import "swiper/css/scrollbar"
import "swiper/css/effect-coverflow"
import ProductsGallery from "../components/ProductsGallery";
import NextImage from "../components/Image";

const HomePage = ({products}) => {

    const logoMedia = {
        url: logo,
        alternativeText: 'logo'
    }

    return (

        <div>
            {/* Desktop */}
            <div className={'flex flex-wrap justify-between items-center mx-auto hidden md:block '}>
                <div className={'p-4 xl:pt-16 flex items-center'}>
                    <div className={'w-12 h-12'}>
                        <NextImage
                            media={logoMedia}/>
                    </div>
                    <h1 className={'md:pl-8 font-roboto-mono text-5xl'}>Emely Davidsson</h1>
                </div>
            </div>

            {/* Mobile */}
            <div className={'flex flex-wrap justify-between items-center mx-auto md:hidden block'}>
                <div className={'p-4 xl:pt-16 flex items-center '}>
                    <h1 className={'md:pl-8 font-roboto-mono text-3xl'}>Emely Davidsson</h1>
                    <div className={'w-12 h-12'}>
                        <NextImage
                            media={logoMedia}/>
                    </div>
                </div>
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
