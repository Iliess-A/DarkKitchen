const table=[
    ['assets/img/hamburger1.png','Crispy chicken',' tender yet crispy chicken, fresh white cabbage salad, cheddar cheese, fried onions, and an unbelievably good honey-mustard sauce.','14,90€','5/5','chicken'],
    ['assets/img/hamburger2.png','Royal Cheese','The two slices of oozy cheddar, the 100% beef patty, and the sesame offer you a flavourful, tasty recipe','13,90€','4.6/5','cheese'],
    ['assets/img/hamburger3.png','Royal Crispy Bacon','Give in to the temptation of the Royal Crispy Bacon with its crispy bacon, 100% beef patty, melted cheddar, and special bacon sauce, served on a soft sesame-seed bun.','12,90€','4.5/5','beef'],
    ['assets/img/hamburger4.png','Whopper Meal','A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.','11,90€','5/5','beef'],
    ['assets/img/hamburger5.png','double cheese burger','2 100% beef patties, 2 slices of melted cheddar, 2 slices of pickle, 2 sauces, ketchup, and mustard','15,90€','4.7/5','cheese'],
    ['assets/img/hamburger6.png','Vegan Royale','A crispy vegan patty topped with iceberg lettuce, vegan mayo and crowned with a toasted sesame seed bun.','12,90€','4.7/5','vegan'],
    ['assets/img/hamburger7.png','West Coast','Angus steak, caramelized onions, fried onions, pickles, salad, double cheddar, West Coast sauce.','16,90€','5/5','beef'],
    ['assets/img/hamburger8.png','Chicken Royale','Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayo and crowned with a toasted sesame seed bun.','14,90€','4.3/5','chicken'],
    ['assets/img/hamburger9.png','Veggie Deluxe','The Veggie Deluxe: a breaded veggie fillet based on skimmed milk, with tasty veggies like cucumber, onion, tomatoes, and lettuce. A perfect match for the coming hot weather.','12,90€','4.5/5','vegan'],
    ['assets/img/frites.png','Fries','Enjoy the crispy, delicious fries as part of a bite.','4,50€','4.7/5','fries'],
]

let tot=[];

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


document.addEventListener('keyup', event => {
    if (event.code === 'Space') {
        console.log(tot);
    }
})

//----------------------------------------- shopping cart

document.addEventListener("DOMContentLoaded", function () {
    const cartItemsModal = document.getElementById("cartItemsModal");
    const totalAmountModal = document.getElementById("totalAmountModal");
    const openCartModalButton = document.getElementById("openCartModal");
    const modal = document.getElementById("cartModal");
    const closeButton = modal.querySelector(".close");
    const checkoutButton = modal.querySelector("#checkoutButton");
    //   const cbButton = document.getElementById("#cb");
  
    let cart = [];
  
    // Function to display cart items in the modal
    function displayCartInModal() {
      cartItemsModal.innerHTML = "";
      cart.forEach(function (item) {
        const li = document.createElement("li");
        li.textContent = item.description;
        cartItemsModal.appendChild(li);
      });
  
      calculateTotalAmount();
      modal.style.display = "block"; // Display the modal
    }
  
    // Function to calculate and display total amount
    function calculateTotalAmount() {
      let total = cart.reduce((acc, item) => acc + item.price, 0);
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
        cart = []; // Clear the cart
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
    const addToCartButtons = document.querySelectorAll(".addToCartBtn");
    addToCartButtons.forEach(function (button) {
      button.addEventListener("click", function () {
        const itemDescription = button.getAttribute("data-description");
        const itemPrice = parseFloat(button.getAttribute("data-price"));
  
        const cartItem = {
          description: itemDescription,
          price: itemPrice,
        };
  
        cart.push(cartItem);
      });
    });
  });
  
  //------------------------------------------------------darkmode
  
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
  
