var recipes = {};

function updateObjectWithKeyAndValue(recipes, dinner, meat){
  recipes[dinner] = meat
  return recipes
};

function updateObjectWithKeyAndValue(recipes, dinner, meat){
  return Object.assign({}, recipes, { [dinner]: meat })
};
