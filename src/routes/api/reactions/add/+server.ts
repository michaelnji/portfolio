import { updatePostStats } from "$lib/server/database/queryHandlers";

/** @type {import('@sveltejs/kit').RequestHandler} */
export const POST = async ({ request }) => {
    const { data, postId } = await request.json();
				const updatedData = await updatePostStats(postId, data);
				return new Response(JSON.stringify(updatedData), {
					status: updatedData.status ?? 500,
				});


}