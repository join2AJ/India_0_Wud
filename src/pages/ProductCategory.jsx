import { useParams, Navigate } from 'react-router-dom'
import { categories } from '../data/content'

export default function ProductCategory() {
  const { slug } = useParams()
  const valid = categories.find((c) => c.slug === slug)
  if (valid) return <Navigate to={`/products?category=${slug}`} replace />
  return <Navigate to="/products" replace />
}
