//ユーザの仮データを作成
const users = [
    { username: 'user1', password: 'password1'},
    { username: 'user2', password: 'password2'},
];

//ログイン認証機能
const login = () => {
    //フォームから値を取得
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    //入力された値の認証
    const authenticatedUser = authenticateUser(username, password);

    //認証後のアラートおよび処理
    if (authenticatedUser) {
        alert('ログインに成功しました。');
        //ページを遷移
        window.location = "index.html";
    } else {
        alert('ユーザー名もしくはパスワードが間違っています。');
    }

    //入力された値のクリア
    usernameInput.value = '';
    passwordInput.value = '';
};

//フォームから入力された値の認証機能
const authenticateUser = (username, password) => {
    const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
    );
    return authenticatedUser;
};