import useWindowDimensions from "../utils/useWindowDimensions";
import 'photoswipe/style.css';
import { NextImage } from '../components/Image'
import Gallery from "react-photo-gallery-next";
import { useCallback, useState } from "react";
import SelectedImage from "./HoverImage";

const ProductsGallery = ({products}) => {

    const {width} = useWindowDimensions();
    const newProducts = [];

    products.map((prod) => {
        const newProd = prod;
        newProd.src = prod.image.url;
        newProd.width = prod.image.width;
        newProd.height = prod.image.height;
        newProd.title = prod.title;
        newProd.description = prod.description;
        newProducts.push(newProd)
    });

    const [selectAll, setSelectAll] = useState(false);


    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                selected={selectAll ? true : false}
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
            />
        ),
        [selectAll]
    );

    return (
        <>
            <div className="mt-8 " id="products-gallery">
                <Gallery
                    renderImage={imageRenderer}
                    photos={newProducts} direction={"row"} margin={6}
                         columns={width > 768 ? 3 : 2}/>
            </div>
        </>
    )
}

export default ProductsGallery
