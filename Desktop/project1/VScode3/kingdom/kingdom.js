// kingdom/kingdom.js

// ヘッダー読み込み
fetch("../header.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("header").innerHTML = data;
  });

// フッターもあるなら
fetch("../footer.html")
  .then(res => res.text())
  .then(data => {
    document.getElementById("footer").innerHTML = data;
  });
