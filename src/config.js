const api = () => {
  const host = 'https://www.thecocktaildb.com/api/json/v1/1';
  return {
    host: host,
    categoryList: `${host}/list.php?c=list`,
    typeList: `${host}/list.php?a=list`,
    glassList: `${host}/list.php?g=list`
  };
};

export default api;
