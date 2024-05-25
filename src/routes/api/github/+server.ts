import { getUser } from '$lib/backend/github/user';
import { json } from '@sveltejs/kit';

/** @type {import('@sveltejs/kit').RequestHandler} */
export const GET = async () => {
    const githubUser = await getUser()

    return json(githubUser)

}