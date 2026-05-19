import { PostHeading } from "../PostHeading";

type PostSummaryProps = {
  titlePost: string;
  dataPost: string;
  postLink: string;
  postHeading: "h1" | "h2";
  excerptPost: string;
};

export function PostSummary({
  titlePost,
  excerptPost,
  dataPost,
  postLink,
  postHeading,
}: PostSummaryProps) {
  return (
    <div className="flex flex-col gap-4 sm:justify-center">
      <time
        className="text-slate-600 block text-sm/tight"
        dateTime={dataPost}
        title=""
      >
        {dataPost}
      </time>

      <PostHeading as={postHeading} url={postLink}>
        {titlePost}
      </PostHeading>

      <p>{excerptPost}</p>
    </div>
  );
}
