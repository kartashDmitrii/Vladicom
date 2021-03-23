import NumberTimer from "./components/NumberTimer";
import popupFunc from "./components/popupFunc";

if (document.querySelector('section.top-block')){
    let swiper = new Swiper('section.top-block .swiper-container',{
        effect: 'fade',
        pagination: {
            el: 'section.top-block .custom-pagination',
            clickable: true,
            renderBullet(index, className){
                return `<span class=${className}></span>`
            }
        }
    });
}
if (document.querySelector('[data-aos]')){
    AOS.init();
}
/*          FEATURES NUMBER        */

if (document.querySelector('section.info-about-us')){
    function scrollEvent(e){
        if(pageYOffset > (document.querySelector('section.info-about-us').offsetTop - window.screen.height)){
            document.querySelectorAll('section.info-about-us .count').forEach( elem => {
                new NumberTimer({
                    elem: elem.querySelector('span'),
                    delay: 2500,
                    type: 'ease-out'
                })
            });
            window.removeEventListener('scroll', scrollEvent)
        }
    }
    window.addEventListener('scroll', scrollEvent)

}

/*          FEATURES NUMBER        */

/*          FOOTER BTN SCROLL TO    */

if(document.querySelector('footer .container>a')){
    document.querySelector('footer .container>a').addEventListener('click', (e)=>{
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

/*          FOOTER BTN SCROLL TO    */

if (document.querySelector('header nav>ul>li.has_child')){
    if (window.screen.width > 790) {
        document.querySelectorAll('header nav>ul>li.has_child').forEach(elem => {
            let elemOffsetLeft = elem.parentNode.offsetLeft + elem.offsetLeft;
            elem.querySelectorAll("li.has_child>ul").forEach(child => {
                let childOffsetLeft = elemOffsetLeft;

                let elem = child;
                while (elem.parentNode.classList.contains('has_child') || elem.parentNode.classList.contains('sub_menu')) {
                    elem = elem.parentNode;
                    if (elem.parentNode.classList.contains('sub_menu')) {
                        childOffsetLeft += elem.parentNode.offsetWidth;
                    }
                }
                let childOffsetRight = window.screen.width - childOffsetLeft;
                if (childOffsetRight - child.offsetWidth < 0) {
                    child.classList.add('reverse');
                }
            })
        })
    } else {
        document.querySelectorAll('header nav li.has_child').forEach(elem => {
            elem.addEventListener('click', function (e) {
                if (e.target === elem) {
                    if (elem.parentNode.querySelector('.back-btn')){
                        elem.parentNode.querySelector('.back-btn').remove();
                    }
                    let btn = document.createElement('button');
                    btn.classList.add('back-btn');
                    btn.innerHTML = `Наша продукция`;
                    function btnEvent(parentElem,btnElem){
                        let linksNode = document.querySelector('header nav .links');
                        let leftPos = Math.abs(parseInt(window.getComputedStyle(linksNode).getPropertyValue('left')));
                        leftPos -= (linksNode.offsetWidth);
                        linksNode.style.left = `-${leftPos}px`;
                        linksNode.style.height = `${parentElem.closest('ul').scrollHeight}px`;
                        if (parentElem.closest('.sub_menu')) {
                            let parentSubMenu = parentElem.closest('.sub_menu');
                            let newBtn = document.createElement('button');
                            newBtn.classList.add('back-btn');
                            newBtn.innerHTML = `Наша продукция`;
                            newBtn.addEventListener('click', function () {
                                btnEvent(parentElem.parentNode.closest('.has_child'),this)
                            });
                            parentSubMenu.prepend(newBtn);
                        }
                        btnElem.remove();
                    }
                    btn.addEventListener('click', function () {
                        btnEvent(elem.closest('.has_child'), this)
                    });
                    elem.querySelector('ul').prepend(btn);
                    let linksNode = document.querySelector('header nav .links');
                    let leftPos = Math.abs(parseInt(window.getComputedStyle(linksNode).getPropertyValue('left')));
                    leftPos += (linksNode.offsetWidth);
                    linksNode.style.left = `-${leftPos}px`;
                    linksNode.style.height = `${elem.querySelector('ul').scrollHeight}px`;
                }
            }, true)
        })
    }
}
if (window.screen.width <= 790) {
    document.querySelector('header .burger').addEventListener('click', function () {
        this.classList.toggle('active');
        document.querySelector('header .refs').classList.toggle('active');
    })
}

/*          popup func  */

if (document.querySelector('[data-popup*="-popup"]')){
    document.querySelectorAll('[data-popup*="-popup"]').forEach( elem => {
        new popupFunc(elem, document.querySelector(`.popup.${elem.dataset.popup}`))
    })
}

/*          popup func  */