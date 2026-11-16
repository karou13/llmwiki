window.WIKI_DATA = {
  overview: {
    englishTitle: "The Impact of Artificial Intelligence Adoption on Economic Growth: A Comparative Panel Analysis of Germany, the Netherlands, Denmark, and the OECD",
    chineseTitle: "人工智慧（AI）採納對經濟成長之影響：德國、荷蘭、丹麥與 OECD 之跨國追蹤比較分析",
    positioning: "本研究結合 Andrej Karpathy 的 LLM Wiki 持續累積型知識庫與量化實證研究架構，不再單純證明「AI 能不能促進經濟成長」，而是深入探討 AI 的經濟成長效果是否存在「國家異質性（Country Heterogeneity）」，並檢驗「人力資本（25–64 歲大專以上教育比例）」與「產業結構（製造業與知識密集服務業占總毛附加價值 GVA 比例）」如何調節 AI 採納對經濟成長的影響。",
    hypotheses: [
      {
        id: "H1",
        tag: "主效果假設",
        isCore: false,
        title: "AI 採納與經濟成長呈正向關係",
        en: "AI adoption is positively associated with economic growth.",
        points: [
          "<strong>自動化與效率提升</strong>：AI 取代或輔助例行性與認知任務，提升每工時勞動生產力與全要素生產力（TFP）。",
          "<strong>降低生產與營運成本</strong>：如德國 CIS 實證顯示 AI 支援之流程創新占企業年度總成本節省之 6%（Rammer et al., 2022）。",
          "<strong>促進知識創造與首創創新</strong>：AI 作為「發明的方法（IMI）」，與德國每年 160 億歐元全球首創產品創新相關，並在 OECD 35 國中顯著提升短期成長與長期人均所得（Duarte et al., 2026）。"
        ]
      },
      {
        id: "H2",
        tag: "本論文最核心假設",
        isCore: true,
        title: "AI 對經濟成長的影響存在跨國差異",
        en: "The impact of AI adoption on economic growth varies across countries.",
        points: [
          "<strong>各國 AI 發展與採用深度不同</strong>：Eurostat (2026) 顯示丹麥採用率高達 42%（居歐盟第 1）、荷蘭 33%、德國 26%（歐盟平均 20%）；ECB (2025) 顯示荷蘭顯著深度使用率達 23%，為德國與歐元區平均（7%）的 3 倍以上。",
          "<strong>各國生產與產業結構不同</strong>：丹麥與荷蘭由高暴露的 ICT（78%–79%）、金融與專業服務業領跑；德國則由大型製造業（31%）與科研出版（全球第 5）主導，但 SME 轉型較慢。",
          "<strong>各國吸收與運用 AI 能力不同</strong>：高工資與高準備度國家（IMF AIPI 丹麥全球第 2）享有顯著更大的 TFP 成長。"
        ]
      },
      {
        id: "H3",
        tag: "調節機制假設",
        isCore: false,
        title: "國家條件會調節 AI 採納對經濟成長的影響",
        en: "Country-specific characteristics moderate the relationship between AI adoption and economic growth.",
        points: [
          "<strong>人力資本調節（25–64 歲大專以上教育比例）</strong>：OECD (2026) 微觀實證顯示大專員工比例每增 1%，企業採用 AI 機率在丹麥增 0.53%、在荷蘭增 0.24%；若抽離人力資本與技術資本，德、荷、丹的 AI 生產力溢酬即不再顯著。",
          "<strong>產業結構調節（各產業占 GVA 比例）</strong>：BIS/CEPR (2025) 證實國家 AI 準備度每增 1 個標準差，高 AI 暴露產業比低暴露產業附加價值成長高出約 2 個百分點；製造業占比（Δinds）在 OECD 面板中亦顯著促進成長。",
          "<strong>法規與基礎設施調節</strong>：IMF (2025) 估計職業管制、EU AI Act 與資料隱私法合計可能削減歐洲逾 30% 的潛在 AI 生產力增益。"
        ]
      }
    ],
    comparisonTableHtml: `
      <table class="wiki-table">
        <thead>
          <tr>
            <th style="width:16%;">比較維度</th>
            <th style="width:21%;">🇩🇪 德國 (Germany)</th>
            <th style="width:21%;">🇳🇱 荷蘭 (Netherlands)</th>
            <th style="width:21%;">🇩🇰 丹麥 (Denmark)</th>
            <th style="width:21%;">🇪🇺 歐盟與 OECD 基準</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td><strong>國家戰略與核心治理</strong></td>
            <td>2018 國家 AI 戰略、2020 更新（50億歐元）、AI 行動計畫（16億歐元）、增設 150 名 AI 教授、JUPITER 超算與工業 AI 雲</td>
            <td>2019 SAPAI 戰略、NL AIC 四螺旋聯盟（近 500 組織）、AiNEd 旗艦計畫（NGF 2.76億／總計 4.47–21億歐元）、ICAI 31 座實驗室、ROBUST（8,700萬歐元）、20+ ELSA Labs</td>
            <td>2019 國家戰略、2024/12《AI 策略方針》（公部門數位工作小組、開放丹麥語文本語料庫）、《SME:Digital》補助、Flexicurity 彈性安全勞動制度</td>
            <td>2024 通過《歐盟 AI 法案》（AI Act）、2025 啟動「InvestAI」動員 2,000 億歐元（含 200 億歐元建置 10 萬顆晶片 AI 超級工廠）與開源 AI Hubs</td>
          </tr>
          <tr>
            <td><strong>企業 AI 採用率<br/>（多口徑對照）</strong></td>
            <td>• <strong>2019 CIS 積極使用</strong>：<code>5.8%</code><br/>• <strong>2024 ifo 調查</strong>：<code>27.0%</code>（2023 為 13.3%，另有 17.5% 規劃中）<br/>• <strong>2025 Eurostat</strong>：<code>26.0%</code><br/>• <strong>2025 ECB 廣義</strong>：<code>77%</code>（但顯著深度使用僅 <code>7%</code>、中度 40%）</td>
            <td>• <strong>2025 Eurostat</strong>：<code>33.0%</code><br/>• <strong>2025 ECB 廣義</strong>：<code>85%</code>（<strong>歐元區第 1</strong>！其中<strong>顯著深度使用高達 <code>23%</code></strong>、中度 38%）<br/>• <strong>RankmyAI</strong>：追蹤逾 <code>1,200</code> 家荷蘭本土 AI 工具與企業</td>
            <td>• <strong>2024 Eurostat / IMF</strong>：<code>25%–28%</code><br/>• <strong>2025 丹麥央行 / Eurostat</strong>：<strong><code>42.0%</code>（高居歐盟第 1！）</strong><br/>• <strong>2025 EIB 生成式 AI</strong>：<code>58%</code>（遠高於歐盟 37% 與美國 36%）</td>
            <td>• <strong>2025 Eurostat EU27 平均</strong>：<code>19.95%</code>（由 2021 年 7.65% 上升，羅馬尼亞僅 5.2%）<br/>• <strong>2025 ECB 歐元區平均</strong>：<code>71%</code> 接觸，但<strong>僅 <code>7%</code> 顯著深度使用</strong>（義大利僅 52%）</td>
          </tr>
          <tr>
            <td><strong>研發、創投與生產技術實力</strong></td>
            <td>• AI 科學出版物<strong>全球第 5</strong><br/>• 聯邦 AI 研發經費由 2017 年 1,470 萬增至 2024 年 <strong>4.833 億歐元</strong><br/>• 扣除工資與 AI 後之<strong>傳統純製造技術指數（ln T = 34.35）高居世界第 1</strong>（Lo & Lee, 2024）</td>
            <td>• 2023 廣義 AI 投資占 GDP 約 <strong>2.3%</strong>（歐盟最高）<br/>• 歐盟 DESI 排名第 3；Stanford 全球 AI 活力指數由全球第 19 躍升至<strong>第 12 名</strong>（TNO, 2023）</td>
            <td>• 2023 廣義 AI 投資占 <strong>GDP 的 2.0%</strong><br/>• <strong>IMF AI 準備度指數（AIPI = 0.78）高居全球第 2</strong>（先進國家第 1）<br/>• 但 Stanford AI 活力指數排第 13（Top500 超算僅 1 台，AI VC 占 GDP 僅 0.1%）</td>
            <td>• 美國 2021–2025 AI 創投達 5,800 億美元（占 GDP 0.4%），歐盟僅 760 億美元（占 GDP 0.1%）<br/>• 歐洲平均薪資比美國低約 50%，使基準採用率較美國低約 5 個百分點（IMF, 2025）</td>
          </tr>
          <tr>
            <td><strong>強勢產業與微觀生產力實證</strong></td>
            <td>• <strong>ifo 2024</strong>：製造業採用率 <code>31.0%</code> 最高、服務業 <code>27.7%</code>、貿易 <code>22.0%</code>、營建 <code>11.6%</code><br/>• <strong>CIS 創新</strong>：AI 關聯每年 <strong>160 億歐元</strong>全球首創產品（占 18%）與 <strong>6%</strong> 流程成本節省<br/>• <strong>NARDL (2026)</strong>：AI 投資正負衝擊皆促進人均 GDP（+0.034%），勞動力彈性高達 +3.99</td>
            <td>• <strong>Eurochambres 2025</strong>：ICT 採用率 <code>66%</code>、專業科學服務 <code>57%</code>、能源 <code>55%</code>、製造業 <code>31%</code><br/>• <strong>OECD 2026 微觀</strong>：未控制互補資產時 AI 生產力溢酬達 <strong>+16.5%</strong>；大專員工每增 1% 提升 AI 採用 <strong>+0.24%</strong></td>
            <td>• <strong>2025 產業採用</strong>：ICT 近 <code>79%</code>、金融 <code>60%</code>、商業服務 <code>50%</code>、製造業 <code>39%</code>、營建 <code>24%</code><br/>• <strong>職缺 NLP 實證</strong>：Data Science & AI 每增 10% 提升勞動生產力 <strong>+0.63%</strong>、TFP <strong>+1.01%</strong>，就業成長集中於技術服務業與哥本哈根</td>
            <td>• <strong>Eurochambres 32 國 FE</strong>：部門 AI 採用率每增 1%，勞動生產力提升 <strong>+0.29%–0.33%</strong>（影像辨識、流程自動化、行銷銷售最強）<br/>• <strong>OECD 35 國 Panel ARDL</strong>：AI 專利短期（+0.064）與長期（+0.072）及 AI 論文存量（+0.228）顯著促進人均 GDP</td>
          </tr>
          <tr>
            <td><strong>核心結構瓶頸與風險</strong></td>
            <td>• 高階 AI 專家缺口高達 <strong>84%</strong>（投入 60 億歐元再培訓）<br/>• 早期製造業 SME 大數據採用率僅 5.41%（Wagner, 2025）<br/>• 算力依賴美國/Nvidia、開放資料與醫療隱私受限、受管制職業占 21.5%</td>
            <td>• 「圩田共識決」使 AiNed 撥款耗時逾 3 年<br/>• NWO 審查標準使執行偏向基礎研究，AI 新創面臨官僚程序、大企業搶才與跨越 TRL 5「死亡之谷」挑戰</td>
            <td>• 逾 <strong>60%（64%）</strong> 勞工處於高 AI 暴露度：雖有 <strong>43%</strong> 屬高互補受惠（醫護、教育、工程），但有 <strong>20%–21%</strong> 面臨高替代風險（私部門達 25%，翻譯職已減 23%）</td>
            <td>• <strong>ECB 2025</strong>：缺乏 AI 技能（25%）為頭號阻礙，其次為隱私倫理（19%）與系統不相容（19%）<br/>• <strong>IMF 2025</strong>：三大法規（職業管制、AI Act、GDPR）合計可能削減歐洲 <strong>30% 以上</strong>潛在 TFP 增益</td>
          </tr>
        </tbody>
      </table>
    `,
    variablesHtml: `
      <div class="callout info">
        <div class="callout-title">💡 本研究量化模型與變數設計（對齊 <code>僅供參考/量化研究法論文架構.pdf</code> 與 <em>Technovation</em> 2023 / <em>Notas Económicas</em> 2026）</div>
        <p>本研究採用 <strong>Panel Data Regression（固定效果／Panel ARDL 基礎模型）＋ Interaction Effects（跨國與調節異質性分析）＋ Robustness Tests（發明人專利与 Scopus 論文穩健性檢驗）</strong>：</p>
      </div>
      <div class="table-responsive">
        <table class="wiki-table">
          <thead>
            <tr>
              <th>變數角色</th>
              <th>變數名稱與計算公式</th>
              <th>資料來源與時間跨度</th>
              <th>研究意義與文獻對齊</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>依變數 (DV)</strong></td>
              <td><strong>實質人均 GDP 成長率 (Real GDP per capita growth)</strong><br/><code>[(實質 GDP_t / 人口_t) / (實質 GDP_{t-1} / 人口_{t-1}) - 1] × 100%</code></td>
              <td>OECD / World Bank / PWT<br/>(1985–2024 / 1995–2024)</td>
              <td>衡量扣除人口與物價後的實質經濟表現，直接對應 Duarte et al. (2026, <em>Notas Económicas</em>) 之 <code>Δlog y</code> 與 Plikas et al. (2024) 之 <code>DGDP</code>。</td>
            </tr>
            <tr>
              <td><strong>核心自變數 1<br/>(主模型 IV)</strong></td>
              <td><strong>申請人 AI 專利數 (AI patents by applicants)</strong><br/>依專利申請人（企業／法人）所在國歸屬，採分數計數法（Fractional counting），符合 5 大核心 AI CPC 分類（機器學習／神經網路、NLP 與語音、電腦視覺、知識推理、AI 應用與智慧決策）</td>
              <td>OECD Science, Technology and Patents Database / OECD.AI<br/>(1985–2024 / 1995–2024)</td>
              <td>衡量企業與機構將 AI 商業化與技術創新的活動規模（對應 Parteka & Kordalska 2023 及 Duarte et al. 2026 之 <code>ai^APP</code>，短期係數 +0.0639***、長期 +0.0724***）。</td>
            </tr>
            <tr>
              <td><strong>核心自變數 2<br/>(穩健性檢驗 1)</strong></td>
              <td><strong>發明人 AI 專利數 (AI patents by inventors)</strong><br/>依專利實際發明人（研究人員）所在國歸屬，採分數計數法按國籍分攤</td>
              <td>OECD Science, Technology and Patents Database<br/>(1985–2024)</td>
              <td>補充「申請人指標」可能因跨國企業總部設籍或稅務安排而無法反映本土研發能力的限制（對應 Duarte et al. 2026 之 <code>ai^INV</code>，短期 +0.0547**、長期 +0.0584***）。</td>
            </tr>
            <tr>
              <td><strong>核心自變數 3<br/>(穩健性檢驗 2)</strong></td>
              <td><strong>AI 學術論文發表數 (AI scientific publications)</strong><br/>透過約 800 個 AI 關鍵字辨識同行評審學術論文，依作者所屬機構國家歸屬</td>
              <td>Elsevier / Scopus (OECD.AI)<br/>(2000–2025)</td>
              <td>衡量各國基礎 AI 科研與演算法知識產出，補充專利偏向硬體／應用且受營業秘密低估的限制。Parteka & Kordalska (2023) 與 Duarte et al. (2026) 證實 AI 論文存量對 OECD 生產力與長期人力資本交乘項（+0.108***）極度顯著！</td>
            </tr>
            <tr>
              <td><strong>調節變數 1<br/>(Moderator H3)</strong></td>
              <td><strong>人力資本：25–64 歲人口大專以上教育比例</strong><br/><code>[國家 c 在年份 t 具 ISCED 5–8 高等教育人數 / 25–64 歲總人口] × 100</code></td>
              <td>Eurostat / OECD Education at a Glance</td>
              <td>代表一國高技能勞動力基礎與吸收能力（Absorptive Capacity）。用於檢驗 <code>AI 創新 × 高等教育比例</code> 交互作用項（H3），對應 OECD (2026) LEED 實證與 IMF (2025) 高暴露高互補（HEHC）機制。</td>
            </tr>
            <tr>
              <td><strong>調節／控制變數 2<br/>(Moderator H3)</strong></td>
              <td><strong>產業結構：各產業占該國總毛附加價值 (GVA) 比例</strong><br/>（核心指標：製造業占 GVA 比例 vs. 資通訊／知識密集服務業占 GVA 比例）</td>
              <td>Eurostat National Accounts / OECD STAN</td>
              <td>作為控制變數並檢驗 <code>AI 創新 × 產業結構</code> 交互作用（H3），解析德國（製造業與首創產品導向）與荷蘭、丹麥（高暴露知識服務業導向）的成長路徑差異。</td>
            </tr>
          </tbody>
        </table>
      </div>
    `
  },
  literature: [
    {
      id: "G-1",
      countryGroup: "Germany",
      countryLabel: "🇩🇪 德國 (Germany)",
      docType: "Report",
      methodBadge: "OECD 量化支柱 + 質化審查",
      hypothesesTags: ["H2", "H3"],
      title: "OECD Artificial Intelligence Review of Germany 2024",
      chineseTitle: "OECD 德國人工智慧政策與生態系審查報告（2024）",
      authorsYear: "OECD (2024)",
      sourceJournal: "<strong>機構旗艦政策審查報告</strong>：Organisation for Economic Co-operation and Development (<strong>OECD</strong>), Paris, 2024（共 143 頁國家級審查報告）。",
      purpose: "對德國 AI 生態系進行全方位國際標竿比較（International benchmarking），評估德國自 2018 年《國家 AI 戰略》與 2020 年更新版（50 億歐元）以來的執行成效，旨在最大化德國 AI 政策機會並減緩風險。",
      questions: "<ul><li>德國聯邦部會（BMBF、BMWK、BMAS）與各邦政府如何協同治理國家 AI 戰略？</li><li>德國在 AI 研發經費、學術出版、國際人才吸引與高教課程供給上的表現為何？</li><li>阻礙德國將頂尖科研轉化為商業採納、醫療應用與數位／綠色雙軌轉型的核心瓶頸為何？</li></ul>",
      hypotheses: "<strong>政策評估核心預期（非計量論文）</strong>：德國具備世界頂尖的 AI 科研產出與工業基礎，但若未能解決「高階 AI 算力不足」、「公私部門與醫療工業資料封閉」及「中小企業技能與應用認知缺口」，其龐大研發投入將難以全面轉化為商業擴散與總體成長。",
      data: "OECD.AI 政策觀測站量化數據：德國聯邦政府 AI 研發經費（2017–2024）、全球 AI 論文發表統計、2022 年跨城市 AI 工程師技能遷移統計、2023 年 IT 職缺 AI 技能占比，以及 2020 量化／2022 質化實地訪談資料。",
      model: "<strong>OECD 國家 AI 生態系標竿評估架構</strong>：(1) 2020 年量化評估（四大支柱：人才 Minds、研究轉移與應用、監管框架、社會與工作世界）；(2) 2022–2024 年質化評估（針對商業應用、公部門、醫療與環境永續進行深度訪談、案頭研究與實地參訪）。",
      findings: "<ul><li><strong>研發經費暴增 32 倍</strong>：聯邦 AI 研發經費（百萬歐元）由 2017 年 <code>14.7</code>、2018 年 <code>20.5</code>、2019 年 <code>41.9</code>、2020 年 <code>85.7</code>、2021 年 <code>120.2</code>、2022 年 <code>280.4</code>，躍升至 2023 年 <code>427.2</code> 與 2024 年 <strong><code>483.3</code> 百萬歐元</strong>；2020 戰略更新投入約 <strong>50 億歐元</strong>，並推出 <strong>16 億歐元 AI 行動計畫</strong>。</li><li><strong>科研與人才聚落</strong>：AI 出版物排名<strong>全球第 5</strong>（Hessian.AI、Max Planck、Fraunhofer、Siemens，主要與美英合作）；2022 年吸引國際 AI 工程師聚集於<strong>柏林（47,200 人）、慕尼黑（40,300 人）、斯圖加特（31,000 人）</strong>；透過移民法增設 <strong>150 名 AI 教授職位</strong>。</li><li><strong>五大瓶頸與主權算力建設</strong>：面臨企業調適慢、技能短缺、法規不確定、開放資料封閉（Gaia-X 連結弱）及高階算力依賴美國／Nvidia 壟斷；正透過 <strong>JUPITER</strong>（Exascale 超算）、<strong>HammerHAI</strong>（HLRS+NVIDIA GB200）、Hanau/Offenbach 80 億歐元基建，以及<strong>德國電信與 NVIDIA 工業 AI 雲（2026 年部署 10,000 顆 GPU）</strong>強化技術主權。</li></ul>",
      limitations: "屬國家政策與創新系統綜合審查報告，未建立計量經濟迴歸模型估計研發經費對 GDP 之因果彈性；2023–2024 經費為預算估計值，新興超算基礎設施之長期商業效益尚待時間發酵。",
      implications: "直接支撐本研究 <strong>H2（跨國異質性）</strong>與 <strong>H3（調節機制）</strong>：解釋為何德國在本研究自變數「AI 論文（全球第 5）」與「AI 專利」表現極強，卻因資料互通限制、算力缺口與 SME 技能瓶頸而呈現獨特的轉型摩擦。",
      url: "https://www.oecd.org/en/publications/oecd-artificial-intelligence-review-of-germany_609808d6-en.html",
      rawFile: "文獻蒐集總覽.pdf (pp. 1, 5-6)"
    },
    {
      id: "G-2",
      countryGroup: "Germany",
      countryLabel: "🇩🇪 德國 (Germany)",
      docType: "Report",
      methodBadge: "歐盟政策執行追蹤",
      hypothesesTags: ["H2", "H3"],
      title: "Progress in Implementing the EU Coordinated Plan on AI (vol.1): Germany (2025)",
      chineseTitle: "歐盟人工智慧協調計畫執行進度報告（第一卷：德國，2025）",
      authorsYear: "European Commission (2025)",
      sourceJournal: "<strong>歐盟官方政策進度報告</strong>：European Commission (歐盟執委會), 2025, Volume 1: Germany。",
      purpose: "追蹤並盤點德國在落實《歐盟人工智慧協調計畫》（EU Coordinated Plan on AI）上的最新政策執行進度，聚焦於數位基礎設施建設與國家級支援倡議。",
      questions: "<ul><li>德國在資料管理（Data management）、數位主權（Digital sovereignty）與互通性（Interoperability）上推動了哪些具體倡議？</li><li>德國提供哪些關鍵支援機制（Support advancements）以加速 AI 技術推進？</li></ul>",
      hypotheses: "<strong>政策評估預期（非計量論文）</strong>：透過歐盟與成員國協調投資數位基礎設施與共通資料空間，能降低跨國資料與算力碎片化，提升歐洲整體 AI 準備度。",
      data: "德國聯邦政府各部會提報之全數數位基礎設施倡議（Data available on every initiative）與關鍵支援倡議（Key initiatives）追蹤數據庫。",
      model: "歐盟成員國政策落實度盤點與制度進度追蹤分析（Policy implementation tracking）。",
      findings: "確認德國在資料管理、數位主權與互通性上的各項具體國家倡議皆已建立追蹤數據，並對接歐盟共同資料空間與高效能運算網路。",
      limitations: "為政策措施盤點清單（Policy inventory），僅記錄政府倡議進度，未包含對企業生產力或總體 GDP 之量化計量評估。",
      implications: "作為論文前言與德國制度背景（對應 <strong>H3 國家數位基礎設施準備度</strong>）之官方政策文獻依據。",
      url: "https://digital-strategy.ec.europa.eu/en/policies/plan-ai",
      rawFile: "文獻蒐集總覽.pdf (pp. 1, 7)"
    },
    {
      id: "G-3",
      countryGroup: "Germany",
      countryLabel: "🇩🇪 德國 & 🇪🇺 歐盟",
      docType: "Report",
      methodBadge: "跨產業與總體政策批判分析",
      hypothesesTags: ["H1", "H2", "H3"],
      title: "Artificial Intelligence in the European Economy: A Critical Analysis (2025)",
      chineseTitle: "歐洲經濟中的人工智慧：批判性分析（2025，含德國與歐盟專節）",
      authorsYear: "European Economy Critical Analysis (2025)",
      sourceJournal: "<strong>政策與經濟綜合分析報告</strong>：<em>Artificial Intelligence in the European Economy: A Critical Analysis</em> (2025)，同時涵蓋德國國家專節與歐盟全局分析。",
      purpose: "全面檢視德國與歐盟的國家 AI 戰略、市場成長規模、各產業採用率差異、勞動市場技能缺口，並評估《歐盟 AI 法案》（AI Act）與 2025 年「InvestAI」倡議對縮小美歐差距的作用。",
      questions: "<ul><li>AI 對德國重點產業生產力、市場成長率與 2025 年 GDP 貢獻規模為何？</li><li>德國各產業（製造、車電、製藥、IT、零售、營建）的企業 AI 採用率與規劃採用率為何？</li><li>德國與歐盟面臨多嚴重的 AI 專家人才缺口？歐盟如何透過 InvestAI 與開源 AI Hubs 降低對美國科技巨頭依賴？</li></ul>",
      hypotheses: "<strong>核心分析論點</strong>：德國與歐盟雖在工業製造應用與法規治理領先，但受制於美歐私人投資差距、高達 84% 的 AI 專家缺口及 SME／農村擴散遲緩，必須仰賴大規模公共投資（InvestAI 2,000 億歐元）與員工再培訓（德國 60 億歐元）才能維持全球競爭力。",
      data: "德國與歐盟 AI 市場規模預測、企業採用率調查、職業暴露度統計、美歐投資比較數據，以及歐盟智慧專業化戰略（S3）與結構及投資基金（ESIF）政策資料。",
      model: "跨產業採用率比較分析、職業暴露度分級（高暴露 vs. 中度暴露）與美歐政策批判比較架構。",
      findings: "<ul><li><strong>德國市場成長與 GDP 貢獻</strong>：AI 驅動製造、物流、醫療、金融生產力及自駕車、智慧製造與供應鏈最佳化；德國 AI 市場<strong>每年成長 <code>15%</code></strong>，預計 2025 年對 GDP 貢獻達 <strong><code>4,880 億歐元</code>（EUR 488 billion）</strong>。</li><li><strong>德國企業採用率</strong>：<strong><code>27%</code> 企業已採用 AI，<code>17.5%</code> 計畫採用</strong>（集中於汽車、電子、製藥、紡織）；廣告與 IT 服務領先，製造業、零售業（<strong><code>22%</code></strong>）與能源業強勁，營建業僅 <strong><code>11.6%</code></strong>，SME 與農村採用緩慢。</li><li><strong>德國人才缺口與暴露度</strong>：缺乏高階 AI 專家，<strong>人才缺口高達 <code>84%</code></strong>；職業中 <strong><code>7%</code> 具高暴露度、<code>38%</code> 具中度暴露度</strong>；德國投入 <strong><code>60 億歐元</code></strong> 於員工再培訓與 AI 教育。</li><li><strong>歐盟全局政策（EU AI Act & InvestAI）</strong>：2024 通過 AI Act（含 RCT 安全工具）；2025 啟動 <strong><code>2,000 億歐元</code> InvestAI 倡議</strong>（含 <strong><code>200 億歐元</code></strong> 建置配備 <strong><code>10 萬顆</code>高階晶片之 AI 超級工廠 Gigafactories</strong>）及科研／生技／工業自動化<strong>開源 AI Hubs</strong>。</li></ul>",
      limitations: "4,880 億歐元 GDP 貢獻屬市場潛力推估，未控制總體內生性；且未提供計量經濟迴歸模型。",
      implications: "直接提供德國 <strong>84% AI 專家缺口</strong> 與 <strong>60 億歐元再培訓投資</strong> 之關鍵數據，完美支撐本研究將「高等教育人力資本比例」與「產業結構」列為 <strong>H3 調節變數</strong>。",
      url: "https://digital-strategy.ec.europa.eu/en/policies/european-approach-artificial-intelligence",
      rawFile: "文獻蒐集總覽.pdf (pp. 1, 7, 10)"
    },
    {
      id: "G-4",
      countryGroup: "Germany",
      countryLabel: "🇪🇺 歐盟 & 🇩🇪 德國",
      docType: "Report",
      methodBadge: "歐盟官方分層抽樣統計",
      hypothesesTags: ["H2"],
      title: "Eurostat (2026) The use of artificial intelligence technologies in the European Union: key results – 2026 edition",
      chineseTitle: "歐盟人工智慧技術使用統計：關鍵結果（2026 年版）",
      authorsYear: "Eurostat (2026)",
      sourceJournal: "<strong>歐盟官方統計報告</strong>：Publications Office of the European Union, Luxembourg, 2026 edition。",
      purpose: "提供歐盟 27 個成員國（EU27）在企業層級（10 人以上非金融企業）採用 7 大類 AI 技術與 8 大業務用途之最新、標準化官方統計基準。",
      questions: "<ul><li>2021–2025/2026 年間，歐盟各國企業使用至少一種 AI 技術（<code>E_AI_TANY</code>）的比例為何？</li><li>德國、荷蘭、丹麥與歐盟平均在跨規模與跨產業採用率上的最新差距為何？</li></ul>",
      hypotheses: "<strong>官方統計架構預期</strong>：企業 AI 採用率受企業規模（固定成本規模經濟）、產業知識密集度與國家數位準備度驅動，呈現顯著的北歐／西歐領先、南歐／東歐落後分群。",
      data: "歐盟各國統計局執行之《企業 ICT 使用調查》，涵蓋歐盟 27 國逾十萬家 10 人以上非金融企業代表性樣本（2021, 2023, 2024, 2025 調查波段）。",
      model: "官方分層抽樣母體加權描述性統計，定義 7 項核心 AI 技術（文字探勘、語音辨識、自然語言生成、影像辨識、機器學習、流程自動化、自主機器人）。",
      findings: "<ul><li><strong>EU27 平均採用率演進</strong>：由 2021 年 <code>7.65%</code>、2023 年 <code>8.0%</code>、2024 年 <code>13.5%</code>，大幅躍升至 2025/2026 年版的 <strong><code>19.95%</code>（約 20%）</strong>。</li><li><strong>本研究目標三國最新官方排序</strong>：<strong>🇩🇰 丹麥高達 <code>42.0%</code>（居歐盟第 1）</strong> ＞ <strong>🇳🇱 荷蘭 <code>33.0%</code></strong> ＞ <strong>🇩🇪 德國 <code>26.0%</code></strong> ＞ <strong>🇪🇺 歐盟平均 <code>19.95%</code></strong>（羅馬尼亞最低僅 <code>5.2%</code>）。</li></ul>",
      limitations: "僅涵蓋 10 人以上且排除金融業之企業；二元採用定義較嚴格，不含員工個人非正式試用免費聊天機器人，故數值低於 ECB SAFE（2025）涵蓋極少／試點使用之廣義口徑（71%）。",
      implications: "確立本研究 **H2（跨國異質性）** 最權威的歐盟官方採用率基準排序：<strong>丹麥（42%）＞ 荷蘭（33%）＞ 德國（26%）＞ 歐盟平均（20%）</strong>。",
      url: "https://ec.europa.eu/eurostat/statistics-explained/index.php?title=Use_of_artificial_intelligence_in_enterprises",
      rawFile: "文獻蒐集總覽.pdf (p. 1) & Eurochambres (2026)"
    },
    {
      id: "G-5",
      countryGroup: "Germany",
      countryLabel: "🇩🇪 德國 (Germany)",
      docType: "Paper",
      methodBadge: "LPM + Probit (Branch/Size FE)",
      hypothesesTags: ["H1", "H2", "H3"],
      title: "AI adoption among German firms",
      chineseTitle: "德國企業的人工智慧採用現況、生產力預期與管理者偏好實證",
      authorsYear: "Thomas Licht & Klaus Wohlrabe (2026)",
      sourceJournal: "<strong>知名經濟學期刊論文</strong>：<em>Applied Economics Letters</em> (Taylor & Francis, ISSN 1350-4851), 2026 年 5 月發表，共 6 頁（前身為 CESifo Working Paper No. 11459）。DOI: <code>10.1080/13504851.2026.2669986</code>。",
      purpose: "利用德國具代表性的企業層級微觀調查（<em>ifo Business Survey</em>），追蹤 2023–2024 年德國跨產業與跨規模之 AI 擴散動態，量化企業對未來五年自身與總體經濟的生產力成長預期，並首創檢驗高階管理者的「風險容忍度（Risk tolerance）」與「耐心（Patience）」對企業導入 AI 決策的影響。",
      questions: "<ul><li>2023 年 6 月至 2024 年 6 月間，德國整體及四大部門（製造、服務、貿易、營建）與不同規模企業的 AI 採用率有何變化？</li><li>德國企業預期未來五年 AI 能為「自身公司」與「整體經濟」帶來多少累積生產力提升？</li><li>高階管理者的「風險容忍度」與「耐心程度」是否顯著提高企業採用 AI 的機率？</li></ul>",
      hypotheses: "<strong>三大實證預期（Implicit Hypotheses）</strong>：<br/>1. 大型企業與製造業、服務業之 AI 採用率顯著高於受困於技能缺口與資料限制的中小企業（SMEs）及營建業；<br/>2. 已採用 AI 的企業對未來生產力成長的預期顯著高於未採用者；<br/>3. 由於 AI 具高前期沉沒成本與長期回報不確定性，風險容忍度較高、較具耐心的管理者領導之企業，顯著更可能採用 AI。",
      data: "德國慕尼黑 ifo 經濟研究院《ifo 商業調查》（逾 90% 填答者為 CEO／企業主），結合 <strong>2023 年 6 月（N = 6,332）</strong>與 <strong>2024 年 6 月（N = 6,095）</strong>兩波調查，並配對 Falk et al. (2023) 模組測得之管理者風險容忍度（N=5,952，0–10 分）與耐心程度（N=5,764，0–10 分），混合面板迴歸樣本達 N = 7,863–9,556。",
      model: "主模型採用<strong>線性機率模型（Linear Probability Model, LPM）</strong>，控制細分產業固定效果（Branch FE）與企業規模固定效果（Size FE）並使用穩健標準誤；穩健性檢驗採用 <strong>Probit 模型</strong>並報告平均邊際效果（AME，與 LPM 結果差異 ≤ 0.2 個百分點）。",
      findings: "<ul><li><strong>德國採用率一年翻倍（Table 1）</strong>：全體企業 AI 使用率由 2023 年 <code>13.3%</code> 翻倍至 2024 年 <strong><code>27.0%</code></strong>；規劃採用由 <code>9.2%</code> 升至 <strong><code>17.5%</code></strong>；討論中為 <code>34.3%</code>；認為無關由 <code>40.8%</code> 驟降至 <code>21.2%</code>。</li><li><strong>產業與規模異質性（2024）</strong>：<strong>製造業達 <code>31.0%</code> 居冠</strong>（由 17.3% 躍升，規劃中 20.1%）、<strong>服務業 <code>27.7%</code></strong>、<strong>貿易業 <code>22.0%</code></strong>、<strong>營建業最低僅 <code>11.6%</code></strong>（41.8% 認為無關）。<strong>大型企業採用率達 <code>34.3%</code></strong>，領先 <strong>SMEs 的 <code>21.6%</code></strong>。</li><li><strong>五年預期生產力成長（Table 2）</strong>：70% 企業預期提升自身生產力、83.6% 預期提升總體經濟生產力；全體加權平均預期未來五年<strong>自身企業生產力提升 <code>8.1%</code>（年化 1.6%）</strong>、<strong>總體經濟提升 <code>12.0%</code>（年化 2.3%）</strong>；已採用者預期自身提升達 <strong><code>15.9%</code></strong>（未採用者僅 6.8%）。</li><li><strong>管理者特質顯著推動採用（Table 3）</strong>：2024 橫斷面同時納入兩者時（N=3,341），管理者<strong>風險容忍度每增 1 分，採用 AI 機率顯著增加 <code>1.9 個百分點</code>（0.019<sup>***</sup>）</strong>；<strong>耐心每增 1 分，採用機率顯著增加 <code>1.6–1.8 個百分點</code>（0.016<sup>***</sup> / 0.018<sup>***</sup>）</strong>。</li></ul>",
      limitations: "1. 問卷未向受訪者提供嚴格的 AI 技術定義，依賴企業主觀自評；<br/>2. 橫斷面二元迴歸（R<sup>2</sup> = 0.092–0.133）反映條件相關而非嚴格因果關係，可能受企業數位成熟度或企業文化等未觀測特徵影響。",
      implications: "提供德國最新跨產業採用率（製造業 31%、服務業 27.7%、總體 27%）與 SME 落差（21.6% vs. 大型 34.3%）之權威數據，支撐本研究 <strong>H2</strong> 與 <strong>H3（製造業占比與技能調節）</strong>。",
      url: "https://doi.org/10.1080/13504851.2026.2669986",
      rawFile: "AI adoption among German firms.pdf"
    },
    {
      id: "G-6",
      countryGroup: "Germany",
      countryLabel: "🇩🇪 德國 (Germany)",
      docType: "Paper",
      methodBadge: "NARDL 非線性共整合 + BDS",
      hypothesesTags: ["H1", "H3"],
      title: "Nonlinear Dynamics of AI Investment and Economic Growth in Germany: Evidence from a NARDL Approach",
      chineseTitle: "德國人工智慧投資與經濟成長之非線性動態：來自 NARDL 方法的證據",
      authorsYear: "Athari, Sassine, Agyemang, Kirikkaleli, & Saliba (2026)",
      sourceJournal: "<strong>國際經濟學期刊論文</strong>：<em>Economies</em> (MDPI), Volume 14, Issue 1, Article 31, 2026 年 1 月發表（共 28 頁）。DOI: <code>10.3390/economies14010031</code>。",
      purpose: "在德國面臨人口高齡化、勞動參與率達極限（80.4%）與成長停滯的挑戰下，採用非線性自迴歸分配落差模型（NARDL），實證檢驗 2012Q1–2022Q4 期間德國 AI 投資、勞動力參與與固定資本形成毛額（GFCF）的正負向衝擊對德國人均實質 GDP 的非對稱影響。",
      questions: "<ul><li>在其他條件不變下，德國 AI 投資每上升 1% 與下降 1%，對德國人均實質 GDP 成長率的長期貢獻分別為何？</li><li>勞動力（Labor force）擴張與萎縮如何與德國經濟成長互動？</li><li>傳統固定資本形成毛額（GFCF）對德國經濟成長是否仍具顯著推升作用？</li></ul>",
      hypotheses: "<strong>論文第 2.5 節明列 6 項假設</strong>：<br/>• <strong>H1a / H1b</strong>：GFCF 正向衝擊促進德國經濟成長（H1a），負向衝擊降低成長（H1b）。<br/>• <strong>H2a / H2b</strong>：勞動力參與正向衝擊促進經濟成長（H2a），負向衝擊降低成長（H2b）。<br/>• <strong>H3a / H3b</strong>：AI 投資正向衝擊促進德國經濟成長（H3a），負向衝擊降低經濟成長（H3b）。",
      data: "德國時間序列季資料（Quarterly data），<strong>2012Q1–2022Q4（共 44 季）</strong>，取自 OECD AI Policy Observatory 與 World Bank（全數取自然對數）：依變數 <code>LGDP</code> 為實質人均 GDP 對數（2015 固定美元）；核心自變數 <code>LAI</code> 為 OECD 德國 AI 投資金額對數（涵蓋技能、R&D、資料設備、其他 IP 四類）；控制變數為勞動力人數對數 <code>LLF</code> 與固定資本形成對數 <code>LGFCF</code>。",
      model: "1. <strong>BDS 非線性檢定</strong>與<strong>含結構斷點之 ADF 單根檢定</strong>（確認 `LAI` 斷點在 2021Q4，變數為 I(0) 與 I(1) 混合）；<br/>2. <strong>Shin et al. (2014) NARDL 邊界共整合模型</strong>：將自變數拆解為正向累積部分和（X<sub>t</sub><sup>+</sup>）與負向累積部分和（X<sub>t</sub><sup>-</sup>），搭配 CUSUM / CUSUMSQ 穩定性檢定。",
      findings: "<ul><li><strong>強烈長期非對稱共整合</strong>：NARDL Bounds Test F = <strong>28.454</strong>（K=6），確認存在極強長期均衡關係。</li><li><strong>勞動力為最大成長驅動力（支持 H2a & H2b）</strong>：勞動力正向衝擊（<code>LLF_POS</code>）係數高達 <strong><code>+3.9872***</code></strong>（p=0.0003），負向衝擊（<code>LLF_NEG</code>）為 <strong><code>-3.8897*</code></strong>（p=0.0948）。</li><li><strong>AI 投資之非對稱雙向正向效應（支持 H3a，反轉 H3b）</strong>：正向衝擊（<code>LAI_POS</code>）係數為 <strong><code>+0.0342***</code></strong>（p=0.0001），證實 AI 投資每增 1% 穩定推升人均 GDP 成長 <code>0.034%</code>；驚人的是負向衝擊（<code>LAI_NEG</code>）係數亦為正（<strong><code>+0.0356***</code></strong>，p=0.0006）！作者解釋這反映「市場紀律與資源重配置」——當德國企業縮減浮誇投機的 AI 實驗支出，將資源轉向既有系統的「員工訓練與微調（train-and-tune）」並減少短期調整成本時，反而釋放實質產出。</li><li><strong>傳統實體資本報酬遞減（不支持 H1a）</strong>：<code>LGFCF_POS</code>（0.0891, p=0.4573）<strong>統計不顯著</strong>，證明德國已無法單靠堆疊傳統廠房機器促進成長。</li></ul>",
      limitations: "1. 傳統國民帳戶低估企業內部無形 AI 資產（演算法、組織資本），使 AI 係數可能向下偏誤；<br/>2. 總體勞動力人數掩蓋了高技能與低技能勞工的異質性；<br/>3. 模型未納入總體 R&D 支出與數位基礎設施品質。",
      implications: "直接支持本研究 <strong>H1（德國 AI 對實質人均 GDP 具正向影響）</strong>與 <strong>H3（必須搭配員工技能訓練與人力資本互補，而非盲目擴張硬體資本）</strong>。",
      url: "https://doi.org/10.3390/economies14010031",
      rawFile: "economies-14-00031.pdf"
    }
  ]
};

