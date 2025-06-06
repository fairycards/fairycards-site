document.addEventListener('DOMContentLoaded', function () {
    // 結果の候補リスト
     const menu = window.menu || 'groupline'; 
     const resultsByMenu = {
    groupline: [
      { image: 'images/', text: 'ラインaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'ラインbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb' },
      { image: 'image/.jpg', text:'ラインccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'ラインddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd' },
      { image: 'images/.jpg', text: 'ラインeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee' },
      { image: 'image/.jpg', text:'ラインfffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff' },
       // ...最大26通り
    ],
    leftout: [
      { image: 'images/jpg', text: 'レフトaaaaaaaa' },
      { image: 'images/.jpg', text: 'レフトbbbbbbb' },
      { image: 'images/.jpg', text: 'レフトccccccc' },
      { image: 'images/.jpg', text: 'レフトdddddddd' },
      { image: 'image/.jpg', text:'レフトeeeeeeeeee' },
      // ...
    ],
    notinveted: [
      { image: 'images/.jpg', text: '誘うaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '誘うbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '誘うccccccccccc' },
      { image: 'images/.jpg', text: '誘うddddddddddd' },
      { image: 'image/.jpg', text:'誘うeeeeeeeeeeeee' },
      ],
      without: [
      { image: 'images/.jpg', text: '消えるaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: '消えるbbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: '消えるcccccccccccccc' },
      { image: 'images/.jpg', text: '消えるdddddddddddddd' },
      { image: 'image/.jpg', text:'消えるeeeeeeeeeeeeeeee' },
    ],
    newclass: [
      { image: 'images/jpg', text: 'クラスaaaaaaaaaaaaaaaaaaaa' },
      { image: 'images/.jpg', text: 'クラスbbbbbbbbbbbbbbbbbbb' },
      { image: 'images/.jpg', text: 'クラスccccccccccccccccccc' },
      { image: 'images/.jpg', text: 'クラスdddddddddddddddddddd' },
      { image: 'image/.jpg', text:'クラスeeeeeeeeeeeeeeeeeeeeeee' },
       ],
     parents: [
        { imege: 'images/jpg', text: '親aaaaaaaaaaaaaaaaaaaa' },
        { imege: 'images/jpg', text: '親bbbbbbbbbbbbbbbbbbb' },
        { imege: 'images/jpg', text: '親cccccccccccccccccccc' },
        { imege: 'images/jpg', text: '親dddddddddddddddddddd' },
        { imege: 'images/jpg', text: '親eeeeeeeeeeeeeeeeeeee' },
     ], 
     mypost: [
        { imege: 'images/jpg', text: '投稿aaaaaaaaaaaaaaaaaaaaaaa' },
        { imege: 'images/jpg', text: '投稿bbbbbbbbbbbbbbbbbbbbbb' },
        { imege: 'images/jpg', text: '投稿cccccccccccccccccccccc' },
        { imege: 'images/jpg', text: '投稿ddddddddddddddddddddd' },
        { imege: 'images/jpg', text: '投稿eeeeeeeeeeeeeeeeeeeeee' },
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
  