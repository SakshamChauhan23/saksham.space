import type { ReactNode } from "react";
import Link from "next/link";
import type { Post } from "@/data/writing";

export default function PostLink({
  post,
  className,
  children,
}: {
  post: Post;
  className: string;
  children: ReactNode;
}) {
  if (post.source === "substack") {
    return (
      <a href={post.href} className={className} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }
  return (
    <Link href={post.href} className={className}>
      {children}
    </Link>
  );
}
