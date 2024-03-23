

const errorDefaults = {
    messages: {
        default: 'an error occurred',
        server: {
            loginFailed: 'login failed; invalid email or password',
            noConnection: 'Could not proccess, no internet connection',
            internalError: 'we have encountered an internal error. Please reload the page',
            noAuthorization: 'Your session has ended. Please login again to continue'
        }
    }
    , codes: {

        noAuthorization: 403,
        serverError: 500,
        notFound: 404
    }

}

export function messageBuilder(error: unknown): string {
    const stringRep = `${error}`;
    if (stringRep.startsWith("Error: TypeError:")) {
        if (stringRep.split("Error: TypeError:")[1] === "fetch failed") {
            return errorDefaults.messages.server.noConnection;
        }
        return `${error}`.split("Error: TypeError:")[1];
    }

    return `${error}`.split("Error:")[1];
}

export async function handleError(
    error: unknown,
    data?: null | [],
    status_code?: number,
): Promise<{
    status: number;
    error: string;
    data: [] | null | undefined;
}> {

    return {
        status: status_code ?? errorDefaults.codes.serverError,
        error: messageBuilder(error),
        data: data ?? null,

    };
}
