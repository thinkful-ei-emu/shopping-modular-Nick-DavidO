'use strict';
/* global store, cuid, Item */

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
  const addItem = name => {
    try {
      Item.validateName(name);
      items.push(Item.create(name));

    }
    catch(e){
      console.log(`cannot add item: ${e}`);
    }
  };
  const findAndToggleChecked = id => {
    const result = store.findById(id);
    result.checked = !result.checked;
  };
  const findAndUpdateName = (id, newName) => {
    try {
      Item.validateName(newName);
      const result = findById(id);
      result.name = newName;
    }
    catch(e){
      console.log(`cannot add item: ${e}`);
    }
  };
  const findAndDelete = id => {
    // items.filter(items => items.id !== id);
    const index = items.findIndex(item => item.id === id);
    items.splice(index, 1);
  };

  const toggleCheckedFilter = () => store.hideCheckedItems = !store.hideCheckedItems;

  const setSearchTerm = val => store.searchTerm = val;
  
  return {
    items,
    hideCheckedItems,
    searchTerm,
    findById,
    addItem,
    findAndToggleChecked, 
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter,
    setSearchTerm
  };
}() );




