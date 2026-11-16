# LLM Wiki 操作日誌（Chronological Operation Log）

本檔案為**唯讀追加（Append-only）**的時間序列日誌，記錄所有針對本知識庫執行的 `ingest`（文獻攝取）、`query`（檢索與知識回存）與 `lint`（健康檢查）操作。可透過正規表達式 `grep "^## \[" wiki/log.md` 快速檢索歷史紀錄。

---

## [2026-11-16] ingest | 初始化 LLM Wiki 架構並讀取 RAW/文獻蒐集總覽.pdf 與論文研究架構
- **操作類型**：`ingest`
- **來源/觸發**：讀取 `RAW/文獻蒐集總覽.pdf`（13 頁）與 `僅供參考/量化研究法論文架構.pdf`（3 頁）。
- **影響頁面**：建立初步 `wiki/` 目錄與基礎頁面。

---

## [2026-11-16] ingest | 全文精讀 RAW/ 19 份原始文獻檔案並升級為「單篇 8 大必填欄位」與互動式網站
- **操作類型**：`ingest`
- **來源/觸發**：使用者確認 `AGENTS.md` 開發規範（含課程 GitHub Pages 網站要求與單篇文獻「1. 來源期刊、2. 研究目的、3. 研究問題、4. 研究假設、5. 研究方法〔資料、模型〕、6. 研究結果、7. 研究限制、8. 補充與本研究啟示」必填格式），並提供／補充 `RAW/` 目錄下全部 19 份原始論文 PDF 與報告全文：
  1. `AI adoption among German firms.pdf` (Licht & Wohlrabe, *Applied Economics Letters*, 2026)
  2. `economies-14-00031.pdf` (Athari et al., *Economies*, 2026 — 德國 NARDL)
  3. `s40008-024-00345-y.pdf` (Kalai, Becha, & Helali, *Journal of Economic Structures*, 2024 — 歐洲 30 國 PMG-ARDL / NARDL)
  4. `Rammer_et_al_2022_German_Firm_Innovation_ZEW_DP.pdf` (Rammer, Fernández, & Czarnitzki, *Research Policy*, 2022 / ZEW DP)
  5. `TNO_2023_Comparison_of_AI_Strategies_Netherlands.pdf` (Lazo et al., TNO Report 2023 R11576)
  6. `1-s2.0-S0048733326000673-main.pdf` (Jensen & Schneider, *Research Policy*, 2026 — 丹麥 45 萬筆職缺 BERT NLP 配對研究)
  7. `Danmarks_Nationalbank_2026_AI_Boost_Productivity.pdf` (Abildgren & Jensen, Danmarks Nationalbank Analysis No. 6, 2026)
  8. `IMF_2025_Denmark_Labor_Market_FullText.txt` (Renault, IMF SIP/2025/119)
  9. `Eurochambres_2026_Effects_of_AI_on_Europes_Productivity.pdf` (Colajanni et al., Eurochambres Chief Economists WP #3, 2026)
  10. `OECD_2026_Digital_Technology_Diffusion_Microdata.pdf` (Calvino, Costa, & Haerle, OECD STI WP 2026/01)
  11. `Notas_Economicas_OECD_Panel_ARDL.pdf` (Duarte, Freitas, & Simões, *Notas Económicas*, 2026 — OECD 35 國 Panel ARDL + Diff-GMM)
  12. `ECB_2025_Adoption_and_Investment_in_AI_Euro_Area_OP395.pdf` (Ferrando et al., ECB Occasional Paper No. 395, 2025/2026)
  13. `IMF_2025_AI_and_Productivity_in_Europe.pdf` (Misch, Park, Pizzinelli, & Sher, IMF WP/25/67, 2025)
  14. `BIS_2025_AI_and_Growth_Short_Run_Impact.pdf` (Gambacorta et al., BIS WP No. 1321 / CEPR DP 20992, 2025/2026)
  15. `Parteka_Kordalska_2023_Technovation_AI_Patents_Productivity.pdf` (Parteka & Kordalska, *Technovation*, 2023)
  16. `s11079-024-09777-2.pdf` (Wagner, *Open Economies Review*, 2024/2025)
  17. `DergiPark_2025_OECD_Export_Performance.pdf` (Lahmeri, *UIECD*, 2025)
  18. `Lo_Lee_2024_Digitalization_AI_Intensity_Trade.pdf` (Lo & Lee, *Annals of Economics and Finance*, 2024)
  19. `文獻蒐集總覽.pdf`（含 OECD 德國審查 2024、歐盟協調計畫德國報告 2025、歐洲經濟批判分析 2025、Eurostat 2026、荷蘭 RankmyAI 2025、以及 Plikas et al. 2024 EU27 研討會論文）
- **影響頁面**：
  - 全面更新 `AGENTS.md`、`wiki/index.md`、`wiki/log.md`
  - 全面升級 `wiki/sources/src-*.md` 共 6 大文獻專頁（收錄全部 22 篇獨立文獻／24 筆條目之完整 8 大必填欄位）
  - 建置 GitHub Pages 互動式知識庫網站：`index.html`、`assets/style.css`、`assets/app.js`、`assets/wiki-data.js`
- **關鍵摘要**：
  1. 每一篇期刊論文與非論文之政策／機構報告皆已完成 8 大欄位深度結構化整理，零遺漏、零腦補。
  2. 釐清跨文獻核心數據口徑差異（如 Eurostat 2026 嚴格口徑：丹麥 42%、荷蘭 33%、德國 26%、歐盟平均 19.95%；ECB 2025 SAFE 廣義口徑：荷蘭 85%［顯著 23%］、德國 77%［顯著 7%］、歐元區平均 71%［顯著 7%］；德國 ifo 2024 調查：27% 使用［製造業 31%］；德國 CIS 2019 調查：5.8% 積極使用）。
  3. 同步完成前端互動式網頁資料庫，支援依國家、文獻性質（論文 vs. 政策報告）、研究假設（H1/H2/H3）與全文關鍵字即時篩選。
