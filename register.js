//サインアップ・サインイン機能の実装
const users = [
    { username: 'user1', password: 'password1'},
    { username: 'user2', password: 'password2'},
];


const login = () => {
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    const authenticateUser = authenticateUser(username, password);

    if (authenticateUser) {
        alert('ログインに成功しました。');
    } else {
        alert('ユーザー名もしくはパスワードが間違っています。');
    }

    usernameInput.value = '';
    passwordInput.value = '';
}

const authenticateUser = (username, password) => {
    const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
    );
    return authenticatedUser;
}