
import useWindowDimensions from "../utils/useWindowDimensions";
import { useRouter } from 'next/router'
import 'photoswipe/style.css';
import { NextImage } from '../components/Image'
import Gallery from "react-photo-gallery-next";

const ProductsGallery = ({products}) => {
    const router = useRouter()

    const {width} = useWindowDimensions();
    const newProducts = [];
    products.map((prod) => {
        const newProd = prod;
        newProd.src = prod.image.url;
        newProd.width = prod.image.width;
        newProd.height = prod.image.height;
        newProducts.push(newProd)
    });

    const goToSlug = (props) => {
        router.push(`/products/${props.target.getAttribute('slug')}`);
    }

    return (
        <>
            <div className="mt-8 " id="products-gallery">

                <Gallery photos={newProducts} direction={"row"} onClick={goToSlug} margin={6}
                         columns={width > 768 ? 3 : 2}/>
            </div>
        </>
    )
}

export default ProductsGallery
