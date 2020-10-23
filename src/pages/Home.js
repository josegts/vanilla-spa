import getData from '../utils/getData'

const Home = async () => {
  const characters = await getData();
  const view = `
    <div class="characters">
      ${
        characters && characters.results &&
        characters.results.map(
          (c) => `
        <article class="characters-item">
          <a href="#/${c.id}/">
            <img src="${c.image}" alt="${c.name}" />
            <h2>${c.name}</h2>
          </a>
      </article>`
        )
      }.join('')
      
    </div>`;
  return view;
}

export default Home;