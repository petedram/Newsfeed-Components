/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

/* 

  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  The function takes an array as its only argument.

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>

  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.

  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).

  Step 5: return the menu component.

  Step 6: add the menu component to the DOM.
  
*/
function createMenu(menuItems) {
  // define new elements
  const menu = document.createElement('div');
  const menuList = document.createElement('ul');

  // Setup structure of elements
  menu.appendChild(menuList)
  
  // set class names
  menu.classList.add('menu')
 
  //set text content by itterating over array

  menuItems.forEach(item => {
    console.log('creating item');
    let menuItem = document.createElement('li');
    menuList.appendChild(menuItem)
    menuItem.textContent = item
  });


  return menu;
}

const menuSelect = document.querySelector('.menu-button');
menuSelect.addEventListener('click', () => {
  TweenMax.to('.menu', 1, {rotation:360,});
  

  console.log('menu-toggle');

  const menudiv = document.querySelector('.menu');
  menudiv.classList.toggle('menu--open');
})

const menu = document.querySelector('.header');
menu.appendChild(createMenu(menuItems));

