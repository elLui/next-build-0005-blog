import Image from "next/image";

export default function ProfilePicture() {
    return (

        <section className="w-full mx-auto">
            <Image
                className="border-4 border-black dark:border-slate-300 drop-shadow-xl shadow-black rounded-full mx-auto mt-8"
                src={"/images/luiWGLASSES.jpg"} alt={"luis profile picture"} width={200} height={200} priority={true}/>
        </section>
    )
}