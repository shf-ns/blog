import type { GitHubRepo } from "@/types";

export async function gitHubRepo(): Promise<GitHubRepo[]> {
  let repos: GitHubRepo[] = [];

  try {
    const response = await fetch("https://api.github.com/users/shf-ns/repos");

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`);
    }
    const data: GitHubRepo[] = await response.json();

    repos = data.filter((repo: GitHubRepo) => !repo.fork);
    return repos;
  } catch (error) {
    console.log(error);
    return [];
  }
}
