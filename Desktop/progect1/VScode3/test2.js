document.addEventListener("DOMContentLoaded", () => {
    loadHTML("shared/header.html", "#header");
    loadHTML("shared/footer.html", "#footer");
    const cards = document.querySelectorAll('.card');
    const detailArea = document.querySelector('.detail-area');
    const detailImage = document.getElementById('detail-image');
    const detailText = document.getElementById('detail-text');   
    const detailTitle = document.getElementById('detail-title');
 
cards.forEach(card => {
  card.addEventListener('click', () => {
    // クリックされたカードの画像と意味を取得
    const imgSrc = card.src;
    const fullMeaning = card.dataset.meaning;
    const title = fullMeaning.split('　')[0];  // 「王妃」などタイトル部分を取得（全角スペースで区切り）
    // detail-areaを表示
    detailArea.style.display = 'flex';
    detailImage.src = imgSrc;
    detailTitle.textContent = title;
    detailText.textContent = fullMeaning; 
    // クリックされたカードを少し拡大表示（任意）
    cards.forEach(c => c.style.transform = 'scale(1)');
    card.style.transform = 'scale(1.2)';
  });
});
});  
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
  


