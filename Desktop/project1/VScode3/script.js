document.addEventListener("DOMContentLoaded", () => {
    loadHTML("header.html", "#header");
    loadHTML("footer.html", "#footer");
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
  