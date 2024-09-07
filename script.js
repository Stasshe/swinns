function generateRansomNote() {
  const inputText = document.getElementById("inputText").value;
  const output = document.getElementById("output");
  output.innerHTML = "";

  const fonts = [
    "Courier New", "Comic Sans MS", "Impact", "Arial Black", 
    "American Typewriter", "Special Elite", "VT323", "Permanent Marker", 
    "Bradley Hand", "Reenie Beanie", "Blackletter", "Stencil", 
    "Cutive Mono", "Old English Text"
  ];

  for (let i = 0; i < inputText.length; i++) {
    const span = document.createElement("span");
    span.textContent = inputText[i];
    
    // ランダムにフォントを適用
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    span.style.fontFamily = randomFont;

    // ランダムにサイズを調整
    span.style.fontSize = Math.random() * 20 + 20 + "px"; // 20px〜40px

    // ランダムに回転
    span.style.transform = `rotate(${Math.random() * 20 - 10}deg)`;

    // ランダムに文字の色を変更
    span.style.color = getRandomColor();

    // 文字を出力エリアに追加
    output.appendChild(span);
  }
}

function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
