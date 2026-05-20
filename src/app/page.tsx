import { PostFeatured } from "@/components/PostFeatured";
import { PostsLists } from "@/components/PostsList";
import { SpinLoader } from "@/components/SpinLoader";

import { Suspense } from "react";

export default async function HomePage() {
  return (
    <>
      <Suspense fallback={<SpinLoader />}>
        <PostFeatured />

        <PostsLists />
      </Suspense>
    </>
  );
}
