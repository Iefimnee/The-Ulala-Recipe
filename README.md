# Recipe of Ulala

日本語のドッグフード成分解析・推薦プラットフォーム

## プロジェクト概要

**Recipe of Ulala** は、日本の犬の飼い主さんが狗粮を選ぶ際の「迷い」を解決するための情報サイトです。

### 核心価値

- **成分白話文解説**：専門用語をわかりやすく説明
- **個別適合性チェック**：簡単な質問で適合度を確認
- **透明性重視**：アフィリエイトリンクを明確に開示

### ブランドメッセージ

- メインスローガン：「もう、迷わない。」
- サブスローガン：「一匹一匹に、答えを。」

---

## 技術スタック

### フロントエンド
- **HTML5**: 語義化マークアップ
- **CSS3**: カスタムプロパティ + レスポンシブデザイン
- **Vanilla JavaScript**: 軽量で高速

### デプロイ
- **Netlify**: 自動デプロイ + CDN
- **Domain**: ulala.jp

### 特徴
- ✅ 静的サイト（超高速）
- ✅ モバイルファースト
- ✅ SEO最適化
- ✅ アクセシビリティ対応

---

## ファイル構造

```
Recipe-of-Ulala/
├── index.html                      # トップページ
├── product-template.html           # 商品詳細ページテンプレート
├── product-royal-canin.html        # Royal Canin詳細
├── product-acana.html              # Acana詳細
├── product-umaka.html              # うまか詳細
├── product-nutro.html              # Nutro詳細
├── product-konoko.html             # このこのごはん詳細
├── privacy.html                    # プライバシーポリシー
├── contact.html                    # お問い合わせ
├── 404.html                        # エラーページ
├── sitemap.xml                     # サイトマップ
├── robots.txt                      # robots設定
├── netlify.toml                    # Netlify設定
├── assets/
│   ├── css/
│   │   └── style.css               # メインスタイルシート
│   ├── js/
│   │   ├── data.js                 # 商品・成分データ
│   │   └── script.js               # 交互作用ロジック
│   └── images/
│       ├── products/               # 商品画像
│       │   ├── royal-canin-400.jpg
│       │   ├── royal-canin-800.jpg
│       │   └── ...
│       ├── og-image.jpg            # OGP画像
│       └── favicon.ico             # ファビコン
└── README.md                       # このファイル
```

---

## 主要機能

### 1. 成分星級評価 ⭐
- 各成分に1-5つ星評価
- 一目で良し悪しがわかる

### 2. 適合性自己診断 ✅
- 4つのチェックボックス
- 即座に適合度を判定

### 3. 成分詳細展開 📖
- クリックで詳細説明表示
- 関連商品へのリンク

### 4. FAQ折りたたみ ❓
- よくある質問を5つ掲載
- クリックで展開

### 5. 類似商品推薦 💡
- 類似度スコア表示
- 視覚的プログレスバー

---

## 開発ガイド

### ローカル環境

```bash
# リポジトリクローン
git clone https://github.com/Iefimnee/Recipe-of-Ulala.git
cd Recipe-of-Ulala

# 簡易サーバー起動（Python）
python -m http.server 8000

# ブラウザで開く
open http://localhost:8000
```

### データ更新

#### 商品データ追加
1. `assets/js/data.js` を開く
2. `products` 配列に新しい商品オブジェクトを追加
3. `product-template.html` をコピーして新しいページを作成
4. `sitemap.xml` に新しいURLを追加

#### 成分データ追加
1. `assets/js/data.js` の `ingredients` オブジェクトに追加
2. 各商品ページの成分リストを更新

---

## デプロイ手順

### Netlifyへのデプロイ

1. **GitHubにプッシュ**
```bash
git add .
git commit -m "Update: 商品データ追加"
git push origin main
```

2. **Netlifyが自動デプロイ**
- Push後、自動的にビルド・デプロイされる
- 約1-2分で完了

3. **確認**
- https://ulala.jp にアクセスして確認

### 初回Netlifyセットアップ（済み）
- ✅ GitHubリポジトリ連携済み
- ✅ カスタムドメイン設定済み（ulala.jp）
- ✅ SSL証明書設定済み（HTTPS）

---

## SEO対策

### 実装済み
- ✅ 各ページ固有の `<title>` と `<meta description>`
- ✅ 構造化データ（Schema.org）
- ✅ sitemap.xml
- ✅ robots.txt
- ✅ OGP画像
- ✅ レスポンシブデザイン
- ✅ 高速ロード（画像最適化）

### TODO
- [ ] Google Search Console登録
- [ ] Google Analytics 設定
- [ ] ブログ記事作成（SEO対策）

---

## データ収集状況

### 完了済み
- ✅ 5商品の基本情報
- ✅ 10成分の詳細解説

### 未完成（要対応）
- [ ] 商品画像（Amazon からダウンロード+圧縮）
- [ ] Amazon評価の最新数値
- [ ] 各商品の実際のAmazonリンク

---

## パフォーマンス目標

### Lighthouse スコア
- Performance: > 90
- Accessibility: > 95
- Best Practices: > 90
- SEO: > 95

### 現在のステータス
- 🔶 未測定（画像追加後に測定）

---

## アフィリエイト設定

### ASPプラットフォーム
- A8.net: [登録済み / 未登録]
- もしもアフィリエイト: [登録済み / 未登録]

### 実装
- [ ] 各商品ページにアフィリエイトリンク追加
- [ ] 適切な開示文追加
- [ ] トラッキングコード設置

---

## ブランド規範

### 配色
```css
--primary: #B4CF9E;          /* メイングリーン */
--primary-light: #D4E7C5;    /* 薄いグリーン */
--primary-dark: #8FB87A;     /* 深いグリーン */
--text-dark: #333333;        /* 深い灰色 */
--text-medium: #666666;      /* 中間灰色 */
```

### タイポグラフィ
- メインフォント: M PLUS Rounded 1c
- セカンダリ: Noto Serif JP

### トーン
- 親しみやすい
- 専門的すぎない
- 信頼できる
- 温かい

---

## ライセンス

© 2026 Recipe of Ulala. All rights reserved.

---

## 連絡先

- Email: ulalaanimal@gmail.com
- Website: https://ulala.jp

---

## 更新履歴

### v1.0.0 (2026-01-13)
- 🎉 初期リリース
- ✅ 5商品ページ完成
- ✅ 10成分解説完成
- ✅ レスポンシブデザイン実装
- ✅ 5つのインタラクティブ機能実装

### 今後の予定
- [ ] 商品を10個に拡大
- [ ] ブログセクション追加
- [ ] ユーザーレビュー機能
- [ ] アフィリエイト統合

---

## 開発者向けメモ

### コード規約
- インデント: 4スペース
- 命名: キャメルケース（JS）、ケバブケース（CSS）
- コメント: 日本語可

### Git コミットメッセージ
```
Update: 機能追加
Fix: バグ修正
Style: スタイル調整
Docs: ドキュメント更新
```

### ブランチ戦略
- `main`: 本番環境
- `dev`: 開発環境（必要に応じて）
- `feature/*`: 新機能開発

---

**Recipe of Ulala で、全ての犬に最適なフードを！🐕✨**
