const nameInput = document.getElementById("nameInput");
const subjectInput = document.getElementById("subjectInput");
const messageInput = document.getElementById("messageInput");
const sendBtn = document.getElementById("sendBtn");
const result = document.getElementById("result");
const count = document.getElementById("count");

const maxLength = 100;

// 文字数制限 & 残り文字数表示
messageInput.addEventListener("input", () => {
  if (messageInput.value.length > maxLength) {
    messageInput.value = messageInput.value.slice(0, maxLength);
  }

  const remaining = maxLength - messageInput.value.length;

  count.textContent = `100文字以内（あと${remaining}文字入力できます）`;

  if (remaining === 0) {
  count.style.color = "red";
} else if (remaining <= 10) {
  count.style.color = "orange";
} else {
  count.style.color = "black";
}


  result.textContent = "";
});


// 送信ボタン
nameInput.classList.remove("input-error");
subjectInput.classList.remove("input-error");
messageInput.classList.remove("input-error");

sendBtn.addEventListener("click", () => {
  const name = nameInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (name === "") {
  result.textContent = "お名前を入力してください";
  result.style.color = "red";
  nameInput.classList.add("input-error");

} else if (subject === "") {
  result.textContent = "件名を入力してください";
  result.style.color = "red";
  subjectInput.classList.add("input-error");

} else if (message === "") {
  result.textContent = "メッセージを入力してください";
  result.style.color = "red";
  messageInput.classList.add("input-error");

} else {
  result.textContent =
    `送信されました！\nお名前：${name}\n件名：${subject}\n内容：${message}`;
  result.style.color = "green";
sendBtn.disabled = true;
sendBtn.textContent = "送信完了";

  nameInput.value = "";
  subjectInput.value = "";
  messageInput.value = "";
  count.textContent = "残り 100 文字";
  count.style.color = "black";
}

});

// 入力したら警告を消す
nameInput.addEventListener("input", () => {
  result.textContent = "";
  nameInput.classList.remove("input-error");
});

subjectInput.addEventListener("input", () => {
  result.textContent = "";
  subjectInput.classList.remove("input-error");
});

messageInput.addEventListener("input", () => {
  result.textContent = "";
  messageInput.classList.remove("input-error");
});

const subjectSelect = document.getElementById("subjectInput");
const otherSubjectInput = document.getElementById("otherSubjectInput");

subjectSelect.addEventListener("change", () => {
  if (subjectSelect.value === "その他") {
    otherSubjectInput.style.display = "block";
  } else {
    otherSubjectInput.style.display = "none";
    otherSubjectInput.value = "";
  }
  if (subjectSelect.value === "") {
  result.textContent = "件名を選択してください。";
  return;
}

if (
  subjectSelect.value === "その他" &&
  otherSubjectInput.value.trim() === ""
) {
  result.textContent = "件名を入力してください。";
  return;
}

});
