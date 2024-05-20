import { octokit } from './client';
// octokit.rest.repos.get({
//   owner,
//   repo,
// });

// octokit.rest.repos.getParticipationStats({
//   owner,
//   repo,
// });

export async function getRepoCommitCount(owner: string, repo: string) {
    try {
        const { status, data } = await octokit.rest.repos.listCommits({
            owner,
            repo,
        });

        if (status !== 200) return 0
        return data.length
    } catch (err) {

        return 0
    }

}

export async function getReposStats() {
    try {
        const { data } = await octokit.rest.repos.listForAuthenticatedUser();

        const repos: { fork: boolean; created_at: string | null; forks: number; isArchived: boolean; isDisabled: boolean; name: string; desc: string | null; issues: number; stars: number; language: string | null; visibility: string | undefined; }[] = []
        let totalStars = 0
        let totalForks = 0
        let totalIssues = 0
        let totalCommitCounts = 0
        const tempData = data

        for (let index = 0; index < tempData.length - 1; index++) {
            const element = tempData[index];

            const commits = await getRepoCommitCount(element.owner.name ?? element.owner.login, element.name)
            totalCommitCounts = totalCommitCounts + commits


        }

        data.forEach((repo) => {

            totalStars = totalStars + repo.stargazers_count
            totalForks = totalForks + repo.forks_count
            totalIssues = totalIssues + repo.open_issues_count

            repos.push({
                fork: repo.fork,
                created_at: repo.created_at,
                forks: repo.forks_count,
                isArchived: repo.archived,
                isDisabled: repo.disabled,
                name: repo.name,
                desc: repo.description,
                issues: repo.open_issues_count,
                stars: repo.stargazers_count,
                language: repo.language,
                visibility: repo.visibility
            })
        })

        return {
            repos, totalForks, totalIssues, totalStars, totalCommitCounts
        }
    } catch (error) {
        return null
    }
}

