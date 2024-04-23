const table=[
    ['assets/img/hamburger.jpg','Hamburger','buff,salade,ognion,cheddar,ketchup,mutard,cornichon','14,99€','5/5','carnivore'],
    ['image','nom','ingrediant','price','rating(sur 5)','filter'],
]

for(i=0;i<table.length;i++){

    const div =document.createElement('div');
    document.querySelector('main').appendChild(div);
    div.className='carte';
    

    const image =document.createElement('img');
    image.setAttribute('src',table[i][0]);
    image.setAttribute('alt','image de burger')
    image.style.width='100px';
    div.appendChild(image);

    let titre=document.createElement('h2');
    titre.textContent = table[i][1];
    div.appendChild(titre);

    let description= document.createElement('p');
    description.textContent=table[i][2];
    div.appendChild(description);

    let price= document.createElement('p');
    price.textContent=table[i][3];
    div.appendChild(price);

    let note= document.createElement('p');
    note.textContent=table[i][4];
    div.appendChild(note);

    let categorie= document.createElement('button')
    categorie.textContent=table[i][5];
    div.appendChild(categorie);
}

