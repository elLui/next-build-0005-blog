type Meta = {

    id: string,
    title: string,
    date: string,
    tags: string[],


}


type BlogPost = {
    meta: Meta,
    // TODO :: change any to correct type
    content: any,
}