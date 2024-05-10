import { octokit } from "./client";
import { getReposStats } from './repos';
// 
export async function getUser() {
  const { totalForks, totalIssues, totalStars } = await getReposStats()
  const { data } = await octokit.rest.users.getAuthenticated();
  return {
    avatar: data.avatar_url,
    name: data.name,
    blog: data.blog,
    location: data.location,
    email: data.email,
    bio: data.bio,
    repos: data.total_private_repos ? data.total_private_repos + data.public_repos : + data.public_repos,
    followers: data.followers,
    following: data.following,
    created_at: data.created_at,
    totalForks, totalIssues, totalStars
  }



}