
const CATS={tshirts:'T-Shirts',shirts:'Shirts',pants:'Pants',jackets:'Jackets',innerwear:'Inner Wear'};
function cart(){return JSON.parse(localStorage.getItem('mnCart')||'[]')}
function saveCart(c){localStorage.setItem('mnCart',JSON.stringify(c));updateCartCount()}
function updateCartCount(){document.querySelectorAll('.cart-count').forEach(x=>x.textContent=cart().length)}
function addToCart(p){let c=cart();c.push(p);saveCart(c);alert('Added to cart');}
function menu(){document.getElementById('drawer').classList.toggle('open')}
function logout(){localStorage.removeItem('mnUser');location.href='login.html'}
function requireLogin(){if(!localStorage.getItem('mnUser')) location.href='login.html'}
document.addEventListener('DOMContentLoaded',updateCartCount)
