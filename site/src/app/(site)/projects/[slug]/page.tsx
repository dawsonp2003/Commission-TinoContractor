import { ProjectDetailView } from "@/views/Pages";

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  return <ProjectDetailView locale="en" slug={slug} />;
}
