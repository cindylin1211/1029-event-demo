import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ArrowLeft, ArrowRight, Building, Users, Target } from "lucide-react";
import { PlanData } from "@/pages/Index";

interface PlanFormProps {
  onSubmit: (data: PlanData) => void;
  onBack: () => void;
}

export const PlanForm = ({ onSubmit, onBack }: PlanFormProps) => {
  const [currentSection, setCurrentSection] = useState(1);
  const [formData, setFormData] = useState<Partial<PlanData>>({});
  const [isGenerating, setIsGenerating] = useState(false);

  const updateFormData = (field: keyof PlanData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    if (!isFormValid()) return;
    
    setIsGenerating(true);
    // 模擬 AI 生成時間
    await new Promise(resolve => setTimeout(resolve, 2000));
    onSubmit(formData as PlanData);
    setIsGenerating(false);
  };

  const isFormValid = () => {
    const required = ['companyName', 'companyId', 'contact', 'phone', 'email', 'employeeCount', 'trainingContent'];
    return required.every(field => formData[field as keyof PlanData]?.trim());
  };

  const sections = [
    {
      id: 1,
      title: "公司基本資料",
      icon: Building,
      fields: ['companyName', 'companyId', 'contact', 'phone', 'email', 'address', 'employeeCount', 'capital']
    },
    {
      id: 2, 
      title: "企業概況",
      icon: Users,
      fields: ['industry', 'website', 'businessDescription', 'vision', 'currentChallenges']
    },
    {
      id: 3,
      title: "訓練需求",
      icon: Target,
      fields: ['trainingGoals', 'trainingContent', 'expectedOutcome', 'timeline']
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-business-secondary">
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="ghost" onClick={onBack} className="p-2">
              <ArrowLeft className="h-5 w-5" />
            </Button>
            <div>
              <h1 className="text-3xl font-bold text-foreground">企畫書資料填寫</h1>
              <p className="text-muted-foreground">請詳細填寫以下資訊，我們將為您生成專業的企畫書</p>
            </div>
          </div>

          {/* Progress */}
          <div className="flex items-center gap-4 mb-8">
            {sections.map((section, index) => (
              <div key={section.id} className="flex items-center gap-2">
                <div className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  currentSection === section.id 
                    ? 'bg-business-primary text-white' 
                    : currentSection > section.id 
                      ? 'bg-business-accent text-white' 
                      : 'bg-business-secondary text-foreground'
                }`}>
                  <section.icon className="h-4 w-4" />
                  <span className="font-medium">{section.title}</span>
                </div>
                {index < sections.length - 1 && (
                  <ArrowRight className="h-4 w-4 text-muted-foreground" />
                )}
              </div>
            ))}
          </div>

          {/* Form */}
          <Card className="shadow-form">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                {(() => {
                  const currentSectionData = sections.find(s => s.id === currentSection);
                  const IconComponent = currentSectionData?.icon;
                  return IconComponent ? <IconComponent className="h-5 w-5 text-business-primary" /> : null;
                })()}
                {sections.find(s => s.id === currentSection)?.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {currentSection === 1 && (
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="companyName">公司名稱 *</Label>
                    <Input
                      id="companyName"
                      value={formData.companyName || ''}
                      onChange={(e) => updateFormData('companyName', e.target.value)}
                      placeholder="請輸入公司全名"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="companyId">統一編號 *</Label>
                    <Input
                      id="companyId"
                      value={formData.companyId || ''}
                      onChange={(e) => updateFormData('companyId', e.target.value)}
                      placeholder="8位數統一編號"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact">聯絡人 *</Label>
                    <Input
                      id="contact"
                      value={formData.contact || ''}
                      onChange={(e) => updateFormData('contact', e.target.value)}
                      placeholder="計畫聯絡人姓名"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">聯絡電話 *</Label>
                    <Input
                      id="phone"
                      value={formData.phone || ''}
                      onChange={(e) => updateFormData('phone', e.target.value)}
                      placeholder="公司電話號碼"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">聯絡郵件 *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email || ''}
                      onChange={(e) => updateFormData('email', e.target.value)}
                      placeholder="company@example.com"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="employeeCount">員工人數 *</Label>
                    <Input
                      id="employeeCount"
                      value={formData.employeeCount || ''}
                      onChange={(e) => updateFormData('employeeCount', e.target.value)}
                      placeholder="例：150"
                    />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="address">公司地址</Label>
                    <Input
                      id="address"
                      value={formData.address || ''}
                      onChange={(e) => updateFormData('address', e.target.value)}
                      placeholder="完整公司地址"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="capital">實收資本額</Label>
                    <Input
                      id="capital"
                      value={formData.capital || ''}
                      onChange={(e) => updateFormData('capital', e.target.value)}
                      placeholder="例：50,000,000"
                    />
                  </div>
                </div>
              )}

              {currentSection === 2 && (
                <div className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="industry">產業類別</Label>
                      <Input
                        id="industry"
                        value={formData.industry || ''}
                        onChange={(e) => updateFormData('industry', e.target.value)}
                        placeholder="例：軟體開發、製造業、服務業"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">公司網址</Label>
                      <Input
                        id="website"
                        value={formData.website || ''}
                        onChange={(e) => updateFormData('website', e.target.value)}
                        placeholder="https://www.company.com"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="businessDescription">公司簡介</Label>
                    <Textarea
                      id="businessDescription"
                      value={formData.businessDescription || ''}
                      onChange={(e) => updateFormData('businessDescription', e.target.value)}
                      placeholder="請描述公司的主要業務、產品或服務..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="vision">經營理念與願景</Label>
                    <Textarea
                      id="vision"
                      value={formData.vision || ''}
                      onChange={(e) => updateFormData('vision', e.target.value)}
                      placeholder="請描述公司的經營理念、願景和核心價值..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="currentChallenges">目前面臨的挑戰</Label>
                    <Textarea
                      id="currentChallenges"
                      value={formData.currentChallenges || ''}
                      onChange={(e) => updateFormData('currentChallenges', e.target.value)}
                      placeholder="請描述公司目前在人力資源或技能方面面臨的挑戰..."
                      className="min-h-[100px]"
                    />
                  </div>
                </div>
              )}

              {currentSection === 3 && (
                <div className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="trainingGoals">訓練目標</Label>
                    <Textarea
                      id="trainingGoals"
                      value={formData.trainingGoals || ''}
                      onChange={(e) => updateFormData('trainingGoals', e.target.value)}
                      placeholder="請描述希望透過訓練達成的目標..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="trainingContent">預計訓練內容 *</Label>
                    <Textarea
                      id="trainingContent"
                      value={formData.trainingContent || ''}
                      onChange={(e) => updateFormData('trainingContent', e.target.value)}
                      placeholder="請詳細描述預計的課程內容、技能培訓項目..."
                      className="min-h-[120px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="expectedOutcome">預期成果</Label>
                    <Textarea
                      id="expectedOutcome"
                      value={formData.expectedOutcome || ''}
                      onChange={(e) => updateFormData('expectedOutcome', e.target.value)}
                      placeholder="請描述訓練完成後的預期成果和效益..."
                      className="min-h-[100px]"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="timeline">預計時程</Label>
                    <Input
                      id="timeline"
                      value={formData.timeline || ''}
                      onChange={(e) => updateFormData('timeline', e.target.value)}
                      placeholder="例：6個月、2024年1月-6月"
                    />
                  </div>
                </div>
              )}

              {/* Navigation */}
              <div className="flex justify-between pt-6 border-t">
                <Button
                  variant="outline"
                  onClick={() => setCurrentSection(prev => Math.max(1, prev - 1))}
                  disabled={currentSection === 1}
                >
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  上一步
                </Button>

                {currentSection < 3 ? (
                  <Button
                    onClick={() => setCurrentSection(prev => Math.min(3, prev + 1))}
                    className="bg-business-primary hover:bg-business-primary/90"
                  >
                    下一步
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                ) : (
                  <Button
                    onClick={handleSubmit}
                    disabled={!isFormValid() || isGenerating}
                    className="bg-business-accent hover:bg-business-accent/90 shadow-button min-w-[120px]"
                  >
                    {isGenerating ? "生成中..." : "生成企畫書"}
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};