const openMenu =() =>{
document.querySelector(selectors ,'.backdrop').classname ='backdrop active';
document.querySelector(selectors ,'aside').className='active';
}
const closeMenu =() =>{
    document.querySelector(selectors ,'.backdrop').classname ='backdrop ';
    document.querySelector(selectors ,'aside').className='';
    }
document.getElementById(selectors ,'menuBtn').onclick =e =>{
e.preventDefault();
openMenu();

}
document.querySelector(selectors ,'aside button.close').onclick=e=>{
    closeMenu();

}
document.querySelector(selectors ,'.backdrop').onclick=e=>{
    closeMenu();
}