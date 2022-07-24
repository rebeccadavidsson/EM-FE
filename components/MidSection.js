const MidSection = ({product}) => {

    return (
        <>
            {product &&
                <div className="mt-8 " id="products-gallery reveal-left">
                    <img
                        className={'block'}
                        alt={product.title}
                        {...product}
                        width={500}
                        height={900}
                    />

                </div>
            }
        </>
    )
}

export default MidSection
