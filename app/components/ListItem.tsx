import Link from 'next/link';
import getFormattedDate from "@/lib/getFormattedDate";


type Props = {
    post: Meta
};
export default function ListItem({post}: Props) {
    const {id, title, date} = post;

    const formattedDate = getFormattedDate(date);

    return (
        <li className="mt-4 text-2xl dark:text-white/90">
            <Link href={`/posts/${id}`} className="underline hover:text-blue-400/70 dark:hover:text-white">
                {title}
            </Link>
            <br/>
            <p className="text-md mt-1 text-blue-700">
                {formattedDate}
            </p>
        </li>
    );
};
