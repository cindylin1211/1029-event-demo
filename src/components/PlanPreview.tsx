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
  const generateSWOTAnalysis = () => {
    // 基於用戶輸入的資訊生成 SWOT 分析
    return {
      strengths: [
        `具備 ${planData.employeeCount} 名員工的規模優勢`,
        `在 ${planData.industry || '相關產業'} 領域累積豐富經驗`,
        `擁有明確的企業願景和發展方向`,
        `積極投入人力資源發展與技能提升`
      ],
      weaknesses: [
        `技能需求與現有能力存在落差`,
        `需要持續投資於員工培訓發展`,
        `面臨數位轉型的挑戰`,
        `人才培育體系有待完善`
      ],
      opportunities: [
        `政府大人提計畫提供補助機會`,
        `產業數位化趨勢帶來成長機會`,
        `員工技能提升將增強競爭力`,
        `新技術應用可提升營運效率`
      ],
      threats: [
        `產業競爭激烈，需持續創新`,
        `技術變化快速，需及時跟進`,
        `人才流動率可能影響培訓成效`,
        `外部經濟環境變化的影響`
      ]
    };
  };

  const swot = generateSWOTAnalysis();

  const handleDownload = () => {
    // 這裡可以實現 PDF 下載功能
    alert("企畫書下載功能將在後續開發完成");
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
                <h1 className="text-3xl font-bold text-foreground">企畫書預覽</h1>
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
                下載企畫書
              </Button>
            </div>
          </div>

          {/* 成功提示 */}
          <Card className="mb-8 bg-gradient-card border-business-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-12 w-12 text-business-accent" />
                <div>
                  <h3 className="text-xl font-semibold text-foreground">企畫書生成完成！</h3>
                  <p className="text-muted-foreground">
                    AI 已根據您的資訊生成專業的企業人力資源提升計畫書，您可以直接使用此企畫書進行政府補助申請
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* 企畫書內容 */}
          <div className="space-y-8">
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
                    {planData.businessDescription || 
                      `${planData.companyName}致力於在${planData.industry || '相關領域'}提供優質的產品與服務。公司秉持專業、創新的經營理念，持續投入人力資源發展，以提升企業競爭力並創造永續價值。`
                    }
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">3. 經營理念與願景</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {planData.vision || 
                      `${planData.companyName}以「持續創新、追求卓越」為經營理念，致力於成為${planData.industry || '業界'}的領導品牌。我們重視人才培育，透過持續的教育訓練提升員工專業能力，建構學習型組織，以應對快速變化的市場環境。`
                    }
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
                    <p className="text-sm leading-relaxed">{planData.trainingContent}</p>
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
              下載完整企畫書
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};