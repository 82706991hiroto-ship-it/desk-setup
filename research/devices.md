# デバイス調査（2026年9月29日時点）

デスクレシピメーカーのカタログ用に、既存アイテムの寸法を確かめ、新しく足す候補の仕様を集めた記録です。機械で読む版は [`devices.json`](devices.json) にあります。

- 寸法は **幅 × 奥行 × 高さ（cm）**。モニターはスタンド込みで、高さは机から画面上端まで（いちばん低くしたとき）。ノートPCは閉じた状態で、高さは厚さ。
- 価格は税込・円。公式ストアの価格を優先し、なければ価格.comの最安値（「価格.com最安」と注記）。確認日はすべて 2026-09-29。
- 信頼度: **high** = メーカー公式の仕様ページ／マニュアル、**medium** = 販売店・レビュー・計算値を含む、**low** = 情報が食い違う・ほとんど確認できない。
- 確認できなかった値は `?` / `null` のまま。推測で埋めていません。

全 100 件（既存の検証 40 件、新規 60 件）。

## 1. 既存カタログの検証結果

### 1-1. 直したほうがいい値

寸法（CATALOG_DIM）は、入っている値がすべて公式値と 0.1cm 程度の差に収まっていて、**間違いはありませんでした**。直すべきなのは主に `CATALOG` の spec 側です。

| id | 項目 | 現在 | 正しい値 | 根拠 |
|---|---|---|---|---|
| mbp14-m4pro / mbp16-m4pro / mbp16-m4max / macmini-m4pro / macstudio-m4max | out.tb | 'dp1.4'（MAC() の既定値） | 'dp2.1' | Apple 技術仕様「USB-C経由でDisplayPort 2.1出力に標準対応」（Thunderbolt 5 搭載機） |
| 27up850n | pdW | 96 | 90 | LG 公式仕様「USB Type-C USB Power Delivery 90W」 |
| u2723qe | dsc | false | true | Dell 取扱説明書「USB-C … DP1.4 with DSC support」「DP 1.4 with DSC support」 |
| u2723qe | ports.usba | 4 | 5 | 背面4＋前面クイックアクセス1（BC1.2） |
| u2724de | in | usbc: 'dp1.4' | tb: 'dp1.4' | 上流は Thunderbolt 4（DP1.4 Alt、PD 90W）。ほかに TB4 下流1 |
| pa279crv | ports | { usba: 2 } | { usba: 3, usbc: 1 } | ASUS 公式「USB Hub: 1x USB 3.2 Gen1 Type-C, 3x Type-A」 |
| caldigit-ts4 | ports.tb | 3 | 2 | 「3 x Thunderbolt 4」はホスト用1つを含む（下流は各15W×2） |
| screenbar-halo | chargeW | 5 | 6.5 | BenQ 公式「5V / max.1.3A」「消費電力 最大6.5W」 |
| screenbar-halo | CATALOG_DIM | [50, null, null] | [50, 9.5, 9.7] | BenQ 公式 ライト本体 50×9.5×9.7cm |
| mba-m2 / mba-m3 / mba-m4 | chargeW | 35 | 30（基本構成） | Apple 技術仕様: 8コアGPUは30W、上位構成が35Wデュアル。35のままでも実害は小さい |
| mbp14-m4pro | chargeW | 96 | 70 または 96 | 12コアCPUは70W、14コアCPUとM4 Maxは96W付属 |

そのほか、モデル自体の入れ替えに関係するもの:

- **studio-display**: Apple の現行品は Thunderbolt 5 版に変わりました（上流TB5・96W、下流TB5×1、USB-C×2）。カタログの spec（USB-C×3）は旧モデルの値です。新モデルは `studio-display-tb5` として追加しました。寸法は同じです。
- **key-light-air**: 公式ページが Key Light Air MK.2 に置き換わり、USB-C 給電（最大30W）・デスククランプになりました。旧モデルは AC アダプター給電です。
- **wave3**: 公式ページが Wave:3 MK.2 に置き換わっています。
- **odyssey-g9**: 日本では正規販売されていません（並行輸入のみ）。

### 1-2. 既存アイテムの寸法一覧

