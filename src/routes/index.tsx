import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/adhere/Nav";
import { SceneHook } from "@/components/adhere/SceneHook";
import { Marquee } from "@/components/adhere/Marquee";
import { SceneCases } from "@/components/adhere/SceneCases";
import { SceneSystem } from "@/components/adhere/SceneSystem";
import { SceneProblem } from "@/components/adhere/SceneProblem";
import { SceneFinale } from "@/components/adhere/SceneFinale";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adhere Studio — Independent design studio" },
      { name: "description", content: "Brand, product and web design for founders who refuse to ship the average. Cairo · Worldwide." },
      { property: "og:title", content: "Adhere Studio — Independent design studio" },
      { property: "og:description", content: "Brand, product and web design for founders who refuse to ship the average." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background text-foreground">
      <Nav />
      <SceneHook />
      <Marquee />
      <SceneCases />
      <SceneSystem />
      <SceneProblem />
      <SceneFinale />
    </main>
  );
}
