import { TProduct } from '@/components/products/ProductItem'
import { products } from '@/data/product'
import { create } from 'zustand'

interface IMenu {
  data: TProduct[]
  detail: TProduct
  getProduct: () => void
  getProductId: (id:number) => void
}
export const useProductStore = create<IMenu>((set) => ({
  data: <TProduct[]>[],
  detail: <TProduct>{},
  getProduct: () => set(() => ({
    data: products
  })),
  getProductId: (id:number) => set(() => ({
    detail: products.find(item=> item.id === id)
  }))
}))