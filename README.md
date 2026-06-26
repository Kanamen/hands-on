# SHOP HANDS-ON

ECサイトのトップページのサンプル実装です。HTML / CSS / JavaScript のみで構築しています。

## ディレクトリ構成

```
.
├── index.html        # トップページ
├── css/
│   └── style.css     # スタイルシート
├── js/
│   └── main.js       # メインスクリプト
├── images/           # 画像アセット
└── README.md
```

## 機能

- レスポンシブ対応（PC / タブレット / スマホ）
- 商品一覧の動的描画（`products` 配列から生成）
- カート追加とカウント表示
- トースト通知
- ハンバーガーメニュー（モバイル）
- スムーススクロール
- ニュースレター登録フォーム

## 使い方（ローカル起動）

`index.html` をブラウザで開くだけでも動作します（ビルド不要）。
ローカルサーバーで起動する場合は、以下のいずれかを使ってください。

### 起動スクリプト

```bash
# Windows
start.bat

# macOS / Linux
./start.sh
```

Python があれば `python -m http.server`、なければ `npx serve` で `http://localhost:8000` に起動します。

### npm スクリプト

```bash
npm start
# → http://localhost:8000
```

### 手動で起動

```bash
# Python
python -m http.server 8000

# Node.js
npx serve . -l 8000
```
