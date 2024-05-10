import { PRIVATE_PAT } from '$env/static/private';
import { Octokit } from "@octokit/rest";
export const octokit = new Octokit({
  auth: PRIVATE_PAT,
});