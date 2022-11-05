import useWindowDimensions from "../utils/useWindowDimensions";
import 'photoswipe/style.css';
import { NextImage } from '../components/Image'
import Gallery from "react-photo-gallery-next";
import Carousel, { Modal, ModalGateway } from "react-images";
import { useCallback, useState } from "react";
import SelectedImage from "./HoverImage";

const ProductsGallery = ({products, categoryName}) => {

    const {width} = useWindowDimensions();
    const newProducts = [];

    const [currentImage, setCurrentImage] = useState(0);
    const [viewerIsOpen, setViewerIsOpen] = useState(false);

    const openLightbox = useCallback((photo, index) => {
        setCurrentImage(index);
        setViewerIsOpen(true);
    }, []);

    const closeLightbox = () => {
        setCurrentImage(0);
        setViewerIsOpen(false);
    };

    products.map((prod) => {
        const newProd = prod;
        newProd.src = prod.image.url;
        newProd.width = prod.image.width;
        newProd.height = prod.image.height;
        newProd.title = prod.title;
        newProd.description = prod.description;
        newProducts.push(newProd)
    });

    const sortedProducts = products.sort((a, b) => b.weight - a.weight);

    const imageRenderer = useCallback(
        ({ index, left, top, key, photo }) => (
            <SelectedImage
                key={key}
                margin={"2px"}
                index={index}
                photo={photo}
                left={left}
                top={top}
                onClick={openLightbox}
            />
        ),
        []
    );

    return (
        <>
            <div className="md:p-20 pt-8 container" id="products-gallery">
                {categoryName && <h2 className={"pb-8"}>{categoryName}</h2>}
                <Gallery
                    renderImage={imageRenderer}
                    photos={sortedProducts} direction={"row"} margin={6}
                         columns={width > 768 ? 3 : 2}/>

                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={closeLightbox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={sortedProducts.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </div>
        </>
    )
}

export default ProductsGallery
