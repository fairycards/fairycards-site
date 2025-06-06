document.addEventListener('DOMContentLoaded', function () {
    // 結果の候補リスト
     const menu = window.menu || 'truancy'; 
     const resultsByMenu = {
    truancy: [
      { image: 'images/', text: 'なぜaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'なぜbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' },
      { image: 'image/.jpg', text:'なぜccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'なぜddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' },
      { image: 'images/.jpg', text: 'なぜeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
      { image: 'image/.jpg', text:'なぜfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' },
       // ...最大26通り
    ],
    feelcrazy: [
      { image: 'images/jpg', text: '変aaaaaaaa' },
      { image: 'images/.jpg', text: '変bbbbbbb' },
      { image: 'images/.jpg', text: '変ccccccc' },
      { image: 'images/.jpg', text: '変dddddddd' },
      { image: 'image/.jpg', text:'変eeeeeeeeee' },
      // ...
    ],
    feelguilty: [
      { image: 'images/.jpg', text: '罪悪感aaaaaaaaaaa' },
      { image: 'images/.jpg', text: '罪悪感bbbbbbbbbbb' },
      { image: 'images/.jpg', text: '罪悪感ccccccccccc' },
      { image: 'images/.jpg', text: '罪悪感ddddddddddd' },
      { image: 'image/.jpg', text:'罪悪感eeeeeeeeeeeee' },
      ],
      myfuture: [
      { image: 'images/.jpg', text: '進路aaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '進路bbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '進路cccccccccccccc' },
      { image: 'images/.jpg', text: '進路dddddddddddddd' },
      { image: 'image/.jpg', text:'進路eeeeeeeeeeeeeeee' },
    ],
    bepunished: [
      { image: 'images/jpg', text: 'aaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'bbbbbbbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: 'ccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'dddddddddddddddddddd' },
      { image: 'image/.jpg', text:'eeeeeeeeeeeeeeeeeeeeeee' },
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
  