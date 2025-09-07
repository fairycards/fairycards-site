document.addEventListener('DOMContentLoaded', function () {
// ★ここから追加
const urlParams = new URLSearchParams(window.location.search);
const skipIntro = urlParams.get('skipIntro');

const intro = document.getElementById('intro');
const menuElement = document.getElementById('menu');
const fadeInElements = document.querySelectorAll('.fade-in, .fade-in-delay1, .fade-in-delay2'); 

if (skipIntro === '1' || skipIntro === 'true') {
  if (intro) {
    intro.style.display = 'none'; // イラストと吹き出しを非表示
  }
  if (menuElement) {
    menuElement.classList.remove('hidden');
    menuElement.classList.add('show');
  }
  fadeInElements.forEach(element => {
    element.classList.add('skip'); // アニメーションを無効化
  });
} else {
fadeInElements.forEach(element => {
  element.classList.remove('skip'); // アニメーションを有効化
});
}

    const button = document.getElementById('show-menu');
    const menu = document.getElementById('menu');
  
    if (button && menuElement) {
      button.addEventListener('click', function () {
        menuElement.classList.toggle('hidden'); 
        menuElement.classList.toggle('show'); 
      });
    }
  
    const categoryButtons = document.querySelectorAll('.category');
    const submenus = document.querySelectorAll('.submenu');
  
    categoryButtons.forEach(button => {
      button.addEventListener('click', () => {
        // 全てのサブメニューを非表示
        submenus.forEach(menu => menu.classList.add('hidden'));
  
        // 対象のサブメニューだけ表示
        const targetId = button.getAttribute('data-target');
        const targetMenu = document.getElementById(targetId);
        if (targetMenu) {
          targetMenu.classList.remove('hidden');
        }
      });
    });
  });
