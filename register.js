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

    //入力された値のクリア
    usernameInput = '';
    passwordInput = '';
};