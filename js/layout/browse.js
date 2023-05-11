const browse =[
    {
        icon: './images/icon/Photo & Icon1.svg',
        name: 'Art',
        img: '../images/img/PhotoIcon.png'
    },
    {
        icon: './images/icon/Photo & Icon2.svg',
        name: 'Collectibles',
        img: '../images/img/PhotoIcon2.png'
    },
  
    {
        icon: './images/icon/Photo & Icon3.svg',
        name: 'Music',
        img: '../images/img/PhotoIcon3.png'
    },
    {
        icon: './images/icon/Photo & Icon4.svg',
        name: 'Photography',
        img: '../images/img/PhotoIcon4.png'
    },
    {
        icon: './images/icon/Photo & Icon5.svg',
        name: 'Video',
        img: '../images/img/PhotoIcon5.png'
    },
    {
        icon: './images/icon/Photo & Icon6.svg',
        name: 'Utility',
        img: '../images/img/PhotoIcon6.png'
    },
    {
        icon: './images/icon/Photo & Icon7.svg',
        name: 'Sport',
        img: '../images/img/PhotoIcon7.png'
    },
    {
        icon: './images/icon/Photo & Icon8.svg',
        name: 'Virtual Worlds',
        img: '../images/img/PhotoIcon8.png'
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

