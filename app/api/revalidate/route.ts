// TODO :: research new next build revalidation api
// ?  https://nextjs.org/docs/app/api-reference/functions/revalidatePath
// ?  https://nextjs.org/docs/app/building-your-application/data-fetching/revalidating


// http://localhost:3000/api/revalidate?=path=/&secret=elluis-secret-token-64
//
// import { NextRequest, NextResponse } from 'next/server';
// import { revalidatePath } from 'next/cache';
//
//
// export async function handler(
//     req: NextRequest,
//     res: NextResponse,
// ) {
//
//
//
//     const path = request.nextUrl.searchParams.get('path') || '/';
//     revalidatePath(path);
//     return NextResponse.json({ revalidated: true, now: Date.now() });
// }