/*------------------------------------------------------------------------ tableau des elements---------------------------------------------------------------------*/
const table=[
  ['assets/img/burger1.png','Crispy chicken',' tender yet crispy chicken, fresh white cabbage salad, cheddar cheese, fried onions, and an unbelievably good honey-mustard sauce.','14,90€','5/5','chicken'],
  ['assets/img/burger2.png','Royal Cheese','The two slices of oozy cheddar, the 100% beef patty, and the sesame offer you a flavourful, tasty recipe','13,90€','4.6/5','cheese'],
  ['assets/img/burger3.png','Royal Crispy Bacon','Give in to the temptation of the Royal Crispy Bacon with its crispy bacon, 100% beef patty, melted cheddar, and special bacon sauce, served on a soft sesame-seed bun.','12,90€','4.5/5','beef'],
  ['assets/img/burger4.png','Whopper Meal','A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.','11,90€','5/5','beef'],
  ['assets/img/burger5.png','double cheese burger','2 100% beef patties, 2 slices of melted cheddar, 2 slices of pickle, 2 sauces, ketchup, and mustard','15,90€','4.7/5','cheese'],
  ['assets/img/burger6.png','Vegan Royale','A crispy vegan patty topped with iceberg lettuce, vegan mayo and crowned with a toasted sesame seed bun.','12,90€','4.7/5','vegan'],
  ['assets/img/burger7.png','West Coast','Angus steak, caramelized onions, fried onions, pickles, salad, double cheddar, West Coast sauce.','16,90€','5/5','beef'],
  ['assets/img/burger8.png','Chicken Royale','Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayo and crowned with a toasted sesame seed bun.','14,90€','4.3/5','chicken'],
  ['assets/img/burger9.png','Veggie Deluxe','The Veggie Deluxe: a breaded veggie fillet based on skimmed milk, with tasty veggies like cucumber, onion, tomatoes, and lettuce. A perfect match for the coming hot weather.','12,90€','4.5/5','vegan'],
  ['assets/img/frite.png','Fries','Enjoy the crispy, delicious fries as part of a bite.','4,50€','4.7/5','fries'],
]

// tableau qui vas contenir la list des elements quón vas acheter.
let tot=[];
// le dom qui vas 
for(i=0;i<table.length;i++){

  const div =document.createElement('div');
  document.querySelector('main').appendChild(div);
  div.className='carte';
  

  const image =document.createElement('img');
  image.setAttribute('src',table[i][0]);
  image.setAttribute('alt','image de burger')
  image.style.width='150px';
  div.appendChild(image);

  let titre=document.createElement('h2');
  titre.textContent = table[i][1];
  div.appendChild(titre);

  let description= document.createElement('p');
  description.textContent=table[i][2];
  description.className='description';
  div.appendChild(description);

  let price= document.createElement('p');
  price.textContent=table[i][3];
  price.className='price';
  div.appendChild(price);

  let note= document.createElement('p');
  note.textContent=table[i][4];
  note.className='note';
  div.appendChild(note);

  let categorie= document.createElement('button')
  categorie.textContent=table[i][5];
  categorie.className='categorie';
  div.appendChild(categorie);

  let add= document.createElement('button');
  add.textContent='add';
  add.className='add';
  div.appendChild(add);

//------------------------------------------------------------------------ table cart.

  //met le nom et le price apres un add dans un tableau.
  function addOrder(index) {
      return function() {
          const order = {
              titre: table[index][1],
              price: table[index][3],
          };
          tot.push(order);
      };
  }

  div.addEventListener('click', addOrder(i));
}
//'espace'permet d'afficher le contenus du tableau apres chaque add.
document.addEventListener('keyup', event => {
  if (event.code === 'Space') {
      console.log(tot);
  }
})

//----------------------------------------------------------------------------filtre

document.addEventListener('DOMContentLoaded', function() {

  const allCheckbox = document.getElementById('all');
  allCheckbox.checked = true;
  filterCards();

});

const checkboxes = document.querySelectorAll('.category-checkbox');

//------ Event on checkbox.

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
    uncheckFilter(checkbox);
  })
})

