import { createKysely } from "@vercel/postgres-kysely";
import { PRIVATE_POSTGRES_URL } from "$env/static/private";
import type { Database } from "$lib/types";

export const db = createKysely<Database>({
	connectionString: PRIVATE_POSTGRES_URL,
});