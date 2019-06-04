window.onload = function () {
    const wines = [
        { src: 'img/wine1.jpg', alt: 'wine1', p: 'Mayacamas vineyards cabernet sauvignon 1999', cl: 'wine1' },
        { src: 'img/wine2.jpg', alt: 'wine2', p: 'Hermann J. wiemer hjw vineyard riesling 2016', cl: 'wine2' },
        { src: 'img/wine3.jpg', alt: 'wine3', p: 'Vina vik millanue 2012', cl: 'wine3' },
        { src: 'img/wine4.jpg', alt: 'wine4', p: 'Kir-Yianni estate ramnista 2013', cl: 'wine4' },
        { src: 'img/wine5.jpg', alt: 'wine5', p: 'Tablas creek vineyard esprit de tablas blanc 2015', cl: 'wine5' },
        { src: 'img/wine6.jpg', alt: 'wine6', p: 'Delamotte blanc de blancs brut 2008', cl: 'wine6' },
        { src: 'img/wine7.jpg', alt: 'wine7', p: 'Azienda agricola arianna occhipinti sp68 sicilia rosso igt 2017', cl: 'wine7' },
        { src: 'img/wine8.jpg', alt: 'wine8', p: 'Damilano barolo lecinquevigne 2013', cl: 'wine8' },
        { src: 'img/wine1.jpg', alt: 'wine9', p: 'Mayacamas vineyards cabernet sauvignon 1999', cl: 'wine9' },
        { src: 'img/wine2.jpg', alt: 'wine10', p: 'Hermann J. wiemer hjw vineyard riesling 2016', cl: 'wine10' },
        { src: 'img/wine3.jpg', alt: 'wine11', p: 'Vina vik millanue 2012', cl: 'wine11' },
        { src: 'img/wine4.jpg', alt: 'wine12', p: 'Kir-Yianni estate ramnista 2013', cl: 'wine12' },
        { src: 'img/wine5.jpg', alt: 'wine13', p: 'Tablas creek vineyard esprit de tablas blanc 2015', cl: 'wine13' },
        { src: 'img/wine6.jpg', alt: 'wine14', p: 'Delamotte blanc de blancs brut 2008', cl: 'wine14' },
        { src: 'img/wine7.jpg', alt: 'wine15', p: 'Azienda agricola arianna occhipinti sp68 sicilia rosso igt 2017', cl: 'wine15' },
        { src: 'img/wine8.jpg', alt: 'wine16', p: 'Damilano barolo lecinquevigne 2013', cl: 'wine16' },
        { src: 'img/wine1.jpg', alt: 'wine17', p: 'Mayacamas vineyards cabernet sauvignon 1999', cl: 'wine17' }
    ]
    function createWine(wine) {
        return `
            <div class="wine ${wine.cl}">
                <div class="divBtn"><button class="btn btnRead">READ</button></div>
                <div class="img"><img src="${wine.src}" alt="${wine.alt}"></div>
                <p>${wine.p}</p>
            </div>
            `
    }
    let wine_menu = document.querySelector('.wine-menu');
    const templatesWine = wines.map(wine => createWine(wine));
    const htmlWine = templatesWine.join(' ');
    wine_menu.innerHTML = htmlWine;
    
    const informWineArray = [
        { src: 'img/wine1.jpg', alt: 'wine1', h3: 'Mayacamas vineyards cabernet sauvignon 1999', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine2.jpg', alt: 'wine2', h3: 'Hermann J. wiemer hjw vineyard riesling 2016', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine3.jpg', alt: 'wine3', h3: 'Vina vik millanue 2012', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine4.jpg', alt: 'wine4', h3: 'Kir-Yianni estate ramnista 2013', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine5.jpg', alt: 'wine5', h3: 'Tablas creek vineyard esprit de tablas blanc 2015', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine6.jpg', alt: 'wine6', h3: 'Delamotte blanc de blancs brut 2008', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine7.jpg', alt: 'wine7', h3: 'Azienda agricola arianna occhipinti sp68 sicilia rosso igt 2017', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine8.jpg', alt: 'wine8', h3: 'Damilano barolo lecinquevigne 2013', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine1.jpg', alt: 'wine1', h3: 'Mayacamas vineyards cabernet sauvignon 1999', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine2.jpg', alt: 'wine2', h3: 'Hermann J. wiemer hjw vineyard riesling 2016', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine3.jpg', alt: 'wine3', h3: 'Vina vik millanue 2012', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine4.jpg', alt: 'wine4', h3: 'Kir-Yianni estate ramnista 2013', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine5.jpg', alt: 'wine5', h3: 'Tablas creek vineyard esprit de tablas blanc 2015', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine6.jpg', alt: 'wine6', h3: 'Delamotte blanc de blancs brut 2008', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine7.jpg', alt: 'wine7', h3: 'Azienda agricola arianna occhipinti sp68 sicilia rosso igt 2017', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine8.jpg', alt: 'wine8', h3: 'Damilano barolo lecinquevigne 2013', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' },
        { src: 'img/wine1.jpg', alt: 'wine1', h3: 'Mayacamas vineyards cabernet sauvignon 1999', p: '<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>' }
    ]
    function createInformWine(informWine) {
        return `
            <div class="inform">
                
                    <div class="imgWino">
                        <div class="img"><img src="${informWine.src}" alt="${informWine.alt}"></div>
                    </div>
                    <div class="informWino">
                    <h3>${informWine.h3}</h3>
                    ${informWine.p}
                    </div>
                <div class="divButtons">
                    <div class="divBuy"><button class="btn btnBuy">Buy</button></div>
                    <div class="toBasket"><button class="btn btnBuy">Basket</button></div>
                    <div class="btnDelete"><button class="btn btnBuy">Delete</button></div>
                </div>
                <img class="close" src="img/iconClose.png" alt="Закрити">
            </div>
            `
    }    
    
    let informs = document.querySelector('.informs');
    const templatesInform = informWineArray.map(informWine => createInformWine(informWine));
    const htmlInform = templatesInform.join(' ');
    informs.innerHTML = htmlInform;    
    
    let btnBasket = document.querySelector('.btnbasket');
    let windowBasket = document.querySelector('.windowBasket');
    let basketFon = document.querySelector('#basketFon');
        
    btnBasket.onclick = function () {            
            windowBasket.style.display = 'flex';
            windowBasket.style.zIndex = "3";
            basketFon.style.display = 'block';
            basketFon.style.zIndex = "2";            
        }
    
    let closeBasket = document.querySelector('.closeBasket');
    
    closeBasket.onclick = function () {
            basketFon.style.opacity = '1';
            basketFon.style.display = 'none';
            windowBasket.style.display = 'none';
        }   
    
    let some = document.querySelectorAll('.wine img');
    let btnRead = document.querySelectorAll('.btnRead');
    let wineFon = document.querySelector('#wineFon');
    let inform = document.querySelectorAll('.inform');
    let wine = document.querySelectorAll('.wine');
    let btnLoadMore = document.querySelector('.btnLoadMore');    
    let b = 7;
    btnLoadMore.onclick = function () {
        c = b + 8;
        while (b < c) {
            b = b + 1;
            if (b < wine.length) {
                wine[b].style.display = 'block';
            } else {
                btnLoadMore.style.display = 'none';                
                break;
            }
        }
    }
    for (let i = 0; i < some.length; i++) {
        some[i].onmouseover = function () {
            btnRead[i].style.zIndex = "1";
        }
        some[i].onmouseout = function () {
            btnRead[i].style.zIndex = "-2";
        }
        btnRead[i].onmouseover = function () {
            btnRead[i].style.zIndex = "1";
        }
        btnRead[i].onmouseout = function () {
            btnRead[i].style.zIndex = "-2";
        }
        btnRead[i].onclick = function () {
            wineFon.style.display = 'block';
            wineFon.style.zIndex = "2";
            inform[i].style.display = 'flex';
            inform[i].style.zIndex = "3";
        }
        let close = document.querySelectorAll('.close');
        close[i].onclick = function () {
            wineFon.style.opacity = '1';
            wineFon.style.display = 'none';
            inform[i].style.display = 'none';
        }
        
        let toBasket = document.querySelectorAll('.toBasket');
        let place = document.querySelector('.place');
        let basketBuy = document.querySelector('.basketBuy');
        let btnDelete = document.querySelectorAll('.btnDelete');
                
        toBasket[i].onclick = function () {
            place.appendChild(wine[i]);
            wineFon.style.opacity = '1';
            wineFon.style.display = 'none';
            inform[i].style.display = 'none';
            toBasket[i].style.display = 'none';
            basketBuy.style.display = 'block';
            btnDelete[i].style.display = 'block';
        }
        btnDelete[i].onclick = function () {
            wine_menu.appendChild(wine[i]);
            wineFon.style.opacity = '1';
            wineFon.style.display = 'none';
            inform[i].style.display = 'none';
            toBasket[i].style.display = 'block';
            btnDelete[i].style.display = 'none';
        }
    }
} 