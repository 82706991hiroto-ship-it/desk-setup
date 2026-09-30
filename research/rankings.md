# デスクツアー掲載デバイス ランキング調査（2026年9月30日時点）

公開されている日本語のデスクツアー（2025年1月以降）から、クリエイターが「実際に使っている」と書いたデバイスを集計し、カテゴリ別に何人が使っているかを数えた記録です。機械で読む版は [`rankings.json`](rankings.json) にあります。

- 対象: **53 投稿 / 53 クリエイター**（note 19・YouTube 12・ブログ 11・企業ブログ 11（2社の社員10人＋コラボスタイル1人）・X 0）
- 記録したデバイス: 593 件（うち `ambiguous: true` 118 件はランキングから除外、カタログ `id` に一致 94 件）
- 確認日: 2026-09-30

## 1. 方法

1. 検索エンジンで「デスクツアー 2025／2026」「デスク環境」「在宅ワーク デスク」「エンジニア デスクツアー 社員」などを検索し、候補ページを集めました。
2. 各ページを実際に取得して本文（YouTube は概要欄とチャプター）を読み、2025-01-01 以降に公開されたものだけを残しました。1人につき1投稿で、同じ人の投稿が複数あるときは一番新しいものを使いました（例: まち は 2025年2月版ではなく 2026年3月版）。
3. 投稿の中で「使っている」と書かれている、次のカテゴリの機器だけを記録しました: PC／モニター／ドック・ハブ／キーボード（テンキー・左手デバイスで打鍵するもの含む）／マウス・トラックパッド・トラックボール／オーディオ／カメラ・マイク／照明／モニターアーム・PCスタンド／デスク・天板・チェア・デスクマット（マウスパッド含む）／充電器／タブレット・スマホスタンド・MagSafe 充電スタンド。
   - 「おすすめ」「以前使っていた」「検討中」「プレゼント企画」の品、撮影機材（動画を撮るためのカメラ・レンズ）、デスクシェルフ・ケーブル類・収納・ゲーム機は数えていません。
   - メーカー提供品でも、本人がいま使っていると書いているものは数えました（例: りんこ の SIHOO チェア、さっさん の Amazon 提供回）。
4. 表記どおりの `raw` を残し、カタログ（`index.html` の `CATALOG`）と**同じモデルのときだけ** `cid` を付けました。世代・サイズ・型番違いは別物として扱っています。
   - 例: MX ERGO（無印）≠ MX ERGO S、Shure MV7（初代）≠ MV7+、Insta360 Link 2 Pro ≠ Link 2、REALFORCE R3SA13（30g）≠ カタログの R3SA11、MacBook Air 15" (M4) ≠ `mba-m4`（13インチ）、Creative Pebble V2 ≠ V3、Apple Magic Keyboard テンキー付き ≠ `magic-kb`。
   - カタログ側がサイズを区別していない `mba-m3` / `mba-m4` は、サイズ未記載の投稿も一致として扱いました。カタログがサイズを持つもの（`mba-m2` は 13"、`mba13-m5` / `mba15-m5`）は、サイズ未記載なら `cid` を付けず「Apple MacBook Air (M2)」「(M5・サイズ不明)」のように世代だけで集計しています（世代は確定しているので ambiguous にはしていません）。
   - 「4K モニター」「デスクマット」などカタログの汎用アイテム（`generic-*`, `desk-mat`, `ipad` など）には `cid` を付けていません。具体的な型番で集計するためです。
5. 型番が書かれていない（「Logicoolのマウス」「FlexiSpotの昇降デスク」「BenQ ScreenBar」「AirPods Pro」など）、世代やサイズが特定できない、本文と商品一覧で型番が食い違う、といったものは `ambiguous: true` にしてランキングから外しました。
6. 1人が同じ機器を複数台持っていても1と数え、**2人以上**が使っている機器を `ranking` に載せました（同数は名前順）。

## 2. 対象投稿の一覧

