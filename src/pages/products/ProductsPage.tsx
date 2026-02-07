import { ProductsBody } from './components/ProductsBody'
import { ProductsHeader } from './components/ProductsHeader'

export const ProductsPage = () => {
  return (
    <div className=" h-screen overflow-hidden flex flex-col  gap-8">
      <ProductsHeader />
      <ProductsBody />
    </div>
  )
}
