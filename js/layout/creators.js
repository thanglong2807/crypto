const creators = [
    {
      id: 1,
      img: 'Asset 12 2.png',
      name: 'Keepitreal',
      price: '34.53 ETH'
    },
    {
      id: 2,
      img: 'Asset 12 3.png',
      name: 'DigiLab',
      price: '34.53 ETH'
    },
    {
      id: 3,
      img: 'Asset 12 4.png',
      name: 'GravityOne',
      price: '34.53 ETH'
    },
    {
      id: 4,
      img: 'Asset 12 5.png',
      name: 'Juanie',
      price: '34.53 ETH'
    },
    {
      id: 5,
      img: 'Asset 12 6.png',
      name: 'BlueWhale',
      price: '34.53 ETH'
    },
    {
      id: 6,
      img: 'Asset 12 7.png',
      name: 'mr fox',
      price: '34.53 ETH'
    },
    {
      id: 7,
      img: 'Asset 12 8.png',
      name: 'Shroomie',
      price: '34.53 ETH'
    },
    {
      id: 8,
      img: 'Asset 12 9.png',
      name: 'robotica',
      price: '34.53 ETH'
    },
    {
      id: 9,
      img: 'Asset 12 10.png',
      name: 'RustyRobot',
      price: '34.53 ETH'
    },
    {
      id: 10,
      img: 'Asset 12 11.png',
      name: 'RustyRobot',
      price: '34.53 ETH'
    },
    {
      id: 11,
      img: 'Asset 12 12.png',
      name: 'Dotgu',
      price: '34.53 ETH'
    },
    {
      id: 12,
      img: 'Asset 12 13.png',
      name: 'Ghiblier',
      price: '34.53 ETH'
    },
  ];
  
 const checkCreators =( )=>{
    const screenWidth = window.innerWidth;
    const creatorsToDisplay = screenWidth >= 1200 ? creators : creators.slice(0, screenWidth >= 834 ? 6 : 5);
    
    const newCreators = creatorsToDisplay.map((item) => {
      return `<div class="creators__link--width">
       <a class="creators__link" href='./ArtistPage.html'>
          <span class="creators__link-id">${item.id}</span>
          <img class="creators__link-avatar" src="images/img/${item.img}" alt="">
          <div class="creators__link-info">
            <h3 class="creators__link-name">${item.name}</h3>
            <p class="creators__link-price">
              Total Sales:
              <span>${item.price}</span>
            </p>
          </div>
       </a>
      </div>`;
    });
   return $('.creators__list').html(newCreators.join(''))
 }
 
  
checkCreators()