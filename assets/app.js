(function () {
  const state = {
    currentView: 'database', // 'database' | 'paper' | 'summary-table' | 'hypothesis-picker' | 'wiki-page'
    previousView: 'database',
    currentLitId: 'G-5',
    currentPageId: 'germany',
    countryFilter: 'ALL',
    typeFilter: 'ALL',
    purposeFilter: 'ALL',
    searchQuery: ''
  };

  const mainEl = document.getElementById('mainContentArea');
  const searchInput = document.getElementById('globalSearchInput');
  const clearSearchBtn = document.getElementById('clearSearchBtn');
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const themeIcon = document.getElementById('themeIcon');

  // Purpose / Usage categories for each paper so the user can easily filter by research purpose!
  const PURPOSE_CATEGORIES = {
    'ALL': '全部用途',
    'H1_GROWTH': '📈 主效果：AI 促進經濟成長／生產力 (H1)',
    'MOD_HUMAN': '🎓 候選調節：人力資本／教育／技能培訓',
    'MOD_INDUSTRY': '🏭 候選調節：產業結構（製造 vs. 服務業）',
    'POLICY_STATS': '🏛️ 政策背景、各國採用率統計與法規阻礙',
    'MODEL_REF': '📐 計量模型範本（ARDL / NARDL / GMM / FE）',
    'INNOV_TRADE': '🚢 延伸：產品流程創新與國際貿易出口'
  };

  const PAPER_PURPOSES_MAP = {
    'G-1': ['POLICY_STATS', 'MOD_HUMAN'],
    'G-2': ['POLICY_STATS'],
    'G-3': ['POLICY_STATS', 'MOD_HUMAN', 'MOD_INDUSTRY'],
    'G-4': ['POLICY_STATS', 'MOD_INDUSTRY'],
    'G-5': ['POLICY_STATS', 'MOD_INDUSTRY', 'H1_GROWTH'],
    'G-6': ['H1_GROWTH', 'MODEL_REF', 'MOD_HUMAN'],
    'G-7': ['H1_GROWTH', 'MODEL_REF'],
    'G-8': ['H1_GROWTH', 'INNOV_TRADE', 'MOD_INDUSTRY'],
    'NL-1': ['POLICY_STATS', 'MOD_HUMAN'],
    'NL-2': ['POLICY_STATS', 'MOD_INDUSTRY'],
    'DK-1': ['H1_GROWTH', 'MOD_HUMAN', 'MOD_INDUSTRY', 'MODEL_REF'],
    'DK-2': ['H1_GROWTH', 'POLICY_STATS', 'MOD_INDUSTRY'],
    'DK-3': ['MOD_HUMAN', 'MOD_INDUSTRY', 'POLICY_STATS'],
    'EU-1': ['H1_GROWTH', 'MOD_INDUSTRY', 'MODEL_REF'],
    'EU-2': ['H1_GROWTH', 'MOD_HUMAN', 'MOD_INDUSTRY', 'MODEL_REF'],
    'EU-3': ['H1_GROWTH', 'MOD_HUMAN', 'MODEL_REF'],
    'EU-4': ['H1_GROWTH', 'MOD_HUMAN', 'MOD_INDUSTRY', 'MODEL_REF'],
    'EU-5': ['POLICY_STATS', 'H1_GROWTH', 'MOD_HUMAN', 'MOD_INDUSTRY'],
    'EU-6': ['H1_GROWTH', 'MOD_HUMAN', 'POLICY_STATS'],
    'EU-7': ['H1_GROWTH', 'MOD_INDUSTRY', 'MOD_HUMAN', 'MODEL_REF'],
    'EU-8': ['H1_GROWTH', 'MODEL_REF', 'MOD_HUMAN'],
    'TR-1': ['INNOV_TRADE', 'MOD_INDUSTRY'],
    'TR-2': ['INNOV_TRADE', 'MODEL_REF'],
    'TR-3': ['INNOV_TRADE', 'H1_GROWTH', 'MOD_HUMAN']
  };

  // One-line quick summary of what each paper gives us (shown on the database filter cards)
  const QUICK_SUMMARY = {
    'G-1': '盤點德國 AI 研發經費（暴增32倍至4.83億歐元）、全球第5論文實力、JUPITER 超算與五大轉型瓶頸。',
    'G-2': '追蹤德國落實《歐盟 AI 協調計畫》之資料管理、數位主權與互通性國家倡議進度。',
    'G-3': '提供德國 27% 採用率、84% 高階 AI 專家缺口、60 億歐元再培訓，與歐盟 2,000 億歐元 InvestAI 數據。',
    'G-4': '歐盟官方最新企業 AI 採用率基準：丹麥 42%（歐盟第1）＞ 荷蘭 33% ＞ 德國 26% ＞ 歐盟平均 20%。',
    'G-5': '德國 ifo 6,000+ 家企業調查：採用率由 13.3% 翻倍至 27%（製造業 31% 最高），管理者風險容忍與耐心顯著推動採用。',
    'G-6': '德國 2012Q1–2022Q4 NARDL 實證：AI 投資正負向調整皆顯著推升人均 GDP（+0.034%），勞動力彈性高達 +3.99。',
    'G-7': '歐洲 30 國 PMG-ARDL / NARDL 實證：OECD AI 專利對短期（+0.200**）與長期（+0.217***）GDP 成長具顯著正向與非對稱影響。',
    'G-8': '德國 CIS 企業創新頂刊：AI 與每年 160 億歐元「全球首創產品創新（占18%）」及 6% 流程成本節省顯著相關。',
    'NL-1': '深度解析荷蘭 SAPAI 國家戰略、NL AIC 四螺旋聯盟（500組織）、AiNed 計畫（4.47–21億歐元）與 ICAI 31座實驗室。',
    'NL-2': '追蹤荷蘭本土逾 1,200 家 AI 工具與新創企業，展現荷蘭強大的商業 AI 軟體供給生態。',
    'DK-1': '丹麥 45 萬筆職缺 BERT NLP 頂刊：AI 技能需求每增 10%，提升企業勞動生產力 +0.63%、TFP +1.01%，且與博士比例高度相關。',
    'DK-2': '丹麥央行報告：2025 丹麥採用率 42% 居歐盟之冠、生成式 AI 達 58%，模擬未來 10 年 AI 每年提升丹麥 TFP +0.1 至 +1.0 個百分點。',
    'DK-3': 'IMF 丹麥勞動市場研究：64% 勞工處於高 AI 暴露（43% 高互補受惠如醫護教育工程 vs. 21% 高替代風險），大專高學歷最受惠。',
    'EU-1': '歐洲 32 國 × 31 部門固定效果實證：部門 AI 採用率每增 1%，企業勞動生產力顯著提升 +0.29%–0.33%（影像辨識與自動化最強）。',
    'EU-2': 'OECD 15 國微觀 LEED 實證：大專員工每增 1% 提升丹麥 AI 採用 +0.53%、荷蘭 +0.24%；抽離人力資本後 AI 生產力溢酬即消失。',
    'EU-3': '歐盟 27 國 Country FE + PCA 實證：AI 技術直接促進 GDP 成長，員工培訓與 ICT 招募透過提升勞動生產力間接帶動 GDP。',
    'EU-4': 'OECD 35 國 Panel ARDL + Diff-GMM：申請人/發明人 AI 專利與 AI 論文存量顯著促進短長期人均 GDP，且「人力資本×AI論文」長期交乘項顯著為正！',
    'EU-5': '歐洲央行 12 國 SAFE 調查：荷蘭總採用率 85%（顯著深度使用 23%）遠超德國 77%（顯著僅 7%）；缺乏 AI 技能（25%）為頭號阻礙。',
    'EU-6': 'IMF 歐洲 31 國生產力模擬：5 年累積提升 TFP 約 1.1%（丹麥 +1.9%、德國 +1.5%、荷蘭 +1.35%），但三大法規削減逾 30% 潛在增益。',
    'EU-7': 'BIS/CEPR 56 國 Rajan-Zingales 交互作用模型：國家 AI 準備度（AIPI）× 產業暴露度（AIIE）顯著推升產業實質附加價值成長（+3.043**）。',
    'EU-8': 'Technovation 全球 63 國 IV-GMM 頂刊：解釋早期 AI 專利生產力悖論，並證實「Scopus AI 科學出版物存量」對勞動生產力成長高度顯著為正！',
    'TR-1': '歐盟 27 國製造業實證：使用大數據與預測分析使成為出口商機率高出 +12.2 個百分點，出口區域數多出 +0.717 個（丹麥採用率 21.3% > 荷蘭 16.4% > 德國 5.4%）。',
    'TR-2': 'OECD 15 國 MMQR 分位數迴歸：AI 投資短期雖有轉型調整成本，但能顯著降低出口波動性（Scale = -0.0603**），發揮貿易穩定器效果。',
    'TR-3': '臺大羅竹平＆清大李怡結構引力模型：AI 密集度每增 1% 帶動出口成長 1.01%–1.30%，「AI 密集度(44%)+數位化(9%)」解釋全球 53% 出口能力變異，德國純製造技術居全球第1。'
  };

  // Citation patterns -> Literature ID for automatic hyperlinking in synthesis pages
  const CITATION_RULES = [
    { id: 'G-8', regex: /Rammer\s+et\s+al\.,?\s*\(?2022(?:,\s*<em>Research Policy<\/em>)?\)?|CIS\s+2018\s*曼海姆創新調查/g },
    { id: 'G-5', regex: /Licht\s*&\s*Wohlrabe,?\s*\(?2026\)?|ifo\s*2024|2024\s*ifo\s*調查/g },
    { id: 'G-6', regex: /Athari\s+et\s+al\.,?\s*\(?2026(?:,\s*<em>Economies<\/em>|,\s*德國\s*NARDL)?\)?|NARDL\s*\(2026\)/g },
    { id: 'G-7', regex: /Kalai,\s*Becha,\s*&\s*Helali\s*\(?2024(?:,\s*<em>J\.\s*Econ\.\s*Struct\.<\/em>)?\)?/g },
    { id: 'G-1', regex: /OECD,?\s*\(?2024\)?/g },
    { id: 'G-2', regex: /EU\s+Plan,?\s*\(?2025\)?/g },
    { id: 'G-4', regex: /Eurostat\s*\(?2026\)?|2025\s*Eurostat/g },
    { id: 'NL-1', regex: /Lazo\s+et\s+al\.,?\s*\(?2023\)?|TNO,?\s*\(?2023\)?/g },
    { id: 'NL-2', regex: /RankmyAI,?\s*\(?2025\)?/g },
    { id: 'DK-1', regex: /Jensen\s*&\s*Schneider,?\s*\(?2026(?:,\s*<em>Research Policy<\/em>)?\)?|職缺\s*NLP\s*實證/g },
    { id: 'DK-2', regex: /Danmarks\s+Nationalbank\s*\(?2026\)?|丹麥央行\s*\(?2026(?:,\s*Chart\s*8)?\)?|2025\s*丹麥央行/g },
    { id: 'DK-3', regex: /Renault,?\s*\(?(?:IMF\s*)?2025\)?/g },
    { id: 'EU-1', regex: /Colajanni\s+et\s+al\.\s*\(?2026(?:,\s*Eurochambres\s*WP\s*#3)?\)?|Eurochambres\s*\(?202[56]\)?|Eurochambres\s*32\s*國\s*FE/g },
    { id: 'EU-2', regex: /Calvino,\s*Costa,\s*&\s*Haerle\s*\(?2026\)?|OECD\s*\(?2026\)(?:\s*(?:LEED|微觀|Table\s*A\s*C\.11\s*vs\.\s*A\s*C\.16))?/g },
    { id: 'EU-3', regex: /Plikas,\s*Trakadas,\s*&\s*Kenourgios\s*\(?2024(?:,\s*Springer)?\)?|Plikas\s+et\s+al\.\s*\(?2024\)?/g },
    { id: 'EU-4', regex: /Duarte,\s*Freitas,\s*&\s*Simões\s*\(?2026(?:,\s*<em>Notas Económicas<\/em>)?\)?|Duarte\s+et\s+al\.,?\s*\(?2026(?:,\s*<em>Notas Económicas<\/em>|\s*Table\s*17)?\)?|OECD\s*35\s*國\s*Panel\s*ARDL/g },
    { id: 'EU-5', regex: /Ferrando\s+et\s+al\.,?\s*\(?2025\)?|ECB\s*(?:SAFE,?\s*)?\(?2025\)?|2025\s*ECB/g },
    { id: 'EU-6', regex: /Misch\s+et\s+al\.,?\s*\(?(?:IMF,?\s*)?2025\)?|IMF\s*\(?2025\)?/g },
    { id: 'EU-7', regex: /Gambacorta\s+et\s+al\.,?\s*\(?(?:2025\/2026,\s*)?(?:BIS\s*\/?\s*CEPR\s*(?:2025)?)?\)?|BIS\/CEPR\s*\(?2025\)?/g },
    { id: 'EU-8', regex: /Parteka\s*&\s*Kordalska\s*\(?2023(?:,\s*<em>Technovation<\/em>)?\)?/g },
    { id: 'TR-1', regex: /Wagner,?\s*\(?(?:2024\/)?2025(?:,\s*<em>Open Economies Review<\/em>)?\)?/g },
    { id: 'TR-2', regex: /Lahmeri,?\s*\(?2025(?:,\s*<em>UIECD<\/em>)?\)?/g },
    { id: 'TR-3', regex: /Lo\s*&\s*Lee,?\s*\(?2024(?:,\s*<em>Annals of Economics and Finance<\/em>)?\)?/g }
  ];

  function linkifyCitations(html) {
    if (!html) return '';
    let out = html;
    const tokens = [];
    CITATION_RULES.forEach(({ id, regex }) => {
      out = out.replace(regex, (match) => {
        const idx = tokens.length;
        tokens.push(
          `<a href="javascript:void(0)" class="cite-link" onclick="window.openPaper('${id}')" title="點擊進入 [${id}] 單篇論文閱讀頁">🔗 ${match} [${id}]</a>`
        );
        return `__CITE_LINK_${idx}__`;
      });
    });
    tokens.forEach((tag, idx) => {
      out = out.replace(`__CITE_LINK_${idx}__`, tag);
    });
    return out;
  }

  // Open a single paper cleanly, remembering previous view so "返回上一層" works seamlessly
  window.openPaper = function (litId) {
    if (state.currentView !== 'paper') {
      state.previousView = state.currentView;
    }
    state.currentView = 'paper';
    state.currentLitId = litId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSidebarActive();
    renderMain();
  };

  // Go back to previous layer (database filter results or synthesis table)
  window.goBackLayer = function (resetFilters = false) {
    if (resetFilters) {
      state.countryFilter = 'ALL';
      state.typeFilter = 'ALL';
      state.purposeFilter = 'ALL';
      state.searchQuery = '';
      if (searchInput) searchInput.value = '';
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
      state.currentView = 'database';
    } else {
      state.currentView = state.previousView || 'database';
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSidebarActive();
    renderMain();
  };

  window.clearAllFilters = function () {
    state.countryFilter = 'ALL';
    state.typeFilter = 'ALL';
    state.purposeFilter = 'ALL';
    state.searchQuery = '';
    if (searchInput) searchInput.value = '';
    if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    state.currentView = 'database';
    updateSidebarActive();
    renderMain();
  };

  window.openSynthesis = function (viewType, pageId) {
    state.currentView = viewType;
    if (pageId) state.currentPageId = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    updateSidebarActive();
    renderMain();
  };

  function updateSidebarActive() {
    document.querySelectorAll('#sidebarNav .nav-item').forEach((btn) => {
      const navType = btn.getAttribute('data-nav');
      const country = btn.getAttribute('data-country');
      const page = btn.getAttribute('data-page');

      let active = false;
      if (state.currentView === 'database') {
        if (navType === 'database' && state.countryFilter === 'ALL') active = true;
        if (navType === 'country-filter' && state.countryFilter === country) active = true;
      } else if (state.currentView === 'summary-table' && navType === 'summary-table') {
        active = true;
      } else if (state.currentView === 'hypothesis-picker' && navType === 'hypothesis-picker') {
        active = true;
      } else if (state.currentView === 'wiki-page' && navType === 'wiki-page' && state.currentPageId === page) {
        active = true;
      }
      btn.classList.toggle('active', active);
    });
  }

  function renderMain() {
    if (!window.WIKI_DATA) {
      mainEl.innerHTML = '<div class="section-block">載入資料庫中...</div>';
      return;
    }

    switch (state.currentView) {
      case 'database':
        renderDatabaseFilterHome();
        break;
      case 'paper':
        renderSinglePaperView(state.currentLitId);
        break;
      case 'summary-table':
        renderSummaryTableView();
        break;
      case 'hypothesis-picker':
        renderHypothesisPickerView();
        break;
      case 'wiki-page':
        renderWikiSynthesisView(state.currentPageId);
        break;
      default:
        renderDatabaseFilterHome();
    }
  }

  // =========================================================================
  // 1. HOME VIEW: LITERATURE DATABASE FILTER & RESULTS LIST (資料庫篩選首頁)
  // =========================================================================
  function renderDatabaseFilterHome() {
    const allLit = window.WIKI_DATA.literature || [];
    const hasActiveFilter = state.countryFilter !== 'ALL' || state.typeFilter !== 'ALL' || state.purposeFilter !== 'ALL' || state.searchQuery !== '';

    const filtered = allLit.filter((item) => {
      if (state.countryFilter !== 'ALL' && item.countryGroup !== state.countryFilter) return false;
      if (state.typeFilter !== 'ALL' && item.docType !== state.typeFilter) return false;
      if (state.purposeFilter !== 'ALL') {
        const itemPurposes = PAPER_PURPOSES_MAP[item.id] || [];
        if (!itemPurposes.includes(state.purposeFilter)) return false;
      }
      if (state.searchQuery) {
        const q = state.searchQuery.toLowerCase();
        const hay = [
          item.id, item.title, item.chineseTitle, item.authorsYear,
          item.sourceJournal, item.purpose, item.questions, item.hypotheses,
          item.data, item.model, item.findings, QUICK_SUMMARY[item.id] || ''
        ].join(' ').toLowerCase();
        if (!hay.includes(q)) return false;
      }
      return true;
    });

    const paperCount = allLit.filter(i => i.docType === 'Paper').length;
    const reportCount = allLit.filter(i => i.docType === 'Report').length;

    mainEl.innerHTML = `
      <!-- Filter Box -->
      <div class="filter-bar">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;padding-bottom:10px;border-bottom:1px solid var(--border-color);">
          <div>
            <h2 style="font-size:19px;font-weight:700;color:var(--text-primary);margin-bottom:2px;">🔍 文獻知識庫篩選器（共收錄 ${allLit.length} 篇）</h2>
            <p style="font-size:13px;color:var(--text-muted);margin:0;">
              點選下方條件快速篩選你需要的論文，<strong>點擊任一篇即可進入獨立單篇閱讀頁</strong>（含 8 大項目與原文 PDF）。
            </p>
          </div>
          ${hasActiveFilter ? `
            <button class="reset-filter-btn" onclick="window.clearAllFilters()">
              🔄 清空所有篩選條件 (顯示全部 ${allLit.length} 篇)
            </button>
          ` : ''}
        </div>

        <!-- Row 1: Country -->
        <div class="filter-row">
          <span class="filter-label">🌍 國家地區：</span>
          ${[
            ['ALL', `全部 (${allLit.length})`],
            ['Germany', '🇩🇪 德國 (8篇)'],
            ['Netherlands', '🇳🇱 荷蘭 (2篇)'],
            ['Denmark', '🇩🇰 丹麥 (3篇)'],
            ['EU-OECD', '🇪🇺 歐盟與 OECD 跨國 (9篇)']
          ].map(([val, label]) => `
            <button class="filter-chip ${state.countryFilter === val ? 'active' : ''}" data-f-country="${val}">${label}</button>
          `).join('')}
        </div>

        <!-- Row 2: Paper vs Non-Paper -->
        <div class="filter-row">
          <span class="filter-label">📑 文獻種類：</span>
          ${[
            ['ALL', `全部種類 (${allLit.length})`],
            ['Paper', `📘 期刊／學術論文 (${paperCount}篇)`],
            ['Report', `🏛️ 非期刊論文：政策／央行／機構報告 (${reportCount}篇)`]
          ].map(([val, label]) => `
            <button class="filter-chip ${state.typeFilter === val ? 'active' : ''}" data-f-type="${val}">${label}</button>
          `).join('')}
        </div>

        <!-- Row 3: Research Purpose / Usage -->
        <div class="filter-row">
          <span class="filter-label">🎯 論文用途：</span>
          ${Object.entries(PURPOSE_CATEGORIES).map(([val, label]) => `
            <button class="filter-chip ${state.purposeFilter === val ? 'active' : ''}" data-f-purpose="${val}">${label}</button>
          `).join('')}
        </div>
      </div>

      <!-- Filter Results Status Bar -->
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:14px;padding:0 4px;">
        <div style="font-size:14px;font-weight:600;color:var(--text-secondary);">
          📂 篩選結果：共找到 <strong style="color:var(--accent-primary);font-size:16px;">${filtered.length}</strong> 篇文獻
          ${hasActiveFilter ? `<span style="font-size:12.5px;color:var(--text-muted);margin-left:8px;">（已套用篩選條件）</span>` : ''}
        </div>
        ${hasActiveFilter ? `
          <button class="lit-toggle-btn" onclick="window.clearAllFilters()">✕ 重設篩選</button>
        ` : ''}
      </div>

      <!-- Compact, Clickable Result Cards -->
      <div class="db-results-list">
        ${filtered.length === 0 ? `
          <div class="section-block" style="text-align:center;padding:40px 20px;">
            <div style="font-size:16px;font-weight:600;margin-bottom:10px;">找不到符合目前篩選組合的文獻</div>
            <button class="raw-action-btn large" onclick="window.clearAllFilters()">🔄 點此清空所有篩選條件</button>
          </div>
        ` : filtered.map(item => {
          const itemPurposes = (PAPER_PURPOSES_MAP[item.id] || []).map(pKey => PURPOSE_CATEGORIES[pKey]);
          const typeBadge = item.docType === 'Paper'
            ? `<span class="badge badge-paper">📘 期刊／學術論文</span>`
            : `<span class="badge badge-report">🏛️ 非期刊（政策／機構報告）</span>`;

          return `
            <div class="db-result-card" onclick="window.openPaper('${item.id}')">
              <div class="db-card-main">
                <div class="lit-meta-top">
                  <span class="badge badge-country">${item.id} · ${item.countryLabel}</span>
                  ${typeBadge}
                  <span class="badge badge-method">方法：${item.methodBadge}</span>
                </div>
                <h3 class="db-card-zh-title">[${item.id}] ${item.chineseTitle}</h3>
                <div class="db-card-en-title">${item.title} — <strong>${item.authorsYear}</strong></div>
                <p class="db-card-summary">📌 <strong>核心重點：</strong>${QUICK_SUMMARY[item.id] || ''}</p>
                <div class="db-card-purposes">
                  ${itemPurposes.map(label => `<span class="purpose-tag">${label}</span>`).join('')}
                </div>
              </div>
              <div class="db-card-actions" onclick="event.stopPropagation();">
                <button class="raw-action-btn" onclick="window.openPaper('${item.id}')">
                  📖 點擊看單篇論文詳情 →
                </button>
                ${item.url ? `
                  <a class="raw-action-btn secondary" href="${item.url}" target="_blank" rel="noopener">
                    🔗 前往原文網址 ↗
                  </a>
                ` : ''}
              </div>
            </div>
          `;
        }).join('')}
      </div>
    `;

    // Bind filter chip clicks
    document.querySelectorAll('[data-f-country]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.countryFilter = btn.getAttribute('data-f-country');
        updateSidebarActive();
        renderDatabaseFilterHome();
      });
    });
    document.querySelectorAll('[data-f-type]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.typeFilter = btn.getAttribute('data-f-type');
        renderDatabaseFilterHome();
      });
    });
    document.querySelectorAll('[data-f-purpose]').forEach(btn => {
      btn.addEventListener('click', () => {
        state.purposeFilter = btn.getAttribute('data-f-purpose');
        renderDatabaseFilterHome();
      });
    });
  }

  // =========================================================================
  // 2. SINGLE-PAPER DEDICATED VIEW + RELATED PAPERS AT BOTTOM (單篇論文獨立閱讀頁)
  // =========================================================================
  function renderSinglePaperView(litId) {
    const allLit = window.WIKI_DATA.literature || [];
    const item = allLit.find(x => x.id === litId) || allLit[0];
    if (!item) return;

    const typeLabel = item.docType === 'Paper' ? '📘 期刊／學術論文' : '🏛️ 非期刊（政策審查／機構報告）';
    const itemPurposes = PAPER_PURPOSES_MAP[item.id] || [];

    // Find top 4 related / comparable papers based on shared country, shared purposes, or shared docType
    const relatedPapers = allLit
      .filter(other => other.id !== item.id)
      .map(other => {
        let score = 0;
        const reasons = [];
        if (other.countryGroup === item.countryGroup) {
          score += 3;
          reasons.push(`同為 ${item.countryLabel.split(' ')[1] || item.countryGroup} 相關研究`);
        }
        const otherPurposes = PAPER_PURPOSES_MAP[other.id] || [];
        const sharedPurposes = itemPurposes.filter(p => otherPurposes.includes(p));
        if (sharedPurposes.length > 0) {
          score += sharedPurposes.length * 2;
          reasons.push(`同用途：${PURPOSE_CATEGORIES[sharedPurposes[0]].replace(/^[^\s]+\s/, '')}`);
        }
        if (other.docType === item.docType) {
          score += 1;
        }
        return { other, score, reason: reasons.join(' ｜ ') || '跨國比較參考文獻' };
      })
      .sort((a, b) => b.score - a.score)
      .slice(0, 4);

    const hasActiveFilter = state.countryFilter !== 'ALL' || state.typeFilter !== 'ALL' || state.purposeFilter !== 'ALL' || state.searchQuery !== '';

    const cleanTakeaways = item.implications
      .replace(/直接支撐本研究\s*<strong>H2（跨國異質性）<\/strong>與\s*<strong>H3（調節機制）<\/strong>：/g, '<strong>可供我們論文設定假設與變數之參考</strong>：')
      .replace(/支撐本研究/g, '可供我們論文參考');

    mainEl.innerHTML = `
      <!-- Top Back Bar (返回上一層 & 清空篩選) -->
      <div class="back-nav-bar">
        <button class="back-btn" onclick="window.goBackLayer(false)">
          ⬅️ 返回上一層（回到文獻篩選結果列表）
        </button>
        ${hasActiveFilter ? `
          <button class="reset-filter-btn" onclick="window.goBackLayer(true)">
            🔄 返回首頁並清空篩選條件
          </button>
        ` : ''}
      </div>

      <article class="single-paper-reader">
        <!-- Top Header of the Single Paper -->
        <header class="paper-reader-header">
          <div class="paper-reader-meta">
            <span class="badge badge-country">${item.id} · ${item.countryLabel}</span>
            <span class="badge ${item.docType === 'Paper' ? 'badge-paper' : 'badge-report'}">${typeLabel}</span>
            <span class="badge badge-method">模型／方法：${item.methodBadge}</span>
          </div>

          <h2 class="paper-reader-zh-title">[${item.id}] ${item.chineseTitle}</h2>
          <div class="paper-reader-en-title">${item.title}</div>
          <div class="paper-reader-authors">作者與發表年份：<strong>${item.authorsYear}</strong></div>

          <div class="db-card-purposes" style="margin-bottom:16px;">
            ${itemPurposes.map(pKey => `<span class="purpose-tag">${PURPOSE_CATEGORIES[pKey]}</span>`).join('')}
          </div>

          <div class="paper-reader-actions">
            ${item.url ? `
              <a class="raw-action-btn large" href="${item.url}" target="_blank" rel="noopener">
                🔗 點擊前往期刊 DOI ／ 官方原文網站 ↗
              </a>
            ` : ''}
          </div>
        </header>

        <!-- Clean Single-Column Lecture Note Sections -->
        <div class="paper-reader-body">
          <section class="paper-section">
            <h3 class="paper-section-title">1. 來源／期刊（Source & Journal）</h3>
            <div class="paper-section-content">${item.sourceJournal}</div>
          </section>

          <section class="paper-section">
            <h3 class="paper-section-title">2. 研究目的（Research Purpose）</h3>
            <div class="paper-section-content">${item.purpose}</div>
          </section>

          <section class="paper-section">
            <h3 class="paper-section-title">3. 研究問題（Research Questions）</h3>
            <div class="paper-section-content">${item.questions}</div>
          </section>

          <section class="paper-section highlight-box">
            <h3 class="paper-section-title">4. 研究假設（Research Hypotheses — 供我們挑假設參考）</h3>
            <div class="paper-section-content">${item.hypotheses}</div>
          </section>

          <section class="paper-section highlight-box">
            <h3 class="paper-section-title">5. 研究方法（Research Methodology — 資料變數與模型）</h3>
            <div class="method-subbox">
              <div class="method-subtitle">📊 資料與變數（Data, DV, IV & Moderators/Controls）</div>
              <div class="paper-section-content">${item.data}</div>
            </div>
            <div class="method-subbox" style="margin-top:14px;">
              <div class="method-subtitle">📐 計量／分析模型（Econometric / Analytical Model）</div>
              <div class="paper-section-content">${item.model}</div>
            </div>
          </section>

          <section class="paper-section">
            <h3 class="paper-section-title">6. 研究結果（Research Findings — 實證數據與迴歸係數）</h3>
            <div class="paper-section-content">${item.findings}</div>
          </section>

          <section class="paper-section">
            <h3 class="paper-section-title">7. 研究限制與未來研究建議（Research Limitations）</h3>
            <div class="paper-section-content">${item.limitations}</div>
          </section>

          <section class="paper-section takeaway-box">
            <h3 class="paper-section-title">8. 💡 補充：這篇有哪些「假設、變數或模型」值得我們論文參考？</h3>
            <div class="paper-section-content">${cleanTakeaways}</div>
          </section>
        </div>

        <!-- Bottom Section: Related & Comparable Papers + Back to Filter List -->
        <footer class="related-papers-footer">
          <h3 style="font-size:17px;font-weight:700;color:var(--text-primary);margin-bottom:6px;">
            🔗 與本篇相關或可對照比較之其他論文（點擊直接切換閱讀）
          </h3>
          <p style="font-size:13px;color:var(--text-muted);margin-bottom:14px;">
            根據相同國家、相同論文用途或相近計量模型，為你推薦以下 4 篇可一起對照比較的文獻：
          </p>
          <div class="related-cards-grid">
            ${relatedPapers.map(({ other, reason }) => `
              <div class="related-paper-card" onclick="window.openPaper('${other.id}')">
                <div style="font-size:11.5px;font-weight:700;color:var(--accent-primary);margin-bottom:4px;">
                  💡 比較切入點：${reason}
                </div>
                <div style="font-size:14.5px;font-weight:700;color:var(--text-primary);margin-bottom:4px;">
                  [${other.id}] ${other.chineseTitle}
                </div>
                <div style="font-size:12.5px;color:var(--text-muted);margin-bottom:6px;">
                  ${other.authorsYear} · <span class="badge badge-method">${other.methodBadge}</span>
                </div>
                <div style="font-size:12.5px;color:var(--text-secondary);">
                  ${QUICK_SUMMARY[other.id] || ''}
                </div>
              </div>
            `).join('')}
          </div>

          <div class="back-nav-bar" style="margin-top:20px;margin-bottom:0;">
            <button class="back-btn" onclick="window.goBackLayer(false)">
              ⬅️ 返回上一層（回到文獻篩選結果列表）
            </button>
            <button class="reset-filter-btn" onclick="window.goBackLayer(true)">
              🔄 返回首頁並清空所有篩選條件
            </button>
          </div>
        </footer>
      </article>
    `;
  }

  // =========================================================================
  // 3. 22-PAPER SUMMARY COMPARISON TABLE (方便挑假設、變數與模型的對照總表)
  // =========================================================================
  function renderSummaryTableView() {
    const allLit = window.WIKI_DATA.literature || [];

    mainEl.innerHTML = `
      <div class="section-block">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:10px;margin-bottom:12px;">
          <h3 style="margin:0;border:none;padding:0;">📋 22 篇文獻「研究假設 × 資料變數 × 計量模型」速覽總表</h3>
          <button class="back-btn" onclick="window.clearAllFilters()">🔍 前往文獻篩選器首頁</button>
        </div>
        <p style="margin-bottom:14px;">
          點擊任一列的<strong>「文獻標題」</strong>即可進入該篇論文的單篇閱讀頁；點擊<strong>「🔗 原文網址」</strong>可直接前往期刊 DOI 或官方網頁。
        </p>
        <div class="table-responsive">
          <table class="wiki-table">
            <thead>
              <tr>
                <th style="width:20%;">編號與文獻（點擊閱讀單篇）</th>
                <th style="width:13%;">國家／性質</th>
                <th style="width:22%;">該篇研究假設／探討重點</th>
                <th style="width:22%;">資料與變數（DV / IV / 控制）</th>
                <th style="width:14%;">計量／分析模型</th>
                <th style="width:9%;">官方連結</th>
              </tr>
            </thead>
            <tbody>
              ${allLit.map(item => {
                return `
                  <tr>
                    <td>
                      <a href="javascript:void(0)" class="cite-link" style="display:inline-block;margin-bottom:4px;" onclick="window.openPaper('${item.id}')">
                        📖 [${item.id}] ${item.chineseTitle}
                      </a>
                      <div style="font-size:12px;color:var(--text-muted);">${item.authorsYear}</div>
                    </td>
                    <td>
                      <div><strong>${item.countryLabel}</strong></div>
                      <div style="font-size:12px;color:var(--text-muted);margin-top:3px;">${item.docType === 'Paper' ? '📘 期刊/學術論文' : '🏛️ 非期刊報告'}</div>
                    </td>
                    <td style="font-size:13px;">${item.hypotheses}</td>
                    <td style="font-size:13px;">${item.data}</td>
                    <td><span class="badge badge-method">${item.methodBadge}</span></td>
                    <td>
                      ${item.url ? `<a class="raw-action-btn" style="padding:4px 8px;font-size:11.5px;" href="${item.url}" target="_blank" rel="noopener">🔗 網址 ↗</a>` : ''}
                    </td>
                  </tr>
                `;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 4. CANDIDATE HYPOTHESES & MODEL PICKER (已確定 H1，從論文挑其他假設與模型)
  // =========================================================================
  function renderHypothesisPickerView() {
    mainEl.innerHTML = `
      <div class="section-block">
        <h3>💡 我們論文的「假設（H2/H3...）與計量模型」挑選指南（從 22 篇論文提煉）</h3>
        <div class="callout info">
          <div class="callout-title">📌 目前研究進度對齊</div>
          <p>我們目前<strong>已確定 H1（主效果）：AI 採納與經濟成長呈正向關係</strong>。至於後續要設哪些假設（H2、H3...）、要用哪些變數與計量模型，以下是從這 22 篇論文中整理出的<strong>「候選菜單」</strong>，每一項都附有對應論文超連結（點一下就能直接進去看那篇單篇論文）：</p>
        </div>

        <h4>一、 候選假設方向（可從中挑選作為我們的 H2、H3）</h4>
        <div class="table-responsive">
          <table class="wiki-table">
            <thead>
              <tr>
                <th style="width:20%;">候選假設方向</th>
                <th style="width:35%;">假設內容寫法範例</th>
                <th style="width:25%;">文獻中使用的變數指標</th>
                <th style="width:20%;">可引用的支撐論文（點擊閱讀）</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>選項 A：跨國異質性假設</strong><br/>（德 vs. 荷 vs. 丹 vs. OECD）</td>
                <td>AI 採納對經濟成長（或生產力）的影響在不同國家之間存在顯著差異（例如高商業採用之丹麥、荷蘭 vs. 製造業與科研導向之德國）。</td>
                <td>• 國家虛擬變數交乘項<br/>• 分國時間序列／分群迴歸</td>
                <td>
                  ${linkifyCitations('Eurostat (2026)')}<br/>
                  ${linkifyCitations('ECB (2025)')}<br/>
                  ${linkifyCitations('Plikas et al. (2024)')}<br/>
                  ${linkifyCitations('Kalai, Becha, & Helali (2024)')}
                </td>
              </tr>
              <tr>
                <td><strong>選項 B：人力資本調節假設</strong><br/>（最常被頂刊檢驗！）</td>
                <td>國家（或企業）的人力資本水準（高等教育比例、員工技能培訓、ICT 專才）會正向調節 AI 採納對經濟成長／生產力的影響。</td>
                <td>• PWT 人力資本指數（<code>log h</code>）<br/>• 大專以上教育比例（25–64 歲）<br/>• 博士比例／ICT 專才／員工再培訓</td>
                <td>
                  ${linkifyCitations('Duarte, Freitas, & Simões (2026)')}<br/>
                  ${linkifyCitations('OECD (2026)')}<br/>
                  ${linkifyCitations('Jensen & Schneider (2026)')}<br/>
                  ${linkifyCitations('Renault (2025)')}
                </td>
              </tr>
              <tr>
                <td><strong>選項 C：產業結構調節假設</strong><br/>（製造業 vs. 知識服務業）</td>
                <td>各國產業結構（如製造業占 GDP 比重，或高 AI 暴露之資通訊／金融／專業服務業占比）會調節 AI 對經濟成長的貢獻。</td>
                <td>• 製造業附加價值占 GDP 比例（<code>Δinds</code>）<br/>• 產業 AI 暴露度（<code>AIIE</code>）× 國家準備度（<code>AIPI</code>）</td>
                <td>
                  ${linkifyCitations('Duarte, Freitas, & Simões (2026)')}<br/>
                  ${linkifyCitations('Gambacorta et al. (2025/2026)')}<br/>
                  ${linkifyCitations('Eurochambres (2026)')}
                </td>
              </tr>
              <tr>
                <td><strong>選項 D：短期 vs. 長期（或正負非對稱）假設</strong></td>
                <td>AI 採納在短期可能因轉型摩擦（生產力 J 曲線）效果較小，但在長期（或累積為知識存量後）對實質人均 GDP 具強勁正向影響；或正負衝擊具非對稱性。</td>
                <td>• 短期差分項 <code>Δlog(AI)</code> vs. 長期落後水準項 <code>log(AI_t-1)</code><br/>• 15% 折舊率之 AI 知識存量（Stock）<br/>• 正向衝擊 <code>AI+</code> vs. 負向衝擊 <code>AI-</code></td>
                <td>
                  ${linkifyCitations('Parteka & Kordalska (2023)')}<br/>
                  ${linkifyCitations('Duarte, Freitas, & Simões (2026)')}<br/>
                  ${linkifyCitations('Athari et al. (2026)')}<br/>
                  ${linkifyCitations('Kalai, Becha, & Helali (2024)')}
                </td>
              </tr>
              <tr>
                <td><strong>選項 E：法規制度／數位基礎設施調節假設</strong></td>
                <td>國家的法規品質、職業管制程度或數位基礎設施密集度，會調節 AI 轉化為生產力與出口成長的幅度。</td>
                <td>• 世界銀行法規品質（<code>RQ</code>）<br/>• 網路／寬頻普及率（<code>k_it</code>）<br/>• IMF 國家 AI 準備度指數（<code>AIPI</code>）</td>
                <td>
                  ${linkifyCitations('Misch et al. (2025)')}<br/>
                  ${linkifyCitations('Parteka & Kordalska (2023)')}<br/>
                  ${linkifyCitations('Lo & Lee (2024)')}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  }

  // =========================================================================
  // 5. INDEPENDENT SYNTHESIS PAGES (國別與方法綜合統整，不干擾單篇閱讀)
  // =========================================================================
  function renderWikiSynthesisView(pageId) {
    const page = (window.WIKI_DATA.pages || {})[pageId];
    if (!page) {
      renderDatabaseFilterHome();
      return;
    }

    mainEl.innerHTML = `
      <div class="section-block">
        <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:8px;margin-bottom:12px;">
          <span class="badge badge-country">📊 獨立綜合統整頁</span>
          <span style="font-size:13px;color:var(--accent-primary);font-weight:600;">
            💡 點擊內文中任何「🔗 作者 (年份) [編號]」超連結，即可直接進入該篇論文的單篇閱讀頁！
          </span>
        </div>
        <h3>${page.title}</h3>
        <div class="wiki-page-body">
          ${linkifyCitations(page.htmlContent)}
        </div>
      </div>
    `;
  }

  function init() {
    if (window.WIKI_DATA && window.WIKI_DATA.literature) {
      const badge = document.getElementById('totalLitCountBadge');
      if (badge) badge.textContent = window.WIKI_DATA.literature.length;
    }

    // Sidebar navigation listeners
    document.querySelectorAll('#sidebarNav .nav-item').forEach((btn) => {
      btn.addEventListener('click', () => {
        const navType = btn.getAttribute('data-nav');
        if (navType === 'database') {
          state.countryFilter = 'ALL';
          state.currentView = 'database';
        } else if (navType === 'country-filter') {
          state.countryFilter = btn.getAttribute('data-country');
          state.currentView = 'database';
        } else if (navType === 'summary-table') {
          state.currentView = 'summary-table';
        } else if (navType === 'hypothesis-picker') {
          state.currentView = 'hypothesis-picker';
        } else if (navType === 'wiki-page') {
          state.currentView = 'wiki-page';
          state.currentPageId = btn.getAttribute('data-page');
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
        updateSidebarActive();
        renderMain();
      });
    });

    document.getElementById('brandHomeBtn').addEventListener('click', () => {
      window.clearAllFilters();
    });

    // Global Search filters the database home directly
    searchInput.addEventListener('input', (e) => {
      state.searchQuery = e.target.value.trim();
      clearSearchBtn.classList.toggle('hidden', !state.searchQuery);
      if (state.currentView !== 'database') {
        state.currentView = 'database';
        updateSidebarActive();
      }
      renderMain();
    });

    clearSearchBtn.addEventListener('click', () => {
      state.searchQuery = '';
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      renderMain();
    });

    // 3 HTML Visual Styles Switcher (1. 現代靛藍 / 2. 牛津期刊 / 3. 黑曜石極客)
    document.querySelectorAll('.style-btn').forEach((btn) => {
      btn.addEventListener('click', () => {
        const chosenStyle = btn.getAttribute('data-style-choice');
        document.documentElement.setAttribute('data-style', chosenStyle);
        document.querySelectorAll('.style-btn').forEach((b) => {
          b.classList.toggle('active', b === btn);
        });
      });
    });

    // Theme toggle
    themeToggleBtn.addEventListener('click', () => {
      const html = document.documentElement;
      const next = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      html.setAttribute('data-theme', next);
      themeIcon.textContent = next === 'dark' ? '☀️' : '🌙';
    });

    updateSidebarActive();
    renderMain();
  }

  init();
})();