window.WIKI_DATA.literature.push(
  {
    id: "G-7",
    countryGroup: "Germany",
    countryLabel: "🇪🇺 歐洲 30 國 (含德/荷/丹)",
    docType: "Paper",
    methodBadge: "PMG-ARDL & PMG-NARDL + Granger",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Effect of artificial intelligence on economic growth in European countries: a symmetric and asymmetric cointegration based on linear and non-linear ARDL approach",
    chineseTitle: "人工智慧對歐洲國家經濟成長之影響：基於線性與非線性 ARDL 方法之對稱與非對稱共整合分析",
    authorsYear: "Maha Kalai, Hamdi Becha, & Kamel Helali (2024)",
    sourceJournal: "<strong>經濟結構專業期刊論文</strong>：<em>Journal of Economic Structures</em> (SpringerOpen), Volume 13, Article 22, 2024 年 12 月發表（共 37 頁）。DOI: <code>10.1186/s40008-024-00345-y</code>。",
    purpose: "針對涵蓋德國、荷蘭、丹麥在內的 30 個歐洲國家（2000–2021 年），同時運用線性對稱 PMG-ARDL 與非線性非對稱 PMG-NARDL 模型，以及 Dumitrescu & Hurlin (2012) 面板因果檢定，全面評估以「OECD AI 專利數」衡量的 AI 技術創新對歐洲短期與長期經濟成長的對稱與非對稱影響。",
    questions: "<ul><li>在 30 個歐洲國家中，AI 專利創新與實質 GDP 成長率之間是否存在穩定的長期共整合均衡關係？</li><li>AI 對歐洲短期與長期經濟成長的影響是對稱還是非對稱的？正向衝擊（AI<sup>+</sup>）與負向衝擊（AI<sup>-</sup>）的彈性大小為何？</li><li>AI 專利、勞動參與率、固定資本形成、FDI、R&D 與經濟成長之間的 Granger 因果方向為何？</li></ul>",
    hypotheses: "<strong>論文第 2 節明列兩大核心假設</strong>：<br/>• <strong>H01（對稱性假設）</strong>：人工智慧透過自動化、資源優化與創新，對歐洲經濟成長產生顯著正向且對稱的影響（<em>AI affects European economic growth symmetrically</em>）。<br/>• <strong>H02（非對稱性假設）</strong>：由於技術鴻溝、基礎設施落差、低技能勞工替代摩擦與轉型成本，人工智慧對歐洲經濟成長具有顯著的非對稱影響（<em>AI affects European economic growth asymmetrically</em>）。",
    data: "涵蓋 <strong>30 個歐洲國家（含德國、荷蘭、丹麥等）</strong>，期間 <strong>2000–2021 年</strong>（T=22，共 <strong>N = 660 筆面板觀測值</strong>），取自 WDI 與 OECD 專利資料庫：依變數 <code>GDPG</code> 為實質 GDP 年增率（平均 2.355%）；核心自變數 <code>AI</code> 為 <strong>OECD 統計之 AI 相關技術專利數</strong>（平均 13.164）；控制變數為勞動參與率 <code>Activity</code>（%）、固定資本形成 <code>GFCF</code>（% of GDP）、通膨率 <code>Inflation</code>（%）、外人直接投資 <code>FDI</code>（% of GDP）與研發支出 <code>R&D</code>（% of GDP）。",
    model: "1. 執行 7 項跨截面相依檢定、第二代面板單根檢定（CADF、CIPS、Karavias-Tzavalis 含斷點檢定，確認 `AI` 斷點在 2015 年）與 Kao / Pedroni / Westerlund 共整合檢定；<br/>2. 估計線性對稱 <strong>PMG-ARDL (1,0,0,0,0,0,0)</strong> 與非線性非對稱 <strong>PMG-NARDL (1,0,0,0,0,0,0,0)</strong> 模型，以 Wald Test 檢驗對稱性，並執行 <strong>Dumitrescu & Hurlin (2012) 面板 Granger 因果檢定</strong>。",
    findings: "<ul><li><strong>對稱 PMG-ARDL 結果（支持 H01，Tables 7 & 8）</strong>：誤差修正項 <code>ECT(-1)</code> = <strong><code>-0.182***</code></strong>（年收斂速度 18.2%）；<strong>短期 AI 效果</strong> <code>AI(-1)</code> = <strong><code>+0.200**</code></strong>（p=0.020），<strong>長期 AI 效果</strong> <code>AI</code> = <strong><code>+0.217***</code></strong>（p=0.000，AI 專利每增 1%，長期推動經濟成長提升 <code>0.217%</code>）；長期 <code>R&D</code>（+0.325***）、<code>FDI</code>（+0.367*）、<code>GFCF</code>（+0.122***）、<code>Activity</code>（+0.110***）均顯著為正。</li><li><strong>非對稱 PMG-NARDL 結果（支持 H02，Tables 9 & 10）</strong>：Wald 檢定在短期（χ² = 7.14, p = 0.008）與長期（χ² = 5.33, p = 0.021）均拒絕線性對稱；短期正向衝擊 <code>AI(-1)+</code> 顯著提升成長（<strong><code>+0.133**</code></strong>），負向衝擊不顯著（-0.185）；長期正向衝擊 <code>AI+</code> 為 <strong><code>+0.026***</code></strong>，負向衝擊 <code>AI-</code> 為 <strong><code>-0.029**</code></strong>（負向衝擊的傷害幅度 0.029% 略大於正向效益 0.026%），長期 <code>R&D</code> 高達 <strong><code>+0.482***</code></strong>。</li><li><strong>面板 Granger 因果關係（Table 11）</strong>：整體 <code>AI → GDPG</code> 為<strong>單向因果</strong>（p=0.000）；而正向突破 <strong><code>AI+ ↔ GDPG</code> 具雙向良性因果循環</strong>（p=0.000 與 p=0.042）。</li></ul>",
    limitations: "1. 以「AI 專利數」代理 AI 發展無法捕捉營業秘密與未申請專利的企業採用，且具時間落差；<br/>2. 僅使用國家總體資料，<strong>未拆解跨產業部門（如製造業 vs. 服務業）的異質性</strong>；<br/>3. 尚未採用面板門檻自迴歸模型（PTAR / PSTAR）識別 AI 發展的臨界門檻值。",
    implications: "同樣使用 <strong>OECD AI 專利數</strong>與涵蓋德、荷、丹之歐洲面板，直接驗證 <strong>H1</strong>；且作者於研究限制中明確呼籲「未來應納入產業結構異質性與區域人力資本差異」，完美成為本研究提出 <strong>H2 與 H3</strong> 的核心文獻依據！",
    url: "https://doi.org/10.1186/s40008-024-00345-y",
    rawFile: "s40008-024-00345-y.pdf"
  },
  {
    id: "G-8",
    countryGroup: "Germany",
    countryLabel: "🇩🇪 德國 (Germany)",
    docType: "Paper",
    methodBadge: "Weighted Probit & Tobit (CIS)",
    hypothesesTags: ["H1", "H3"],
    title: "Artificial intelligence and industrial innovation: Evidence from German firm-level data",
    chineseTitle: "人工智慧與工業創新：來自德國企業層級資料的證據",
    authorsYear: "Christian Rammer, Gastón P. Fernández, & Dirk Czarnitzki (2022)",
    sourceJournal: "<strong>頂尖創新期刊論文</strong>：<em>Research Policy</em> (Elsevier), Volume 51, Issue 7, Article 104555, 2022（初版為 <em>ZEW Discussion Paper No. 21-036</em>）。DOI: <code>10.1016/j.respol.2022.104555</code>。",
    purpose: "探討人工智慧（AI）作為一種新型態的「發明方法之發明（IMI）」與通用目的技術（GPT），在德國企業中的採用現況，並實證評估不同 AI 方法與應用領域對德國企業「產品創新（特別是全球首創創新 World-first innovations）」及「流程創新（特別是降低成本之創新）」的貢獻。",
    questions: "<ul><li>德國企業在營運、產品或服務中積極採用 AI 技術的比例為何？</li><li>使用 AI 是否顯著提高企業推出產品創新（含全球首創產品）與流程創新的機率，以及對應之創新銷售額與成本節省比例？</li><li>企業使用 AI 方法與應用的「廣度」及累積使用經驗的「深度」是否帶來更高的創新回報？</li></ul>",
    hypotheses: "<strong>核心假設</strong>：<br/>• <strong>H1（主效果）</strong>：積極使用 AI 的企業，其產生產品創新（特別是全球首創產品創新）與流程創新（特別是降本創新）的機率與產出強度顯著高於未使用者。<br/>• <strong>H2（廣度與深度效果）</strong>：結合多種 AI 技術方法、跨越多個應用領域，以及累積較長 AI 使用經驗與內部開發能力的企業，能獲得顯著更高的創新成果。",
    data: "德國《2018 年社區創新調查》（German <strong>Community Innovation Survey, CIS 2018</strong>），由萊布尼茨歐洲經濟研究中心（<strong>ZEW</strong>）透過「曼海姆創新調查（<strong>MIP</strong>）」於 2019 年蒐集；進入計量模型之有效樣本數為 <strong>N = 6,283 至  6,738 家德國企業</strong>（代表 5 人以上製造業與知識服務業母體）。控制企業規模、R&D 強度、大專以上高學歷人力資本比例、出口導向、年齡與細分產業固定效果。",
    model: "針對二元創新結果（是否推出產品／全球首創／流程／降本創新）採用<strong>加權 Probit 模型（報告平均邊際效果 AME）</strong>；針對在 0 處截斷的創新銷售占比與成本節省比例採用<strong>加權 Tobit 模型</strong>，並利用母體抽樣權重推估德國全體企業部門總體貢獻。",
    findings: "<ul><li><strong>早期積極採用率（2019 基準）</strong>：2019 年德國有 <strong><code>5.8%</code></strong> 的企業在日常營運、產品或服務中積極使用 AI。</li><li><strong>對全球首創產品創新的巨大貢獻</strong>：使用 AI 與德國企業部門每年約 <strong><code>160 億歐元</code>（€16 billion）</strong> 的「全球首創產品創新」銷售額相關，占德國全球首創創新總銷售額的 <strong><code>18%</code></strong>！</li><li><strong>對流程創新與成本節省的貢獻</strong>：AI 支援的流程創新約占德國企業部門年度總成本節省額的 <strong><code>6%</code></strong>。</li><li><strong>廣度與深度效應</strong>：使用更多種類 AI 方法與應用的企業，以及累積較多年 AI 使用經驗的企業，創新成果顯著較高。</li></ul>",
    limitations: "1. <strong>因果詮釋警語</strong>：橫斷面資料雖控制 R&D 與高學歷人力資本，但結果反映的是顯著關聯性，<strong>不應過度解讀為 AI「單獨（solely）」造成了上述全部 160 億歐元銷售額或 6% 成本節省</strong>；<br/>2. 調查時點為 2018–2019 年，僅捕捉早期採用者與傳統機器學習／工業 AI。",
    implications: "為本研究 <strong>H1 的理論依據</strong>（「AI 降低部分生產成本」與「AI 促進知識創造及創新」）提供了最直接、最權威的德國微觀實證數據（6% 成本節省與 160 億歐元全球首創創新）！",
    url: "https://www.sciencedirect.com/science/article/pii/S0048733322000798",
    rawFile: "文獻蒐集總覽.pdf (pp. 7-8) & ZEW DP 21-036"
  },
  {
    id: "NL-1",
    countryGroup: "Netherlands",
    countryLabel: "🇳🇱 荷蘭 (Netherlands)",
    docType: "Report",
    methodBadge: "六維度制度比較 + 質性主題分析",
    hypothesesTags: ["H2", "H3"],
    title: "Comparison of AI Strategies in Finland, Sweden and The Netherlands – Case the Netherlands 2023",
    chineseTitle: "芬蘭、瑞典與荷蘭人工智慧國家戰略比較——荷蘭個案研究（2023）",
    authorsYear: "Claudio Lazo, Gabriela Bodea, Frans van Ette, Heikki Ailisto, Susanne Stenberg, & Håkan Burden (2023)",
    sourceJournal: "<strong>國家研究機構政策研究報告</strong>：Netherlands Organisation for Applied Scientific Research (<strong>TNO</strong>) 聯合芬蘭 <strong>VTT</strong> 與瑞典 <strong>RISE</strong> 出版，報告編號：<strong>TNO 2023 R11576</strong>（2023 年 9 月，共 50 頁）。",
    purpose: "系統性梳理 2011–2023 年荷蘭國家級 AI 策略與創新生態系的演進歷程，深入剖析 2019 年《人工智慧策略行動計畫》（SAPAI）、公私協力樞紐「荷蘭 AI 聯盟（NL AIC）」與國家成長基金資助之「AiNed 策略投資計畫」，並與芬蘭及瑞典進行跨國制度比較，提煉六大策略維度上的政策教訓。",
    questions: "<ul><li>荷蘭在 2011–2023 年間發起了哪些類型的國家級 AI 策略、相關政策與研發創新（R&D&I）計畫？</li><li>荷蘭的這些政策倡議與芬蘭、瑞典的國家 AI 策略有哪些共通點與結構性差異？</li><li>這些 AI 策略與計畫的預期影響與實際影響為何？對荷蘭未來 AI 政策有哪些經驗教訓？</li></ul>",
    hypotheses: "<strong>三大政策制度比較命題</strong>：<br/>1. 各國政治治理文化不同（荷蘭「圩田共識決 Poldering」vs. 芬蘭由上而下敏捷決策 vs. 瑞典私部門基金會主導），不存在單一最佳 AI 策略模型；<br/>2. 荷蘭「四螺旋」廣泛包容雖能凝聚龐大生態系，但伴隨決策與撥款延遲、組織複雜化與碎片化代價；<br/>3. 將旨在促進「產業應用」的 AiNed 交由傳統科研機構（NWO）執行，會因學術審查標準而導致向「基礎科學研究」偏移，難以跨越 TRL 5「死亡之谷」。",
    data: "1. 荷蘭 2011–2023 年共 40 餘項數位化、創新、科研與 AI 政策檔案（Appendix C）；<br/>2. 對 <strong>9 位核心決策者</strong>（NL AIC、AiNed、MinEZK、ELSA Labs、AI 新創 Syntho.ai 等）之半結構化深度訪談與驗證工作坊；<br/>3. 2017–2022 年荷蘭、瑞典、芬蘭在歐盟 <strong>DESI</strong>、Oxford <strong>政府 AI 準備度指數</strong>與 Stanford <strong>全球 AI 活力指數</strong>之追蹤數據。",
    model: "採用 Braun & Clarke (2006) <strong>質性主題分析法（Thematic Analysis）</strong> 進行句子層級編碼，並建立<strong>「國家 AI 策略選擇六大維度分析框架（Six Dimensions Framework）」</strong>（政府角色、工具再利用、包容度 vs. 速度、合作 vs. 競爭、基礎 vs. 應用研究、國際合作定位）。",
    findings: "<ul><li><strong>荷蘭三大支柱與資金規模</strong>：(1) <strong>2019 SAPAI 國家戰略</strong>與 2023 國會 WRR 報告辯論；(2) <strong>荷蘭 AI 聯盟（NL AIC）</strong>匯聚 <strong><code>475–500 個成員組織</code></strong>（設垂直、水平工作組與區域 AI Hubs，獲 MinEZK 資助 <strong><code>2,350 萬歐元</code></strong>）；(3) <strong>AiNEd 旗艦計畫</strong>：依托 200 億歐元國家成長基金（NGF），原規劃總生態系 <strong><code>21 億歐元</code></strong>，2021 獲批第一期 7 年 <strong><code>2.76 億歐元</code>（含夥伴出資達 <code>4.47 億歐元</code>）</strong>，設 4 大子計畫（新創價值鏈、<strong>20+ 座 ELSA 倫理法律社會實驗室</strong>、實務 AI 教育與員工再培訓認證、跨網路協作）；(4) <strong>ICAI（31 座公私合作實驗室）與 ROBUST 長期計畫（<code>8,700 萬歐元</code>，培育 170 名博士）</strong>及 TNO Appl.AI（6,500 萬歐元）。</li><li><strong>國際排名躍升（Table B.1）</strong>：荷蘭在歐盟 DESI 高居第 3；在 Stanford <strong>全球 AI 活力指數由 2017 年全球第 19 大幅躍升至 2021 年全球第 12 名</strong>（超越瑞典第 14 與芬蘭第 20）。</li><li><strong>制度反思</strong>：圩田共識模式使 AiNed 從倡議到撥款耗時逾 <strong>36 個月</strong>；且交由 NWO 執行導致偏向基礎研究，新創企業面臨官僚程序與大企業搶才挑戰。</li></ul>",
    limitations: "AiNed 於 2022 年才正式撥款啟動，長期總體經濟效益尚未完全顯現且缺乏統一量化 KPI；質性評估主要基於 9 位核心參與者訪談。",
    implications: "完美補齊本研究荷蘭個案之制度與資金細節，解釋荷蘭為何能透過 <strong>NL AIC + ICAI + ELSA Labs</strong> 在歐元區創下 <strong>85% 最高總採用率與 23% 最高顯著深度使用率</strong>（支撐 <strong>H2 與 H3</strong>）。",
    url: "https://publications.tno.nl/publication/34641463/Mv2aXQ/lazo-2023-R11576.pdf",
    rawFile: "TNO_2023_Comparison_of_AI_Strategies_Netherlands.pdf"
  },
  {
    id: "NL-2",
    countryGroup: "Netherlands",
    countryLabel: "🇳🇱 荷蘭 (Netherlands)",
    docType: "Report",
    methodBadge: "大數據流量與創投綜合排名",
    hypothesesTags: ["H2"],
    title: "AI Report Netherlands 2025 (RankmyAI)",
    chineseTitle: "2025 年荷蘭人工智慧產業與工具生態系報告（RankmyAI）",
    authorsYear: "RankmyAI (2025)",
    sourceJournal: "<strong>荷蘭 AI 產業資料庫年度報告</strong>：<em>AI Report Netherlands 2025</em>, RankmyAI Database Platform (<code>https://www.rankmyai.com/</code>)。",
    purpose: "透過追蹤全球與荷蘭本土 AI 工具及企業的網站流量、使用者評價與融資數據，全面呈現荷蘭 AI 產業部門（Dutch AI sector）的多元性、地理分布、領域焦點與成長動能。",
    questions: "<ul><li>荷蘭本土共有多少家活躍的 AI 工具與企業？其在應用領域、創立年份、員工規模與地理區位上的分布為何？</li><li>綜合網站流量、使用者評價與投資數據，荷蘭前 250 強、前 25 強及 2024 年流量成長最快的 AI 工具與企業為何？</li></ul>",
    hypotheses: "<strong>產業分析預期</strong>：荷蘭憑藉高度數位化基礎設施與活躍的產學育成生態，在商業軟體、工作流自動化與垂直領域 AI 工具上具備高密度的本土供給能力。",
    data: "<strong>RankmyAI 全球資料庫</strong>：追蹤全球逾 <strong><code>25,000 個</code></strong> AI 工具與企業，其中識別出 <strong><code>1,200 家</code>位於荷蘭本土</strong>；涵蓋各領域分布、創立年份、員工規模、地理區位與網站流量發展數據。",
    model: "結合三大客觀指標之綜合排名演算法：(1) <strong>網站流量（Website traffic）</strong>；(2) <strong>使用者評價（User reviews）</strong>；(3) <strong>投資數據（Investment data）</strong>，評選出荷蘭 Top 250、Top 25 與 2024 最快成長 AI 工具。",
    findings: "荷蘭擁有高達 <strong><code>1,200 家</code></strong> 本土 AI 工具與企業，展現成熟大廠與新興高成長新創並存的蓬勃生態，為荷蘭企業的高 AI 採用率提供了充沛的本土商業軟體支援。",
    limitations: "依賴公開網站流量、線上評論與公開融資數據，對未公開流量之企業內部工業 AI 系統涵蓋有限；屬產業描述統計，未進行總體 GDP 迴歸。",
    implications: "補充荷蘭在「AI 商業供給端」的優勢證據，與德國偏向重工業與基礎學術論文形成對比，豐富本研究 <strong>H2（德、荷、丹跨國異質性）</strong> 的論述。",
    url: "https://www.rankmyai.com/",
    rawFile: "文獻蒐集總覽.pdf (pp. 2, 8)"
  },
  {
    id: "DK-1",
    countryGroup: "Denmark",
    countryLabel: "🇩🇰 丹麥 (Denmark)",
    docType: "Paper",
    methodBadge: "BERT NLP + Dynamic Lead-Lag + DiD",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Digital Skill Adoption and Employment Dynamics: Evidence From Matched Vacancy-Employer–Employee Data",
    chineseTitle: "數位技能採納與就業動態：來自丹麥職缺—雇主—受僱者配對資料的證據",
    authorsYear: "Mathias Fjællegaard Jensen & Cédric Schneider (2026)",
    sourceJournal: "<strong>頂尖創新期刊論文</strong>：<em>Research Policy</em> (Elsevier), Volume 55, Issue 5, Article 105476, 2026 年 3 月發表（共 27 頁）。DOI: <code>10.1016/j.respol.2026.105476</code>。",
    purpose: "透過自然語言處理（NLP / BERT 模型）從丹麥 2008–2019 年約 45 萬筆線上徵才廣告中提取企業對「數位技能」與「資料科學與 AI（Data Science & AI）」的需求指標，並配對丹麥全國行政登記之雇主—受僱者微觀資料，實證檢驗數位與 AI 技能投入對企業勞動生產力、TFP、就業動態與勞動力重組的影響，以及跨職業、跨產業與跨區域的異質性。",
    questions: "<ul><li>職缺中的「數位技能」與「資料科學與 AI」技能占比能否有效反映企業實際 IT 支出，並與企業勞動生產力及全要素生產力（TFP）呈顯著正相關？</li><li>企業提高數位與 AI 技能投入後，對企業總就業、銷售額、附加價值、勞動份額與員工流動率（Churning）有何動態影響？</li><li>一般數位技能與高階「資料科學與 AI」對不同職業、不同產業與丹麥五大區域的就業影響是否存在顯著異質性？</li></ul>",
    hypotheses: "<strong>三大理論預期（基於 SBTC、RBTC 與任務基礎模型）</strong>：<br/>1. 職缺數位與 AI 技能占比能準確代理企業數位化投入，並與勞動生產力及 TFP 呈顯著正相關，且高階 Data Science & AI 的生產力溢酬高於一般數位技能；<br/>2. 若生產力提升與產出規模擴張（Scale effect）大於替代效果，企業總就業與銷售額將呈現淨成長，但伴隨短期員工流動率（Churning）上升的內部技能重組；<br/>3. 高階「資料科學與 AI」需要高學歷／博士級人力資本配合，其就業創造高度集中於高技能認知職業、專業技術服務業與首都圈。",
    data: "整合 HBS Economics 線上職缺全文與丹麥行政登記資料（FIRM 財務、BFL 薪資工時、BEF 人口學歷、VITU 企業 IT 支出調查），涵蓋 <strong>2008–2019 年</strong>丹麥員工數 ≥ 20 人（排除純 IT 產業）之 <strong>超過 7,500 家企業（生產力模型 N=7,779 家企業、75,799 筆觀測值；動態模型 N=5,349–5,946 家企業）</strong>、共 <strong><code>449,389 筆</code>（約 45 萬筆）職缺全文</strong>。以微調之丹麥語／英語 BERT 模型將技能分為 8 大數位群集（含 <code>Data science & AI</code>）。",
    model: "1. <strong>擴充 Cobb-Douglas 勞動生產力與 Wooldridge (2009) GMM TFP 模型</strong>；<br/>2. <strong>動態分散領先—落後模型（Distributed Lead-Lag Model，前後各 4 年 k = -4 … 4）</strong>：E<sub>it</sub> = Σ(k=-4..4) δ<sub>k</sub> D<sub>i,t-k</sub> + μ<sub>i</sub> + η<sub>it</sub> + λ<sub>srt</sub> + ρ<sub>it</sub> + ε<sub>it</sub>（控制企業 FE μ<sub>i</sub>、年份×3位碼產業×區域交乘 FE λ<sub>srt</sub> 與基期 IT 員工趨勢項 η<sub>it</sub>）；<br/>3. <strong>堆疊雙重差分法（Stacked DiD）</strong> 穩健性檢驗。",
    findings: "<ul><li><strong>博士級人力資本互補（Table 3）</strong>：企業內<strong>博士（PhD）員工比例與「資料科學與 AI」職缺占比呈極高度正相關（0.413<sup>***</sup>）</strong>，但與一般數位技能無關。</li><li><strong>對勞動生產力與 TFP 的強勁拉升（Tables 4 & 5）</strong>：<strong>Data Science & AI 技能職缺占比每增加 <code>10 個百分點</code>，企業勞動生產力顯著提升 <code>0.63%</code>（γ = 0.063<sup>***</sup>，為其他數位技能 <code>0.24%</code> 的 2.6 倍），全要素生產力（TFP）更顯著提升 <code>1.01%</code>（γ = 0.101<sup>***</sup>，為其他數位技能 <code>0.35%</code> 的近 3 倍）！</strong></li><li><strong>就業、營收擴張與內部重組（Figs. 3 & 4）</strong>：事前趨勢平坦；投資後顯著帶動企業<strong>總就業成長</strong>（第 1 年峰值 +0.6%）、<strong>銷售額與附加價值成長</strong>（+0.3%–0.6%），女性、移民與大學畢業生皆受惠；但在 k=1 伴隨短暫顯著的<strong>勞動流動率（Churning）上升</strong>。</li><li><strong>職業、產業與區域高度異質性（Figs. 5–10）</strong>：Data Science & AI 的正向就業成長僅集中於<strong>經理人、專業人員、技術員與事務員</strong>（峰值 <code>0.8%–1.4%</code>）；產業上，一般數位技能廣泛受惠，但 <strong>Data Science & AI 的顯著正向就業關聯主要集中於「專業技術與支援服務業」</strong>；區域上高度集中於<strong>哥本哈根首都大區（峰值 <code>1.2%</code>）</strong>。</li></ul>",
    limitations: "1. 僅捕捉透過外部職缺招募數位人才的企業，未涵蓋內部在職訓練或直接購買現成軟體（估計值屬保守下界）；<br/>2. 雖控制高維度固定效果並通過平行趨勢檢驗，仍屬條件關聯而非絕對因果；<br/>3. 樣本期間為 2008–2019 年，反映判別式／預測式 AI，早於生成式 AI 普及。",
    implications: "本篇 <em>Research Policy</em> 頂刊論文直接支撐本研究 <strong>H1（AI 提升勞動生產力 +0.63% 與 TFP +1.01%）</strong>與 <strong>H3（高階 AI 高度依賴高學歷／博士人力資本，且受產業結構與區域條件強烈調節）</strong>！",
    url: "https://doi.org/10.1016/j.respol.2026.105476",
    rawFile: "1-s2.0-S0048733326000673-main.pdf"
  },
  {
    id: "DK-2",
    countryGroup: "Denmark",
    countryLabel: "🇩🇰 丹麥 (Denmark)",
    docType: "Report",
    methodBadge: "任務基礎總體 TFP 情境模擬",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Artificial Intelligence Can Boost Productivity in the Danish Economy",
    chineseTitle: "人工智慧能提升丹麥經濟之生產力（丹麥國家銀行總體分析報告，2026）",
    authorsYear: "Kim Abildgren & Rasmus Mose Jensen (Danmarks Nationalbank, 2026)",
    sourceJournal: "<strong>中央銀行權威總體經濟分析報告</strong>：Danmarks Nationalbank (丹麥國家銀行), <em>ANALYSIS | Economic activity</em>, No. 6, 2026 年 4 月 8 日出版（共 25 頁）。",
    purpose: "全面盤點丹麥企業最新 AI 採用率、國家準備度與 AI 投資占 GDP 比重，彙整國際微觀與總體生產力文獻，並運用「任務基礎模型（Task-based Approach）」針對丹麥職業結構進行本土情境模擬，量化推估未來 10 年 AI 對丹麥年均全要素生產力（TFP）成長率的提升幅度。",
    questions: "<ul><li>2025 年丹麥企業 AI 採用率、生成式 AI 使用率及 2023 年 AI 投資占 GDP 比重在歐盟處於何種地位？</li><li>國際總體研究對 AI 提升年均 TFP 成長率的預測區間為何？</li><li>考量丹麥特有的工作任務 AI 暴露度（39%–61%）與勞動成本份額（51%）後，未來 10 年 AI 預計每年可提升丹麥 TFP 成長多少個百分點？</li></ul>",
    hypotheses: "<strong>核心總體分析預期</strong>：<br/>1. 丹麥憑藉高數位化公部門、高學歷勞動力與 Flexicurity 制度，企業採用率領先歐盟，且跨國採用率與人均 GDP 呈顯著正相關；<br/>2. AI 對年均 TFP 成長的貢獻取決於「暴露任務比例 × 獲利替換比例 × 平均勞動成本節省率 × 勞動報酬份額 ÷ 10 年」。",
    data: "整合丹麥統計局（2022–2025 企業調查與 2024 國民帳戶勞動份額 51%）、Eurostat (2026)、EIB (2025)、IMF AIPI (174 國)、Stanford AI 活力指數 (36 國)、Fonteneau et al. (2025, OECD) AI 投資占 GDP 估計，以及 Felten et al. (2021, 2023) 對接丹麥 ISCO-08 之職業暴露度資料。",
    model: "<strong>Acemoglu (2024) / Bergeaud (2024) 任務基礎總體生產力情境模擬模型（Box 2）</strong>：<br/><code>ΔTFP_annual = [Exposure Share (39% or 61%) × Profitable Share (23%–80%) × Cost Savings (27%–40%) × Labor Share (51%)] / 10</code>。",
    findings: "<ul><li><strong>2025 年丹麥企業採用率躍升至 <code>42%</code>，居歐盟第一（P.5–7, Charts 1–3）</strong>：由 2023 年 <code>15%</code>、2024 年 <code>28%</code> 急升至 2025 年 <strong><code>42%</code>（歐盟之冠）</strong>；且高達 <strong><code>58%</code></strong> 丹麥企業使用生成式 AI（高於歐盟 37% 與美國 36%）。產業別以<strong>資通訊業近 <code>79%</code></strong> 最高、金融 <code>60%</code>、商業服務 <code>50%</code>、製造業 <code>39%</code>、貿易運輸 <code>38%</code>、<strong>營建業最低僅 <code>24%</code></strong>；250+ 人大企業達 <code>75%</code>，10–49 人小企業為 <code>37%</code>。</li><li><strong>AI 投資占 GDP <code>2%</code>，準備度全球第 2 但算力／創投落後（P.9–10, Charts 4–7）</strong>：2023 年丹麥廣義 AI 投資約占 <strong>GDP 的 <code>2.0%</code></strong>（歐盟僅次於荷蘭的 2.3%，高於歐盟平均 1.5% 與德國 1.4%）。丹麥在 IMF AIPI 排<strong>全球第 2</strong>，但在 Stanford AI 活力指數（論文、專利、超算）僅排<strong>第 13 名</strong>（Top500 超算僅 1 台 vs. 瑞典 8 台；AI VC 占 GDP 僅 0.1% vs. 瑞典與美國 0.4%）。</li><li><strong>國際文獻與丹麥本土 TFP 成長預測（P.11–18, Table 1 & Chart 8）</strong>：國際研究估計 AI 每年提升 TFP 成長約 <strong><code>0.1–1.2 個百分點</code></strong>；丹麥本土模擬估計未來 10 年 AI <strong>每年可提升丹麥 TFP 成長約 <code>0.1 至 1.0 個百分點</code></strong>（Bergeaud 基準參數為 <code>+0.4 pp</code>；對照丹麥過去 5 年年均 TFP 成長僅 0.5%，提振顯著）。</li><li><strong>就業早期分化</strong>：2022–2024 年間丹麥「翻譯與語言工作」就業人數減少 <strong><code>23%</code></strong>，「軟體開發」就業成長 <strong><code>14%</code></strong>。</li></ul>",
    limitations: "1. 模擬結果高度依賴模型參數假設與時間點（可能存在短期 J 曲線效應），故丹麥央行尚未將其單獨納入最新三年基準預測；<br/>2. 未計入投資 AI 對非 AI 領域的資源排擠（機會成本），亦未捕捉加速科學發現的長期內生成長與非市場部門效益。",
    implications: "揭示丹麥「<strong>高準備度（全球第 2）與高商業採用率（42%），但非專利／超算大國（Stanford 第 13）</strong>」的獨特結構，與德國「科研專利極強、SME 採用較慢」形成絕佳對比，有力支撐本研究 <strong>H2 與 H3</strong>！",
    url: "https://www.nationalbanken.dk/en/news-and-knowledge/publications-and-speeches/analysis/2026/artificial-intelligence-can-boost-productivity-in-the-danish-economy",
    rawFile: "Danmarks_Nationalbank_2026_AI_Boost_Productivity.pdf"
  },
  {
    id: "DK-3",
    countryGroup: "Denmark",
    countryLabel: "🇩🇰 丹麥 (Denmark)",
    docType: "Paper",
    methodBadge: "AI 暴露度 × 互補性矩陣 (EU-LFS)",
    hypothesesTags: ["H2", "H3"],
    title: "The Impact of Artificial Intelligence on Denmark's Labor Market",
    chineseTitle: "人工智慧對丹麥勞動市場之影響：職業暴露度與互補性分析（IMF, 2025）",
    authorsYear: "Théodore Renault (IMF, 2025)",
    sourceJournal: "<strong>國際貨幣基金組織研究論文</strong>：International Monetary Fund (<strong>IMF</strong>), <em>Selected Issues Papers (SIP)</em>, Volume 2025: Issue 119, Article A001, 2025 年 8 月發表。DOI: <code>10.5089/9798229021647.018.A001</code>。",
    purpose: "將 2023 年歐盟勞動力調查（EU-LFS）之丹麥職業微觀資料結合「AI 暴露度（Exposure）」與「互補性（Complementarity）」指標，量化分析丹麥 119 種職業、19 個經濟活動類別中，各產業、公私部門及不同教育／性別／所得群體受到 AI 輔助受惠或工作替代風險的程度。",
    questions: "<ul><li>丹麥勞動市場整體的 AI 暴露度與互補性分布為何？有多少比例勞工面臨較高工作替代風險？</li><li>不同產業（ICT、專業科學服務、製造、運輸）與公私部門受到 AI 影響的程度有何差異？</li><li>哪些群體（高學歷 vs. 低學歷、女性 vs. 男性、本國人 vs. 移民）最能從 AI 獲益或面臨替代風險？</li></ul>",
    hypotheses: "<strong>核心理論預期</strong>：<br/>1. 丹麥因具備高教育勞動力與龐大的知識服務業及公共醫療教育部門（占總就業 1/3），整體 AI 暴露度顯著高於歐洲平均；<br/>2. 高暴露職業中，具備高社會互動與專業判斷（高互補性）者將受惠於生產力提升，而常規行政（低互補性）者則面臨替代風險。",
    data: "<strong>2023 年歐盟勞動力調查（EU Labour Force Survey, EU-LFS）</strong> 丹麥微觀個體資料，涵蓋 <strong>119 種職業（ISCO）</strong>、<strong>19 個經濟活動部門（NACE）</strong>、性別、年齡、教育程度（低／中／高等教育）、所得分位與移民身分；結合 2024 年丹麥企業採用統計與 IMF AIPI。",
    model: "<strong>暴露度—互補性三維分類矩陣模型（Exposure-Complementarity Matrix, Annex I）</strong>：結合 Felten et al. (2021) 職業暴露度與 Pizzinelli et al. (2023) 六維度互補性指標，以中位數為切點劃分為：(1) <strong>高暴露高互補（HEHC，受惠型）</strong>；(2) <strong>高暴露低互補（HELC，替代風險型）</strong>；(3) <strong>低暴露（LE，不受影響型）</strong>。",
    findings: "<ul><li><strong>2024 年企業採用率與產業差異</strong>：2024 年丹麥約 <strong><code>25%</code></strong> 企業使用至少一種 AI 技術；產業差異極大：<strong>資訊與通訊業 <code>70%</code></strong>、<strong>專業科學與技術活動 <code>45%</code></strong>、<strong>製造業 <code>22%</code></strong>、<strong>運輸業 <code>21%</code></strong>。</li><li><strong>勞工暴露度與替代風險</strong>：<strong>超過 <code>60%</code>（約 <code>64%</code>）</strong> 的丹麥勞工處於高 AI 暴露職業（比歐洲平均高出 9 個百分點）。其中<strong>三分之二（占總勞動力 <code>43%</code>）屬高暴露高互補（HEHC，如教師、醫護、工程師）</strong>，將從 AI 顯著受惠；<strong>三分之一（占總勞動力約 <code>20%–21%</code>）屬高暴露低互補（HELC，如商業與行政管理人員）</strong>，面臨較高工作替代風險；其餘 <code>36%</code> 為低暴露體力或個人照護職。</li><li><strong>公私部門與教育差異</strong>：私部門有 <code>25%</code> 面臨替代風險，公部門僅 <code>13%</code> 面臨風險且逾 <code>50%</code> 公部門員工（醫護與教育）屬高互補受惠；<strong>高等教育（大專以上）與高所得勞工是 AI 最大受惠群體（HEHC 最高）</strong>，但也有約 20% 高學歷行政白領處於 HELC。</li></ul>",
    limitations: "1. 「高暴露」與「高互補」係基於職業中位數切點之相對概念，非絕對失業預測；<br/>2. O*NET 職業特徵源自美國職場結構，且靜態矩陣未計入 AI 創造新職業的動態效果。",
    implications: "證明在丹麥，<strong>大專以上高等教育勞工正是處於「高暴露且高互補（HEHC）」的核心群體</strong>，直接為本研究 <strong>H3（25–64 歲大專以上教育比例強化 AI 經濟效益）</strong> 提供微觀機制！",
    url: "https://www.elibrary.imf.org/view/journals/018/2025/119/article-A001-en.xml",
    rawFile: "IMF_2025_Denmark_Labor_Market_FullText.txt"
  },
  {
    id: "EU-1",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 歐洲 32 國 (Eurochambres)",
    docType: "Paper",
    methodBadge: "高維度面板固定效果 (Fixed Effects)",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "The Effects of AI on Europe's Productivity",
    chineseTitle: "人工智慧對歐洲生產力之影響（歐洲商會首席經濟學家工作論文，2026）",
    authorsYear: "Colajanni, Knaack, Trautmann, Lits, & Dorka (Eurochambres, 2026)",
    sourceJournal: "<strong>歐洲商工總會首席經濟學家研究工作論文</strong>：*Eurochambres Chief Economists Working Paper #3*, 2026（共 42 頁）。",
    purpose: "使用 2021–2025 年歐洲 32 國 AI 採用資料與 Orbis 企業財務資料，透過高維度固定效果迴歸（Fixed Effects），分析不同國家、產業及企業規模的 AI 採用率差異，並實證檢驗部門 AI 採用率（及 8 種技術、8 種用途）與勞動生產力的關係。",
    questions: "<ul><li>2021–2025 年歐洲各國、不同規模與 31 個產業部門的 AI 採用率差異為何？</li><li>控制企業投資、財務槓桿與資產規模後，部門 AI 採用率是否與勞動生產力呈顯著正向關聯？</li><li>哪幾種特定 AI 技術與業務用途是推動勞動生產力的核心驅動力？客製化 AI 與標準化工具對營收預期影響有何不同？</li></ul>",
    hypotheses: "<strong>核心假設</strong>：<br/>1. AI 採用率在國家、產業（ICT／專業服務領先）與規模（大 > 中 > 小）間存在顯著異質性；<br/>2. AI 採用透過任務自動化與勞工增能，與企業勞動生產力呈顯著正向關聯；<br/>3. 視覺檢驗／流程自動化技術、行銷銷售用途，以及客製化整合 AI 的生產力與營收效果最強。",
    data: "結合 <strong>Eurostat ICT 企業調查（2021, 2023, 2024, 2025 年，32 國、31 個非金融部門）</strong> 與 <strong>Orbis 企業財報資料庫（2020–2024 年）</strong>，按「國家 × 部門 × 規模 × 年齡組 × 年份」聚合匹配（基準迴歸樣本 <strong>N = 11,692 至  11,787 個細格</strong>）；另含義大利 Unioncamere <strong>4,204 家企業</strong>調查。",
    model: "<strong>高維度面板固定效果迴歸（Fixed-Effects Regression）</strong>：<br/><code>ln(LP)_{c,s,z,a,t} = β · AI_{c,s,t} + γ X_{c,s,z,a,t-1} + μ_{ct} + δ_s + θ_z + φ_a + ε_{c,s,z,a,t}</code>（控制國家×年份 FE μ<sub>ct</sub>、產業部門 FE δ<sub>s</sub>、規模 FE θ<sub>z</sub>、年齡 FE φ<sub>a</sub> 及落後投資、槓桿、總資產對數）；義大利樣本採 <strong>Probit/Logit AME</strong> 模型。",
    findings: "<ul><li><strong>跨國與跨產業差異</strong>：EU27 平均採用率由 2021 年 <code>7.65%</code> 升至 2025 年 <strong><code>19.95%</code></strong>（<strong>丹麥 <code>42%</code>、荷蘭 <code>33%</code>、德國 <code>26%</code></strong>）；產業以 <strong>ICT（<code>60%</code>：丹麥 78%、德國 71%、荷蘭 66%）</strong> 與 <strong>專業科學服務（<code>46%</code>：丹麥 61%、荷蘭 57%、德國 54%）</strong> 最高，能源 <code>34%</code>、<strong>製造業 <code>23%</code>（丹麥 37%、荷蘭 31%、德國 29%）</strong>、營造僅 <code>11%</code>。</li><li><strong>對勞動生產力顯著正向關聯（Table 1）</strong>：未加控制變數時 <code>ai_adoption</code> 係數為 <strong><code>0.331**</code></strong>（p<0.05），加入落後控制變數之基準模型為 <strong><code>0.286**</code></strong>（p<0.05）——即<strong>部門 AI 採用率每提高 <code>1 個百分點</code>，勞動生產力顯著提升 <code>0.29%–0.33%</code></strong>！</li><li><strong>技術與用途拆解（Figs. 5–9）</strong>：8 種技術中僅 <strong>「AI 影像辨識（<code>TIR</code>）」</strong> 與 <strong>「AI 流程自動化（<code>TPA</code>）」</strong> 顯著為正（係數皆 >0.5）；8 種用途中<strong>唯有「行銷與銷售（<code>PMS</code>）」顯著為正（係數約 0.5）</strong>。</li><li><strong>客製化 AI 優勢</strong>：義大利調查顯示使用<strong>客製化／結合研發 AI</strong> 之企業，預期營收成長機率比僅用標準化工具者顯著高出 <strong><code>+5.1 個百分點</code></strong>（微小型企業高出 <code>+6.0 個百分點</code>）。</li></ul>",
    limitations: "1. Eurostat 僅提供國家×部門平均採用率，無法觀測 Orbis 個別企業是否使用 AI；<br/>2. 面板僅 3–4 年，反映橫斷面關聯而非嚴格因果；<br/>3. Orbis 偏向公司化中大企業且排除金融業。",
    implications: "直接支撐本研究 <strong>H1（AI 提升歐洲勞動生產力）</strong> 與 <strong>H2/H3（德、荷、丹在 ICT、專業服務與製造業的採用異質性）</strong>。",
    url: "https://www.eurochambres.eu/publication/the-effects-of-ai-on-europes-productivity-eurochambres-chief-economists-working-paper-3/",
    rawFile: "Eurochambres_2026_Effects_of_AI_on_Europes_Productivity.pdf"
  },
  {
    id: "EU-2",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 OECD 15 國 (含德/荷/丹)",
    docType: "Paper",
    methodBadge: "分散式微觀 LEED + LPM/OLS FE",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Digital Technology Diffusion in the Age of AI: Cross-country Evidence from Microdata",
    chineseTitle: "AI 時代的數位技術擴散：來自 15 個 OECD 國家微觀資料的跨國證據",
    authorsYear: "Flavio Calvino, Hélder Costa, & Daniel Haerle (OECD, 2026)",
    sourceJournal: "<strong>OECD 科學技術與產業工作論文</strong>：<em>OECD Science, Technology and Industry Working Papers</em>, No. 2026/01, OECD Publishing, Paris（共 89 頁）。DOI: <code>10.1787/ebc2debe-en</code>。",
    purpose: "運用 OECD 分散式微觀資料架構（Digital Diffuse），整合 15 個 OECD 國家（含德國、荷蘭、丹麥）之官方企業 ICT 調查、財報與勞雇連結資料（LEED），剖析五項先進數位技術（AI、大數據、IoT、機器人、3D 列印）之共生網路、人力資本決定因素與勞動生產力溢酬（七大典型事實）。",
    questions: "<ul><li>AI 等先進技術是否建立在雲端、ERP、CRM 與高速寬頻等基礎技術之上？</li><li>企業的人力資本（大專以上高等教育員工比例、ICT 專才、員工培訓）與既有技術資本如何影響採用 AI 的機率？</li><li>採用 AI 的企業生產力是否較高？當控制人力資本與既有技術資本後，AI 生產力溢酬是否依然存在？</li></ul>",
    hypotheses: "<strong>七大典型事實假設（H1–H7）</strong>：<br/>AI 建立在基礎賦能技術之上（H1）、具高度產業與大企業規模偏向（H2–H3）、受<strong>高等教育人力資本與技術資本</strong>強勁驅動（H4–H5）；且 AI 採用企業雖平均生產力較高（H6），但<strong>此生產力溢酬主要由高人力資本與既有技術資本互補所解釋（H7，生產力 J 曲線）</strong>。",
    data: "涵蓋 <strong>15 個 OECD 國家（2015–2023 年）</strong>，包含<strong>丹麥（N=15,804，IDA LEED + FIRE 財報）</strong>、<strong>荷蘭（N=30,295，CBS LEED + SFO 財報）</strong>、<strong>德國（N=6,159，ZEW MIP）</strong>等。核心變數含 LEED <strong>大專以上高等教育員工比例</strong>、技術職 <code>Techies</code> 比例、聘用 <code>ICT Spec.</code>、提供 <code>ICT Train.</code>、高速寬頻與數位技術強度 <code>Tech intensity</code>。",
    model: "1. <strong>技術共生網路特徵向量中心性分析</strong>；<br/>2. <strong>採納決定因素 LPM / Probit 模型</strong>（控制規模、年齡、2位碼產業 FE 與年份 FE）；<br/>3. <strong>基準與擴充勞動生產力 OLS 固定效果模型 & Wooldridge (2009) 生產函數</strong>。",
    findings: "<ul><li><strong>高等教育人力資本強勁驅動 AI 採用（Fact 5, Fig. 4.10）</strong>：企業內<strong>大專以上高等教育員工比例每增加 <code>1 個百分點</code>，採用 AI 的機率在丹麥顯著增加 <code>+0.53 個百分點</code>（對大數據更增加 <code>+1.2 個百分點</code>），在荷蘭顯著增加 <code>+0.24 個百分點</code></strong>（皆 p<0.01）。</li><li><strong>ICT 專才與培訓驅動採用（Fact 4, Table A C.6）</strong>：聘用 ICT 專才使採用 AI 機率在<strong>丹麥增加 <code>+13.3 個百分點</code>、德國增加 <code>+5.6 個百分點</code>、荷蘭增加 <code>+5.0 個百分點</code></strong>；員工培訓在<strong>荷蘭（<code>+5.8 個百分點</code>）與德國（<code>+3.3 個百分點</code>）</strong>亦顯著為正。</li><li><strong>生產力溢酬完全仰賴人力與技術資本互補（Facts 6 & 7, Tables A C.11 & A C.16）</strong>：未控制人力與技術資本時，AI 採用企業在<strong>荷蘭享有 <code>+16.5%</code>（0.1653<sup>***</sup>）、丹麥 <code>+11.5%</code>（0.1152<sup>***</sup>）、德國 <code>+7.9%</code>（0.0785<sup>**</sup>）</strong> 的顯著生產力溢酬；但<strong>一旦控制人力資本與技術資本後，荷蘭（0.0140）、丹麥（0.0239）、德國（0.0291）的單獨 AI 係數全部變為不顯著</strong>，而人力資本（德國 <code>ICT Spec.</code> +18.4%***、丹麥 +17.4%***、荷蘭 +13.9%***）與技術強度（荷蘭 +62.2%***、丹麥 +57.6%***）則極度顯著！</li></ul>",
    limitations: "1. <strong>關鍵警語</strong>：資料涵蓋至 2017–2023 年（多數 AI 調查為 2018–2022 年），衡量的是<strong>舊型／傳統機器學習 AI（Old AI），而非生成式 AI（GenAI）</strong>；<br/>2. 多數為重複橫斷面調查，反映條件相關而非嚴格因果。",
    implications: "為本研究 <strong>H3（25–64 歲大專以上高等教育比例調節 AI 與成長關係）</strong> 提供最直接的德、荷、丹微觀鐵證：沒有高學歷人力資本與技能培訓的互補，單靠 AI 無法自動產生生產力成長！",
    url: "https://dx.doi.org/10.1787/ebc2debe-en",
    rawFile: "OECD_2026_Digital_Technology_Diffusion_Microdata.pdf"
  }
);

