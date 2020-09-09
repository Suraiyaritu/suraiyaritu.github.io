const toggleBtn = document.querySelector('.toggle');
const toggleCross = document.querySelector('.toggle-cross');
const nav = document.querySelector('nav');



toggleBtn.addEventListener('click', function () {
    nav.classList.add('nav-show');
    toggleBtn.classList.add('toggle-clear')
});
toggleCross.addEventListener('click', function () {
    nav.classList.remove('nav-show');
    toggleBtn.classList.remove('toggle-clear')
});





//  <!-----Featured products-------->
const items = [{
        id: 1,
        img: 'img-1',
        name: 'GRAY VASE',
        price: 22.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: '',
        catagory: 'textile',
    },
    {
        id: 2,
        img: 'img-2',
        name: 'PORTABLE',
        price: 14.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: '',
        catagory: 'textile',
    },
    {
        id: 3,
        img: 'img-3',
        name: 'SET OF POTS COLOR',
        price: '',
        pricedel: 21.99,
        pricered: 16.50,
        off: '-25%',
        new: '',
        catagory: 'furniture',
    },
    {
        id: 4,
        img: 'img-4',
        name: 'DOG HOUSE',
        price: 37.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: '',
        catagory: 'furniture',
    },
    {
        id: 5,
        img: 'img-5',
        name: 'WOODEN LOFT TABLE',
        price: 78.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: '',
        catagory: 'decoration',
    },
    {
        id: 6,
        img: 'img-6',
        name: 'A TRAVEL MUG FOR TEA',
        price: 11.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: 'New',
        catagory: 'decoration',
    },
    {
        id: 7,
        img: 'img-7',
        name: 'DECORATIVE PILLOW',
        price: 12.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: '',
        catagory: 'decoration',
    },
    {
        id: 8,
        img: 'img-8',
        name: 'SET OF DISHES',
        price: 18.99,
        pricedel: '',
        pricered: '',
        off: '',
        new: '',
        catagory: 'decoration',
    },

];


const img = document.querySelectorAll('.img');
const filterLinks = document.querySelectorAll('.filter-links');
const products = document.querySelector('.product-items-images');

window.addEventListener('DOMContentLoaded', function () {
    displayMenuItems(items);
});

filterLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        const currentItem = e.currentTarget.dataset.id;
        const menuCategoryItems = items.filter(function (menuItem) {
            if (menuItem.catagory === currentItem) {
                return menuItem;
            }

        });
        // console.log(menuCategoryItems);
        if (currentItem === 'all') {
            displayMenuItems(items)
        } else {
            displayMenuItems(menuCategoryItems);
        }



        if (currentItem) {
            filterLinks.forEach(function (item) {
                item.classList.remove('active')
            });
            e.currentTarget.classList.add('active')
        }

    });
});

function displayMenuItems(menuItems) {
    const display = menuItems.map(function (item) {
        return ` <a class="img ${item.img} scroll-links" href="#">
                    <div class="off">
                        <h5>${item.off}</h5>
                    </div>
                    <div class="new">
                        <h5>${item.new}</h5>
                    </div>
    <i class="far fa-heart"> </i>
    <div class="bottom-content">
        <h4>${item.name}<br>
            <small>$ ${item.price}</small>
            <small><del> ${item.pricedel}</del></small>
            <small style="color:rgb(218, 7, 7)"> 
             ${item.pricered}</small>
        </h4>
        <div>
            <i class="far fa-eye"></i>
            <i class="fas fa-lock"></i>
        </div>
    </div>
</a>`;
    });
    displayMenu = display.join("");
    // console.log(displayMenu);
    products.innerHTML = displayMenu;
}






// -----------toggletop-----------
const toggleTop = document.querySelector('.toggle-top');
window.addEventListener('scroll', function () {
    const scrollHeight = window.pageYOffset;
    //  console.log(scrollHeight);

    if (scrollHeight > 500) {
        toggleTop.classList.add('toggle-show');
    } else {
        toggleTop.classList.remove('toggle-show');
    }



});







// -------
const scrollLinks = document.querySelectorAll('.scroll-links');
scrollLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const idname = e.currentTarget.getAttribute('href').slice(1);

        const id = document.getElementById(idname);
       
        if (id) {
            window.scrollTo({
                top: 0,
            })
        }
    });
});