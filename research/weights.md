# モニター重量・VESA / モニターアーム仕様(メーカー公表値)

調査日: 2026-10-08。推定・計算で埋めた値はなし(lb→kg 換算も未使用、全てページ記載の kg/mm)。詳細・根拠 URL は `weights.json`。

## モニター

| id | kg_panel | kg_with_stand | vesa | 根拠 | 備考 |
|---|---|---|---|---|---|
| studio-display | 5.5 | 6.3 | adapter-model | https://support.apple.com/kb/SP864 | Apple サポートの 2022 年版仕様表。kg_panel=VESAマウントアダプタ版(スタンドなし別モデル)の本体重量 5.5kg。kg_with_stand=傾き調整スタンド版 6.3kg(傾き・高さ調整スタンド版は 7.7kg)。VESA は 100x100mm 対応の「VESA マウントアダプタ」版を選ぶ別構成(購入時に選択)。 |
| studio-display-tb5 | 5.4 | 6.3 | adapter-model | https://www.apple.com/jp/studio-display/specs/ | 2026 年の Thunderbolt 5 版(日本の Apple 公式仕様ページ、Thunderbolt 5 ポート記載)。kg_panel=VESA マウントアダプタ版 5.4kg。kg_with_stand=傾き調整スタンド版 6.3kg(傾き・高さ調整スタンド版は 7.6kg)。VESA は 100x100mm 対応のアダプタ版(別構成)。初代(2022)は 5.5/6.3/7.7kg で数値が違う。 |
| studio-display-xdr | 6.3 | 8.5 | adapter-model | https://www.apple.com/jp/studio-display-xdr/specs/ | Apple 公式に存在(Pro Display XDR とは別製品)。日本の公式: 傾き・高さ調整スタンド搭載 8.5kg、VESA マウントアダプタ搭載 6.3kg。kg_panel=VESA アダプタ版 6.3kg。インド公式ページは 8.48kg / 6.30kg(同じ値の小数表記)。VESA は 100x100mm 対応のアダプタ版(別構成)。 |
| u2723qe | 4.48 | 6.64 | 100x100 | https://dl.dell.com/content/manual12109242-dell-u2723qe-monitor-user-s-guide.pdf?language=en-us | Dell 公式ユーザーズガイド(U2723QX/U2723QE/U3223QE 共通、英語・グローバル版)。Weight without stand assembly 4.48kg、with stand and cables 6.64kg。VESA 100x100(VESAカバーの裏)。日本語版ガイドは未確認。 |
| u2724de | 5.23 | 7.37 | 100x100 | https://dl.dell.com/content/manual17050394-dell-ultrasharp-27-thunderbolt-hub-monitor-u2724de-user-s-guide.pdf?language=en-us | Dell 公式ユーザーズガイド(英語・グローバル版)。Weight without stand assembly 5.23kg、with stand and cables 7.37kg。VESA 100x100。 |
| u2725qe | 5.22 | 7.06 | 100x100 | https://dl.dell.com/content/manual8442610-dell-ultrasharp-32-4k-thunderbolt-hub-monitor-u3225qe-user-s-guide.pdf?language=en-us | Dell 公式ユーザーズガイド(U2725QE/U3225QE 共通、英語・グローバル版)。27インチ列: without stand assembly 5.22kg、with stand and cables 7.06kg。VESA 100x100。 |
| u3225qe | 6.52 | 9.34 | 100x100 | https://dl.dell.com/content/manual8442610-dell-ultrasharp-32-4k-thunderbolt-hub-monitor-u3225qe-user-s-guide.pdf?language=en-us | 同上ガイドの32インチ列: without stand assembly 6.52kg、with stand and cables 9.34kg。VESA 100x100。 |
| u3425we | 7.78 | 10.81 | 100x100 | https://inquirecontent2.ingrammicro.com/User-Manual/1081754978.pdf | Dell 公式ガイド PDF(Rev. A00、Ingram Micro の配布サーバー経由で取得。dl.dell.com の同ファイルは URL 未特定)。Weight without stand assembly 7.78kg、with stand and cables 10.81kg。VESA 100x100(VESAカバーの裏)。 |
| u3223qe | 5.65 | 10.36 | 100x100 | https://dl.dell.com/content/manual12109242-dell-u2723qe-monitor-user-s-guide.pdf?language=en-us | U2723QE と共通ガイドの32インチ列: without stand assembly 5.65kg、with stand and cables 10.36kg。VESA 100x100。列の対応(27インチ=左、32インチ=右)は 27インチ値が Dell 公式販売ページの値と一致することで確認。 |
| u4021qw | 9.5 | 13.8 | 100x100 | https://dl.dell.com/manuals/all-products/esuprt_electronics_accessories/esuprt_electronics_accessories_monitors/dell-u4021qw-monitor_User's-Guide_en-us.pdf | Dell 公式ユーザーズガイド(Rev. A00, 英語)。Weight without stand assembly 9.5kg、with stand and cables 13.8kg。VESA 100x100。 |
| 27up850n | 4.1 | 5.9 | 100x100 | https://www.lg.com/ca_en/monitors/uhd-4k-5k/27up850n-w/ | LG カナダ公式仕様: Weight without Stand 4.1kg / with Stand 5.9kg / Wall Mountable 100x100。LG 日本の仕様ページは未確認(地域で型番末尾が違う場合あり)。 |
| 27up850k | 4.1 | 5.9 | 100x100 | https://www.lg.com/uk/monitors/uhd-4k-5k/27up850k-w/ | LG 英国公式仕様: without Stand 4.1kg / with Stand 5.9kg / Wall Mountable 100x100。LG 日本の仕様ページは未確認。 |
| 32un880k | 6.5 | 10.3 | 100x100 | https://www.lg.com/uk/monitors/uhd-4k-5k/32un880k-b/ | LG 英国公式仕様: without Stand 6.5kg / with Stand 10.3kg / Wall Mountable 100x100。Ergo はアーム一体型スタンド。kg_panel はスタンド(アーム)を外した本体のみの重さで、VESA にはアーム一体スタンドを外してから別アームを付ける。日本の LG ページは未確認。 |
| 32gs95ue | 5.6 | 9.0 | 100x100 | https://www.lg.com/uk/monitors/gaming/32gs95ue-b/ | LG 英国公式仕様: without Stand 5.6kg / with Stand 9kg / Wall Mountable 100x100。日本の LG ページは未確認。 |
| 27gr93u | 4.5 | 6.4 | 100x100 | https://www.lg.com/au/monitors/ultragear-gaming/27gr93u-b/ | LG オーストラリア・香港の公式仕様(同値): without Stand 4.5kg / with Stand 6.4kg / Wall Mountable 100x100。日本の LG ページは未確認。 |
| pa279crv | 4.07 | 5.78 | 100x100 | https://www.asus.com/displays-desktops/monitors/proart/proart-display-pa279crv/techspec/ | ASUS グローバル公式: Net Weight without Stand 4.07kg / Net Weight 5.78kg(スタンド込み)/ VESA Wall Mounting 100x100mm。地域で数値が変わる旨の注記あり。 |
| pg27ucdm | 4.97 | 7.62 | 100x100 | https://rog.asus.com/monitors/27-to-31-5-inches/rog-swift-oled-pg27ucdm/spec/ | ASUS ROG 公式: Net Weight without Stand 4.97kg / with Stand 7.62kg / VESA Wall Mounting 100x100mm(重さは地域差あり)。 |
| mb16acv | 0.9 | —(null) | none | https://www.asus.com/displays-desktops/monitors/zenscreen/zenscreen-mb16acv/techspec/ | ASUS 公式: Net Weight 0.9kg(モバイルモニター、固定スタンドなし)。VESA マウントの記載は公式仕様になく、1/4インチ三脚ネジのみ記載のため "none" とした(「VESA 非対応」と明記はされていない)。kg_with_stand は公式に記載なし。 |
| odyssey-g9 | 9.2 | 12.9 | 100x100 | https://www.samsung.com/ca/monitors/gaming/odyssey-oled-g9-g95sc-49-inch-240hz-curved-dual-qhd-ls49cg954snxza/ | Samsung カナダ公式 G95SC(LS49CG954SNXZA): Set Weight without Stand 9.2kg / with Stand 12.9kg / Wall Mount 100x100。シンガポール版(LS49CG954SEXXS)は 8.8/12.6kg と地域で違うという検索結果あり(そのページ自体は未確認)。G93SC は未調査。日本の Samsung ページは未確認。 |
| pd2706u | 5.3 | 8.3 | 100x100 | https://www.benq.com/en-us/monitor/professional/pd2706u/spec.html | BenQ 米国公式: Net Weight (w/o Base) 5.3kg / Net Weight 8.3kg / VESA Wall Mount 100x100mm。 |
| ex271uz | 5.14 | 7.43 | 100x100 | https://www.benq.com/en-us/monitor/gaming/ex271uz/spec.html | BenQ 米国公式: Net Weight (w/o Base) 5.14kg / Net Weight 7.43kg / VESA Wall Mount 100x100mm。 |
| ev2785 | 4.9 | 8.2 | 100x100 | https://www.eizo.com/products/flexscan/ev2785/ | EIZO グローバル公式: Net Weight (Without Stand) 4.9kg / Net Weight 8.2kg / Hole Spacing (VESA Standard) 100x100mm。EIZO 日本ページは未取得。 |
| ev3240x | 6.7 | 9.4 | 100x100 | https://www.eizo.com/products/flexscan/ev3240x/ | EIZO グローバル公式: Net Weight (Without Stand) 6.7kg / Net Weight 9.4kg / Hole Spacing (VESA Standard) 100x100mm。EIZO 日本ページは未取得。 |
| innocn-27d1u | —(null) | —(null) | —(null) | https://pc.watch.impress.co.jp/docs/news/2039520.html | メーカー公式の仕様ページ/マニュアルが見つからず公式に記載なし。参考(不採用): PC Watch の記事は「重量 3.95kg」とするがスタンド有無が不明。Amazon.co.jp の商品名に「VESA規格対応」とあるがパターン(75/100)の記載なし。 |

