import { formatDate, getAllPostsCombined } from '../../lib/blog'

export default function AcademiaLista() {
  const posts = getAllPostsCombined().slice(0, 3)

  return (
    <section id="academia" className="bg-[#f7f6f3] px-6 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-[#776532]">Academia</p>
            <h2 className="font-heading mt-4 text-4xl font-semibold leading-tight text-[#192A4D]">Lo que escribimos.</h2>
          </div>
          <a href="/academia" className="text-sm text-[#192A4D] underline decoration-[#B5A05F] underline-offset-4 hover:text-[#776532]">
            Ver todos los artículos
          </a>
        </div>

        <ul className="mt-12 border-t border-[#192A4D]/10">
          {posts.map((post) => (
            <li key={post.slug} className="border-b border-[#192A4D]/10">
              <a href={`${post.autorPath}/${post.slug}`} className="group grid gap-2 py-8 md:grid-cols-[14rem_1fr] md:gap-10">
                <p className="text-sm text-[#192A4D]/70">
                  {post.autor}
                  <span className="block text-[#192A4D]/70">{formatDate(post.date)}</span>
                </p>
                <div>
                  <h3 className="font-heading text-xl font-semibold leading-snug text-[#192A4D] group-hover:text-[#776532]">
                    {post.title}
                  </h3>
                  <p className="mt-2 line-clamp-2 text-base leading-7 text-gray-600">{post.description}</p>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
