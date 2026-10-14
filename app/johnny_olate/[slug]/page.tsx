import type { Metadata } from 'next'
import ArticuloAutor, { metadataArticulo } from '../../../components/ArticuloAutor'
import { getAllPostsByAuthor } from '../../../lib/blog'

interface Props {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return getAllPostsByAuthor('johnny_olate').map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  return metadataArticulo('johnny', slug)
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params
  return <ArticuloAutor autor="johnny" slug={slug} />
}