| # | クリエイター | 媒体 | 公開日 | URL | 記録数（うち ambiguous） |
|---|---|---|---|---|---|
| 1 | ロピログ | note | 2026-07-10 | https://note.com/tatu1014/n/n4f33f9f34ae2 | 17（3） |
| 2 | ばるき | note | 2026-07-09 | https://note.com/kakinoke/n/nfc483d7aeb56 | 9（2） |
| 3 | トモ（トモウェブ） | ブログ | 2026-06-12 | https://tomo-web.jp/desk-tour-update/ | 20（3） |
| 4 | りんこ（りんこスタイル） | ブログ | 2026-05-18 | https://rincostyle.blog/desktour/ | 21（0） |
| 5 | ゆう（INDOOR HEART） | ブログ | 2026-05-14 | https://indoorheart.com/desk-gadget-goods | 15（0） |
| 6 | GOME（G-LABO） | note | 2026-05-06 | https://note.com/gome_web/n/ndab7caaf3bf5 | 6（3） |
| 7 | 東京ぱぱ | note | 2026-05-04 | https://note.com/good_tapir1455/n/n846d25f0ab8d | 5（0） |
| 8 | miDen | YouTube | 2026-03-11 | https://www.youtube.com/watch?v=QN6f81qFe6g | 7（2） |
| 9 | みつ（ガジェット暮らしのnote） | note | 2026-03-11 | https://note.com/muramitsu/n/n3d1b73ed71e4 | 21（7） |
| 10 | まち | note | 2026-03-06 | https://note.com/machi11/n/n58e0d602c470 | 13（1） |
| 11 | よは（YOHAKU） | ブログ | 2026-01-27 | https://ryuforest.com/desk-tour-2026/ | 11（0） |
| 12 | 藤井翔太 | note | 2026-01-21 | https://note.com/f_bby__shota/n/n7b9856650ee9 | 11（2） |
| 13 | Gadge（Gadge310） | note | 2026-01-17 | https://note.com/1031310/n/n88ab0b1d407e | 9（1） |
| 14 | DG Nexus | YouTube | 2026-01-11 | https://www.youtube.com/watch?v=iv9LOwluyvs | 7（3） |
| 15 | るいとー（ルイデント） | ブログ | 2026-01-09 | https://ruidento.com/desk-tour-winter-2026/ | 7（4） |
| 16 | bingo+ | note | 2026-01-06 | https://note.com/bingo10/n/nde9bd173692d | 6（2） |
| 17 | 鳴海シロウ | note | 2025-12-31 | https://note.com/hearty_sloth9552/n/n9da075ff7bf7 | 11（2） |
| 18 | ちから（ちからの作業部屋【インズノート】） | YouTube | 2025-12-26 | https://www.youtube.com/watch?v=FpX3jBlGOcc | 17（1） |
| 19 | さっさん / SASSAN | YouTube | 2025-12-24 | https://www.youtube.com/watch?v=0Wq9YvkgUdI | 19（1） |
| 20 | Emu（EmuLog） | note | 2025-12-22 | https://note.com/emulog/n/ne413198d04d2 | 15（6） |
| 21 | MESI（コラボスタイル） | 企業ブログ | 2025-12-06 | https://zenn.dev/collabostyle/articles/f7ec387e0096b4 | 5（3） |
| 22 | さいちょう | YouTube | 2025-12-05 | https://www.youtube.com/watch?v=r6V86-BGIt4 | 23（1） |
| 23 | しぶや | note | 2025-11-24 | https://note.com/setoshohei/n/nb384de81058e | 8（2） |
| 24 | タカヒロ（ガジェットブログ・デジスタ） | ブログ | 2025-11-22 | https://digital-style.jp/desk-tour-2025 | 10（0） |
| 25 | maipyon（ぴょんガジェ） | ブログ | 2025-11-22 | https://maipyon.jp/desk-tours-2025/ | 13（1） |
| 26 | ヒューマンテクノロジーズ社員（2016年入社エンジニア・バランス派） | 企業ブログ | 2025-10-08 | https://recruit.h-t.co.jp/blog/2025-10-08 | 8（6） |
| 27 | ヒューマンテクノロジーズ社員（2022年入社エンジニア） | 企業ブログ | 2025-10-08 | https://recruit.h-t.co.jp/blog/2025-10-08 | 2（1） |
| 28 | ささき｜デザイナー | note | 2025-09-12 | https://note.com/hakumai_0kcal/n/n4975f602193b | 11（4） |
| 29 | びえんガジェットPC | YouTube | 2025-09-03 | https://www.youtube.com/watch?v=Q_b0PSfh8Rw | 10（1） |
| 30 | 浪凪ゆらる | note | 2025-07-20 | https://note.com/tttrk/n/n8339dea4f66d | 5（0） |
| 31 | OVR. | note | 2025-07-05 | https://note.com/over50gg/n/n5e08456a6f57 | 11（1） |
| 32 | くまンモ | note | 2025-05-11 | https://note.com/kumanmoo/n/nabb568fb8cc4 | 7（3） |
| 33 | ささやん（HUGBLO） | ブログ | 2025-05-07 | https://hugblo.com/desk-tour/ | 11（1） |
| 34 | えふぃる（efiL） | YouTube | 2025-05-06 | https://www.youtube.com/watch?v=qQU9XWh-rKQ | 16（1） |
| 35 | Harushiro（ゆるっとデスクライフ） | ブログ | 2025-05-05 | https://yurutodesklife.jp/desk-tour-2025/ | 8（1） |
| 36 | tk（がじぇぷら！Gadget Life +） | ブログ | 2025-05-03 | https://gadget-life.blog/desk-tour-gadget-worker-2025/ | 21（5） |
| 37 | ツヨシ（techyou） | YouTube | 2025-04-18 | https://www.youtube.com/watch?v=PIhcwBZV5BE | 17（2） |
| 38 | shunsuke〔駿介〕 | note | 2025-04-05 | https://note.com/brave_ixia3770/n/n2331caf75254 | 17（7） |
| 39 | 4.5room（資料室） | note | 2025-03-27 | https://note.com/4_5room/n/n7e4b09295971 | 13（8） |
| 40 | たつ | note | 2025-03-24 | https://note.com/tatsu_life/n/n79fb38888361 | 6（5） |
| 41 | 家活男子のススメ | YouTube | 2025-03-07 | https://www.youtube.com/watch?v=KVc6mAZ22o0 | 23（3） |
| 42 | しょうご（前略、物欲が止まりません。） | YouTube | 2025-01-25 | https://www.youtube.com/watch?v=GBRuJ5txYYQ | 15（1） |
| 43 | ブレイン・ラボ社員 H・Kさん（PdM） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 7（3） |
| 44 | ブレイン・ラボ社員 Y・Yさん（デザイナー） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 8（0） |
| 45 | ブレイン・ラボ社員 N・Rさん（人事） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 6（1） |
| 46 | ブレイン・ラボ社員 W・Yさん（エンジニア） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 11（0） |
| 47 | ブレイン・ラボ社員 Y・Yさん（エンジニア） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 8（2） |
| 48 | ブレイン・ラボ社員 C・Sさん（デザイナー） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 3（1） |
| 49 | ブレイン・ラボ社員 H・Mさん（人事） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 4（3） |
| 50 | ブレイン・ラボ社員 U・Kさん（エンジニア） | 企業ブログ | 2025-01-17 | https://note.com/brainlab/n/nd9302e6dd467 | 6（4） |
| 51 | 東京タマスタイル（TOKYO Tamastyle） | YouTube | 2025-01-13 | https://www.youtube.com/watch?v=09YBos_fsXc | 4（2） |
| 52 | すばる（Tigerwall） | YouTube | 2025-01-12 | https://www.youtube.com/watch?v=RLtodiEdS_A | 16（0） |
| 53 | Padobure（東京生まれHOUSE MUSIC育ち） | ブログ | 2025-01-05 | https://nomusicnolife.hatenablog.com/entry/2025/01/05/%E5%B9%B4%E9%A0%83%E7%94%B7%E5%AD%90%E3%81%AE%E3%83%87%E3%82%B9%E3%82%AF%E3%83%84%E3%82%A2%E3%83%BC%EF%BC%882025%E5%B9%B41%E6%9C%88%EF%BC%89 | 13（2） |

