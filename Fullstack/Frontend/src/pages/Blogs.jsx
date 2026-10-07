import React from "react";
import { Link } from "react-router-dom";
import { ErrorBox, PageLoader } from "../admin/components/ui";
import { formatDate } from "../admin/utils/india";
import { useMe, usePublishedBlogs } from "../account/useAccount";

export default function Blogs() {
  const { data, isLoading, error, refetch } = usePublishedBlogs();
  const { data: me } = useMe();

  return (
    <div className="mx-auto w-full max-w-5xl px-4 py-10 sm:py-14">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="text-3xl font-semibold text-stone-900">TechTorch Blogs</h1>
          <p className="mt-2 text-stone-600">Ideas and experiences from our team and community.</p>
        </div>
        <Link
          to={me?.accountType === "candidate" ? "/candidate" : "/signin"}
          state={me ? undefined : { from: "/candidate" }}
          className="rounded-lg px-4 py-2 text-sm font-medium text-white"
          style={{ backgroundColor: "#780042" }}
        >
          Write a blog
        </Link>
      </div>

      <div className="mt-8">
        {isLoading && <PageLoader />}
        {error && <ErrorBox error={error} onRetry={refetch} />}
        {data && data.length === 0 && (
          <div className="rounded-xl border border-dashed border-stone-300 p-10 text-center text-stone-500">No blogs published yet.</div>
        )}
        <div className="grid gap-5 sm:grid-cols-2">
          {(data || []).map((b) => (
            <Link key={b._id} to={`/blogs/${b._id}`} className="group overflow-hidden rounded-xl border border-stone-200 bg-white transition hover:shadow-md">
              {b.coverImage && <img src={b.coverImage} alt="" loading="lazy" className="h-44 w-full object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />}
              <div className="p-5">
                {b.category && <span className="text-xs font-medium uppercase tracking-wide text-[#780042]">{b.category}</span>}
                <h2 className="mt-1 text-lg font-semibold text-stone-900 group-hover:text-[#780042]">{b.title}</h2>
                <p className="mt-2 line-clamp-3 text-sm text-stone-600">{b.excerpt}</p>
                <p className="mt-3 text-xs text-stone-400">{b.authorName} · {formatDate(b.publishedAt || b.createdAt)}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}