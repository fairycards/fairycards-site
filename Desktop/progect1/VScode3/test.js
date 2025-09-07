function loadHTML(file, selector) {
    fetch(file)
      .then(res => {
        if (!res.ok) throw new Error("読み込み失敗: " + file);
        return res.text();
      })
      .then(data => {
        document.querySelector(selector).innerHTML = data;
      })
      .catch(err => {
        console.error(err);
      });
  }
document.addEventListener("DOMContentLoaded", () => {
    loadHTML("shared/header.html", "#header");
    loadHTML("shared/footer.html", "#footer");
 
  const cards = document.querySelectorAll('.card');
const message = document.getElementById('message');
const resultButtons = document.getElementById('result-buttons');
const resultArea = document.getElementById('result-area');
const resultImage = document.getElementById('result-image');
const resultText = document.getElementById('result-text');

const results = [
  { image: "images/sou-sitesanmpe.jpg", text: "今日は運気最高！新しいことを始めると成功しやすい日です✨" },
  { image: "images/shine-sitesample.jpg", text: "ゆったりとした時間が心を癒します。焦らず過ごしましょう🌿" },
  { image: "images/qeen-sitesample.jpg", text: "新しい出会いや発見があなたを成長させます💫" }
];

// カード揺れアニメーション CSS定義が必要（後述）
function startShuffle() {
  cards.forEach(card => {
    card.classList.add('shaking');
    card.classList.remove('glow');
  });
}

function stopShuffle() {
  cards.forEach(card => {
    card.classList.remove('shaking');
    card.classList.add('glow');
  });
  message.textContent = "選んだカードのボタンを押してメッセージを受け取って。";
  resultButtons.style.display = 'block';
}

// カードクリック時
cards.forEach(card => {
  card.addEventListener('click', () => {
    message.textContent = "星の妖精シルフィーがカードを選んでいます…";
    startShuffle();

    setTimeout(() => {
      stopShuffle();
    }, 3000);
  });
});
const buttons = document.querySelectorAll('#result-buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
       console.log("カードボタンがクリックされました:", button.dataset.card);// 背景・カード・メッセージ・ボタン非表示
    document.querySelector('.background').style.backgroundImage = 'none';
    document.querySelector('.card-container').style.display = 'none';
    document.getElementById('result-buttons').style.display = 'none';
    document.getElementById('message').style.display = 'none';

    // 選ばれたカードのインデックス
    const index = Number(button.dataset.card) - 1;

    // 画像とテキストをセット
    const resultImage = document.getElementById('result-image');
    const resultText = document.getElementById('result-text');

    resultImage.src = results[index].image;
    resultText.textContent = results[index].text;

    // 一旦非表示クラスを外しておく（opacity:0, display:none状態）
    const resultArea = document.getElementById('result-area');
   

   message.textContent = "";

resultArea.style.display = 'flex';
resultArea.classList.add('show');
document.getElementById('result-area').style.display = 'flex';
document.getElementById('return-area').style.display = 'block';
  });
  });
});
