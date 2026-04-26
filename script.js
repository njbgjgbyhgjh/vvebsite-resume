/* ===== 1. LOCAL STORAGE ===== */
const info = {
    userAgent: navigator.userAgent,
    platform: navigator.platform,
    language: navigator.language
};

localStorage.setItem("browserInfo", JSON.stringify(info));

const footer = document.getElementById("footer");
footer.innerHTML = "<h3>LocalStorage:</h3>";

for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key)) {
        const data = JSON.parse(localStorage.getItem(key));

        footer.innerHTML += `
        <div class="comment">
            <b>Браузер:</b> ${data.userAgent}<br>
            <b>Система:</b> ${data.platform}<br>
            <b>Мова:</b> ${data.language}
        </div>
        `;
    }
}

/* ===== 2. FETCH КОМЕНТАРІВ ===== */
fetch("https://jsonplaceholder.typicode.com/posts/24/comments")
    .then(res => res.json())
    .then(data => {
        const commentsDiv = document.getElementById("comments");
        commentsDiv.innerHTML = "<h2>Коментарі</h2>";

        data.forEach(comment => {
            const div = document.createElement("div");
            div.className = "comment";

            div.innerHTML = `
                <b>${comment.name}</b><br>
                <small>${comment.email}</small><br><br>
                ${comment.body}
            `;

            commentsDiv.appendChild(div);
        });
    });

/* ===== 3. МОДАЛЬНЕ ВІКНО ===== */
setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

/* ===== 4. ТЕМА ===== */

const btn = document.getElementById("themeToggle");

btn.onclick = () => {
    document.body.classList.toggle("light");
};

/* авто по часу */
const hour = new Date().getHours();

/*
7–21 → день (синя)
21–7 → ніч (зелена)
*/
if (hour >= 7 && hour < 21) {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}