window.WIKI_DATA.literature.push(
  {
    id: "EU-3",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 歐盟 27 國 (EU27)",
    docType: "Paper",
    methodBadge: "PCA + Country FE + Stepwise/RLS",
    hypothesesTags: ["H1", "H3"],
    title: "On the Relationship Between Artificial Intelligence (AI) and Economic Growth (GDP)—the Case of Europe",
    chineseTitle: "人工智慧與經濟成長（GDP）之關係——以歐洲（EU27）為例",
    authorsYear: "John Hlias Plikas, Panagiotis Trakadas, & Dimitris Kenourgios (2024)",
    sourceJournal: "<strong>國際學術會議論文集章節</strong>：<em>Frontiers of Artificial Intelligence, Ethics, and Multidisciplinary Applications (FAIEMA 2023)</em>, Springer Nature, pp. 327–342, 2024。DOI: <code>10.1007/978-981-99-9836-4_25</code>。",
    purpose: "以歐盟 27 國（EU27）為研究對象，探討 AI 技術發展與採用對 GDP 成長率的關係，並檢驗「數位普及（Digital Inclusion）」與「勞動生產力（含員工技能提升 Upskilling 與 ICT 招募）」兩大管道的影響。",
    questions: "<ul><li>1. AI 技術是否會影響歐盟國家的 GDP？影響程度為何？</li><li>2. 哪些科技與 AI 相關因素會影響歐盟 GDP？</li><li>3. AI 是否能透過提升勞動生產力，進一步促進 GDP 成長？</li><li>4. 員工技術培訓與技能提升（Upskilling）是否能提高勞動生產力，進而帶動經濟成長？</li></ul>",
    hypotheses: "<strong>論文明列五大研究假設（H1–H5）</strong>：<br/>• <strong>H1</strong>：AI 技術發展與採用對 GDP 成長具有正向影響。<br/>• <strong>H2</strong>：數位普及（Digital Inclusion）對勞動生產力具有正向影響。<br/>• <strong>H3</strong>：AI 技術採用與發展對勞動生產力具有正向影響。<br/>• <strong>H4</strong>：員工技術培訓與技能提升（Upskilling）對勞動生產力具有正向影響。<br/>• <strong>H5</strong>：勞動生產力提升對 GDP 成長具有正向影響。",
    data: "歐盟 27 國（EU27），<strong>2010–2020 年，共 N = 297 筆國家追蹤資料</strong>（來源：Eurostat、EC AI Watch、Thomson Reuters/DataStream、Kaggle、OECD）。依變數：GDP 成長率（<code>DGDP</code>）、勞動生產力成長率（<code>DLAB_PROD</code>）。自變數：通膨率、失業率、COVID-19、企業數、勞動生產力、數位普及、員工技術培訓、ICT 人員招募、AI 相對比較優勢（RCA）、AI 研究排名、AI 新創數、AI 知識交流程度。",
    model: "1. <strong>面板單根檢定（Panel Unit Root Tests）</strong>並取<strong>一階差分</strong>確保定態；<br/>2. <strong>主成分分析（PCA）</strong>整合 AI 研究排名、AI 新創企業與知識交流，建立 <code>AI_PCA</code> 綜合變數；<br/>3. 依 Hausman Test 選擇<strong>國家固定效果模型（Country Fixed Effects）</strong>；<br/>4. 以<strong>逐步迴歸（Stepwise Regression）</strong>與<strong>穩健最小平方法（RLS）</strong>進行穩健性檢驗。",
    findings: "<ul><li><strong>AI 與 GDP（支持 H1）</strong>：AI 技術發展對 GDP 成長具顯著正向影響；其中 AI 研究排名與 AI 知識交流程度影響較強，<code>AI_PCA</code> 綜合指標亦呈顯著正向效果。</li><li><strong>數位普及（支持 H2 但對 GDP 無直接影響）</strong>：數位普及對勞動生產力具顯著正向影響，但<strong>對 GDP 沒有顯著的直接影響</strong>。</li><li><strong>AI、技能提升與間接傳導（支持 H3, H4, H5）</strong>：AI 整合度、員工技術培訓與 ICT 人員招募均顯著提升勞動生產力，且 AI 可透過提升勞動生產力<strong>間接促進 GDP 成長</strong>。</li></ul>",
    limitations: "研究期間僅涵蓋 <strong>2010–2020 年</strong>；且<strong>作者明確指出：未來研究可進一步分析 AI 與 GDP 關係在不同 EU 國家及產業之間的異質性</strong>！",
    implications: "作者指出的研究限制（「未來應分析不同 EU 國家及產業之間的異質性」）直接成為我們這篇論文提出 <strong>H2（德、荷、丹跨國異質性）</strong>與 <strong>H3（人力資本與產業結構調節）</strong>的最佳切入點！",
    url: "https://link.springer.com/chapter/10.1007/978-981-99-9836-4_25",
    rawFile: "文獻蒐集總覽.pdf (pp. 3, 11-13)"
  },
  {
    id: "EU-4",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 OECD 35 國 (含德/荷/丹)",
    docType: "Paper",
    methodBadge: "Panel ARDL + Diff-GMM / Sys-GMM",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Economic Growth, AI Adoption and Human Capital Across the OECD: Evidence from a Panel ARDL Model",
    chineseTitle: "OECD 國家之經濟成長、AI 採納與人力資本：來自面板 ARDL 模型的證據",
    authorsYear: "Joshua Duarte, Carina Freitas, & Marta Simões (2026)",
    sourceJournal: "<strong>大學經濟學院雙盲同儕審查期刊論文</strong>：<em>Notas Económicas</em> (University of Coimbra, Portugal), Issue 61, July 2026, pp. 55–92（共 38 頁）。DOI: <code>10.14195/2183-203X_61_3</code>。",
    purpose: "針對 35 個 OECD 國家（1995–2017 年），採用動態面板自迴歸分配落差模型（Panel ARDL）搭配廣義動差法（Diff-GMM / Sys-GMM），同時估計 AI 採用（申請人專利、發明人專利、AI 科學出版物）對短期經濟成長率與長期人均實質 GDP 水準的影響，並納入 `AI × 人力資本` 交乘項與製造業占比檢驗調節機制。",
    questions: "<ul><li>控制實體資本、人力資本與一般整體創新後，AI 採用（3 項指標）對 OECD 短期人均 GDP 成長與長期人均所得是否有顯著正向貢獻？</li><li>加入額外控制變數（如製造業附加價值占 GDP 比重）或改用 AI 知識存量（Stocks）時結果是否穩健？</li><li>在 OECD 總體層級上，人力資本（<code>log h × log ai</code>）是否顯著調節 AI 的短期與長期成長效果？</li></ul>",
    hypotheses: "<strong>核心假設</strong>：<br/>• <strong>H1（短長期正向主效果）</strong>：AI 採用在短期推升人均 GDP 成長率（β<sub>3</sub> > 0），在長期提升均衡人均所得（α<sub>3</sub> > 0）。<br/>• <strong>H2（條件收斂）</strong>：誤差修正項顯著為負（γ < 0）。<br/>• <strong>H3a vs. H3b（人力資本調節雙向假設）</strong>：交乘項 >0 支持高技能互補假設（H3a）；交乘項 <0 支持低技能追趕／輔助學習假設（H3b）。",
    data: "涵蓋 <strong>35 個 OECD 國家（含德國、荷蘭、丹麥）</strong>，期間 <strong>1995–2017 年</strong>（Diff-GMM 有效觀測值 N = 680–700）。<strong>變數與本研究 100% 對齊</strong>：依變數為 PWT 10.01 實質人均 GDP 對數 log y<sub>i,t</sub> 與成長率 Δlog y<sub>i,t</sub>；自變數為每百萬就業人口之 (1) <strong>申請人 AI 專利 log ai<sup>APP</sup></strong>、(2) <strong>發明人 AI 專利 log ai<sup>INV</sup></strong>、(3) <strong>Scopus AI 科學出版物 log ai<sup>PUB</sup></strong>（流量與 PIM 存量）；控制實體資本 log k、PWT 人力資本 log h（因 I(2) 取差分）、一般整體創新 log inn、以及<strong>製造業附加價值占 GDP 比例（Δinds<sub>i,t</sub>）</strong>、貿易、法規、政府消費、FDI。",
    model: "執行 Pesaran (2007) CIPS 單根檢定與 Westerlund (2005) 共整合檢定後，估計 <strong>Panel ARDL 模型（Eq. 4 & Eq. 5 含交乘項）</strong>，並以 <strong>Arellano & Bond (1991) 一階差分 GMM（Diff-GMM，搭配 Roodman 2009 工具變數折疊法，通過 AR(2) 與 Hansen-J 檢定之首選模型）</strong> 處理內生性。",
    findings: "<ul><li><strong>AI 專利對短期成長與長期人均所得具顯著正向貢獻（Table 5, Diff-GMM）</strong>：申請人 AI 專利（ai<sup>APP</sup>）<strong>短期效果 <code>+0.0639***</code>、長期效果 <code>+0.0724***</code></strong>（誤差修正項 -0.663<sup>***</sup>）；發明人 AI 專利（ai<sup>INV</sup>）<strong>短期效果 <code>+0.0547**</code>、長期效果 <code>+0.0584***</code></strong>（且短期人力資本 +2.890<sup>*</sup> 顯著為正）。</li><li><strong>改用「AI 知識存量（Stocks）」後，AI 科學出版物轉為極度顯著（Table 15）</strong>：<strong>AI 科學出版物存量（ai<sup>PUB</sup> Stock）在短期（<code>+0.228***</code>）與長期（<code>+0.128***</code>）皆高度顯著為正</strong>，證明基礎科學知識需累積為存量才會強勁推升總體成長！</li><li><strong>製造業占比（Δinds）一致顯著為正（Tables 9, 11, 13）</strong>：製造業占 GDP 比例在三模型中皆顯著為正（<code>+0.0182*</code> 至 <code>+0.0291***</code>），並使 ai<sup>PUB</sup> 流量短期效果轉為顯著正向（<code>+0.0370*</code>）。</li><li><strong>人力資本交乘項（Table 17）</strong>：在 Diff-GMM 專利模型中交乘項為正但不顯著（因總體聚合資料中各產業對高低技能勞工的正負效應相抵）；<strong>但在 Diff-GMM 的「AI 科學出版物（ai<sup>PUB</sup>）」模型中，長期交乘項（log h  ×  log ai<sup>PUB</sup><sub>t-1</sub>）顯著為正（<code>+0.108***</code>，p<0.01）</strong>，證實長期而言唯有人力資本夠高，AI 科學知識才能轉化為實質所得成長！</li></ul>",
    limitations: "1. 樣本期間為 <strong>1995–2017 年</strong>，僅反映早期 AI，尚未涵蓋 2018–2024 年深度學習與生成式 AI 爆發期；<br/>2. 國家總體聚合資料（Aggregation bias）掩蓋了跨產業與企業內部的技能互補異質性。",
    implications: "<strong>與本研究設計最接近的「雙胞胎核心文獻」</strong>！本研究沿用相同的 3 項 AI 自變數與調節變數，但將樣本延伸至 2024/2025 年並深入比較德、荷、丹與 OECD，直接突破本篇的研究限制！",
    url: "https://impactum-journals.uc.pt/notaseconomicas/article/download/18969/12367",
    rawFile: "Notas_Economicas_OECD_Panel_ARDL.pdf"
  },
  {
    id: "EU-5",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 歐元區 12 國 (含荷/德)",
    docType: "Paper",
    methodBadge: "ECB SAFE 加權迴歸 + RCT 實驗",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Adoption and investment in AI across the euro area: Insights from harmonised firm-level data",
    chineseTitle: "歐元區企業之人工智慧採用與投資：來自調和化企業層級資料的洞見（ECB, 2025/2026）",
    authorsYear: "Annalisa Ferrando, Sara Lamboglia, Judit Rariga, & Maurice Schmidt (ECB, 2025/2026)",
    sourceJournal: "<strong>歐洲中央銀行工作論文系列</strong>：<em>ECB Occasional Paper Series</em>, No. 395, European Central Bank, Frankfurt am Main（共 71 頁）。DOI: <code>10.2866/6856108</code> / SSRN <code>7199861</code>。",
    purpose: "利用歐洲央行（ECB）於 2025 年 6 月與 12 月執行的兩波 SAFE 企業調查 AI 模組，針對 12 個歐元區國家（含荷蘭、德國）、逾 6,000 家企業，剖析企業 AI 採用的廣度與三階使用深度、採用阻礙、融資管道、對勞動生產力與預期的影響，並透過隨機對照試驗（RCT）檢驗同業競爭壓力對未來 AI 投資的因果效果。",
    questions: "<ul><li>歐元區 12 國企業的 AI 總採用率與使用深度（極少／試點、中度、顯著深度使用）分布為何？荷蘭與德國表現如何？</li><li>阻礙企業採用或深化 AI 的頭號瓶頸為何？企業如何為 AI 投資融資？</li><li>不同深度的 AI 使用如何影響企業勞動生產力、預期營業額、固定投資與就業？揭露同業真實投資率（RCT）能否推升企業 AI 投資？</li></ul>",
    hypotheses: "<strong>核心假設</strong>：<br/>1. 雖多數企業已接觸 AI，但受限於技能缺口與系統相容性，達到「顯著深度使用」的比例仍受限於天花板；<br/>2. AI 對預期營收、固定投資與未來生產力的提升呈非線性，僅在「顯著深度使用者」或高知識密集部門（ICT & R&D）浮現；<br/>3. 消除對同業 AI 投資率的低估偏誤（RCT）將透過競爭壓力顯著推升企業自身的 AI 投資計畫。",
    data: "ECB / EC <strong>SAFE 調查</strong>（2025 年 6 月約 <strong>6,000 家</strong>企業；2025 年 12 月 <strong>N = 5,067 家</strong>企業），涵蓋 <strong>12 個歐元區國家（含荷蘭、德國）</strong>。衡量四階 AI 使用強度（未使用、極少／試點、中度、顯著使用）、融資管道、SAFE-ORBIS 驗證之勞動生產力指標與未來 12 個月 AI 占總投資比例。",
    model: "1. 控制國家、產業、規模固定效果之<strong>加權線性迴歸模型</strong>；<br/>2. <strong>隨機對照試驗（RCT 資訊實驗，Baumann et al. 2026）</strong>：隨機向 50% 實驗組揭露同國同產業同規模同業之真實 AI 投資率，估計對事後信念與自身預期 AI 投資率的平均處理效果（ATE）。",
    findings: "<ul><li><strong>歐元區 12 國採用率與使用深度拆解（Chart 1 — 完美解釋跨文獻口徑差異！）</strong>：歐元區平均約 <strong><code>71%</code>（約 70%）</strong> 企業有使用 AI，但 <code>33%</code> 為極少／試點、<code>31%</code> 為中度，<strong>僅 <code>7%</code> 自評為「顯著深度使用（Significant use）」</strong>！跨國差異極大：<strong>🇳🇱 荷蘭總使用率高達 <code>85%</code>（歐元區第 1，且顯著深度使用高達 <code>23%</code>、中度 38%）</strong>；<strong>🇩🇪 德國總使用率達 <code>77%</code>（顯著使用為 <code>7%</code>、中度高達 <code>40%</code>、極少 30%）</strong>；愛爾蘭與義大利低於 65%（義大利僅 <code>52%</code>）。</li><li><strong>頭號阻礙與融資結構（Charts 12 & 17）</strong>：全歐元區第一大阻礙為<strong>「缺乏 AI 技能（<code>25%</code>）」</strong>，其次為隱私倫理（<code>19%</code>）與系統不相容（<code>19%</code>，在荷、德升至 <code>23%</code>）。融資高度依賴<strong>內部自有資金（<code>+8.7 至 +9.9 個百分點</code>）</strong>與<strong>公共補貼銀行貸款（<code>+7.2 個百分點</code>）</strong>。</li><li><strong>對營收、投資、就業與生產力之非線性效果（Chart 20 & Box 1）</strong>：<strong>顯著使用 AI</strong> 之企業預期未來 3 個月營業額成長機率高出 <strong><code>+17 個百分點</code></strong>、預期增加固定投資高出 <strong><code>+9 個百分點</code></strong>，且過去 3 個月就業增加機率高出 <strong><code>+21 個百分點</code>（完全無裁員證據）</strong>。在 <strong>ICT 與 R&D 部門</strong>，任何 AI 使用皆提升當前生產力（<code>+22 至 +32 個百分點</code>），而未來預期生產力提升則<strong>唯有「顯著深度使用者」顯著高出 <code>+41 個百分點</code></strong>！</li><li><strong>RCT 實驗結果（Chart 28）</strong>：80% 企業低估同業 AI 投資率（平均低估 18 個百分點）；向實驗組揭露真實同業數據後，直接帶動企業<strong>自身預期 AI 投資率顯著提高 <code>+1.8 個百分點</code>（p<0.001）</strong>！</li></ul>",
    limitations: "1. 2025 年橫斷面快照無法追蹤長期勞動替代效應；<br/>2. AI 使用強度與二元生產力指標依賴企業主觀自評；<br/>3. 融資問卷尚未涵蓋創投（VC）與私募股權。",
    implications: "徹底釐清荷蘭（85% 總使用、23% 顯著使用）與德國（77% 總使用、7% 顯著使用）的深度差異，並證實「缺乏 AI 技能（25%）」是全歐頭號瓶頸，強有力支撐本研究 <strong>H2 與 H3</strong>！",
    url: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=7199861",
    rawFile: "ECB_2025_Adoption_and_Investment_in_AI_Euro_Area_OP395.pdf"
  },
  {
    id: "EU-6",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 歐洲 31 國 (IMF)",
    docType: "Paper",
    methodBadge: "Acemoglu 任務模擬 (44 情境) + OLS FE",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Artificial Intelligence and Productivity in Europe",
    chineseTitle: "歐洲的人工智慧與生產力：31 國中期全要素生產力（TFP）模擬與法規衝擊分析",
    authorsYear: "Florian Misch, Ben Park, Carlo Pizzinelli, & Galen Sher (IMF, 2025)",
    sourceJournal: "<strong>國際貨幣基金組織工作論文</strong>：<em>IMF Working Paper</em>, WP/25/67, European Department, April 2025（共 38 頁）。",
    purpose: "使用 Acemoglu (2024) 任務基礎框架，結合橫斷面迴歸校準各國與各部門 AI 採用率驅動因素，模擬 31 個歐洲國家在 44 種情境下 AI 對中期（5 年期）全要素生產力（TFP）的累積影響，並量化評估國家職業管制、EU AI Act 與資料隱私法（GDPR）對歐洲生產力增益的折損幅度。",
    questions: "<ul><li>未來 5 年 AI 對歐洲 31 國整體與個別國家（如丹麥、德國、荷蘭）的累積 TFP 提升幅度為何？</li><li>驅動歐洲跨國與跨部門 AI 採用率差異的最主要結構性因素為何（工資水準 vs. 人力資本 vs. 資金成本）？</li><li>國家職業管制、EU AI Act 與資料隱私法合計會削減歐洲多少百分比的潛在 AI 生產力成長？</li></ul>",
    hypotheses: "<strong>核心假設</strong>：<br/>1. 高所得、高工資國家（如盧森堡、丹麥、瑞士、德國、荷蘭）因企業節省高昂勞動成本的誘因更強，且金融、IT 等高暴露白領服務業占比高，其 AI 採用率與中期 TFP 增益顯著高於低所得東歐國家；<br/>2. 職業執照管制、EU AI Act 與資料隱私法將降低受影響任務與部門的 AI 暴露度，顯著削弱歐洲潛在 TFP 成長。",
    data: "涵蓋 <strong>31 個歐洲國家（EU27 + UK, CH, NO, IS）</strong>：工時取自 2023 EU-LFS（荷蘭與英國用 1-digit ISCO，英國用 2019 年）；工資取自 EU-SILC（荷蘭與英國用 2019 SES）；附加價值與勞動份額取自 Eurostat 國民帳戶；歷史 AI 採用率取自 2023 Eurostat（30 國 × 11 部門，N=265–298）。",
    model: "1. <strong>Acemoglu (2024) 與 Hulten 定理三參數乘積模擬模型（5 年期，44 種情境）</strong>；<br/>2. <strong>長期 AI 採用率決定因素橫斷面迴歸（Appendix Table A2）</strong>：y<sub>i,j</sub> = α<sub>i</sub> + γ<sub>j</sub> + x<sub>i,j</sub>β + e<sub>i,j</sub>；<br/>3. <strong>三大法規衝擊模擬</strong>（假設法規使受管制職業、高風險／困難任務與資通訊／金融／醫療三部門之 AI 暴露度減半 50%）。",
    findings: "<ul><li><strong>歐洲整體與三國 5 年累積 TFP 增益（Figs. 5–7）</strong>：在首選情境（Preferred Scenario）下，歐洲 31 國 5 年累積 TFP 提升約 <strong><code>1.1%</code>（約 1%）</strong>，比 Acemoglu 對美國的基準估計（0.71%）高出近 60%。跨國差異極大（盧森堡與挪威達 2.0%–2.2%，羅馬尼亞僅 0.4%–0.5%）：<strong>🇩🇰 丹麥約 <code>+1.9%</code>（高居歐洲前 4）</strong>、<strong>🇩🇪 德國約 <code>+1.5%</code></strong>、<strong>🇳🇱 荷蘭約 <code>+1.35%</code></strong>。變異分解顯示「工資驅動之採用率差異」與「產業結構差異」為前兩大主因。</li><li><strong>工資與高等教育人力資本的關鍵關係（Appendix Table A2）</strong>：每小時工資每高出 1 歐元，企業 AI 採用率顯著增加 <strong><code>0.75 個百分點</code>（0.75<sup>***</sup>）</strong>。單獨看時高等教育比例越高的國家與部門 AI 採用率越高，但<strong>一旦控制「工資（Wage）」，高等教育係數即不顯著</strong>——證明<strong>高學歷勞工帶來的高薪資成本，正是驅動企業導入 AI 以節省成本或放大高薪員工產出的核心經濟誘因</strong>！此外若發展出「AI-as-a-Service」，歐洲採用率可由 18% 躍升 4 倍至 <strong><code>75%</code></strong>。</li><li><strong>監管法規削減逾 <code>30%</code> 潛在生產力成長（Fig. 8）</strong>：資料隱私法削減約 <code>10%</code>，EU AI Act 與國家職業管制（德國受管制職業占 21.5%、丹麥 15.7%、荷蘭 14.8%）各削減約 <code>15%–20%</code>，<strong>三者合計使歐洲潛在 AI 生產力增益大幅縮減超過 <code>30%</code>（逾 35%）</strong>！</li></ul>",
    limitations: "1. 屬<strong>基於模型的模擬估計（Model-based estimates）</strong>而非事後實際觀測到的生產力成長數據；<br/>2. <strong>跨國資料年份與顆粒度不一致</strong>：AI 採用資料來自 2023 年，但<strong>荷蘭與英國的工時／工資資料來自 2019 年</strong>，且荷蘭僅有 1-digit ISCO 粗略職業分類；<br/>3. 僅捕捉 5 年內既有任務自動化的漸進效果，未納入加速研發與新產業創造。",
    implications: "不僅提供歐洲 31 國 TFP 增益與法規削減 30% 的權威數據，其揭示的「<strong>高學歷人力資本 → 高工資 → 強勁 AI 採用誘因與高 TFP 成長</strong>」傳導機制，更為本研究 <strong>H2 與 H3</strong> 提供深厚理論基礎！",
    url: "https://www.imf.org/en/publications/wp/issues/2025/04/04/ai-and-productivity-in-europe-565924",
    rawFile: "IMF_2025_AI_and_Productivity_in_Europe.pdf"
  },
  {
    id: "EU-7",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 全球 56 經濟體 (BIS / CEPR)",
    docType: "Paper",
    methodBadge: "Rajan & Zingales 交互作用 FE",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Artificial Intelligence and Growth in Advanced and Emerging Economies: Short-Run Impact",
    chineseTitle: "先進與新興經濟體中的人工智慧與經濟成長：短期影響實證（BIS / CEPR, 2025/2026）",
    authorsYear: "Leonardo Gambacorta, Enisse Kharroubi, Aaron Mehrotra, & Tommaso Oliviero (2025/2026)",
    sourceJournal: "<strong>國際清算銀行與歐洲經濟政策研究中心工作論文</strong>：<em>BIS Working Papers No. 1321</em> (Dec 2025) / <em>CEPR Discussion Paper DP20992</em> (2026)（共 23 頁）。",
    purpose: "採用 Rajan and Zingales (1998) 的跨國跨產業交互作用實證架構，針對全球 56 個經濟體（含丹麥、荷蘭、德國）與 16 個產業部門，檢驗「產業層級生成式 AI 暴露度（AIIE）」與「國家層級 AI 準備度（AIPI，含數位基建、人力資本、創新、法規）」的交互作用如何驅動 2022–2023 年產業實質附加價值成長。",
    questions: "<ul><li>控制國家與產業固定效果後，當國家 AI 準備度（AIPI）提高時，高 AI 暴露度產業（如金融、教育、資通訊、專業服務）是否比低暴露產業實現更快的實質附加價值成長？</li><li>AI 準備度的四大子維度（數位基礎設施、創新、人力資本、法規）哪些最關鍵？控制「工業機器人存量（Robots）」後是否依然穩健？</li><li>生成式 AI 對先進經濟體與新興經濟體的短期附加價值成長貢獻相差多少？</li></ul>",
    hypotheses: "<strong>論文第 4 頁明列核心假設（Key Hypothesis）</strong>：生成式 AI 的短期成長影響由「產業對該技術的暴露程度差異（知識與認知密集度）」與「國家層級 AI 準備度（數位基建、人力資本、創新、法規）」共同驅動；在 AI 準備度較高的國家，高 AI 暴露度產業的實質附加價值成長率顯著高於低暴露產業（β > 0）。",
    data: "全球 <strong>56 個經濟體（29 個先進經濟體含丹麥、荷蘭、德國 + 27 個新興經濟體）× 16 個產業部門</strong>，有效觀測值 <strong>N = 875 個國家—產業配對</strong>。依變數 GR<sub>VA</sub><sub>cj</sub> 為 ADB 投入產出表計算之 2022–2023 年實質附加價值成長率；自變數為 Aldasoro et al. (2024) 產業生成式 AI 暴露度 AIIE<sub>j</sub> 與 IMF 國家 AI 準備度指數 AIPI<sub>c</sub>（<strong>丹麥以 0.78 居全體先進國家第 1</strong>，荷蘭與德國亦居前段班），並控制工業機器人存量 <code>Robot stock</code>。",
    model: "<strong>Rajan and Zingales (1998) 交互作用固定效果模型（Eq. 1）</strong>：<br/><code>GR_VA_{cj} = β (AIPI_c × AIIE_j) + γ Lagged_Share_{cj} + λ_j + τ_c + ε_{cj}</code>（含產業 FE λ<sub>j</sub> 與國家 FE τ<sub>c</sub>，標準誤叢聚於國家層級）。",
    findings: "<ul><li><strong>基準交互作用顯著為正（Table 1）</strong>：控制國家與產業固定效果後，AIPI<sub>c</sub>  ×  AIIE<sub>j</sub> 係數為 <strong><code>+3.043**</code></strong>（p<0.05）。比較第 90 與第 10 百分位暴露度產業，當國家 AI 準備度提高 1 個標準差時，高暴露產業的年實質附加價值成長率顯著高出約 <strong><code>2 個百分點</code>（18.5 ppt vs. 16.5 ppt）</strong>！</li><li><strong>四大子維度與工業機器人穩健性（Tables 2–4）</strong>：AI 準備度的四大子維度（<strong>數位基礎設施 <code>+3.047*</code>、創新與經濟整合 <code>+2.640*</code>、人力資本與勞動市場政策 <code>+2.595*</code>、法規與倫理 <code>+3.154**</code></strong>）與產業暴露度之交互作用<strong>全部顯著為正</strong>！控制工業機器人後，`Robot stock` 顯著促進藍領部門成長（<code>+0.304***</code>），而生成式 AI 交互作用項更升至 <strong><code>+3.140**</code></strong>。</li><li><strong>擴大跨國所得差距（Fig. 5）</strong>：先進經濟體平均實質附加價值成長增幅（較最低國高出 <code>+0.6 個百分點</code>）比新興經濟體（<code>+0.4 個百分點</code>）高出 50%，短期內可能擴大全球所得差距。</li></ul>",
    limitations: "1. 僅衡量生成式 AI 爆發初期（2022–2023 年）的短期附加價值成長，未涵蓋長期一般均衡動態；<br/>2. 以美國產業 AI 暴露度分布作為全球共同基準；<br/>3. 尚未透過結構模型納入總合需求與跨部門外溢效應以換算為長期 TFP。",
    implications: "直接提供本研究 <strong>Interaction Effects（異質性交互作用模型）</strong> 與 <strong>H2/H3（產業結構 × 國家人力資本與準備度）</strong> 的計量設定原型！",
    url: "https://cepr.org/publications/dp20992",
    rawFile: "BIS_2025_AI_and_Growth_Short_Run_Impact.pdf"
  },
  {
    id: "EU-8",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 OECD 35 國 & 全球 63 國",
    docType: "Paper",
    methodBadge: "FE-OLS + 6 種 IV-GMM (專利 & 論文)",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Artificial intelligence and productivity: global evidence from AI patent and bibliometric data",
    chineseTitle: "人工智慧與生產力：來自全球 AI 專利與科學書目資料的實證證據",
    authorsYear: "Aleksandra Parteka & Aleksandra Kordalska (2023)",
    sourceJournal: "<strong>科技創新管理頂尖期刊論文</strong>：<em>Technovation</em> (Elsevier), Volume 125, Article 102764, May 2023（共 15 頁）。DOI: <code>10.1016/j.technovation.2023.102764</code>。",
    purpose: "針對「現代生產力悖論（Modern Productivity Paradox）」，首次同時將 OECD AI 專利（申請人與發明人，1985–2016）與 Elsevier/Scopus AI 科學出版物（1998–2017）納入擴充總體生產函數模型，實證檢驗 35 個 OECD 國家（含德、荷、丹）與 28 個非 OECD 國家的 AI 技術知識生產是否促進總體勞動生產力成長。",
    questions: "<ul><li>1985–2017 年間，OECD 與非 OECD 國家的 AI 專利與 AI 科學出版物占總專利／總論文比重有何變化？</li><li>在控制資本深化、國家一般整體創新（GI）、人力資本（HC）、貿易開放度（Trade）與法規品質（RQ），並以 IV-GMM 處理內生性後，AI 專利與 AI 科學出版物（流量與存量）對勞動生產力成長率有何影響？</li><li>為何「AI 專利」與「AI 科學出版物」對總體生產力成長的實證結果會出現顯著差異？</li></ul>",
    hypotheses: "<strong>兩大競爭假設</strong>：<br/>• <strong>假設 1（內生知識促進生產力）</strong>：AI 專利與 AI 論文累積之無形知識存量能推升總體勞動生產力成長（β<sub>3</sub> > 0）；<br/>• <strong>假設 2（現代生產力悖論與利基現象）</strong>：由於 AI 專利占總專利比重仍低（2016 年僅 1.80%，屬利基創新 Niche innovation）且存在無形資產衡量偏誤與 J 曲線時滯，AI 專利尚未顯著反映在官方總體勞動生產力成長中。",
    data: "涵蓋 <strong>35 個 OECD 國家（含德國、荷蘭、丹麥）+ 28 個非 OECD 國家（共 63 國）</strong>，期間 <strong>1985–2016 年（專利）與 1998–2017 年（論文）</strong>。<strong>本研究三大自變數之原始出處</strong>：依變數為 PWT 10.0 每工時實質 GDP 成長率 Δln(Y/L)<sub>it</sub>；核心自變數（每百萬就業人口，含 5 期移動平均流量與 δ=15% 永續盤存法存量）為：(1) <strong>申請人 AI 專利 ln(AIPat/L)<sup>APP</sup></strong>、(2) <strong>發明人 AI 專利 ln(AIPat/L)<sup>INV</sup></strong>、(3) <strong>Elsevier/Scopus AI 科學出版物 ln(AIPub/L)</strong>；控制勞均資本成長 Δln(K/L)、一般整體創新 ln(GI)、人力資本 HC、貿易開放度 Trade、法規品質 RQ。",
    model: "<strong>擴充生產函數動態面板模型（Eq. 1）</strong>：<br/><code>Δln(Y/L)_{it} = β_0 + β_1 ln(Y/L)_{i,t-1} + β_2 Δln(K/L)_{it} + β_3 ln(AI/L)_{it} + β_4 ln Z_{it} + μ_i + ν_t + ε_{it}</code>，採用 <strong>FE-OLS 與 6 種 IV-GMM 工具變數策略</strong>（含落後項、工程技術 R&D 占比外部工具變數、同所得群組他國平均專利、Lewbel 2012 異質變異數工具變數）。",
    findings: "<ul><li><strong>AI 專利暴增 34 倍但占比仍屬利基（Table 1）</strong>：1985–2016 年 OECD 的 AI 專利申請量暴增 34 倍，但占總專利比重僅由 <code>0.18%</code> 升至 <strong><code>1.80%</code></strong>；AI 論文占比由 1998 年 <code>0.68%</code> 升至 2017 年 <strong><code>1.38%</code></strong>。</li><li><strong>AI 專利對總體每工時生產力成長無顯著影響（Tables 3–5）</strong>：在 OECD 34 國與全球 57 國中，無論申請人或發明人專利、流量或存量、OLS 或 IV-GMM，AI 專利係數皆接近 0 且不顯著（約 -0.001 至 0.008），證實 2016 年前 AI 專利在總體生產力統計中呈現「現代生產力悖論」（反觀一般整體創新 ln(GI) 與貿易開放度 Trade 顯著為正）。</li><li><strong>關鍵突破：AI 科學出版物存量（Publication Stock）對勞動生產力成長具高度顯著正向影響！（Tables 6 & 7）</strong>：當改以 <strong>Elsevier/Scopus AI 科學出版物存量 ln(AI<sup>ST</sup>Pub/L)</strong> 衡量時，在 <strong>OECD 35 國（Table 6）與全球 63 國（Table 7）的所有 OLS 與 IV-GMM 模型中全部顯著為正（OECD 係數達 <code>+0.014* 至 +0.026***</code>）</strong>！證明科學出版物比專利更能捕捉廣泛、未申請專利的演算法與軟體形式 AI 創新！</li></ul>",
    limitations: "1. 專利資料截斷於 2016 年、論文至 2017 年，尚未涵蓋 2018 年後的最新 AI 浪潮；<br/>2. 官方 GDP 統計低估無形數位資產；<br/>3. 僅聚焦 AI 知識生產，且未如 Duarte et al. (2026) 採用年度 Panel ARDL 分離短長期人均 GDP 效果。",
    implications: "<strong>對本研究變數設計具決定性意義</strong>！直接證明為何本研究除「OECD 申請人／發明人 AI 專利」外，必須同時納入「<strong>Elsevier/Scopus AI 學術論文</strong>」作為核心自變數與穩健性指標！",
    url: "https://doi.org/10.1016/j.technovation.2023.102764",
    rawFile: "Parteka_Kordalska_2023_Technovation_AI_Patents_Productivity.pdf"
  },
  {
    id: "TR-1",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 歐盟 27 國製造業 (含德/荷/丹)",
    docType: "Paper",
    methodBadge: "Probit (AME) & OLS (Clustered SE)",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Big Data Analytics and Exports—Evidence for Manufacturing Firms from 27 EU Countries",
    chineseTitle: "大數據分析與出口——來自歐盟 27 國製造業企業的實證證據",
    authorsYear: "Joachim Wagner (2024/2025)",
    sourceJournal: "<strong>國際經濟與貿易知名期刊論文</strong>：<em>Open Economies Review</em> (Springer), Volume 36, pp. 825–834, 2024 年 6 月上線 / 2025 年卷期（共 10 頁）。DOI: <code>10.1007/s11079-024-09777-2</code>。",
    purpose: "首次利用涵蓋歐盟 27 國製造業企業的微觀調查資料（Flash Eurobarometer 486），實證檢驗企業使用大數據分析（Big Data Analytics，含資料探勘與預測分析——企業 AI 的核心基礎）是否與企業出口活動（出口廣延邊際）呈正向關聯，並估算「大數據分析出口溢酬」。",
    questions: "<ul><li>在歐盟 27 國製造業中，採用大數據分析的企業成為出口商的機率是否顯著較高？</li><li>出口至全球 7 大特定地理區域市場（歐盟內、其他歐洲、北美、拉美、中國、其他亞太、中東與非洲）的機率是否顯著較高？</li><li>採用大數據分析的企業，其出口目的地數量（市場多元化）是否顯著較多？</li></ul>",
    hypotheses: "<strong>兩大理論機制與假設（基於 Melitz 2003 異質性企業貿易理論）</strong>：<br/>1. <strong>提升生產力機制</strong>：大數據與預測分析最佳化生產流程、透過預測性維護減少停機時間，協助企業跨越出口固定成本；<br/>2. <strong>降低貿易成本機制</strong>：協助企業低成本分析外國市場競爭者、法規與消費者需求變化。<br/>預期使用大數據分析之企業享有顯著正向的出口機率與出口目的地數量溢酬。",
    data: "歐盟執委會 <strong>Flash Eurobarometer 486</strong>（2020 年 2–5 月執行，出口數據針對 2019 年），涵蓋 <strong>歐盟 27 國共 N = 2,355 家製造業企業（NACE Section C）</strong>。自變數 <code>Big Data Analytics</code>（平均採用率 13.80%）；依變數為是否出口（平均 64.5%）、7 大區域出口虛擬變數、出口區域總數（0–7 個，平均 1.544 個）；控制<strong>企業年齡、員工人數、專利申請／持有（Patent）及 26 個國家固定效果虛擬變數</strong>。",
    model: "1. 二元出口與 7 大區域出口決策採用 <strong>Probit 模型（報告平均邊際效果 AME）</strong>；<br/>2. 出口目的地總數採用 <strong>OLS 迴歸模型</strong>（標準誤叢聚於 27 個國家層級）。",
    findings: "<ul><li><strong>出口參與機率溢酬（Table 3）</strong>：控制規模、年齡、專利與國家 FE 後，Probit 係數為 <code>+0.386***</code>，<strong>平均邊際效果（AME）達 <code>+0.122***</code>（t=4.52）——即使用大數據分析的製造業企業，成為出口商的機率顯著高出 <code>12.2 個百分點</code></strong>！</li><li><strong>全球 7 大區域市場全面擴張（Table 4, AME）</strong>：歐盟內部 <code>+12.9 個百分點</code>、其他歐洲 <code>+16.3 個百分點</code>、北美 <code>+9.5 個百分點</code>、拉美 <code>+9.7 個百分點</code>、中國 <code>+10.0 個百分點</code>、其他亞太 <code>+10.9 個百分點</code>、中東與非洲 <code>+11.3 個百分點</code>（對遠洋市場出口機率幾乎翻倍）。</li><li><strong>出口目的地數量溢酬（Table 5, OLS）</strong>：係數為 <strong><code>+0.717***</code></strong>（t=5.69），平均多出口 <strong><code>0.717 個區域市場</code>（增幅達 <code>46%</code>）</strong>。</li><li><strong>珍貴附錄發現：德、荷、丹製造業採用率差距（Appendix Table）</strong>：2020 年初製造業大數據採用率為 <strong>🇩🇰 丹麥 <code>21.33%</code>（歐盟第 3）＞ 🇳🇱 荷蘭 <code>16.36%</code> ＞ 歐盟平均 <code>13.80%</code> ＞ 🇩🇪 德國 <code>5.41%</code>（歐盟倒數第 2）</strong>！</li></ul>",
    limitations: "1. 橫斷面資料無法區分是高生產力出口商自我選擇（Self-selection）還是事後因果效果；<br/>2. 僅有廣延邊際（Extensive margin），缺乏出口占銷售額比例之密集邊際（Intensive margin）；<br/>3. 缺乏製造業 2-digit 子產業分類代碼。",
    implications: "證明預測與數據分析對歐洲製造業出口的強大推力，且附錄數據直接印證丹麥（21.3%）與荷蘭（16.4%）在早期製造業數據應用上領先德國中小企業（5.4%），支撐 <strong>H2 與 H3</strong>。",
    url: "https://link.springer.com/article/10.1007/s11079-024-09777-2",
    rawFile: "s11079-024-09777-2.pdf"
  },
  {
    id: "TR-2",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 OECD 15 國 (含德國)",
    docType: "Paper",
    methodBadge: "MMQR 動差分位數迴歸 + Westerlund",
    hypothesesTags: ["H1", "H2"],
    title: "Artificial Intelligence and Export Performance: Insights from OECD Countries",
    chineseTitle: "人工智慧與出口績效：來自 15 個 OECD 國家的動差分位數迴歸洞見",
    authorsYear: "Hafidha Lahmeri (2025)",
    sourceJournal: "<strong>國際商業與經濟研究期刊論文</strong>：<em>International Journal of Business & Economic Studies (UIECD)</em>, Volume 7, Issue 4, pp. 258–271, Dec 2025（共 14 頁）。DOI: <code>10.54821/uiecd.1786964</code>。",
    purpose: "利用 2013–2023 年 15 個 OECD 國家（含德國）的追蹤資料，採用動差分位數迴歸法（MMQR），同時拆解 AI 投資與研發支出（R&D）對出口績效的「位置／水準效果（Location）」與「尺度／波動穩定效果（Scale）」，並檢驗在不同出口分位數（0.25, 0.50, 0.75, 0.90）下的非線性異質性。",
    questions: "<ul><li>在 OECD 國家中，AI 投資與 R&D 支出對出口績效的平均水準影響（Location）與波動性影響（Scale）為何？AI 投資能否降低出口波動？</li><li>AI 投資與 R&D 支出對出口的影響是否隨國家既有出口表現分位數而呈現非線性差異？</li></ul>",
    hypotheses: "<strong>核心理論預期</strong>：<br/>1. <strong>短期壓抑 vs. 波動穩定雙重效果</strong>：AI 投資初期因高固定成本與組織轉型摩擦，短期對出口水準具壓抑作用（Location <0）；但透過精準需求預測與供應鏈協調，能顯著降低出口波動性（Scale <0，發揮貿易穩定器效果）；<br/>2. R&D 支出在低出口分位數國家提振效果最顯著，在高分位數國家呈現邊際報酬遞減。",
    data: "涵蓋 <strong>15 個 OECD 國家（含德國、法國、英國、瑞典、挪威、比利時、盧森堡、美國等）</strong>，期間 <strong>2013–2023 年（共 N = 165 筆面板觀測值）</strong>。依變數 I<sub>Expo</sub><sub>i,t</sub> 為商品與服務出口占 GDP %（World Bank）；自變數為 OECD.AI 之國家 AI 與資料新創投資指標（AI<sub>inv</sub><sub>i,t</sub>）與 R&D 占 GDP %（R<sub>D</sub><sub>i,t</sub>）；Model 2 控制 GDP 成長率與通膨率。",
    model: "執行跨截面相依檢定、Pesaran & Yamagata 斜率異質性檢定、CIPS 單根檢定與 <strong>Westerlund (2007) 面板共整合檢定</strong>後，採用 <strong>Machado & Silva (2019) 動差分位數迴歸（MMQR）</strong>：Q(τ  |  X<sub>it</sub>) = X'<sub>it</sub>β(τ) + δ<sub>i</sub> + ε<sub>it</sub>(τ)。",
    findings: "<ul><li><strong>長期共整合成立（Table 5）</strong>：Westerlund 檢定四項統計量均在 1% 水準顯著，證實 AI 投資、R&D 與出口績效具長期均衡關係。</li><li><strong>短期壓抑水準但顯著降低出口波動（Tables 6 & 7）</strong>：AI<sub>inv</sub> 的位置效果（Location）顯著為負（Model 1 <code>-0.1576***</code>、Model 2 <code>-0.1555*</code>），反映短期轉型調整成本；但<strong>尺度效果（Scale）顯著為負（<code>-0.0603**</code>，t=-2.25），證明 AI 投資能顯著降低出口波動性，發揮穩定貿易績效的效果</strong>！</li><li><strong>非線性分位數差異</strong>：在控制 GDP 與通膨的 Model 2 中，AI 短期負向摩擦在中低分位數顯著（Q<sub>0.25</sub> = -0.1219<sup>***</sup>, Q<sub>0.50</sub> = -0.1636<sup>*</sup>），但在最高出口分位數（Q<sub>0.90</sub> = -0.2885, t=-1.17）轉為不顯著，顯示高出口成熟經濟體具較強調適韌性；R&D 則在低分位數（Q<sub>0.25</sub> = +0.0616<sup>**</sup>）顯著促進出口。</li></ul>",
    limitations: "1. 樣本僅涵蓋 15 個 OECD 國家（N=165），未包含荷蘭與丹麥；<br/>2. 總體新創投資指標無法捕捉企業內部部署深度；<br/>3. 未納入 `AI × R&D` 交乘互動項。",
    implications: "為本研究解釋「<strong>短期轉型調整摩擦（J-Curve）vs. 長期共整合與風險穩定</strong>」提供重要跨國實證依據。",
    url: "https://dergipark.org.tr/en/pub/uiecd/article/1786964",
    rawFile: "DergiPark_2025_OECD_Export_Performance.pdf"
  },
  {
    id: "TR-3",
    countryGroup: "EU-OECD",
    countryLabel: "🇪🇺 全球 90+ 國 (含德/荷/丹/OECD)",
    docType: "Paper",
    methodBadge: "Eaton-Kortum 兩階段結構引力模型 + IV",
    hypothesesTags: ["H1", "H2", "H3"],
    title: "Digitalization, AI Intensity, and International Trade",
    chineseTitle: "數位化、AI 密集度與國際貿易：資料生產要素與結構引力模型實證",
    authorsYear: "Chu Ping Lo (臺大農經 羅竹平) & Yi Lee (清大經濟 李怡) (2024)",
    sourceJournal: "<strong>國際經濟與金融知名期刊論文</strong>：<em>Annals of Economics and Finance</em>, Volume 25, Issue 1, May 2024, pp. 251–273（共 23 頁；臺灣國科會計畫 MOST 111-2410-H-002-158-MY2）。",
    purpose: "將「資料（Data）」作為新型態生產要素納入 Eaton & Kortum (2001, 2002) 李嘉圖國際貿易一般均衡框架，建立連結「製造業產出 ↔ 原始資料 ↔ 數位基礎設施與 AI 演算法人才加工 ↔ 資料要素投入」的理論模型，並利用全球雙邊貿易流量與 OECD.AI 數據進行兩階段結構引力模型（Structural Gravity Model）估計，量化 AI 密集度與數位化密集度的貿易彈性及對跨國出口能力變異的解釋比例。",
    questions: "<ul><li>一國的「數位基礎設施密集度（k<sub>i</sub>）」與「AI 密集度（r<sub>ia</sub>）」如何共同降低資料處理成本並促進國際貿易？</li><li>雙邊國際貿易流量對出口國「AI 密集度」與「數位化密集度」的貿易彈性分別有多大？</li><li>在解釋全球各國出口能力（Exporting Capability）變異時，傳統「生產技術與工資」與新興「AI 密集度＋數位化密集度」各占多少比重？德國排名如何？</li></ul>",
    hypotheses: "<strong>三大數理推導假設</strong>：<br/>1. <strong>數位基建與 AI 人才互補降本</strong>：數位基礎設施（收集傳輸資料）與 AI 演算法人才（標註轉化資料）以 Cobb-Douglas 形式共同降低單位資料要素成本 c<sub>id</sub> = ξ r<sub>ia</sub><sup>-γ</sup> k<sub>i</sub><sup>-(1-γ)</sup> w<sub>i</sub>；<br/>2. <strong>正向貿易彈性假設</strong>：出口國 AI 密集度與數位化密集度越高，出口貿易流量顯著越大（ε<sub>a</sub> = θφγ > 0, ε<sub>k</sub> = θφ(1-γ) > 0）；<br/>3. <strong>比較利益雙引擎假設</strong>：AI 密集度與數位化密集度已成為解釋跨國出口成功變異的過半核心來源。",
    data: "結合 <strong>CEPII 雙邊貿易引力資料庫（第一階段雙邊貿易樣本高達 N = 497,636 筆；第二階段國家—年份出口能力樣本 N = 732–826 筆，涵蓋全球約 90–100 國）</strong>、World Bank 與 <strong>OECD.AI</strong>。核心自變數 <strong>AI 密集度 r<sub>iat</sub> 為 OECD.AI 統計之「人均 AI 科學出版物數量（AI publications per capita）」</strong>；數位化密集度 k<sub>it</sub> 為網路使用率、行動電話或固定寬頻訂戶數；控制 R&D/GDP、專利對數、人力資本指數（<code>Humcap</code>），並以<strong>總人口、勞動力規模、失業率作為工資 ln(w<sub>it</sub>) 的工具變數（IV）</strong>。",
    model: "1. <strong>第一階段結構引力模型（Eq. 9）</strong>：ln(X<sub>int</sub>/Y<sub>nt</sub>) = C<sub>it</sub> - θ ln τ<sub>int</sub> - ln Φ<sub>nt</sub>，提取各國出口能力 C<sub>it</sub>；<br/>2. <strong>第二階段工具變數（IV）結構估計（Eq. 10）</strong>：估計結構參數 (θ, φ, γ) 與隱含貿易彈性 ε<sub>a</sub> = θφγ；<br/>3. <strong>Hottman et al. (2016) 跨國出口能力變異分解（Eq. 12）</strong>。",
    findings: "<ul><li><strong>AI 密集度貿易彈性高達 <code>1.01%–1.30%</code>（Table 3）</strong>：資料要素產出份額 φ 顯著達 <code>0.3367***–0.5575***</code>，AI 權重 γ 達 <code>0.3962***–0.5730***</code>。<strong>隱含 AI 貿易彈性 ε<sub>a</sub> 在三種模型中穩健介於 <code>1.01 至 1.30（1.33）</code>——即一國 AI 密集度每增加 <code>1%</code>，出口額顯著增加 <code>1.01%–1.30%</code></strong>！同時 R&D/GDP（+0.88** 至 +0.97**）、專利對數（+0.67*** 至 +0.75***）與人力資本指數（+0.14* 至 +0.25***）全數顯著為正。</li><li><strong>🇩🇪 德國純製造生產技術高居世界第 1（Table 5）</strong>：扣除工資、數位化與 AI 後，全球純生產技術指數（ln T）前五強依序為：<strong>1. 德國（<code>34.35</code>，全球第 1！）</strong>、2. 瑞士（33.77）、3. 美國（33.70）、4. 法國（32.46）、5. 英國（32.02）。</li><li><strong>跨國出口能力變異分解：AI 與數位化合占 <code>53%</code>（Table 6）</strong>：傳統生產技術與工資成分解釋了 <strong><code>47%</code></strong>（0.47<sup>***</sup>）的跨國變異；而<strong>「AI 密集度」單獨解釋了高達 <code>44%</code>（0.44<sup>***</sup>）</strong>，「數位化密集度」解釋了 <strong><code>9%</code>（0.09<sup>***</sup>）</strong>——<strong>AI 與數位化合計解釋了全球各國出口成功變異的 <code>53%</code></strong>，超越傳統技術與工資！</li></ul>",
    limitations: "1. 模型假設所有最終貿易財為製造業商品，將數位服務視為中間投入，未單獨分析跨境最終服務貿易；<br/>2. 數理模型簡化假設單一勞動類別與單一工資率；<br/>3. 以「人均 AI 學術論文」代理 AI 密集度，偏向衡量研發能力而非企業商業部署率。",
    implications: "極具戰略價值！證明<strong>德國雖在傳統製造技術（ln T = 34.35）高居全球第 1，但現代國際競爭力有 53% 取決於「AI 密集度（44%）＋數位基礎設施（9%）」</strong>，且同樣使用 OECD.AI 科學出版物作為核心自變數，完美串聯本研究 <strong>H1、H2 與 H3</strong>！",
    url: "https://ideas.repec.org/a/cuf/journl/y2024v25i1lolee.html",
    rawFile: "Lo_Lee_2024_Digitalization_AI_Intensity_Trade.pdf"
  }
);

