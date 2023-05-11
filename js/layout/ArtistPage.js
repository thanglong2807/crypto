const artistPage = [
    {
        image: '',
        name: 'Distant Galaxy',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'Life On Edena',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'AstroFiction',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'CryptoCity',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'ColorfulDog 0524',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'Space Tales',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'Cherry Blossom Girl 037',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'Dancing Robots 0987',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },
    {
        image: '',
        name: 'IceCream Ape ',
        price: '1.63 ETH',
        HighestBid: '0.33 wETH',
    },

]

const newArtistPage = artistPage.map(item => {
    return `
    <div class="discovermore__item">
    <a href='' style='display: flex;
    flex-direction: column;'>
        <img loading="lazy" class="discovermore__item-img" src="images/img/Image_discover1.png" alt="">
        <div class="discovermore__item-botton">
            <h3 class="discovermore__item-name--img">${item.name}</h3>
            <div class="discovermore__item-info">
                <img loading="lazy" src="images/img/Avatar_discover1.png" alt=""
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
$('.discovermore__list').html(newArtistPage)

