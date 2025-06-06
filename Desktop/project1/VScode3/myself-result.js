document.addEventListener('DOMContentLoaded', function () {
    // 結果の候補リスト
     const menu = window.menu || 'hate'; 
     const resultsByMenu = {
    hate: [
      { image: 'images/', text: 'ヘイトaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'ヘイトbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' },
      { image: 'image/.jpg', text:'ヘイトccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'ヘイトddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' },
      { image: 'images/.jpg', text: 'ヘイトeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
      { image: 'image/.jpg', text:'ヘイトfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' },
       // ...最大26通り
    ],
    style: [
      { image: 'images/jpg', text: '容姿aaaaaaaa' },
      { image: 'images/.jpg', text: '容姿bbbbbbb' },
      { image: 'images/.jpg', text: '容姿ccccccc' },
      { image: 'images/.jpg', text: '容姿dddddddd' },
      { image: 'image/.jpg', text:'容姿eeeeeeeeee' },
      // ...
    ],
    place: [
      { image: 'images/.jpg', text: '居場所aaaaaaaaaaa' },
      { image: 'images/.jpg', text: '居場所bbbbbbbbbbb' },
      { image: 'images/.jpg', text: '居場所ccccccccccc' },
      { image: 'images/.jpg', text: '居場所ddddddddddd' },
      { image: 'image/.jpg', text:'居場所eeeeeeeeeeeee' },
      ],
      course: [
      { image: 'images/.jpg', text: '進路aaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '進路bbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '進路cccccccccccccc' },
      { image: 'images/.jpg', text: '進路dddddddddddddd' },
      { image: 'image/.jpg', text:'進路eeeeeeeeeeeeeeee' },
    ],
    dull: [
      { image: 'images/jpg', text: 'ダルイaaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'ダルイbbbbbbbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: 'ダルイccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'ダルイdddddddddddddddddddd' },
      { image: 'image/.jpg', text:'ダルイeeeeeeeeeeeeeeeeeeeeeee' },
       ],
     livehard: [
        { imege: 'images/jpg', text: '生きるaaaaaaaaaaaaaaaaaaaa' },
        { imege: 'images/jpg', text: '生きるbbbbbbbbbbbbbbbbbbbb' },
        { imege: 'images/jpg', text: '生きるcccccccccccccccccccc' },
        { imege: 'images/jpg', text: '生きるdddddddddddddddddddd' },
        { imege: 'images/jpg', text: '生きるeeeeeeeeeeeeeeeeeeee' },
     ], 
     purpose: [
        { imege: 'images/jpg', text: '目的aaaaaaaaaaaaaaaaaaaaaaa' },
        { imege: 'images/jpg', text: '目的bbbbbbbbbbbbbbbbbbbbbb' },
        { imege: 'images/jpg', text: '目的cccccccccccccccccccccc' },
        { imege: 'images/jpg', text: '目的dddddddddddddddddddddd' },
        { imege: 'images/jpg', text: '目的eeeeeeeeeeeeeeeeeeeeee' },
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
  