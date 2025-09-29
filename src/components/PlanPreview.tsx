import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, RotateCcw, Building, Target, TrendingUp, Users, CheckCircle } from "lucide-react";
import { PlanData } from "@/pages/Index";

interface PlanPreviewProps {
  planData: PlanData;
  onBack: () => void;
  onReset: () => void;
}

export const PlanPreview = ({ planData, onBack, onReset }: PlanPreviewProps) => {
  const generateEnhancedContent = () => {
    // 生成專業潤飾後的公司簡介
    const enhancedDescription = planData.businessDescription ? 
      `${planData.companyName}自成立以來，憑藉其在${planData.industry || '相關產業'}領域的深厚底蘊與創新能力，已逐步建立起業界領先地位。公司以「${planData.businessDescription}」為核心理念，不斷追求卓越營運表現。在全球數位化浪潮下，本公司深刻體認到人才競爭力乃企業永續發展之根本，因此積極建構完整的人才培育機制，致力培養具備前瞻視野、創新思維及跨領域整合能力的專業人才，以因應瞬息萬變的市場環境挑戰，並持續強化組織核心競爭優勢。` :
      `${planData.companyName}自創立迄今，始終秉持「專業創新、服務至上」的經營哲學，在${planData.industry || '相關領域'}深耕多年，累積了豐富的產業經驗與技術實力。公司擁有${planData.employeeCount}名專業員工，團隊成員皆具備扎實的專業基礎與豐富的實務經驗。面對當前產業數位轉型的關鍵時刻，本公司深刻認知人力資源發展的重要性，積極推動組織學習與人才培育，期望透過系統性的教育訓練規劃，全面提升員工職能水準，建立學習型組織文化，以支撐公司長期發展策略的實現。`;

    // 生成專業願景描述
    const enhancedVision = planData.vision ? 
      `${planData.companyName}以「${planData.vision}」為企業願景，致力於建構學習型組織典範。我們深信優秀人才是推動企業成長的核心動力，透過建立完善的人才發展體系，不僅能有效提升員工的專業技能與職場競爭力，更能激發團隊創新潛能，創造企業與員工雙贏的局面。本公司將持續投入優質資源於人力資源發展領域，建構多元化的培訓機制，培養具備國際視野、專業能力與領導特質的優秀人才，共同實現企業永續經營與社會責任的理想目標。` :
      `${planData.companyName}以「成為${planData.industry || '業界'}數位轉型標竿企業」為長期願景，致力於打造具有競爭優勢的學習型組織。我們堅信人才是企業最珍貴的資產，透過建立系統性的教育訓練體系與職能發展機制，能夠有效提升員工的專業技能、創新思維與問題解決能力，進而強化組織整體競爭力。本公司將秉持「人才優先、學習至上」的發展理念，持續投入資源於人力資源發展，建立完善的培訓制度與評估機制，培養具備前瞻視野、專業能力與團隊協作精神的優秀人才，攜手共創企業永續發展的美好未來。`;

    // 生成詳細的訓練內容規劃
    const enhancedTrainingContent = planData.trainingContent ? 
      `為因應組織發展需求與市場環境變化，本訓練計畫採用分層分級的培訓模式，規劃多元化的課程內容：

【核心職能強化模組】
${planData.trainingContent.includes('專業技能') ? 
  `• 專業技術能力深化訓練：結合最新技術趨勢與實務應用，強化員工專業核心能力
• 技術創新與應用課程：培養員工對新興技術的敏感度與應用能力
• 專業認證輔導課程：協助員工取得相關專業證照，提升職場競爭力` : ''}
${planData.trainingContent.includes('管理') ? 
  `• 領導管理職能課程：培養中高階主管的領導統御與策略思維能力
• 團隊建設與協作訓練：強化跨部門溝通協調與團隊合作效能
• 績效管理與人才發展：建立完善的績效評估與人才培育機制` : ''}
${planData.trainingContent.includes('溝通') ? 
  `• 溝通表達技巧強化：提升員工內外部溝通協調與簡報表達能力
• 客戶服務與關係管理：建立優質的客戶服務文化與顧客關係維護能力
• 跨文化溝通與協作：培養國際化的溝通技巧與文化適應能力` : ''}

【數位轉型賦能模組】
• 數位工具應用與系統整合：提升員工對數位化工具的操作熟練度
• 數據分析與商業智慧：培養數據驅動的決策思維與分析能力
• 創新思維與設計思考：激發員工創新潛能與問題解決能力
• 人工智慧與自動化應用：了解AI技術發展趨勢與實務應用

【軟實力發展模組】
• 情緒管理與壓力調適：建立正向的工作態度與心理韌性
• 時間管理與效率提升：培養高效工作方法與自我管理能力
• 持續學習與自我成長：建立終身學習的觀念與自主學習能力
• 企業文化與價值認同：強化員工對組織文化的認同與歸屬感

透過上述完整的課程架構，期望能全面提升員工的綜合職能水準，建立學習型組織文化，為企業長期發展奠定堅實的人才基礎。` 
      : `本訓練計畫依據組織發展策略與員工職能評估結果，採用系統性的課程設計理念，規劃包含專業技能提升、管理能力培養、數位轉型應用、創新思維培育等多元化培訓內容。課程設計著重理論與實務並重，透過案例研討、實作演練、跨部門協作等多元學習方式，確保培訓效果的最大化。同時建立完整的培訓評估機制，包含課程滿意度調查、學習成效測驗、行為改變追蹤等，以確保培訓投資能夠產生具體的組織效益。`;

    return {
      description: enhancedDescription,
      vision: enhancedVision,
      trainingContent: enhancedTrainingContent
    };
  };

  const generateSWOTAnalysis = () => {
    // 基於用戶輸入的資訊生成 SWOT 分析
    return {
      strengths: [
        `具備 ${planData.employeeCount} 名員工的組織規模，擁有充足的人力資源基礎`,
        `在 ${planData.industry || '相關產業'} 領域深耕多年，累積豐富的專業經驗與技術能力`,
        `管理階層具備明確的企業願景和發展策略，為組織發展提供清晰方向`,
        `積極重視人力資源發展與員工技能提升，展現良好的學習文化基礎`
      ],
      weaknesses: [
        `現有員工技能與未來發展需求間存在能力落差，需要系統性的培訓規劃`,
        `組織在數位轉型過程中面臨技術更新與流程改善的挑戰`,
        `人才培育制度有待建立更完整的體系架構與評估機制`,
        `跨部門協作與知識分享機制需要進一步強化`
      ],
      opportunities: [
        `政府推動「大專校院學生雙語化學習計畫人力提升計畫」，提供企業培訓補助資源`,
        `${planData.industry || '產業'}數位化轉型趨勢，為企業創新發展帶來新機遇`,
        `透過員工技能提升與組織學習，可有效增強企業市場競爭力`,
        `建立完善的人才培育體系，有助於提升員工留任率與組織向心力`
      ],
      threats: [
        `產業競爭日趨激烈，同業間人才爭奪加劇，需持續強化人才留任策略`,
        `科技發展與市場變化快速，組織需具備敏捷應變與持續學習的能力`,
        `外部經濟環境不確定性增加，可能影響企業投資培訓的資源配置`,
        `若未能及時提升員工能力，可能面臨核心競爭力下滑的風險`
      ]
    };
  };

  const enhancedContent = generateEnhancedContent();

  const swot = generateSWOTAnalysis();

  const handleDownload = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      // 獲取計畫書內容元素
      const element = document.getElementById('plan-content');
      if (!element) return;

      // 創建專用於PDF的完整內容容器
      const tempContainer = document.createElement('div');
      tempContainer.style.position = 'absolute';
      tempContainer.style.left = '-9999px';
      tempContainer.style.top = '0';
      tempContainer.style.width = '794px'; // A4 width at 96 DPI
      tempContainer.style.fontFamily = '"Microsoft JhengHei", "PingFang TC", "Noto Sans TC", sans-serif';
      tempContainer.style.fontSize = '11px';
      tempContainer.style.lineHeight = '1.5';
      tempContainer.style.color = '#000';
      tempContainer.style.backgroundColor = '#fff';
      tempContainer.style.padding = '20px';
      tempContainer.style.boxSizing = 'border-box';
      
      // 克隆並處理內容，確保所有內容都被包含
      const clonedElement = element.cloneNode(true) as HTMLElement;
      
      // 移除不需要的元素（如按鈕等）
      const buttonsToRemove = clonedElement.querySelectorAll('button');
      buttonsToRemove.forEach(button => button.remove());
      
      // 確保所有文字顏色為黑色
      const allElements = clonedElement.querySelectorAll('*');
      allElements.forEach(el => {
        const element = el as HTMLElement;
        element.style.color = '#000';
        element.style.backgroundColor = 'transparent';
        // 移除可能影響PDF生成的樣式
        element.style.boxShadow = 'none';
        element.style.textShadow = 'none';
      });

      // 處理卡片和容器樣式
      const cards = clonedElement.querySelectorAll('[class*="card"], [class*="Card"]');
      cards.forEach(card => {
        const cardElement = card as HTMLElement;
        cardElement.style.border = '1px solid #ddd';
        cardElement.style.borderRadius = '8px';
        cardElement.style.marginBottom = '20px';
        cardElement.style.padding = '16px';
        cardElement.style.backgroundColor = '#fff';
      });

      // 添加分頁標記
      const sections = clonedElement.querySelectorAll('.section-break');
      sections.forEach((section, index) => {
        if (index > 0) { // 第一個區塊不需要分頁
          const breakDiv = document.createElement('div');
          breakDiv.style.pageBreakBefore = 'always';
          breakDiv.style.height = '1px';
          section.parentNode?.insertBefore(breakDiv, section);
        }
      });
      
      tempContainer.appendChild(clonedElement);
      document.body.appendChild(tempContainer);

      // 使用更高的縮放比例以獲得更好的圖片質量
      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#ffffff',
        scrollX: 0,
        scrollY: 0,
        width: tempContainer.scrollWidth,
        height: tempContainer.scrollHeight,
        onclone: (clonedDoc) => {
          // 確保克隆的文檔中的樣式正確
          const clonedContainer = clonedDoc.querySelector('div') as HTMLElement;
          if (clonedContainer) {
            clonedContainer.style.transform = 'none';
            clonedContainer.style.margin = '0';
          }
        }
      });

      document.body.removeChild(tempContainer);

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;
      const margin = 10;
      const contentWidth = pdfWidth - (margin * 2);
      const contentHeight = pdfHeight - (margin * 2);
      
      // 計算縮放比例
      const imgWidth = contentWidth;
      const imgHeight = (canvas.height * contentWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = -margin;
      let pageNumber = 1;

      // 添加第一頁
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', margin, margin, imgWidth, imgHeight);
      heightLeft -= contentHeight;

      // 添加後續頁面
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + margin;
        pdf.addPage();
        pageNumber++;
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', margin, position, imgWidth, imgHeight);
        heightLeft -= contentHeight;
      }

      // 在每頁底部添加頁碼和 disclaimer
      const totalPages = (pdf as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        
        // 添加頁碼
        pdf.setFontSize(8);
        pdf.setTextColor(100, 100, 100);
        pdf.text(`${i} / ${totalPages}`, pdfWidth - margin, pdfHeight - 5, { align: 'right' });
        
        // 添加 disclaimer
        pdf.setFontSize(8);
        pdf.setTextColor(128, 128, 128);
        pdf.text('10/29 AWS政府補助說明會諮詢用', pdfWidth / 2, pdfHeight - 5, { align: 'center' });
      }

      pdf.save(`${planData.companyName}-政府補助人力資源提升計畫書.pdf`);
      
      alert('政府補助計畫書已成功下載，請現場與政府補助顧問諮詢！');
    } catch (error) {
      console.error('PDF 生成失敗:', error);
      alert('PDF 生成失敗，請稍後再試');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-business-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <Button variant="ghost" onClick={onBack} className="p-2">
                <ArrowLeft className="h-5 w-5" />
              </Button>
              <div>
                <h1 className="text-3xl font-bold text-foreground">計畫書預覽</h1>
                <p className="text-muted-foreground">AI 已為您生成完整的企業人力資源提升計畫書</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" onClick={onReset}>
                <RotateCcw className="mr-2 h-4 w-4" />
                重新開始
              </Button>
              <Button onClick={handleDownload} className="bg-business-accent hover:bg-business-accent/90 shadow-button">
                <Download className="mr-2 h-4 w-4" />
                下載計畫書
              </Button>
            </div>
          </div>

          {/* 成功提示 */}
          <Card className="mb-8 bg-gradient-card border-business-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-12 w-12 text-business-accent" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">AWS 計畫書生成完成！</h3>
                  <p className="text-muted-foreground">
                    您的 AWS 企業人力資源提升計畫書已經準備就緒。請下載後帶至現場，與 AWS 政府補助顧問進行專業諮詢。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 計畫書內容 */}
          <div id="plan-content" className="space-y-8">
            {/* 封面資訊 */}
            <Card className="shadow-card">
              <CardHeader className="bg-gradient-primary text-white">
                <CardTitle className="text-center text-2xl">
                  {planData.companyName}
                  <br />
                  AWS 企業人力資源提升計畫
                  <br />
                  訓練計畫規劃書
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-4 text-business-primary">計畫聯絡資訊</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">聯絡人：</span>{planData.contact}</p>
                      <p><span className="font-medium">聯絡電話：</span>{planData.phone}</p>
                      <p><span className="font-medium">聯絡郵件：</span>{planData.email}</p>
                      {planData.address && <p><span className="font-medium">聯絡地址：</span>{planData.address}</p>}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-4 text-business-primary">公司基本資料</h4>
                    <div className="space-y-2 text-sm">
                      <p><span className="font-medium">統一編號：</span>{planData.companyId}</p>
                      <p><span className="font-medium">員工人數：</span>{planData.employeeCount}</p>
                      {planData.capital && <p><span className="font-medium">實收資本額：</span>{planData.capital}</p>}
                      {planData.website && <p><span className="font-medium">公司網址：</span>{planData.website}</p>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 企業簡介 */}
            <Card className="shadow-card section-break">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <Building className="h-5 w-5" />
                  一、企業簡介
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">1. 公司基本資料</h4>
                  <div className="bg-business-secondary/30 p-4 rounded-lg">
                    <table className="w-full text-sm">
                      <tbody>
                        <tr><td className="font-medium py-1">公司名稱</td><td>{planData.companyName}</td><td className="font-medium py-1">統一編號</td><td>{planData.companyId}</td></tr>
                        <tr><td className="font-medium py-1">聯絡人</td><td>{planData.contact}</td><td className="font-medium py-1">員工人數</td><td>{planData.employeeCount}</td></tr>
                        <tr><td className="font-medium py-1">聯絡電話</td><td>{planData.phone}</td><td className="font-medium py-1">產業類別</td><td>{planData.industry || '相關服務業'}</td></tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">2. 公司簡介</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {enhancedContent.description}
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">3. 經營理念與願景</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {enhancedContent.vision}
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* SWOT 分析 */}
            <Card className="shadow-card section-break">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <TrendingUp className="h-5 w-5" />
                  二、SWOT 策略分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-600">優勢 (Strengths)</h4>
                    <ul className="space-y-1 text-sm">
                      {swot.strengths.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-green-600 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-600">劣勢 (Weaknesses)</h4>
                    <ul className="space-y-1 text-sm">
                      {swot.weaknesses.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-red-600 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-600">機會 (Opportunities)</h4>
                    <ul className="space-y-1 text-sm">
                      {swot.opportunities.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-blue-600 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-600">威脅 (Threats)</h4>
                    <ul className="space-y-1 text-sm">
                      {swot.threats.map((item, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <span className="w-1 h-1 bg-orange-600 rounded-full mt-2 flex-shrink-0"></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 訓練需求分析 */}
            <Card className="shadow-card section-break">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <Target className="h-5 w-5" />
                  三、訓練需求分析與規劃
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">1. 訓練計畫與營運策略關聯性</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    本訓練計畫與公司營運策略緊密結合，透過提升員工專業技能，強化組織核心競爭力。
                    配合{planData.industry || '產業'}發展趨勢，培養員工具備前瞻性的專業能力，
                    以支撐公司長期發展目標的達成。
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">2. 現況問題分析</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {planData.currentChallenges || 
                      `面對快速變化的市場環境，公司需要持續提升員工的專業技能和競爭力。透過系統性的教育訓練，解決現有技能落差，建立完善的人才培育機制。`
                    }
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">3. 訓練目標</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {planData.trainingGoals || 
                      `提升員工專業技能，強化團隊協作能力，建立學習型組織文化，以應對${planData.industry || '產業'}發展的挑戰與機遇。`
                    }
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">4. 訓練內容規劃</h4>
                  <div className="bg-business-secondary/30 p-4 rounded-lg">
                    <div className="text-sm leading-relaxed whitespace-pre-line">{enhancedContent.trainingContent}</div>
                  </div>
                </div>

                {planData.expectedOutcome && (
                  <div>
                    <h4 className="font-semibold mb-3">5. 預期成果</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {planData.expectedOutcome}
                    </p>
                  </div>
                )}

                {planData.timeline && (
                  <div>
                    <h4 className="font-semibold mb-3">6. 執行時程</h4>
                    <p className="text-sm text-muted-foreground">
                      預計執行期間：{planData.timeline}
                    </p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 計畫效益 */}
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <Users className="h-5 w-5" />
                  四、計畫執行效益
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2 text-green-600">對企業的助益</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 提升員工專業技能，增強企業競爭力</li>
                      <li>• 建立完善的人才培育制度</li>
                      <li>• 促進組織學習文化的建立</li>
                      <li>• 支撐企業長期發展策略的執行</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2 text-blue-600">對員工的助益</h4>
                    <ul className="space-y-1 text-sm text-muted-foreground">
                      <li>• 提升個人專業能力與職場競爭力</li>
                      <li>• 增進職涯發展機會</li>
                      <li>• 培養跨領域整合能力</li>
                      <li>• 建立持續學習的能力</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* 底部操作 */}
          <div className="flex justify-center gap-4 mt-12 pb-8">
            <Button variant="outline" onClick={onBack} size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回修改
            </Button>
            <Button 
              onClick={handleDownload} 
              size="lg"
              className="bg-business-accent hover:bg-business-accent/90 shadow-button"
            >
              <Download className="mr-2 h-4 w-4" />
              下載完整計畫書
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};