const browse =[
    {
        icon: './images/icon/Photo & Icon1.svg',
        name: 'Art',
        img: '../images/img/Photo\ &\ Icon.png'
    },
    {
        icon: './images/icon/Photo & Icon2.svg',
        name: 'Collectibles',
        img: '../images/img/Photo\ &\ Icon2.png'
    },
  
    {
        icon: './images/icon/Photo & Icon3.svg',
        name: 'Music',
        img: '../images/img/Photo\ &\ Icon3.png'
    },
    {
        icon: './images/icon/Photo & Icon4.svg',
        name: 'Photography',
        img: '../images/img/Photo\ &\ Icon4.png'
    },
    {
        icon: './images/icon/Photo & Icon5.svg',
        name: 'Video',
        img: '../images/img/Photo\ &\ Icon5.png'
    },
    {
        icon: './images/icon/Photo & Icon6.svg',
        name: 'Utility',
        img: '../images/img/Photo\ &\ Icon6.png'
    },
    {
        icon: './images/icon/Photo & Icon7.svg',
        name: 'Sport',
        img: '../images/img/Photo\ &\ Icon7.png'
    },
    {
        icon: './images/icon/Photo & Icon8.svg',
        name: 'Virtual Worlds',
        img: '../images/img/Photo\ &\ Icon8.png'
    },
]
const newBrwse = browse.map((item)=>{
    return `
    <div class="browse_item">
    <div class="browse_item-bg" style=" background-image: url('${item.img}')">
        <img loading="lazy" class="browse_item-icon" src="${item.icon}" alt="">
    </div>
    <span class="browse_name">${item.name}</span>
</div>
    `
})
$('.browse_list').html(newBrwse)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