## モニターアーム

| id | 荷重 kg | クランプ cm | グロメット上限 cm | 最大inch | VESA | 根拠 | 備考 |
|---|---|---|---|---|---|---|---|
| ergotron-lx | 3.2–11.3 | —(null)–6.0 | 5.7 | 34 | 75x75, 100x100 | https://media.ergotron.com/reserved/resources/05-056-ea-orig.pdf | 45-241-026(2ピースクランプ+グロメット付き、現行)。仕様表: 7-25 lbs (3.2-11.3 kg)、≤34"、VESA MIS-D/MIS-C。『デスク取付の選び方』PDF(LX Desk Mount Monitor Arm の列)に2ピースクランプ <2.4" (60mm)、グロメット <2.25" (57mm) とあり、下限は記載なし。別売ローTop-mount C-clamp は 0.98-1.38" (25-35mm)。日本の Ergotron ページは取得不可(403) |
| ergotron-hx | 9.1–19.1 | 1.6–6.6 | 5.7 | 49 | MIS-D/E/F (see website) | https://media.ergotron.com/reserved/resources/05-hxarms-ea-orig.pdf | 45-475-026/-216/-224(シングル、クランプ+グロメット付き)。仕様表: 20-42 lbs (9,1-19,1 kg)、≤49"、VESA は公式表記が "MIS-D/E/F See website" のため原文のまま。『デスク取付の選び方』PDF(HX Desk Monitor Arm)に標準2ピースクランプ 0.6"-2.59" (16-66mm)、グロメット <2.25" (57mm)。日本の Ergotron ページは取得不可(403) |
| amazon-arm | —(null)–11.3 | —(null)–—(null) | —(null) | 32 | 75x75, 100x100 | https://www.amazon.co.jp/gp/product/B00MIBN16O | Amazon.co.jp 商品ページ(ASIN B00MIBN16O、製品型番 K001387 とされる)の記載: 32インチ・11.3kgまで、VESA MIS-D/MIS-C(100x100/75x75)。Amazon の販売ページなので『販売店』情報。下限荷重・天板厚みは取得できた範囲では記載なし。検索結果では取説のクランプ範囲を 0.4-2.4 inch としていたが、取説原文を直接確認できていないため不採用。『エルゴトロン LX のOEM』はコミュニティの情報で公式裏付けなし。Amazonベーシックには別モデル(10kg/7kg)あり |
| cofo-arm-pro | 2.5–14.0 | 1.0–5.0 | 5.5 | 40 | 75x75, 100x100 | https://cofo.jp/products/monitorarm-pro | COFO 日本公式: 天板厚さ クランプ10-50mm、グロメット10-55mm(grommet 下限は10mm)。耐荷重 約2.5kg〜14kg(各アーム)、推奨モニターサイズ 17-40インチ。シングル/デュアル共通の仕様欄。 |
| flo-arm | 2.0–7.0 | 0.0–6.5 | —(null) | 34 | 75x75, 100x100 | https://www.hermanmiller.com/content/dam/hermanmiller/documents/product_literature/product_sheets/flo_monitor_arm_product_sheet.pdf | Herman Miller 公式(商品シート: 2-7kg、34インチまで(フラット/曲面1000R以上)、VESA準拠。EU公式ストア: VESA 75&100、16:9は32"まで・21:9は34"まで)。クランプは2種: Split Clamp 0-65mm、Top Mount Clamp 12-25mm(上記は Split の範囲)。グロメット取付は公式に記載なし。日本の Herman Miller ページには仕様の数値記載なし |

