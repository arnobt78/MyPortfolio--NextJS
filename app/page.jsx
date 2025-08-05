import Link from "next/link";
import { Button } from "../components/ui/button";
import { FiDownload } from "react-icons/fi";

// components
import Social from "../components/Social";
import Photo from "../components/Photo";
import Stats from "../components/Stats";

const Home = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-1 xl:pb-20">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <h1 className="h1 mb-5">
              Hello! I&apos;m <br />{" "}
              <span className="text-accent">Arnob Mahmud</span>
            </h1>
            <span className="max-w-[600px] text-xl text-justify">
              Full-Stack Developer | Automation & Digital Solutions Engineer
            </span>
            <p className="max-w-[600px] mt-2 mb-9 text-white/80 text-justify">
              Dedicated and trustworthy full-stack developer with over four
              years of experience delivering robust, end-to-end digital
              solutions from concept to production. Known for quickly
              understanding client needs and turning them into impactful,
              user-centered applications. A strong team player with excellent
              communication skills, analytical thinking, and a calm, focused
              mindset under pressure. Passionate about continuous learning,
              solving complex challenges, and delivering high-quality results on
              time in fast-paced environments. 🚀
            </p>

            {/* button and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Link
                href="https://drive.google.com/file/d/1gCbh5M7cZRVKovP1w2IYVQH_gxWVgsCa/view?usp=sharing"
                target="_blank"
              >
                <Button
                  variant="outline"
                  size="lg"
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download Resume </span>
                  <FiDownload />
                </Button>
              </Link>
              <div className="mb:8 xl:mb-0 ">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
