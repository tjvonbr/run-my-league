import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/common/button";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/common/icons";
import { UserTestimonial, testimonials } from "@/config/testimonials";
import TestimonialCard from "@/components/testimonial-card";
import Testimonials from "@/components/testimonials";

export default async function IndexPage() {
  return (
    <>
      <section className="space-y-6 pb-8 pt-6 md:pb-12 md:pt-10 lg:py-32 overflow-visible">
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
            <Link
              href="/#pricing"
              className={cn(buttonVariants({ size: "lg" }))}
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>
      <section
        id="process"
        className="container space-y-6 bg-slate-50 py-8 md:py-12 lg:py-24"
      >
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            How it works
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We can provide varying degrees of assistance throughout the course
            of the season depending on which package you purchase, but the flow
            generally looks like this:
          </p>
        </div>
        <div className="mx-auto flex flex-col items-center md:flex-row md:space-x-4 md:max-w-[40rem]">
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
      <section id="testimonials" className="py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            What our clients think
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Many fantasy football players have never been to the playoffs, won
            their league championship, or consistently led their league in
            points scored. Things quickly turned around when they asked for our
            help.
          </p>
        </div>
        <div className="h-64 w-full my-5 relative py-5 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
          <Testimonials />
        </div>
      </section>
      <section id="pricing" className="container py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[90%] flex-col items-center gap-4">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="font-bold text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
              Pricing
            </h2>
            <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
              We can provide varying degrees of assistance throughout the course
              of the season depending on which package you purchase, but the
              flow generally looks like this:
            </p>
          </div>
          <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
            <div className="h-[28rem] p-5 my-5 relative flex flex-col items-center rounded-md bg-slate-50 border shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <p className="text-center text-2xl text-muted-foreground font-medium">
                Weekly
              </p>
              <p className="mt-4 text-2xl text-foreground font-bold">
                $29.99/week
              </p>
              <div className="w-[90%] my-8 border-t-[0.5px] border" />
              <div className="flex flex-col space-y-4">
                <div className="w-full flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    25% cheaper than competitors
                  </p>
                </div>
                <div className="w-full flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    24/7 on-call fantasy advice
                  </p>
                </div>
                <div className="w-full flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    Weekly roster optimization
                  </p>
                </div>
                <div className="w-full flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">Waiver wire optimization</p>
                </div>
                <div className="w-full flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    Weekly reports in your inbox
                  </p>
                </div>
              </div>
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "absolute bottom-5"
                )}
              >
                Get started with Weekly
              </Link>
            </div>
            <div className="h-[28rem] p-5 my-5 relative flex flex-col items-center rounded-md bg-slate-50 border shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <p className="text-center text-2xl text-muted-foreground font-medium">
                Draft
              </p>
              <p className="mt-4 text-2xl text-foreground font-bold">$74.99</p>
              <div className="w-[90%] my-8 border-t-[0.5px] border" />
              <div className="flex flex-col space-y-4">
                <div className="flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    25% cheaper than competitors
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    Full-service draft assistance
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">
                    Personalized draft strategy
                  </p>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                  <Icons.check size={15} />
                  <p className="text-sm text-black">End-of-draft report</p>
                </div>
              </div>
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "absolute bottom-5"
                )}
              >
                Get started with Draft
              </Link>
            </div>
            <div className="h-[28rem] my-5 p-5 relative flex flex-col items-center rounded-md bg-slate-50 border shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
              <p className="text-center text-2xl text-muted-foreground font-medium">
                Full-Season Support
              </p>
              <p className="mt-4 text-2xl text-foreground font-bold">$449.99</p>
              <div className="w-[90%] my-8 border-t-[0.5px] border" />
              <div className="flex flex-col space-y-4">
                <p className="text-center text-sm text-black">
                  All features and services from the Weekly Support and Draft
                  Support packages beginning
                </p>
              </div>
              <Link
                href="/register"
                className={cn(
                  buttonVariants({ variant: "default" }),
                  "absolute bottom-5"
                )}
              >
                Get started with Full-Season
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
