const toggleFavorite = (id: number): void => {
  console.log('llamando toggle');

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  if(favorites.includes(id)) {
    favorites = favorites.filter(pokeId => pokeId !== id);
  } else {
    favorites.push(id);
  }

  localStorage.setItem('favorites', JSON.stringify(favorites));
}


const existInFavorites = (id: number): boolean => {
  const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

  return favorites.includes(id);
}

export default {
  toggleFavorite,
  existInFavorites
};