checkboxes.forEach(checkbox => {
  checkbox.addEventListener('change', function() {
  filterCards();
  });
});

//------ Filter the cards


function filterCards() {
  const checkedCategories = Array.from(document.querySelectorAll('.category-checkbox:checked')).map(checkbox => checkbox.id);
  const cards = document.querySelectorAll('.carte');
  cards.forEach(card => {
    const category = card.querySelector('.categorie').textContent;
    if (checkedCategories.includes(category) || checkedCategories.includes('all')) {
      card.style.display = 'flex';
    } else {
      card.style.display = 'none';
    }
  });
}

//------ Uncheck specific filters if ALL is checked and vice-versa.

function uncheckFilter(checkbox) {
  if (checkbox.id==='all' && checkbox.checked) {

    checkboxes.forEach (box => {

      if (box !== checkbox) {
        box.checked = false;
      }

    });
  } else if (checkbox.id!== 'all' && checkbox.checked) {
      const uncheck = document.getElementById('all');
      uncheck.checked = false;
  }
}



//---------------------------------------------------------------------------------- fct shopping cart

document.addEventListener("DOMContentLoaded", function () {
  const cartItemsModal = document.getElementById("cartItemsModal");
  const totalAmountModal = document.getElementById("totalAmountModal");
  const openCartModalButton = document.getElementById("openCartModal");
  const modal = document.getElementById("cartModal");
  const closeButton = modal.querySelector(".close");
  const checkoutButton = modal.querySelector("#checkoutButton");
  //   const cbButton = document.getElementById("#cb");

  // Function to display cart items in the modal
  function displayCartInModal() {
    cartItemsModal.innerHTML = "";
    tot.forEach(function (item) {
      const li = document.createElement("li");
      li.textContent = item.titre + " -> " + item.price;
      cartItemsModal.appendChild(li);
    });

    calculateTotalAmount();
    modal.style.display = "block"; // Display the modal
  }

  // Function to calculate and display total amount
  function calculateTotalAmount() {
    let total = tot.reduce((acc, item) => acc + parseFloat(item.price.replace(/,/g, ".")), 0);
    totalAmountModal.textContent = "Total: " + total.toFixed(2) + "€";
  }

  // Event listener for opening the cart modal
  openCartModalButton.addEventListener("click", displayCartInModal);
  //   modal.style.display = "block";
  //   cbButton.addEventListener("click", displayCartInModal);
  // Event listener for closing the modal
  closeButton.addEventListener("click", function () {
    modal.style.display = "none"; // Hide the modal
  });

  // Event listener for checkout button
  checkoutButton.addEventListener("click", function () {
    if (cart.length > 0) {
      alert("Thank you for your order!");
      tot = []; // Clear the cart
      modal.style.display = "none"; // Hide the modal
      modal.classList.remove("modal-fade-in");
    } else {
      alert("Your cart is empty.");
    }
  });

  // Close the modal when clicking outside of it
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
      modal.classList.remove("modal-fade-in");
    }
  });

  // Mock data and add to cart functionality (for testing)
  const addToCartButtons = document.querySelectorAll(".addToCartButton");
  addToCartButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      const itemDescription = button.getAttribute("data-description");
      const itemPrice = parseFloat(button.getAttribute("data-price"));

      const cartItem = {
        description: itemDescription,
        price: itemPrice,
      };

      tot.push(cartItem);
    });
  });
});

//-------------------------------------------------------------------------------------darkmode

let darkMode = localStorage.getItem('darkMode');

const darkModeToggle = document.body.querySelector('#dark-mode-toggle');

const activeDarkMode = ()=>{
  document.body.classList.add('darkmode');
  localStorage.setItem('darkMode','active');

}

const disableDarkMode = ()=>{
  document.body.classList.remove('darkmode');
  localStorage.setItem('darkMode',null);
}

if(darkMode === "active"){ 
  activeDarkMode();
}

darkModeToggle.addEventListener('click',()=>{
  
  darkMode=localStorage.getItem("darkMode");

  if(darkMode !== 'active'){

    activeDarkMode();
    console.log(darkMode);
  }else {
    disableDarkMode();
    console.log(darkMode);
  }

})
