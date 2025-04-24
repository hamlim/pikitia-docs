import Component from "#/mdx/docs.mdx";

export default function Home() {
  return (
    <main className="prose dark:prose-invert mx-auto max-w-prose p-10">
      <Component />
    </main>
  );
}

export function getConfig() {
  return {
    render: "dynamic",
  };
}