- ブレイン・ラボ（8人）とヒューマンテクノロジーズ（2人）は1記事に複数社員が載っているため、社員ごとに別の投稿として数えています（名前は記事の表記どおり、イニシャル・入社年のみ）。
- トモ（トモウェブ）は 2023年公開・「2025年版」に更新された記事で、日付は最終更新日（2026-06-12）です。
- ツヨシ（techyou）はブログ記事（tech-you.jp のカテゴリページ）に日付がないため、日付のわかる YouTube 版（2025-04-18）を使いました。HHKB は動画では「HHKB」表記のみですが、同じ人のブログで HYBRID Type-S と明記されているため一致としています。

## 3. カテゴリ別 上位10（2人以上が使用）

人数 = その機器を使っていると書いたクリエイターの数。`cid` 列が「—」のものはカタログ未登録です。

### PC（`computer`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | MacBook Air (M3) | `mba-m3` | 4 |
| 1 | 自作PC | — | 4 |
| 3 | Apple Mac mini (M2 Pro) | — | 2 |
| 3 | Apple MacBook Air (M1) | — | 2 |
| 3 | Apple MacBook Air (M2) | — | 2 |
| 3 | Apple MacBook Pro 14" (M1 Max) | — | 2 |
| 3 | Apple MacBook Pro 14" (M3) | — | 2 |
| 3 | MacBook Air (M4) | `mba-m4` | 2 |

### モニター（`monitor`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | Dell U2723QE | `u2723qe` | 2 |
| 1 | Dell U3223QE | — | 2 |
| 1 | Dell U4021QW | — | 2 |
| 1 | INNOCN 27D1U | — | 2 |

