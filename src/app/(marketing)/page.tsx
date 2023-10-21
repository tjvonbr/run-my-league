import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/common/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/common/icons";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32">
        <div className="container flex max-w-[64rem] flex-col items-center gap-4 text-center">
          <Link
            href={siteConfig.links.twitter}
            className="rounded-2xl bg-muted px-4 py-1.5 text-sm font-medium"
            target="_blank"
          >
            Follow along on Twitter
          </Link>
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black">
            The only time you can win without working
          </h1>
          <p className="max-w-[42rem] leading-normal text-muted-foreground sm:text-xl sm:leading-8">
            Passionate about fantasy football but tired of the endless decisions
            and time commitment? Our proven, data-driven strategies will launch
            you to the top of your league standings in no time!
          </p>
          <div className="space-x-4">
            <Link href="/login" className={cn(buttonVariants({ size: "lg" }))}>
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section
        id="features"
        className="container space-y-6 bg-slate-50 py-8 dark:bg-transparent md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            How does it work?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We can provide varying degrees of assistance throughout the course
            of the season depending on which package you purchase, but the flow
            generally looks like this:
          </p>
        </div>
        <div className="mx-auto flex flex-col items-center md:flex-row md:space-x-4 md:max-w-[40rem] ">
          <div className="flex flex-col gap-8">
            <div className="h-48 w-80 rounded-lg border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="h-full flex flex-col justify-center space-y-4 rounded-md px-6">
                <Icons.phone size={30} />
                <div className="flex flex-col space-y-1">
                  <h3 className="font-bold">Discovery Call</h3>
                  <p className="text-sm text-muted-foreground">
                    Jump on a call to review roster & league settings and
                    determine logistics
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48 w-80 rounded-lg border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="h-full flex flex-col justify-center space-y-4 rounded-md px-6">
                <Icons.cable size={30} />
                <div className="space-y-2">
                  <h3 className="font-bold">Waiver Prioritization</h3>
                  <p className="text-sm text-muted-foreground">
                    Before the week&apos;s slate of games begins, search for
                    cheap advantages on the waiver wire
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48 w-80 rounded-lg border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="h-full flex flex-col justify-center space-y-4 rounded-md px-6">
                <Icons.folder size={30} />
                <div className="space-y-2">
                  <h3 className="font-bold">Weekly Breakdown</h3>
                  <p className="text-sm text-muted-foreground">
                    We&apos;ll send you a report about how the week went with
                    areas for improvement
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="my-8 md:my-0 flex flex-col gap-8">
            <div className="hidden md:flex h-24 bg-transparent" />
            <div className="h-48 w-80 rounded-lg border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="h-full flex flex-col justify-center space-y-4 rounded-md px-6">
                <Icons.settings size={30} />
                <div className="flex flex-col space-y-1">
                  <h3 className="font-bold">League Configuration</h3>
                  <p className="text-sm text-muted-foreground">
                    Add us as a second owner to your league or arrange
                    decision-making process
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48 w-80 rounded-lg border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="h-full flex flex-col justify-center space-y-4 rounded-md px-6">
                <Icons.blocks size={30} />
                <div className="space-y-2">
                  <h3 className="font-bold">Lineup Optimization</h3>
                  <p className="text-sm text-muted-foreground">
                    Set your weekly lineup with the players most likely to
                    secure a win
                  </p>
                </div>
              </div>
            </div>
            <div className="h-48 w-80 rounded-lg border bg-background p-2 shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <div className="h-full flex flex-col justify-center space-y-4 rounded-md px-6">
                <Icons.recylce size={30} />
                <div className="space-y-2">
                  <h3 className="font-bold">Exit Interview</h3>
                  <p className="text-sm text-muted-foreground">
                    At season&apos;s end, we&apos;ll review how the season went
                    and provide vision for next year
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
