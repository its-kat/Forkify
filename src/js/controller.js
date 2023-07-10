import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';
import 'regenerator-runtime/runtime';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2
///////////////////////////////////////

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;
    recipeView.renderSpinner();

    //1.) loading recipe
    await model.loadRecipe(id);

    // 2.) rendering recipe
    recipeView.render(model.state.recipe);
    // const recipeView = new recipeView(model.state.recipe) --> if recipeView was exported
  } catch (err) {
    recipeView.renderError();
  }
};

//subscriber
const init = function () {
  recipeView.addHandlerRender(controlRecipes);
};
init();