window.WIKI_DATA.pages = {
  "germany": {
    title: "🇩🇪 德國（Germany）：AI 國家戰略、生態系瓶頸、工業創新與 NARDL 成長實證",
    categoryLabel: "國別與實體專頁 (Country Page)",
    filePath: "wiki/countries/germany.md",
    updated: "2026-11-16",
    sourcesCount: 8,
    htmlContent: `
      <div class="callout">
        <div class="callout-title">⚠️ 德國企業 AI 採用率之跨文獻口徑差異警語（Contradiction & Caveat Resolution）</div>
        <p>在撰寫論文引用德國企業採用率時，必須區分調查年份與衡量口徑差異：</p>
        <ul>
          <li><strong>2019 年（CIS 2018 曼海姆創新調查，Rammer et al., 2022）</strong>：僅 <strong><code>5.8%</code></strong> 企業在營運、產品或服務中積極使用 AI（反映早期傳統 AI 深度研發採用者）。</li>
          <li><strong>2020 年初（歐盟製造業大數據調查，Wagner, 2025）</strong>：德國製造業大數據分析採用率僅 <strong><code>5.41%</code></strong>（歐盟倒數第 2，遠低於丹麥 21.33% 與荷蘭 16.36%）。</li>
          <li><strong>2023–2024 年（ifo 商業調查，Licht & Wohlrabe, 2026）</strong>：全德企業 AI 採用率由 2023 年 <strong><code>13.3%</code></strong> 翻倍至 2024 年 <strong><code>27.0%</code></strong>（另有 <strong><code>17.5%</code></strong> 規劃採用；製造業達 <strong><code>31.0%</code></strong>、服務業 <strong><code>27.7%</code></strong>、貿易 <strong><code>22.0%</code></strong>、營建僅 <strong><code>11.6%</code></strong>；大型企業 34.3% vs. SMEs 21.6%）。</li>
          <li><strong>2025 年（Eurostat 2026 官方標準口徑）</strong>：德國 10 人以上企業採用至少一項 AI 技術比例為 <strong><code>26.0%</code></strong>（高於歐盟平均 19.95%，低於丹麥 42% 與荷蘭 33%）。</li>
          <li><strong>2025 年（ECB SAFE 歐元區廣義口徑，Ferrando et al., 2025）</strong>：高達 <strong><code>77%</code></strong> 德國受訪企業表示有接觸 AI，但拆解強度後：<strong><code>30%</code> 為極少／試點使用、<code>40%</code> 為中度使用、僅有 <code>7%</code> 達到「顯著深度使用（Significant use）」</strong>（遠低於荷蘭的 23% 顯著使用）。</li>
        </ul>
      </div>

      <h4>一、 國家 AI 戰略、科研實力與主權算力建設（OECD, 2024; EU Plan, 2025）</h4>
      <ul>
        <li><strong>跨部會治理與預算倍增</strong>：由聯邦教育及研究部（BMBF）、經濟事務和氣候行動部（BMWK）、勞動及社會事務部（BMAS）共同主導。2018 年啟動國家 AI 戰略（增設 <strong>150 名 AI 教授職位</strong>），2020 年更新版預算增至 <strong>50 億歐元</strong>，並推出 <strong>16 億歐元 AI 行動計畫</strong>。聯邦 AI 研發經費由 2017 年 <code>1,470 萬歐元</code> 暴增 32 倍至 2024 年 <strong><code>4.833 億歐元</code></strong>。</li>
        <li><strong>科研與製造技術世界頂尖</strong>：德國 AI 科學出版物排名<strong>全球第 5</strong>（Hessian.AI、Max Planck、Fraunhofer、Siemens）；2022 年吸引國際 AI 工程師聚集於<strong>柏林（47,200 人）、慕尼黑（40,300 人）、斯圖加特（31,000 人）</strong>。此外，Lo & Lee (2024) 結構引力模型證實，扣除工資與 AI 後，<strong>德國的傳統純製造生產技術指數（ln T = 34.35）高居全球第 1</strong>！</li>
        <li><strong>主權算力建設</strong>：公部門推動 <strong>JUPITER</strong>（Exascale 超算與 JAIF 聯盟）、<strong>HammerHAI</strong>（HLRS + NVIDIA GB200 推論）；私部門於 Hanau 與 Offenbach 投資 <strong>80 億歐元</strong>建置資料中心，<strong>德國電信（Deutsche Telekom）與 NVIDIA</strong> 合作於 2026 年建置配備 <strong>10,000 顆 Nvidia GPU</strong> 之工業 AI 雲。</li>
      </ul>

      <h4>二、 工業創新貢獻與總體 NARDL 非線性成長實證</h4>
      <ul>
        <li><strong>產品與流程創新（Rammer et al., 2022, <em>Research Policy</em>）</strong>：使用 AI 與德國企業部門每年約 <strong><code>160 億歐元</code></strong> 的「全球首創產品創新（World-first product innovations）」銷售額相關（占全德全球首創創新總銷售額的 <strong><code>18%</code></strong>），並占企業年度流程創新總成本節省額的 <strong><code>6%</code></strong>。</li>
        <li><strong>預期生產力與管理者偏好（Licht & Wohlrabe, 2026）</strong>：德國企業預期未來 5 年 AI 將提升自身公司生產力平均 <strong><code>8.1%</code></strong>、提升總體經濟生產力 <strong><code>12.0%</code></strong>；且高階管理者的<strong>風險容忍度（+1.9 個百分點）與耐心（+1.6–1.8 個百分點）</strong>顯著提升企業採用 AI 的機率。</li>
        <li><strong>NARDL 非線性總體經濟成長動態（Athari et al., 2026, <em>Economies</em>）</strong>：分析 2012Q1–2022Q4 季資料（Bounds Test F=28.454），發現德國 AI 投資正向衝擊（<code>+0.0342***</code>）與負向調整（<code>+0.0356***</code>，反映削減浮誇實驗並重配置於員工訓練微調）皆顯著促進實質人均 GDP 成長；而<strong>勞動力參與（<code>+3.9872***</code>）是最大成長引擎</strong>，傳統實體資本形成（GFCF 正向衝擊 0.0891）則已不再顯著！</li>
        <li><strong>IMF 中期 TFP 預測（Misch et al., 2025）</strong>：首選情境下，預計未來 5 年 AI 將使德國 TFP 累積提升約 <strong><code>+1.5%</code></strong>（高於歐洲平均 1.1%）。</li>
      </ul>

      <h4>三、 五大結構性瓶頸與商會培訓應對</h4>
      <ul>
        <li><strong>84% 專家缺口與系統相容障礙</strong>：面臨高達 <strong>84% 的高階 AI 專家缺口</strong>（政府為此投入 <strong>60 億歐元</strong> 於員工再培訓與 AI 教育）；ECB (2025) 與 OECD (2024) 亦指出缺乏技能、現有系統不相容（23%）、開放資料封閉（Gaia-X 連結弱）、醫療隱私限制與受管制職業比例高（21.5%）為主要瓶頸。</li>
        <li><strong>商會三階認證與 KI-Scout（Eurochambres, 2026）</strong>：德國商工總會（DIHK/IHKs）推出對應歐洲資歷架構（EQF 4–6，100 至 1,250 小時）的三階 AI 實務師培訓與學徒「KI-Scout」計畫，協助中小企業跨越技能鴻溝。</li>
      </ul>
    `,
    related: [
      { label: "📚 檢視德國 8 篇文獻 (8 大欄位)", view: "literature", filterCountry: "Germany" },
      { label: "🇳🇱 對比：荷蘭專頁", view: "wiki-page", pageId: "netherlands" },
      { label: "🇩🇰 對比：丹麥專頁", view: "wiki-page", pageId: "denmark" },
      { label: "⚖️ 跨國異質性與調節機制 (H2/H3)", view: "wiki-page", pageId: "country-heterogeneity-and-moderators" }
    ]
  },
  "netherlands": {
    title: "🇳🇱 荷蘭（Netherlands）：歐元區最高採用率生態系、NL AIC 四螺旋與 AiNEd 戰略分析",
    categoryLabel: "國別與實體專頁 (Country Page)",
    filePath: "wiki/countries/netherlands.md",
    updated: "2026-11-16",
    sourcesCount: 5,
    htmlContent: `
      <div class="callout info">
        <div class="callout-title">🏆 荷蘭在歐洲 AI 擴散中的領先地位（ECB 2025 & Eurostat 2026 & OECD 2026）</div>
        <ul>
          <li><strong>歐元區總採用率與深度採用率雙冠王（ECB SAFE, 2025）</strong>：在歐元區 12 國逾 6,000 家企業調和調查中，荷蘭企業 AI 總使用率高達 <strong><code>85%</code></strong>（居歐元區第 1，領先德國 77% 與歐元區平均 71%）；更重要的是，荷蘭企業自評達到<strong>「顯著深度使用（Significant use）」的比例高達 <code>23%</code></strong>（為德國 7% 與歐元區平均 7% 的 <strong>3 倍以上</strong>！另有 38% 為中度使用）。</li>
          <li><strong>Eurostat (2026) 與產業採用率</strong>：在嚴格的 Eurostat 口徑下，2025 年荷蘭採用率達 <strong><code>33.0%</code></strong>（ICT 部門 <strong><code>66%</code></strong>、專業科學服務 <strong><code>57%</code></strong>、電力能源 <strong><code>55%</code></strong>、製造業 <strong><code>31%</code></strong>）。</li>
          <li><strong>廣義 AI 投資占 GDP 比重歐盟第一</strong>：Fonteneau et al. (2025) / 丹麥央行 (2026) 估計 2023 年荷蘭廣義 AI 相關投資占 GDP 高達約 <strong><code>2.3%</code></strong>（居歐盟之冠，高於丹麥 2.0% 與德國 1.4%）。</li>
        </ul>
      </div>

      <h4>一、 國家 AI 戰略演進與三大治理支柱（TNO Report, Lazo et al., 2023）</h4>
      <ul>
        <li><strong>政策演進（2011–2023）</strong>：歷經數位化政策、頂尖部門（Top sector）創新政策與科研政策，於 2018 年由非正式聯盟 AINED 發表《<em>AI voor Nederland</em>》行動呼籲，促成經濟事務與氣候政策部（MinEZK）於 <strong>2019 年 10 月發布《人工智慧策略行動計畫》（SAPAI）</strong>，圍繞「善用社會與經濟機會」、「創造正確基礎條件（技能、研究、資料）」與「強化公共價值與人權保障（推出荷蘭演算法登錄冊）」三大支柱。2023 年國會並針對政府政策科學委員會（WRR）《<em>Mission AI</em>》報告進行辯論。</li>
        <li><strong>荷蘭 AI 聯盟（NL AIC）</strong>：2019 年成立之「四螺旋（政府、產業、學界、公民社會）」公私協力樞紐，成員由 65 個激增至 2022 年的 <strong><code>475–500 個組織</code></strong>，設垂直產業工作組、水平工作組與區域 AI Hubs（如 Brightlands），獲 MinEZK 資助 <strong><code>2,350 萬歐元</code></strong>。</li>
        <li><strong>AiNEd 旗艦投資計畫</strong>：依托 200 億歐元國家成長基金（NGF），原規劃總生態系規模達 <strong><code>21 億歐元</code></strong>，2021 年獲批第一期 7 年 <strong><code>2.76 億歐元</code>（含合作夥伴出資達 <code>4.47 億歐元</code>）</strong>，涵蓋四大子計畫：(1) 推動價值鏈與扶持新創；(2) <strong>20+ 座 ELSA Labs（倫理、法律與社會面向生活實驗室）</strong> 吸引國際人才並促進歐洲參與；(3) 實務導向 AI 教育、在職員工再培訓（Re-training）與技能認證；(4) 跨計畫、區域 Hubs 與歐洲網路協作。</li>
        <li><strong>頂尖學術引擎（ICAI & ROBUST）</strong>：2018 年由阿姆斯特丹大學（UvA）與自由大學（VU）發起 <strong>ICAI</strong>，已建立 <strong>31 座公私合作 AI 實驗室</strong>（與 Philips、ASML/Bosch、ING、KLM、Ahold 等合作）；2023–2033 年啟動總預算 <strong><code>8,700 萬歐元</code> 的 ROBUST 長期計畫</strong>（新建 17 座實驗室、培育 170 名 AI 博士），搭配 TNO Appl.AI 計畫（6,500 萬歐元）。</li>
      </ul>

      <h4>二、 荷蘭微觀實證與產業生態系（OECD, 2026; RankmyAI, 2025）</h4>
      <ul>
        <li><strong>RankmyAI 1,200+ 本土 AI 企業生態（2025）</strong>：全球追蹤逾 25,000 個 AI 工具中，有 <strong><code>1,200 家</code>位於荷蘭本土</strong>，透過網站流量、使用者評價與融資數據評選出荷蘭 Top 250 與 Top 25 AI 工具。</li>
        <li><strong>OECD (2026) 荷蘭 30,295 家企業微觀實證（CBS LEED + SFO 財報）</strong>：
          <ul>
            <li><strong>規模與既有技術強度</strong>：250+ 人大企業採用 AI 機率比小企業高出 <strong><code>+35.1 個百分點</code></strong>（0.3508<sup>***</sup>），既有數位技術強度係數高達 <strong><code>+0.7546***</code></strong>。</li>
            <li><strong>高等教育與培訓之關鍵作用</strong>：荷蘭企業內<strong>大專以上高等教育員工比例每增加 1 個百分點，採用 AI 機率顯著增加 <code>+0.24 個百分點</code>（p<0.01）</strong>；聘用 ICT 專才（<code>+5.0 個百分點</code>）與提供非 ICT 員工培訓（<code>+5.8 個百分點</code>）亦顯著推升採用。</li>
            <li><strong>生產力溢酬與互補性</strong>：未控制互補資產時，荷蘭 AI 採用企業享有 <strong><code>+16.5%</code>（0.1653<sup>***</sup>）</strong> 的勞動生產力溢酬；一旦控制高等教育／ICT 專才、培訓與高速寬頻後，單獨 AI 係數降至 0.0140（不顯著），證明荷蘭的高生產力溢酬正是由其深厚的人力資本與數位基礎設施所驅動！</li>
          </ul>
        </li>
        <li><strong>治理摩擦與挑戰（TNO, 2023）</strong>：圩田共識決使 AiNed 撥款耗時逾 3 年；且經費交由傳統科研機構 NWO 審查導致執行偏向基礎科學研究，使新創企業仍面臨跨越 TRL 5「死亡之谷」與大企業高薪搶才的壓力。</li>
      </ul>
    `,
    related: [
      { label: "📚 檢視荷蘭相關文獻 (8 大欄位)", view: "literature", filterCountry: "Netherlands" },
      { label: "🇩🇪 對比：德國專頁", view: "wiki-page", pageId: "germany" },
      { label: "🇩🇰 對比：丹麥專頁", view: "wiki-page", pageId: "denmark" },
      { label: "⚖️ 跨國異質性與調節機制 (H2/H3)", view: "wiki-page", pageId: "country-heterogeneity-and-moderators" }
    ]
  },
  "denmark": {
    title: "🇩🇰 丹麥（Denmark）：歐盟最高採用率、職缺 BERT NLP 生產力實證與勞動市場暴露度分析",
    categoryLabel: "國別與實體專頁 (Country Page)",
    filePath: "wiki/countries/denmark.md",
    updated: "2026-11-16",
    sourcesCount: 5,
    htmlContent: `
      <div class="callout info">
        <div class="callout-title">🚀 丹麥：歐盟企業 AI 採用率第 1 名（42%）與全球 AI 準備度第 2 名</div>
        <ul>
          <li><strong>企業採用率快速躍升（Danmarks Nationalbank 2026 & IMF 2025）</strong>：丹麥 10 人以上企業使用至少一項 AI 技術的比例，由 2023 年 <code>15%</code>、2024 年 <code>25%–28%</code>，急劇攀升至 <strong>2025 年的 <code>42.0%</code>，高居歐盟第一名</strong>！且高達 <strong><code>58%</code></strong> 丹麥企業使用生成式 AI（遠高於歐盟 37% 與美國 36%）。</li>
          <li><strong>AI 投資占 GDP 2% 與準備度優勢</strong>：2023 年丹麥廣義 AI 投資約占 <strong>GDP 的 <code>2.0%</code></strong>；在 IMF AI 準備度指數（AIPI = 0.78）中排名<strong>全球第 2（全體先進國家第 1）</strong>。惟在 Stanford AI 活力指數（論文、專利、超算）排第 13 名（Top500 超算僅 1 台，AI VC 占 GDP 僅 0.1%），屬於典型的<strong>「高數位準備度＋高商業擴散應用型」</strong>經濟體。</li>
        </ul>
      </div>

      <h4>一、 微觀配對實證：職缺數位與 AI 技能對生產力與就業之動態影響（Jensen & Schneider, 2026, <em>Research Policy</em>）</h4>
      <ul>
        <li><strong>資料與 BERT NLP 方法</strong>：分析丹麥 2008–2019 年逾 7,500 家企業、<strong>449,389 筆（約 45 萬筆）線上徵才廣告</strong>，結合丹麥全國雇主—受僱者行政登記資料與動態領先—落後模型（Lead-Lag Model）。</li>
        <li><strong>對勞動生產力與 TFP 的強勁拉升（Tables 4 & 5）</strong>：
          <ul>
            <li>企業職缺中 <strong>Data Science & AI 技能需求占比每增加 <code>10 個百分點</code>，企業勞動生產力顯著提升 <code>0.63%</code>（γ = 0.063<sup>***</sup>，為一般數位技能 0.24% 的 2.6 倍以上）</strong>；</li>
            <li><strong>全要素生產力（TFP）更顯著提升 <code>1.01%</code>（γ = 0.101<sup>***</sup>，為一般數位技能 0.35% 的近 3 倍）</strong>！</li>
          </ul>
        </li>
        <li><strong>博士人力資本與跨職業／跨產業／跨區域異質性</strong>：
          <ul>
            <li>企業內<strong>博士（PhD）員工比例與 Data Science & AI 職缺呈極高度正相關（0.413<sup>***</sup>）</strong>；另根據 OECD (2026) 丹麥 LEED 實證，<strong>大專以上高等教育員工比例每增加 1%，丹麥企業採用 AI 機率顯著提高 <code>+0.53 個百分點</code></strong>，聘用 ICT 專才更提高 <code>+13.3 個百分點</code>！</li>
            <li>數位與 AI 技能投入帶來顯著的<strong>企業總就業、銷售額與附加價值淨成長</strong>（規模擴張效果大於替代效果），但投資後第 1 年伴隨短暫的員工流動率（Churning）上升。</li>
            <li><strong>高度集中性</strong>：一般數位技能在製造、貿易、營造與服務業皆帶來廣泛就業成長；但 <strong>Data Science & AI 的顯著正向就業成長高度集中於「專業技術與支援服務業」、高技能白領認知職業（經理、專業人員、技術員，峰值 +0.8%–1.4%）以及哥本哈根首都大區（峰值 +1.2%）</strong>。</li>
          </ul>
        </li>
      </ul>

      <h4>二、 總體 TFP 情境模擬與勞動市場暴露度／互補性分析（丹麥央行 2026 & IMF 2025）</h4>
      <ul>
        <li><strong>丹麥總體 TFP 成長預測</strong>：
          <ul>
            <li><strong>丹麥央行（2026, Chart 8）</strong>：依丹麥任務暴露度（39%–61%）與勞動成本份額（51%）模擬，預計未來 10 年 AI <strong>每年可提升丹麥 TFP 成長約 <code>0.1 至 1.0 個百分點</code></strong>（Bergeaud 基準參數為 <code>+0.4 pp/年</code>，對照丹麥過去 5 年年均 TFP 成長僅 0.5%，提振效果顯著）。</li>
            <li><strong>IMF 歐洲 31 國模擬（Misch et al., 2025）</strong>：預計未來 5 年丹麥累積 TFP 提升達 <strong><code>+1.9%</code></strong>（高居歐洲前 4 名）。</li>
          </ul>
        </li>
        <li><strong>勞動市場暴露度與互補性（Renault, IMF 2025）</strong>：
          <ul>
            <li>產業採用率差距大（2024 年資通訊業 <code>70%</code>、專業科學服務 <code>45%</code>、製造業 <code>22%</code>、運輸業 <code>21%</code>；2025 年資通訊業更達 <code>79%</code>、商業服務 <code>50%</code>、製造業 <code>39%</code>、營建業 <code>24%</code>）。</li>
            <li><strong>逾 <code>60%</code>（<code>64%</code>）丹麥勞工處於高 AI 暴露職業</strong>（比歐洲平均高 9 個百分點）：其中 <strong><code>43%</code> 屬於「高暴露且高互補（HEHC，如醫護、教育、科學工程）」</strong>，將受惠於生產力提升；<strong>約 <code>20%–21%</code> 屬於「高暴露但低互補（HELC，如商業行政專業人員與事務員）」</strong>，面臨較高工作替代風險（2022–2024 年間丹麥翻譯職就業已大減 23%，軟體開發則成長 14%）。</li>
            <li><strong>公部門與教育優勢</strong>：公部門占丹麥就業 1/3，僅 13% 面臨替代風險且逾 50% 屬高互補受惠；<strong>高等教育（大專以上）勞工是最大受惠群體（HEHC 最高）</strong>。丹麥並於 2024 年 12 月推出《AI 策略方針》（公部門數位工作小組、開放丹麥語語料庫）與《SME:Digital》補助，結合 <strong>Flexicurity 彈性安全制度</strong>強化勞動力轉型韌性。</li>
          </ul>
        </li>
      </ul>
    `,
    related: [
      { label: "📚 檢視丹麥 3 篇文獻 (8 大欄位)", view: "literature", filterCountry: "Denmark" },
      { label: "🇩🇪 對比：德國專頁", view: "wiki-page", pageId: "germany" },
      { label: "🇳🇱 對比：荷蘭專頁", view: "wiki-page", pageId: "netherlands" },
      { label: "📈 AI 生產力與成長機制 (H1)", view: "wiki-page", pageId: "ai-productivity-and-growth" }
    ]
  },
  "eu-oecd": {
    title: "🇪🇺 歐盟與 OECD（EU & OECD）：跨國政策架構、Panel ARDL 實證與結構異質性",
    categoryLabel: "國別與區域專頁 (Regional & OECD Page)",
    filePath: "wiki/countries/eu-oecd.md",
    updated: "2026-11-16",
    sourcesCount: 14,
    htmlContent: `
      <h4>一、 歐盟政策架構（AI Act & InvestAI）與法規生產力折損模擬</h4>
      <ul>
        <li><strong>2024《歐盟 AI 法案》（EU AI Act）與 2025「InvestAI」倡議</strong>：歐盟建立以風險分級與算力門檻（10<sup>25</sup> FLOPS）為核心的監管框架；為縮小美歐私人投資差距（2021–2025 美國 AI 創投 5,800 億美元 vs. 歐盟 760 億美元），2025 年啟動 <strong><code>2,000 億歐元</code> InvestAI 倡議</strong>（含 200 億歐元建置配備 10 萬顆高效能晶片的 AI 超級工廠 Gigafactories）與科研／工業開源 AI Hubs。</li>
        <li><strong>法規對 TFP 的折損效應（Misch et al., IMF 2025）</strong>：IMF 模擬顯示，資料隱私法（GDPR）使歐洲 AI 生產力增益減少約 <code>10%</code>，EU AI Act 與國家職業執照管制各減少約 <code>15%–20%</code>，<strong>三項法規合計可能使歐洲潛在 AI 生產力成長縮減超過 <code>30%</code>（逾 35%）</strong>！</li>
      </ul>

      <h4>二、 歐盟與 OECD 跨國總體計量實證總覽表</h4>
      <div class="table-responsive">
        <table class="wiki-table">
          <thead>
            <tr>
              <th>代表文獻</th>
              <th>樣本與期間</th>
              <th>計量模型</th>
              <th>核心實證發現與係數</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Duarte, Freitas, & Simões (2026, <em>Notas Económicas</em>)</strong></td>
              <td>OECD 35 國<br/>(1995–2017, N=680–700)</td>
              <td>Panel ARDL + Diff-GMM / Sys-GMM</td>
              <td>• <strong>申請人 AI 專利</strong>：短期 <code>+0.0639***</code>、長期 <code>+0.0724***</code> 顯著提升實質人均 GDP。<br/>• <strong>發明人 AI 專利</strong>：短期 <code>+0.0547**</code>、長期 <code>+0.0584***</code>。<br/>• <strong>Scopus AI 論文存量</strong>：短期 <code>+0.228***</code>、長期 <code>+0.128***</code>，且與人力資本長期交乘項（<code>log h × log ai^PUB</code>）顯著為正（<code>+0.108***</code>）！<br/>• <strong>製造業占 GDP 比重（Δinds）</strong>：一致顯著為正（<code>+0.018* 至 +0.029***</code>）。</td>
            </tr>
            <tr>
              <td><strong>Parteka & Kordalska (2023, <em>Technovation</em>)</strong></td>
              <td>OECD 35 國 + 非 OECD 28 國<br/>(1985–2017)</td>
              <td>FE-OLS + 6 種 IV-GMM</td>
              <td>• 2016 年前 AI 專利僅占 OECD 總專利 1.80%，對每工時勞動生產力成長不顯著（現代生產力悖論）。<br/>• 但 <strong>Scopus AI 科學出版物存量</strong>在 OECD 35 國與全球 63 國所有 IV-GMM 模型中<strong>全面顯著提升勞動生產力成長（<code>+0.014* 至 +0.026***</code>）</strong>！</td>
            </tr>
            <tr>
              <td><strong>Kalai, Becha, & Helali (2024, <em>J. Econ. Struct.</em>)</strong></td>
              <td>歐洲 30 國<br/>(2000–2021, N=660)</td>
              <td>PMG-ARDL & PMG-NARDL + Granger</td>
              <td>• 對稱模型：AI 專利短期（<code>+0.200**</code>）與長期（<code>+0.217***</code>）顯著促進實質 GDP 成長。<br/>• 非對稱模型：長期正向衝擊 <code>+0.026***</code>、負向衝擊 <code>-0.029**</code>；且 <code>AI+ ↔ GDPG</code> 具雙向正向因果循環。</td>
            </tr>
            <tr>
              <td><strong>Colajanni et al. (2026, Eurochambres WP #3)</strong></td>
              <td>歐洲 32 國 × 31 部門<br/>(2021–2024, N=11,692)</td>
              <td>高維度面板固定效果 (FE)</td>
              <td>• 部門 AI 採用率每增 1 個百分點，企業勞動生產力顯著提升 <strong><code>0.29%–0.33%</code></strong>（<code>0.286**</code> / <code>0.331**</code>）。<br/>• 以「AI 影像辨識」、「AI 流程自動化」與「行銷與銷售用途」效果最強（係數約 0.5）。</td>
            </tr>
            <tr>
              <td><strong>Gambacorta et al. (2025/2026, BIS / CEPR)</strong></td>
              <td>全球 56 經濟體 × 16 產業<br/>(2022–2023, N=875)</td>
              <td>Rajan & Zingales 交互作用 FE</td>
              <td>• <code>國家 AI 準備度 (AIPI) × 產業 AI 暴露度 (AIIE)</code> 係數為 <strong><code>+3.043**</code></strong>（控制機器人後 <code>+3.140**</code>）。<br/>• AIPI 每增 1 個標準差，高暴露產業比低暴露產業附加價值成長高出約 <strong><code>2 個百分點</code></strong>。</td>
            </tr>
            <tr>
              <td><strong>Plikas, Trakadas, & Kenourgios (2024, Springer)</strong></td>
              <td>歐盟 27 國<br/>(2010–2020, N=297)</td>
              <td>PCA (<code>AI_PCA</code>) + Country FE + RLS</td>
              <td>• AI 技術發展與 <code>AI_PCA</code> 直接促進 GDP 成長；數位普及僅提升勞動生產力而不直接影響 GDP；員工再培訓與 ICT 招募透過提升勞動生產力間接帶動 GDP 成長。</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    related: [
      { label: "📚 檢視歐盟與 OECD 全數文獻 (8 大欄位)", view: "literature", filterCountry: "EU-OECD" },
      { label: "📐 計量方法比較與變數對齊", view: "wiki-page", pageId: "methodology-and-variables" },
      { label: "🚢 AI 產業創新與國際貿易出口", view: "wiki-page", pageId: "ai-innovation-and-trade" }
    ]
  },
  "ai-productivity-and-growth": {
    title: "📈 概念綜合：AI 對生產力（TFP／勞動生產力）與經濟成長之影響機制（支撐 H1）",
    categoryLabel: "核心概念專頁 (Concept Page)",
    filePath: "wiki/concepts/ai-productivity-and-growth.md",
    updated: "2026-11-16",
    sourcesCount: 14,
    htmlContent: `
      <h4>一、 H1 三大理論傳導管道與實證對應</h4>
      <ol>
        <li><strong>自動化與任務互補增能（Automation & Task Complementarity）</strong>：Acemoglu (2024) 與 Misch et al. (IMF, 2025) 指出，AI 一方面取代部分例行任務，另一方面提升人類在互補性任務上的邊際勞動生產力。在丹麥微觀實證中（Jensen & Schneider, 2026），Data Science & AI 職缺占比每增加 10 個百分點，企業勞動生產力提升 <strong><code>+0.63%</code></strong>、全要素生產力（TFP）提升 <strong><code>+1.01%</code></strong>；在歐洲 32 國部門實證中（Eurochambres, 2026），AI 採用率每增加 1 個百分點，勞動生產力提升 <strong><code>+0.29%–0.33%</code></strong>。</li>
        <li><strong>降低生產與營運成本（Cost Reduction）</strong>：在德國 CIS 企業實證中（Rammer et al., 2022），AI 支援的流程創新占德國企業部門年度總成本節省額的 <strong><code>6%</code></strong>；Acemoglu (2024) 與 IMF (2025) 校準微觀實驗顯示，受 AI 自動化之任務平均可降低 <strong><code>27%</code></strong> 的勞動成本（折合總生產成本降低約 15%）。</li>
        <li><strong>促進知識創造與首創產品創新（Knowledge Creation & Innovation）</strong>：AI 作為「發明方法之發明（IMI）」，在德國與每年 <strong><code>160 億歐元</code></strong> 的全球首創產品創新銷售額相關（占 18%）；在義大利企業調查中（Eurochambres, 2026），採用客製化／結合研發之 AI 工具使高達 <strong><code>58.8%</code></strong> 企業得以開發全新業務活動，並使預期營收成長機率顯著高出 <code>+5.1 至 +6.0 個百分點</code>。</li>
      </ol>

      <h4>二、 解決「現代生產力悖論（Modern Productivity Paradox）」與「生產力 J 曲線」之文獻對話</h4>
      <div class="callout info">
        <div class="callout-title">🔍 為什麼早期研究看不出 AI 專利效果，而近期研究與論文存量卻極度顯著？（論文第 2 章文獻回顧重點！）</div>
        <ul>
          <li><strong>Parteka & Kordalska (2023, <em>Technovation</em>) 的發現</strong>：使用 1985–2016 年資料與 FE-OLS / IV-GMM 時，發現 AI 專利（當時僅占 OECD 總專利 1.80%）對每工時勞動生產力成長不顯著，但<strong>「Elsevier/Scopus AI 科學出版物存量」卻在所有模型中高度顯著為正（<code>+0.014* 至 +0.026***</code>）</strong>，因為科學論文比專利更能捕捉未申請專利的演算法與軟體創新。</li>
          <li><strong>Duarte, Freitas, & Simões (2026, <em>Notas Económicas</em>) 的突破</strong>：採用相同的 OECD 35 國資料，但改用<strong>動態面板 ARDL（Panel ARDL）搭配一階差分 GMM（Diff-GMM）</strong>分離短期調整與長期均衡，成功證實<strong>申請人 AI 專利（短期 <code>+0.0639***</code>、長期 <code>+0.0724***</code>）、發明人 AI 專利（短期 <code>+0.0547**</code>、長期 <code>+0.0584***</code>）與 AI 論文存量（短期 <code>+0.228***</code>、長期 <code>+0.128***</code>）皆對實質人均 GDP 具高度顯著正向影響</strong>！</li>
          <li><strong>OECD (2026) 的「生產力 J 曲線（Brynjolfsson et al., 2021）」驗證</strong>：通用目的技術（GPT）導入初期，企業必須投入大量資本與勞動力累積無形資產（員工培訓、軟體整合、流程重組），導致短期帳面 TFP 被低估；唯有當人力資本與技術資本到位後，AI 的生產力回報才會全面釋放。</li>
        </ul>
      </div>
    `,
    related: [
      { label: "⚖️ 跨國異質性與調節機制 (H2/H3)", view: "wiki-page", pageId: "country-heterogeneity-and-moderators" },
      { label: "📐 計量方法比較與變數對齊", view: "wiki-page", pageId: "methodology-and-variables" },
      { label: "📚 檢視 H1 相關文獻", view: "literature" }
    ]
  },
  "country-heterogeneity-and-moderators": {
    title: "⚖️ 概念綜合：跨國異質性（H2）與調節機制（H3：人力資本、產業結構、薪資與法規）",
    categoryLabel: "核心概念專頁 (Core Thesis Page)",
    filePath: "wiki/concepts/country-heterogeneity-and-moderators.md",
    updated: "2026-11-16",
    sourcesCount: 16,
    htmlContent: `
      <div class="callout">
        <div class="callout-title">🎯 本論文最核心假設（H2 & H3）之文獻實證大綜合</div>
        <p>本研究的核心定位是證明「<strong>AI 的經濟成長效果存在顯著的跨國異質性（H2）</strong>」，並由「<strong>人力資本（25–64 歲大專以上教育比例）</strong>」與「<strong>產業結構（各產業占 GVA 比例）</strong>」所調節（H3）。以下為知識庫 22 篇文獻提煉出的四大調節機制鐵證：</p>
      </div>

      <h4>一、 調節機制 1：人力資本（高等教育比例、博士人才、ICT 專才與員工再培訓）</h4>
      <ul>
        <li><strong>微觀採納率彈性（OECD 2026 LEED 實證）</strong>：企業內<strong>大專以上高等教育員工比例每增加 1 個百分點，採用 AI 的機率在丹麥顯著增加 <code>+0.53 個百分點</code>、在荷蘭顯著增加 <code>+0.24 個百分點</code></strong>；而在丹麥職缺配對研究中（Jensen & Schneider, 2026），<strong>博士（PhD）員工比例與 Data Science & AI 需求呈極高度正相關（0.413<sup>***</sup>）</strong>。</li>
        <li><strong>生產力溢酬的「完全中介／調節」現象（OECD 2026 Table A C.11 vs. A C.16）</strong>：未控制人力與技術資本時，AI 採用企業在荷蘭（<code>+16.5%***</code>）、丹麥（<code>+11.5%***</code>）、德國（<code>+7.9%**</code>）均享有顯著生產力溢酬；一旦控制 ICT 專才、員工培訓與技術強度後，單獨 AI 係數全部變為不顯著，證明<strong>AI 必須透過高技能人力資本與培訓的互補才能轉化為生產力</strong>！</li>
        <li><strong>總體 Panel ARDL 長期交互作用（Duarte et al., 2026 Table 17）</strong>：在 OECD 35 國 Diff-GMM 模型中，<strong><code>人力資本 (log h) × AI 科學出版物 (log ai^PUB)</code> 的長期交乘項顯著為正（<code>+0.108***</code>，p<0.01）</strong>，證實唯有具備深厚人力資本的國家，才能在長期將 AI 科研知識轉化為實質人均 GDP 成長。</li>
        <li><strong>高暴露高互補（HEHC）與高薪資誘因（IMF 2025）</strong>：Renault (2025) 證明大專以上高學歷勞工集中在「高暴露且高互補（HEHC）」職位，最能從 AI 輔助中提升生產力；Misch et al. (2025) 更揭示高學歷勞工對應較高工資（每高 1 歐元提升 AI 採用率 <code>+0.75 個百分點</code>），使高工資高人力資本國家（如丹麥、德國、荷蘭）企業有更強誘因導入 AI。</li>
      </ul>

      <h4>二、 調節機制 2：產業結構（知識密集服務業 vs. 高階製造業占 GVA 比例）</h4>
      <ul>
        <li><strong>Rajan & Zingales 跨國跨產業實證（Gambacorta et al., BIS/CEPR 2025）</strong>：<code>國家 AI 準備度 (AIPI) × 產業 AI 暴露度 (AIIE)</code> 交互作用係數高達 <strong><code>+3.043**</code></strong>；AIPI 每提高 1 個標準差，高知識密集度服務業（金融、教育、資通訊、專業服務）比低暴露產業的實質附加價值成長率高出約 <strong><code>2 個百分點</code></strong>。</li>
        <li><strong>雙軌產業成長路徑（德 vs. 荷／丹）</strong>：
          <ul>
            <li><strong>🇳🇱 荷蘭與 🇩🇰 丹麥（知識服務業與商業擴散路徑）</strong>：兩國高暴露服務業發達，且在 ECB (2025) 調查中，唯有在「ICT 與 R&D 部門」或達到「顯著深度使用（荷蘭占 23%）」的企業展現高達 <code>+22 至 +41 個百分點</code>的生產力提升機率；丹麥 Data Science & AI 的就業創造亦集中於「專業技術與支援服務業」。</li>
            <li><strong>🇩🇪 德國（高階製造業與首創產品路徑）</strong>：在 OECD 35 國 Panel ARDL 中（Duarte et al., 2026），<strong>製造業附加價值占 GDP 比重（Δinds）在所有模型中一致顯著促進經濟成長（<code>+0.018* 至 +0.029***</code>）</strong>，且使 AI 論文的短期成長效果轉為顯著！德國製造業（2024 ifo 採用率達 <code>31.0%</code>）透過將 AI 嵌入全球首創產品（160 億歐元）與工業自動化創造價值。</li>
          </ul>
        </li>
      </ul>

      <h4>三、 調節機制 3：法規制度、管理層特質與融資環境</h4>
      <ul>
        <li><strong>監管法規成本（IMF 2025）</strong>：國家職業執照管制（德國 21.5%、丹麥 15.7%、荷蘭 14.8%）、EU AI Act 與 GDPR 合計可能削減歐洲逾 <strong><code>30%</code></strong> 的潛在 AI 生產力成長。</li>
        <li><strong>管理層風險態度与同業競爭（Licht & Wohlrabe 2026; ECB 2025）</strong>：管理者風險容忍度與耐心顯著影響採用；且透過揭露同業真實投資率（ECB RCT 實驗）消除資訊摩擦，可直接提升企業 AI 投資率 <code>+1.8 個百分點</code>。</li>
      </ul>
    `,
    related: [
      { label: "🇩🇪 德國專頁", view: "wiki-page", pageId: "germany" },
      { label: "🇳🇱 荷蘭專頁", view: "wiki-page", pageId: "netherlands" },
      { label: "🇩🇰 丹麥專頁", view: "wiki-page", pageId: "denmark" },
      { label: "📐 計量方法與變數對齊", view: "wiki-page", pageId: "methodology-and-variables" }
    ]
  },
  "ai-innovation-and-trade": {
    title: "🚢 概念綜合：AI 與產業創新（產品／流程創新）及國際貿易出口績效",
    categoryLabel: "核心概念專頁 (Concept Page)",
    filePath: "wiki/concepts/ai-innovation-and-trade.md",
    updated: "2026-11-16",
    sourcesCount: 4,
    htmlContent: `
      <h4>一、 AI 驅動企業產品與流程創新（Rammer et al., 2022, <em>Research Policy</em>）</h4>
      <ul>
        <li><strong>全球首創產品創新（World-first Product Innovations）</strong>：在德國 CIS 2018（N=6,283–6,738）加權 Probit / Tobit 實證中，儘管 2019 年僅 5.8% 企業積極使用 AI，但使用 AI 與每年約 <strong><code>160 億歐元</code></strong> 的全球首創產品創新銷售額相關，占德國全球首創創新總銷售額的 <strong><code>18%</code></strong>。</li>
        <li><strong>流程創新與成本節省（Process Innovations）</strong>：AI 支援的流程創新占德國企業部門年度總成本節省額的 <strong><code>6%</code></strong>；且結合多種 AI 方法與累積較長使用經驗的企業，創新回報顯著更高。</li>
      </ul>

      <h4>二、 AI、大數據分析與國際貿易出口績效（三大跨國實證）</h4>
      <div class="table-responsive">
        <table class="wiki-table">
          <thead>
            <tr>
              <th>研究文獻</th>
              <th>樣本與方法</th>
              <th>核心貿易與出口實證發現</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>Lo & Lee (2024, <em>Annals of Economics and Finance</em>)<br/>臺大羅竹平、清大李怡</strong></td>
              <td>全球 90+ 國雙邊貿易 (N=497,636) + OECD.AI 論文<br/>Eaton-Kortum 兩階段結構引力模型 + IV</td>
              <td>• <strong>AI 密集度貿易彈性達 <code>1.01%–1.30%</code></strong>：一國 AI 密集度（人均 AI 科學出版物）每增加 1%，出口額顯著增加 <strong><code>1.01% 至 1.30%（1.33%）</code></strong>！<br/>• <strong>解釋過半跨國出口變異</strong>：傳統生產技術與工資解釋 <code>47%</code> 出口能力變異，而<strong>「AI 密集度（<code>44%</code>）＋數位化密集度（<code>9%</code>）」合計解釋高達 <code>53%</code></strong>！<br/>• <strong>德國純生產技術世界第 1</strong>：扣除工資與 AI 後，德國純製造技術指數（ln T = 34.35）高居全球第 1。</td>
            </tr>
            <tr>
              <td><strong>Wagner (2024/2025, <em>Open Economies Review</em>)</strong></td>
              <td>歐盟 27 國製造業企業 (N=2,355)<br/>Probit (AME) & OLS</td>
              <td>• 使用大數據分析（資料探勘與預測分析）的製造業企業，<strong>成為出口商機率顯著高出 <code>+12.2 個百分點</code></strong>，出口至全球 7 大區域機率全面提升 <code>+9.5 至 +16.3 個百分點</code>，平均出口目的地數量多出 <strong><code>+0.717 個區域</code>（增幅 46%）</strong>。<br/>• 2020 年初製造業大數據採用率：<strong>丹麥 <code>21.33%</code> ＞ 荷蘭 <code>16.36%</code> ＞ 歐盟平均 <code>13.80%</code> ＞ 德國 <code>5.41%</code></strong>。</td>
            </tr>
            <tr>
              <td><strong>Lahmeri (2025, <em>UIECD</em>)</strong></td>
              <td>OECD 15 國 (2013–2023, N=165)<br/>Westerlund 共整合 + MMQR 動差分位數迴歸</td>
              <td>• AI 投資、R&D 與出口占 GDP 比例具穩健長期共整合關係。<br/>• <strong>短期壓抑 vs. 波動穩定器</strong>：短期內 AI 投資因轉型調整成本對出口水準具負向壓抑（Location = <code>-0.1576***</code>），但<strong>顯著降低出口波動性（Scale = <code>-0.0603**</code>），發揮穩定貿易績效的功能</strong>！</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    related: [
      { label: "📚 檢視貿易與創新文獻 (8 大欄位)", view: "literature" },
      { label: "🇩🇪 德國專頁", view: "wiki-page", pageId: "germany" },
      { label: "🇪🇺 歐盟與 OECD 專頁", view: "wiki-page", pageId: "eu-oecd" }
    ]
  },
  "methodology-and-variables": {
    title: "📐 概念與方法綜合：文獻計量方法比較與本研究變數設計對齊",
    categoryLabel: "研究方法專頁 (Methodology Page)",
    filePath: "wiki/concepts/methodology-and-variables.md",
    updated: "2026-11-16",
    sourcesCount: 18,
    htmlContent: `
      <h4>一、 文獻計量經濟模型全覽與對本研究之借鏡</h4>
      <div class="table-responsive">
        <table class="wiki-table">
          <thead>
            <tr>
              <th>計量模型與估計法</th>
              <th>代表文獻</th>
              <th>解決之計量問題與優勢</th>
              <th>對本研究論文架構之直接應用</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><strong>面板固定效果模型 (Panel FE) + Hausman Test + PCA + RLS</strong></td>
              <td>• Plikas et al. (2024)<br/>• Eurochambres (2026)<br/>• OECD (2026)</td>
              <td>控制不隨時間改變的國家／產業未觀測異質性；以單根檢定與一階差分確保定態；以 PCA 濃縮共線性 AI 指標；以 RLS 排除極端值。</td>
              <td>本研究<strong>基礎模型（Baseline Panel Regression）</strong>與穩健性檢驗之標準配備。</td>
            </tr>
            <tr>
              <td><strong>動態面板 ARDL + 一階差分 GMM (Panel ARDL + Diff-GMM)</strong></td>
              <td>• Duarte, Freitas, & Simões (2026, <em>Notas Económicas</em>)</td>
              <td>同時分離 AI 對人均 GDP 的<strong>短期成長率效果（Δlog ai）</strong>與<strong>長期水準效果（log ai<sub>t-1</sub>）</strong>，並以 Diff-GMM（搭配 Roodman 工具變數折疊法）處理落後依變數與反向因果內生性。</td>
              <td>本研究若欲區分短期轉型摩擦與長期成長效果時之<strong>最佳進階模型典範</strong>（且變數 100% 相同）。</td>
            </tr>
            <tr>
              <td><strong>對稱與非對稱面板共整合 (PMG-ARDL & PMG-NARDL)</strong></td>
              <td>• Kalai, Becha, & Helali (2024)<br/>• Athari et al. (2026, 德國 NARDL)</td>
              <td>允許短期動態跨國異質、長期斜率同質，並將 AI 拆解為正向衝擊（AI<sup>+</sup>）與負向衝擊（AI<sup>-</sup>）檢驗非線性與非對稱性。</td>
              <td>可用於探討德國、荷蘭、丹麥在 AI 擴張期與調整期的非對稱反應。</td>
            </tr>
            <tr>
              <td><strong>Rajan & Zingales (1998) 交互作用模型 (Interaction Effects)</strong></td>
              <td>• Gambacorta et al. (2025/2026, BIS/CEPR)<br/>• Duarte et al. (2026)</td>
              <td>透過 <code>AI 指標 × 國家人力資本／產業結構／準備度</code> 交乘項，在控制國家與時間固定效果下嚴格識別調節機制。</td>
              <td>直接支撐本研究 <strong>H2 與 H3 異質性交互作用模型（Interaction Effects）</strong>！</td>
            </tr>
            <tr>
              <td><strong>永續盤存法知識存量 (Perpetual Inventory Method, PIM) + IV-GMM</strong></td>
              <td>• Parteka & Kordalska (2023, <em>Technovation</em>)<br/>• Duarte et al. (2026)</td>
              <td>以 AI<sup>ST</sup><sub>i,t</sub> = AI<sub>i,t</sub> + (1-δ)AI<sup>ST</sup><sub>i,t-1</sub>（折舊率 δ = 15%）將年度專利与論文流量轉化為「累積知識存量」，使 Scopus AI 論文效果高度顯著！</td>
              <td><strong>重要實證技巧</strong>：若本研究中 Scopus AI 論文當期流量不顯著，改用 15% 折舊率計算之「知識存量」或取落後項即可大幅提升顯著性！</td>
            </tr>
            <tr>
              <td><strong>自然語言處理 (BERT NLP) + 動態領先—落後模型 (Lead-Lag)</strong></td>
              <td>• Jensen & Schneider (2026, <em>Research Policy</em>)</td>
              <td>檢驗投資前後 [-4, +4] 年動態軌跡，驗證事前平行趨勢（無預期偏誤）與事後 1–4 年遞延效果。</td>
              <td>提醒本研究在面板迴歸中考慮 AI 專利／論文對 GDP 的 <strong>1–3 年遞延落後效果（Lagged effects）</strong>。</td>
            </tr>
          </tbody>
        </table>
      </div>
    `,
    related: [
      { label: "📊 回到研究全局綜述與變數表", view: "overview" },
      { label: "📈 AI 生產力與成長機制 (H1)", view: "wiki-page", pageId: "ai-productivity-and-growth" },
      { label: "⚖️ 跨國異質性與調節機制 (H2/H3)", view: "wiki-page", pageId: "country-heterogeneity-and-moderators" }
    ]
  }
};

