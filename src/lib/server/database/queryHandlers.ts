import type { PostStat } from "$lib/types";
import { handleError } from "$lib/utils/errorHandler";

import { db } from "./client";

export async function getPostStats(id: string) {
	try {
		const query = await db
			.selectFrom("stats")
			.selectAll()
			.where("postId", "=", id)
			.executeTakeFirstOrThrow();

		return {
			status: 200,
			error: null,
			data: query,
		};
	} catch (err) {
		return handleError(err);
	}
}

export async function createPostStat(stat: {
	postId: string;
	views: number;
	hearts: number;
	claps: number;
}) {
	try {
		const query = await db
			.insertInto("stats")
			.values(stat)
			.returningAll()
			.executeTakeFirstOrThrow();
		return {
			status: 200,
			error: null,
			data: query,
		};
	} catch (err) {
		handleError(err);
	}
}

export async function updatePostStats(id: string, updatedStats: PostStat) {
	try {
		const data = await db
			.updateTable("stats")
			.set(updatedStats)
			.where("postId", "=", id)
			.returningAll()
			.executeTakeFirstOrThrow();

		return {
			status: 200,
			error: null,
			data,
		};
	} catch (err) {
		return handleError(err);
	}
}

export async function getOrCreatePostStats(
	id: string,
	info: {
		postId: string;
		views: number;
		hearts: number;
		claps: number;
	},
) {
	const exists = await getPostStats(id);

	if (exists?.status !== 200 && exists.error !== " no result") { return exists; }

	if (!exists?.data) {
		return await createPostStat(info);
	}
	return exists;
}