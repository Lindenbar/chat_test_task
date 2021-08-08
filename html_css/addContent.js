let usersList = document.getElementById('chatUsersList');
let chatWindow = document.getElementById('chatWindow');

//Наполняем список пользователей
fetch('users.json')
    .then(response => response.json())
    .then(users => {
        users.forEach(value => {
            usersList.innerHTML += `<a class="user" href="${value.link}">
                                        <div>${value.name}</div>
                                    </a>`;
        });
    });

//Наполняем чат комментариями
fetch('comments.json')
    .then(response => response.json())
    .then(comments => {
        comments.forEach(value => {
            chatWindow.innerHTML += `<div class="comment">
                                        <div class="underCommBar flex">
                                            <div class="userName">
                                                <a href="#">${value.user}</a>
                                            </div>
                                            <div class="commData">${value.data}</div>
                                        </div>
                                        <div class="chatContent">${value.content}</div>
                                     </div>`;
        });
    });