window.WIKI_DATA.schemaHtml = `
  <div class="callout info">
    <div class="callout-title">📌 為什麼需要 <code>AGENTS.md</code>？（The Schema Layer）</div>
    <p>在 Andrej Karpathy 的 <strong>LLM Wiki</strong> 架構中，<code>AGENTS.md</code> 是讓 AI Agent 從「每次重頭檢索的聊天機器人」蛻變為「<strong>嚴謹的知識庫與網站維護者（Disciplined Wiki Maintainer）</strong>」的核心設定檔。任何 AI 讀完這份檔案後，都能立即理解本專案的架構、8 大必填文獻格式與網頁同步流程。</p>
  </div>
  <h4>一、 三層式架構與職責分工</h4>
  <ul>
    <li><strong>第一層：<code>RAW/</code>（唯讀真實來源 Immutable Raw Sources）</strong>：存放 <code>文獻蒐集總覽.pdf</code> 與全部 18 份下載之原始期刊論文／機構報告 PDF。AI 嚴禁修改或刪除。</li>
    <li><strong>第二層：<code>wiki/</code> 與前端網站 <code>index.html</code> + <code>assets/</code>（The Wiki & Web Layer）</strong>：由 AI 全權維護。包含 <code>index.md</code>（總目錄）、<code>log.md</code>（時間軸日誌）、<code>overview.md</code>、<code>countries/</code>（德、荷、丹、歐盟專頁）、<code>concepts/</code>（四大概念與方法頁）與 <code>sources/</code>（分類文獻深度摘要），並 100% 同步渲染至本網站。</li>
    <li><strong>第三層：<code>AGENTS.md</code>（The Schema）</strong>：定義檔案命名（英文小寫 <code>kebab-case</code>）、單篇文獻 8 大必填欄位與三大標準操作流程。</li>
  </ul>
  <h4>二、 單篇文獻「7 + 1 必填欄位」強制標準</h4>
  <p>無論是頂尖期刊論文或政府／央行／國際組織政策報告（非論文報告亦不可遺漏），新增或修改任何一篇文獻時，皆須嚴格填寫以下 8 個結構化欄位：</p>
  <ol>
    <li><strong>① 來源／期刊（Source & Journal）</strong>：期刊名稱與等級／機構名稱、作者、年份、卷期頁碼、DOI／官方連結。</li>
    <li><strong>② 研究目的（Research Purpose）</strong>：核心學術或政策評估目標。</li>
    <li><strong>③ 研究問題（Research Questions）</strong>：具體探討之研究問題（RQs）。</li>
    <li><strong>④ 研究假設（Research Hypotheses）</strong>：明確列出之 H1–H5 假設或隱含理論預期。</li>
    <li><strong>⑤ 研究方法（Research Methodology — 資料與模型）</strong>：拆分為「📊 資料（樣本、期間、DV/IV/控制變數）」與「📐 模型（計量模型與估計法）」。</li>
    <li><strong>⑥ 研究結果（Research Findings）</strong>：具體統計採用率、迴歸係數、彈性、短長期與跨產業差異數據。</li>
    <li><strong>⑦ 研究限制（Research Limitations）</strong>：樣本期間（如 Old AI vs. GenAI）、內生性、聚合偏誤或模型假設限制。</li>
    <li><strong>⑧ 補充與對本研究之啟示（Implications for Our Thesis）</strong>：如何支撐本研究 H1、H2、H3 及跨文獻數據口徑差異說明。</li>
  </ol>
  <h4>三、 AI 持續維護之三大工作流（Ingest / Query / Lint）</h4>
  <ul>
    <li><strong>Ingest（攝取新文獻）</strong>：讀取 <code>RAW/</code> 新 PDF → 撰寫 8 大欄位寫入 <code>wiki/sources/</code> → 連動更新國別頁與概念頁 → 更新 <code>wiki/index.md</code> 與 <code>wiki/log.md</code> → <strong>同步寫入 <code>assets/wiki-data.js</code> 更新網頁</strong>。</li>
    <li><strong>Query（檢索與知識回存）</strong>：優先查閱 <code>wiki/index.md</code> 回答問題，並將新產出的跨國比較表或模型推導回存（File back）至 Wiki 與網頁。</li>
    <li><strong>Lint（健康檢查）</strong>：定期檢查所有文獻是否具備完整 8 大欄位、跨頁連結是否有效、口徑差異是否標註警語，以及 Markdown 與網頁資料是否 100% 同步。</li>
  </ul>
`;

