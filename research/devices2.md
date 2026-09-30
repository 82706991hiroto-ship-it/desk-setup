# デバイス調査 第2回（2026年9月30日時点）

クリエイターのランキング（[`rankings.json`](rankings.json)）に出てくるのにカタログ（`CATALOG`）にない機材の仕様を集めた記録です。形式とルールは第1回（[`devices.md`](devices.md) / [`devices.json`](devices.json)）と同じです。機械で読む版は [`devices2.json`](devices2.json) にあります。

- 各項目の `rankingName` はランキングでの名前そのままです（アプリ側でランキングとカタログをつなぐため）。
- 寸法は **幅 × 奥行 × 高さ（cm）**。モニターはスタンド込みで、高さは机から画面上端まで（いちばん低くしたとき）。ノートPCは閉じた状態で、高さは厚さ。イヤホンは充電ケース、タブレットは平置き。
- 価格は税込・円。公式ストアの価格を優先し、なければ価格.comの最安値。確認日はすべて 2026-09-30（`priceDate` は第1回と同じ `2026-09`）。販売終了で価格が取れないものは `null`。
- 信頼度: **high** = メーカー公式の仕様ページ／マニュアル、**medium** = 販売店・レビュー・計算値を含む、**low** = 情報が食い違う・ほとんど確認できない。
- 確認できなかった値は `?` / `null` のまま。推測で埋めていません。
- モニターアームと家具は接続チェックの対象外なので、spec は `{ conn: [] }`、寸法は `null` で、価格とサイズ（デスク・マットは幅×奥行、昇降デスクは高さの範囲）をメモに書いています。

全 50 件（新規 49 件、既存に対応づけ 1 件）。`id` はどれも既存の `CATALOG` の id と重なりません（`mba-m2` は既存への対応づけ）。

## 1. カテゴリ別の一覧

