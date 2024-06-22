let bagitems = [];

onload();

function onload() {
    let bagit = localStorage.getItem('bagitem');
    bagitems = bagit ? JSON.parse(bagit) : [];
    disonpage();
displayBag();
}

function addtobag(item) {
  bagitems.push(item);
  localStorage.setItem('bagItems', JSON.stringify(bagitems));
  displayBag();
}


function displayBag() {
    let bagItemCountElement = document.querySelector('.bag-item-count');
    if (bagitems.length > 0) {
        bagItemCountElement.style.visibility = 'visible'
        bagItemCountElement.innerText = bagitems.length;        
    } else {
        bagItemCountElement.style.visibility = 'hidden';
    }
}


function disonpage() {
    let itemss = document.querySelector('.items-container');

    if (itemss === undefined) {
        return;
    }

let innerHTMl = '';
item.forEach(item => {
    innerHTMl += `
    <div class="item-container">
        <img class="prodc" src="${item.item_image}" alt="item1">
        <div class="rating"> 
            ${item.rating.stars}🌟 | ${item.rating.noOfReviews}
        </div>
        <div class="company-name">
            ${item.company_name}
        </div>
        <div class="item-name"> ${item.item_name}</div>
        <div class="price">
            <span class="current-price"> ${item.current_price} </span>
            <span class="original-price"> ${item.original_price} </span>
            <span class="discount-percentage"> ${item.discount_percentage} </span>
        </div>
        <button class="btn-add-bag" onclick ="addtobag(${item.rating.noOfReviews})"> Add to Bag</button>
    </div>`;
});

itemss.innerHTML = innerHTMl;

}

