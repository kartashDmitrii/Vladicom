import NumberTimer from "./components/NumberTimer";
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

if(document.querySelector('footer>a')){
    document.querySelector('footer>a').addEventListener('click', ()=>{
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    })
}

/*          FOOTER BTN SCROLL TO    */

if (document.querySelector('header nav>ul>li.has_child')){
    document.querySelectorAll('header nav>ul>li.has_child').forEach( elem => {
        let elemOffsetLeft = elem.parentNode.offsetLeft + elem.offsetLeft;
        elem.querySelectorAll("li.has_child>ul").forEach( child => {
            let childOffsetLeft = elemOffsetLeft;

            let elem = child;
            while (elem.parentNode.classList.contains('has_child') || elem.parentNode.classList.contains('sub_menu')){
                elem = elem.parentNode;
                if (elem.parentNode.classList.contains('sub_menu')){
                    childOffsetLeft += elem.parentNode.offsetWidth;
                }
            }
            let childOffsetRight = window.screen.width - childOffsetLeft;
            if(childOffsetRight - child.offsetWidth < 0){
                child.classList.add('reverse');
            }
        })
    })
}