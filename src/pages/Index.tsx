import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlanForm } from "@/components/PlanForm";
import { PlanPreview } from "@/components/PlanPreview";
import { FileText, Sparkles, ArrowRight } from "lucide-react";

export interface PlanData {
  companyName: string;
  companyId: string;
  contact: string;
  phone: string;
  email: string;
  address: string;
  employeeCount: string;
  capital: string;
  industry: string;
  website: string;
  businessDescription: string;
  vision: string;
  currentChallenges: string;
  trainingGoals: string;
  trainingContent: string;
  expectedOutcome: string;
  timeline: string;
}

const Index = () => {
  const [currentStep, setCurrentStep] = useState<'intro' | 'form' | 'preview'>('intro');
  const [planData, setPlanData] = useState<PlanData | null>(null);

  const handleFormSubmit = (data: PlanData) => {
    setPlanData(data);
    setCurrentStep('preview');
  };

  const resetForm = () => {
    setPlanData(null);
    setCurrentStep('intro');
  };

  if (currentStep === 'form') {
    return <PlanForm onSubmit={handleFormSubmit} onBack={() => setCurrentStep('intro')} />;
  }

  if (currentStep === 'preview' && planData) {
    return <PlanPreview planData={planData} onBack={() => setCurrentStep('form')} onReset={resetForm} />;
  }

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          {/* Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <Sparkles className="h-5 w-5 text-white" />
              <span className="text-white font-medium">AI 智能計畫書生成</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6 leading-tight">
              企業人力資源提升計畫
              <br />
              <span className="text-primary-glow">計畫書生成平台</span>
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-3xl mx-auto leading-relaxed">
              只需填寫基本資訊，AI 即可為您產出專業的大人提申請計畫書，讓您輕鬆獲得政府補助顧問的專業諮詢
            </p>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-in">
              <CardContent className="p-6 text-center">
                <FileText className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">智能分析</h3>
                <p className="text-white/70">
                  根據企業資訊自動分析 SWOT，產出專業的企業經營策略內容
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-in" style={{ animationDelay: "0.1s" }}>
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">一鍵生成</h3>
                <p className="text-white/70">
                  簡單填寫表單，AI 立即生成完整的企業人力資源提升計畫書
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 animate-slide-in" style={{ animationDelay: "0.2s" }}>
              <CardContent className="p-6 text-center">
                <ArrowRight className="h-12 w-12 text-white mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-white mb-2">即時應用</h3>
                <p className="text-white/70">
                  生成的計畫書可直接用於政府補助申請和顧問諮詢
                </p>
              </CardContent>
            </Card>
          </div>

          {/* CTA */}
          <div className="space-y-4">
            <Button 
              size="lg" 
              onClick={() => setCurrentStep('form')}
              className="bg-white text-business-primary hover:bg-white/90 shadow-button px-8 py-6 text-lg font-semibold"
            >
              開始生成計畫書
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <p className="text-white/60 text-sm">
              完全免費使用 • 3 分鐘即可完成
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;