import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";

const questions = [
  {
    id: 1,
    question: "What is your business size?",
    options: ["Solo Entrepreneur", "2-5 Employees", "6-20 Employees", "21+ Employees"],
  },
  {
    id: 2,
    question: "What industry are you in?",
    options: ["Retail", "Services", "Food & Beverage", "Professional Services", "Other"],
  },
  {
    id: 3,
    question: "What is your primary business goal?",
    options: ["Increase Sales", "Brand Awareness", "Customer Retention", "Market Expansion"],
  },
  {
    id: 4,
    question: "How do you currently market your business?",
    options: ["Social Media", "Word of Mouth", "Traditional Advertising", "Not Marketing Yet"],
  },
  {
    id: 5,
    question: "What is your biggest business challenge?",
    options: ["Marketing", "Operations", "Finance", "Customer Service", "Technology"],
  },
];

export default function QuestionsPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);

  const progress = ((currentQuestion + 1) / questions.length) * 100;

  const handleAnswer = (answer: string) => {
    const newAnswers = [...answers];
    newAnswers[currentQuestion] = answer;
    setAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="min-h-screen bg-[#F5F1EE] py-12">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="font-brandon text-3xl text-center text-[#501214] mb-8">
          BUSINESS DIAGNOSTIC QUESTIONNAIRE
        </h1>

        <Progress value={progress} className="mb-8" />

        <Card>
          <CardHeader>
            <CardTitle className="font-brandon text-xl text-[#501214]">
              {questions[currentQuestion].question}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[currentQuestion]}
              onValueChange={handleAnswer}
              className="space-y-4"
            >
              {questions[currentQuestion].options.map((option) => (
                <div key={option} className="flex items-center space-x-2">
                  <RadioGroupItem value={option} id={option} />
                  <Label htmlFor={option} className="font-nunito">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>

            <div className="flex justify-between mt-8">
              <Button
                onClick={handlePrevious}
                disabled={currentQuestion === 0}
                variant="outline"
              >
                Previous
              </Button>
              <Button
                onClick={handleNext}
                disabled={!answers[currentQuestion] || currentQuestion === questions.length - 1}
                className="bg-[#AC9155] hover:bg-[#6A5638]"
              >
                {currentQuestion === questions.length - 1 ? "Finish" : "Next"}
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
