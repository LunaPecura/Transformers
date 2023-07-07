
// CONTENT -- IMAGES AND TEXT

// MEN'S
const headImageMens = "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const productImageSneakers = "https://images.unsplash.com/photo-1527010154944-f2241763d806?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80";
const productImageBoots = "https://images.unsplash.com/photo-1638247025967-b4e38f787b76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80";
const productImageFlannels = "https://images.unsplash.com/photo-1638718297700-e828368a54e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
const productImageScarves = "https://images.unsplash.com/photo-1520903920243-00d872a2d1c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
const productImageHoodies = "https://images.unsplash.com/photo-1509942774463-acf339cf87d5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
const productImageHats = "https://images.unsplash.com/photo-1521119989659-a83eee488004?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=723&q=80";
const lowImageMens = "https://images.unsplash.com/photo-1516826957135-700dedea698c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80";
const textDescriptionMens = "Update your everyday wardrobe with our collection of mens pants. Discover tailored suit pants for work or special occasions, as well as comfier sweatpants and joggers for downtime. Mix up your weekend look and swap the jeans for a pair of cargo pants or chinos. Browse a range of colors, from neutral blacks and grays to brighter shades and prints. Find everything from soft breathable cotton to functional track pants and luxe velvet dress pants."; 

// WOMEN'S
const headImageWomens = "";
const productImage1 = "";
const productImage2 = "";
const productImage3 = "";
const productImage4 = "";
const productImage5 = "";
const productImage6 = "";
const lowImageWomens = "";
const textDescriptionWomens = "";


// DATA STRUCTURE

let majorContainer = {
    mens: {
        headImage: headImageMens,
        optionTags: ["Boots", "Flannels", "Rugged Wear", "Shaving Cream"],
        productImages: [
            {name: 'Sneakers', pic: productImageSneakers},
            {name: 'Boots', pic: productImageBoots},
            {name: 'Flannels', pic: productImageFlannels},
            {name: 'Scarves', pic: productImageScarves},
            {name: 'Hoodies', pic: productImageHoodies},
            {name: 'Hats', pic: productImageHats}],
        textDescription: textDescriptionMens,
        lowImage: lowImageMens
    },
    
    womens: {
        headImage: headImageWomens,
        optionTags: ["1", "2", "3", "4"],
        productImages: [
            {name: '', pic: productImage1},
            {name: '', pic: productImage2},
            {name: '', pic: productImage3},
            {name: '', pic: productImage4},
            {name: '', pic: productImage5},
            {name: '', pic: productImage6}],
        textDescription: textDescriptionWomens,
        lowImage: lowImageWomens
    },
    kids: {}
}


const switchToMens = () => {
    changeTopPic()
    showOptions()
    showProducts()
}

// replace image in main img container -- a little hack-ish
const changeTopPic = () => {
    const mainImageDiv = document.querySelector(".mainImg");
    let newimageTag = document.createElement("img");
    newimageTag.setAttribute("class", "main");
    newimageTag.setAttribute("src", headImageMens);
    mainImageDiv.innerHTML = "";
    mainImageDiv.appendChild(newimageTag);
}

const showOptions = () => {
    const optionsContainer = document.querySelector(".optionsContainer");
    const productContainer = document.querySelector(".productContainer");
    optionsContainer.classList.remove("hidden");
    productContainer.classList.remove("hidden");
    majorContainer.mens.optionTags.forEach((tagname) => {
        let optionDiv = document.createElement("div");
        optionDiv.innerHTML = tagname;
        optionsContainer.append(optionDiv);
    })
}

const showProducts = () => {
    const productContainer = document.querySelector(".productContainer");
    majorContainer.mens.productImages.forEach((obj) => {
        let imgTag  = document.createElement('img')
        imgTag.setAttribute('src', obj.pic)
        imgTag.setAttribute('class','product')
        productContainer.append(imgTag)
    })
}



/* let miniOp = document.querySelectorAll('.choice')
let pic = document.querySelector('.polaroid')
let textBox = document.querySelector('.textContainer')
 */