### ドック・ハブ（`dock`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | CalDigit TS4 | `caldigit-ts4` | 3 |
| 2 | BenQ beCreatus DP1310 | — | 2 |

### キーボード（`keyboard`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | HHKB Professional HYBRID Type-S | `hhkb-hybrid` | 4 |
| 1 | Logicool MX Keys Mini | `mx-keys-mini` | 4 |
| 3 | Apple Magic Keyboard（Touch ID・テンキー付き） | — | 2 |
| 3 | EPOMAKER EK21 | — | 2 |
| 3 | Keychron K8 Pro | — | 2 |
| 3 | Lofree Flow Lite | — | 2 |

### マウス・トラックパッド・トラックボール（`mouse`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | Apple Magic Trackpad | `magic-trackpad` | 8 |
| 1 | Logicool MX Master 3S | `mx-master-3s` | 8 |
| 3 | Logicool ERGO M575S | — | 3 |
| 3 | Logicool MX Master 4 | `mx-master-4` | 3 |
| 5 | Apple Magic Mouse | `magic-mouse` | 2 |
| 5 | Logicool G502 X LIGHTSPEED | — | 2 |
| 5 | Logicool MX Anywhere 3S | `mx-anywhere-3s` | 2 |
| 5 | Logicool MX ERGO | — | 2 |
| 5 | Logicool MX ERGO S | `mx-ergo-s` | 2 |

### オーディオ（スピーカー・ヘッドホン・IF）（`audio`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | Apple AirPods 4 | — | 2 |
| 1 | Apple AirPods Max | — | 2 |
| 1 | Apple AirPods Pro 3 | — | 2 |
| 1 | Apple EarPods | — | 2 |
| 1 | Audio-Technica ATH-HL7BT | — | 2 |
| 1 | Kanto YU2 | — | 2 |
| 1 | MOTU M2 | — | 2 |

### カメラ・マイク（`camera`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | Shure SM7B | — | 5 |
| 2 | FIFINE K688 | — | 3 |
| 3 | Audio-Technica AT2020 | — | 2 |
| 3 | Logicool G Blue Yeti | — | 2 |
| 3 | Shure MV7+ | `mv7plus` | 2 |
| 3 | Shure MV7（初代） | — | 2 |

### 照明（モニターライト等）（`lighting`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | BenQ ScreenBar Halo 2 | `screenbar-halo2` | 4 |
| 1 | BenQ ScreenBar Pro | `screenbar-pro` | 4 |
| 3 | BenQ ScreenBar Halo | `screenbar-halo` | 3 |
| 4 | Xiaomi Mi モニター掛け式ライト | `xiaomi-lightbar` | 2 |

### アーム・PCスタンド（`arm`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | エルゴトロン LX モニターアーム | `ergotron-lx` | 9 |
| 2 | Amazonベーシック モニターアーム | `amazon-arm` | 3 |
| 2 | COFO 無重力モニターアーム Pro | — | 3 |
| 2 | Herman Miller Flo モニターアーム | — | 3 |
| 5 | エルゴトロン HX モニターアーム | — | 2 |

### デスク・チェア・デスクマット（`furniture`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | FlexiSpot E7 電動昇降デスク | `flexispot-e7` | 5 |
| 2 | FlexiSpot E7H | — | 4 |
| 2 | KANADEMONO 天板 | — | 4 |
| 4 | FlexiSpot E8 | — | 3 |
| 4 | Herman Miller セイルチェア | — | 3 |
| 6 | BREENHILL フェルトデスクマット | — | 2 |
| 6 | FlexiSpot C7 Morpher | — | 2 |
| 6 | FlexiSpot E7 Pro | — | 2 |
| 6 | FlexiSpot 純正天板 | — | 2 |
| 6 | Herman Miller アーロンチェア | `aeron` | 2 |

ほか 7 機種が 2人（`rankings.json` 参照）。

### 充電器（`charger`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | Anker Nano Charging Station | — | 2 |

### タブレット・スマホスタンド等（`mobile`）

| 順位 | 機器 | cid | 人数 |
|---|---|---|---|
| 1 | Apple iPad Pro (M4) | — | 2 |
| 1 | Apple iPad Pro 11" (M5) | — | 2 |
| 1 | Apple iPad mini (A17 Pro) | — | 2 |

## 4. 目立った傾向

