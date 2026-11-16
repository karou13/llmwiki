# LLM Wiki 總目錄索引（Content Index）

本檔案為知識庫的**內容導向總目錄（Content-oriented Catalog）**。依據 [AGENTS.md](../AGENTS.md) 規範，每次執行文獻攝取（`Ingest`）、深度查詢回存（`Query`）或知識庫健檢（`Lint`）後，AI 皆會自動同步本索引與前端網站（[index.html](../index.html) / [assets/wiki-data.js](../assets/wiki-data.js)）。

- **最後更新日期**：2026-11-16
- **已精讀整合之 `RAW/` 檔案總數**：19 份原始檔案（涵蓋 **22 篇獨立文獻**：16 篇學術期刊與工作論文全文 + 6 份國際組織／央行／政府政策與產業報告，每一篇均完整具備 **8 大必填欄位**）
- **Wiki 總頁面數**：15 頁（不含 `index.md` 與 `log.md`）

---

## 一、 全局綜述（Overview & Synthesis）

- [研究全局綜述：AI 採納對經濟成長之影響與跨國異質性分析](overview.md) — 整合 H1/H2/H3 三大假設、德／荷／丹／歐盟四方橫向對照總表與本研究變數設計的核心樞紐頁。（2026-11-16 | 涵蓋 22 篇文獻）

---

## 二、 國別與實體專頁（Countries & Entities）

- [德國（Germany）：AI 國家戰略、生態系瓶頸與經濟成長實證](countries/germany.md) — 整合德國 OECD 審查（2024）、歐盟協調計畫（2025）、ifo 企業調查（2024 採用率翻倍至 27%，製造業 31%）、ECB 歐元區調查（77% 廣泛使用、7% 顯著使用）、NARDL 非線性成長動態（2026）與 CIS 工業創新（160 億歐元全球首創產品）。（2026-11-16 | 引用 8 篇文獻）
- [荷蘭（Netherlands）：高採用率 AI 生態系、NLAIC 與 AiNEd 戰略分析](countries/netherlands.md) — 整合荷蘭 TNO 國家戰略比較報告（2023，SAPAI / NL AIC 500 組織 / AiNEd 4.47–21 億歐元 / ICAI & ROBUST 8,700 萬歐元 / ELSA Labs）、RankmyAI 1,200+ 本土 AI 企業資料庫（2025）與歐元區最高採用率（85% 總使用、23% 顯著深度使用）。（2026-11-16 | 引用 5 篇文獻）
- [丹麥（Denmark）：數位技能採用、企業生產力與勞動市場暴露度分析](countries/denmark.md) — 整合丹麥 *Research Policy* 45 萬筆職缺 BERT NLP 配對實證（Data Science & AI 每增 10% 提升勞動生產力 0.63%、TFP 1.01%）、丹麥央行生產力報告（2025 採用率 42% 居 EU 第一、AI 投資占 GDP 2%、年均 TFP 增益 0.1–1.0 pp）與 IMF 勞動市場暴露度／互補性研究（64% 高暴露：43% 高互補受惠 vs. 21% 替代風險）。（2026-11-16 | 引用 5 篇文獻）
- [歐盟與 OECD（EU & OECD）：跨國政策架構、生產力實證與結構異質性](countries/eu-oecd.md) — 彙整 Eurochambres 32 國固定效果實證（2026）、OECD 15 國微觀資料擴散（2026）、*Notas Económicas* OECD 35 國 Panel ARDL + Diff-GMM（2026）、*Technovation* 63 國 AI 專利與論文實證（2023）、ECB 歐元區 12 國 SAFE 調查與 RCT 實驗（2025）、IMF 歐洲 31 國生產力與法規折損模擬（2025）及 BIS/CEPR 56 經濟體短期影響（2025/2026）。（2026-11-16 | 引用 14 篇文獻）

---

## 三、 核心概念與研究方法專頁（Concepts & Methodology）

- [概念綜合：AI 對生產力（TFP／勞動生產力）與經濟成長之影響機制](concepts/ai-productivity-and-growth.md) — 支撐 **H1** 之理論與實證綜整，對比微觀任務實驗、部門固定效果、Panel ARDL 短長期效果與「現代生產力悖論／J 曲線效應」。（2026-11-16 | 引用 14 篇文獻）
- [概念綜合：跨國異質性（Country Heterogeneity）與調節機制](concepts/country-heterogeneity-and-moderators.md) — 支撐 **H2 與 H3** 之核心專頁，深入剖析**人力資本**（大專教育比例在丹麥每增 1% 提升 AI 採用 0.53%、在荷蘭提升 0.24%；高學歷與 AI 論文長期交乘項 $+0.108^{***}$）、**產業結構**（知識密集服務業 vs. 製造業占比 $\Delta inds > 0$）與**法規制度**（三大法規折損逾 30% TFP 增益）。（2026-11-16 | 引用 16 篇文獻）
- [概念綜合：AI 與產業創新（產品／流程創新）及國際貿易出口績效](concepts/ai-innovation-and-trade.md) — 整合德國 CIS 工業創新（Rammer et al., 2022）、EU27 製造業大數據出口溢酬（Wagner, 2025：出口機率 $+12.2$ 個百分點、目的地 $+0.717$ 個）、OECD 15 國 MMQR 出口穩定器效果（Lahmeri, 2025）與臺灣學者結構引力模型（Lo & Lee, 2024：AI 密集度每增 1% 出口增 1.01%–1.30%，解釋 44% 跨國出口變異）。（2026-11-16 | 引用 4 篇文獻）
- [概念與方法綜合：文獻計量方法比較與本研究變數設計對齊](concepts/methodology-and-variables.md) — 完整對照 Panel FE、Panel ARDL + Diff-GMM、PMG-ARDL/NARDL、IV-GMM、MMQR、Rajan-Zingales 與 Lead-Lag 模型，並與本研究之依變數（實質人均 GDP 成長率）、自變數（OECD 申請人/發明人專利、Scopus 論文）與調節變數 100% 對齊。（2026-11-16 | 引用 18 篇文獻）

---

## 四、 原始文獻深度摘要（8 大必填欄位完整解析，`wiki/sources/`）

1. [德國政策審查、歐盟協調計畫、歐洲經濟批判分析與 Eurostat 統計（4 篇：`[G-1]`–`[G-4]`）](sources/src-germany-oecd-2024-and-eu-plan-2025.md)
2. [德國經濟成長（NARDL/ARDL）、企業採用率與工業創新實證（4 篇：`[G-5]`–`[G-8]`）](sources/src-germany-growth-adoption-innovation.md)
3. [荷蘭 AI 國家戰略比較報告（TNO, 2023）與荷蘭 AI 產業報告（RankmyAI, 2025）（2 篇：`[NL-1]`–`[NL-2]`）](sources/src-netherlands-ai-report-and-strategies.md)
4. [丹麥數位技能採用（Research Policy）、生產力潛力（丹麥央行）與勞動市場衝擊（IMF）（3 篇：`[DK-1]`–`[DK-3]`）](sources/src-denmark-skills-productivity-labor.md)
5. [歐盟與 OECD 生產力、經濟成長與企業 AI 採用跨國實證（8 篇：`[EU-1]`–`[EU-8]`）](sources/src-eu-oecd-productivity-and-growth.md)
6. [AI、大數據分析與國際貿易出口績效實證（3 篇：`[TR-1]`–`[TR-3]`）](sources/src-ai-trade-and-exports.md)
