import NextImage from "./Image"
import Link from "next/link"

const ProductsList = ({ products }) => {

  return (
    <>
    <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-4 mt-8">
      {products.map((_product) => (
        <div
          key={_product.id}
          className="rounded-md bg-gray-100 hover:shadow-lg shadow-md relative"
        >
          <Link href={`/products/${_product.slug}`}>
            <a>
              <div className="w-full bg-white relative">
                <div className="rounded-t-lg w-full mx-auto">
                  <NextImage media={_product.image} height={1700} width={1300} objectFit={"cover"}/>
                </div>
              </div>
              <div className="pl-4 pr-4 pb-4 pt-4 rounded-md relative">
                <h4 className="mt-1 font-semibold text-base leading-tight truncate text-gray-700">
                  {_product.title}
                </h4>
                <div className="mt-1 text-sm text-gray-700">
                  {_product.description}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
    </>
  )
}

export default ProductsList