- **マウスはロジクールの独占状態。** マウス類を書いた 43人のうち 32人がロジクール製を使っていて、MX Master 3S（8人）と MX Master 4（3人）を合わせると MX Master 系が 11人。Apple Magic Trackpad も 8人と並びます。トラックボール（ERGO M575/M575S、MX ERGO/ERGO S、DEFT PRO）も 11人と多め。
- **モニターアームはエルゴトロン LX が一強（9人）。** 型番不明の「エルゴトロンのアーム」を含めるとエルゴトロンは 16人。次点は COFO 無重力モニターアーム Pro、Herman Miller（CBS）Flo、Amazonベーシック（各3人）。
- **モニターライトは BenQ ScreenBar 系がほぼ全部。** 照明を書いた 23人中 16人が BenQ（Halo 2・Pro 各4人、初代 Halo 3人、モデル不明4人など）。2025年後半以降の投稿では Halo 2 への乗り換えが目立ちます。
- **デスクは FlexiSpot が圧倒的。** 家具を書いた 44人中、FlexiSpot の昇降デスク（E7・E7H・E8・E7 Pro・E7Q・E7B・E7W・EF1・型番不明）を使うのは 22人。ただし型番は E7（5人）・E7H（4人）・E8（3人）と分散しています。天板は KANADEMONO（4人）が人気。チェアはセイルチェア（3人）、アーロン、Growspica（Elite/Pro 各2人）、SIHOO Doro C300 Pro など分散。
- **PC は Mac が中心。** PC を書いた 37人中 28人が Mac（MacBook Air M3 が 4人で最多）。ただし世代がばらけており（M1〜M5、Intel まで）、Windows 側は自作PC（4人）が多い。
- **モニターは最も分散しているカテゴリ。** 36機種が登場し、最多でも 2人。ウルトラワイド・大型（34〜45インチ）を使う人が約 17人と多く、27インチ 4K 一辺倒ではありません。Dell 製が 17人で最多ブランド。
- **マイクは Shure。** Shure SM7B が 5人で全カテゴリを通じても上位。MV7／MV7+ を含めると Shure は 10人。
- **キーボードは好みが割れる。** 42機種と分散し、最多は HHKB HYBRID Type-S と MX Keys Mini（各4人）。Keychron（7人・機種はばらばら）、REALFORCE、Lofree、NuPhy などロープロファイル／静電容量系が多め。
- **オーディオも分散（71機種）。** 2人に共通するのは AirPods 系、ATH-HL7BT、Kanto YU2、MOTU M2 程度。
- **ドックは CalDigit TS4（3人）が最多**、次いで BenQ beCreatus DP1310（2人）。ドックを書いた人自体が 19人と少なめです。

## 5. カタログ（`CATALOG`）に無い機器 — 追加候補

ランキング（2人以上）に入ったのに `CATALOG` に無いもの。公式ページは実際に開けたものだけ載せています（「—」は未確認）。「自作PC」は汎用の `win-desktop` で足りるので除外しました。

