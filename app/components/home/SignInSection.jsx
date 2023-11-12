import Image from "next/image";
import Link from "next/link";

export default function SignInSection() {
  return (
    <section>
      <div className="mx-auto flex max-w-4xl items-center justify-center">
        <div className="mx-auto my-5 flex max-w-3xl flex-col items-start justify-center gap-6">
          <h1 className=" mb-0 w-full pb-2 text-center">Sign In</h1>
          <h4 className="m-0 max-w-sm text-center">
            A Jesuit Student or Mentor? Sign in to access the docs, schedule and
            more!
          </h4>
          <Link
            href="/member/sign-in"
            className="button button-outline large-button mx-auto flex h-fit items-center justify-center gap-4 p-4 px-10"
          >
            Sign in
          </Link>
        </div>
        <Image
          src="/svg/sign-in/sign-in-animated.svg"
          alt=""
          className="h-auto w-1/2 max-w-xl"
          width={400}
          height={400}
          draggable="false"
          priority
        />
      </div>
    </section>
  );
}
