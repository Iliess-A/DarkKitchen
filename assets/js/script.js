const table=[
    ['assets/img/hamburger.jpg','Hamburger','buff,salade,ognion,cheddar,ketchup,mutard,cornichon',14.99,'5/5','carnivore'],
    ['image','nom','ingrediant','price','rating(sur 5)','filter'],
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
}

