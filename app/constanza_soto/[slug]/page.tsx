import type { Metadata } from 'next'
import ArticuloAutor, { metadataArticulo } from '../../../components/ArticuloAutor'
import { getAllPostsByAuthor } from '../../../lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostsByAuthor('constanza_soto').map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return metadataArticulo('constanza', slug)
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  return <ArticuloAutor autor="constanza" slug={slug} />
}
