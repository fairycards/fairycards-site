document.addEventListener('DOMContentLoaded', function () {
    // 結果の候補リスト
     const menu = window.menu || 'score'; 
     const resultsByMenu = {
    score: [
      { image: 'images/study1.jpg', text: '妖精たちはあなたが一生懸命勉強に取り組む姿を見ていました。月を隠していた雲はやがて消え美しい輝きが天上を照らすでしょう。あなたの声は良く響きあふれるような笑顔がこぼれます。おめでとう、きっと良い結果を受け取るでしょう' },
      { image: 'images/study2.jpg', text: 'あなたの問いに、少しばかり霧がかかりました。ぼんやりとしていてハッキリと形が映りません。あなたの頑張りを妖精たちは知っています。あなたは少し頑張りすぎているのかも。少しリラックスして。' },
      { image: 'image/study3.jpg', text:'小高い丘からあなたの透き通った歌声が届きました。喜びの歌声です。よく頑張りましたね。先はまだ長いので休みながら取り組んでください。' },
      { image: 'images/study4.jpg', text: '雲は蝶の形になりましたが今はまだサナギです。復活はまだ先のよう。このまま、今の努力をつづけて。もう少ししたらぐっと成績はあがるようですよ。' },
      { image: 'images/study5.jpg', text: '泉は端の方からグレーに曇ってゆきました・・。残念ながら思うような点数ではなさそうです。これは勉強不足というより、確認不足であったり解答欄を間違えるなどのミスの可能性があります。あまり落ち込まないでね' },
      { image: 'image/study6.jpg', text:'城から美しい音楽が聞こえてきました。点数だけでなく何か嬉しい知らせが一緒に入ってきそう。' },
       // ...最大26通り
    ],
    method: [
      { image: 'images/study10.jpg', text: '星がティーカップに流れ込みました。ミルクを入れたらとてもよい輝きを放っています。ただ勉強をするだけでなく、これをやったら１つ楽しいことをする、それをつなげていくと良い集中力が身につきそう。長時間だらだらはあなたには合わないようね。また歩きながら暗記したり移動中におさらいをするなど動いている時にほどよく吸収しそうよ。試してみてね。' },
      { image: 'images/study11.jpg', text: '魔法の泉に闇が映りました。妖精たちが払おうとしても磨いてもなかなか消えないわね。あなたには何かこ心にひっかかっているものがあるのかしら？一つ分からないとじっとそことで止まってしまって次へは行けないのね。でもそれはあなたの武器でもあるわよ？なんとなく分かったような流れにはならないのよ。一つ一つ時間をかけて理解して整理してごらんなさい。きっと積み重なって力になるわ' },
      { image: 'images/study12.jpg', text: '紅茶は鳥の形に変身しました。あなたの場合はまずしっかり休憩することね。やらなきゃやらなきゃと思ってばかりいないかしら？しっかり休憩したら、先生か友人に相談してみて。よい情報を得られそうよ。' },
      { image: 'images/study13.jpg', text: '暗記は徹底的に、そして積み重ねの教科はコツコツやっていくしかないわね。まずどれから取り組むのか冷静に策を練って。分からなくなったら目上の人に相談するといいわよ' },
      { image: 'image/study14.jpg', text:'勉強方法というより、今何をやっているのかがあまりよく理解できていないみたい。予習をしっかりやるといいわよとそよ風は告げています。' },
      // ...
    ],
    hard: [
      { image: 'images/study15.jpg', text: '窓を開けたら、あら大粒の雨だわ。あなたはずぶ濡れなのね・・。まずは考える教科から予習をしてそれから家でもう一度見直すのよ。必死でメモして！' },
      { image: 'images/study16.jpg', text: '背景は黒に近いブルーになりました。・・・あなたの学力と学校全体の学力はだいぶ差があるみたい。とても苦しい状況が伝わってきます。一気に頂点を目指さず一歩一歩あがることを目指して！' },
      { image: 'images/study17.jpg', text: '妖精たちはあなたの笑顔を花から読み取りました。今の勉強方法は合っているからそのまま努力を続けて。時間はかかるけれどやがて美しい星を見るでしょう。少しずつ少しずつ。' },
      { image: 'images/study18.jpg', text: 'あなたの問いに、茶色のフレームが揺れ動いて外れました。そもそもその学校は、勉強面も他の面でもあなたに合っていないんじゃないかしら？どう思う？' },
      { image: 'image/study19.jpg', text:'小高い丘からあなたの透き通った歌声が届きました。喜びの歌声です。よく頑張りましたね。努力は実ります、これはチャンスです' },
      ],
      choice: [
      { image: 'images/study20.jpg', text: '太陽は青空を泳ぎ始めました。とても軽やかであざやかな輝きを放っています。あなたの第一志望はあなたに合っているようです。少し努力が必要かもしれませんがやれることは全部やって後悔のないようにしましょうね。良い結果が待っています。' },
      { image: 'images/study21.jpg', text: '魔法の泉に闇が映りました。うーん、その学校、ほんとうにあなたが行きたい学校ですか？よくよく自分の本心をみつめてみたほうがいいかも。' },
      { image: 'images/study22.jpg', text: '紅茶は虹の形に変身しました。今のあなたからはだいぶ遠い志望校みたいね。でも、虹はあなたを応援してるみたいよ。ぜひ頑張ってみて。' },
      { image: 'images/study23.jpg', text: '多分受験したら受かる学校だと思うけれど、学校の雰囲気や校風がイマイチあなたにしっくりこないとカードは告げています。オープンキャンバスだけでなく、行事などでも実際の学生の様子をみたかしら？今一度確認することをおすすめするわ' },
      { image: 'image/study24.jpg', text:'カードは夕焼け雲に隠れました。目上の人や先生から反対の声がでるかもしれないわ。その声に耳を傾けつつそれでもここがいいと言うのならじゅけんしてみるといいわね。正直、ビミョーな学校ね' },
    ],
    undecide: [
      { image: 'images/study30.jpg', text: 'ティーカップは星と月が入りました。あなたにはやりたいことが複数あるのではないかしら。それをうまく将来の道としてつなげられていないみたい。職業名だけにとらわれず、自分の好きなことがどの仕事につながるかを探ってみて' },
      { image: 'images/study31.jpg', text: '先生や親、友人の一言がヒントになりそうよ。それから過去にあなたは○○に向いてるわね、とか、あなたは○○っぽいよねとか言われたことはないかしら？それは実はとても的を得たアドバイスよ。参考にしてみて' },
      { image: 'images/study32.jpg', text: '紅茶は音の形に変身しました。音に関する事が良い結果につながりそうよ。進路のことを忘れて音楽をきくとか無心で楽器を弾くとなにかひらめくものがあるかも。それが進路に繋がりそうよ。' },
      { image: 'images/study33.jpg', text: '風が首を振っているわ。手にはなにも持っていないの。圧倒的に情報が足りていないと言っているわ。まず自分が行けそうな範囲の進路をもっと調べてみて。行動するのよ' },
      { image: 'image/study34.jpg', text:'うーん、あなたはそもそも進学を望んでいるのかしら？自分の気持ちを見つめて整理するのが先決かも。' },
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
  