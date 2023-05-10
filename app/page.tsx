import Posts from "@/app/components/Posts";
import ProfilePicture from "@/app/components/profilePicture";

// 86400 seconds === 1 day
export const revalidate: number = 10;
export default function Home() {
    return (

        <main className="mx-auto">

            <ProfilePicture />

            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                que onda and welcome 🏃‍♂️&nbsp;
                <span className="">
              this &apos; is a span, <span className="text-red-500">there are many like it</span>, but this one is mine.
          </span>
            </p>

            {/* @ts-expect-error Server Component */}
            <Posts/>

        </main>
    )
}