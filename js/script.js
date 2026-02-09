// スクラップヤード被害者ネットワーク - メインスクリプト

document.addEventListener('DOMContentLoaded', function() {
    // フォーム送信処理
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // TODO: Lambda APIへの送信処理を実装
            // 現在はモック動作
            alert('送信機能は現在準備中です。');
        });
    }
});
