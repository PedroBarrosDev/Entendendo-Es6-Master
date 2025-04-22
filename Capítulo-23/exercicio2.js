

async function showGitHubUser(username) {
    const url = `https://api.github.com/users/${username}`;
    try {
      const response = await fetch(url);
      const user = await response.json();
      console.log(user);
    } catch (erro) {
      console.error('Erro ao buscar usuário:', erro);
    }
  }
  
  (async () => {
    const user = await showGitHubUser('PedroBarrosDev');
    console.log(user);
  })();
  