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

setTimeout(() => {
    document.getElementById("modal").style.display = "block";
}, 60000);

const btn = document.getElementById("themeToggle");

btn.onclick = () => {
    document.body.classList.toggle("light");
};

const hour = new Date().getHours();

if (hour >= 7 && hour < 21) {
    document.body.classList.add("light");
} else {
    document.body.classList.remove("light");
}