| カテゴリ | 機器 | 人数 | 公式ページ |
|---|---|---|---|
| PC | Apple Mac mini (M2 Pro) | 2 | [https://support.apple.com/ja-jp/111837](https://support.apple.com/ja-jp/111837)（Mac mini 2023 の技術仕様。M2 / M2 Pro 共通ページ） |
| PC | Apple MacBook Air (M1) | 2 | [https://support.apple.com/ja-jp/111883](https://support.apple.com/ja-jp/111883) |
| PC | Apple MacBook Air (M2) | 2 | [https://support.apple.com/ja-jp/111867](https://support.apple.com/ja-jp/111867) |
| PC | Apple MacBook Pro 14" (M1 Max) | 2 | [https://support.apple.com/ja-jp/111902](https://support.apple.com/ja-jp/111902)（MacBook Pro 14インチ 2021 の技術仕様） |
| PC | Apple MacBook Pro 14" (M3) | 2 | [https://support.apple.com/ja-jp/117735](https://support.apple.com/ja-jp/117735) |
| モニター | Dell U3223QE | 2 | [https://www.dell.com/support/product-details/ja-jp/product/u3223qe-monitor/overview](https://www.dell.com/support/product-details/ja-jp/product/u3223qe-monitor/overview) |
| モニター | Dell U4021QW | 2 | [https://www.dell.com/support/product-details/ja-jp/product/dell-u4021qw-monitor/overview](https://www.dell.com/support/product-details/ja-jp/product/dell-u4021qw-monitor/overview) |
| モニター | INNOCN 27D1U | 2 | [https://prtimes.jp/main/html/rd/p/000000315.000090223.html](https://prtimes.jp/main/html/rd/p/000000315.000090223.html)（INNOCN のプレスリリース） |
| ドック・ハブ | BenQ beCreatus DP1310 | 2 | [https://www.benq.com/ja-jp/docks-hubs/becreatus-dock/dp1310/spec.html](https://www.benq.com/ja-jp/docks-hubs/becreatus-dock/dp1310/spec.html) |
| キーボード | Apple Magic Keyboard（Touch ID・テンキー付き） | 2 | [https://www.apple.com/jp/shop/product/MXK73J/A](https://www.apple.com/jp/shop/product/MXK73J/A) |
| キーボード | EPOMAKER EK21 | 2 | — |
| キーボード | Keychron K8 Pro | 2 | [https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard](https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard) |
| キーボード | Lofree Flow Lite | 2 | [https://www.lofree.co/products/flow-lite84-mechanical-keyboard](https://www.lofree.co/products/flow-lite84-mechanical-keyboard) |
| マウス・トラックパッド・トラックボール | Logicool ERGO M575S | 3 | [https://www.logicool.co.jp/ja-jp/shop/p/ergo-m575s-wireless-trackball](https://www.logicool.co.jp/ja-jp/shop/p/ergo-m575s-wireless-trackball)（ページ名は ERGO M575SP） |
| マウス・トラックパッド・トラックボール | Logicool G502 X LIGHTSPEED | 2 | [https://gaming.logicool.co.jp/ja-jp/shop/p/g502-x-wireless-lightforce.910-006229](https://gaming.logicool.co.jp/ja-jp/shop/p/g502-x-wireless-lightforce.910-006229) |
| マウス・トラックパッド・トラックボール | Logicool MX ERGO | 2 | — |
| オーディオ | Apple AirPods 4 | 2 | — |
| オーディオ | Apple AirPods Max | 2 | — |
| オーディオ | Apple AirPods Pro 3 | 2 | [https://www.apple.com/jp/airpods-pro/specs/](https://www.apple.com/jp/airpods-pro/specs/) |
| オーディオ | Apple EarPods | 2 | — |
| オーディオ | Audio-Technica ATH-HL7BT | 2 | [https://www.audio-technica.co.jp/product/ATH-HL7BT](https://www.audio-technica.co.jp/product/ATH-HL7BT) |
| オーディオ | Kanto YU2 | 2 | — |
| オーディオ | MOTU M2 | 2 | [https://motu.com/en-us/products/m-series/m2/](https://motu.com/en-us/products/m-series/m2/) |
| カメラ・マイク | Shure SM7B | 5 | [https://www.shure.com/ja-JP/products/microphones/sm7b](https://www.shure.com/ja-JP/products/microphones/sm7b) |
| カメラ・マイク | FIFINE K688 | 3 | — |
| カメラ・マイク | Audio-Technica AT2020 | 2 | [https://www.audio-technica.co.jp/product/AT2020](https://www.audio-technica.co.jp/product/AT2020) |
| カメラ・マイク | Logicool G Blue Yeti | 2 | — |
| カメラ・マイク | Shure MV7（初代） | 2 | — |
| アーム・PCスタンド | COFO 無重力モニターアーム Pro | 3 | [https://cofo.jp/products/monitorarm-pro](https://cofo.jp/products/monitorarm-pro) |
| アーム・PCスタンド | Herman Miller Flo モニターアーム | 3 | — |
| アーム・PCスタンド | エルゴトロン HX モニターアーム | 2 | — |
| デスク・チェア・デスクマット | FlexiSpot E7H | 4 | [https://www.flexispot.jp/e7h.html](https://www.flexispot.jp/e7h.html) |
| デスク・チェア・デスクマット | KANADEMONO 天板 | 4 | — |
| デスク・チェア・デスクマット | FlexiSpot E8 | 3 | — |
| デスク・チェア・デスクマット | Herman Miller セイルチェア | 3 | [https://www.hermanmiller.com/products/seating/office-chairs/sayl-chairs/](https://www.hermanmiller.com/products/seating/office-chairs/sayl-chairs/) |
| デスク・チェア・デスクマット | BREENHILL フェルトデスクマット | 2 | — |
| デスク・チェア・デスクマット | FlexiSpot C7 Morpher | 2 | [https://www.flexispot.jp/c7-morpher.html](https://www.flexispot.jp/c7-morpher.html) |
| デスク・チェア・デスクマット | FlexiSpot E7 Pro | 2 | [https://www.flexispot.jp/e7-pro.html](https://www.flexispot.jp/e7-pro.html) |
| デスク・チェア・デスクマット | FlexiSpot 純正天板 | 2 | — |
| デスク・チェア・デスクマット | Palmwork パームワークチェア | 2 | — |
| デスク・チェア・デスクマット | Palmwork 電動昇降デスク | 2 | — |
| デスク・チェア・デスクマット | RASICAL Growspica Elite | 2 | — |
| デスク・チェア・デスクマット | RASICAL Growspica Pro | 2 | — |
| デスク・チェア・デスクマット | SIHOO Doro C300 Pro | 2 | — |
| デスク・チェア・デスクマット | YSAGi デスクマット | 2 | — |
| デスク・チェア・デスクマット | サンワサプライ デスクマット 600×300 | 2 | — |
| 充電器 | Anker Nano Charging Station | 2 | [https://www.anker.com/products/a91c8-100w-7-in-1-charging-station](https://www.anker.com/products/a91c8-100w-7-in-1-charging-station)（URLは7-in-1/100W版。投稿は容量表記なしのため版は未特定） |
| タブレット・スマホスタンド等 | Apple iPad Pro (M4) | 2 | — |
| タブレット・スマホスタンド等 | Apple iPad Pro 11" (M5) | 2 | — |
| タブレット・スマホスタンド等 | Apple iPad mini (A17 Pro) | 2 | [https://www.apple.com/jp/ipad-mini/specs/](https://www.apple.com/jp/ipad-mini/specs/)（現行 iPad mini の仕様ページ。A17 Pro 世代のままかは未確認） |

優先度の目安（アプリでの配置・接続計算に効くもの）:

1. **モニター**: Dell U3223QE（31.5" 4K・USB-C ハブ）、Dell U4021QW（40" 5120×2160・TB3/USB-C 90W）、INNOCN 27D1U（27" 4K・USB-C 65W）が各2人。
2. **ドック**: BenQ beCreatus DP1310（USB-C 上流 PD100W、HDMI 2.1／2.0、DP 1.2 の 3 画面出力）。
3. **マウス・キーボード**: Logicool ERGO M575S、MX ERGO（無印）、G502 X LIGHTSPEED、Apple Magic Keyboard（Touch ID・テンキー付き）、EPOMAKER EK21、Keychron K8 Pro、Lofree Flow Lite。
4. **マイク**: Shure SM7B（XLR。オーディオIF 必須という配線上の特徴あり）、FIFINE K688、Audio-Technica AT2020、Blue Yeti、Shure MV7（初代・micro-USB）。
5. **家具・アーム**: FlexiSpot E7H／E8／E7 Pro、COFO 無重力モニターアーム Pro、Herman Miller Flo、エルゴトロン HX。

カタログにあるのにこのサンプルで 1人も使っていなかった主な機器（汎用アイテムを除く）: Mac Studio（M4 Max／M5 Max）、MacBook Pro 14" M4 Pro・16" 全機種、M5 世代の Mac（`mba13-m5` / `mba15-m5` など。M5 MacBook Air は 1人いたがサイズ不明）、ThinkPad X1 Carbon Gen 13、Studio Display（TB5／XDR）、Dell U2724DE／U2725QE／U3425WE、LG 27UP850N／27UP850K／32UN880K、ASUS PA279CRV、EIZO 各機、CalDigit Element Hub、Belkin INC006、Anker のドック・ハブ3機種、REALFORCE R3 系・R3S 系（R3S は 30g 版の1人のみ）、Keychron Q1 Max／V1 Max、MX Keys S、MX Mechanical Mini、Apple Magic Keyboard（Touch ID・テンキーなし）、Edifier・PreSonus のスピーカー、C920n、Facecam MK.2、MX Brio、Insta360 Link 2、Elgato Key Light Air 系、ScreenBar Plus、エルゴヒューマン プロ2、Apple／Anker の充電器 8機種。

## 6. 限界と注意点

- **サンプルの偏り。** 検索エンジンで見つけやすい投稿（SEO の強いガジェットブログ、note の人気記事、アフィリエイト付きの YouTube 概要欄）に寄っています。デスクツアーを書く人自体が「ガジェット好き・Mac 好き」に偏っているため、一般の在宅ワーカーの実態とは違います。53人という規模では、2人と3人の差に大きな意味はありません。
- **X（旧Twitter）はゼロ件。** x.com の検索・投稿ページはログインなしでは表示されず（ログインページへリダイレクト）、読めませんでした。#デスクツアー の投稿は X に多いので、ここが最大の欠落です。
- **YouTube は概要欄とチャプターのみ。** 動画本編は見ていません。概要欄に型番がなくリンクだけの動画（RYO など）は使えず、リンク先の商品名も推測していません。なお youtube.com の視聴ページはこの環境から自動アクセス判定で開けなかったため、YouTube 公式の公開データ取得エンドポイント（視聴ページと同じ概要欄テキストを返すもの）で読みました。
- **記事内の商品リンク・画像は読んでいません。** 本文に名前が書かれていない機器（リンクカードや写真だけのもの）は記録していないため、実際に使っている機器より少なく数えています。note の多くは商品名がリンクカードの中にしかないため、特に過少になっています。
- **企業ブログは1記事から複数人。** ブレイン・ラボ（8人）の構成がランキングに影響しています（例: エルゴトロン LX、MX Master 3S、FlexiSpot E7/E7H）。企業ブログ分を除いても上位の顔ぶれはほぼ変わりません。
- **「使っている」の判断は本文の書き方に依存。** 「買ってよかった」系の記事（みつ、GOME、OVR. など）は、使用中と読めるものだけを記録しました。
- **日付。** 公開日はページのメタデータ（note・ブログは公開日時、YouTube は公開日）です。更新型の記事は最終更新日を使ったものがあります（トモ）。

## 7. 読めなかったページ・除外したページ

### 読めなかった（取得できなかった）

| URL | 状況 |
|---|---|
| https://note.com/akaserisa/n/n1583b72cf722 | HTTP 503（本文取得できず） |
| https://necco.inc/note/57154/ | TLS 接続エラー（SSL EOF）で取得できず |
| https://note.com/taroken2411/n/n9d730964b704 | HTTP 404（削除済み） |
| https://x.com/search?q=%23デスクツアー | ログインページへリダイレクト（X 全般） |
| https://www.youtube.com/watch?v=… （視聴ページ） | 自動アクセス判定（google.com/sorry）で開けず → 公開データ取得エンドポイントで概要欄を取得 |

### 読めたが対象外にした

| URL | 理由 |
|---|---|
| https://www.youtube.com/watch?v=dr52Ec_z2D8 | RYO（2026-01-10）。概要欄が Amazon 短縮リンクのみで型番の記載なし |
| https://www.youtube.com/watch?v=QSVB2dYTllI | DAW LESSON 鈴木編（2026-05-01）。機材名は「おすすめ機材」欄のみ |
| https://techblog.olta.co.jp/entry/2025/02/03/090333 | OLTA（2025-02-03）。機器名が画像内のみで本文に型番なし |
| https://tech-you.jp/category/gadget/desk-tour/ | ツヨシ。公開・更新日の記載がないため、同じ人の YouTube 版（2025-04-18）を採用 |
| https://totonoe.blog/desk-tour/ | えふぃる。2024-07 公開。同じ人の YouTube 版（2025-05-06）を採用 |
| https://www.zenbutsu.com/2025/01/26/desktour2025/ | しょうご（前略、物欲が止まりません。）。同じ人の YouTube 版を採用 |
| https://note.com/takahiro_mono/n/nb9f275aa96bb | タカヒロ。同日公開のブログ版（digital-style.jp）が詳しいためそちらを採用 |
| https://note.com/machi11/n/n34bd8af35f08 | まち の 2025年2月版。より新しい 2026年3月版を採用 |
| https://ryuforest.com/desk-tour/ | よは の 2025年5月版。2026年1月版を採用 |
| https://note.com/bingo10/n/n2f0de7e22381 | bingo+ の変遷記事（2025年）。2026年1月版を採用 |
| https://note.com/gome_web/n/nd696158123f6 | GOME の 2025年10月版。2026年5月版を採用 |
| https://www.youtube.com/watch?v=hQWM9bz_YAM | ちから の 2025年8月版。2025年12月版を採用 |
| https://www.youtube.com/watch?v=j7Plx1XPm1E | ちから の 2025年10月版（デスクアップデート）。同上 |
| https://indoorheart.com/desk-gadget-goods-2024-2025 | ゆう の引っ越し前（〜2025年11月）版。最新版（indoorheart.com/desk-gadget-goods）を採用 |
| https://note.com/hin0arashi/n/n531f857bbcfd | 2023-01 公開（期間外） |
| https://note.com/dev_onecareer/n/n7117bc0775d9 | 2023-10 公開（期間外） |
| https://note.com/mottyzzz/n/n49f1baadc0de | 2024-02 公開（期間外） |
| https://zenn.dev/wwwave/articles/dd2198eeb9ee2a | 2024-08 公開（期間外） |
| https://kazoo512.hatenablog.com/entry/DeskTour2025 | タイトルは2025年だが 2024-12-17 公開（期間外） |
| https://mainoriti.com/archives/23678 | 2024-11 公開、本文に型番の一覧なし |
| https://solblog.org/macbook-desk-tour/ | 2021 公開・2024-08 更新（期間外） |
| https://note.com/kojimadev/n/n2ab008855b84 | 2024-12-30 公開（期間外） |
| https://recruit.h-t.co.jp/blog/2025-10-08 | ヒューマンテクノロジーズの1人目（2016年入社・親指トラックボール）は型番の記載がないため除外（他2人は採用） |
