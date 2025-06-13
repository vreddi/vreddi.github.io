import { GenerativeSketch } from "@/components/generativeSketch";
import { Introduction } from "@/components/introduction";

export default function Home() {
  return (
    <div className="min-h-screen bg-background-light dark:bg-background-dark text-foreground-light dark:text-foreground-dark transition-colors duration-300">
      <div className="container w-full md:max-w-3xl mx-auto pt-12 pb-28">
        <div className="max-w space-y-12 px-4">
          <Introduction />
          <GenerativeSketch className="w-full h-72" enableRedraw={true} />
          <div id="recentposts" className="section">
            {/* <RecentPosts postsList={props.postsList} /> */}
          </div>
          {/* <RecommendationsWidget /> */}
          <div id="projects" className="section">
            {/* <ProjectsList /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