window.WIKI_DATA.logHtml = `
  <div class="lit-field highlight" style="margin-bottom:16px;">
    <div class="lit-field-label">## [2026-11-16] ingest | 全文精讀 RAW/ 19 份原始文獻檔案並升級為「單篇 8 大必填欄位」與 GitHub Pages 互動式網站</div>
    <div class="lit-field-content">
      <ul>
        <li><strong>操作類型</strong>：<code>ingest</code> & <code>lint</code></li>
        <li><strong>讀取來源</strong>：完整精讀 <code>RAW/</code> 目錄下全部 19 份原始檔案（含 <code>文獻蒐集總覽.pdf</code> 及 18 份期刊論文／工作論文／央行與智庫報告全文，共計 <strong>22 篇獨立文獻</strong>）與 <code>僅供參考/量化研究法論文架構.pdf</code>。</li>
        <li><strong>影響檔案</strong>：
          <ul>
            <li>更新規範與索引：<code>AGENTS.md</code>、<code>wiki/index.md</code>、<code>wiki/log.md</code>、<code>wiki/overview.md</code></li>
            <li>升級 6 大文獻摘要頁（<code>wiki/sources/src-*.md</code>）：每篇文獻（含期刊論文與非論文政策報告）均完整具備 8 大必填欄位。</li>
            <li>建立並同步 GitHub Pages 網站：<code>index.html</code>、<code>assets/style.css</code>、<code>assets/app.js</code>、<code>assets/wiki-data.js</code>。</li>
          </ul>
        </li>
        <li><strong>關鍵知識編譯成果</strong>：
          <ol>
            <li>完成德國（8篇）、荷蘭（2篇+跨國3篇）、丹麥（3篇+跨國2篇）、歐盟與 OECD 及國際貿易（11篇）之全部 8 大欄位精確數據提取（含精確樣本數 N、模型方程式、迴歸係數、標準誤與研究限制）。</li>
            <li>建立跨文獻採用率口徑對照表（Eurostat 2026 嚴格口徑：丹麥 42% > 荷蘭 33% > 德國 26% > 歐盟 20%；ECB 2025 SAFE 廣義與三階深度口徑：荷蘭 85%［顯著 23%］vs. 德國 77%［顯著 7%］；德國 ifo 2024：27%［製造業 31%］；德國 CIS 2019：5.8%）。</li>
            <li>完整對齊本研究之依變數（實質人均 GDP 成長率）、三大自變數（OECD 申請人 AI 專利、發明人 AI 專利、Elsevier/Scopus AI 學術論文）與兩大調節變數（25–64 歲大專以上教育比例、製造業／知識服務業 GVA 占比）。</li>
          </ol>
        </li>
      </ul>
    </div>
  </div>
  <div class="lit-field">
    <div class="lit-field-label">## [2026-11-16] ingest | 初始化 LLM Wiki 三層式目錄架構</div>
    <div class="lit-field-content">
      <ul>
        <li><strong>操作類型</strong>：<code>ingest</code></li>
        <li><strong>摘要</strong>：依據 Karpathy LLM Wiki 模式建立 <code>RAW/</code>、<code>wiki/</code>（含 <code>countries/</code>、<code>concepts/</code>、<code>sources/</code>）與 <code>AGENTS.md</code> 基礎結構。</li>
      </ul>
    </div>
  </div>
`;
