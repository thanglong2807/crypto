const artistPage = [
    {
        image: 'Image_discover1.png',
        name: 'Distant Galaxy',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'PhotoIcon5.png',
        name: 'Life On Edena',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image Placeholder (2).png',
        name: 'AstroFiction',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image Placeholder (3).png',
        name: 'CryptoCity',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image.png',
        name: 'ColorfulDog 0524',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image Placeholder (4).png',
        name: 'Space Tales',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image Placeholder (5).png',
        name: 'Cherry Blossom Girl 037',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image (1).png',
        name: 'Dancing Robots 0987',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: 'Image (2).png',
        name: 'IceCream Ape ',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },

]
const myMap = (arr)=>{
    const newArtistPage = arr.map(item => {
        return `
        <div class="discovermore__item">
        <a href='' style='display: flex;
        flex-direction: column;'>
            <img   class="discovermore__item-img" src="images/img/${item.image}" alt="">
            <div class="discovermore__item-botton">
                <h3 class="discovermore__item-name--img">${item.name}</h3>
                <div class="discovermore__item-info">
                    <img   src="images/img/Avatar_discover1.png" alt=""
                        class="discovermore__item-avatar">
                    <h5 class="discovermore__item-name">Animakid</h5>
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
  return  $('.discovermore__list').html(newArtistPage)

}

myMap(artistPage)
$('.creacted-handle-btn').on('click', function(e) {
    myMap(artistPage.reverse())
})