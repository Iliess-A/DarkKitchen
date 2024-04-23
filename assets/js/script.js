const table=[
    ['assets/img/hamburger1.jpg','Crispy chicken',' tender yet crispy chicken, fresh white cabbage salad, cheddar cheese, fried onions, and an unbelievably good honey-mustard sauce.','14,90€','5/5','chicken'],
    ['assets/img/hamburger2.jpg','Royal Cheese','The two slices of oozy cheddar, the 100% beef patty, and the sesame offer you a flavourful, tasty recipe','13,90€','4.6/5','cheese'],
    ['assets/img/hamburger3.jpg','Royal Crispy Bacon','Give in to the temptation of the Royal Crispy Bacon with its crispy bacon, 100% beef patty, melted cheddar, and special bacon sauce, served on a soft sesame-seed bun.','12,90€','4.5/5','beef'],
    ['assets/img/hamburger4.jpg','Whopper Meal','A flame-grilled beef patty, topped with tomatoes, fresh cut lettuce, mayo, pickles, a swirl of ketchup, and sliced onions on a soft sesame seed bun.','11,90€','5/5','beef'],
    ['assets/img/hamburger5.jpg','double cheese burger','2 100% beef patties, 2 slices of melted cheddar, 2 slices of pickle, 2 sauces, ketchup, and mustard','15,90€','4.7/5','cheese'],
    ['assets/img/hamburger6.jpg','Vegan Royale','A crispy vegan patty topped with iceberg lettuce, vegan mayo and crowned with a toasted sesame seed bun.','12,90€','4.7/5','vegan'],
    ['assets/img/hamburger7.jpg','West Coast','Angus steak, caramelized onions, fried onions, pickles, salad, double cheddar, West Coast sauce.','16,90€','5/5','beef'],
    ['assets/img/hamburger8.jpg','Chicken Royale','Tasty chicken wrapped in a special crisp coating, topped with iceberg lettuce, creamy mayo and crowned with a toasted sesame seed bun.','14,90€','4.3/5','chicken'],
    ['assets/img/hamburger9.jpg','Veggie Deluxe','The Veggie Deluxe: a breaded veggie fillet based on skimmed milk, with tasty veggies like cucumber, onion, tomatoes, and lettuce. A perfect match for the coming hot weather.','12,90€','4.5/5','vegan'],
    ['assets/img/frites.jpg','Fries','Enjoy the crispy, delicious fries as part of a bite.','4,50€','4.7/5','fries'],
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