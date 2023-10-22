import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/common/button";
import { Icons } from "@/components/common/icons";
import { RegisterForm } from "@/components/RegisterForm";

export const metadata = {
  title: "Create an account",
  description: "Create an account to get started.",
};

export default function Register() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "ghost" }),
          "absolute left-4 top-4 md:left-8 md:top-8"
        )}
      >
        <>
          <Icons.chevronLeft className="mr-2 h-4 w-4" />
          Back
        </>
      </Link>
      <div className="lg:p-8">
        <div className="mx-auto flex w-full flex-col justify-center items-center space-y-6 sm:w-[350px]">
          <div className="flex flex-col space-y-2 text-center">
            <Icons.logo className="mx-auto h-6 w-6" />
            <h1 className="text-2xl font-semibold tracking-tight">
              Create an account
            </h1>
            <p className="text-sm text-muted-foreground">
              Enter your full name and email below to create your account
            </p>
            <RegisterForm />
          </div>
          <p className="px-8 text-center text-sm text-muted-foreground">
            <Link href="/login" className="hover:underline underline-offset-4">
              Already have an account? Sign in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
