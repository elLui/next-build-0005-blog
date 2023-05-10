import Posts from "@/app/components/Posts";


export const revalidate: number = 10;
export default function Home() {
    return (

        <main className="px-6 mx-auto">
            <p className="mt-12 mb-12 text-3xl text-center dark:text-white">
                que onda and welcome 🏃‍♂️&nbsp;
                <span className="">
              this &apos; is a span, <span className="text-red-500">there are many like it</span>, but this one is mine.
          </span>
            </p>

            <Posts/>

        </main>
    )
}