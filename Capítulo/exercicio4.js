async function fetchFromGitHub(endpoint) {
    const response = await fetch(`https://api.github.com${endpoint}`);
    if (!response.ok) {
      throw new Error(`Erro ao buscar ${endpoint}: ${response.statusText}`);
    }
    return response.json();
  }

  async function showGitHubUserAndRepos(username) {
    const [user, repos] = await Promise.all([
      fetchFromGitHub(`/users/${username}`),
      fetchFromGitHub(`/users/${username}/repos`)
    ]);
  
    console.log(user.name);
    console.log(repos.length);
  }
  
  showGitHubUserAndRepos('PedroBarrosDev');
  