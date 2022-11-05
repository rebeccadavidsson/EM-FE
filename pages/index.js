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

    const groupBy = (items, key) => items.reduce(
        (result, item) => {
            return ({
                ...result,
                [item[key]?.weight]: [
                    ...(result[item[key]?.weight] || []),
                    item,
                ],
            });
        },
        {},
    );

    const groupedProducts = groupBy(products, "category");

    return (

        <div className={'fade-in'}>

            <div className={"productsWrapper"}>
                <Header/>
                {Object.keys(groupedProducts).length &&
                    Object.keys(groupedProducts).map((value) => <ProductsGallery
                        categoryName={groupedProducts[value][0]?.category?.name} products={groupedProducts[value]}/>)
                }
            </div>
        </div>

    )
}

export async function getStaticProps() {
    const products = await getProducts()
    return {props: {products}}
}

export default HomePage;
