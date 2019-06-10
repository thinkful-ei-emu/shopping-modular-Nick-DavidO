'use strict';
/* global shoppingList, store, Item, cuid */

// eslint-disable-next-line no-unused-vars



const Item = (function () {
  const validateName = function validateName(name){
    if (name === ''){
      throw new Error('Name does not exist.');
    
    }
  };
  const create = function create(name){
    return {
      id: cuid(),
      name,
      checked: false,
    };
  };

  return {
    validateName,
    create
  };
}() );
