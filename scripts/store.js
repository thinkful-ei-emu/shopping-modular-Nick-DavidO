'use strict';
/* global store, cuid */

// eslint-disable-next-line no-unused-vars
const store = (function () {
  // items: [
  //     { id: cuid(), name: 'apples', checked: false },
  //     { id: cuid(), name: 'oranges', checked: false },
  //     { id: cuid(), name: 'milk', checked: true },
  //     { id: cuid(), name: 'bread', checked: false }
  //   ],
  //   hideCheckedItems: false,
  //   searchTerm: ''

  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  let hideCheckedItems = false;
  let searchTerm = '';
  const findById = id => items.find(item => (item.id === id));


  
  
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById
  };
}() );




