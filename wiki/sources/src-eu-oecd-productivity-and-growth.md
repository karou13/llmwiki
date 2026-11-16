---
title: "文獻深度摘要：歐盟與 OECD 生產力、經濟成長與企業 AI 採用跨國實證（2023–2026）"
category: "source"
tags: [Source-Summary, EU, OECD, Euro-Area, Productivity, GDP, Panel-ARDL, Fixed-Effects, IMF, BIS, CEPR, ECB, Technovation]
updated: 2026-11-16
sources_count: 8
---

# 文獻深度摘要：歐盟與 OECD 生產力、經濟成長與企業 AI 採用跨國實證（2023–2026）

本頁嚴格遵循 [AGENTS.md](../../AGENTS.md) 之「**單篇文獻 7 + 1 必填欄位規範**」，針對 `RAW/` 中已完整精讀全文之 **8 篇歐盟、歐元區、OECD 與全球跨國核心實證研究**（涵蓋 Eurochambres 2026、OECD 2026、EU27 2024、*Notas Económicas* 2026、ECB 2025/2026、IMF 2025、BIS/CEPR 2025/2026、以及 *Technovation* 2023）進行完整 8 大維度深度解析。

---

## [EU-1] The Effects of AI on Europe's Productivity (Eurochambres Chief Economists Working Paper #3, 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Ilaria Colajanni, Cornelius Knaack（Eurochambres），以及計量分析團隊 Laszlo Trautmann, Benedek Lits, Budai Júlia Dorka（匈牙利商工會 MKIK-GVI、Corvinus University & WU Vienna）與歐洲各國商會（含德國 DIHK、義大利 Unioncamere 等）。
  - **出版機構與系列**：**Eurochambres**（歐洲商工總會），*Chief Economists Working Paper #3*（2026 年出版，共 42 頁）。
  - **官方連結／本地檔案**：[https://www.eurochambres.eu/publication/the-effects-of-ai-on-europes-productivity-eurochambres-chief-economists-working-paper-3/](https://www.eurochambres.eu/publication/the-effects-of-ai-on-europes-productivity-eurochambres-chief-economists-working-paper-3/) ｜ 本地檔案：`RAW/Eurochambres_2026_Effects_of_AI_on_Europes_Productivity.pdf`
- **2. 研究目的（Research Purpose）**：
  - 剖析 2021–2025 年歐洲 32 國企業 AI 採用率在跨國、跨企業規模與跨產業部門間的擴散動態，並結合 Orbis 企業財務資料進行固定效果迴歸，實證檢驗「部門 AI 採用率是否已轉化為可衡量的企業勞動生產力提升」，進而拆解 8 種 AI 技術與 8 種業務用途的異質性貢獻。
- **3. 研究問題（Research Questions）**：
  1. 2021–2025 年間，AI 在歐洲各國、不同規模（小、中、大）與 31 個產業部門間的採用率分布為何？跨國差距是否收斂？
  2. 在控制企業投資、財務槓桿與資產規模後，部門 AI 採用率是否與企業勞動生產力呈顯著正相關？
  3. 哪幾種特定 AI 技術（如影像辨識、流程自動化）與業務用途（如行銷與銷售）是推動歐洲勞動生產力成長的主力？
  4. 採用「客製化／結合研發之 AI」與僅使用「標準化現成 AI 工具」，對企業營收成長預期的影響有何差異？
- **4. 研究假設（Research Hypotheses）**：
  - **假設 1（跨國路徑依賴與規模／產業異質性）**：AI 採用在歐洲跨國間具高度僵固性（不收斂），隨企業規模單調遞增（大 > 中 > 小），且集中於知識密集服務業。
  - **假設 2（對勞動生產力之正向主效果）**：透過常規任務自動化與勞工增能互補，AI 採用與企業勞動生產力呈顯著正相關。
  - **假設 3（特定技術與客製化整合優勢）**：直接節省視覺檢驗與行政協調人力的技術（影像辨識、流程自動化）及變現快的客戶端用途（行銷與銷售）短期生產力效果最強；且客製化整合 AI 比現成工具更能創造營收成長。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - 結合 **Eurostat ICT 企業調查（2021, 2023, 2024, 2025 年，涵蓋 32 國、31 個非金融產業部門、10 人以上企業）** 與 **Orbis 企業財務資料庫（2020–2024 年）**，按「國家 $c \times$ 部門 $s \times$ 規模 $z \times$ 年齡組 $a \times$ 年份 $t$」聚合匹配（基準迴歸樣本 **$N = 11,692 \text{ 至 } 11,787$ 個細格**）；另含義大利 Unioncamere **4,204 家企業**微觀調查。
    - **變數**：依變數 $\ln(LP)_{c,s,z,a,t}$ 為勞動生產力對數（總營業收入 $\div$ 總就業人數）；自變數為部門 AI 採用率 `TANY`（0–1）及 8 項技術／8 項用途子指標；控制變數（取落後一期）為有形固定投資 `total_investment_lag`、短期負債占總資產槓桿比 `leverage_lag` 與總資產對數 `ln_assets_lag`。
  - **📐 模型（Model）**：
    - **高維度固定效果迴歸模型（Fixed-Effects Regression）**：
      $$\ln(LP)_{c,s,z,a,t} = \beta \cdot AI_{c,s,t} + \gamma X_{c,s,z,a,t-1} + \mu_{ct} + \delta_s + \theta_z + \phi_a + \varepsilon_{c,s,z,a,t}$$
      控制「國家 $\times$ 年份」固定效果 $\mu_{ct}$、產業部門固定效果 $\delta_s$、規模固定效果 $\theta_z$ 與年齡固定效果 $\phi_a$（標準誤叢聚於國家 $\times$ 部門）；義大利樣本採 **Probit/Logit 平均邊際效果（AME）** 模型。
- **6. 研究結果（Research Findings）**：
  1. **跨國、規模與產業擴散結果**：
     - EU27 平均採用率由 2021 年 **`7.65%`** 升至 2025 年 **`19.95%`**，但跨國高度僵固（$R^2 = 0.75$）：2025 年**丹麥（`42%`）**、芬蘭（`38%`）、瑞典（`35%`）、比利時（`34.5%`）、盧森堡（`33.5%`）、**荷蘭（`33%`）** 領跑，**德國為 `26%`**，羅馬尼亞僅 `5.2%`。
     - 所有 32 國皆呈嚴格規模梯度（大型 > 中型 > 小型）；2025 年產業平均以 **ICT（`60%`：丹麥 `78%`、德國 `71%`、荷蘭 `66%`）** 與 **專業科學技術服務業（`46%`：丹麥 `61%`、荷蘭 `57%`、德國 `54%`）** 最高，電力能源業 `34%`、**製造業 `23%`（丹麥 `37%`、荷蘭 `31%`、德國 `29%`）**、零售 `18%`、營造業墊底僅 `11%`。
  2. **固定效果迴歸主結果（Table 1）**：
     - 未加控制變數時，`ai_adoption` 係數為 **`0.331^{**}$`**（$SE=0.139, N=11,787$）；加入落後控制變數之基準模型係數為 **`0.286^{**}$`**（$SE=0.120, N=11,692$）——即**部門 AI 採用率每提高 `1 個百分點`，企業勞動生產力顯著提升約 `0.29%–0.33%`**！
  3. **技術與用途拆解（Figures 5–9）**：
     - 8 種 AI 技術中，僅 **「AI 影像辨識（`TIR`）」** 與 **「AI 流程自動化（`TPA`）」** 兩項呈現統計顯著正向關聯，且係數皆高達 **`0.5 以上`**（其餘 6 項如機器學習、自然語言生成之 95% CI 跨越 0）；
     - 8 種業務用途中，**唯有「行銷與銷售（`PMS`）」呈現統計顯著正向關聯（係數約 `0.5`）**。
  4. **義大利客製化 AI 實證（Annex 7.4）**：相較於僅用標準化工具，不使用 AI 企業預期營收成長機率低 **`-10.4 個百分點`**（$-0.104^{***}$），而使用**客製化／結合研發 AI** 之企業預期營收成長機率顯著高出 **`+5.1 個百分點`**（$0.051^{*}$，微小型企業更高出 **`+6.0 個百分點`**）。
- **7. 研究限制（Research Limitations）**：
  1. Eurostat 僅提供「國家 $\times$ 部門 $\times$ 年份」總體採用率，無法觀測 Orbis 中個別企業是否使用 AI（衡量的是部門擴散關聯而非個體處理效果）；
  2. 面板年數僅 3–4 年，Within-$R^2$ 偏低，反映橫斷面關聯而非嚴格因果；
  3. Orbis 偏向較大型公司化企業，且排除了金融業（Sector K）。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 直接支撐本研究 **H1（AI 提升歐洲勞動生產力）** 與 **H2/H3（丹麥 42%、荷蘭 33%、德國 26% 在 ICT、專業服務與製造業的結構性差異）**，並收錄德國商會（DIHK/IHKs）推動 EQF 4–6 三階 AI 認證培訓與 KI-Scout 學徒計畫等制度細節。

---

## [EU-2] Digital Technology Diffusion in the Age of AI: Cross-country Evidence from Microdata (Calvino, Costa, & Haerle, OECD 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Flavio Calvino, Hélder Costa, & Daniel Haerle（OECD Directorate for Science, Technology and Innovation，協同 15 國統計局與學者團隊，含德國 Luca Fontanelli、丹麥 Frederic Warzynski、荷蘭 Michael Polder 等）。
  - **出版機構與系列**：**OECD**，*OECD Science, Technology and Industry Working Papers*, No. 2026/01（2026 年 1 月出版，共 89 頁）。
  - **DOI / 本地檔案**：[https://dx.doi.org/10.1787/ebc2debe-en](https://dx.doi.org/10.1787/ebc2debe-en) ｜ 本地檔案：`RAW/OECD_2026_Digital_Technology_Diffusion_Microdata.pdf`
- **2. 研究目的（Research Purpose）**：
  - 透過 OECD `Digital Diffuse` 分散式微觀資料架構，整合 **15 個 OECD 國家（含德國、荷蘭、丹麥）** 之官方企業 ICT 調查、資產負債表與勞雇連結微觀資料（LEED），系統性剖析五項先進數位技術（**AI、大數據分析、IoT、機器人、3D 列印**）與基礎賦能技術（雲端、ERP、CRM、高速寬頻）之共生網路、採納決定因素（規模、人力資本、技術資本）及生產力溢酬，歸納出「七大典型事實（Seven Stylised Facts）」。
- **3. 研究問題（Research Questions）**：
  1. AI 等先進數位技術是否高度依賴雲端、ERP、CRM 與高速寬頻等基礎賦能技術？
  2. 五項先進數位技術在 15 個 OECD 國家與不同產業部門間的擴散型態有何差異？
  3. 企業的人力資本（大專以上高等教育員工占比、ICT 專才、員工培訓、技術職 Techies 占比）與既有技術資本如何影響企業採用 AI 的機率？
  4. 採用 AI 的企業是否具有更高的勞動生產力？當控制人力資本與既有技術資本後，AI 的「生產力溢酬」是否依然存在？
- **4. 研究假設（Research Hypotheses — 七大典型事實檢驗架構）**：
  - **H1–H3（共生、產業異質與規模優勢）**：AI 建立在基礎數位技術之上（H1），集中於 ICT 與專業科學服務業（H2），且大型企業採用機率顯著較高（H3）。
  - **H4–H5（人力資本與技術資本雙重賦能）**：具備高速寬頻、高既有技術強度、聘用 ICT 專才、提供培訓及**高大專學歷員工比例**的企業，採用 AI 的機率顯著較高。
  - **H6–H7（生產力溢酬與互補性吸收假設 / J-Curve）**：AI 採用企業平均生產力較高（H6），但此溢酬主要源於其較高的人力資本與技術資本互補；若抽離互補資產，單純導入 AI 的直接生產力溢酬將大幅減弱（H7）。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **15 個 OECD 國家（2015–2023 年）**：比利時、加拿大、**丹麥（DNK，$N=15,804$，IDA LEED + FIRE 財報）**、愛沙尼亞、法國、**德國（DEU，$N=6,159$，ZEW MIP 調查）**、愛爾蘭、以色列、義大利、日本、韓國、**荷蘭（NLD，$N=30,295$，CBS LEED + SFO 財報）**、葡萄牙、瑞士、英國。
    - **變數**：自變數為 5 項先進技術二元採用（0/1）、`ICT Spec.`（聘用 ICT 專才）、`ICT Train.`（非 ICT 員工培訓）、LEED **大專以上高等教育員工比例（Share of tertiary-educated workers）**、技術職 `Techies` 比例、100Mbit/s `Broad band`、既有數位技術強度 `Tech intensity`；依變數為對數勞動生產力 $\log(\text{Turnover/Employment})$ 與附加價值／MFP。
  - **📐 模型（Model）**：
    1. **技術共生網路分析**：特徵向量中心性（Eigenvector centrality）與 Springclass 社群偵測；
    2. **採納決定因素模型（LPM 與 Probit）**：控制規模組、年齡組、2 位碼產業固定效果 $\delta_s$ 與年份固定效果 $\gamma_t$；
    3. **基準與擴充生產力迴歸模型（OLS with FE & Wooldridge 2009 生產函數）**：比較未控制與控制人力／技術資本向量 $X'_{it}$ 前後的 AI 生產力係數 $\beta_1$。
- **6. 研究結果（Research Findings — 德、荷、丹精確微觀數據）**：
  1. **技術共生與產業分布（Facts 1 & 2）**：雲端運算、高速寬頻、ERP 與 CRM 具最高網路中心性（0.8–1.0），為採用 AI 的先決基礎。在 14 國中 AI 採用率皆由 **ICT 部門**居冠；唯獨在**德國（MIP 資料）**，AI 採用率第一名為**專業、科學與技術服務業**，ICT 居次。丹麥則展現最均衡的跨部門 AI 擴散。
  2. **大型企業規模溢酬（Fact 3, Table A C.1）**：相較於 10–19 人小企業，250+ 人大企業採用 AI 機率在 **荷蘭高出 `+35.1 個百分點`（$0.3508^{***}$）**、在 **丹麥高出 `+23.4 個百分點`（$0.2339^{***}$）**、在 **德國高出 `+13.5 個百分點`（$0.1350^{***}$）**。
  3. **高等教育與 ICT 人力資本是採用 AI 的核心推手（Facts 4 & 5, Table A C.6 & Fig. 4.10）**：
     - **LEED 大專以上高等教育員工比例**：企業內大專以上學歷員工比例每增加 **1 個百分點**，採用 AI 的機率在**丹麥顯著增加 `+0.53 個百分點`**（對大數據更增加 `+1.2 個百分點`），在**荷蘭顯著增加 `+0.24 個百分點`**，在葡萄牙增加 `+0.15 個百分點`（全部 $p<0.01$）。
     - **聘用 ICT 專才（`ICT Spec.`）**：使採用 AI 機率在**丹麥增加 `+13.3 個百分點`（$0.1327^{***}$）**、**德國增加 `+5.6 個百分點`（$0.0557^{***}$）**、**荷蘭增加 `+5.0 個百分點`（$0.0496^{***}$）**；非 ICT 員工培訓（`ICT Train.`）在**荷蘭（$+5.8$ 個百分點）**與**德國（$+3.3$ 個百分點）**亦顯著為正。
  4. **AI 生產力溢酬完全仰賴人力資本與技術資本互補（Facts 6 & 7, Tables A C.11 & A C.16）**：
     - **未控制人力與技術資本時（Table A C.11）**：AI 採用企業在 10/14 國享有顯著勞動生產力溢酬——**荷蘭高達 `+16.5%`（$0.1653^{***}$）**、**丹麥達 `+11.5%`（$0.1152^{***}$）**、**德國達 `+7.9%`（$0.0785^{**}$）**。
     - **控制人力資本（ICT 專才、培訓）與技術資本（寬頻、技術強度）後（Table A C.16）**：**荷蘭（降至 $0.0140$）、丹麥（降至 $0.0239$）、德國（降至 $0.0291$）的單獨 AI 係數全部變為統計不顯著**，而人力資本（如德國 `ICT Spec.` $+18.4\%^{***}$、丹麥 $+17.4\%^{***}$、荷蘭 $+13.9\%^{***}$）與技術強度（荷蘭 $+62.2\%^{***}$、丹麥 $+57.6\%^{***}$）則高度顯著！
     - **丹麥生產函數專欄（Box 4.4）**：證實 AI 對附加價值的直接效果僅約 `3%`，但顯著提升了技術勞工與非技術勞工的邊際生產力彈性，完美驗證**「生產力 J 曲線」与人力資本互補效應**！
- **7. 研究限制（Research Limitations）**：
  1. **重要提醒**：資料涵蓋至 2017–2023 年（多數 AI 調查為 2018–2022 年），衡量的是**舊型／傳統預測型與機器學習 AI（Old AI），而非 2023 年後爆發的生成式 AI（GenAI）**；
  2. 多數調查為重複橫斷面且無首次導入時點，反映條件相關而非因果效應；
  3. 德國（MIP）等少數國家在生產力迴歸中未加權。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇是支撐本研究 **H3（25–64 歲大專以上高等教育比例調節 AI 與經濟成長關係）** 最直接的 OECD 官方微觀實證！它直接拿德國、荷蘭、丹麥三國數據證明：**沒有高等教育人力資本與 ICT 技能培訓的互補，單靠 AI 技術本身無法自動產生生產力成長**。

---

## [EU-3] On the Relationship Between Artificial Intelligence (AI) and Economic Growth (GDP)—the Case of Europe (Plikas, Trakadas, & Kenourgios, 2024)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：John Hlias Plikas, Panagiotis Trakadas, & Dimitris Kenourgios（雅典大學 National and Kapodistrian University of Athens）
  - **發表會議與論文集**：*Frontiers of Artificial Intelligence, Ethics, and Multidisciplinary Applications (FAIEMA 2023)*，Springer Nature 出版（2024 年 2 月 25 日上線，pp. 327–342）。
  - **DOI / 連結**：[https://link.springer.com/chapter/10.1007/978-981-99-9836-4_25](https://link.springer.com/chapter/10.1007/978-981-99-9836-4_25) ｜ 詳載於 `RAW/文獻蒐集總覽.pdf` 第 3、11–13 頁。
- **2. 研究目的（Research Purpose）**：
  - 以歐盟 27 國（EU27）為研究對象，透過跨國追蹤資料探討 AI 技術發展與採用對 GDP 成長率的直接影響，並檢驗「數位普及（Digital Inclusion）」與「勞動生產力（Labor Productivity，含員工技能提升 Upskilling 與 ICT 人才招募）」兩大傳導管道的中介與促進作用。
- **3. 研究問題（Research Questions — 論文明列 4 大問題）**：
  1. AI 技術是否會影響歐盟國家的 GDP？影響程度為何？
  2. 哪些科技與 AI 相關因素（研究排名、新創企業、知識交流、相對比較優勢）會影響歐盟 GDP？
  3. AI 是否能透過提升勞動生產力，進一步促進 GDP 成長？
  4. 員工技術培訓與技能提升（Upskilling）是否能提高勞動生產力，進而帶動經濟成長？
- **4. 研究假設（Research Hypotheses — 論文明列 H1–H5）**：
  - **H1**：AI 技術發展與採用對 GDP 成長具有正向影響。
  - **H2**：數位普及（Digital Inclusion）對勞動生產力具有正向影響。
  - **H3**：AI 技術採用與發展對勞動生產力具有正向影響。
  - **H4**：員工技術培訓與技能提升（Upskilling）對勞動生產力具有正向影響。
  - **H5**：勞動生產力提升對 GDP 成長具有正向影響。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **範圍與來源**：歐盟 27 國（EU27），**2010–2020 年**，共 **$N = 297$ 筆國家追蹤資料（Panel Observations）**；資料取自 Eurostat、European Commission AI Watch、Thomson Reuters/DataStream、Kaggle、OECD。
    - **變數**：依變數為 GDP 成長率（`DGDP`）與勞動生產力成長率（`DLAB_PROD`）；自變數包含總體變數（通膨率、失業率、COVID-19）、企業變數（企業數量、勞動生產力）、科技與人力變數（數位普及、員工技術培訓、ICT 人員招募）、以及 AI 變數（AI 相對比較優勢 RCA、AI 研究排名、AI 新創企業數量、AI 知識交流程度）。
  - **📐 模型（Model）**：
    1. **面板單根檢定（Panel Unit Root Tests）**，將非定態變數轉換為**一階差分**；
    2. **主成分分析（PCA）**：整合 AI 研究排名、AI 新創企業數量及 AI 知識交流指標，建立綜合變數 **`AI_PCA`**；
    3. **國家固定效果模型（Country Fixed Effects）**：依 Hausman Test 選擇固定效果模型；
    4. **穩健性檢驗**：使用**逐步迴歸（Stepwise Regression）**與**穩健最小平方法（Robust Least Squares, RLS）**。
- **6. 研究結果（Research Findings）**：
  1. **支持 H1（AI 直接促進 GDP）**：AI 技術發展對歐盟 GDP 成長具顯著正向影響；其中 **AI 研究排名**與 **AI 知識交流程度**對 GDP 及勞動生產力的影響最強，`AI_PCA` 綜合指標亦呈顯著正向效果。
  2. **支持 H2 但揭示數位普及的侷限**：數位普及（Digital Inclusion）對勞動生產力具顯著正向影響，但**對 GDP 成長沒有顯著的直接影響**。
  3. **支持 H3、H4、H5（人力資本與生產力中介管道）**：AI 技術整合度、**員工技術培訓（Upskilling）與 ICT 人員招募**均顯著提升勞動生產力，且 AI 可透過先提升勞動生產力，進一步**間接促進 GDP 成長**。
- **7. 研究限制（Research Limitations）**：
  - 研究期間僅涵蓋 **2010–2020 年**（尚未涵蓋近期生成式 AI 浪潮）；且**作者於結論明確指出：未來研究應進一步分析 AI 與 GDP 關係在不同歐盟國家（Country heterogeneity）及不同產業之間的異質性**！
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇的研究限制（呼籲未來探討歐盟跨國與跨產業異質性）直接成為我們這篇論文（比較德國、荷蘭、丹麥與 OECD，檢驗 H2 與 H3）的**最佳問題意識來源（Research Gap）**，且其 PCA 與單根檢定＋固定效果流程亦與本研究方法高度契合。

---

## [EU-4] Economic Growth, AI Adoption and Human Capital Across the OECD: Evidence from a Panel ARDL Model (Duarte, Freitas, & Simões, Notas Económicas 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Joshua Duarte, Carina Freitas, & Marta Simões（葡萄牙孔布拉大學經濟學院 University of Coimbra, CeBER and Faculty of Economics）
  - **發表期刊**：***Notas Económicas***（葡萄牙孔布拉大學經濟學院雙盲同儕審查期刊，Issue 61, July 2026, pp. 55–92，共 38 頁）。
  - **DOI / 本地檔案**：[https://doi.org/10.14195/2183-203X_61_3](https://doi.org/10.14195/2183-203X_61_3) ｜ 本地檔案：`RAW/Notas_Economicas_OECD_Panel_ARDL.pdf`
- **2. 研究目的（Research Purpose）**：
  - 考量技術進步對總體經濟的效益存在調整成本與時間落差，本研究採用動態**面板自迴歸分配落差模型（Panel ARDL）搭配廣義動差法（Diff-GMM / Sys-GMM）**，針對 **35 個 OECD 國家（1995–2017 年）** 同時估計 AI 採用（以申請人專利、發明人專利、科學出版物衡量）對**短期實質人均 GDP 成長率**與**長期實質人均 GDP 水準**的動態影響，並納入 `AI × 人力資本` 交乘項與製造業附加價值占比等控制變數，檢驗人力資本的調節作用。
- **3. 研究問題（Research Questions）**：
  1. 在控制實體資本、人力資本與國家一般整體創新（General innovation）後，AI 採用（申請人專利、發明人專利、AI 學術論文）對 OECD 國家的短期經濟成長與長期人均所得是否有顯著正向貢獻？
  2. 當加入額外總體控制變數（如**製造業占 GDP 比重**、貿易開放度、法規品質、公共消費、FDI）或改用**永續盤存法累積之 AI 知識存量（Stocks）**時，結果是否穩健？
  3. 在 OECD 總體層級上，人力資本（`log h × log ai`）是否顯著調節 AI 對短期與長期經濟成長的影響？
- **4. 研究假設（Research Hypotheses）**：
  - **H1（AI 短長期正向主效果）**：AI 採用在短期推升人均實質 GDP 成長率（$\beta_3 > 0$），在長期提升均衡人均實質 GDP 水準（$\alpha_3 > 0$）。
  - **H2（跨國條件收斂假設）**：誤差修正項係數顯著為負（$\gamma < 0$）。
  - **H3a vs. H3b（人力資本調節之雙向競爭假設）**：若交乘項為正（$\alpha_5 > 0$），支持**高技能偏向／互補假設（H3a）**；若交乘項為負（$\alpha_5 < 0$），則支持**低技能追趕／輔助學習假設（H3b）**。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **樣本**：**35 個 OECD 國家**（含德國、荷蘭、丹麥；估計有效國家數 34–35 國），期間 **1995–2017 年**（共 23 年，Diff-GMM 有效觀測值 **$N = 680–700$**）。
    - **變數（與本研究變數設計 100% 相同！）**：
      - **依變數**：取自 PWT 10.01 之實質人均 GDP 對數 $\log y_{i,t}$（2017 固定美元）及其一階差分成長率 $\Delta \log y_{i,t}$。
      - **核心自變數（3 項 AI 指標，每百萬就業人口，流量與存量）**：(1) **申請人 AI 專利 $\log ai^{APP}$**；(2) **發明人 AI 專利 $\log ai^{INV}$**；(3) **Elsevier/Scopus AI 科學出版物 $\log ai^{PUB}$**。
      - **控制與調節變數**：人均實質實體資本 $\log k_{i,t}$、PWT 人力資本指數 $\log h_{i,t}$（因 CIPS 檢定為 $I(2)$，在長期放入 $\Delta \log h$、短期放入 $\Delta^2 \log h$）、國家整體一般創新 $\log inn_{i,t}$（總專利或總論文），以及 **製造業附加價值占 GDP 比例（$\Delta inds_{i,t}$）**、貿易開放度 $\Delta trade$、法規品質 $\Delta rqe$、政府消費 $\Delta g$、通膨 $\Delta inf$、FDI 與都市化率。
  - **📐 模型（Model）**：
    - 執行 Pesaran (2007) CIPS 單根檢定與 Westerlund (2005) 共整合檢定後，估計 **Panel ARDL 模型（Eq. 4 & Eq. 5）**：
      $$\Delta \log y_{it} = \mu_i + \beta_1 \Delta \log k_{i,t} + \beta_2 \Delta^2 \log h_{i,t} + \beta_3 \Delta \log ai_{i,t} + \beta_4 \Delta \log inn_{i,t} + \gamma \log y_{i,t-1} + \alpha_1 \log k_{i,t-1} + \alpha_2 \Delta \log h_{i,t-1} + \alpha_3 \log ai_{i,t-1} + \alpha_4 \log inn_{i,t-1} + \epsilon_{it}$$
    - 為處理落後依變數與 AI 投入之同時性內生偏誤，採用 **Arellano & Bond (1991) 一階差分 GMM（Diff-GMM，搭配 Roodman 2009 工具變數折疊法，為通過 AR(2) 與 Hansen-J 檢定之首選模型）** 與 **系統 GMM（Sys-GMM）**。
- **6. 研究結果（Research Findings）**：
  1. **基準模型：AI 專利對短期成長與長期所得具顯著正向貢獻（Table 5, Diff-GMM）**：
     - **申請人 AI 專利（$ai^{APP}$）**：**短期效果 $\Delta \log ai^{APP} = +0.0639^{***}$**（$SE=0.0231$），**長期效果 $\log ai^{APP}_{t-1} = +0.0724^{***}$**（$SE=0.0196$），誤差修正項 $\gamma = -0.663^{***}$。
     - **發明人 AI 專利（$ai^{INV}$）**：**短期效果 $\Delta \log ai^{INV} = +0.0547^{**}$**（$SE=0.0259$），**長期效果 $\log ai^{INV}_{t-1} = +0.0584^{***}$**（$SE=0.0193$），且短期人力資本 $\Delta^2 \log h = +2.890^{*}$ 顯著為正。
     - **AI 科學出版物（$ai^{PUB}$）**：以當期「流量（Flow）」衡量時不顯著（短期 $0.0188$，長期 $-0.0089$）。
  2. **改用「AI 知識存量（Stocks）」後，AI 科學出版物轉為極度顯著（Table 15, Diff-GMM）**：
     - 申請人與發明人專利存量的**長期正向效果依然顯著**（$+0.0691^{**}$ 與 $+0.0364^{*}$）；
     - **AI 科學出版物存量（$ai^{PUB}$ Stock）**：轉為**短期（$+0.228^{***}$）與長期（$+0.128^{***}$）皆高度顯著為正**！證明基礎學術研究必須累積為「知識存量」才會強勁推升總體經濟。
  3. **製造業占比（$\Delta inds$）之正向效果（Tables 9, 11, 13 Col 4）**：
     - 加入製造業附加價值占 GDP 比例後，**$\Delta inds$ 在所有三個模型中一致顯著為正（$+0.0182^{*}$ 至 $+0.0291^{***}$）**，且使 $ai^{PUB}$ 流量之短期效果亦轉為顯著正向（$+0.0370^{*}$）！
  4. **人力資本交乘項（`log h × log ai`）之細膩發現（Table 17）**：
     - 在 Diff-GMM 專利模型中，短長期交乘項為正（$0.140, 0.137$）但不顯著；
     - **但在 Diff-GMM 的「AI 科學出版物（$ai^{PUB}$）」模型中，長期交乘項（$\log h_{i,t} \times \log ai^{PUB}_{i,t-1}$）顯著為正（$+0.108^{***}$，$p<0.01$）**，支持長期高技能互補假設（唯有人力資本夠高，AI 科學知識才能在長期轉化為人均所得成長）！
     - 而在 Sys-GMM 專利模型中，短期交乘項為負（$-0.393^{*}, -0.425^{**}$）。作者總結：在 1995–2017 年國家總體聚合資料下，跨產業對高技能與低技能勞工的正負效應相互抵銷，故專利指標看不出單一技能群體絕對受惠。
- **7. 研究限制（Research Limitations）**：
  1. 樣本期間為 **1995–2017 年**（沿用 Parteka & Kordalska 2023 資料），僅反映早期 AI，尚未涵蓋 2018–2024 年深度學習與生成式 AI 爆發期；
  2. 總體聚合資料（Aggregation bias）掩蓋了跨產業與企業內部的技能互補異質性；
  3. 專利與論文衡量的是 AI 創新產出而非企業實際部署率。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - **這是與我們論文結構最接近的「雙胞胎核心文獻」**！我們論文同樣使用 **OECD 申請人 AI 專利、發明人 AI 專利、Scopus AI 論文、實質人均 GDP 成長率、高等教育人力資本與製造業占比**，但我們將樣本延伸至 **2024/2025 年**，並聚焦比較**德國、荷蘭、丹麥與 OECD**，能直接突破本篇「僅到 2017 年且未拆解代表性國家異質性」的研究限制！

---

## [EU-5] Adoption and investment in AI across the euro area: Insights from harmonised firm-level data (Ferrando et al., ECB 2025/2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Annalisa Ferrando, Sara Lamboglia, Judit Rariga, & Maurice Schmidt（歐洲中央銀行 European Central Bank, Frankfurt am Main）
  - **出版機構與系列**：**European Central Bank (ECB)**，*ECB Occasional Paper Series*, No. 395（共 71 頁）。
  - **DOI / 連結 / 本地檔案**：[https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7199861](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7199861) ｜ [ECB PDF](https://www.ecb.europa.eu/pub/pdf/scpops/ecb.op395.en.pdf) ｜ 本地檔案：`RAW/ECB_2025_Adoption_and_Investment_in_AI_Euro_Area_OP395.pdf`
- **2. 研究目的（Research Purpose）**：
  - 利用歐洲央行（ECB）「企業融資近用調查（SAFE）」於 2025 年新增之 AI 專屬模組，針對 **12 個歐元區國家（含德國、荷蘭）、逾 6,000 家企业**，剖析企業 AI 採用的廣度與**深度（極少／試點、中度、顯著深度使用）**、採用動機與阻礙、融資管道、對勞動生產力與營收／投資／就業預期的影響，並透過**隨機對照試驗（RCT）**檢驗揭露同業 AI 投資資訊對企業未來 AI 投資計畫的因果推升效果。
- **3. 研究問題（Research Questions）**：
  1. 歐元區 12 國企業的 AI 總採用率與三階使用深度（極少、中度、顯著使用）分布為何？荷蘭與德國表現如何？
  2. 阻礙企業採用或深化 AI 的頭號瓶頸為何？企業如何為 AI 投資融資（內部資金 vs. 補貼貸款 vs. 銀行貸款）？
  3. 不同深度的 AI 使用如何影響企業勞動生產力、預期營業額、固定投資與就業？
  4. 當透過 RCT 實驗消除企業對同業 AI 投資比例的低估偏誤時，是否會激發競爭壓力並提高企業自身的預期 AI 投資率？
- **4. 研究假設（Research Hypotheses）**：
  - **假設 1（廣泛接觸但深度整合受限）**：多數企業雖已接觸 AI，但受制於技能短缺與系統相容性，達到「顯著深度使用（Significant use）」的比例仍受限於跨規模天花板。
  - **假設 2（深度使用之非線性生產力與營收溢酬）**：唯有達到「顯著深度使用」或位於高知識密集部門（ICT 與 R&D）的企業，才能獲得顯著的預期營收、固定投資與未來生產力提升。
  - **假設 3（同業競爭壓力與資訊摩擦假設）**：企業普遍低估同業 AI 投資率；揭露真實同業投資數據將顯著推升企業自身的 AI 投資計畫。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **來源与樣本**：ECB / EC **SAFE 調查**（2025 年 6 月波段約 **6,000 家**企業；2025 年 12 月波段 **$N = 5,067$ 家**企業），涵蓋 **12 個歐元區國家**（荷蘭、芬蘭、奧地利、比利時、**德國**、西班牙、希臘、法國、葡萄牙、斯洛伐克、愛爾蘭、義大利）。
    - **變數**：四階 AI 使用強度（未使用、極少／試點、中度、顯著使用）、融資管道虛擬變數、SAFE-ORBIS 驗證之二元勞動生產力指標（營收增加且員工不變／減少，或營收不變且員工減少 = 1）、未來 12 個月 AI 占總投資百分比。
  - **📐 模型（Model）**：
    1. 控制國家、產業、規模固定效果之**加權線性迴歸模型**（分析融資管道、前瞻預期與勞動生產力）；
    2. **隨機對照試驗（RCT 資訊實驗，Baumann et al. 2026）**：隨機向 50% 實驗組揭露同國同產業同規模同業之真實 AI 投資率，估計對事後信念與自身預期 AI 投資率的平均處理效果（ATE）。
- **6. 研究結果（Research Findings）**：
  1. **12 國採用率與使用深度完整拆解（Chart 1 — 完美解開跨文獻口徑差異！）**：
     - **歐元區平均**：**`71%`（約 70%）** 企業有使用 AI，但 **`33%` 為極少／試點使用**、**`31%` 為中度使用**，**僅有 `7%` 自評為「顯著深度使用（Significant use）」**！
     - **🇳🇱 荷蘭（歐元區第 1）**：總使用率高達 **`85%`**！其中**顯著深度使用高達 `23%`（全歐元區第一，為平均 7% 的 3 倍以上）**、中度使用 **`38%`**、極少使用 **`25%`**。
     - **🇩🇪 德國（並列第 4）**：總使用率達 **`77%`**！其中**顯著深度使用為 `7%`**、**中度使用高達 `40%`**、極少／試點使用為 **`30%`**。
     - **落後國**：愛爾蘭總使用率 **`65%`**（顯著僅 `3%`），義大利墊底僅 **`52%`**（顯著 `5%`）。
  2. **頭號阻礙與融資結構（Charts 12 & 17）**：
     - 全歐元區頭號阻礙為 **「缺乏 AI 技能（Lack of AI skills，占 `25%`）」**，其次為資料隱私／倫理疑慮（`19%`）與現有系統不相容（`19%`，在荷、德等廣泛採用國升至 `23%`）。
     - AI 投資高度依賴**內部自有資金（`+8.7 至 +9.9 個百分點`）**與**公共補貼銀行貸款（`+7.2 個百分點`）**；大型企業完全不依賴一般銀行貸款，而 ICT 與 R&D 部門高度仰賴公共補貼貸款（`+12.6 至 +13.8 個百分點`）。
  3. **對營收、投資、就業與勞動生產力之非線性效果（Chart 20 & Box 1）**：
     - **顯著使用 AI** 的企業比未使用者在未來 3 個月預期營業額成長機率高出 **`+17 個百分點`**、預期增加固定投資高出 **`+9 個百分點`**；且**完全無裁員證據**（過去 3 個月就業增加機率反而高出 **`+21 個百分點`**）。
     - 在 **ICT 與 R&D 部門**中，任何程度的 AI 使用皆使當前生產力提升機率增加 **`+22 至 +32 個百分點`**，而未來預期生產力提升則**唯有「顯著深度使用者」顯著高出 `+41 個百分點`**！
  4. **未來 AI 投資與 RCT 實驗結果（Charts 24 & 28）**：
     - 未來 12 個月預期 AI 占總投資比重，歐元區平均為 **`9%`**（顯著使用者高達 **`20%`**；跨國以奧地利 `14%`、比利時 `12%`、**德國 `10%`**、**荷蘭 `9%`** 領先）。
     - **RCT 實驗**：80% 企業低估同業 AI 投資率（平均低估 18 個百分點）；向實驗組揭露真實同業投資數據後，企業對同業預期上修 **`+4.3 個百分點`**，並使**自身預期 AI 投資率顯著提高 `+1.8 個百分點`（$p<0.001$）**！
- **7. 研究限制（Research Limitations）**：
  1. 2025 年兩波橫斷面快照無法追蹤長期勞動替代效應；
  2. AI 使用強度與二元生產力指標依賴企業主觀自評；
  3. 融資問卷尚未涵蓋創投（VC）與私募股權等非銀行工具。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇徹底釐清了為何荷蘭（85%）與德國（77%）在廣義調查中採用率極高，同時證明**荷蘭在「顯著深度使用（23%）」上遠高於德國（7%）**，這正是解釋兩國 AI 成長轉化效率差異（**H2**）與技能短缺調節作用（**H3**）的關鍵證據！

---

## [EU-6] Artificial Intelligence and Productivity in Europe (Misch, Park, Pizzinelli, & Sher, IMF 2025)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Florian Misch, Ben Park, Carlo Pizzinelli, & Galen Sher（國際貨幣基金組織歐洲部 IMF European Department）
  - **出版機構與系列**：**International Monetary Fund (IMF)**，*IMF Working Paper*, No. WP/25/67（2025 年 4 月出版，共 38 頁）。
  - **官方連結／本地檔案**：[https://www.imf.org/en/publications/wp/issues/2025/04/04/ai-and-productivity-in-europe-565924](https://www.imf.org/en/publications/wp/issues/2025/04/04/ai-and-productivity-in-europe-565924) ｜ 本地檔案：`RAW/IMF_2025_AI_and_Productivity_in_Europe.pdf`
- **2. 研究目的（Research Purpose）**：
  - 擴展 Acemoglu (2024) 的任務基礎總體框架，結合計量迴歸校準各國與各產業的 AI 採用率驅動因素，模擬 **31 個歐洲國家（EU27 + 英國、瑞士、挪威、冰島）** 在 **44 種不同情境**下，AI 採用對中期（5 年期）全要素生產力（TFP）的累積影響，並首次量化評估**歐盟與國家級三大法規（國家職業執照管制、EU AI Act、資料隱私法 GDPR）**對歐洲 AI 生產力增益的潛在折損幅度。
- **3. 研究問題（Research Questions）**：
  1. 在綜合不同 AI 任務暴露度指標與歐洲本土採用率驅動因素（工資水準、人力資本等）後，未來 5 年 AI 對歐洲 31 國整體與個別國家（如丹麥、德國、荷蘭）的累積 TFP 提升幅度為何？
  2. 驅動歐洲跨國與跨部門 AI 採用率差異的最主要結構性因素為何（工資水準 vs. 人力資本 vs. 資金成本）？
  3. 國家職業管制、歐盟《AI 法案》（EU AI Act）與資料隱私法（GDPR）合計會削減歐洲多少百分比的潛在 AI 生產力成長？
- **4. 研究假設（Research Hypotheses）**：
  - **假設 1（高工資與白領服務業驅動跨國差異）**：高所得、高工資國家（如盧森堡、丹麥、瑞士、挪威）因企業節省昂貴勞動成本的誘因更強，且金融、IT 等高暴露白領服務業占附加價值比重較高，其 AI 採用率與中期 TFP 增益將顯著高於低所得東歐國家（進而減緩歐洲內部所得收斂）。
  - **假設 2（監管法規抑制生產力假設）**：職業執照限制、EU AI Act（對算力 $>10^{25}$ FLOPS 模型與高風險任務之管制）與資料隱私法將降低受影響任務與部門的 AI 有效暴露度，顯著削弱歐洲的潛在 TFP 成長。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - 涵蓋 **31 個歐洲國家**（EU27 + IS, NO, CH, UK）。工時資料取自 **2023 年 EU-LFS**（ISCO-08 3位碼；荷蘭與英國為 1位碼，英國用 2019 年）；工資取自 **EU-SILC**（荷蘭與英國用 2019 年 SES）；產業附加價值與勞動份額取自 **Eurostat 國民帳戶**（NACE 1位碼）；歷史企業 AI 採用率取自 **2023 年 Eurostat**（30 國 $\times$ 11 部門，共 $N = 265–298$ 筆觀測值）。
  - **📐 模型（Model）**：
    1. **Acemoglu (2024) 與 Hulten 定理三參數乘積模型（5 年中期視窗）**：
       $$\Delta \text{TFP}_{c} = \sum_{j} \omega_{c,j} \times \left( \text{Exposure}_{c,j} \times \text{Adoption Rate}_{c,j} \times \text{Labor Cost Savings (27\%)} \times \text{Labor Share}_{c,j} \right)$$
       結合 11 種替代暴露度指標（Eloundou et al. 2024 $\alpha/\beta/\gamma$、Acemoglu 2024、Felten et al. 2021、Gmyrek et al. 2023、Webb 2019）與 4 種採用率情境，共構成 **44 種模擬情境**（首選情境 Preferred Scenario 採用 Eloundou et al. $\beta$ 指標 + 工資驅動之國家部門採用率，全歐平均採用率設為 18%）。
    2. **長期 AI 採用率決定因素橫斷面迴歸（Appendix 3, Eq. 1 & Table A2）**：
       $$y_{i,j} = \alpha_i + \gamma_j + x_{i,j}\beta + e_{i,j}$$
       檢驗小時工資（Wage）、勞動成本、資金成本、產業集中度、電腦使用率、能源成本與**高等教育人力資本（Human capital）**對 2023 年企業 AI 採用率 $y_{i,j}$ 之影響。
    3. **法規衝擊模擬（Section 4.3）**：識別受「歐盟受管制職業資料庫（563 種職業，德國占 21.5%、丹麥 15.7%、荷蘭 14.8%）」、「EU AI Act（高風險與困難任務）」與「資料隱私法（NACE J 資通訊、K 金融、Q 醫療三部門）」影響之任務，假設法規使該些任務的 AI 暴露度減半（降低 50%）。
- **6. 研究結果（Research Findings）**：
  1. **歐洲整體與三國 5 年累積 TFP 增益（Section 4.1–4.2, Figs. 5–7）**：
     - 在**首選情境（Preferred Scenario）**下，歐洲 31 國整體 5 年累積 TFP 提升約 **`1.1%`（即約 1%）**，雖屬溫和，但比 Acemoglu (2024) 對美國的基準估計（`0.71%`）高出近 **60%**。
     - **跨國異質性極大**：高所得國家增益遠高於東歐低所得國家（盧森堡與挪威達 **`2.0%–2.2%`**，羅馬尼亞僅 **`0.4%–0.5%`**）。在本研究重點三國中：**🇩🇰 丹麥約 `+1.9%`**（高居歐洲前 4 名，若在樂觀情境上限可逾 3%）、**🇩🇪 德國約 `+1.5%`**、**🇳🇱 荷蘭約 `+1.35%`**（均高於歐洲平均 `1.1%`）。
     - **變異分解（Fig. 7）**：「各國 AI 採用率差異（受工資驅動）」是造成跨國 TFP 差異的第一大主因，「產業結構差異（高暴露服務業占比）」為第二大主因。
  2. **工資 vs. 人力資本對採用率的關鍵迴歸發現（Appendix Table A2）**：
     - **小時工資（Wage）是最穩健的採用驅動力**：每小時工資每高出 1 歐元，部門企業 AI 採用率顯著增加 **`0.75 個百分點`**（Col 1, $\beta = 0.75^{***}$，無固定效果時為 $0.52^{***}$）。因歐洲平均工資比美國低約 50%，推估歐洲長期平均任務採用率為 **18%**（低於美國的 23%）；但若未來發展出 **「AI 即服務（AI-as-a-Service）」** 分攤固定成本，歐洲採用率可躍升 4 倍至 **`75%`**，生產力增益亦將擴大 4 倍！
     - **人力資本（大專教育比例）與工資的代理關係（Col 10）**：單獨看時高等教育比例越高的國家與部門 AI 採用率越高（Brey & van der Marel, 2024），但**一旦在迴歸中同時控制「工資（Wage）」，高等教育人力資本係數（$0.09, SE=0.11$）即變為不顯著**！作者解釋：這是因為高學歷員工的薪資較高，企業是因為面對「高學歷勞工的高昂薪資成本」而產生更強的經濟誘因去導入 AI 以節省成本或放大高薪員工產出！
  3. **監管法規削減逾 `30%` 潛在生產力增益（Section 4.3, Fig. 8）**：
     - 單獨看：資料隱私法（GDPR）使 TFP 增益減少約 **`10%`**，EU AI Act 與國家職業執照管制各使 TFP 增益減少約 **`15%`–`20%`**；
     - **三種法規合計（Combined effect）**：將使歐洲潛在的 AI 生產力成長**大幅縮減超過 `30%`（圖 8 顯示總削減幅度逾 35%）**！
- **7. 研究限制（Research Limitations）**：
  1. 屬於**基於模型的模擬估計（Model-based simulations）**，而非經濟體中事後實際觀測到的總體生產力成長數據；
  2. **跨國資料時間範圍與顆粒度不一致**：AI 採用資料來自 2023 年，但英國的工時與國民帳戶、以及**荷蘭與英國的工資資料（SES）來自 2019 年**，且**荷蘭因未獲 Eurostat 微觀權限僅能使用 1-digit ISCO 粗略職業分類**（導致荷蘭在部分高門檻暴露指標下被低估）；
  3. 僅捕捉 5 年內既有任務自動化的漸進效果，未納入 AI 創造新產業或加速科學發現的長期結構轉型效果。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇不僅提供了歐洲 31 國 TFP 預測與法規折損 30% 的權威數據，其 **Appendix Table A2 揭示的「高學歷人力資本 $\rightarrow$ 高工資水準 $\rightarrow$ 強勁 AI 採用誘因與高 TFP 增益」傳導鏈**，為本研究解釋 **H2（為何丹麥、德國、荷蘭高於東歐）** 與 **H3（人力資本與產業結構的調節機制）** 提供了極為精闢的經濟學邏輯！

---

## [EU-7] Artificial Intelligence and Growth in Advanced and Emerging Economies: Short-Run Impact (Gambacorta et al., BIS / CEPR 2025/2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Leonardo Gambacorta（國際清算銀行 BIS & CEPR）、Enisse Kharroubi（BIS）、Aaron Mehrotra（BIS）、Tommaso Oliviero（義大利拿坡里腓特烈二世大學 University of Naples Federico II, CSEF & Mofir）
  - **出版機構與系列**：**Bank for International Settlements (BIS)**，*BIS Working Papers No. 1321*（2025 年 12 月出版，共 23 頁）；同步列為 **CEPR Discussion Paper DP20992**（2026）。
  - **官方連結／本地檔案**：[https://www.bis.org/publ/work1321.htm](https://www.bis.org/publ/work1321.htm) ｜ [https://cepr.org/publications/dp20992](https://cepr.org/publications/dp20992) ｜ 本地檔案：`RAW/BIS_2025_AI_and_Growth_Short_Run_Impact.pdf`
- **2. 研究目的（Research Purpose）**：
  - 採用 **Rajan and Zingales (1998)** 的經典跨國跨產業交互作用實證架構，針對全球 **56 個經濟體（29 個先進經濟體 AEs + 27 個新興與發展中經濟體 EMDEs）與 16 個產業部門**，檢驗在生成式 AI 爆發初期（**2022–2023 年**），「產業層級生成式 AI 暴露度（AIIE）」與「國家層級 AI 準備度（AIPI，含數位基礎設施、人力資本、創新、法規四大子維度）」的交互作用是否顯著驅動產業實質附加價值成長，並評估其對全球跨國所得差距的短期影響。
- **3. 研究問題（Research Questions）**：
  1. 在控制國家固定效果與產業固定效果後，當一國的 AI 準備度（AIPI）提高時，對生成式 AI 暴露度較高的產業（如金融、教育、資通訊、專業服務），是否在 2022–2023 年實現比低暴露產業更快的實質附加價值成長？
  2. 在國家 AI 準備度的四大子維度（數位基礎設施、創新與經濟整合、人力資本與勞動市場政策、法規與倫理）中，哪些維度與產業 AI 暴露度的交互作用顯著促進短期成長？在控制「工業機器人存量（Robots）」後結果是否依然穩健？
  3. 結合各國產業結構（GVA 權重）後，生成式 AI 對先進經濟體（含德國、荷蘭、丹麥）與新興經濟體的短期總體附加價值成長貢獻相差多少？
- **4. 研究假設（Research Hypotheses — 論文第 4 頁明列核心假設）**：
  - **核心實證假設（Key Hypothesis）**：生成式 AI 的短期成長影響是由「產業對該技術的暴露程度差異（知識與認知密集度）」與「影響技術採納的國家層級特徵（AI 準備度：數位基礎設施、人力資本、創新、法規）」共同驅動；在 AI 準備度較高的國家，高 AI 暴露度產業的實質附加價值成長率將顯著高於低暴露產業（$\beta > 0$）。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **樣本**：全球 **56 個經濟體**（29 個 AEs 含**丹麥、荷蘭、德國**等；27 個 EMDEs）$\times$ **16 個產業部門**（合併自 1-digit NACE），有效迴歸觀測值 **$N = 875$ 個國家—產業配對**。
    - **三大資料來源**：
      1. **依變數 $GR\_VA_{cj}$**：取自亞洲開發銀行（**ADB**）多區域投入產出表（2010 年固定價格），計算 2022 至 2023 年國家 $c$ 產業 $j$ 之**實質附加價值成長率**（並控制 2022 年該產業占該國總附加價值份額 $Lagged\_Share_{cj}$）。
      2. **產業生成式 AI 暴露度（$AIIE_j$）**：取自 Aldasoro et al. (2024) / Felten et al. (2021)，以美國為基準衡量生成式 AI 對各產業職場能力的適用度（最高前四名為：**金融 Finance、教育 Education、資通訊 Information、專業科學服務 Professional**；最低為農業、運輸、營造；製造業居中）。
      3. **國家 AI 準備度指數（$AIPI_c$，依標準差標準化）**：取自 IMF（Cazzaniga et al., 2024），AEs 中位數為 **0.71**（**丹麥以 `0.78` 高居全體先進國家第 1 名**，美國、**荷蘭**、瑞士、芬蘭、瑞典、**德國**緊隨其後；克羅埃西亞與希臘最低為 0.58），EMDEs 中位數為 **0.54**。另納入工業機器人存量（`Robot stock` per employee）作為控制變數。
  - **📐 模型（Model）**：
    - **Rajan and Zingales (1998) 交互作用固定效果模型（Eq. 1）**：
      $$GR\_VA_{cj} = \beta (AIPI_c \times AIIE_j) + \gamma Lagged\_Share_{cj} + \lambda_j + \tau_c + \varepsilon_{cj}$$
      其中 $\lambda_j$ 為產業固定效果，$\tau_c$ 為國家固定效果，標準誤叢聚於國家層級（OLS with country-clustered SEs）。
- **6. 研究結果（Research Findings）**：
  1. **基準交互作用顯著為正（Table 1）**：
     - 同時控制國家與產業固定效果後（Col III），交互作用項 $AIPI_c \times AIIE_j$ 係數為 **`+3.043^{**}$`**（$SE = 1.394, p < 0.05$；Col II 為 $+2.905^{**}$）。
     - **經濟顯著性**：比較 AI 暴露度處於第 90 百分位（高暴露服務業）與第 10 百分位（低暴露產業）的兩個部門，當國家的 AI 準備度（AIPI）提高 **1 個標準差**時，高暴露產業的年實質附加價值成長率比低暴露產業顯著高出約 **`2 個百分點`（18.5 ppt vs. 16.5 ppt）**！
  2. **AI 準備度四大子維度拆解（Table 2 & Table 4）**：
     - 四大子維度與產業 AI 暴露度的交互作用**全部顯著為正**（至少在 10% 水準顯著）：(I) **數位基礎設施**（`+2.942*`，控制機器人後 `+3.047*`）；(II) **創新與經濟整合**（`+2.541*`，控制機器人後 `+2.640*`）；(III) **人力資本與勞動市場政策**（`+2.525*`，控制機器人後 `+2.595*`）；(IV) **法規與倫理**（**`+3.079^{**}$`**，控制機器人後 **`+3.154^{**}$`**，顯著性最強！）。
  3. **控制工業機器人（Robots）後更加穩健（Table 3）**：
     - 加入各部門工業機器人存量後，`Robot stock` 本身對附加價值成長顯著為正（**`+0.304^{***}$`**，反映藍領製造自動化貢獻），而生成式 AI 交互作用項 $AIPI_c \times AIIE_j$ 係數不僅維持顯著，更微幅上升至 **`+3.140^{**}$`**（反映白領認知任務強化貢獻），證明生成式 AI 與實體機器人分別透過不同管道獨立促進成長！
  4. **國家層級總體成長模擬（Section 4.4, Fig. 5）**：
     - 相較於全球受惠最小的國家（柬埔寨），先進經濟體（AEs）平均實質附加價值成長率高出約 **`0.6 個百分點`**，而新興經濟體（EMDEs）僅高出約 **`0.4 個百分點`**（低了三分之一），短期內可能擴大全球所得差距。在歐洲先進國中，盧森堡、英國、法國、比利時、**荷蘭**、瑞士、瑞典、**德國**、**丹麥**皆展現穩健的正向成長增益。
- **7. 研究限制（Research Limitations）**：
  1. 僅衡量生成式 AI 問世初期（**2022–2023 年**）的**短期毛附加價值成長效果**，未涵蓋長期一般均衡動態；
  2. 沿用 Rajan & Zingales (1998) 假設，以美國產業 AI 暴露度分布作為全球 56 國的共同基準；
  3. 若要將產業附加價值成長換算為長期總要素生產力（TFP）等價物，仍需建立納入總合需求效果與跨部門外溢效應（Intersectoral spillovers）的結構模型。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇是本研究 **研究方法（Interaction Effects 異質性交互作用模型）** 與 **H2/H3（產業結構 × 國家人力資本／制度準備度）** 的直接方法論原型！且其 Figure 4 與 Figure A1–A4 提供了**丹麥、荷蘭、德國**在 IMF AIPI 總指標與四大子指標（數位基礎設施、創新、人力資本、法規）的精確跨國排名。

---

## [EU-8] Artificial intelligence and productivity: global evidence from AI patent and bibliometric data (Parteka & Kordalska, Technovation 2023)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Aleksandra Parteka & Aleksandra Kordalska（波蘭格但斯克工業大學管理與經濟學院 Gdansk University of Technology）
  - **發表期刊**：***Technovation***（Elsevier 科技創新與管理領域頂尖期刊，Volume 125, Article 102764，2023 年 5 月上線，共 15 頁）。
  - **DOI / 本地檔案**：[https://doi.org/10.1016/j.technovation.2023.102764](https://doi.org/10.1016/j.technovation.2023.102764) ｜ 本地檔案：`RAW/Parteka_Kordalska_2023_Technovation_AI_Patents_Productivity.pdf`
- **2. 研究目的（Research Purpose）**：
  - 針對全球「現代生產力悖論（Modern Productivity Paradox，即數位與 AI 技術爆發但官方總體生產力成長卻趨緩）」，首次同時結合 **OECD AI 專利資料（申請人與發明人，1985–2016 年）** 與 **Elsevier/Scopus AI 科學出版物資料（1998–2017 年）**，建構年度流量與永續盤存法知識存量（Stocks），在擴充總體生產函數框架下，實證檢驗 **35 個 OECD 國家** 與 **28 個非 OECD 國家（共 63 國）** 的 AI 技術知識生產是否已轉化為總體勞動生產力成長。
- **3. 研究問題（Research Questions）**：
  1. 1985 年以來，OECD 與非 OECD 國家在 AI 專利（申請人與發明人）及 AI 科學出版物的絕對數量與占總專利／總論文比例上有何成長趨勢？
  2. 在控制資本深化（$\Delta \ln(K/L)$）、初期生產力水準收斂項、國家一般整體創新（GI）、人力資本（HC）、貿易開放度（Trade）與法規品質（RQ），並以多種工具變數（IV-GMM）處理內生性後，AI 專利與 AI 科學出版物（流量與存量）對總體每小時勞動生產力成長率是否有顯著正向影響？
  3. 為何「AI 專利」與「AI 科學出版物」對總體勞動生產力成長的估計結果會出現分歧？
- **4. 研究假設（Research Hypotheses）**：
  - **競爭性假設 1（內生創新促進生產力假設）**：依據擴充知識生產函數 $Y' = A'F'(K, U, L)$，AI 專利與 AI 論文所累積的無形知識存量 $U$ 能推動總體勞動生產力成長（$\beta_3 > 0$）。
  - **競爭性假設 2（現代生產力悖論與利基現象假設 / J-Curve）**：由於 AI 在 2017 年前占整體專利比例仍小（屬利基創新現象 Niche innovation，2016 年僅占 OECD 總專利 1.80%），加上無形資產衡量偏誤與商業化時間落差（J-curve），AI 專利生產尚未強勁反映在官方總體勞動生產力統計中。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **樣本**：Dataset 1（專利）涵蓋 **35 個 OECD 國家（含德國、荷蘭、丹麥）** + 23 個非 OECD 經濟體，期間 **1985–2016 年**；Dataset 2（論文）涵蓋 **35 個 OECD 國家** + 28 個非 OECD 國家，期間 **1998–2017 年**。
    - **變數（本研究自變數之原始出處！）**：
      - **依變數 $\Delta \ln(Y/L)_{it}$**：取自 PWT 10.0 之**每工時實質 GDP 年成長率**（2017 PPP 美元；穩健性檢驗改用每就業人口實質 GDP 成長率）。
      - **核心自變數（每百萬就業人口，流量採 5 期移動平均，存量採永續盤存法 PIM 折舊率 $\delta = 15\%$）**：
        1. **申請人 AI 專利**：$\ln(AI\text{ }Pat / L)^{APP}$ 與存量 $\ln(AI^{ST}Pat / L)^{APP}$（取自 OECD Science, Technology and Patents database，IP5 專利家族、優先權日、分數計數法 Fractional counts）。
        2. **發明人 AI 專利**：$\ln(AI\text{ }Pat / L)^{INV}$ 與存量 $\ln(AI^{ST}Pat / L)^{INV}$。
        3. **AI 科學出版物**：$\ln(AI\text{ }Pub / L)$ 與存量 $\ln(AI^{ST}Pub / L)$（取自 Elsevier/Scopus，以約 800 個 AI 關鍵字辨識）。
      - **控制變數 $Z_{it}$**：落後一期生產力水準 $\ln(Y/L)_{i,t-1}$、勞均資本成長率 $\Delta \ln(K/L)_{it}$、國家整體一般創新 $\ln(GI)$（總專利或總論文除以就業人數）、PWT 人力資本指數 $HC$（平均受教育年數與報酬率）、貿易開放度 $Trade$（進出口占 GDP %，WDI）、法規品質指數 $RQ$（WGI）。
  - **📐 模型（Model）**：
    - **擴充生產函數推導之動態面板成長模型（Eq. 1）**：
      $$\Delta \ln\left(\frac{Y}{L}\right)_{it} = \beta_0 + \beta_1 \ln\left(\frac{Y}{L}\right)_{i,t-1} + \beta_2 \Delta \ln\left(\frac{K}{L}\right)_{it} + \beta_3 \ln\left(\frac{AI}{L}\right)_{it} + \beta_4 \ln Z_{it} + \mu_i + \nu_t + \varepsilon_{it}$$
      包含國家固定效果 $\mu_i$ 與時間固定效果 $\nu_t$。
    - **估計方法**：除基準 FE-OLS 外，採用 **IV-GMM** 搭配 6 種工具變數策略處理反向因果內生性（含落後一期專利／論文、工程與技術領域 R&D 占 GDP 比重外部工具變數、同所得群組他國平均專利數、以及 Lewbel 2012 異質變異數基礎工具變數）。
- **6. 研究結果（Research Findings）**：
  1. **AI 專利與論文的爆發性成長，但占總創新比重仍小（Table 1 & Figs. 1–2）**：
     - 1985 至 2016 年間，OECD 國家的 AI 專利申請量暴增 **34 倍**（總專利僅增加 3.3 倍），但截至 2016 年，AI 專利占 OECD 全部專利的比重仍僅由 `0.18%` 升至 **`1.80%`**（發明人口徑由 `0.17%` 升至 `1.78%`；非 OECD 國家達 `2.17%`）。AI 科學出版物占比則在 1998–2017 年間由 OECD 的 `0.68%` 升至 **`1.38%`**（非 OECD 由 `1.07%` 升至 `2.16%`）。
  2. **AI 專利（流量與存量）對總體勞動生產力成長無顯著影響（Tables 3, 4, 5 & Appendix B）**：
     - 在 OECD 34 國（Table 3 & Table 5）與全球 57 國（Table 4）中，無論使用 OLS 或各種 IV-GMM、申請人或發明人專利、流量或存量、是否加入 $HC, Trade, RQ$ 控制變數，**AI 專利的係數皆接近 0 且統計上不顯著**（例如 OECD 申請人專利流量 OLS 為 $0.002–0.003$，專利存量 IV-GMM 為 $-0.001 \text{ 至 } 0.008$，均不顯著；反觀國家一般整體創新 $\ln(GI)$ 則顯著為正 $0.012^{*}–0.047^{***}$，貿易開放度 $Trade$ 在 OECD 亦顯著為正 $0.001^{***}$）。作者據此指出 AI 專利在 2016 年前仍屬「利基創新現象（Niche innovation）」，支持總體層級的現代生產力悖論。
  3. **關鍵發現：AI 科學出版物存量（Publication Stock）對勞動生產力成長具高度顯著正向影響！（Tables 6 & 7）**：
     - 當改以 **Elsevier/Scopus AI 科學出版物存量 $\ln(AI^{ST}Pub/L)$** 衡量 AI 知識累積時，在 **OECD 35 國（Table 6）** 與 **全球 63 國（Table 7）** 的所有模型規格中（OLS、落後項 IV-GMM、外部 R&D 工具變數 IV-GMM，含控制一般創新 $\ln(GI)$），**全部呈現統計顯著的正向影響**！
     - 在 OECD 35 國中（Table 6）：$\ln(AI^{ST}Pub/L)$ 係數在 OLS 為 **`+0.024^{***}$`**（控制 $GI$ 為 **`+0.014^{*}$**），在 IV-GMMb 為 **`+0.026^{***}$**，在外部工具變數 IV-GMMc 為 **`+0.024^{***}$**（控制 $GI$ 為 **`+0.020^{**}$**）！此外，AI 出版物流量 $\ln(AI\text{ }Pub/L)$ 在未控制 $GI$ 時亦顯著為正（**`+0.007^{***}$**）。
     - 作者解釋：**科學出版物（Bibliometric data）比專利更能捕捉廣泛、未申請專利的演算法與軟體形式 AI 創新**！
- **7. 研究限制（Research Limitations）**：
  1. 專利資料截斷於 **2016 年**（因專利公開法律延遲）、論文資料至 **2017 年**，尚未涵蓋 2018 年後的最新 AI 浪潮；
  2. 官方總體 GDP 與生產力統計存在無形數位資產的「衡量偏誤（Mismeasurement hypothesis）」；
  3. 僅聚焦於「AI 技術生產（Production of AI knowledge）」，未直接衡量企業透過貿易或軟體採購「採用（Adoption）」AI 的微觀學習效果。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - **這篇論文對你們的研究設計具有「決定性的救命價值」**！
    1. 你們在 `量化研究法論文架構.pdf` 中選用的三個自變數（**OECD 申請人 AI 專利、OECD 發明人 AI 專利、Elsevier/Scopus AI 科學出版物**）完全出自這篇 *Technovation* (2023) 與接續它的 *Notas Económicas* (2026)！
    2. 本篇證明了：**在 FE-OLS / IV-GMM 模型中，單看「AI 專利」可能因利基性質與營業秘密而不顯著，但「Elsevier/Scopus AI 科學出版物（特別是存量）」卻對 OECD 勞動生產力成長有極強且穩健的正向顯著效果（$+0.020^{**} \text{ 至 } +0.026^{***}$）**！這為你們在論文中解釋「為何要同時納入 Scopus AI 學術論文補充專利指標的限制」提供了最完美的頂級期刊理論與實證依據！

---

## 相關頁面（Related Pages）

- **國別與概念頁**：[歐盟與 OECD](../countries/eu-oecd.md) | [德國](../countries/germany.md) | [荷蘭](../countries/netherlands.md) | [丹麥](../countries/denmark.md)
- **專題綜合頁**：
  - [AI 對生產力與經濟成長之影響機制](../concepts/ai-productivity-and-growth.md)
  - [跨國異質性與調節變數分析](../concepts/country-heterogeneity-and-moderators.md)
  - [文獻計量方法比較與本研究變數對齊](../concepts/methodology-and-variables.md)
