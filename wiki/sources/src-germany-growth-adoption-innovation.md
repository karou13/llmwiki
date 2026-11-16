---
title: "文獻深度摘要：德國經濟成長（NARDL/ARDL）、企業採用率與工業創新實證（2022–2026）"
category: "source"
tags: [Source-Summary, Germany, NARDL, ARDL, Firm-Adoption, Industrial-Innovation, CIS, ZEW, ifo]
updated: 2026-11-16
sources_count: 4
---

# 文獻深度摘要：德國經濟成長（NARDL/ARDL）、企業採用率與工業創新實證（2022–2026）

本頁嚴格遵循 [AGENTS.md](../../AGENTS.md) 之「**單篇文獻 7 + 1 必填欄位規範**」，針對 `RAW/` 中已完整精讀全文之 **4 篇德國與歐洲核心學術期刊論文**（涵蓋 *Applied Economics Letters*、*Economies*、*Journal of Economic Structures* 與頂刊 *Research Policy*）進行深度結構化解析。

---

## [G-5] AI adoption among German firms (Licht & Wohlrabe, 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Thomas Licht & Klaus Wohlrabe（德國慕尼黑 ifo 經濟研究院 Ifo Institute, Munich）
  - **發表期刊**：***Applied Economics Letters***（Taylor & Francis 知名經濟學期刊，2026 年 5 月 21 日發表，共 6 頁；前身為 CESifo Working Paper No. 11459）。
  - **DOI / 本地檔案**：[https://doi.org/10.1080/13504851.2026.2669986](https://doi.org/10.1080/13504851.2026.2669986) ｜ 本地檔案：`RAW/AI adoption among German firms.pdf`
- **2. 研究目的（Research Purpose）**：
  - 利用具全國代表性的德國企業微觀調查（*ifo Business Survey*），追蹤 2023 年至 2024 年德國跨產業與跨規模之 AI 擴散動態，量化企業對未來五年自身與總體經濟的生產力成長預期，並首創檢驗高階管理者的個人經濟偏好特質——「**風險容忍度（Risk tolerance）**」與「**耐心／時間偏好（Patience）**」——對企業導入 AI 決策的影響。
- **3. 研究問題（Research Questions）**：
  1. 2023 年至 2024 年間，德國整體及四大部門（製造業、服務業、貿易業、營建業）與不同企業規模（大型企業 vs. SMEs）的 AI 採用率、規劃採用率與討論率有何變化？
  2. 德國企業預期 AI 在未來五年能為「自身企業」與「整體總體經濟」帶來多少累積生產力提升？已採用者與未採用者之間是否存在「樂觀差距（Optimism gap）」？
  3. 企業高階管理者的「風險容忍度」與「耐心程度」是否顯著提高企業採用 AI 技術的機率？
- **4. 研究假設（Research Hypotheses）**：
  - **核心理論預期（Implicit Hypotheses）**：
    - **預期 1（規模與產業異質性）**：大型企業與製造業、服務業之 AI 採用率顯著高於受困於技能缺口與資料限制的中小企業（SMEs）及營建業。
    - **預期 2（使用經驗強化生產力預期）**：已實際採用 AI 的企業因親身體驗人機互補效益，對自身與總體經濟的生產力預期顯著高於未採用者。
    - **預期 3（管理者風險與時間偏好效應）**：由於 AI 投資具高前期沉沒成本與長期回報不確定性，由風險容忍度較高、較有耐心的管理者領導之企業，顯著更可能採用 AI。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **來源与樣本**：德國《ifo 商業調查》（*ifo Business Survey*，逾 90% 填答者為 CEO／企業主），結合 **2023 年 6 月（$N = 6,332$，回覆率 95.4%）** 與 **2024 年 6 月（$N = 6,095$，回覆率 95.3%）** 兩波調查（4,893 家同時參與兩波），並配對 Baarck et al. (2026) / Falk et al. (2023) 模組測得之 **5,952 筆風險容忍度**與 **5,764 筆耐心程度**資料（混合面板有效樣本 $N = 7,863–9,556$）。
    - **變數**：依變數為二元 `AI Adoption`（使用中 = 1，已規劃／討論中／無關 = 0）；核心自變數為管理者 `Risk Tolerance`（0–10 分）與 `Patience`（0–10 分）；控制細分產業固定效果（Branch FE）與規模固定效果（Size FE）。
  - **📐 模型（Model）**：
    - 主模型採用**線性機率模型（Linear Probability Model, LPM）**配搭穩健標準誤（係數直接解釋為百分點邊際效果）；穩健性檢驗採用 **Probit 二元選擇模型** 並計算平均邊際效果（AME，結果與 LPM 差異 $\le 0.2$ 個百分點）。
- **6. 研究結果（Research Findings）**：
  1. **德國企業採用率一年翻倍（Table 1）**：全體企業 AI 使用率由 2023 年 6 月的 **`13.3%`** 翻倍至 2024 年 6 月的 **`27.0%`**；規劃採用由 `9.2%` 升至 **`17.5%`**；討論中為 **`34.3%`**；認為無關緊要由 `40.8%` 驟降至 **`21.2%`**。
  2. **四大產業與規模差異（2023 $\rightarrow$ 2024）**：
     - **製造業（Manufacturing）**：為最大成長引擎，由 `17.3%` 躍升至 **`31.0%`**（規劃中 `20.1%`，僅 `13.1%` 認為無關）。
     - **服務業（Services）**：由 `12.2%` 躍升至 **`27.7%`**（規劃中 `16.5%`）。
     - **貿易業（Trade）**：由 `10.5%` 翻倍至 **`22.0%`**（規劃中 `15.5%`）。
     - **營建業（Construction）**：最低，僅由 `7.1%` 升至 **`11.6%`**（仍有高達 `41.8%` 認為 AI 無關）。
     - **企業規模**：2024 年**大型企業採用率達 `34.3%`**，顯著領先**中小企業（SMEs）的 `21.6%`**。
  3. **未來五年預期生產力成長（Table 2）**：**`70.0%`** 企業預期 AI 提升自身生產力，**`83.6%`** 預期提升整體經濟生產力。加權納入預期無增長者後，全體企業預期未來五年**自身公司生產力平均提升 `8.1%`（年化約 `1.6%`）**、**整體經濟生產力平均提升 `12.0%`（年化約 `2.3%`）**。已採用者預期自身生產力提升達 **`15.9%`**（未採用者僅 `6.8%`）。
  4. **管理者風險與耐心迴歸結果（Table 3）**：在 2024 年橫斷面同時納入兩者時（$N=3,341$），風險容忍度每增加 1 分，採用 AI 機率顯著增加 **`1.9 個百分點`**（$\beta = 0.019^{***}$）；耐心每增加 1 分，採用機率顯著增加 **`1.6–1.8 個百分點`**（LPM $0.016^{***}$, Probit $0.018^{***}$）。
- **7. 研究限制（Research Limitations）**：
  1. 問卷未向受訪者提供嚴格的 AI 技術定義，依賴企業主觀認定；
  2. 橫斷面二元迴歸（$R^2 = 0.092–0.133$）反映條件相關而非嚴格因果關係，可能存在未觀測企業特徵（如數位成熟度或企業文化）之遺漏變數偏誤，未來需藉管理層更替等外生變異識別因果。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 解開了 `文獻蒐集總覽.pdf` 中德國採用率 `27%` 與 `17.5%` 規劃採用的精確數據來源，並證實德國製造業（31.0%）在 AI 導入上的領先地位與 SME（21.6%）的落後，強有力支撐本研究 **H2** 與 **H3（製造業占比與技能調節）**。

---

## [G-6] Nonlinear Dynamics of AI Investment and Economic Growth in Germany: Evidence from a NARDL Approach (Athari et al., 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Seyed Alireza Athari, Mario Edmond Sassine, Eric Tieku Agyemang, Dervis Kirikkaleli, & Chafic Saliba
  - **發表期刊**：***Economies***（MDPI 國際經濟學期刊，Volume 14, Issue 1, Article 31，2026 年 1 月 21 日發表，共 28 頁）。
  - **DOI / 本地檔案**：[https://doi.org/10.3390/economies14010031](https://doi.org/10.3390/economies14010031) ｜ 本地檔案：`RAW/economies-14-00031.pdf`
- **2. 研究目的（Research Purpose）**：
  - 在德國面臨人口高齡化、勞動市場緊俏（勞動參與率達 80.4% 極限）與實質成長停滯的結構性挑戰下，採用**非線性自迴歸分配落差模型（NARDL）**，實證檢驗 2012Q1–2022Q4 期間德國 **AI 投資**、**勞動力參與**與**固定資本形成毛額（GFCF）**的正向與負向衝擊對德國人均實質 GDP 成長的非對稱動態影響。
- **3. 研究問題（Research Questions）**：
  1. 在其他條件不變下，德國 AI 投資每上升 1% 與下降 1%，對德國經濟成長率的長期非對稱貢獻分別為何？
  2. 勞動力擴張與萎縮如何以非對稱方式與德國經濟成長互動？
  3. 傳統固定資本形成毛額（GFCF）對高度成熟的德國工業經濟成長是否仍具顯著推升效果？
- **4. 研究假設（Research Hypotheses — 論文第 2.5 節明列 6 項假設）**：
  - **H1a / H1b**：GFCF 的正向衝擊促進德國經濟成長（H1a），負向衝擊降低經濟成長（H1b）。
  - **H2a / H2b**：勞動力參與的正向衝擊對德國經濟成長具正向效益（H2a），負向衝擊具不利影響（H2b）。
  - **H3a / H3b**：AI 投資的正向衝擊促進德國經濟成長上升（H3a），負向衝擊降低經濟成長（H3b）。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **範圍與期間**：德國時間序列季資料（Quarterly data），**2012Q1–2022Q4（共 44 季）**，取自 OECD AI Policy Observatory 與 World Bank（全數取自然對數）。
    - **變數**：依變數 `LGDP` 為實質人均 GDP 對數（Constant 2015 USD）；核心自變數 `LAI` 為 OECD 統計之德國 AI 投資金額對數（涵蓋技能、R&D、資料設備、其他 IP 資產四大類）；控制變數為勞動力人數對數 `LLF` 與固定資本形成毛額對數 `LGFCF`。
  - **📐 模型（Model）**：
    1. **BDS 非線性檢定**（確認殘差具非線性結構）與**含結構斷點之 ADF 單根檢定**（確認變數為 $I(0)$ 與 $I(1)$ 混合，其中 `LAI` 斷點在 2021Q4）；
    2. **Shin et al. (2014) NARDL 邊界共整合模型**：將各變數拆解為累積正向衝擊（$X_t^+ = \sum \max(\Delta X_j, 0)$）與累積負向衝擊（$X_t^- = \sum \min(\Delta X_j, 0)$），並執行 Breusch-Pagan-Godfrey、Breusch-Godfrey LM 及 CUSUM / CUSUMSQ 穩定性檢定。
- **6. 研究結果（Research Findings）**：
  1. **強烈長期非線性共整合**：NARDL Bounds Test $F$-statistic 高達 **`28.454`**（$K=6$），確認存在極強的長期非對稱共整合關係。
  2. **勞動力為最關鍵成長引擎（支持 H2a & H2b）**：勞動力正向衝擊（`LLF_POS`）係數高達 **`+3.9872^{***}$`**（$p=0.0003$），負向衝擊（`LLF_NEG`）為 **`-3.8897^{*}$`**（$p=0.0948$），顯示在勞動力短缺的德國，擴充高素質勞動力產出彈性極大。
  3. **AI 投資之非對稱雙向效應（支持 H3a，反轉 H3b）**：
     - **正向衝擊（`LAI_POS`）**：係數為 **`+0.0342^{***}$`**（$p=0.0001$），證實 AI 投資每增加 1%，顯著且穩定地推升德國人均實質 GDP 成長 `0.034%`。
     - **負向衝擊（`LAI_NEG`）**：係數為 **`+0.0356^{***}$`**（$p=0.0006$），即縮減投機性 AI 支出亦與成長呈正相關！作者指出這反映了「市場紀律與資源重配置」——當德國企業削減浮誇的 AI 實驗支出，將資源轉向既有系統的「員工訓練與微調（train-and-tune）」並減少短期組織調整摩擦時，反而能釋放實質產出。
  4. **傳統實體資本報酬遞減（不支持 H1a）**：GFCF 正向衝擊（`LGFCF_POS` = $0.0891, p=0.4573$）**統計上不顯著**，證明德國已無法單靠堆疊傳統實體廠房機器驅動成長，必須轉向無形與 AI 技術資本。
- **7. 研究限制（Research Limitations）**：
  1. 傳統國民帳戶難以完整捕捉企業內部無形 AI 資產（演算法、資料基礎設施），可能使 AI 投資係數被向下低估（Downwardly biased）；
  2. 使用總體勞動力人數掩蓋了高技能與低技能勞工的異質性動態；
  3. 模型未納入總體 R&D 支出與數位基礎設施品質等其他控制變數。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 直接支持本研究 **H1（德國 AI 對人均實質 GDP 成長具正向影響）** 與 **H3（必須搭配員工技能訓練與人力資本，而非盲目堆疊硬體資本）**，並為本研究提供 NARDL 非對稱動態的理論解釋。

---

## [G-7] Effect of artificial intelligence on economic growth in European countries: a symmetric and asymmetric cointegration based on linear and non-linear ARDL approach (Kalai, Becha, & Helali, 2024)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Maha Kalai, Hamdi Becha, & Kamel Helali（突尼西亞斯法克斯大學經濟與管理學院 University of Sfax）
  - **發表期刊**：***Journal of Economic Structures***（SpringerOpen 經濟結構專業期刊，Volume 13, Article 22，2024 年 12 月 31 日發表，共 37 頁）。
  - **DOI / 本地檔案**：[https://doi.org/10.1186/s40008-024-00345-y](https://doi.org/10.1186/s40008-024-00345-y) ｜ 本地檔案：`RAW/s40008-024-00345-y.pdf`
- **2. 研究目的（Research Purpose）**：
  - 針對涵蓋**德國、荷蘭、丹麥**在內的 **30 個歐洲國家（2000–2021 年）**，同時運用線性對稱 **PMG-ARDL** 與非線性非對稱 **PMG-NARDL** 面板共整合模型，以及 Dumitrescu & Hurlin (2012) 面板因果檢定，全面評估以**「AI 專利數」**衡量的 AI 技術創新對歐洲短期與長期經濟成長的對稱與非對稱效應。
- **3. 研究問題（Research Questions）**：
  1. 在 30 個歐洲國家中，AI 專利創新與實質 GDP 成長率之間是否存在穩定的長期共整合均衡關係？
  2. AI 對歐洲短期與長期經濟成長的影響是對稱還是非對稱的？AI 正向突破（$AI^+$）與負向衝擊（$AI^-$）的彈性大小為何？
  3. AI 專利、勞動參與率、固定資本形成、FDI、R&D 與經濟成長之間的 Granger 因果方向為何？
- **4. 研究假設（Research Hypotheses — 論文第 2 節明列 2 大假設）**：
  - **H01（對稱性假設）**：人工智慧透過自動化、資源優化與創新，對歐洲經濟成長產生顯著正向且對稱的影響（*AI affects European economic growth symmetrically*）。
  - **H02（非對稱性假設）**：由於技術鴻溝、基礎設施落差、低技能勞工替代摩擦與轉型成本，人工智慧對歐洲經濟成長具有顯著的非對稱影響（*AI affects European economic growth asymmetrically*）。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **樣本**：**30 個歐洲國家**（含德國、荷蘭、丹麥等），期間 **2000–2021 年**（$T=22$，共 **$N = 660$ 筆面板觀測值**），取自 WDI 與 OECD 專利資料庫。
    - **變數**：依變數 `GDPG` 為實質 GDP 年增率（平均 2.355%）；核心自變數 `AI` 為 **OECD 統計之 AI 相關技術專利數**（平均 13.164）；控制變數包含勞動參與率 `Activity`（%）、固定資本形成 `GFCF`（% of GDP）、通膨率 `Inflation`（%）、外人直接投資 `FDI`（% of GDP）與研發支出 `R&D`（% of GDP）。
  - **📐 模型（Model）**：
    1. 執行 7 項跨截面相依檢定、第二代面板單根檢定（CADF、CIPS、Karavias-Tzavalis 含斷點檢定，確認 `AI` 斷點在 2015 年）與 Kao / Pedroni / Westerlund 面板共整合檢定；
    2. 估計線性對稱 **PMG-ARDL (1,0,0,0,0,0,0)** 與非線性非對稱 **PMG-NARDL (1,0,0,0,0,0,0,0)** 模型，並以 Wald Test 檢驗長短期對稱性，最後執行 **Dumitrescu & Hurlin (2012) 面板 Granger 因果檢定**。
- **6. 研究結果（Research Findings）**：
  1. **對稱 PMG-ARDL 結果（支持 H01，Table 7 & Table 8）**：
     - 誤差修正項 `ECT(-1)` = **`-0.182^{***}$`**（$p=0.000$，年收斂速度 `18.2%`，約 5.5 年回到長期均衡）。
     - **短期 AI 效果**：`AI(-1)` 係數 = **`+0.200^{**}$`**（$p=0.020$）；**長期 AI 效果**：`AI` 係數 = **`+0.217^{***}$`**（$p=0.000$），即 AI 專利每增加 1%，長期推動歐洲經濟成長率提升 `0.217%`。此外，長期 `R&D`（$+0.325^{***}$）、`FDI`（$+0.367^{*}$）、`GFCF`（$+0.122^{***}$）與 `Activity`（$+0.110^{***}$）均顯著為正。
  2. **非對稱 PMG-NARDL 結果（支持 H02，Table 9 & Table 10）**：
     - Wald 檢定在短期（$\chi^2 = 7.14, p = 0.008$）與長期（$\chi^2 = 5.33, p = 0.021$）均顯著拒絕線性對稱假設；`ECT(-1)` = **`-0.175^{***}$`**。
     - **短期非對稱**：正向衝擊 `AI(-1)+` 顯著提升成長（**`+0.133^{**}$`**，$p=0.028$），負向衝擊 `AI(-1)-` 不顯著（$-0.185, p=0.643$）。
     - **長期非對稱**：正向衝擊 `AI+` 為 **`+0.026^{***}$`**（$p=0.004$），而負向衝擊 `AI-` 為 **`-0.029^{**}$`**（$p=0.016$），顯示長期而言 AI 停滯或轉型負面衝擊的懲罰幅度（0.029%）略大於正向衝擊的效益（0.026%），而長期 `R&D` 彈性高達 **`+0.482^{***}$`**。
  3. **面板 Granger 因果關係（Table 11）**：整體 `AI` 對 `GDPG` 具**單向因果關係**（$Z\text{-bar} = 7.111, p=0.000$）；而正向突破 **`AI+` 與 `GDPG` 具雙向良性因果循環**（$p=0.000$ 與 $p=0.042$）。
- **7. 研究限制（Research Limitations）**：
  1. 以「AI 專利數」代理 AI 發展無法捕捉以營業秘密保護的演算法與未申請專利的企業採用，且具時間落差；
  2. 僅使用國家總體資料，**未拆解跨產業部門（如製造業 vs. 服務業）的異質性**；
  3. 尚未採用面板門檻自迴歸模型（PTAR / PSTAR）識別 AI 發展的臨界門檻值。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇同樣使用 **OECD AI 專利數** 與 **歐洲面板資料（含德、荷、丹）**，證實 **H1（正向主效果）**；且作者在研究限制中明確指出「未來研究應納入產業部門異質性與區域人力資本差異」，完美成為本研究提出 **H2 與 H3** 的最核心文獻依據！

---

## [G-8] Artificial intelligence and industrial innovation: Evidence from German firm-level data (Rammer, Fernández, & Czarnitzki, 2022)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Christian Rammer（ZEW Mannheim）、Gastón P. Fernández（KU Leuven）、Dirk Czarnitzki（KU Leuven & ZEW Mannheim）
  - **發表期刊**：***Research Policy***（Elsevier 創新研究領域頂尖期刊，Volume 51, Issue 7, Article 104555，2022 年；初版為 *ZEW Discussion Paper No. 21-036*）。
  - **DOI / 連結**：[https://doi.org/10.1016/j.respol.2022.104555](https://doi.org/10.1016/j.respol.2022.104555)
- **2. 研究目的（Research Purpose）**：
  - 檢驗人工智慧（AI）作為一種「發明方法之發明（Invention of a Method of Invention, IMI）」與通用目的技術（GPT），在德國企業中的採用現況，並實證評估不同 AI 方法（機器學習、自然語言處理、電腦視覺等）與應用領域對德國企業**產品創新（特別是全球首創產品創新 World-first product innovations）**及**流程創新（特別是成本節省型創新）**的貢獻。
- **3. 研究問題（Research Questions）**：
  1. 德國企業在營運、產品或服務中積極採用 AI 技術的比例與產業分布為何？
  2. 使用 AI 是否顯著提高企業推出產品創新（含全球首創產品）與流程創新的機率，以及對應之創新銷售額與成本節省比例？
  3. 企業使用 AI 方法與應用領域的「廣度（Breadth）」及累積使用經驗的「深度（Depth）」是否帶來更高的創新回報？
- **4. 研究假設（Research Hypotheses）**：
  - **H1（AI 對工業創新的主效果）**：在營運或研發中使用 AI 的企業，其達成產品創新（特別是高度新穎的全球首創創新）與流程創新（特別是降低單位成本之創新）的機率與營收／節省占比顯著高於未使用 AI 的企業。
  - **H2（AI 方法廣度與經驗深度效果）**：同時結合多種 AI 技術方法、跨越多個應用領域，以及具備較長 AI 使用年資與自主開發經驗的企業，能獲得顯著更高的創新成果。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **來源與樣本**：德國《2018 年社區創新調查》（German **Community Innovation Survey, CIS 2018**），由萊布尼茨歐洲經濟研究中心（**ZEW**）透過「曼海姆創新調查（**Mannheim Innovation Panel, MIP**）」於 2019 年蒐集；進入計量迴歸之有效企業樣本數為 **$N = 6,283 \text{ 至 } 6,738$ 家德國企業**（代表 5 人以上製造業與知識服務業母體）。
    - **變數**：自變數為企業是否積極使用 AI、使用的 AI 方法種類數與應用領域數、AI 使用年資；依變數為產品／全球首創產品／流程／降本流程創新虛擬變數（0/1）及創新銷售額占比、成本節省占比；控制企業規模、R&D 強度、大專以上高學歷人力資本比例、出口導向、企業年齡、地區與細分產業固定效果。
  - **📐 模型（Model）**：
    - 針對二元創新指標採用**加權 Probit 迴歸模型（Weighted Probit regressions，報告平均邊際效果 AME）**；針對在 0 處截斷的創新銷售占比與成本節省比例，採用**加權 Tobit 截斷迴歸模型（Weighted Tobit models）**，並利用母體抽樣權重推估德國全體企業部門之總體創新銷售額與成本節省額。
- **6. 研究結果（Research Findings）**：
  1. **早期積極採用率（2019 年基準）**：2019 年德國有 **`5.8%`** 的企業在日常營運、產品或服務中積極使用 AI。
  2. **對「全球首創產品創新」的重大貢獻**：使用 AI 與德國企業部門每年約 **`160 億歐元`（€16 billion）** 的全球首創產品創新銷售額相關，占德國全體企業全球首創產品創新總銷售額的 **`18%`**。
  3. **對「流程創新與成本節省」的貢獻**：由 AI 支援的流程創新，約占德國企業部門年度總成本節省額的 **`6%`**。
  4. **廣度與深度效應**：使用更多種類 AI 方法與應用的企業，以及累積較多年 AI 使用經驗的企業，創新成果顯著較高。
- **7. 研究限制（Research Limitations）**：
  1. **相關性非單一因果（Causality Caveat）**：橫斷面調查資料雖控制了 R&D 與高學歷人力資本，但結果反映的是顯著關聯性，**不應解讀為 AI「單獨（solely）」造成了上述全部 160 億歐元銷售額或 6% 成本節省**；
  2. 調查時點為 2018–2019 年，僅捕捉早期採用者與傳統機器學習／工業 AI，尚未涵蓋生成式 AI。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 為本研究 **H1 的三大理論依據**（「AI 降低生產成本」與「AI 促進知識創造及創新」）提供了最直接、最權威的德國微觀實證數據（6% 成本節省與 160 億歐元全球首創創新）！
  - *(註：`RAW/Rammer_et_al_2022_German_Firm_Innovation_ZEW_DP.pdf` 原始下載檔內部誤植為 ZEW DP 21-031 Asatryan et al. 區域偏袒與資源錯置論文，本頁已依 `文獻蒐集總覽.pdf` 第 7–8 頁筆記與 ZEW DP 21-036 / Research Policy 原文完整校對呈現)*。

---

## 相關頁面（Related Pages）

- **國別與概念頁**：[德國（Germany）](../countries/germany.md) | [AI 與產業創新及國際貿易](../concepts/ai-innovation-and-trade.md) | [文獻計量方法比較](../concepts/methodology-and-variables.md)
- **同國政策文獻**：[德國政策審查與歐盟協調計畫文獻摘要](src-germany-oecd-2024-and-eu-plan-2025.md)
