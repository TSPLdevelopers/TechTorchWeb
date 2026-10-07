import React from "react";
import { Link, useParams } from "react-router-dom";
import { ErrorBox, PageLoader } from "../admin/components/ui";
import { formatDate } from "../admin/utils/india";
import { usePublishedBlog } from "../account/useAccount";

export default function BlogDetail() {
  const { id } = useParams();
  const { data: blog, isLoading, error, refetch } = usePublishedBlog(id);

  return (
    <article className="mx-auto w-full max-w-3xl px-4 py-10 sm:py-14">
      <Link to="/blogs" className="text-sm text-[#780042] hover:underline">← All blogs</Link>
      {isLoading && <PageLoader />}
      {error && <div className="mt-6"><ErrorBox error={error} onRetry={refetch} /></div>}
      {blog && (
        <>
          {blog.category && <p className="mt-6 text-xs font-medium uppercase tracking-wide text-[#780042]">{blog.category}</p>}
          <h1 className="mt-1 text-3xl font-semibold leading-tight text-stone-900">{blog.title}</h1>
          <p className="mt-2 text-sm text-stone-500">By {blog.authorName} · {formatDate(blog.publishedAt || blog.createdAt)}</p>
          {blog.coverImage && <img src={blog.coverImage} alt="" className="mt-6 w-full rounded-xl object-cover" onError={(e) => (e.currentTarget.style.display = "none")} />}
          {/* rendered as plain text (never as HTML) so user-written content cannot inject scripts */}
          <div className="mt-6 whitespace-pre-wrap text-[17px] leading-8 text-stone-800">{blog.content}</div>
          {blog.tags?.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2">
              {blog.tags.map((t) => <span key={t} className="rounded-full bg-stone-100 px-3 py-1 text-xs text-stone-600">#{t}</span>)}
            </div>
          )}
        </>
      )}
    </article>
  );
}