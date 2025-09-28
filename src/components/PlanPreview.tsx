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
    // 生成潤飾後的公司簡介
    const enhancedDescription = planData.businessDescription || 
      `${planData.companyName}成立至今，始終致力於在${planData.industry || '相關領域'}提供卓越的產品與服務。公司秉持「以人為本、追求卓越」的經營理念，深耕${planData.industry || '產業'}多年，累積豐富的專業經驗與技術能力。面對快速變化的市場環境，本公司積極推動組織轉型與人才培育，期望透過持續的創新與學習，建構更具競爭力的企業體質，為客戶創造更大價值，同時為員工提供更好的發展平台。`;

    // 生成潤飾後的願景
    const enhancedVision = planData.vision || 
      `${planData.companyName}以「成為${planData.industry || '業界'}標竿企業」為願景，致力於打造學習型組織。我們深信人才是企業最重要的資產，透過系統性的教育訓練與職能發展，不僅能提升員工的專業技能與工作滿意度，更能強化組織的整體競爭力。本公司將持續投入資源於人力資源發展，建立完善的培訓體系，以培養具備前瞻視野與專業能力的優秀人才，共同朝向企業永續發展的目標邁進。`;

    // 生成潤飾後的訓練內容
    const enhancedTrainingContent = planData.trainingContent ? 
      `本訓練計畫針對組織發展需求，規劃多元化的培訓課程內容：

1. 核心職能提升課程
   ${planData.trainingContent.includes('專業技能') ? '• 專業技術能力強化訓練，包含最新技術趨勢與實務應用' : ''}
   ${planData.trainingContent.includes('管理') ? '• 管理職能發展課程，培養領導統御與團隊協作能力' : ''}
   ${planData.trainingContent.includes('溝通') ? '• 溝通表達技巧訓練，提升內外部協調合作效能' : ''}

2. 數位轉型相關訓練
   • 數位工具應用與資訊系統操作訓練
   • 數據分析與決策支援能力培養
   • 創新思維與問題解決技巧訓練

3. 軟實力發展課程
   • 團隊合作與跨部門協作訓練
   • 客戶服務品質提升訓練
   • 持續學習與自我成長能力培養

透過上述課程設計，期望能全面提升員工的綜合職能，建立學習型組織文化，為企業長期發展奠定堅實基礎。` 
      : `本訓練計畫依據組織發展策略與員工職能需求，規劃系統性的培訓課程，包含專業技能提升、管理能力培養、數位轉型應用等多元化內容，期望透過完整的教育訓練體系，培養具備前瞻視野與專業能力的優秀人才。`;

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
      
      // 創建PDF
      const pdf = new jsPDF('p', 'mm', 'a4');
      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      
      // 設置中文字體支援
      pdf.setFont('courier');
      
      // 轉換為 canvas
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true
      });
      
      const imgData = canvas.toDataURL('image/png');
      const imgWidth = pageWidth - 20; // 留10mm邊距
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      
      let heightLeft = imgHeight;
      let position = 10;
      
      // 第一頁
      pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
      heightLeft -= pageHeight - 20;
      
      // 如果內容超過一頁，添加更多頁面
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight + 10;
        pdf.addPage();
        pdf.addImage(imgData, 'PNG', 10, position, imgWidth, imgHeight);
        heightLeft -= pageHeight - 20;
      }
      
      // 下載 PDF
      pdf.save(`${planData.companyName}_人力資源提升計畫書.pdf`);
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
                  <h3 className="text-xl font-semibold text-foreground">計畫書生成完成！</h3>
                  <p className="text-muted-foreground">
                    AI 已根據您的資訊生成專業的企業人力資源提升計畫書，您可以直接使用此計畫書進行政府補助申請
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
                  企業人力資源提升計畫
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
            <Card className="shadow-card">
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
            <Card className="shadow-card">
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
            <Card className="shadow-card">
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