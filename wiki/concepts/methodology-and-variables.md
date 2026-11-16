---
title: "概念與方法綜合：文獻計量方法比較與本研究變數設計對齊"
category: "concept"
tags: [Methodology, Econometrics, Panel-Data, Fixed-Effects, ARDL, NARDL, GMM, PCA, Variables, OECD-Patents]
updated: 2026-11-16
sources_count: 15
---

# 概念與方法綜合：文獻計量方法比較與本研究變數設計對齊

本頁面將 `RAW/文獻蒐集總覽.pdf` 中各篇實證論文所採用的**計量經濟方法（Econometric Methods）**與**變數衡量方式**進行系統性歸納，並直接與 `僅供參考/量化研究法論文架構.pdf` 中規劃的**本研究變數與模型設計**進行對齊。

---

## 一、 本研究之變數設計與資料來源（Research Design Alignment）

本研究題目為：*The Impact of Artificial Intelligence Adoption on Economic Growth: A Comparative Panel Analysis of Germany, the Netherlands, Denmark, and the OECD*。

### 1. 依變數（Dependent Variable）
- **實質人均 GDP 成長率（Real GDP per capita growth）**：
  $$\text{人均實質 GDP 成長率}_t = \left( \frac{\text{實質 GDP}_t / \text{人口}_t}{\text{實質 GDP}_{t-1} / \text{人口}_{t-1}} - 1 \right) \times 100\%$$
  - **研究意義**：衡量各國扣除人口規模與物價膨脹後的實質經濟表現，直接對應 [EU27 研究（2024）](../sources/src-eu-oecd-productivity-and-growth.md) 之 `DGDP` 與 [Notas Económicas（2026）](../sources/src-eu-oecd-productivity-and-growth.md) 之長期人均所得指標。

### 2. 核心自變數：AI 採納與創新指標（AI Adoption / Innovation）
本研究採用三項互補的國家級追蹤指標（主模型 + 穩健性檢驗）：
1. **申請人 AI 專利數（AI patents by applicants）—【主要指標】**：
   - **來源與期間**：OECD Science, Technology and Patents Database（1985–2024 年 / OECD.AI 1995–2024 年）。
   - **計算與定義**：依專利申請人（常為企業與法人機構）所在國家歸屬，採**分數計數法（Fractional counting）**按國籍分攤，避免跨國合作專利重複計算；AI 定義符合五個核心 CPC 分類（**機器學習／神經網路、自然語言與語音、電腦視覺、知識推理、AI 應用與智慧決策**）。
   - **研究意義**：衡量各國企業與機構將 AI 商業化與技術創新的活動規模（直接對應 [Notas Económicas, 2026](../sources/src-eu-oecd-productivity-and-growth.md) 以專利衡量 AI 採用的做法）。
2. **發明人 AI 專利數（AI patents by inventors）—【穩健性檢驗 1】**：
   - **來源與期間**：OECD Science, Technology and Patents Database（1985–2024 年），採分數計數法。
   - **研究意義**：依專利實際發明人（研究人員）所在國歸屬，補充「申請人指標」可能因跨國企業稅務或總部設籍而無法真實反映本土研發能力的限制。
3. **AI 學術論文發表數（AI scientific publications）—【穩健性檢驗 2】**：
   - **來源與期間**：Elsevier / Scopus（OECD.AI 整理，2000–2025 年）。
   - **計算與定義**：透過約 800 個 AI 關鍵字辨識相關學術論文，依作者所屬機構國家歸屬。
   - **研究意義**：衡量各國基礎 AI 科研與知識產出（例如[德國](../countries/germany.md)全球排名第 5），補充專利資料較偏向應用端的限制（對應 [EU27 研究, 2024](../sources/src-eu-oecd-productivity-and-growth.md) 納入 AI 研究排名的做法）。

### 3. 調節變數與控制變數（Moderators & Controls for Heterogeneity Model）
1. **人力資本（Human Capital）— 25–64 歲人口大專以上教育比例**：
   $$\text{高等教育人口比例}_{c,t} = \frac{\text{國家 } c \text{ 在年份 } t \text{ 中，25–64 歲且具 ISCED 5–8 教育程度的人數}}{\text{國家 } c \text{ 在年份 } t \text{ 中，25–64 歲人口總數}} \times 100$$
   - **用途**：檢驗 `AI 專利 × 高等教育比例` 之交互作用項（H3），分析高技能勞動力基礎是否強化 AI 創新對經濟成長的轉化效率。
2. **產業結構（Industrial Structure）— 各國各產業占總毛附加價值（GVA）比例**：
   - **用途**：可先以**製造業占 GVA 比例**作為核心產業結構變數（或進一步納入資訊通訊業／知識密集服務業占比），作為控制變數並檢驗 `AI 專利 × 產業結構` 之交互作用（H3）。