### PC

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `macmini-m2pro` | Apple Mac mini (M2 Pro) | Mac mini (M2 Pro) | tb×4, usba×2, hdmi×1 / 映像 tb:dp1.4, hdmi:? / 外部 3台 / 充電 —W / MagSafe なし | 19.7 × 19.7 × 3.58 | — | high | [1](https://support.apple.com/ja-jp/111837) |
| `mba-m1` | Apple MacBook Air (M1) | MacBook Air (M1) | tb×2 / 映像 tb:dp1.4 / 外部 1台 / 充電 30W / MagSafe なし | 30.41 × 21.24 × 1.61 | — | high | [1](https://support.apple.com/ja-jp/111883) |
| `mba-m2`（→ 既存 `mba-m2`） | Apple MacBook Air (M2) | MacBook Air 13" (M2) | tb×2 / 映像 tb:dp1.4 / 外部 1台 / 充電 30W / MagSafe あり | 30.41 × 21.5 × 1.13 | — | high | [1](https://support.apple.com/ja-jp/111867) |
| `mbp14-m1max` | Apple MacBook Pro 14" (M1 Max) | MacBook Pro 14" (M1 Max) | tb×3, hdmi×1 / 映像 tb:dp1.4, hdmi:? / 外部 4台 / 充電 96W / MagSafe あり | 31.26 × 22.12 × 1.55 | — | high | [1](https://support.apple.com/ja-jp/111902) |
| `mbp14-m3` | Apple MacBook Pro 14" (M3) | MacBook Pro 14" (M3) | tb×2, hdmi×1 / 映像 tb:dp1.4, hdmi:? / 外部 1台 / 充電 70W / MagSafe あり | 31.26 × 22.12 × 1.55 | — | high | [1](https://support.apple.com/ja-jp/117735) |

<details><summary>メモ</summary>

- `macmini-m2pro`: 2023年モデル。販売終了のため価格なし。Thunderbolt 4 ×4・USB-A（5Gb/s）×2・HDMI。外部ディスプレイは最大3台（TB 6K60 ×2 + HDMI 4K60）、2台なら HDMI 4K144。HDMI は 8K60 / 4K240 まで対応と記載があるが、HDMI のバージョン表記はない（null）。Thunderbolt の映像は「USB-C経由でDisplayPort出力」とだけあり、dp1.4 は既存カタログと同じ扱い。
- `mba-m1`: 2020年モデル。販売終了のため価格なし。Thunderbolt / USB 4 ×2（Thunderbolt 3）、外部ディスプレイ1台（6K60）。30W USB-C電源アダプタ付属。MagSafe なし（USB-C 充電）。高さは 0.41〜1.61cm（くさび形）の最大値。
- `mba-m2`: ランキングの元の表記は「Apple MacBook Air M2」「M2 Macbook Air」でサイズの指定なし。15インチ(M2)は「15」と明記されるはずなので 13インチと判断し、既存の mba-m2 に対応させる（新規追加なし）。仕様と寸法は research/devices.json の mba-m2 と同じ。
- `mbp14-m1max`: 2021年モデル。販売終了のため価格なし。Thunderbolt 4 ×3・HDMI・SDXC・MagSafe 3。M1 Max は外部ディスプレイ最大4台（TB 6K ×3 + HDMI 4K60 ×1）。HDMI は「最大4K解像度、60Hz」（バージョン記載なし → null）。96W USB-C電源アダプタ付属（M1 Pro 8コアCPUは67W）。
- `mbp14-m3`: 2023年11月モデル（無印M3）。販売終了のため価格なし。Thunderbolt / USB 4 ×2（Thunderbolt 3）・HDMI・SDXC・MagSafe 3。外部ディスプレイ1台（TB 6K60、または HDMI 4K120）。HDMI のバージョン記載なし（null）。70W付属、96Wで高速充電。技術仕様ページには蓋を閉じたときの2台表示の記載がないため clamDisp は入れていない。ランキングの表記は「M3 MacBook Pro」でサイズ不明だが、M3 無印は14インチのみ。

</details>

### モニター

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `u3223qe` | Dell U3223QE | Dell U3223QE | 3840×2160 60Hz / 入力 usbc:dp1.4, hdmi:hdmi2.0, dp:dp1.4 / 給電 90W / DSC あり / ハブ usba×5, usbc×1 | 71.26 × 23.32 × 46.93 | — | high | [1](https://dl.dell.com/content/manual12109242-dell-u2723qe-monitor-user-s-guide.pdf?language=en-us) [2](https://kakaku.com/item/K0001435786/) |
| `u4021qw` | Dell U4021QW | Dell U4021QW | 5120×2160 60Hz / 入力 tb:dp1.4, hdmi:hdmi2.0, dp:dp1.4 / 給電 90W / DSC ? / ハブ usba×5, usbc×1 | 94.66 × 24.8 × 45.78 | — | high | [1](https://dl.dell.com/manuals/all-products/esuprt_electronics_accessories/esuprt_electronics_accessories_monitors/dell-u4021qw-monitor_user's-guide_en-us.pdf) [2](https://kakaku.com/item/K0001333946/) |
| `innocn-27d1u` | INNOCN 27D1U | INNOCN 27D1U | 3840×2160 60Hz / 入力 usbc:?, hdmi:hdmi2.0, dp:dp1.4 / 給電 65W / DSC ? / ハブ なし | 61.43 × 19.53 × ? | 32,500円 | medium | [1](https://jp.innocn.com/products/innocn-27d1u-27inch-4k-hdr-procolor-monitor) [2](https://prtimes.jp/main/html/rd/p/000000315.000090223.html) [3](https://www.hidetoshitwitt.com/innocn-27d1u-review/) |

<details><summary>メモ</summary>

- `u3223qe`: U2723QE と共通の取扱説明書。USB-C（DP1.4 with DSC、PD 90W）・DP 1.4 with DSC・HDMI 2.0・DP出力・RJ45。USB-A ×5（背面4＋前面クイックアクセス1）、USB-C 下流 ×1（15W）。スタンド込み高さ 469.34〜618.77mm。Dell 日本ストアは販売ページなし、価格.comも価格登録なし（販売終了とみられる）。
- `u4021qw`: 39.7インチ曲面 5K2K。上流は Thunderbolt 3（DP 1.4 Alt・PD 90W）、ほかに USB-B 上流あり。HDMI 2.0 は2系統だが 5120×2160 は 30Hz まで（取扱説明書の表）。DP 1.4 は 60Hz。DSC の記載なし（null）。USB-A 10Gbps ×5（うち1つ BC1.2）、USB-C 下流 ×1（15W）、RJ45。下流の Thunderbolt はなし。スタンド込み高さ 457.8〜577.3mm。価格.comは価格登録なし（販売終了とみられる）。
- `innocn-27d1u`: 公式（INNOCN Japan）: 接続端子 HDMI2.0(60Hz)×1、DP1.4(60Hz)×1、Type-C（65W給電, 60Hz）。USB-C の DP のバージョン・DSC は記載なし。USB-A などのハブはない（公式の端子一覧に記載なし、レビューでも「USB-Aポートなどは非搭載」）。公式ストア価格 32,500円（確認時は売り切れ）。寸法は公式に記載がなく、レビュー記事の仕様表（Amazon の商品情報）「513 × 614.3 × 195.3mm」を使用。高さ 51.3cm が最低位置か最高位置か不明のため高さは null（dimAsListed に元の値。高さ調整幅は 100mm）。

</details>

### ドック・ハブ

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `benq-dp1310` | BenQ beCreatus DP1310 | BenQ beCreatus DP1310 | 上流 usbc / usbc×1, usba×5, hdmi×2, dp×1 / 映像 hdmi:hdmi2.0, dp:dp1.2 / PD 100W | 15.6 × 10.3 × 4 | — | high | [1](https://www.benq.com/ja-jp/docks-hubs/becreatus-dock/dp1310/spec.html) [2](https://www.atpress.ne.jp/news/378493) [3](https://kakaku.com/item/K0001665772/) |

<details><summary>メモ</summary>

- `benq-dp1310`: 上流は USB-C（10Gbps・PD 100W）と HDMI 2.1 入力の2系統（ボタンで切替）。映像出力は HDMI 2.1（OUT1）・HDMI 2.0（OUT2）・DisplayPort 1.2（OUT3）。USB-C 入力からは3画面とも 4K60 まで（OUT1 の 8K60 / 4K120 は HDMI 2.1 入力のときだけ）なので out.hdmi は hdmi2.0 とした。USB-C 下流 ×1（10Gbps・PD 36W、前面）、USB-A 10Gbps ×3（7.5W）＋ USB 2.0 ×2、RJ45、3.5mm。180W ACアダプター付属。公式ストアの価格は動的表示で取得できず、価格.comも価格登録なし（発売時オープン価格）。

</details>

### キーボード

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `magic-kb-numpad` | Apple Magic Keyboard（Touch ID・テンキー付き） | Apple Magic Keyboard（Touch ID・テンキー付き） | bt, usbc | 41.87 × 11.49 × 1.09 | 25,800円 | high | [1](https://www.apple.com/jp/shop/product/MXK73J/A) [2](https://www.apple.com/jp/shop/product/MXK83J/A) |
| `epomaker-ek21` | EPOMAKER EK21 | EPOMAKER EK21（テンキー） | bt, receiver, usbc | 9.3 × 13.8 × 2.9 | 6,600円 | medium | [1](https://epomaker.jp/products/epomaker-ek21) [2](https://epomaker.com/products/epomaker-ek21) [3](https://keeb-finder.com/keyboards/epomaker-ek21) |
| `keychron-k8-pro` | Keychron K8 Pro | Keychron K8 Pro | bt, usbc | 35.9 × 12.7 × ? | 18,480円 | medium | [1](https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard-japan-jis-layout) [2](https://www.keychron.com/products/keychron-k8-pro-qmk-via-wireless-mechanical-keyboard) [3](https://kakaku.com/item/K0001472358/) |
| `lofree-flow-lite` | Lofree Flow Lite | Lofree Flow Lite (84) | bt, receiver, usbc | 31.68 × 13.8 × 2.35 | 14,394円 | medium | [1](https://www.lofree.co/products/flow-lite84-mechanical-keyboard) [2](https://kakaku.com/item/K0001668702/) [3](https://kakaku.com/item/K0001697131/) |

<details><summary>メモ</summary>

- `magic-kb-numpad`: Appleシリコン搭載Mac用、USB-C 版（JIS）。ホワイトキー 25,800円、ブラックキー 27,800円。高さ 0.41〜1.09cm。Bluetooth／USB-C（ケーブル接続でペアリング・充電）。
- `epomaker-ek21`: 21キーのテンキーパッド。公式: 有線・Bluetooth・2.4GHz の3モード、1000mAh。価格は EPOMAKER 日本公式ストア 6,600円。寸法は公式ページに記載がなく、比較サイト keeb-finder の「29 x 138 x 93 mm」を W93 × D138 × H29 と解釈（向きは推定ではなく、小さい値を高さとした）。
- `keychron-k8-pro`: TKL（80%）。公式: Bluetooth（3台）＋有線 USB-C。2.4GHz レシーバーはなし。寸法は JIS 版 359 × 127mm（ANSI 版は 355 × 123mm）、高さは公式ページのテキストに記載なし。価格は価格.com最安（ANSI・White LED・ホットスワップモデル K8P-G2）。JIS 版は公式グローバルストアで US$89.99。
- `lofree-flow-lite`: 公式: 2.4GHz・Bluetooth 5.4・USB-C 有線、2,000mAh、316.8 × 138 × 23.5mm（84キー）。価格は価格.com最安（84キー oe921w）。JIS 配列版（oe921wj）は 19,602円。フルサイズの Flow Lite100 もある。公式の日本語ページはなく英語ページを使用。

</details>

### マウス・トラックボール

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `ergo-m575s` | Logicool ERGO M575S | Logicool ERGO M575SP（トラックボール） | bt, receiver | 10 × 13.4 × 4.8 | 8,470円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/ergo-m575s-wireless-trackball) |
| `g502x-lightspeed` | Logicool G502 X LIGHTSPEED | Logicool G G502 X LIGHTSPEED | receiver, usbc | 7.92 × 13.14 × 4.11 | 19,360円 | high | [1](https://gaming.logicool.co.jp/ja-jp/shop/p/g502-x-wireless-lightforce) |
| `mx-ergo` | Logicool MX ERGO | Logicool MX ERGO（MXTB1s・初代） | bt, receiver | 9.98 × 13.25 × 5.14 | 15,500円 | medium | [1](https://kakaku.com/item/K0000994765/) [2](https://kakaku.com/item/K0000994765/spec/) |

<details><summary>メモ</summary>

- `ergo-m575s`: 公式ページの名称は M575SP（Logi Bolt レシーバー付属。M575S はその前の型番）。Bluetooth Low Energy または Logi Bolt。単三電池1本。寸法は公式の 高さ134 × 幅100 × 奥行48mm を W × D × H に読み替え（既存 MX Master 3S と同じ扱い）。ページに 7,700円 の表示もある（セールまたは色違い）。
- `g502x-lightspeed`: LIGHTSPEED USB-A レシーバー＋USB-C 充電ケーブル付属（Bluetooth なし）。幅79.2 × 長さ131.4 × 高さ41.1mm。公式ページは現在 HERO 44K センサー版の説明になっている。
- `mx-ergo`: 初代（2017年、Micro-USB 充電、Unifying レシーバー）。ロジクール公式の製品ページはなくなっていて（後継は MX ERGO S、既存 mx-ergo-s）、仕様・価格は価格.comを使用。Bluetooth＋無線2.4GHz（Unifying）、164g（プレートなし）。寸法 132.5 × 99.8 × 51.4mm。

</details>

### オーディオ

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `airpods-4` | Apple AirPods 4 | Apple AirPods 4 | bt | 5.01 × 2.12 × 4.62 | 17,900円 | high | [1](https://support.apple.com/ja-jp/121203) [2](https://support.apple.com/ja-jp/121204) [3](https://kakaku.com/item/K0001651423/) |
| `airpods-max` | Apple AirPods Max | Apple AirPods Max（USB-C） | bt, usbc | 16.86 × 8.34 × 18.73 | 56,000円 | high | [1](https://support.apple.com/ja-jp/121205) [2](https://support.apple.com/ja-jp/111858) [3](https://kakaku.com/item/K0001651426/) |
| `airpods-pro-3` | Apple AirPods Pro 3 | Apple AirPods Pro 3 | bt | 6.22 × 2.18 × 4.72 | 42,800円 | high | [1](https://www.apple.com/jp/airpods-pro/specs/) [2](https://www.apple.com/jp/shop/buy-airpods/airpods-pro-3) |
| `earpods` | Apple EarPods | Apple EarPods（USB-C） | usbc | — | 2,980円 | medium | [1](https://www.apple.com/jp/shop/product/MYQY3FE/A) [2](https://www.apple.com/jp/shop/product/MWU53FE/A) |
| `ath-hl7bt` | Audio-Technica ATH-HL7BT | Audio-Technica ATH-HL7BT | bt | — | 13,860円 | high | [1](https://www.audio-technica.co.jp/product/ATH-HL7BT) [2](https://kakaku.com/item/K0001397166/) |
| `kanto-yu2` | Kanto YU2 | Kanto YU2 | ? | 10 × 13.5 × 15 | 35,613円 | low | [1](https://kakaku.com/item/K0001594621/spec/) [2](https://kakaku.com/item/K0001594622/) |
| `motu-m2` | MOTU M2 | MOTU M2（オーディオインターフェース） | usbc | 19.05 × 10.8 × 4.5 | 35,970円 | high | [1](https://motu.com/en-us/products/m-series/m2/specs/) [2](https://kakaku.com/item/K0001214536/) |

<details><summary>メモ</summary>

- `airpods-4`: Bluetooth 5.3、ケースは USB-C。寸法は充電ケース（幅50.1 × 厚さ21.2 × 高さ46.2mm）。Apple Store では AirPods 5 に置き換わっていて販売なし。価格は価格.com最安（MXP63J/A）。ノイズキャンセリング搭載モデル（MXP93J/A）は 22,999円。
- `airpods-max`: ランキングに「AirPods Max（USB-C）」の表記があるため USB-C 版（2024年）を採用。Bluetooth 5.0、USB-C で充電・有線ロスレス再生。幅168.6 × 奥行83.4 × 高さ187.3mm、386.2g。Lightning 版（初代, 2020）は同寸法で 384.8g。Apple Store では AirPods Max 2 に置き換わっている。価格は価格.com最安（スターライト。ミッドナイトは 56,912円）。
- `airpods-pro-3`: 現行品。ケースは USB-C／MagSafe／Qi。寸法は充電ケース（幅62.2 × 厚さ21.8 × 高さ47.2mm）。Bluetooth のバージョンは仕様ページで未確認。
- `earpods`: 有線イヤホン。USB-C 版・3.5mm ヘッドフォンプラグ版とも 2,980円（Apple Store）。ランキングの表記では端子が分からないため、現行の USB-C 版を入れた（3.5mm 版なら conn は []、Lightning 版は Apple Store で販売終了）。寸法の記載なし。
- `ath-hl7bt`: 開放型ワイヤレスヘッドホン。Bluetooth 5.0（マルチポイント）、充電は USB-C（30cm USB-A→C ケーブル付属）、3.5mm 有線コード付属。約220g。寸法の記載なし。価格は価格.com最安。
- `kanto-yu2`: 1台あたり 幅100 × 高さ150 × 奥行135mm（2台1組）。AC 電源、ミニプラグ入力・USB 音声入力・サブウーファー出力。USB の端子形状は確認できず conn は null。Kanto 公式サイトの製品一覧に YU2 が見当たらず（YU4 / YU6 のみ）、仕様・価格は価格.com（マットホワイト最安。マットブラック 44,634円）。
- `motu-m2`: 2in/2out。USB-C（USB 2.0 オーディオクラス準拠）、USB バスパワー（消費電力の記載なし → chargeW なし）。寸法は筐体のみ W × D × H。XLR/TRS コンボ入力 ×2（48V ファンタム）、MIDI 入出力。価格は価格.com最安。

</details>

### カメラ・マイク

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `sm7b` | Shure SM7B | Shure SM7B | —（XLR・非接続） | — | 59,799円 | high | [1](https://kanjitsu.com/product/sm7b/) [2](https://pubs.shure.com/view/guide/SM7B/en-US.pdf) [3](https://kakaku.com/item/K0000005405/) |
| `fifine-k688` | FIFINE K688 | FIFINE AmpliTank K688 | ? | — | — | low | [1](https://fifinemicrophone.com/products/fifine-amplitank-k688-microphone) |
| `at2020` | Audio-Technica AT2020 | Audio-Technica AT2020 | —（XLR・非接続） | — | 13,068円 | high | [1](https://www.audio-technica.co.jp/product/AT2020) [2](https://kakaku.com/item/K0000154602/) [3](https://kakaku.com/item/K0001661980/) |
| `blue-yeti` | Logicool G Blue Yeti | Logicool G Yeti（Blue Yeti） | ? | 12.5 × 12 × 29.5 | 24,750円 | medium | [1](https://gaming.logicool.co.jp/ja-jp/shop/p/yeti-premium-usb-microphone) [2](https://kakaku.com/item/K0001412411/) |
| `mv7` | Shure MV7（初代） | Shure MV7（初代） | usbc, usba | — | 31,980円 | medium | [1](https://pubs.shure.com/view/guide/MV7/en-US.pdf) [2](https://kakaku.com/item/K0001309893/) |

<details><summary>メモ</summary>

- `sm7b`: XLR 出力のダイナミックマイク（ファンタム電源不要）。PC に直接つなげないため、オーディオインターフェースが必要（conn は []）。298g（国内代理店の仕様。Shure のユーザーガイドは 0.764kg で食い違い）。デスクスタンドは付属せず（ヨーク付きでマイクスタンド／アームに取り付ける）ため dim は null。寸法図は PDF の画像のみ。価格は価格.com最安。
- `fifine-k688`: USB と XLR の両方で使えるダイナミックマイク。本体は USB-C 端子とされるが、付属ケーブルの PC 側の形状は公式ページのテキストで確認できず conn は null。XLR で使う場合はオーディオインターフェースが必要。単品はショックマウント付き・スタンドなし（デスクスタンド付きバンドルもある）ため dim は null。日本の公式価格・価格.comの登録なし（公式グローバルストア US$72.99）。ランキングの K688W は白色版とみられる。
- `at2020`: XLR（3ピンXLR-M）のコンデンサーマイク。48V ファンタム電源が必要なので、オーディオインターフェースが必要（conn は []）。長さ160mm・最大径52mm・345g。付属はスタンドマウント AT8466（デスクスタンドなし）のため dim は null。USB 版の AT2020USB-X は別製品。価格は価格.com最安（ランキングの「AT2020 CWH」は白の限定色で 22,000円）。
- `blue-yeti`: USB マイク（デスクトップスタンド付属）。公式は「USBケーブル」とだけ書いていて、端子の形状（PC 側・マイク側）は確認できず conn は null。寸法は公式の 高さ29.5 × 幅12.5 × 長さ12cm を使用。公式ページには「スタンド」「マイクのみ」「スタンドに装着時」の3区分があるが寸法は1組しか出ていないため、スタンド装着時とみなした。重量は 0.5 / 0.88 / 1.4kg。公式ストア価格 24,750円（価格.com最安 22,418円）。
- `mv7`: 初代 MV7（2020年）。マイク側は Micro-B USB と XLR。Micro-B→USB-A と Micro-B→USB-C の2本のケーブルが付属（Shure ユーザーガイド）。USB バスパワー、ファンタム電源不要。0.55kg。デスクスタンドは付属しないため dim は null（ヨーク込みの寸法図は PDF の画像のみ）。後継は MV7+（既存 mv7plus）。価格は価格.com最安（MV7-K-J）。

</details>

### モニターアーム

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `cofo-arm-pro` | COFO 無重力モニターアーム Pro | COFO Monitor Arm Pro（シングル） | — | — | 21,980円 | high | [1](https://cofo.jp/products/monitorarm-pro) |
| `flo-arm` | Herman Miller Flo モニターアーム | Herman Miller Flo モニターアーム | — | — | 51,700円 | medium | [1](https://hermanmiller.co.jp/products/flo-now-monitor-arm) [2](https://www.casestudynagoya.jp/SHOP/cbs-flo-monitor-arms.html) |
| `ergotron-hx` | エルゴトロン HX モニターアーム | エルゴトロン HX デスクモニターアーム | — | — | 43,205円 | medium | [1](https://kakaku.com/item/K0000940923/) [2](https://kakaku.com/item/K0001322422/) [3](https://kakaku.com/item/K0000965619/) [4](https://www.monotaro.com/g/04436745/) |

<details><summary>メモ</summary>

- `cofo-arm-pro`: 公式ストア価格 シングル 21,980円、デュアル 32,980円。耐荷重 約2.5〜14kg（各アーム）、推奨 17〜40インチ、VESA 75/100。全体寸法 シングル 567×115×592mm。クランプ 10〜50mm、グロメット 10〜55mm。
- `flo-arm`: 価格はハーマンミラーストアの現行「フローモニターアーム」（Flo Now）51,700円。現行品は 2〜7kg、最大32インチ（16:9）/34インチ（21:9）、VESA 75/100。旧 Flo（ランキングの「CBS Flo」）は 2025年4月の Flo Now 発売で在庫販売終了、耐荷重は 2.7〜9kg（正規販売店の情報）。
- `ergotron-hx`: エルゴトロン公式サイトはアクセスできず（403）、販売店の情報を使用。9.1〜19.1kg、49インチまで、クランプ 66mm 厚まで。価格は価格.com最安（ホワイト 45-475-216。アルミ 44,220円、マットブラック 46,500円）。

</details>

### デスク・チェア・マット

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `flexispot-e7h` | FlexiSpot E7H | FlexiSpot E7H 電動昇降デスク（脚のみ） | — | — | 63,800円 | high | [1](https://www.flexispot.jp/e7h.html) |
| `kanademono-top` | KANADEMONO 天板 | KANADEMONO THE BOARD（天板） | — | — | 35,800円 | medium | [1](https://kanademono.design/products/tt-k03-un) [2](https://kanademono.design/products/tt-k29-xl) |
| `flexispot-e8` | FlexiSpot E8 | FlexiSpot E8 電動昇降デスク（脚のみ） | — | — | 66,000円 | high | [1](https://www.flexispot.jp/e8-bamboo.html) |
| `sayl` | Herman Miller セイルチェア | Herman Miller セイルチェア | — | — | 116,600円 | high | [1](https://hermanmiller.co.jp/products/sayl-chair) |
| `breenhill-mat` | BREENHILL フェルトデスクマット | BREENHILL フェルトデスクマット | — | — | — | low | [1](https://www.amazon.co.jp/dp/B0CGMXRFWF) [2](https://www.amazon.co.jp/dp/B0C16R4SGF) |
| `flexispot-c7-morpher` | FlexiSpot C7 Morpher | FlexiSpot C7 Morpher（オフィスチェア） | — | — | 96,800円 | high | [1](https://www.flexispot.jp/c7-morpher.html) |
| `flexispot-e7-pro` | FlexiSpot E7 Pro | FlexiSpot E7 Pro 電動昇降デスク（脚のみ） | — | — | 61,600円 | high | [1](https://www.flexispot.jp/e7-pro.html) |
| `flexispot-top` | FlexiSpot 純正天板 | FlexiSpot 純正天板 | — | — | 9,900円 | medium | [1](https://www.flexispot.jp/desktop-rectangle.html) [2](https://www.flexispot.jp/solid-wood-tabletop.html) [3](https://www.flexispot.jp/e7h.html) |
| `palmwork-chair` | Palmwork パームワークチェア | Palmwork パームワークチェア | — | — | 79,000円 | high | [1](https://palmwork.jp/palmwork-chair) |
| `palmwork-desk` | Palmwork 電動昇降デスク | Palmwork パームワーク昇降デスク | — | — | 99,000円 | low | [1](https://luminochrome.jp/archives/palmwork-desk.html) |
| `growspica-elite` | RASICAL Growspica Elite | Rasical GrowSpica Elite | — | — | 71,840円 | medium | [1](https://kakaku.com/item/K0001639104/) [2](https://www.rasical.com/products/growspica-workchair-elite) |
| `growspica-pro` | RASICAL Growspica Pro | Rasical GrowSpica Pro | — | — | — | low | [1](https://store.shopping.yahoo.co.jp/seedsneeds/growspicapro-bai.html) [2](https://no-review-no-life.com/rasical-growspica-compare-elite-pro/) |
| `sihoo-c300-pro` | SIHOO Doro C300 Pro | SIHOO Doro C300 Pro | — | — | 74,999円 | high | [1](https://sihoooffice.co.jp/products/sihoo-c300-pro) [2](https://sihoooffice.co.jp/products/sihoo-c300-pro-v2) |
| `ysagi-mat` | YSAGi デスクマット | YSAGi PUレザー デスクマット | — | — | — | low | [1](https://www.amazon.co.jp/dp/B08CZ28H7K) [2](https://www.amazon.co.jp/dp/B0BZYT4J7C) |
| `sanwa-mat-6030` | サンワサプライ デスクマット 600×300 | サンワサプライ フェルトデスクマット 600×300（MPD-FLT2BK） | — | — | 1,298円 | high | [1](https://www.esupply.co.jp/ItemPage/MPD-FLT2BK) |

<details><summary>メモ</summary>

- `flexispot-e7h`: 公式ストア 63,800円（脚フレームのみ）。昇降範囲 63.5〜128.5cm、脚幅 110〜190cm、耐荷重 160kg、デュアルモーター・3段。対応天板 幅120〜200 × 奥行60〜80cm × 厚み2cm以上。
- `kanademono-top`: サイズ・素材を選ぶオーダー天板で価格は構成で大きく変わる。price は公式ストアの最安構成（THE BOARD / ラバーウッド 無塗装）。リノリウム（ランキングに「リノリウム天板」あり）は W161〜180cm で 92,000円。ランキングの例: 140×70cm、180×72cm。
- `flexispot-e8`: 公式ストア 66,000円（脚フレームのみ、天板「無し」を選んだ場合）。昇降範囲 60〜125cm、脚幅 110〜190cm、耐荷重 125kg、楕円形の支柱・3段。対応天板 幅120〜200 × 奥行60〜80cm × 厚み2cm以上。
- `sayl`: ハーマンミラーストアの最安構成（ブラックフレーム/ブラックベース）116,600円。フレーム・ベース・張地で 122,100〜145,200円、ゲーミングエディションは 134,200円。
- `breenhill-mat`: Amazon 専売ブランド。ランキングの例は 120×50cm（ほかに 90×40×0.3cm など）。Amazon のページは取得できず、検索結果の抜粋では 120×50cm が 3,106円（未確認のため price は null）。
- `flexispot-c7-morpher`: 公式ストア 96,800円。幅70 × 奥行71.5 × 高さ108〜141.5cm、座面高 44.5〜53.4cm、リクライニング 90〜135°（最大160°）、耐荷重 136kg、26.6kg。
- `flexispot-e7-pro`: 公式ストア 61,600円（脚フレームのみ）。コの字型フレーム（支柱が奥）。昇降範囲 60〜125cm、脚幅 110〜190cm、耐荷重 100kg、デュアルモーター・3段。対応天板 幅120〜200 × 奥行60〜80cm × 厚み2cm以上。
- `flexispot-top`: price は公式ストアの長方形メラミン天板の最安（100×60×2.5cm）。サイズは 100×60 / 120×60 / 140×70 / 160×70 / 180×80cm（ランキングの「天板 160」は 160×70cm）。無垢材天板（140×70×2.5cm）は 56,800円。ランキングの「無垢材天板ウォールナット」の単品価格はページから取れなかった。
- `palmwork-chair`: 公式ストア 79,000円（税込。定価表示 99,000円）。ヘッドレストは別売 9,900円。120日間の返品・返金保証。
- `palmwork-desk`: 公式サイトの製品一覧から消えていて（https://palmwork.jp/palmwork-desk は現在ページなし）、販売終了とみられる。仕様・価格はレビュー記事に載っていた公式情報: 天板 120/140/160 × 60 × 2.5cm（無垢ラバーウッド）、昇降範囲 61〜125cm、積載 125kg、価格 120cm 99,000円・140cm 105,000円・160cm 111,000円。
- `growspica-elite`: RASICAL 公式ストアでは販売ページがトップへ転送され、交換パーツのみ掲載（後継は Rasical Chair Elite、79,999円）。価格は価格.com最安（ブラック）。
- `growspica-pro`: 公式ストアに販売ページなし（販売終了とみられる）、価格.comにも登録なし。価格は確認できず null。
- `sihoo-c300-pro`: SIHOO 日本公式ストアの通常価格 74,999円（セール 63,199円）。フットレスト付きは 83,999円。後継の C300 PRO V2 は 90,099円（セール 72,079円）。
- `ysagi-mat`: Amazon 専売ブランドの PU レザーマット。サイズは 60×35 / 80×40 / 90×43 / 100×55cm などがある。Amazon のページは取得できず、価格は未確認（null）。
- `sanwa-mat-6030`: W600 × D300 × H4mm、約290g、表面フェルト・裏面天然ゴム。価格はサンワダイレクト（サンワサプライ直販）。グレーは MPD-FLT2GY。

</details>

### 充電器

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `anker-nano-station` | Anker Nano Charging Station | Anker Nano Charging Station (6-in-1, 67W) | usbc×2, usba×2 / 合計 65W / 1ポート最大 67W | 10 × 9.3 × 1.9 | 6,990円 | medium | [1](https://www.ankerjapan.com/products/a9129) |

<details><summary>メモ</summary>

- `anker-nano-station`: AC差込口 ×2、USB-C ×2、USB-A ×2。製品名と説明は「最大67W」、仕様表の合計最大出力は「65W（USBポートのみ）」で食い違うため、そのまま totalW 65・portW 67 とした（ポートごとの出力表は画像のみで未確認）。約100 × 93 × 19mm、298g。

</details>

### タブレット

| id | ランキング名 | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|---|
| `ipad-pro-m4` | Apple iPad Pro (M4) | iPad Pro (M4) | usbc / 充電 20W | — | — | high | [1](https://support.apple.com/ja-jp/119892) [2](https://support.apple.com/ja-jp/119891) |
| `ipad-pro11-m5` | Apple iPad Pro 11" (M5) | iPad Pro 11" (M5) | usbc / 充電 20W | 17.75 × 24.97 × 0.53 | 209,800円 | high | [1](https://www.apple.com/jp/ipad-pro/specs/) [2](https://www.apple.com/jp/shop/buy-ipad/ipad-pro) |
| `ipad-mini-a17pro` | Apple iPad mini (A17 Pro) | iPad mini (A17 Pro) | usbc / 充電 20W | 13.48 × 19.54 × 0.63 | 99,800円 | high | [1](https://support.apple.com/ja-jp/121456) [2](https://www.apple.com/jp/shop/buy-ipad/ipad-mini) |

<details><summary>メモ</summary>

- `ipad-pro-m4`: 2024年モデル。販売終了（現行は M5）のため価格なし。Thunderbolt / USB 4 ポート、20W USB-C電源アダプタ付属。ランキングの表記ではサイズが分からないため dim は null。11インチ: 幅177.5 × 高さ249.7 × 厚さ5.3mm、13インチ: 215.5 × 281.6 × 5.1mm。
- `ipad-pro11-m5`: 現行品。20W USB-C電源アダプタ付属（別売 40W ダイナミック電源アダプタで高速充電）。寸法は机に平置きしたとき（幅177.5 × 高さ249.7 × 厚さ5.3mm）。Apple Store の最安構成 209,800円。
- `ipad-mini-a17pro`: 現行品。USB-C、20W USB-C電源アダプタ付属。寸法は平置き（幅134.8 × 高さ195.4 × 厚さ6.3mm）。Apple Store の最安構成 99,800円。

</details>

## 2. ランキング名の扱い

- **Apple MacBook Air (M2)** → 元の表記（「Apple MacBook Air M2」「M2 Macbook Air」）にサイズの指定がなく、15インチなら「15」と書かれるはずなので 13インチと判断し、既存の **`mba-m2`** に対応づけました（`mapsTo: "mba-m2"`、新規追加なし）。
- **Apple MacBook Pro 14" (M3)** → 元の表記はサイズなしですが、無印 M3 の MacBook Pro は 14インチだけです。
- **Logicool ERGO M575S** → 公式ページの現行名は **M575SP**（Logi Bolt 付属）。ランキングにも「M575SP」の表記があります。
- **Logicool MX ERGO** → 初代（MXTB1s、Micro-USB）。後継の MX ERGO S は既存 `mx-ergo-s`。
- **Apple AirPods 4 / AirPods Max** → Apple の現行は AirPods 5 / AirPods Max 2。AirPods Max は元の表記に「USB-C」があるため USB-C 版で記録しました。
- **Apple EarPods** → 端子が分からないため、現行の USB-C 版で記録（3.5mm 版も同価格）。
- **Shure MV7（初代）** → Micro-B USB＋XLR の初代。MV7+ は既存 `mv7plus`。
- **Audio-Technica AT2020** → XLR の AT2020（USB 版の AT2020USB-X とは別）。ランキングの「AT2020 CWH」は白の限定色です。
- **Herman Miller Flo** → 旧 Flo は販売終了。価格は現行の Flo Now（ハーマンミラーストアの「フローモニターアーム」）です。
- **Apple iPad Pro (M4)** → サイズの指定がないため寸法は `null`（11 / 13インチの値はメモに記載）。
- **KANADEMONO 天板 / FlexiSpot 純正天板** → サイズと素材を選ぶ商品なので、`price` は公式ストアの最安構成です。

## 3. 確認できなかったこと・注意点

- **販売終了で価格なし（`price: null`）**: Mac mini (M2 Pro)、MacBook Air (M1)、MacBook Pro 14" (M1 Max / M3)、iPad Pro (M4)、Dell U3223QE / U4021QW（価格.comに価格登録なし）、BenQ DP1310（公式ストアの価格は動的表示で取れず、価格.comも登録なし）。
- **価格を確認できなかったもの**: FIFINE K688（日本の公式価格・価格.comなし。US$72.99）、RASICAL GrowSpica Pro（公式・価格.comとも販売なし）、BREENHILL / YSAGi のデスクマット（Amazon のページが取得できず。検索結果の抜粋の値はメモにだけ記載）。
- **接続（`conn: null`）**: Kanto YU2（USB 音声入力の端子形状）、FIFINE K688（付属ケーブルの PC 側）、Logicool G Yeti（公式は「USBケーブル」とだけ記載）。
- **XLR だけのマイク**: Shure SM7B と Audio-Technica AT2020 は `conn: []`。PC に直接はつながらず、オーディオインターフェース（例: `motu-m2`、既存 `audio-if`）が必要です。AT2020 は 48V ファンタム電源も必要です。
- **HDMI のバージョン**: Apple は Mac mini (M2 Pro)・MacBook Pro 14" (M1 Max / M3) の技術仕様に HDMI のバージョンを書いていないため `null`（対応解像度はメモに記載）。INNOCN 27D1U の USB-C の DP バージョンも記載なし。
- **DSC**: 公式に明記があるもの（U3223QE）だけ `true`。U4021QW・INNOCN 27D1U は記載なしで `null`。
- **寸法**:
  - INNOCN 27D1U は公式に寸法がなく、Amazon の商品情報（レビュー記事経由）の 513 × 614.3 × 195.3mm だけ。高さ 51.3cm が最低か最高か分からないため高さは `null`（`dimAsListed` に元の値）。
  - Keychron K8 Pro の高さ、EarPods・ATH-HL7BT・Apple の電源まわりの寸法は記載なし。EPOMAKER EK21 は公式に寸法がなく、比較サイト（keeb-finder）の値。
  - マイク: SM7B・AT2020・MV7（初代）・K688 はデスクスタンドが付属しない（または別売バンドル）ため `dim: null`。Shure のユーザーガイドの寸法図は画像のみでした。G Yeti は公式の寸法が1組だけで、スタンド装着時とみなしています。
- **食い違い**: Shure SM7B の重量は国内代理店（完実電気）が 298g、Shure のユーザーガイドが 0.764kg。Anker Nano Charging Station は製品名が「67W」、仕様表の合計最大出力が「65W（USBポートのみ）」。
- **入れなかったサイト**: エルゴトロン公式（403）、Amazon.co.jp（エラーページ）、Kanto 公式（YU2 のページなし）、Palmwork の昇降デスク（ページなし）、RASICAL の GrowSpica（販売ページなし）。これらは販売店・価格.com・レビューで補い、medium / low にしました。
- **JS で描画されるページ**（FlexiSpot、Palmwork、Anker、RASICAL）はヘッドレスブラウザで表示した内容を使いました。
- **スピーカーの寸法**は1台分です（Kanto YU2 は2台1組）。
