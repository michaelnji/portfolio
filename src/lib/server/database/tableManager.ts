import { db } from "./client";

export async function createPostStatsTable() {
	try {
		await db.schema
			.createTable("stats")
			.addColumn("id", "serial", (col) => col.primaryKey())
			.addColumn("postId", "varchar(100)", (col) => col.notNull())
			.addColumn("views", "integer", (col) => col.notNull())
			.addColumn("hearts", "integer", (col) => col.notNull())
			.addColumn("claps", "integer", (col) => col.notNull())
			.execute();
	} catch (err) {
		console.log(err);
	}
}