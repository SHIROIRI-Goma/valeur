# Valeur — Equal Value Color Picker

**バルール** を軸に色を選ぶ、イラスト制作向けカラーピッカーです。

三重構造のホイールで「同じ明度の別の色」を素早く参照でき、ライティングパレットの自動生成にも対応しています。

**[→ ブラウザで開く](https://SHIROIRI-Goma.github.io/valeur/)**

---

## 特徴

| 機能 | 説明 |
|---|---|
| **三重ホイール** | 外リング = 同バルールの全色相、中リング = 色相選択、内三角形 = 彩度・明度 |
| **Valeur Ref** | 選択中のベースカラーと同じ明度の参照色を外リングでピック。確定後0.5秒でhexを自動コピー |
| **Light & Shadow** | 黒体放射（1000K〜12000K）に基づいたライティングパレットを5段階で自動生成 |
| **Saturation Style** | Naturalistic（写実的）〜 Illustrative（イラスト的）を無段階調整 |
| **Hex Keypad** | hex入力欄をタップするとキーパッドが展開。タッチ・スタイラス操作に対応 |
| **Iso-luminance Contours** | 三角形内に等輝度ラインを表示 |
| **Pin** | ウィンドウを常に最前面に固定（デスクトップアプリ版のみ） |

---

## ブラウザで使う

**インストール不要。リンクを開くだけで使えます。**

👉 **https://SHIROIRI-Goma.github.io/valeur/**

Chrome / Edge / Firefox / Safari に対応しています。  
スマートフォン・タブレットでも動作します。

---

## デスクトップアプリとして使う（Windows）

クリスタなど他のアプリと並べて使いたい場合は、デスクトップアプリ版がおすすめです。  
**Pin ボタン**でウィンドウを常に最前面に固定できます。

### 必要なもの

- [Node.js](https://nodejs.org/ja/) — LTS版をインストールしてください

### 起動方法

1. このリポジトリの **Code → Download ZIP** からファイルを入手して展開する  
   （または `git clone https://github.com/SHIROIRI-Goma/valeur.git`）
2. `electron` フォルダをコマンドプロンプトまたは PowerShell で開く
3. 以下を順に実行する

```
npm install
npm start
```

アプリが起動します。

### インストーラー（.exe）を作る場合

```
npm run build
```

`electron/dist/` フォルダに `Valeur Setup x.x.x.exe` が生成されます。  
ダブルクリックでインストールできます。

> **アイコンを変更したい場合：**  
> `electron/icon.ico`（256×256 推奨）を置いてから `npm run build` してください。

---

## 使い方

### Color Wheel タブ

```
外リング（バルールリング）
  ─ ドラッグして同明度の別色相を Valeur Ref としてピック
  ─ 確定後0.5秒で hex が自動コピーされます

中リング（色相リング）
  ─ ドラッグして色相（Hue）を選択

内側の三角形
  ─ 左上頂点 = 白  右頂点 = 純色  下頂点 = 黒
  ─ ドラッグして彩度（S）と明度（V）を調整

Hex 入力欄
  ─ タップするとキーパッドが表示
  ─ Clip Studio Paint などからコピーした hex をペーストも可

Iso-luminance Contours トグル
  ─ 三角形内に等輝度ラインを表示。バルール確認に便利
```

### Light & Shadow タブ

```
Light Temperature（1000K〜12000K）
  1000K  ろうそく・暖炉
  2700K  白熱灯
  5500K  正午の太陽光
  6500K  曇り空
 10000K  青空の日陰

Light Strength
  光の強さを調整。強いほどハイライトと影の差が大きくなる

Saturation Style
  左（Naturalistic）= 写実的。ハイライトが無彩色に近づく
  右（Illustrative）= イラスト的。全段彩度を維持

Generated Palette
  ─ 5段階のパレットが自動生成されます
  ─ 各行をクリックするとその色をベースカラーとして読み込み
  ─ 右端のグレースケールで明度のステップを確認できます
```

---

## ファイル構成

```
valeur/
├── index.html          ← アプリ本体（Web・デスクトップで共用）
├── README.md
├── .nojekyll
└── electron/
    ├── main.js         ← Electronウィンドウ設定・Pinハンドラ
    ├── preload.js      ← セキュアなIPC橋渡し
    └── package.json    ← 依存関係・ビルド設定
```

`index.html` 1ファイルがすべてです。更新はこのファイルだけ変更すれば、WebとデスクトップApp両方に反映されます。

---

## 技術仕様

- **輝度計算** — BT.709: `L = 0.2126R + 0.7152G + 0.0722B`
- **色温度** — Tanner Helland 黒体放射近似（1000K〜12000K）
- **依存ライブラリ** — なし（素のHTML/CSS/JS）
- **フレームワーク** — Electron（デスクトップ版のみ）

---

## ライセンス

MIT License

Copyright (c) 2025 SHIROIRI Goma

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
