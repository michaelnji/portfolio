import type { PostMetaData } from "$lib/types";
import { handleError } from "$lib/utils/errorHandler";
import { PostMetaDataCLient } from "./initialize";

export async function getDataById(id: string) {
    try {
        const info = await PostMetaDataCLient.get(id);
       
        return {
            status: 200,
            error: null,
            data: info?.data
        }

    } catch (error) {
        return handleError(error)
    }
}
export async function createPostMetadata(info: PostMetaData, id: string) {
    try {
        await PostMetaDataCLient.set(id, info)
        return {
            status: 200,
            error: null,
            data: info
        }
    } catch (error) {
        return handleError(error)
    }
}
export async function updatePostMetadata(info: PostMetaData, id: string) {
    try {
        await PostMetaDataCLient.update(id, info)
        return {
            status: 200,
            error: null,
            data: info
        }
    } catch (error) {
        return handleError(error)
    }
}

export async function getOrCreatePostMetaData(id: string, info: PostMetaData) {
    const exists = await getDataById(id)

    if (exists?.status !== 200) return exists
    let newData;
    if (!exists?.data) {
        newData = await createPostMetadata(info, id)
        return newData
    }
    return exists
}