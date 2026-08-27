import { blogPosts } from "@/lib/data";

export default function BlogSection() {
  return (
    <section id="blog" className="py-[clamp(56px,7vw,96px)]">
      <div className="mx-auto max-w-[1200px] px-6">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <div>
            <div className="mb-3 font-heading text-[13px] font-bold uppercase tracking-[1.5px] text-sky">
              From our blog
            </div>
            <h2 className="text-[clamp(28px,4vw,44px)] font-extrabold tracking-[-0.5px]">
              Physiotherapy tips &amp; health articles
            </h2>
          </div>
          <a
            href="https://www.nosecreekphysiotherapy.com/blog/"
            className="whitespace-nowrap font-heading font-bold text-link hover:text-link-dark"
          >
            View all articles →
          </a>
        </div>
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6">
          {blogPosts.map((post) => (
            <a
              key={post.href}
              href={post.href}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-[0_6px_20px_rgba(18,60,80,0.05)] transition-shadow hover:shadow-[0_14px_34px_rgba(18,60,80,0.12)]"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="aspect-video w-full object-cover"
              />
              <div className="flex flex-1 flex-col gap-2.5 p-[22px]">
                <div className="font-heading text-[12.5px] font-semibold text-[#8a97a1]">
                  {post.meta}
                </div>
                <h3 className="text-lg font-bold leading-[1.3] text-ink">
                  {post.title}
                </h3>
                <p className="text-sm leading-[1.6] text-slate">{post.excerpt}</p>
                <span className="mt-auto pt-1.5 text-sm font-bold text-link">
                  Read article →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
