//navbar style change when scroll

window.addEventListener('scroll',() =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll',window.scrollY > 0)
})


//show and hide faqs          ERROR

const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
    });
  })



  //show and hide nav menu            ERROR
  const menu = document.querySelector('.nav_menu');
  const menuBtn = document.querySelector('#open-menu-btn');
  const closeBtn = document.querySelector('#close-menu-btn');

  menuBtn.addEventListener('click',() => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  })

  //close menu        ERROR
  const closeNav = () => {
    menu.style.display = "none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  }

  closeBtn.addEventListener('click',closeNav)