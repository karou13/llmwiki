---
title: "文獻深度摘要：丹麥數位技能採用（Research Policy）、生產力潛力（丹麥央行）與勞動市場衝擊（IMF）（2025–2026）"
category: "source"
tags: [Source-Summary, Denmark, NLP, BERT, Vacancy-Data, Research-Policy, Danmarks-Nationalbank, IMF, TFP, Labor-Market]
updated: 2026-11-16
sources_count: 3
---

# 文獻深度摘要：丹麥數位技能採用（Research Policy）、生產力潛力（丹麥央行）與勞動市場衝擊（IMF）（2025–2026）

本頁嚴格遵循 [AGENTS.md](../../AGENTS.md) 之「**單篇文獻 7 + 1 必填欄位規範**」，針對 `RAW/` 中已完整精讀全文之 **3 篇丹麥重量級研究**（涵蓋頂尖創新期刊 *Research Policy* 2026、丹麥國家銀行 2026 總體分析報告、以及 IMF 2025 丹麥勞動市場研究）進行完整 8 大維度深度解析。

---

## [DK-1] Digital Skill Adoption and Employment Dynamics: Evidence From Matched Vacancy-Employer–Employee Data (Jensen & Schneider, 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Mathias Fjællegaard Jensen（牛津大學 University of Oxford）、Cédric Schneider（哥本哈根商學院 Copenhagen Business School）
  - **發表期刊**：***Research Policy***（Elsevier 頂尖創新與政策雙盲同儕審查期刊，Volume 55, Issue 5, Article 105476，2026 年 3 月上線，共 27 頁）。
  - **DOI / 本地檔案**：[https://doi.org/10.1016/j.respol.2026.105476](https://doi.org/10.1016/j.respol.2026.105476) ｜ 本地檔案：`RAW/1-s2.0-S0048733326000673-main.pdf`
- **2. 研究目的（Research Purpose）**：
  - 透過自然語言處理（NLP / BERT 深度學習模型）從丹麥 2008–2019 年近 45 萬筆線上徵才廣告全文中提取企業對「整體數位技能」與高階「資料科學與 AI（Data Science & AI）」的需求指標，並與丹麥全國行政登記之雇主—受僱者配對微觀資料（Matched Employer-Employee Data）結合，實證檢驗企業數位與 AI 技能投資對**勞動生產力、全要素生產力（TFP）**以及**企業就業動態、銷售擴張與勞動力重組（Workforce Reorganization）**的影響，並剖析跨職業、跨產業与跨區域的異質性。
- **3. 研究問題（Research Questions）**：
  1. 企業在線上職缺中對「數位技能」與「資料科學與 AI」技能的需求，是否能有效反映企業實際 IT 軟硬體支出，並與企業勞動生產力及全要素生產力（TFP）呈顯著正相關？
  2. 企業提高數位與 AI 技能投入後，究竟帶來「就業創造（規模與生產力效果）」還是「就業替代（自動化裁員）」？對企業銷售額、附加價值、勞動份額與員工流動率（Churning）有何動態影響？
  3. 數位化與資料科學／AI 對不同勞工群體（女性、移民、大學畢業生）、不同職業（高技能認知職位 vs. 常規體力職位）、不同產業及丹麥五大區域的就業影響是否存在顯著異質性？
- **4. 研究假設（Research Hypotheses）**：
  - **核心理論預期（基於 SBTC、RBTC 與 Acemoglu & Restrepo 任務框架）**：
    - **假設 1（生產力提升預期）**：線上職缺中的數位技能（尤其 Data Science & AI）占比能準確代理企業數位化投入，並與勞動生產力及 TFP 呈顯著正相關，且高階 AI 技能的生產力溢酬高於一般數位技能。
    - **假設 2（就業淨創造與內部重組預期）**：若數位與 AI 技能帶來的生產力提升、成本下降與產出規模擴張（Scale effect）大於替代效果，企業總就業與銷售額將呈現淨成長，但內部會伴隨短期員工流動率（Churning）上升的技能重組。
    - **假設 3（職業、產業與區域高度集中預期）**：高階「資料科學與 AI」主要互補高技能認知與管理專業職位，且其就業創造效果在產業（集中於技術服務業）與地理區域（集中於首都哥本哈根）上比一般數位技能更為集中。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **來源與樣本**：整合 HBS Economics 線上職缺全文與丹麥行政登記資料（FIRM 財務、BFL 薪資工時、BEF 人口學歷、VITU 企業 IT 支出調查），涵蓋 **2008–2019 年**丹麥平均員工數 $\ge 20$ 人（排除純 IT 產業）之 **超過 7,500 家民營企業（生產力模型 $N = 7,779$ 家企業、$75,799$ 筆觀測值；動態模型 $N = 5,349–5,946$ 家企業）**、共 **449,389 筆（約 45 萬筆）職缺全文**。
    - **NLP 三階段 BERT 分類法**：微調英文與丹麥語 BERT 模型（`Maltehb/danish-bert-botxo`），將職缺技能分為 8 大數位技能群集（含 `Data science & AI`：R, Stata, Big Data, Data Science, AI）。
    - **變數**：核心自變數 $D_{it}$ 為企業 $i$ 在 $t$ 年要求「任何數位技能」或「資料科學與 AI 技能」之職缺占總職缺比例（0–1）；依變數為勞動生產力 $\log(Y_{it}/L_{it})$、Wooldridge (2009) GMM 估計之 $\text{TFP}$、總就業與各子群體就業、對數銷售額 $\ln(\text{Sales})$、附加價值、勞動份額與流動率 $\ln(\text{Churning})$。
  - **📐 模型（Model）**：
    1. **擴充 Cobb-Douglas 生產力模型**：$\log(Y_{it}/L_{it}) = \alpha \log(K_{it}/L_{it}) + (\beta+\alpha-1)\log(L_{it}) + \gamma D_{it} + I_i + \tau_t + \epsilon_{it}$；
    2. **動態分散領先—落後模型（Distributed Lead-Lag Model，前後各 4 年 $k = -4 \dots 4$）**：
       $$E_{it} = \sum_{k=-4}^{4} \delta_k D_{i,t-k} + \mu_i + \eta_{it} + \lambda_{srt} + \rho_{it} + \epsilon_{it}$$
       控制企業固定效果 $\mu_i$、年份×3位碼產業×區域交乘固定效果 $\lambda_{srt}$ 及基期 IT 學歷員工趨勢項 $\eta_{it}$；另以 **堆疊雙重差分法（Stacked DiD）** 進行穩健性檢驗。
- **6. 研究結果（Research Findings）**：
  1. **IT 支出效度與博士人才互補（Table 3 & Fig. 2）**：IT 支出占銷售額最高組企業，職缺要求 Data Science & AI 的機率比最低組高出 **2 倍以上**；且企業內**博士（PhD）員工比例與 Data Science & AI 職缺占比呈極高度正相關（$0.413^{***}$）**，但與一般數位技能無關。
  2. **對勞動生產力與 TFP 的顯著貢獻（Tables 4 & 5）**：
     - **勞動生產力**：整體數位技能職缺占比每增加 10 個百分點，勞動生產力提升 **`0.62%`**（$\gamma = 0.062^{***}$）；拆解後，**Data Science & AI 職缺占比每增加 `10 個百分點`，企業勞動生產力顯著提升 `0.63%`（$\gamma = 0.063^{***}$），是其他數位技能（`0.24%`）的 2.6 倍以上！**
     - **全要素生產力（TFP）**：整體數位技能每增 10 個百分點，TFP 提升 **`0.88%`**（$0.088^{***}$）；拆解後，**Data Science & AI 每增加 `10 個百分點`，TFP 顯著提升 `1.01%`（$\gamma = 0.101^{***}$），幾乎是其他數位技能（`0.35%`）的 3 倍！**
  3. **對就業、銷售與內部重組之動態效果（Figs. 3 & 4）**：事前趨勢（$k < 0$）完全平坦通過檢定；投資後數位與 AI 技能顯著帶動**總就業成長**（第 1 年峰值半彈性 $+0.6\%$）、**銷售額與附加價值擴張**（半彈性 $+0.3\%–0.6\%$），女性、移民與大學畢業生就業皆受惠；但在 $k=1$ 伴隨短暫顯著的**員工流動率（Churning）上升**，反映「先替換技能、同時擴編」的內部勞動力重組。
  4. **強烈的職業、產業與區域異質性（Figs. 5–10）**：
     - **職業別**：Data Science & AI 的正向就業成長僅集中於**經理人、專業人員、技術員與事務支援人員**（峰值半彈性 `0.8%–1.4%`），藍領與服務職無影響。
     - **產業別**：一般數位技能在製造、公用事業、營造、貿易運輸與服務業皆帶來廣泛就業成長（`0.4%–0.8%`）；但 **Data Science & AI 的顯著正向就業關聯主要集中於「專業技術與支援服務業（Technical & Support Services）」**！
     - **區域別**：Data Science & AI 的就業成長高度集中於知識密集與高學歷匯聚的**哥本哈根首都大區（Capital Region，峰值半彈性 `1.2%`）**。
- **7. 研究限制（Research Limitations）**：
  1. 僅捕捉透過「外部職缺招募」獲取數位人才的企業，未涵蓋內部員工再培訓或直接購買現成軟體（使估計值偏保守下界）；
  2. 雖控制高維度固定效果並以 Stacked DiD 驗證，仍屬「條件關聯（Conditional associations）」，無法完全排除隨時間變動的未觀測企業衝擊；
  3. 樣本期間為 **2008–2019 年**，反映的是**判別式／預測式 AI（Predictive AI）**，尚未涵蓋 2022 年底後的生成式 AI。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本篇為頂刊 *Research Policy* 論文，不僅直接支撐 **H1（AI 提升勞動生產力 +0.63% 與 TFP +1.01%）**，更以微觀鐵證支撐 **H3（Data Science & AI 高度依賴高學歷／博士人力資本，且高度受產業結構與區域條件調節）**！

---

## [DK-2] Artificial Intelligence Can Boost Productivity in the Danish Economy (Abildgren & Jensen, Danmarks Nationalbank 2026)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Kim Abildgren（Chief Adviser）& Rasmus Mose Jensen（Principal Economist）
  - **出版機構與系列**：**Danmarks Nationalbank**（丹麥國家銀行／中央銀行），*ANALYSIS | Economic activity*, No. 6（2026 年 4 月 8 日出版，共 25 頁）。
  - **官方連結／本地檔案**：[https://www.nationalbanken.dk/en/news-and-knowledge/publications-and-speeches/analysis/2026/artificial-intelligence-can-boost-productivity-in-the-danish-economy](https://www.nationalbanken.dk/en/news-and-knowledge/publications-and-speeches/analysis/2026/artificial-intelligence-can-boost-productivity-in-the-danish-economy) ｜ 本地檔案：`RAW/Danmarks_Nationalbank_2026_AI_Boost_Productivity.pdf`
- **2. 研究目的（Research Purpose）**：
  - 全面盤點丹麥企業最新 AI 採用率、國家準備度與 AI 投資占 GDP 比重，彙整國際微觀與總體生產力文獻，並運用「任務基礎模型（Task-based Approach）」針對丹麥職業結構進行本土情境模擬，量化推估未來 10 年 AI 對丹麥年均全要素生產力（TFP）成長率的提升幅度，及其對通膨、自然實質利率（$r^*$）與固定匯率制度下國家競爭力的意涵。
- **3. 研究問題（Research Questions）**：
  1. 丹麥企業在 2025 年的 AI 採用率、生成式 AI 使用率及 2023 年 AI 投資占 GDP 比重在歐盟處於何種地位？跨產業與跨規模差距多大？
  2. 國際總體研究對 AI 提升年均 TFP 與勞動生產力的預測區間為何？
  3. 依據丹麥特有的工作任務暴露度（39%–61%）與勞動成本份額（51%），未來 10 年 AI 預計每年可提升丹麥 TFP 成長多少個百分點？
- **4. 研究假設（Research Hypotheses — 總體分析與模擬命題）**：
  - **命題 1（高準備度與人均所得驅動採用）**：丹麥憑藉高數位化公部門、高學歷人力資本與彈性安全（Flexicurity）勞動市場，企業採用率領先歐盟，且跨國採用率與人均 GDP 呈顯著正相關。
  - **命題 2（任務基礎四因子乘積傳導）**：AI 對總體年均 TFP 成長的貢獻取決於「AI 暴露任務比例 $\times$ 獲利可行替換比例 $\times$ 平均勞動成本節省率 $\times$ 勞動占附加價值份額 $\div 10$ 年」。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - 整合丹麥統計局（Statistics Denmark 2022–2025 企業調查與 2024 國民帳戶勞動份額 51%）、Eurostat (2026)、EIB (2025)、IMF AIPI (174 國)、Stanford AI Global Vibrancy Tool (36 國)、OECD 創投與 Fonteneau et al. (2025) 歐美 AI 投資占 GDP 估計，以及 Felten et al. (2021, 2023) 對接丹麥 ISCO-08 之職業暴露度資料。
  - **📐 模型（Model）**：
    - **Acemoglu (2024) / Bergeaud (2024) 任務基礎總體生產力情境模擬模型（Box 2）**：
      $$\Delta \text{TFP}_{\text{annual}} = \frac{\text{Exposure Share } (39\% \text{ or } 61\%) \times \text{Profitable Share } (23\%–80\%) \times \text{Cost Savings } (27\%–40\%) \times \text{Labor Share } (51\%)}{10}$$
- **6. 研究結果（Research Findings）**：
  1. **2025 年丹麥企業採用率躍升至 `42%`，高居歐盟第一（P.5–7, Charts 1–3）**：
     - 丹麥 10 人以上企業使用至少一項 AI 技術的比例，由 2022 年 `17%`、2023 年 `15%`、2024 年 `28%`，急劇攀升至 **2025 年的 `42%`（居歐盟之冠**；歐盟平均約 20%，荷蘭約 33%，德國約 25–26%）。此外，高達 **`58%`** 丹麥企業使用生成式 AI（高於歐盟平均 `37%` 與美國 `36%`）。
     - **規模與產業差異**：2025 年 250+ 人大企業採用率達 **`75%`**，10–49 人小企業為 **`37%`**；產業別以**資通訊業（ICT）近 `79%`** 最高，商業服務業 **`50%`**，製造業 **`39%`**，貿易運輸業 **`38%`**，**營建業最低僅 `24%`**。惟目前僅 `25%` 企業自行開發專屬 AI，多數仍購買標準軟體授權。
  2. **AI 投資占 GDP 比重與算力／創投落差（P.9–10, Charts 4–7）**：
     - **廣義 AI 投資占 GDP `2%`**：2023 年丹麥廣義 AI 相關投資（含技能、R&D、資料設備、IP）約占 **GDP 的 `2.0%`**（在歐盟僅次於荷蘭的約 `2.3%`，高於歐盟平均 `1.5%` 與德國 `1.4%`）。
     - **準備度 vs. 算力與創投落差**：丹麥在 IMF AI 準備度指數高居**全球第 2**，但在 Stanford AI 活力指數（研發、專利、超算）僅排**全球第 13**（Top500 超級電腦丹麥僅 1 台 vs. 瑞典 8 台；AI 創投占 GDP 年均僅 `0.1%` vs. 美國與瑞典 `0.4%`）。
  3. **國際文獻與丹麥本土 TFP 成長預測（P.11–18, Table 1 & Chart 8）**：
     - **國際研究綜整（Table 1）**：多篇國際研究估計 AI 每年可提升全要素生產力（TFP）成長約 **`0.1–1.2 個百分點`**（提升勞動生產力成長 `0.1–2.8 個百分點`）。
     - **丹麥本土模擬（Chart 8）**：估計未來 10 年 AI **每年可提升丹麥 TFP 成長約 `0.1 至 1.0 個百分點`**（下界保守情境 `+0.1 pp`、Acemoglu 參數 `+0.15 pp`、Bergeaud 基準參數 `+0.4 pp`、上界樂觀情境 `+1.0 pp`；對照丹麥過去 5 年年均 TFP 成長僅 `0.5%`，提振效果顯著）。
  4. **實際就業結構早期分化**：2022–2024 年間丹麥總就業穩健成長，但高暴露之「翻譯與語言工作」就業人數大減 **`23%`**，而「軟體開發」就業則成長 **`14%`**。
- **7. 研究限制（Research Limitations）**：
  1. **高度依賴模型參數假設與時間不確定性**：可能存在短期「J 曲線效應」，因此丹麥央行尚未將 AI 額外生產力單獨納入最新三年總體基準預測；
  2. 未計入投資 AI 對其他非 AI 生產領域的**資源排擠（機會成本）**；
  3. 任務模型未捕捉 AI 加速科學研發（Idea generation）的長期內生成長，亦無法衡量非市場部門（個人休閒）與知識品質提升之國民帳戶誤差。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 本報告 Chart 4–7 揭示了一個極為精采的跨國異質性洞察（支持 **H2 & H3**）：**丹麥在「企業商業採用率（42%）與準備度（全球第 2）」領先全歐，但在「AI 專利、基礎發表與超算算力（Stanford 排名第 13）」上卻非大國**；這與德國「科研論文與專利極強、中小企業採用較慢」形成鮮明對比，直接說明為何本研究必須同時檢視 AI 創新（專利/論文）與國家吸收條件（人力資本、產業結構）的交互作用！

---

## [DK-3] The Impact of Artificial Intelligence on Denmark's Labor Market (Renault, IMF 2025)

- **1. 來源／期刊（Source & Journal）**：
  - **作者**：Théodore Renault（IMF 歐洲部經濟學家）
  - **出版機構與系列**：International Monetary Fund (**IMF**)，*Selected Issues Papers (SIP)*，Volume 2025: Issue 119, Article A001（2025 年 8 月 25 日出版）。
  - **DOI / 本地檔案**：[https://doi.org/10.5089/9798229021647.018.A001](https://doi.org/10.5089/9798229021647.018.A001) ｜ 本地檔案：`RAW/IMF_2025_Denmark_Labor_Market_FullText.txt`
- **2. 研究目的（Research Purpose）**：
  - 結合歐盟勞動力調查（EU Labour Force Survey）之丹麥微觀個體資料與「AI 職業暴露度（Exposure）」及「互補性（Complementarity）」指標，量化剖析丹麥 **119 種職業、19 個經濟活動部門**中，有多少比例的勞工將從 AI 整合中受惠（高暴露高互補）、有多少比例面臨職位替代風險（高暴露低互補），並比較公私部門、性別、教育、所得與移民群體的脆弱度差異。
- **3. 研究問題（Research Questions）**：
  1. 丹麥勞動市場整體的 AI 暴露度與互補性分布為何？有多少比例的勞工面臨較高的工作替代風險？
  2. 不同產業（ICT、專業科學服務、製造、運輸）與不同部門（公部門 vs. 私部門）受到 AI 影響的程度有何差異？
  3. 哪些人口統計群體（女性 vs. 男性、高學歷高所得 vs. 低學歷低所得、本國人 vs. 移民）最能從 AI 獲益或面臨替代風險？
- **4. 研究假設（Research Hypotheses）**：
  - **核心理論預期（基於 Felten et al. 2021 與 Pizzinelli et al. 2023 架構）**：
    - **預期 1（高知識服務業與公部門推升高暴露度）**：丹麥因具備高教育勞動力與龐大的知識服務業及公共醫療教育部門（占總就業 1/3），整體 AI 暴露度將顯著高於歐洲平均。
    - **預期 2（互補性決定生產力增益 vs. 替代風險）**：高暴露職業中，若具備高社會互動、重大責任與專業判斷（高互補性），AI 將提升其生產力；若屬常規行政與低互補性，則面臨工作替代風險。
- **5. 研究方法（Research Methodology — 資料與模型）**：
  - **📊 資料（Data）**：
    - **2023 年歐盟勞動力調查（EU-LFS）** 丹麥微觀資料，細分 **119 種職業（ISCO）**、**19 個經濟活動類別（NACE）**、性別、3 個年齡組、3 個教育程度組（低／中／高等教育）、3 個所得組與移民身分；並結合 2024 年丹麥企業 AI 採用率統計與 IMF AIPI 指數。
  - **📐 模型（Model）**：
    - **暴露度—互補性三維分類矩陣模型（Exposure-Complementarity Matrix, Annex I）**：
      - 以 Felten et al. (2021) 計算各職業 AI 暴露度分數，以 Pizzinelli et al. (2023) 六大維度（溝通、責任、物理條件、關鍵性、例行性、技能）計算互補性分數；
      - 以中位數為切點劃分為三類：(1) **高暴露高互補（HEHC，受惠型）**；(2) **高暴露低互補（HELC，替代風險型）**；(3) **低暴露（LE，不受影響型）**。
- **6. 研究結果（Research Findings）**：
  1. **2024 年企業採用率與產業明細**：
     - 2024 年丹麥約 **`25%`** 的企業（10 人以上）使用至少一種 AI 技術（一年內近翻倍；主要為自然語言生成 `18%` 與文字探勘 `17%`）。
     - **跨產業差異極為顯著**：**資訊與通訊業 `70%`**、**專業科學與技術活動 `45%`**、**製造業 `22%`**、**運輸業 `21%`**。250+ 人大企業採用率逾 `60%`，<50 人小企業僅 `20%`。
  2. **整體勞工暴露度與替代風險（Section C）**：
     - **超過 `60%`（約 `64%`）** 的丹麥勞工處於高 AI 暴露職業（比歐洲其他國家平均高出 **9 個百分點**）。
     - **受惠群體（HEHC，占總勞動力 `43%` / 高暴露者的 2/3）**：從事教師、醫療保健、科學與工程專業等高互補職位，將從 AI 輔助中顯著提升生產力。
     - **替代風險群體（HELC，占總勞動力約 `20%–21%` / 高暴露者的 1/3）**：主要為商業與行政管理專業人員、事務員與部分客服銷售，面臨較高工作替代風險。
     - **低暴露群體（LE，占總勞動力 `36%`）**：從事個人照護、營造與基層體力勞動。
  3. **公私部門與人口群體差異**：
     - **私部門 vs. 公部門**：私部門有 **`25%`** 勞工面臨替代風險（HELC）；公部門（占丹麥就業 1/3）僅 **`13%`** 面臨替代風險，且**逾 `50%` 公部門員工（醫療與教育）屬於高暴露高互補（HEHC）**，AI 自動化那 13% 公部門行政職更能釋放人力緩解醫護短缺。
     - **性別與教育**：近 **`75%` 女性**處於高暴露職位且多屬高互補（醫護教育），受惠程度高於男性（逾 50% 男性處於低暴露體力職）；**高等教育（大專以上）與高所得勞工是 AI 最大受惠者（HEHC 最高）**，但同時也有約 `20%` 高學歷與 `25%` 高所得白領處於 HELC 面臨替代風險。
- **7. 研究限制（Research Limitations）**：
  1. 「高暴露」與「高互補」係基於所有職業中位數切點之**相對指標（Relative sense）**，並非絕對失業預測；
  2. O*NET 職業特徵源自美國職場結構，對接至歐盟 ISCO 分類時可能忽略丹麥本土職場差異，且靜態分類未計入 AI 創造新職業的動態效果。
- **8. 補充與對本研究之啟示（Additional Notes & Thesis Connection）**：
  - 為本研究 **H3（25–64 歲大專以上高等教育比例之調節作用）** 提供了極為關鍵的理論機制：在丹麥，**大專以上高學歷勞工（Tertiary-educated）正是處於「高 AI 暴露且高互補（HEHC）」的核心群體**，能將 AI 技術轉化為生產力增益而非單純被取代！同時報告詳述之 **2024 年 12 月丹麥《AI 策略方針》**（公部門數位工作小組、開放丹麥語文本語料庫）與 **《SME:Digital》補助**、**Flexicurity 彈性安全制度**，更是本論文討論丹麥制度優勢的絕佳素材。

---

## 相關頁面（Related Pages）

- **國別與概念頁**：[丹麥（Denmark）](../countries/denmark.md) | [AI 對生產力與經濟成長之影響機制](../concepts/ai-productivity-and-growth.md) | [跨國異質性與調節變數分析](../concepts/country-heterogeneity-and-moderators.md) | [文獻計量方法比較](../concepts/methodology-and-variables.md)
