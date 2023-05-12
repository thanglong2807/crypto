const rankings=[
    {
        id: 1,
        avatar:'NFT_1.svg',
        name:'Marcus Saris',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 2,
        avatar:'NFT_2.svg',
        name:'Ruben Carder',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 3,
        avatar:'NFT_3.svg',
        name:'Alfredo Septimus',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 4,
        avatar:'NFT_4.svg',
        name:'Davis Franci',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 5,
        avatar:'NFT_5.svg',
        name:'Livia Rosser',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 6,
        avatar:'NFT_6.svg',
        name:'Kianna Donin',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 7,
        avatar:'NFT_7.svg',
        name:'Phillip Lipshutz',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 8,
        avatar:'NFT_8.svg',
        name:'Maria Rosser',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 9,
        avatar:'NFT_9.svg',
        name:'Kianna Stanton',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 10,
        avatar:'NFT_10.svg',
        name:'Angel Lubin',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 11,
        avatar:'NFT_11.svg',
        name:'Allison Torff',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 12,
        avatar:'NFT_12.svg',
        name:'Davis Workman',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 13,
        avatar:'NFT_13.svg ',
        name:'Lindsey Lipshutz',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 14,
        avatar:'NFT_14.svg',
        name:'Randy Carder',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 15,
        avatar:'NFT_15.svg',
        name:'Lydia Culhane',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 16,
        avatar:'NFT_16.svg',
        name:'Rayna Bator',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 17,
        avatar:'NFT_17.svg',
        name:'Jocelyn Westervelt',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 18,
        avatar:'NFT_18.svg',
        name:'Marilyn Torff',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 19,
        avatar:'NFT_19.svg',
        name:'Skylar Levin',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 20,
        avatar:'NFT_8.svg',
        name:'Terry Dorwart',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    }
];

const myMap = (arr)=>{
    const newRankings= arr.map((item,index)=>{
        return `  <a href="ArtistPage.html" class="top_creators-table top_creators-table-body">
        <h3 class="top_creators-table-item  creacted_index i_1">${index +1}</h3>
        <h3 class="top_creators-table-item creacted_info i_2">
            <img   class="creacted_info-avatar" src="./images/icon/${item.avatar} " alt="">
            <span class="creacted_info-name">${item.name}</span>
        </h3>
        <h3 class="top_creators-table-item created_change i_3">${item.change}</h3>
        <h3 class="top_creators-table-item created_sold i_4">${item.sold}</h3>
        <h3 class="top_creators-table-item created_sold i_5">${item.volume}</h3>
    </a>`
    })
    
   return  $('.top_creators-table-item-list').html(newRankings)
}

myMap(rankings) 

$('.creacted-handle-btn').on('click', function(e) {
    myMap(rankings.reverse())
})
