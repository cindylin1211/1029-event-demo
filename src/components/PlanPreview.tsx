import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Download, RotateCcw, Building, Target, TrendingUp, Users, CheckCircle, BookOpen } from "lucide-react";
import { PlanData } from "@/pages/Index";

interface PlanPreviewProps {
  planData: PlanData;
  onBack: () => void;
  onReset: () => void;
}

export const PlanPreview = ({ planData, onBack, onReset }: PlanPreviewProps) => {
  const generateEnhancedContent = () => {
    // 企業簡介（專業、簡潔風格）
    const description = planData.businessDescription ? 
      `${planData.companyName}設立於${planData.industry || '相關產業'}領域，現有員工${planData.employeeCount}人。${planData.businessDescription}本公司致力於技術創新與服務優化。在數位轉型趨勢下，人力資源為企業發展之關鍵要素。本公司建立系統性培訓計畫，提升員工專業能力，強化組織競爭力。透過完善的職能發展機制，培養具備專業技能、創新思維與國際視野的人才，支撐企業永續發展。` :
      `${planData.companyName}為${planData.industry || '相關產業'}之專業企業，現有員工${planData.employeeCount}人。本公司秉持專業與創新精神，持續提供優質服務。面對產業數位轉型，本公司將人力資源視為核心資產，建立系統性教育訓練體系，提升專業技能、管理能力與創新思維，建構學習型組織文化。`;

    const vision = planData.vision ? 
      `${planData.companyName}以「${planData.vision}」為發展願景。本公司認知人才為企業成長之核心動能，透過完善的人才發展體系，提升員工專業職能與競爭力。本計畫將建立涵蓋專業技能、管理能力、創新思維與國際視野之綜合培訓體系，培養符合企業發展需求之專業人才，達成組織目標並提升產業競爭力。` :
      `${planData.companyName}以成為${planData.industry || '業界'}人才發展標竿為願景。本公司建立系統性教育訓練體系，提升員工專業能力、創新思維與團隊協作精神。透過完善的培訓制度與職涯發展路徑，培養具備國際視野與專業能力之人才，支撐企業永續經營目標。`;

    return { description, vision };
  };

  const generateBusinessGoals = () => {
    return [
      {
        title: "建立完善人才培育體系",
        description: "建構分層分級之教育訓練制度，培養專業技術、管理領導與創新思維能力。透過 AWS 雲端技術培訓，提升組織數位轉型能力，強化人才競爭力。預計三年內完成核心職能培訓體系建置，培訓涵蓋率達90%以上。"
      },
      {
        title: "推動國際化與跨域合作",
        description: "培養員工國際視野與跨文化溝通能力，引進國際級技術認證課程。透過 AWS 國際認證培訓，提升員工全球化技術能力，拓展國際市場。預計兩年內取得國際認證人數達30人以上。"
      },
      {
        title: "強化創新研發能量",
        description: "建立創新思維培育機制，導入設計思考與敏捷開發方法論。透過 AWS AI/ML 與雲端架構培訓，提升技術創新能力。預計每年提出創新提案10件以上，技術專利申請3件以上。"
      },
      {
        title: "提升數位轉型能力",
        description: "全面提升組織數位化程度，建立數據驅動決策文化。導入 AWS 雲端服務與大數據分析培訓，優化營運效率。預計兩年內完成核心系統雲端化，降低營運成本15%以上。"
      }
    ];
  };

  const generateSWOTAnalysis = () => {
    return {
      strengths: [
        `具備 ${planData.employeeCount} 名員工的組織規模，擁有充足人力資源基礎`,
        `在 ${planData.industry || '相關產業'} 領域深耕，累積專業經驗與技術能力`,
        `管理階層具備明確企業願景和發展策略`,
        `重視人力資源發展與員工技能提升，展現良好學習文化`
      ],
      weaknesses: [
        `員工技能與未來發展需求存在能力落差，需系統性培訓規劃`,
        `數位轉型過程面臨技術更新與流程改善挑戰`,
        `人才培育制度待建立完整體系架構與評估機制`,
        `跨部門協作與知識分享機制需進一步強化`
      ],
      opportunities: [
        `政府推動人力提升計畫，提供企業培訓補助資源`,
        `${planData.industry || '產業'}數位化轉型趨勢，為企業創新發展帶來機遇`,
        `透過員工技能提升與組織學習，有效增強市場競爭力`,
        `建立完善人才培育體系，提升員工留任率與組織向心力`
      ],
      threats: [
        `產業競爭激烈，同業間人才爭奪加劇，需強化人才留任策略`,
        `科技發展與市場變化快速，組織需具備敏捷應變與持續學習能力`,
        `外部經濟環境不確定性增加，可能影響培訓資源配置`,
        `未能及時提升員工能力，可能面臨核心競爭力下滑風險`
      ]
    };
  };

  const generateTrainingNeeds = () => {
    return {
      weaknessResponse: [
        {
          weakness: "員工技能與發展需求存在能力落差",
          training: "規劃 AWS Cloud Practitioner 與 Solutions Architect 課程，建立雲端技術基礎能力，縮短技能落差。透過分層分級培訓，依職能需求客製化課程內容，確保訓練成效。"
        },
        {
          weakness: "數位轉型面臨技術更新挑戰",
          training: "導入 AWS Machine Learning、Data Lake 與 DevOps 培訓，提升 AI/ML 應用、大數據分析與自動化開發能力。建立數位轉型人才庫，推動組織技術升級。"
        },
        {
          weakness: "人才培育制度待完善",
          training: "建立職能評估機制與培訓追蹤系統，設計完整培訓路徑。透過 AWS 認證體系，建立客觀評估標準，確保培訓品質與成效。"
        }
      ],
      threatResponse: [
        {
          threat: "產業人才競爭加劇",
          training: "提供 AWS 國際認證培訓，提升員工專業能力與市場競爭力。建立完善職涯發展路徑與激勵機制，增強員工留任意願。"
        },
        {
          threat: "科技發展快速變化",
          training: "建立持續學習機制，定期更新課程內容。導入 AWS 最新技術培訓，培養員工敏捷學習能力與技術適應力。"
        }
      ]
    };
  };

  const generateAWSCourses = () => {
    const baseContent = planData.trainingContent || '';
    const courses = [];

    // 基礎課程
    courses.push({
      name: "AWS Cloud Practitioner Essentials",
      hours: 16,
      target: "全員基礎雲端認知",
      content: "雲端運算基礎概念、AWS 核心服務介紹、雲端安全與合規、定價與支援模型。建立組織雲端基礎知識，提升數位轉型意識。",
      outcome: "取得 AWS Cloud Practitioner 認證，建立雲端基礎能力，預計培訓50人，認證通過率達80%以上"
    });

    // 根據用戶輸入判斷需要的進階課程
    if (baseContent.includes('架構') || baseContent.includes('系統') || baseContent.includes('技術')) {
      courses.push({
        name: "AWS Solutions Architect Associate",
        hours: 40,
        target: "強化系統架構設計能力",
        content: "雲端架構設計原則、高可用性與容錯設計、安全架構實作、成本優化策略。培養雲端架構師能力，支撐系統現代化需求。",
        outcome: "取得 Solutions Architect 認證，提升架構設計能力，預計培訓15人，建立3個雲端專案"
      });
    }

    if (baseContent.includes('AI') || baseContent.includes('機器學習') || baseContent.includes('智慧') || baseContent.includes('數據')) {
      courses.push({
        name: "AWS Machine Learning & SageMaker",
        hours: 32,
        target: "提升 AI/ML 應用能力",
        content: "機器學習基礎、SageMaker 平台應用、模型訓練與部署、AI 解決方案設計。建立 AI/ML 實務能力，推動智慧化應用。",
        outcome: "建立 AI/ML 應用能力，導入2個 AI 專案，預計培訓10人，提升業務效率20%"
      });
    }

    if (baseContent.includes('數據') || baseContent.includes('分析') || baseContent.includes('資料')) {
      courses.push({
        name: "AWS Data Lake & Analytics",
        hours: 24,
        target: "強化大數據分析能力",
        content: "數據湖架構設計、ETL 流程建置、數據分析與視覺化、商業智慧應用。建立數據驅動決策能力，優化營運效率。",
        outcome: "建立大數據分析平台，培訓12人，提升數據分析效率30%，支援管理決策"
      });
    }

    if (baseContent.includes('開發') || baseContent.includes('DevOps') || baseContent.includes('自動化')) {
      courses.push({
        name: "AWS DevOps Engineering",
        hours: 32,
        target: "優化開發流程與效率",
        content: "CI/CD 流程建置、基礎設施即代碼、容器化與微服務、自動化測試與部署。提升開發效率，降低營運成本。",
        outcome: "建立 CI/CD 流程，培訓8人，提升開發效率30%，縮短上線時間50%"
      });
    }

    // 安全課程（必備）
    courses.push({
      name: "AWS Security Fundamentals",
      hours: 16,
      target: "提升資訊安全意識",
      content: "雲端安全架構、身分與存取管理、資料加密與保護、合規與稽核。建立資安防護機制，降低資安風險。",
      outcome: "建立資安防護機制，培訓30人，降低資安事件發生率，提升資安意識"
    });

    return courses;
  };

  const generateQuantitativeKPI = () => {
    const courses = generateAWSCourses();
    const totalTrainees = courses.reduce((sum, course) => {
      const match = course.outcome.match(/培訓(\d+)人/);
      return sum + (match ? parseInt(match[1]) : 0);
    }, 0);

    return {
      training: [
        `完成培訓總人數：${totalTrainees}人（佔全體員工${Math.round((totalTrainees / parseInt(planData.employeeCount)) * 100)}%）`,
        `取得國際認證人數：${Math.round(totalTrainees * 0.4)}人以上`,
        `培訓總時數：${courses.reduce((sum, c) => sum + c.hours, 0)}小時`,
        `課程滿意度目標：4.5分以上（5分制）`
      ],
      performance: [
        `組織數位化程度提升30%以上`,
        `開發效率提升30%，系統上線時間縮短50%`,
        `營運成本降低15%以上`,
        `員工留任率提升至85%以上`
      ],
      innovation: [
        `每年提出創新提案10件以上`,
        `導入雲端技術專案5個以上`,
        `技術專利申請3件以上`,
        `建立2個以上 AI/ML 應用場景`
      ]
    };
  };

  const enhancedContent = generateEnhancedContent();
  const businessGoals = generateBusinessGoals();
  const swot = generateSWOTAnalysis();
  const trainingNeeds = generateTrainingNeeds();
  const awsCourses = generateAWSCourses();
  const kpi = generateQuantitativeKPI();

  const handleDownload = async () => {
    try {
      const { jsPDF } = await import('jspdf');
      const html2canvas = (await import('html2canvas')).default;
      
      const element = document.getElementById('plan-content');
      if (!element) return;

      const pdf = new jsPDF('p', 'mm', 'a4');
      const pdfWidth = 210;
      const pdfHeight = 297;
      const margin = 15;

      // 創建臨時容器，優化PDF渲染
      const tempContainer = document.createElement('div');
      tempContainer.style.cssText = `
        position: absolute;
        left: -9999px;
        width: 210mm;
        background: white;
        padding: ${margin}mm;
        font-family: 'Microsoft JhengHei', sans-serif;
        font-size: 11pt;
        line-height: 1.6;
      `;

      const clonedElement = element.cloneNode(true) as HTMLElement;
      
      // 移除互動元素
      clonedElement.querySelectorAll('button').forEach(el => el.remove());
      
      // 優化樣式
      clonedElement.querySelectorAll('*').forEach(el => {
        const element = el as HTMLElement;
        element.style.color = '#000';
        element.style.pageBreakInside = 'avoid';
      });

      // 標題防止分頁切斷
      clonedElement.querySelectorAll('h1, h2, h3, h4').forEach(el => {
        const element = el as HTMLElement;
        element.style.pageBreakAfter = 'avoid';
        element.style.marginTop = '12pt';
        element.style.marginBottom = '8pt';
      });

      // 段落優化
      clonedElement.querySelectorAll('p').forEach(el => {
        const element = el as HTMLElement;
        element.style.marginBottom = '8pt';
        element.style.textAlign = 'justify';
      });

      // 列表優化
      clonedElement.querySelectorAll('ul, ol').forEach(el => {
        const element = el as HTMLElement;
        element.style.pageBreakInside = 'avoid';
        element.style.marginBottom = '12pt';
      });

      // 表格優化
      clonedElement.querySelectorAll('table').forEach(el => {
        const element = el as HTMLElement;
        element.style.pageBreakInside = 'avoid';
        element.style.borderCollapse = 'collapse';
        element.style.width = '100%';
        element.style.marginBottom = '12pt';
      });

      tempContainer.appendChild(clonedElement);
      document.body.appendChild(tempContainer);

      const canvas = await html2canvas(tempContainer, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        logging: false
      });

      document.body.removeChild(tempContainer);

      const imgWidth = pdfWidth - (margin * 2);
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      const pageHeight = pdfHeight - (margin * 2);

      let heightLeft = imgHeight;
      let position = 0;
      let page = 1;

      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', margin, margin, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = -(pageHeight * page);
        pdf.addPage();
        page++;
        pdf.addImage(canvas.toDataURL('image/png'), 'PNG', margin, position + margin, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }

      // 添加頁碼
      const totalPages = (pdf as any).internal.getNumberOfPages();
      for (let i = 1; i <= totalPages; i++) {
        pdf.setPage(i);
        pdf.setFontSize(9);
        pdf.setTextColor(100);
        pdf.text(`第 ${i} 頁，共 ${totalPages} 頁`, pdfWidth - margin, pdfHeight - 8, { align: 'right' });
      }

      pdf.save(`${planData.companyName}-人力資源提升計畫書.pdf`);
      alert('計畫書已成功下載！');
    } catch (error) {
      console.error('PDF 生成失敗:', error);
      alert('PDF 生成失敗，請稍後再試');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-business-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-5xl mx-auto">
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
              <Button onClick={handleDownload} className="bg-business-accent hover:bg-business-accent/90">
                <Download className="mr-2 h-4 w-4" />
                下載計畫書
              </Button>
            </div>
          </div>

          <Card className="mb-8 bg-gradient-card border-business-accent/20">
            <CardContent className="p-6">
              <div className="flex items-center gap-4">
                <CheckCircle className="h-12 w-12 text-business-accent" />
                <div>
                  <h3 className="text-xl font-semibold">計畫書生成完成！</h3>
                  <p className="text-muted-foreground">
                    您的企業人力資源提升計畫書已準備就緒。請下載後與政府補助顧問進行專業諮詢。
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <div id="plan-content" className="space-y-6">
            {/* 封面 */}
            <Card>
              <CardHeader className="bg-[#1e40af] text-white py-12">
                <CardTitle className="text-center space-y-2">
                  <div className="text-3xl font-bold">{planData.companyName}</div>
                  <div className="text-2xl">企業人力資源提升計畫</div>
                  <div className="text-xl">訓練計畫規劃書</div>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-3 text-business-primary">計畫聯絡資訊</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">聯絡人：</span>{planData.contact}</p>
                      <p><span className="font-medium">電話：</span>{planData.phone}</p>
                      <p><span className="font-medium">郵件：</span>{planData.email}</p>
                      {planData.address && <p><span className="font-medium">地址：</span>{planData.address}</p>}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-business-primary">公司基本資料</h4>
                    <div className="space-y-2">
                      <p><span className="font-medium">統一編號：</span>{planData.companyId}</p>
                      <p><span className="font-medium">產業類別：</span>{planData.industry || '相關服務業'}</p>
                      <p><span className="font-medium">員工人數：</span>{planData.employeeCount}</p>
                      {planData.capital && <p><span className="font-medium">資本額：</span>{planData.capital}</p>}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 一、企業簡介 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <Building className="h-5 w-5" />
                  一、企業簡介
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                <div>
                  <h4 className="font-semibold mb-2">1. 公司概況</h4>
                  <p className="leading-relaxed text-muted-foreground">{enhancedContent.description}</p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">2. 經營理念與願景</h4>
                  <p className="leading-relaxed text-muted-foreground">{enhancedContent.vision}</p>
                </div>
              </CardContent>
            </Card>

            {/* 二、SWOT 分析 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <TrendingUp className="h-5 w-5" />
                  二、SWOT 策略分析
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="font-semibold mb-3 text-green-700">優勢 (Strengths)</h4>
                    <ul className="space-y-2">
                      {swot.strengths.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-red-700">劣勢 (Weaknesses)</h4>
                    <ul className="space-y-2">
                      {swot.weaknesses.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-700">機會 (Opportunities)</h4>
                    <ul className="space-y-2">
                      {swot.opportunities.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-700">威脅 (Threats)</h4>
                    <ul className="space-y-2">
                      {swot.threats.map((item, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 三、中長期經營目標 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <Target className="h-5 w-5" />
                  三、中長期經營目標
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-sm">
                {businessGoals.map((goal, i) => (
                  <div key={i} className="border-l-4 border-business-primary pl-4 py-2">
                    <h4 className="font-semibold mb-2">{i + 1}. {goal.title}</h4>
                    <p className="text-muted-foreground leading-relaxed">{goal.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* 四、訓練需求分析 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <BookOpen className="h-5 w-5" />
                  四、訓練需求分析
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3">1. 針對劣勢之訓練需求</h4>
                  <div className="space-y-4">
                    {trainingNeeds.weaknessResponse.map((item, i) => (
                      <div key={i} className="bg-red-50 p-4 rounded-lg">
                        <p className="font-medium text-red-800 mb-2">► {item.weakness}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.training}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">2. 針對威脅之訓練需求</h4>
                  <div className="space-y-4">
                    {trainingNeeds.threatResponse.map((item, i) => (
                      <div key={i} className="bg-orange-50 p-4 rounded-lg">
                        <p className="font-medium text-orange-800 mb-2">► {item.threat}</p>
                        <p className="text-muted-foreground leading-relaxed">{item.training}</p>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-3">3. 訓練目標</h4>
                  <p className="text-muted-foreground leading-relaxed">
                    {planData.trainingGoals || 
                      `透過系統性培訓計畫，提升員工專業技能與數位轉型能力。導入 AWS 雲端技術培訓，建立國際級技術能力，強化組織競爭力。預計完成 ${awsCourses.reduce((sum, c) => {
                        const match = c.outcome.match(/培訓(\d+)人/);
                        return sum + (match ? parseInt(match[1]) : 0);
                      }, 0)} 人次培訓，取得國際認證人數達30人以上，全面提升組織數位化程度。`
                    }
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* 五、訓練計畫規劃 */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <Users className="h-5 w-5" />
                  五、訓練計畫規劃
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3">課程規劃摘要表</h4>
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border">
                      <thead>
                        <tr className="bg-business-secondary">
                          <th className="border p-2 font-semibold">課程名稱</th>
                          <th className="border p-2 font-semibold">時數</th>
                          <th className="border p-2 font-semibold">對應目標</th>
                          <th className="border p-2 font-semibold">預期成效</th>
                        </tr>
                      </thead>
                      <tbody>
                        {awsCourses.map((course, i) => (
                          <tr key={i}>
                            <td className="border p-2 font-medium">{course.name}</td>
                            <td className="border p-2 text-center">{course.hours}h</td>
                            <td className="border p-2">{course.target}</td>
                            <td className="border p-2">{course.outcome}</td>
                          </tr>
                        ))}
                        <tr className="bg-business-secondary/30 font-semibold">
                          <td className="border p-2">合計</td>
                          <td className="border p-2 text-center">{awsCourses.reduce((sum, c) => sum + c.hours, 0)}h</td>
                          <td className="border p-2" colSpan={2}>全面提升組織雲端技術能力與數位轉型競爭力</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold mb-3">課程詳細內容</h4>
                  <div className="space-y-4">
                    {awsCourses.map((course, i) => (
                      <div key={i} className="bg-business-secondary/20 p-4 rounded-lg">
                        <h5 className="font-semibold text-business-primary mb-2">
                          {i + 1}. {course.name} ({course.hours}小時)
                        </h5>
                        <p className="text-muted-foreground mb-2"><span className="font-medium">對應營運需求：</span>{course.target}</p>
                        <p className="text-muted-foreground mb-2"><span className="font-medium">課程內容：</span>{course.content}</p>
                        <p className="text-muted-foreground"><span className="font-medium">預期成效：</span>{course.outcome}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {planData.timeline && (
                  <div>
                    <h4 className="font-semibold mb-2">執行時程</h4>
                    <p className="text-muted-foreground">預計執行期間：{planData.timeline}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* 六、預期效益與量化 KPI */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-business-primary">
                  <CheckCircle className="h-5 w-5" />
                  六、預期效益與量化 KPI
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6 text-sm">
                <div>
                  <h4 className="font-semibold mb-3 text-blue-700">培訓成果指標</h4>
                  <ul className="space-y-2">
                    {kpi.training.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-green-700">營運績效指標</h4>
                  <ul className="space-y-2">
                    {kpi.performance.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold mb-3 text-orange-700">創新成果指標</h4>
                  <ul className="space-y-2">
                    {kpi.innovation.map((item, i) => (
                      <li key={i} className="flex gap-2">
                        <span>•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {planData.expectedOutcome && (
                  <div>
                    <h4 className="font-semibold mb-2">預期成果說明</h4>
                    <p className="text-muted-foreground leading-relaxed">{planData.expectedOutcome}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center gap-4 mt-8 pb-8">
            <Button variant="outline" onClick={onBack} size="lg">
              <ArrowLeft className="mr-2 h-4 w-4" />
              返回修改
            </Button>
            <Button onClick={handleDownload} size="lg" className="bg-business-accent hover:bg-business-accent/90">
              <Download className="mr-2 h-4 w-4" />
              下載完整計畫書
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};