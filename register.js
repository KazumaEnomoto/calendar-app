//ユーザの仮データを作成
const users = [
    { username: 'user1', password: 'password1'},
    { username: 'user2', password: 'password2'},
];

//ユーザ登録機能
const register = () => {
    //フォームから値を取得
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    //ユーザ情報を保存
    const newUser = {
        username: username,
        password: password,
    };
    users.push(newUser);

    //情報登録後のアラートおよび処理
    alert('登録が完了しました！');

    
}

//ログイン認証機能
const login = () => {
    //フォームから値を取得
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const username = usernameInput.value;
    const password = passwordInput.value;

    //入力された値の認証
    const authenticateUser = authenticateUser(username, password);

    //認証後のアラートおよび処理
    if (authenticateUser) {
        alert('ログインに成功しました。');
    } else {
        alert('ユーザー名もしくはパスワードが間違っています。');
    }

    //入力された値の削除
    usernameInput.value = '';
    passwordInput.value = '';
}

//フォームから入力された値の認証機能
const authenticateUser = (username, password) => {
    const authenticatedUser = users.find(
        (user) => user.username === username && user.password === password
    );
    return authenticatedUser;
}