| id | 名前 | 調べた寸法 W×D×H | CATALOG_DIM | 判定 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `mba-m2` | MacBook Air 13" (M2) | 30.41 × 21.5 × 1.13 | 30.4 × 21.5 × 1.1 | OK | high | [1](https://support.apple.com/ja-jp/111867) |
| `mba-m3` | MacBook Air (M3) | 30.41 × 21.5 × 1.13 | 30.4 × 21.5 × 1.1 | OK | high | [1](https://support.apple.com/ja-jp/118551) |
| `mba-m4` | MacBook Air (M4) | 30.41 × 21.5 × 1.13 | 30.4 × 21.5 × 1.1 | OK | high | [1](https://support.apple.com/ja-jp/122209) |
| `mbp14-m4` | MacBook Pro 14" (M4) | 31.26 × 22.12 × 1.55 | 31.3 × 22.1 × 1.6 | OK | high | [1](https://support.apple.com/ja-jp/121552) |
| `mbp14-m4pro` | MacBook Pro 14" (M4 Pro) | 31.26 × 22.12 × 1.55 | 31.3 × 22.1 × 1.6 | OK | high | [1](https://support.apple.com/ja-jp/121553) |
| `mbp16-m4pro` | MacBook Pro 16" (M4 Pro) | 35.57 × 24.81 × 1.68 | 35.6 × 24.8 × 1.7 | OK | high | [1](https://support.apple.com/ja-jp/121554) |
| `mbp16-m4max` | MacBook Pro 16" (M4 Max) | 35.57 × 24.81 × 1.68 | 35.6 × 24.8 × 1.7 | OK | high | [1](https://support.apple.com/ja-jp/121554) |
| `macmini-m4` | Mac mini (M4) | 12.7 × 12.7 × 5 | 12.7 × 12.7 × 5 | OK | high | [1](https://support.apple.com/ja-jp/121555) |
| `macmini-m4pro` | Mac mini (M4 Pro) | 12.7 × 12.7 × 5 | 12.7 × 12.7 × 5 | OK | high | [1](https://support.apple.com/ja-jp/121555) |
| `macstudio-m4max` | Mac Studio (M4 Max) | 19.7 × 19.7 × 9.5 | 19.7 × 19.7 × 9.5 | OK | high | [1](https://support.apple.com/ja-jp/122211) |
| `studio-display` | Apple Studio Display | 62.3 × 16.8 × 47.8 | 62.3 × 16.8 × 47.8 | OK | high | [1](https://www.apple.com/jp/studio-display/specs/) |
| `u2723qe` | Dell U2723QE | 61.14 × 18.5 × 38.52 | 61.1 × 18.5 × 38.5 | OK | high | [1](https://dl.dell.com/content/manual12109242-dell-u2723qe-monitor-user-s-guide.pdf?language=en-us) |
| `u2724de` | Dell U2724DE | 61.22 × 19.23 × 38.56 | — | 未登録→追加 | high | [1](https://dl.dell.com/content/manual17050394-dell-ultrasharp-27-thunderbolt-hub-monitor-u2724de-user-s-guide.pdf?language=en-us) |
| `27up850n` | LG 27UP850N-W | 61.4 × 29.3 × 45.9 | — | 未登録→追加 | high | [1](https://www.lg.com/jp/monitors/4k-5k-monitors/27up850n-w/) |
| `pa279crv` | ASUS ProArt PA279CRV | 61.22 × 21.5 × 40.81 | — | 未登録→追加 | medium | [1](https://www.asus.com/jp/displays-desktops/monitors/proart/proart-display-pa279crv/techspec/) [2](https://search.kakaku.com/ASUS%20PA279CRV/) |
| `32gs95ue` | LG UltraGear 32GS95UE | 71.4 × 27.9 × 50.7 | — | 未登録→追加 | high | [1](https://www.lg.com/jp/monitors/gaming-monitors/32gs95ue-b/) |
| `odyssey-g9` | Samsung Odyssey OLED G9 49" | 119.47 × 23.69 × 52.93 | — | 未登録→追加 | low | [1](https://www.samsung.com/ca/monitors/gaming/odyssey-oled-g9-g95sc-49-inch-240hz-curved-dual-qhd-ls49cg954snxza/) |
| `caldigit-ts4` | CalDigit TS4 | 14.1 × 11.3 × 4.2 | 14 × 11.3 × 4.2 | OK | high | [1](https://www.caldigit.com/thunderbolt-station-4/) |
| `hhkb-hybrid` | HHKB Professional HYBRID Type-S | 29.4 × 12 × 4 | 29.4 × 12 × 4 | OK | high | [1](https://happyhackingkb.com/jp/products/hybrid_types/) [2](https://search.kakaku.com/HHKB%20Professional%20HYBRID%20Type-S/) |
| `realforce-r3` | REALFORCE R3 | — | — | 未確認 | low | [1](https://pc.watch.impress.co.jp/docs/news/1360965.html) [2](https://kakaku.com/item/K0001456965/spec/) |
| `keychron-q1max` | Keychron Q1 Max | 32.75 × 14.5 × 3.18 | — | 未登録→追加 | high | [1](https://www.keychron.com/products/keychron-q1-max-qmk-via-wireless-custom-mechanical-keyboard) [2](https://keychron.jp/products/keychron-q1-max-qmk-via-jis) |
| `mx-keys-s` | Logicool MX Keys S | 43.02 × 13.16 × 2.05 | 43 × 13.2 × 2.1 | OK | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-keys-s) |
| `mx-mech-mini` | Logicool MX Mechanical Mini | 31.26 × 13.16 × 2.61 | 31.3 × 13.2 × 2.6 | OK | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-mechanical-mini) |
| `magic-kb` | Apple Magic Keyboard（Touch ID） | 27.89 × 11.49 × 1.09 | 27.9 × 11.5 × 1.1 | OK | high | [1](https://www.apple.com/jp/shop/product/MXCK3J/A) |
| `mx-master-3s` | Logicool MX Master 3S | 8.43 × 12.49 × 5.1 | 8.4 × 12.5 × 5.1 | OK | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-master-3s) |
| `mx-ergo-s` | Logicool MX ERGO S | 9.98 × 13.25 × 5.14 | 10 × 13.3 × 5.1 | OK | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-ergo-s-wireless-trackball-mouse) |
| `gpx-sl2` | Logicool G PRO X SUPERLIGHT 2 | 6.35 × 12.5 × 4 | 6.4 × 12.5 × 4 | OK | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/pro-x2-superlight-wireless-mouse) |
| `magic-trackpad` | Apple Magic Trackpad | 16 × 11.49 × 1.09 | 16 × 11.5 × 1.1 | OK | high | [1](https://www.apple.com/jp/shop/product/MXK93ZA/A) |
| `magic-mouse` | Apple Magic Mouse | 5.71 × 11.35 × 2.16 | 5.7 × 11.4 × 2.2 | OK | high | [1](https://www.apple.com/jp/shop/product/MXK53ZA/A) |
| `pebble` | Creative Pebble V3 | 12.3 × 12 × 11.8 | — | 未登録→追加 | high | [1](https://jp.creative.com/p/speakers/creative-pebble-v3) |
| `wh1000xm6` | Sony WH-1000XM6 | — | — | 未確認 | medium | [1](https://kakaku.com/item/K0001689794/spec/) |
| `c920n` | Logicool C920n | 9.4 × 7.1 × 4.33 | 9.4 × 7.1 × 4.3 | OK | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/hd-pro-webcam-c920n) |
| `facecam-mk2` | Elgato Facecam MK.2 | 8.4 × 6.1 × 3.8 | — | 未登録→追加 | high | [1](https://www.elgato.com/jp/ja/p/facecam-mk2) [2](https://kakaku.com/item/K0001616520/spec/) |
| `mv7plus` | Shure MV7+ | 9 × 20.7 × 16.4 | — | 未登録→追加 | medium | [1](https://www.shure.com/ja-JP/products/microphones/mv7) [2](https://kanjitsu.com/product/mv7/) [3](https://kakaku.com/item/K0001619951/spec/) |
| `wave3` | Elgato Wave:3 | — | — | 未確認 | low | [1](https://www.elgato.com/jp/ja/p/wave-3-black) |
| `screenbar-halo` | BenQ ScreenBar Halo | 50 × 9.5 × 9.7 | 50 × ? × ? | 欠けあり→補完 | high | [1](https://www.benq.com/ja-jp/lighting/monitor-light/screenbar-halo/spec.html) |
| `key-light-air` | Elgato Key Light Air | 31.9 × 3.3 × 20.7 | — | 未登録→追加 | medium | [1](https://www.elgato.com/jp/ja/p/key-light-air) [2](https://search.kakaku.com/Key%20Light%20Air%20MK.2/) |
| `hue-bar` | Philips Hue ライトバー | — | — | 未確認 | low | — |
| `apple-96w` | Apple 96W USB-C電源アダプタ | — | 8 × 8 × 2.9 | 未確認 | medium | [1](https://www.apple.com/jp/shop/product/MW2L3AM/A) |
| `apple-140w` | Apple 140W USB-C電源アダプタ | — | — | 未確認 | medium | [1](https://www.apple.com/jp/shop/product/MW2M3AM/A) |

名前が汎用のもの（「4K 60Hz モニター」「USB充電器 100W」「Windows ノート…」「スマートフォン」など）と、アーム・家具は対象外にしました。

## 2. カテゴリ別の一覧（新規＋既存）

### PC

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `mba-m2`（既存） | MacBook Air 13" (M2) | tb×2 / 映像 tb:dp1.4 / 外部 1台 / 充電 30W | 30.41 × 21.5 × 1.13 | — | high | [1](https://support.apple.com/ja-jp/111867) |
| `mba-m3`（既存） | MacBook Air (M3) | tb×2 / 映像 tb:dp1.4 / 外部 1台 / 充電 30W | 30.41 × 21.5 × 1.13 | — | high | [1](https://support.apple.com/ja-jp/118551) |
| `mba-m4`（既存） | MacBook Air (M4) | tb×2 / 映像 tb:dp1.4 / 外部 2台 / 充電 30W | 30.41 × 21.5 × 1.13 | — | high | [1](https://support.apple.com/ja-jp/122209) |
| `mbp14-m4`（既存） | MacBook Pro 14" (M4) | tb×3, hdmi×1 / 映像 tb:dp1.4, hdmi:hdmi2.1 / 外部 2台 / 充電 70W | 31.26 × 22.12 × 1.55 | — | high | [1](https://support.apple.com/ja-jp/121552) |
| `mbp14-m4pro`（既存） | MacBook Pro 14" (M4 Pro) | tb×3, hdmi×1 / 映像 tb:dp2.1, hdmi:hdmi2.1 / 外部 2台 / 充電 96W | 31.26 × 22.12 × 1.55 | — | high | [1](https://support.apple.com/ja-jp/121553) |
| `mbp16-m4pro`（既存） | MacBook Pro 16" (M4 Pro) | tb×3, hdmi×1 / 映像 tb:dp2.1, hdmi:hdmi2.1 / 外部 2台 / 充電 140W | 35.57 × 24.81 × 1.68 | — | high | [1](https://support.apple.com/ja-jp/121554) |
| `mbp16-m4max`（既存） | MacBook Pro 16" (M4 Max) | tb×3, hdmi×1 / 映像 tb:dp2.1, hdmi:hdmi2.1 / 外部 4台 / 充電 140W | 35.57 × 24.81 × 1.68 | — | high | [1](https://support.apple.com/ja-jp/121554) |
| `macmini-m4`（既存） | Mac mini (M4) | tb×3, usbc×2, hdmi×1 / 映像 tb:dp1.4 / 外部 3台 / 充電 —W | 12.7 × 12.7 × 5 | — | high | [1](https://support.apple.com/ja-jp/121555) |
| `macmini-m4pro`（既存） | Mac mini (M4 Pro) | tb×3, usbc×2, hdmi×1 / 映像 tb:dp2.1 / 外部 3台 / 充電 —W | 12.7 × 12.7 × 5 | — | high | [1](https://support.apple.com/ja-jp/121555) |
| `macstudio-m4max`（既存） | Mac Studio (M4 Max) | tb×4, usbc×2, usba×2, hdmi×1 / 映像 tb:dp2.1, hdmi:hdmi2.1 / 外部 5台 / 充電 —W | 19.7 × 19.7 × 9.5 | — | high | [1](https://support.apple.com/ja-jp/122211) |
| `mba13-m5` | MacBook Air 13" (M5) | tb×2 / 映像 tb:dp1.4 / 外部 2台 / 充電 40W | 30.41 × 21.5 × 1.13 | 224,800円 | high | [1](https://www.apple.com/jp/macbook-air/specs/) [2](https://www.apple.com/jp/shop/buy-mac/macbook-air) |
| `mba15-m5` | MacBook Air 15" (M5) | tb×2 / 映像 tb:dp1.4 / 外部 2台 / 充電 40W | 34.04 × 23.76 × 1.15 | 264,800円 | high | [1](https://www.apple.com/jp/macbook-air/specs/) [2](https://www.apple.com/jp/shop/buy-mac/macbook-air) |
| `mbp14-m5` | MacBook Pro 14" (M5) | tb×3, hdmi×1 / 映像 tb:dp1.4, hdmi:? / 外部 2台 / 充電 70W | 31.26 × 22.12 × 1.55 | 339,800円 | high | [1](https://www.apple.com/jp/macbook-pro/specs/) [2](https://www.apple.com/jp/shop/buy-mac/macbook-pro) |
| `mbp14-m5pro` | MacBook Pro 14" (M5 Pro) | tb×3, hdmi×1 / 映像 tb:dp2.1, hdmi:? / 外部 3台 / 充電 70W | 31.26 × 22.12 × 1.55 | 429,800円 | high | [1](https://www.apple.com/jp/macbook-pro/specs/) [2](https://www.apple.com/jp/shop/buy-mac/macbook-pro) |
| `mbp16-m5pro` | MacBook Pro 16" (M5 Pro) | tb×3, hdmi×1 / 映像 tb:dp2.1, hdmi:? / 外部 3台 / 充電 140W | 35.57 × 24.81 × 1.68 | 519,800円 | high | [1](https://www.apple.com/jp/macbook-pro/specs/) [2](https://www.apple.com/jp/shop/buy-mac/macbook-pro) |
| `macmini-m6` | Mac mini (M6) | tb×3, usbc×2, hdmi×1 / 映像 tb:dp1.4, hdmi:? / 外部 3台 / 充電 —W | 12.7 × 12.7 × 5 | 149,800円 | high | [1](https://www.apple.com/jp/mac-mini/specs/) [2](https://www.apple.com/jp/shop/buy-mac/mac-mini) |
| `macmini-m5pro` | Mac mini (M5 Pro) | tb×3, usbc×2, hdmi×1 / 映像 tb:dp2.1, hdmi:? / 外部 3台 / 充電 —W | 12.7 × 12.7 × 5 | 299,800円 | high | [1](https://www.apple.com/jp/mac-mini/specs/) [2](https://www.apple.com/jp/shop/buy-mac/mac-mini) |
| `macstudio-m5max` | Mac Studio (M5 Max) | tb×4, usbc×2, usba×2, hdmi×1 / 映像 tb:dp2.1, hdmi:hdmi2.1 / 外部 5台 / 充電 —W | 19.7 × 19.7 × 9.5 | 419,800円 | high | [1](https://www.apple.com/jp/mac-studio/specs/) [2](https://www.apple.com/jp/shop/buy-mac/mac-studio) |
| `thinkpad-x1c13` | Lenovo ThinkPad X1 Carbon Gen 13 | tb×2, usba×2, hdmi×1 / 映像 tb:?, hdmi:hdmi2.0 / 外部 3台 / 充電 65W | 31.28 × 21.475 × 1.795 | 327,067円 | high | [1](https://psref.lenovo.com/syspool/Sys/PDF/ThinkPad/ThinkPad_X1_Carbon_Gen_13/ThinkPad_X1_Carbon_Gen_13_Spec.pdf) [2](https://search.kakaku.com/ThinkPad%20X1%20Carbon%20Gen%2013/) |

<details><summary>メモ</summary>

- `mba-m2`: 販売終了モデルのため価格なし。Thunderbolt / USB 4 ×2、外部ディスプレイ1台（6K60）。
- `mba-m3`: 13インチの寸法。15インチ(M3)は別モデル。蓋を閉じると2台目（5K60）に対応。
- `mba-m4`: 13インチの寸法。Apple Storeの現行品はM5に置き換わっている（下記 mba13-m5）。
- `mbp14-m4`: Thunderbolt 4 ×3・HDMI（8K60 / 4K240）。DP 1.4。70W付属（96Wで高速充電）。
- `mbp14-m4pro`: Thunderbolt 5 ×3。
- `mbp16-m4pro`: 140W付属。
- `mbp16-m4max`: 最大4台（Thunderbolt 3台 + HDMI 1台）。
- `macmini-m4`: 前面USB-C（10Gb/s）×2、背面Thunderbolt 4 ×3・HDMI。現行はM6（下記）。
- `macstudio-m4max`: 背面 Thunderbolt 5 ×4・USB-A(5Gb/s) ×2・HDMI 2.1、前面 USB-C ×2（M3 Ultra は前面も Thunderbolt 5）。
- `mba13-m5`: Apple の現行は M5（M4 は置き換え済み）。Thunderbolt 4 ×2、DP 1.4（HBR3）＋DSC。付属は 40W ダイナミック電源アダプタ（最大60W）、35W デュアル／70W も選択可。10コアCPU・8コアGPU の最小構成価格。
- `mbp14-m5`: Thunderbolt 4 ×3・HDMI。8K60/4K240 は1台まで（ポート種別の内訳記載なし）。HDMI のバージョンは仕様ページに記載なし。
- `mbp14-m5pro`: Thunderbolt 5 ×3（DP 2.1）。15コアCPUは70W、18コアCPUは96W付属。M5 Max は最大4台。
- `mbp16-m5pro`: 16インチは M5 Pro(18コア) から。M5 Max 構成は最大4台・749,800円〜。
- `macmini-m6`: 背面 Thunderbolt 4 ×3・HDMI・Ethernet、前面 USB-C(10Gb/s) ×2。3台時は HDMI 経由 4K60。
- `macmini-m5pro`: 背面 Thunderbolt 5 ×3（DP 2.1）。
- `macstudio-m5max`: M5 Ultra は前面も Thunderbolt 5 ×2、最大8台、949,800円〜。
- `thinkpad-x1c13`: PSREF: Thunderbolt 4 ×2、USB-A 5Gbps ×2、HDMI 2.1（最大4K60 → 帯域は hdmi2.0 として記録）。U/H シリーズは外部3台、V シリーズは2台。TB は最大8K60（DP版は記載なし）。65W USB-C。厚さは WUXGA 最大17.95mm（OLED 16.95mm）。価格は価格.com最安。

</details>

### モニター

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `studio-display`（既存） | Apple Studio Display | 5120×2880 60Hz / 入力 tb:dp1.4 / 給電 96W / DSC あり / ハブ usbc×3 | 62.3 × 16.8 × 47.8 | — | high | [1](https://www.apple.com/jp/studio-display/specs/) |
| `u2723qe`（既存） | Dell U2723QE | 3840×2160 60Hz / 入力 usbc:dp1.4, hdmi:hdmi2.0, dp:dp1.4 / 給電 90W / DSC あり / ハブ usba×5, usbc×1 | 61.14 × 18.5 × 38.52 | — | high | [1](https://dl.dell.com/content/manual12109242-dell-u2723qe-monitor-user-s-guide.pdf?language=en-us) |
| `u2724de`（既存） | Dell U2724DE | 2560×1440 120Hz / 入力 tb:dp1.4, hdmi:hdmi2.0, dp:dp1.4 / 給電 90W / DSC 記載なし / ハブ usba×4, usbc×1, tb×1 | 61.22 × 19.23 × 38.56 | — | high | [1](https://dl.dell.com/content/manual17050394-dell-ultrasharp-27-thunderbolt-hub-monitor-u2724de-user-s-guide.pdf?language=en-us) |
| `27up850n`（既存） | LG 27UP850N-W | 3840×2160 60Hz / 入力 usbc:dp1.4, hdmi:?, dp:dp1.4 / 給電 90W / DSC 記載なし / ハブ usba×2 | 61.4 × 29.3 × 45.9 | — | high | [1](https://www.lg.com/jp/monitors/4k-5k-monitors/27up850n-w/) |
| `pa279crv`（既存） | ASUS ProArt PA279CRV | 3840×2160 60Hz / 入力 usbc:?, hdmi:hdmi2.0, dp:dp1.4 / 給電 96W / DSC 記載なし / ハブ usba×3, usbc×1 | 61.22 × 21.5 × 40.81 | 68,800円 | medium | [1](https://www.asus.com/jp/displays-desktops/monitors/proart/proart-display-pa279crv/techspec/) [2](https://search.kakaku.com/ASUS%20PA279CRV/) |
| `32gs95ue`（既存） | LG UltraGear 32GS95UE | 3840×2160 240Hz / 入力 hdmi:?, dp:dp1.4 / 給電 0W / DSC あり / ハブ usba×2 | 71.4 × 27.9 × 50.7 | — | high | [1](https://www.lg.com/jp/monitors/gaming-monitors/32gs95ue-b/) |
| `odyssey-g9`（既存） | Samsung Odyssey OLED G9 49" | 5120×1440 240Hz / 入力 hdmi:hdmi2.1, dp:dp1.4 / 給電 0W / DSC 記載なし / ハブ usba×3 | 119.47 × 23.69 × 52.93 | — | low | [1](https://www.samsung.com/ca/monitors/gaming/odyssey-oled-g9-g95sc-49-inch-240hz-curved-dual-qhd-ls49cg954snxza/) |
| `u2725qe` | Dell U2725QE | 3840×2160 120Hz / 入力 tb:dp1.4, hdmi:hdmi2.1, dp:dp1.4 / 給電 140W / DSC あり / ハブ tb×1, usbc×2, usba×5 | 61.24 × 18.9 × 38.57 | 102,886円 | high | [1](https://www.dell.com/ja-jp/shop/monitors/apd/x/u2725qe_monitor/-) [2](https://www.dell.com/en-us/shop/dell-ultrasharp-27-4k-thunderbolt-hub-monitor-u2725qe/apd/210-bqhr/monitors-monitor-accessories) |
| `u3225qe` | Dell U3225QE | 3840×2160 120Hz / 入力 tb:dp1.4, hdmi:hdmi2.1, dp:dp1.4 / 給電 140W / DSC あり / ハブ tb×1, usbc×2, usba×5 | 71.32 × 21.5 × 46.89 | 138,969円 | high | [1](https://www.dell.com/ja-jp/shop/monitors/apd/x/u3225qe_monitor/-) |
| `u3425we` | Dell U3425WE | 3440×1440 120Hz / 入力 tb:dp1.4, hdmi:hdmi2.0, dp:dp1.4 / 給電 90W / DSC 記載なし / ハブ tb×1, usbc×2, usba×5 | 81.35 × 24.04 × 39.28 | 138,969円 | high | [1](https://www.dell.com/ja-jp/shop/monitors/apd/x/u3425we_monitor/-) |
| `27up850k` | LG 27UP850K-W | 3840×2160 60Hz / 入力 usbc:?, hdmi:?, dp:dp1.4 / 給電 90W / DSC 記載なし / ハブ usba×2 | 61.4 × 23.9 × 45.9 | 43,610円 | high | [1](https://www.lg.com/jp/monitors/4k-5k-monitors/27up850k-w/) |
| `32un880k` | LG 32UN880K-B（Ergo） | 3840×2160 60Hz / 入力 usbc:?, hdmi:?, dp:dp1.4 / 給電 60W / DSC 記載なし / ハブ usba×2 | 71.4 × 22.7 × 51.1 | 94,800円 | high | [1](https://www.lg.com/jp/monitors/4k-5k-monitors/32un880k-b/) |
| `27gr93u` | LG UltraGear 27GR93U-B | 3840×2160 144Hz / 入力 hdmi:?, dp:dp1.4 / 給電 0W / DSC あり / ハブ usba×2 | 61.4 × 25.4 × 46.8 | — | high | [1](https://www.lg.com/jp/monitors/gaming-monitors/27gr93u-b/) |
| `pd2706u` | BenQ PD2706U | 3840×2160 60Hz / 入力 usbc:?, hdmi:hdmi2.0, dp:dp1.4 / 給電 90W / DSC 記載なし / ハブ usba×3, usbc×1 | 61.38 × 23.83 × 45.09 | 72,400円 | high | [1](https://www.benq.com/ja-jp/monitor/professional/pd2706u/spec.html) [2](https://search.kakaku.com/BenQ%20PD2706U/) |
| `ex271uz` | BenQ MOBIUZ EX271UZ | 3840×2160 240Hz / 入力 usbc:?, hdmi:hdmi2.1, dp:dp1.4 / 給電 90W / DSC 記載なし / ハブ usba×2, usbc×1 | 61.09 × 22.35 × 43.73 | 154,800円 | medium | [1](https://www.benq.com/ja-jp/monitor/gaming/ex271uz/spec.html) [2](https://search.kakaku.com/BenQ%20EX271UZ/) |
| `pg27ucdm` | ASUS ROG Swift OLED PG27UCDM | 3840×2160 240Hz / 入力 usbc:?, hdmi:hdmi2.1, dp:dp2.1 / 給電 90W / DSC 記載なし / ハブ usba×3 | 61.03 × 21.88 × 43.95 | 179,818円 | medium | [1](https://rog.asus.com/jp/monitors/27-to-31-5-inches/rog-swift-oled-pg27ucdm/spec/) [2](https://search.kakaku.com/PG27UCDM/) |
| `ev2785` | EIZO FlexScan EV2785 | 3840×2160 60Hz / 入力 usbc:?, hdmi:?, dp:? / 給電 60W / DSC 記載なし / ハブ usba×2 | 61.14 × 23 × 36.73 | 129,800円 | high | [1](https://www.eizo.com/products/flexscan/ev2785/) [2](https://search.kakaku.com/EIZO%20EV2785/) |
| `ev3240x` | EIZO FlexScan EV3240X | 3840×2160 60Hz / 入力 usbc:?, hdmi:?, dp:? / 給電 94W / DSC 記載なし / ハブ usba×3, usbc×1 | 71.22 × 24.24 × 42.73 | 116,964円 | high | [1](https://www.eizo.com/products/flexscan/ev3240x/) [2](https://search.kakaku.com/EIZO%20EV3240X/) |
| `studio-display-tb5` | Apple Studio Display（Thunderbolt 5） | 5120×2880 60Hz / 入力 tb:? / 給電 96W / DSC 記載なし / ハブ tb×1, usbc×2 | 62.3 × 16.8 × 47.8 | 269,800円 | high | [1](https://www.apple.com/jp/studio-display/specs/) [2](https://www.apple.com/jp/shop/buy-mac/studio-display) |
| `studio-display-xdr` | Apple Studio Display XDR | 5120×2880 120Hz / 入力 tb:? / 給電 140W / DSC 記載なし / ハブ tb×1, usbc×2 | 62.3 × 21.4 × 47.8 | 479,800円 | high | [1](https://www.apple.com/jp/pro-display-xdr/specs/) [2](https://www.apple.com/jp/shop/buy-mac/studio-display-xdr) |
| `mb16acv` | ASUS ZenScreen MB16ACV | 1920×1080 60Hz / 入力 usbc:? / 給電 0W / DSC 記載なし / ハブ — | 35.79 × 22.48 × 1.05 | 28,500円 | medium | [1](https://www.asus.com/jp/displays-desktops/monitors/zenscreen/zenscreen-mb16acv/techspec/) [2](https://www.asus.com/displays-desktops/monitors/zenscreen/zenscreen-mb16acv/techspec/) [3](https://search.kakaku.com/MB16ACV/) |

<details><summary>メモ</summary>

- `studio-display`: 寸法は現行（2026年版）の仕様ページ。傾き調整スタンド 62.3×16.8×47.8、傾きと高さ調整スタンド 奥行20.7・高さ47.9〜58.3、VESA 3.1×36.2。Appleの現行品は Thunderbolt 5 版（下記 studio-display-tb5）に変わっていて、カタログの spec（TB上流＋USB-C×3）は旧モデルのもの。
- `u2723qe`: Dell日本・米国ストアとも販売ページなし（販売終了とみられる）。DP出力（デイジーチェーン）・RJ45あり。
- `u2724de`: Dell日本ストアに販売ページなし。
- `27up850n`: 後継 27UP850K-W（下記）が現行。
- `pa279crv`: 公式の「スタンド含む」高さは 53.81cm の1値のみ（高さ調整 0〜130mm）。最低位置は 53.81−13.0＝40.81cm と計算（推定）。価格は価格.com最安。
- `32gs95ue`: Dual-Mode 4K 240Hz / FHD 480Hz。VESA DSC 対応。HDMI×2 のバージョンは日本語仕様表に記載なし。USB-C なし。
- `odyssey-g9`: G95SC（LS49CG954）の海外公式仕様。スタンド込み高さは52.93cmの1値のみで、最低位置か最高位置か不明（高さ調整120mm）。micro HDMI 2.1 も1つあり。日本では正規販売されておらず（samsung.com/jp はモニター扱いなし）、G95SD等の並行輸入のみ。
- `u2725qe`: Thunderbolt 4 上流（DP1.4＋DSC、PD 最大140W EPR）。HDMI は 4K120 FRL。DP 出力・RJ45(2.5GbE)・KVM。
- `u3225qe`: 31.5インチ。I/O は U2725QE と同じ。
- `u3425we`: 34インチ曲面。HDMI は「HDMI 2.1 規定、WQHD 100Hz TMDS」なので帯域は hdmi2.0 相当で記録。DP 1.4 は 120Hz。
- `27up850k`: HDMI×2（バージョン記載なし）、USB-C DP Alt Mode（バージョン記載なし）。価格は LG 公式ストア。
- `32un880k`: クランプ式アームスタンド。奥行は 22.7〜40.7cm（伸縮180mm）。USB PD は 60W。価格は LG 公式ストア。
- `27gr93u`: HDMI×2（バージョン記載なし、48–144Hz）。VESA DSC 対応。USB-C なし。
- `pd2706u`: USB-C は 90W 給電・DP Alt Mode（バージョン記載なし）。KVM。価格は価格.com最安。
- `ex271uz`: 26.5インチ QD-OLED。HDMI 2.1 ×2（1つは eARC）。スタンド込み高さは 53.73cm の1値のみ（高さ調整100mm）→ 最低位置 43.73cm は計算値。
- `pg27ucdm`: 日本語公式仕様は「DisplayPort 2.1 ×1」と記載（DP1.4 とする資料もあるため要確認）。HDMI 2.1 FRL ×2、USB-C DP Alt・90W。スタンド込み高さは1値のみ（調整110mm）→ 最低位置は計算値。
- `ev2785`: eizo.co.jp は接続できず、EIZO グローバルの公式仕様を使用。全入力が 4K60 対応だがバージョンの記載なし（価格.comの商品説明は HDMI2.0）。USB-C は PD 60W。
- `ev3240x`: USB-C PD 94W、LAN 内蔵、USB-C 下流 15W。奥行は 24.24〜25.07cm。価格は価格.com最安。
- `studio-display-tb5`: 現行モデル。上流 Thunderbolt 5（96W）、下流 Thunderbolt 5 ×1（デイジーチェーン可）、USB-C(10Gb/s) ×2。DP のバージョンは記載なし。価格は傾き調整スタンドの最小構成、最大 389,800円。
- `studio-display-xdr`: 指定の「Pro Display XDR」は Apple 日本サイトで Studio Display XDR（27インチ 5K 120Hz、ミニLED）に置き換わっている（/pro-display-xdr/ がこの製品ページ）。上流 TB5 で 140W 給電。
- `mb16acv`: 15.6インチ モバイルモニター。入力は USB-C（DP Alt Mode）のみ。寸法はスタンド（カバー）込みで寝かせた状態 357.9×224.8×10.5mm。立てた時の値は非公開。リフレッシュレートは英語版仕様で 60Hz。

</details>

### ドック・ハブ

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `caldigit-ts4`（既存） | CalDigit TS4 | 上流 tb / tb×2, usbc×3, usba×5, dp×1 / 映像 tb:dp1.4, dp:dp1.4 / PC給電 98W | 14.1 × 11.3 × 4.2 | — | high | [1](https://www.caldigit.com/thunderbolt-station-4/) |
| `caldigit-ts5plus` | CalDigit TS5 Plus | 上流 tb / tb×2, usbc×5, usba×5, dp×1 / 映像 tb:?, dp:dp2.1 / PC給電 140W | 12.79 × 4.7 × 15.5 | — | high | [1](https://www.caldigit.com/thunderbolt-5-dock-ts5-plus/) [2](https://downloads.caldigit.com/TS5Plus/CalDigit_TS5Plus_Datasheet.pdf) |
| `caldigit-element-hub` | CalDigit Element Hub | 上流 tb / tb×3, usba×4 / 映像 tb:dp1.4 / PC給電 60W | 11.4 × 7 × 1.8 | — | medium | [1](https://www.caldigit.com/thunderbolt-4-element-hub/) |
| `belkin-inc006` | Belkin Connect Pro Thunderbolt 4 Dock（INC006） | 上流 tb / tb×1, usbc×1, usba×4, hdmi×2 / 映像 hdmi:hdmi2.0, tb:? / PC給電 90W | 20 × 7.32 × 3.39 | — | medium | [1](https://www.belkin.com/jp/p/pro-thunderbolt-4%E3%83%89%E3%83%83%E3%82%AF/INC006qcSGY.html) |
| `anker-nano-dock-13in1` | Anker Nano ドッキングステーション (13-in-1) | 上流 usbc / usbc×3, usba×3, hdmi×3, dp×1 / 映像 hdmi:?, dp:? / PC給電 85W | 14 × 9.5 × 4 | 16,990円 | high | [1](https://www.ankerjapan.com/products/a83c3111) |
| `anker-prime-tb5-dock` | Anker Prime ドッキングステーション (14-in-1, 8K, Thunderbolt 5) | 上流 tb / tb×2, usbc×2, usba×3, hdmi×1, dp×1 / 映像 hdmi:hdmi2.1, dp:dp2.1, tb:? / PC給電 140W | 11.6 × 11.6 × 7.5 | 49,990円 | high | [1](https://www.ankerjapan.com/products/a83b5) |
| `anker-nano-hub-8in1` | Anker Nano USB-C ハブ (8-in-1, Dual Display) | 上流 usbc / usbc×1, usba×2, hdmi×2 / 映像 hdmi:hdmi2.0 / PC給電 85W | 14 × 4.8 × 1.5 | 5,990円 | high | [1](https://www.ankerjapan.com/products/a210b) |
| `ugreen-revodok-pro-10in1` | UGREEN Revodok Pro 10-in-1 USB-C ハブ | 未確認 | — | 9,990円 | low | [1](https://jp.ugreen.com/products/revodok-pro-10-in-1-usb-c-hub) |

<details><summary>メモ</summary>

- `caldigit-ts4`: 公式寸法 高さ14.1×幅4.2×長さ11.3cm（縦置き）。横置きなら 14.1×11.3×4.2。前面USB-C 1つは20W。
- `caldigit-ts5plus`: Thunderbolt 5 ホスト(140W)＋下流 TB5 ×2（36W）、USB-C 10G ×5（前面1つ36W）、USB-A 10G ×5、DP 2.1、10GbE。縦置き W×D×H。日本での価格は未確認。
- `caldigit-element-hub`: TB4 ホスト(60W)＋下流 TB4 ×3（各15W）、USB-A 10G ×4。映像は TB ポート経由でデュアル4K60 / 8K。DP のバージョンは記載なし（TB4 の一般仕様から dp1.4 とした）。価格未確認。
- `belkin-inc006`: 12ポート: TB4 ×2（うち1つはホスト用と判断）、HDMI 2.0 ×2、USB-C 3.1 Gen2（PD3.0）×1、USB-A 3.1 ×2＋USB-A 2.0 ×2、GbE、SD、オーディオ。PD 最大90W、120W 電源付属。M1/M2/M3 無印は拡張1画面。
- `anker-nano-dock-13in1`: HDMI(4K) ×2＋DP(4K) ×1（本体）＋着脱式ハブの HDMI(4K) ×1。最大3画面。USB-C: 100W出力10G ×1・10G ×1・ハブ側5G ×1、USB-A: 480M ×2・ハブ側5G ×1。PC への給電は着脱式ハブの USB-C コネクタ経由で最大85W。
- `anker-prime-tb5-dock`: HDMI 2.1 と DP 2.1 は同時使用不可。USB-C 10G ×2（合計45W）、USB-A 10G ×3。
- `anker-nano-hub-8in1`: HDMI 4K@60Hz ×2（4K60 対応のため hdmi2.0 として記録）。USB-C 10G ×1（データのみ）、USB-A 10G ×2、PD 入力100W（PCへは最大85W）、SD/microSD。
- `ugreen-revodok-pro-10in1`: 公式日本ストアの本文は「8K@30Hz で1台 / 4K@60Hz で2台」のみ。ポート内訳・寸法は画像のみでテキスト未確認。

</details>

### キーボード

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `hhkb-hybrid`（既存） | HHKB Professional HYBRID Type-S | bt・usbc | 29.4 × 12 × 4 | 36,750円 | high | [1](https://happyhackingkb.com/jp/products/hybrid_types/) [2](https://search.kakaku.com/HHKB%20Professional%20HYBRID%20Type-S/) |
| `realforce-r3`（既存） | REALFORCE R3 | bt・usbc | — | — | low | [1](https://pc.watch.impress.co.jp/docs/news/1360965.html) [2](https://kakaku.com/item/K0001456965/spec/) |
| `keychron-q1max`（既存） | Keychron Q1 Max | bt・receiver・usbc | 32.75 × 14.5 × 3.18 | 43,890円 | high | [1](https://www.keychron.com/products/keychron-q1-max-qmk-via-wireless-custom-mechanical-keyboard) [2](https://keychron.jp/products/keychron-q1-max-qmk-via-jis) |
| `mx-keys-s`（既存） | Logicool MX Keys S | bt・receiver | 43.02 × 13.16 × 2.05 | 21,780円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-keys-s) |
| `mx-mech-mini`（既存） | Logicool MX Mechanical Mini | bt・receiver | 31.26 × 13.16 × 2.61 | 22,220円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-mechanical-mini) |
| `magic-kb`（既存） | Apple Magic Keyboard（Touch ID） | bt・usbc | 27.89 × 11.49 × 1.09 | 21,800円 | high | [1](https://www.apple.com/jp/shop/product/MXCK3J/A) |
| `hhkb-studio` | HHKB Studio | bt・usbc | 30.8 × 13.2 × 4.1 | 44,000円 | high | [1](https://happyhackingkb.com/jp/products/studio/) [2](https://happyhackingkb.com/manual/studio/ug-jis/jp/ug/topic/specification.html) [3](https://search.kakaku.com/HHKB%20Studio/) |
| `realforce-r3s-tkl` | REALFORCE R3S テンキーレス（R3SC11） | usbc | 36.9 × 14.2 × 3.8 | 25,740円 | medium | [1](https://kakaku.com/item/K0001490000/spec/) |
| `realforce-r3s` | REALFORCE R3S フルサイズ（R3SA11） | usbc | 45.5 × 14.2 × 3.8 | 26,620円 | medium | [1](https://kakaku.com/item/K0001489994/spec/) |
| `realforce-r3-tkl` | REALFORCE R3 テンキーレス（R3HC11） | bt・usbc | 37.9 × 16.3 × 3 | 36,520円 | medium | [1](https://www.rentio.jp/matome/2021/12/realforce-r3hc11-review/) [2](https://kakaku.com/item/K0001456971/spec/) [3](https://pc.watch.impress.co.jp/docs/news/1360965.html) |
| `mx-keys-mini` | Logicool MX Keys Mini | bt | 29.6 × 13.2 × 2.1 | 18,370円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-keys-mini) |
| `mx-mechanical` | Logicool MX Mechanical | bt・receiver | 43.39 × 13.16 × 2.61 | 24,640円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-mechanical) |
| `keychron-v1-max` | Keychron V1 Max | bt・receiver・usbc | 32.85 × 14.87 × 2.94 | 19,360円 | high | [1](https://www.keychron.com/products/keychron-v1-max-qmk-via-wireless-custom-mechanical-keyboard) [2](https://keychron.jp/products/keychron-v1-max-qmk-via-jis) |
| `keychron-k2-he` | Keychron K2 HE | 未確認 | — | 27,940円 | low | [1](https://keychron.jp/products/keychron-k2-he-jis) |
| `nuphy-air75-v2` | NuPhy Air75 V2 | 未確認 | — | 23,800円 | low | [1](https://search.kakaku.com/NuPhy%20Air75%20V2/) |
| `nuphy-halo75-v2` | NuPhy Halo75 V2 | 未確認 | 32 × 13.5 × 3.29 | 36,660円 | medium | [1](https://search.kakaku.com/NuPhy%20Halo75%20V2/) |
| `lofree-flow2` | Lofree Flow 2 (84) | bt・receiver・usbc | — | 23,760円 | medium | [1](https://www.lofree.co/products/flow-2-84-low-profile-mechanical-keyboard) [2](https://search.kakaku.com/Lofree%20Flow%202/) |

<details><summary>メモ</summary>

- `hhkb-hybrid`: Bluetooth 4.2 LE（4台）＋USB Type-C（ケーブル別売）。単3×2またはUSB給電。高さはキートップ上面まで。価格は価格.com最安。
- `realforce-r3`: realforce.co.jp は Cloudflare で取得不可。フルサイズのハイブリッド（R3HA11）の寸法は検索結果で 456×163×39mm と 465×163×30mm が食い違い、開けたページでは確認できず。テンキーレス（R3HC11）はレビューで 約379×163×30mm（下記 realforce-r3-tkl）。Bluetooth 5.0（4台）＋USB Type-C、単3×2 または USB給電。
- `keychron-q1max`: 高さはキーキャップなしの後端 3.18cm（前端 2.07cm）。キーキャップ込みの値は非公開。価格は Keychron Japan の JIS 版。
- `mx-keys-s`: Logi Bolt レシーバー同梱。USB-C 充電。
- `magic-kb`: JIS・テンキーなし。高さ 0.41〜1.09cm。
- `hhkb-studio`: Bluetooth 5.0 LE（4台）＋USB 2.0 Type-C。単3×4 または USB給電。ポインティングスティック・ジェスチャーパッド。価格は価格.com最安。
- `realforce-r3s-tkl`: USB 有線専用。寸法は価格.comの「369x38x142mm（幅x高さx奥行）」。公式サイト（realforce.co.jp）は Cloudflare で取得不可。ケーブルの端子形状（本体側）は未確認。
- `realforce-r3s`: USB 有線専用。価格.comの寸法。
- `realforce-r3-tkl`: 寸法はレビュー記事の「約379×163×30mm」。Bluetooth 5.0（4台）＋USB Type-C、単3×2 または USB バスパワー。
- `mx-keys-mini`: Bluetooth のみ（同梱物にレシーバーなし）。USB-C 充電。セール 16,700円。
- `mx-mechanical`: Bluetooth または Logi Bolt。
- `keychron-v1-max`: 2.4GHz・Bluetooth 5.1・有線。高さはキーキャップなし後端 2.94cm（前端 2.15cm）。価格は Keychron Japan の JIS 版。
- `keychron-k2-he`: 価格のみ確認（Keychron Japan JIS 版）。keychron.com の製品ページは 404／アクセス制限で寸法・接続を未確認。
- `nuphy-air75-v2`: nuphy.com は Vercel のボット確認（429）で取得不可。価格.comの販売店情報で「有線・ワイヤレス / Bluetooth・USB」と表記。寸法未確認。
- `nuphy-halo75-v2`: 販売店の商品説明「サイズ(H×W×D)mm：32.9x320x135mm」。公式ページは取得不可。接続方式は未確認。
- `lofree-flow2`: 公式: 2.4GHz / Bluetooth / 有線 USB-C の3モード。寸法はページに記載なし。価格は価格.com最安（初代 Flow は現行ラインナップに見当たらず Flow 2 を採用）。

</details>

### マウス・トラックパッド

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `mx-master-3s`（既存） | Logicool MX Master 3S | bt・receiver | 8.43 × 12.49 × 5.1 | 17,820円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-master-3s) |
| `mx-ergo-s`（既存） | Logicool MX ERGO S | bt・receiver | 9.98 × 13.25 × 5.14 | 19,580円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-ergo-s-wireless-trackball-mouse) |
| `gpx-sl2`（既存） | Logicool G PRO X SUPERLIGHT 2 | receiver・usbc | 6.35 × 12.5 × 4 | 26,950円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/pro-x2-superlight-wireless-mouse) |
| `magic-trackpad`（既存） | Apple Magic Trackpad | bt・usbc | 16 × 11.49 × 1.09 | 18,800円 | high | [1](https://www.apple.com/jp/shop/product/MXK93ZA/A) |
| `magic-mouse`（既存） | Apple Magic Mouse | bt・usbc | 5.71 × 11.35 × 2.16 | 10,800円 | high | [1](https://www.apple.com/jp/shop/product/MXK53ZA/A) |
| `mx-master-4` | Logicool MX Master 4 | bt・receiver | 8.84 × 12.82 × 5.08 | 21,890円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-master-4) |
| `mx-anywhere-3s` | Logicool MX Anywhere 3S | bt | 6.5 × 10.05 × 3.44 | 15,950円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-anywhere-3s) |
| `razer-viper-v3-pro` | Razer Viper V3 Pro | receiver・usbc | 6.39 × 12.71 × 3.99 | 25,980円 | high | [1](https://www.razer.com/jp-jp/gaming-mice/razer-viper-v3-pro) |

<details><summary>メモ</summary>

- `mx-master-3s`: Bolt レシーバーは標準エディションのみ付属。セール価格 16,200円。
- `mx-ergo-s`: 同梱物に Logi Bolt レシーバー。Bluetooth 対応は今回開いたページの抽出範囲では未確認（カタログ値を維持）。セール 17,800円。
- `gpx-sl2`: LIGHTSPEED USB レシーバー＋USB A-C ケーブル同梱。セール 24,500円。
- `magic-trackpad`: USB-C 版。
- `magic-mouse`: USB-C 版（ホワイト）。充電端子は底面。
- `mx-master-4`: Bluetooth LE ＋ USB-C 形状の Bolt レシーバー同梱。充電式 650mAh。セール 18,905円。
- `mx-anywhere-3s`: 同梱物はマウスと USB-C 充電ケーブルのみ（レシーバーなし）。
- `razer-viper-v3-pro`: HyperSpeed Wireless（HyperPolling ドングルで最大8000Hz）＋有線（USB A-C ケーブル）。セール 19,870円。

</details>

### オーディオ

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `pebble`（既存） | Creative Pebble V3 | usbc・bt / 給電 10W | 12.3 × 12 × 11.8 | 4,384円 | high | [1](https://jp.creative.com/p/speakers/creative-pebble-v3) |
| `wh1000xm6`（既存） | Sony WH-1000XM6 | bt | — | 51,200円 | medium | [1](https://kakaku.com/item/K0001689794/spec/) |
| `edifier-mr4` | Edifier MR4 | （USB接続なし） | 14 × 17 × 22.8 | 16,977円 | medium | [1](https://kakaku.com/item/K0001501745/spec/) |
| `edifier-r1280db` | Edifier R1280DB | bt | 14.6 × 19.6 × 23.4 | 13,981円 | medium | [1](https://kakaku.com/item/K0001519200/spec/) [2](https://www.edifier.com/global/p/bookshelf-speakers/r1280db) |
| `audioengine-a2plus` | Audioengine A2+ Next Gen | bt | 10.6 × 13.8 × 15.6 | 44,990円 | medium | [1](https://kakaku.com/item/K0001723627/spec/) |
| `presonus-eris35bt` | PreSonus Eris 3.5BT 2nd Gen | bt | 14.1 × 16.4 × 21 | 20,978円 | medium | [1](https://kakaku.com/item/K0001666448/spec/) |

<details><summary>メモ</summary>

- `pebble`: 寸法は「各サテライトスピーカー 約123×120×118mm」（縦横の順は記載なし）。2台1組。高ゲインモードは 10W（5V/2A）の USB-C 給電が必要。USB オーディオ・Bluetooth 5.0・3.5mm 入力。
- `wh1000xm6`: Bluetooth 5.3、USB Type-C 充電、254g。寸法は価格.com仕様に記載なし、ソニー公式は未取得。
- `edifier-mr4`: 1台あたり 140×228×170mm（幅x高さx奥行）。AC 電源、RCA・ミニプラグ入力。公式ページは仕様が動的読み込みで取得できず。
- `edifier-r1280db`: 1台あたり 146×234×196mm。AC 電源、Bluetooth・光・同軸・RCA ×2。
- `audioengine-a2plus`: 1台あたり 106×156×138mm。AC 電源、Bluetooth 5.3、ミニ・RCA 入力、USB 音声入力あり（端子形状未確認）。
- `presonus-eris35bt`: 1台あたり 141×210×164mm。AC 電源、Bluetooth 5.0。無印 Eris 3.5 2nd Gen（BTなし）もある。

</details>

### カメラ・マイク

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `c920n`（既存） | Logicool C920n | usba | 9.4 × 7.1 × 4.33 | 9,680円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/hd-pro-webcam-c920n) |
| `facecam-mk2`（既存） | Elgato Facecam MK.2 | usbc | 8.4 × 6.1 × 3.8 | 19,615円 | high | [1](https://www.elgato.com/jp/ja/p/facecam-mk2) [2](https://kakaku.com/item/K0001616520/spec/) |
| `mv7plus`（既存） | Shure MV7+ | usbc | 9 × 20.7 × 16.4 | 46,530円 | medium | [1](https://www.shure.com/ja-JP/products/microphones/mv7) [2](https://kanjitsu.com/product/mv7/) [3](https://kakaku.com/item/K0001619951/spec/) |
| `wave3`（既存） | Elgato Wave:3 | usbc | — | 28,980円 | low | [1](https://www.elgato.com/jp/ja/p/wave-3-black) |
| `mx-brio` | Logicool MX Brio | usbc | 9.8 × 5.2 × 6.2 | 33,000円 | high | [1](https://www.logicool.co.jp/ja-jp/shop/p/mx-brio-4k-webcam) |
| `insta360-link2` | Insta360 Link 2 | 未確認 | 7.13 × 3.8 × 5.89 | 27,500円 | medium | [1](https://kakaku.com/item/K0001655260/spec/) |
| `obsbot-tiny2` | OBSBOT Tiny 2 | 未確認 | 4.7 × 4.4 × 6.2 | 51,800円 | medium | [1](https://kakaku.com/item/K0001596597/spec/) |

<details><summary>メモ</summary>

- `c920n`: クリップ込み。USB-A ケーブル 1.5m 一体。セール 8,800円。
- `facecam-mk2`: 公式 幅84×高さ38×奥行61mm（マウント含まず）。USB Type-C（USB 3.0）、USB-C to C ケーブル同梱。価格は価格.com最安。
- `mv7plus`: 国内代理店の仕様「ヨーク付きのマイクロホン H164×L207×D90mm」。デスクスタンドは含まない寸法。USB-C と XLR、USB バスパワー。
- `wave3`: 公式ページは現在「Wave:3 MK.2」（28,980円）。仕様表に 46×85×167mm と 40×66×153mm（いずれもスタンドなし）の2列があり、どちらが旧Wave:3かテキストからは判別できず。
- `mx-brio`: マウント付き閉じた状態 幅98×奥行52×高さ62mm（本体のみ 98×36×44）。USB-C to C（USB 3.0）ケーブル同梱。
- `insta360-link2`: 公式サイトは Cloudflare で取得不可。価格.com仕様 71.3×58.9×38mm（幅x高さx奥行）、インターフェースは「USB」とだけ記載。Link 2C は 62.7×30.2×26mm・22,300円。
- `obsbot-tiny2`: 公式サイトは接続不可。価格.com仕様 47×62.02×44mm（幅x高さx奥行）、「USB」。Tiny 2 Lite は 48.37×64.2×46.46mm・26,000円。

</details>

### 照明

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `screenbar-halo`（既存） | BenQ ScreenBar Halo | usbc・usba / 給電 6.5W | 50 × 9.5 × 9.7 | — | high | [1](https://www.benq.com/ja-jp/lighting/monitor-light/screenbar-halo/spec.html) |
| `key-light-air`（既存） | Elgato Key Light Air | usbc / 給電 30W | 31.9 × 3.3 × 20.7 | 26,160円 | medium | [1](https://www.elgato.com/jp/ja/p/key-light-air) [2](https://search.kakaku.com/Key%20Light%20Air%20MK.2/) |
| `hue-bar`（既存） | Philips Hue ライトバー | （USB接続なし） | — | — | low | — |
| `screenbar-halo2` | BenQ ScreenBar Halo 2 | usbc / 給電 15W | 50 × 14.3 × 10.9 | 27,800円 | high | [1](https://www.benq.com/ja-jp/lighting/monitor-light/screenbar-halo-2/spec.html) [2](https://search.kakaku.com/ScreenBar%20Halo%202/) |
| `screenbar-pro` | BenQ ScreenBar Pro | usbc / 給電 8.5W | 50 × 13.5 × 9.2 | 23,400円 | high | [1](https://www.benq.com/ja-jp/lighting/monitor-light/screenbar-pro/spec.html) [2](https://search.kakaku.com/ScreenBar%20Pro/) |
| `screenbar-plus` | BenQ ScreenBar Plus | usba / 給電 5W | 45 × 9 × 9.2 | — | high | [1](https://www.benq.com/ja-jp/lighting/monitor-light/screenbar-plus/spec.html) |
| `xiaomi-lightbar` | Xiaomi Mi モニター掛け式ライト | usbc / 給電 5W | 44.8 × 2.3 × 2.3 | 6,280円 | high | [1](https://www.mi.com/jp/product/mi-computer-monitor-light-bar/specs) [2](https://search.kakaku.com/Mi%20%E3%83%A2%E3%83%8B%E3%82%BF%E3%83%BC%E6%8E%9B%E3%81%91%E5%BC%8F%E3%83%A9%E3%82%A4%E3%83%88/) |

<details><summary>メモ</summary>

- `screenbar-halo`: ライト本体 50×9.5×9.7cm、リモコン 7.4×7.4×3.8cm。後継は Halo 2。
- `key-light-air`: 公式ページは現在「Key Light Air MK.2」。パネル 幅319×高さ207×奥行33mm（寸法は W×H×D の順）、デスククランプで取り付け高さ 60〜88cm。電源は USB-C／電源アダプター／モバイルバッテリー、最大30W。旧 Key Light Air（AC アダプター）とは電源仕様が違う。
- `hue-bar`: 今回は公式ページを確認できず。未検証。
- `screenbar-halo2`: 電源入力 5V / 最大3A USB Type-C、最大15W。リモコン 7.4×7.4×3.95cm。価格は価格.com。
- `screenbar-pro`: 5V / 最大1.7A USB Type-C、最大8.5W。
- `screenbar-plus`: 5V 1A USB、最大5W。有線コントローラー 7.4×7.4×3.2cm。電源側のコネクタ形状は「USB Port」とだけ記載（USB-A と判断）。価格未確認。
- `xiaomi-lightbar`: 本体 φ23×448mm、5W（5V=1A）、USB Type-C。モデル MJGJD01YL。

</details>

### 充電器

| id | 名前 | 仕様 | 寸法 W×D×H | 価格 | 信頼度 | 出典 |
|---|---|---|---|---|---|---|
| `apple-96w`（既存） | Apple 96W USB-C電源アダプタ | usbc×1 / 合計 96W / 1ポート最大 96W | — | 10,800円 | medium | [1](https://www.apple.com/jp/shop/product/MW2L3AM/A) |
| `apple-140w`（既存） | Apple 140W USB-C電源アダプタ | usbc×1 / 合計 140W / 1ポート最大 140W | — | 13,800円 | medium | [1](https://www.apple.com/jp/shop/product/MW2M3AM/A) |
| `anker-prime-100w` | Anker Prime Charger (100W, 3 Ports, GaN) | usbc×2, usba×1 / 合計 100W / 1ポート最大 100W | 6.8 × 4.5 × 2.9 | 8,990円 | high | [1](https://www.ankerjapan.com/products/a2688) |
| `anker-nano-70w` | Anker Nano Charger (70W, 3 Ports) | usbc×2, usba×1 / 合計 70W / 1ポート最大 70W | 5.3 × 4.3 × 3.2 | 5,990円 | high | [1](https://www.ankerjapan.com/products/a121a) |
| `anker-prime-base-150w` | Anker Prime Charging Base (150W, 3 Ports) | usbc×2, usba×1 / 合計 150W / 1ポート最大 140W | 10.3 × 10.3 × 2.3 | 12,990円 | high | [1](https://www.ankerjapan.com/products/a1903) |
| `ugreen-nexode-pro-100w` | UGREEN Nexode Pro 100W 4ポート充電器 | ? / 合計 100W / 1ポート最大 ?W | — | 9,980円 | low | [1](https://jp.ugreen.com/products/ugreen-100w-4-port-gan-charger) |
| `apple-70w` | Apple 70W USB-C電源アダプタ | usbc×1 / 合計 70W / 1ポート最大 70W | — | 8,800円 | medium | [1](https://www.apple.com/jp/shop/product/MXN53AM/A) |

<details><summary>メモ</summary>

- `apple-96w`: Apple の製品ページに寸法の記載なし。カタログの [8, 8, 2.9] は公式では確認できない。
- `apple-140w`: 寸法の記載なし。
- `anker-prime-100w`: 単ポート最大100W（上側 USB-C）。
- `anker-nano-70w`: 3ポート時 45W＋7.5W＋7.5W。
- `anker-prime-base-150w`: USB-C1 最大140W、USB-C2 最大100W、USB-A 最大22.5W。卓上型。ポゴピンで Prime モバイルバッテリーも充電。
- `ugreen-nexode-pro-100w`: 公式日本ストアは価格と「100W・4ポート」のみテキスト。ポート内訳・寸法は画像のみで未確認。
- `apple-70w`: 寸法の記載なし。

</details>

## 3. 指定されたモデル名の扱い

- **MacBook Air 13"/15" (M4)** → Apple の現行は **M5**。M5 を `mba13-m5` / `mba15-m5` として追加し、M4 は既存 `mba-m4` で検証。
- **MacBook Pro (M5)** → 発売済み。14" M5 / M5 Pro、16" M5 Pro を追加（16" は M5 Pro から）。
- **Mac mini** → 現行は **M6 / M5 Pro**。両方追加。Mac Studio も現行 M5 Max / M5 Ultra。
- **Apple Pro Display XDR** → 日本の Apple サイトでは **Studio Display XDR**（27インチ 5K 120Hz）に置き換わっている（/pro-display-xdr/ がこの製品）。`studio-display-xdr` として追加。
- **Samsung ViewFinity S9** → 日本では正規販売なし（samsung.com/jp にモニターの扱いなし、価格.comは中古のみ）。**スキップ**。
- **MX Master 4** → 発売済み。追加。
- **Lofree Flow** → 現行は Flow 2。Flow 2 (84) を追加。
- **Quntis** → 公式の日本向け仕様ページがなく、Amazon に似た型番が多数あるため**スキップ**。
- **Logicool C920n / MX ERGO S / G PRO X SUPERLIGHT 2** → いずれも現行販売中で既存値どおり。

## 4. 確認できなかったこと・注意点

- **サイトに入れなかったメーカー**: 東プレ REALFORCE（Cloudflare）、NuPhy（Vercel のボット確認）、Insta360（Cloudflare）、OBSBOT（接続リセット）、eizo.co.jp（TLS リセット／503。EIZO は eizo.com の公式仕様で代替）、Samsung Japan（403）。これらは販売店情報（価格.com）やレビューで補い、medium / low にしました。
- **モニターの最低高さを計算したもの**: ASUS PA279CRV / PG27UCDM、BenQ EX271UZ は「スタンド込み高さ」が1つしか載っていないため、公式の高さ調整幅を引いて最低位置を出しました（`dimAsListed` に元の値）。Samsung Odyssey G9 は1値のみで最低・最高が不明のため low。
- **HDMI / DP / USB-C のバージョン**: LG・EIZO・一部の BenQ／ASUS は日本語仕様表にバージョンがなく `null` にしました（`notes` に「4K60対応」など分かる範囲を記載）。Dell の「HDMI 2.1（TMDS）」は帯域が HDMI 2.0 相当なので `hdmi2.0` で記録しています。
- **DSC**: 公式に明記があるものだけ true。記載がないものは `null`（false ではありません）。
- **Apple の電源アダプタ（96W / 140W / 70W）** は公式ページに寸法がありません。既存の `apple-96w` の [8, 8, 2.9] は裏付けなし。
- **Philips Hue ライトバー・Sony WH-1000XM6 の寸法**、**Keychron K2 HE・NuPhy Air75 V2・UGREEN 2製品の詳細**は未確認です。
- **ポートの「tb」**: モニター・ドックの `ports.tb` は下流（デバイス側）の Thunderbolt ポート数です。ホスト用は数えていません。
- **価格**: 公式ストアのセール価格ではなく通常価格を `price` に入れ、セール価格は notes に書きました。価格.com の値は日々変わります。
- **スピーカーの寸法**は1台分です（2台1組）。