## null の項目(公式に記載なし/未確認)

- monitors.mb16acv.kg_with_stand
- monitors.innocn-27d1u.kg_panel
- monitors.innocn-27d1u.kg_with_stand
- monitors.innocn-27d1u.vesa
- arms.ergotron-lx.clamp_min_cm
- arms.amazon-arm.load_min_kg
- arms.amazon-arm.clamp_min_cm
- arms.amazon-arm.clamp_max_cm
- arms.amazon-arm.grommet_max_cm
- arms.flo-arm.grommet_max_cm

## 販売店情報を使ったもの

 - arms.amazon-arm(Amazon.co.jp 商品ページ。メーカー資料ではない)
- arms.ergotron-lx / ergotron-hx の取付厚みは Ergotron 公式の『デスク取付の選び方』PDF(図中の数値の読み取り)

## 怪しい・要注意

- **studio-display-tb5 / studio-display-xdr**: kg_panel は『VESA マウントアダプタ版』の重さ。スタンド無しの単体販売ではなく、購入時に構成として選ぶ。
- **studio-display(初代)** と TB5 版は数値が異なる(5.5/7.7 → 5.4/7.6)ので混ぜない。
- **u3425we**: Dell ガイドを Ingram Micro のサーバー経由で取得(内容は Dell Rev. A00)。dl.dell.com の直 URL は未特定。
- **Dell 全般 / LG / ASUS / Samsung / BenQ / EIZO**: 日本語の公式ページ・ガイドは未確認で、グローバル(英語)版の公式値。『日本優先』の指示は未達。地域で値が変わる注記(ASUS・Samsung)あり。
- **mb16acv**: VESA は『記載なし』を none と判断(公式が非対応と書いたわけではない)。
- **odyssey-g9**: G95SC のみ(G93SC 未調査)。シンガポール版は値が違うとの検索結果あり(未確認)。
- **innocn-27d1u**: 公式ページ見つからず全て null。PC Watch の 3.95kg はスタンド有無不明で不採用。
- **ergotron-lx**: 2ピースクランプの下限は『<2.4" (60mm)』のみで下限なし → clamp_min=null。
- **ergotron-hx**: VESA は公式が "MIS-D/E/F See website" とだけ書いており具体的な mm は未確認。
- **amazon-arm**: 型番 K001387 は Amazon 出品ページ/レビューに基づく。耐荷重下限・天板厚は未確認。
- **flo-arm**: clamp_min=0 は Split Clamp の公式記載『0-65mm』そのまま。
