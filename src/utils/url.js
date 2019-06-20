const assetPath = (level, path) => {
  let directory_levels = "";
  for(let i= 0; i <= level; i++) {
    directory_levels+='../'
  }
  console.log('directory levels: ', directory_levels);
  return directory_levels + path;
};

export {
  assetPath
};