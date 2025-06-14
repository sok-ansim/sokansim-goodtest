function runTest(questions, resultImages) {
  const testScreen = document.getElementById("test-screen");
  const resultContainer = document.getElementById("result");
  let current = 0;
  let score = 0;

  function showQuestion(index) {
    const q = questions[index];
    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${q.image}" alt="질문 이미지" style="max-width: 300px; border-radius: 8px; margin-bottom: 20px;"><br>
        <p style="font-size: 18px; font-weight: bold;">${q.text}</p>
        <button onclick="next(true)" style="margin: 10px; padding: 10px 20px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">예</button>
        <button onclick="next(false)" style="margin: 10px; padding: 10px 20px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">아니오</button>
      </div>
    `;
  }

  window.next = function(answer) {
    if (answer) score++;
    current++;
    if (current < questions.length) {
      showQuestion(current);
    } else {
      showResult();
    }
  }

  function showResult() {
    let resultIndex = 0;
    if (score >= 4) resultIndex = 2;
    else if (score >= 2) resultIndex = 1;

    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${resultImages[resultIndex]}" alt="결과 이미지" style="max-width: 300px; border-radius: 8px; margin-bottom: 20px;"><br>
        <p style="font-size: 18px; font-weight: bold;">결과</p>
        <a href="https://m.booking.naver.com/booking/13/bizes/400700?theme=place&lang=ko" target="_blank">
          <button style="margin: 10px; padding: 10px 20px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">속안심내과 예약하기</button>
        </a>
      </div>
    `;
  }

  showQuestion(current);
}
function runTest(questions, resultImages) {
  const testScreen = document.getElementById("test-screen");
  const resultContainer = document.getElementById("result");
  let current = 0;
  let score = 0;

  function showQuestion(index) {
    const q = questions[index];
    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${q.image}" alt="질문 이미지" style="max-width: 400px; border-radius: 8px; margin-bottom: 20px;"><br>
        <p style="font-size: 18px; font-weight: bold;">${q.text}</p>
        <button onclick="next(true)" style="margin: 10px; padding: 10px 20px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">예</button>
        <button onclick="next(false)" style="margin: 10px; padding: 10px 20px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">아니오</button>
      </div>
    `;
  }

  window.next = function(answer) {
    if (answer) score++;
    current++;
    if (current < questions.length) {
      showQuestion(current);
    } else {
      showResult();
    }
  }

  function showResult() {
    let resultIndex = 0;
    if (score >= 4) resultIndex = 2;
    else if (score >= 2) resultIndex = 1;

    testScreen.innerHTML = `
      <div style="text-align:center; padding: 20px;">
        <img src="${resultImages[resultIndex]}" alt="결과 이미지" style="max-width: 400px; border-radius: 8px; margin-bottom: 20px;"><br>
        <p style="font-size: 18px; font-weight: bold;">결과</p>
        <a href="https://m.booking.naver.com/booking/13/bizes/400700?theme=place&lang=ko" target="_blank">
          <button style="margin: 10px; padding: 10px 20px; background-color: #100639; color: white; border: none; border-radius: 6px; font-size: 16px; cursor: pointer;">속안심내과 예약하기</button>
        </a>
      </div>
    `;
  }

  showQuestion(current);
}
