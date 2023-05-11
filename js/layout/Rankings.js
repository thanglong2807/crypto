const rankings=[
    {
        id: 1,
        avatar:'',
        name:'Marcus Saris',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 2,
        avatar:'',
        name:'Ruben Carder',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 3,
        avatar:'',
        name:'Alfredo Septimus',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 4,
        avatar:'',
        name:'Davis Franci',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 5,
        avatar:'',
        name:'Livia Rosser',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 6,
        avatar:'',
        name:'Kianna Donin',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 7,
        avatar:'',
        name:'Phillip Lipshutz',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 8,
        avatar:'',
        name:'Maria Rosser',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 9,
        avatar:'',
        name:'Kianna Stanton',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 10,
        avatar:'',
        name:'Angel Lubin',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 11,
        avatar:'',
        name:'Allison Torff',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 12,
        avatar:'',
        name:'Davis Workman',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 13,
        avatar:'',
        name:'Lindsey Lipshutz',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 14,
        avatar:'',
        name:'Randy Carder',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 15,
        avatar:'',
        name:'Lydia Culhane',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 16,
        avatar:'',
        name:'Rayna Bator',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 17,
        avatar:'',
        name:'Jocelyn Westervelt',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 18,
        avatar:'',
        name:'Marilyn Torff',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 19,
        avatar:'',
        name:'Skylar Levin',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    },
    {
        id: 20,
        avatar:'',
        name:'Terry Dorwart',
        change:'+1.41%',
        sold:'602',
        volume:'12.4 ETH',
    }
];
const newRankings= rankings.map((item,index)=>{
    return `  <a href="ArtistPage.html" class="top_creators-table top_creators-table-body">
    <h3 class="top_creators-table-item creacted_index i_1">${index +1}</h3>
    <h3 class="top_creators-table-item creacted_info i_2">
        <img loading="lazy" class="creacted_info-avatar" src="./images/img/Marketplace/icon/7.svg" alt="">
        <span class="creacted_info-name">${item.name}</span>
    </h3>
    <h3 class="top_creators-table-item created_change i_3">${item.change}</h3>
    <h3 class="top_creators-table-item created_sold i_4">${item.sold}</h3>
    <h3 class="top_creators-table-item created_sold i_5">${item.volume}</h3>
</a>`
})

$('.top_creators-table-item-list').html(newRankings)