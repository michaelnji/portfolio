import { updatePostMetadata } from '$lib/server/upstash/handlers.js';
import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const POST = async ({ request }) => {
    const { data, id } = await request.json();
    const updatedData = await updatePostMetadata(data, id)
    return new Response(JSON.stringify(updatedData), { status: updatedData.status ?? 500 })


}