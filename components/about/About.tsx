import AboutGlobeAnimate from "./AboutGlobeAnimate"
import AnimateBody from "./AnimateBody"
import AnimateHeading from "./AnimateHeading"
import AnimateParagraph from "./AnimateParagraph"
import AnimateTitle from "./AnimateTitle"
import DiscordServer from "./DiscordServer"
import GithubGraph from "./GithubGraph"
import SocialMedia from "./SocialMedia"
import Spotify from "./Spotify"
import TiktokEmbed from "./TiktokEmbed"

export default function About() {
  return (
    <section
      id="about"
      className="relative mb-10 flex min-h-screen w-full items-center justify-center overflow-hidden"
    >
      <div className="mx-auto flex w-[90%] flex-col items-start justify-center lg:max-w-[1212.8px]">
        <div className="mb-10 flex w-full items-center justify-between gap-x-2 md:mb-16">
          <AnimateTitle
            title={"About me"}
            className="text-left text-[40px] font-bold leading-[0.9em] tracking-tighter sm:text-[45px] md:text-[60px] lg:text-[80px]"
            wordSpace="mr-[14px]"
            charSpace="mr-[0.0001em]"
          />
          <AboutGlobeAnimate />
        </div>

        <div className="mx-auto flex w-full flex-col lg:max-w-[1200px] lg:flex-row lg:gap-20">
          <div className="lg:mg-16 mb-10 flex w-full flex-col gap-4 text-[18px] font-medium leading-relaxed tracking-wide md:mb-16 md:gap-6 md:text-[20px] md:leading-relaxed lg:max-w-[90%] lg:text-base">
            <AnimateParagraph
              paragraph="Hi There I'm Rifqi Nabil Al Fath, I'm currently living in Jombang, Indonesia."
              delay={1.5}
            />
            <AnimateParagraph
              paragraph="I am a student at Brawijaya University in Malang. That is in the faculty of computer science information technology education study program. I am currently in semester 5. I am 20 years old. I have a hobby of playing games, looking for new things, photography, editing."
              delay={1.8}
            />
            <AnimateParagraph
              paragraph="I've been interested in the world of technology since childhood and began to learn many things about the world of technology. I started to be interested in programming since I studied at the university of brawijaya Malang. from then until now I have been learning about programming."
              delay={2}
            />
            <AnimateParagraph
              paragraph="I have learned several programming languages including HTML, CSS, Javascript, PHP, SQL, Java, Python, Json, XML."
              delay={2.5}
            />
          </div>

          <div className="mb-24 flex w-full flex-col gap-4 leading-relaxed tracking-wide sm:mb-32 md:mb-40 md:gap-6 md:leading-relaxed lg:mb-16 lg:max-w-[90%]">
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Frontend Tools" delay={0.5} />

              <AnimateBody
                text="Figma, Photoshop"
                delay={1}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Framework" delay={1.4} />
              <AnimateBody
                text="Laravel, React"
                delay={1.5}
                className="text-sm"
              />
            </div>
            <div className="flex flex-col gap-4 md:gap-3">
              <AnimateHeading title="Programming Languages" delay={1.6} />
              <AnimateBody
                text="HTML, CSS, Javascript, PHP."
                delay={2}
                className="text-sm"
              />
            </div>
          </div>
        </div>

        <div className="flex w-full flex-col justify-between gap-4 lg:max-w-[1200px] ">
          <GithubGraph />
          <SocialMedia />
        </div>
      </div>
    </section>
  )
}