---

## 二、 文獻計量方法全覽與對照表

本知識庫收錄之實證文獻採用了多元的面板資料（Panel Data）與時間序列方法，可作為本研究撰寫「研究方法（Methodology）」與「穩健性檢驗（Robustness Checks）」時的直接引用依據：

| 計量方法模型 | 代表文獻 | 適用情境與解決之計量問題 | 對本研究模型設計之參考價值 |
| :--- | :--- | :--- | :--- |
| **面板固定效果模型<br/>(Panel Fixed Effects, FE) + Hausman Test** | • [Chief Economists WP (2026)](../sources/src-eu-oecd-productivity-and-growth.md)<br>• [EU27 GDP Study (2024)](../sources/src-eu-oecd-productivity-and-growth.md) | 控制不隨時間改變的國家特定未觀測異質性（Unobserved country heterogeneity，如地理、歷史制度），透過 Hausman Test 檢驗 FE 與 RE 之適用性。 | 本研究**基礎模型（Baseline Model）**之標準首選。 |
| **單根檢定 + 一階差分 + Stepwise + 穩健最小平方法 (RLS)** | • [EU27 GDP Study (2024)](../sources/src-eu-oecd-productivity-and-growth.md) | 針對長面板或具趨勢之總體變數進行 Panel Unit Root Tests，取一階差分確保定態（Stationarity），並以 Robust Least Squares (RLS) 排除極端值干擾。 | 本研究進行資料前處理（單根檢定）與**穩健性檢驗**之直接範本。 |
| **主成分分析<br/>(PCA, Principal Component Analysis)** | • [EU27 GDP Study (2024)](../sources/src-eu-oecd-productivity-and-growth.md) | 將多個高度共線性的 AI 指標（AI 研究排名、AI 新創數、AI 知識交流）濃縮為單一綜合指標 `AI_PCA`。 | 若本研究想將「申請人專利、發明人專利、Scopus 論文」合成單一綜合 AI 創新指數時，可採用 PCA。 |
| **面板自迴歸分配落差模型 + 廣義動差法<br/>(Panel ARDL + GMM)** | • [Notas Económicas (OECD 35 國, 2026)](../sources/src-eu-oecd-productivity-and-growth.md)<br>• [European Countries ARDL](../sources/src-germany-growth-adoption-innovation.md) | 同時估計 AI 對經濟成長的**短期動態調整（Short-run）**與**長期均衡關係（Long-run cointegration）**，並以 GMM 處理內生性（Endogeneity）與反向因果問題。 | 若本研究面板時間維度夠長（如 1995–2024），Panel ARDL 是區分長短期效果的極佳進階模型。 |
| **非線性 ARDL 模型<br/>(NARDL, Non-linear ARDL)** | • [德國 AI 投資與成長 NARDL (2026)](../sources/src-germany-growth-adoption-innovation.md)<br>• [歐洲對稱與非對稱共整合](../sources/src-germany-growth-adoption-innovation.md) | 檢驗正向與負向 AI 投資衝擊對經濟成長是否存在**非對稱（Asymmetric）與非線性動態**。 | 可在文獻回顧與研究限制中提及 AI 效果可能存在門檻或非線性特徵。 |
| **Rajan & Zingales (1998) 交互作用實證架構** | • [CEPR 全球 56 經濟體短期影響 (2026)](../sources/src-eu-oecd-productivity-and-growth.md) | 透過「產業層級 AI 暴露度 × 國家層級 AI 準備度」的交互作用項，識別國家條件如何調節產業成長。 | 直接支撐本研究 **Interaction Effects（異質性分析：AI × 人力資本 / 產業結構）** 的計量設定邏輯。 |
| **動態領先—落後模型<br/>(Dynamic Lead–Lag Model)** | • [丹麥徵才技能研究 (Research Policy, 2026)](../sources/src-denmark-skills-productivity-labor.md) | 觀察數位與 AI 技能投入在事前（Lead）與事後（Lag）各期對生產力與就業的動態軌跡，檢驗平行趨勢與遞延效果。 | 提醒本研究注意 AI 專利或研發投入對 GDP 成長可能存在 **1–3 年的遞延效果（Lagged effects）**。 |

---

## 三、 相關頁面（Related Pages）

- **全局與國別頁面**：[研究全局綜述](../overview.md) | [德國](../countries/germany.md) | [荷蘭](../countries/netherlands.md) | [丹麥](../countries/denmark.md) | [歐盟與 OECD](../countries/eu-oecd.md)
- **其他概念專題**：
  - [AI 對生產力與經濟成長之影響機制（H1）](ai-productivity-and-growth.md)
  - [跨國異質性與調節變數分析（H2 & H3）](country-heterogeneity-and-moderators.md)
  - [AI 與產業創新及國際貿易出口績效](ai-innovation-and-trade.md)
