document.addEventListener('DOMContentLoaded', function () {
    // 結果の候補リスト
     const menu = window.menu || 'feeling'; 
     const resultsByMenu = {
    feeling: [
      { image: 'images/', text: 'どう        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'どう        bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' },
      { image: 'image/.jpg', text:'どうccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'どうddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' },
      { image: 'images/.jpg', text: 'どうeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
      { image: 'image/.jpg', text:'どうfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' },
       // ...最大26通り
    ],
   fulfill: [
      { image: 'images/jpg', text: '実aaaaaaaa' },
      { image: 'images/.jpg', text: '実bbbbbbb' },
      { image: 'images/.jpg', text: '実ccccccc' },
      { image: 'images/.jpg', text: '実dddddddd' },
      { image: 'image/.jpg', text:'実eeeeeeeeee' },
      // ...
    ],
    type: [
      { image: 'images/.jpg', text: '好みaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '好みbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '好みccccccccccc' },
      { image: 'images/.jpg', text: '好みddddddddddd' },
      { image: 'image/.jpg', text:'好みeeeeeeeeeeeee' },
      ],
      matuallove: [
      { image: 'images/.jpg', text: '確率aaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '確率bbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '確率cccccccccccccc' },
      { image: 'images/.jpg', text: '確率dddddddddddddd' },
      { image: 'image/.jpg', text:'確率eeeeeeeeeeeeeeee' },
    ],
    lovers: [
      { image: 'images/jpg', text: '恋人aaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '恋人bbbbbbbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '恋人ccccccccccccccccccc' },
      { image: 'images/.jpg', text: '恋人dddddddddddddddddddd' },
      { image: 'image/.jpg', text:'恋人eeeeeeeeeeeeeeeeeeeeeee' },
       ],
     couple: [
        { imege: 'images/jpg', text: 'カップルaaaaaaaaaaaaaaaaaaaa' },
        { imege: 'images/jpg', text: 'カップルbbbbbbbbbbbbbbbbbbbb' },
        { imege: 'images/jpg', text: 'カップルcccccccccccccccccccc' },
        { imege: 'images/jpg', text: 'カップルddddddddddddddddddd' },
        { imege: 'images/jpg', text: 'カップルeeeeeeeeeeeeeeeeeee' },
     ], 
   　morebeautiful: [
        { imege: 'images/jpg', text: '美aaaaaaaaaaaaaaaaaaaaaaa' },
        { imege: 'images/jpg', text: '美bbbbbbbbbbbbbbbbbbbbbb' },
        { imege: 'images/jpg', text: '美cccccccccccccccccccccc' },
        { imege: 'images/jpg', text: '美dddddddddddddddddddddd' },
        { imege: 'images/jpg', text: '美eeeeeeeeeeeeeeeeeeeeee' },
    ], 

    // 他8メニュー...
  };
   const results = resultsByMenu[menu]; 
   if (!results) {
  alert('不正なメニューが選ばれました。前の画面に戻ります。');
  window.history.back(); // 自動で戻る
  return;
}
    
    const loadingSection = document.getElementById('loading');
    const resultSection = document.getElementById('result');
    const resultImage = document.getElementById('result-image');
    const resultText = document.getElementById('result-text');
  
    // 数秒後に結果を表示（ランダム）
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * results.length);
      const chosen = results[randomIndex];
  
      resultImage.src = chosen.image;
      resultText.textContent = chosen.text;
  
      loadingSection.classList.add('hidden');
      resultSection.classList.remove('hidden');
    }, 3000); // 3秒待機
  });
  document.getElementById('back-button').addEventListener('click', function () {
    window.history.back();
  });
  
  