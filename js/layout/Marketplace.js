const marketplace = [
    {
        image: '1.png',
        name: 'Magic Mushroom 0325',
        nameUser: 'Shroomie',
        avataUser: '1.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '2.png',
        name: 'Happy Robot 032',
        nameUser: 'BeKind2Robots',
        avataUser: '2.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '3.png',
        name: 'Happy Robot 024',
        nameUser: 'BeKind2Robots',
        avataUser: '2.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '4.png',
        name: 'Designer Bear',
        nameUser: 'Mr Fox',
        avataUser: '4.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '5.png',
        name: 'Colorful Dog 0356',
        nameUser: 'Keepitreal',
        avataUser: '5.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '6.png',
        name: 'Dancing Robot 0312',
        nameUser: 'Robotica',
        avataUser: '6.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '7.png',
        name: 'Cherry Blossom Girl 035',
        nameUser: 'MoonDancer',
        avataUser: '7.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '8.png',
        name: 'Space Travel',
        nameUser: 'NebulaKid',
        avataUser: '8.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '9.png',
        name: 'Sunset Dimension',
        nameUser: 'Animakid',
        avataUser: '9.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '10.png',
        name: 'Desert Walk',
        nameUser: 'Catch 22',
        avataUser: '10.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '11.png',
        name: 'IceCream Ape 0324',
        nameUser: 'Ice Ape Club',
        avataUser: '11.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '12.png',
        name: 'Colorful Dog 0344',
        nameUser: 'PuppyPower',
        avataUser: '12.svg',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },

]

const myMap = (arr) => {
    
    return  $('.discovermore__list').html(
        arr.map(item => {
            return `
            <div class="discovermore__item">
            <a href='' style='display: flex;
            flex-direction: column;'>
                <img   class="discovermore__item-img" src="images/img/Marketplace/img/${item.image}"  alt=">${item.name}">
                <div class="discovermore__item-botton">
                    <h3 class="discovermore__item-name--img">${item.name}</h3>
                    <div class="discovermore__item-info">
                        <img   src="images/img/Marketplace/icon/${item.avataUser}" alt="${item.nameUser}"  
                            class="discovermore__item-avatar">
                        <h5 class="discovermore__item-name">${item.nameUser}</h5>
                    </div>
                    <div class="discovermore__item-price">
                        <div class="discovermore--price-item">
                            <span class="discovermore--price-name">Price</span>
                            <h6 class="discovermore--price">${item.price}</h6>
                        </div>
                        <div class="discovermore--price-item">
                            <span class="discovermore--price-name">Highest Bid</span>
                            <h6 class="discovermore--price">${item.HighestBid}</h6>
                        </div>
                    </div>
                </div>
            </a>
        </div>
        `
        })
    )
}

myMap(marketplace)

///////////////////////////////////////////////////////////
$('.browse_marketplace-input').on('keyup', function (e) {
    setTimeout(() => {
        const value = $('.browse_marketplace-input').val().toLocaleLowerCase();
        const total = marketplace.filter(item => item.name.toLocaleLowerCase().includes(value))
       myMap(total)
    
    }, 1000);
    e.preventDefault()
})
/////////////////////////////////////////////////////////////////////////////////////
$('.creacted-handle-btn').on('click',function (e) {
    myMap(marketplace.reverse())
})