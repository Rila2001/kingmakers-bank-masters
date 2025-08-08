import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CollapsibleSection, CollapsibleItem } from "@/components/ui/collapsible-section"
import { useNavigate } from "react-router-dom"
import { Banknote, Users, Award, TrendingUp } from "lucide-react"

const Index = () => {
  const navigate = useNavigate()

  const bankExams = [
    "IBPS PO", "IBPS Clerk", "SBI PO", "SBI Clerk", 
    "IBPS SO", "IBPS RRB PO", "IBPS RRB Clerk", 
    "RBI Grade B", "RBI Assistant", "NABARD Grade A", "NABARD Grade B"
  ]

  const eligibilityData = [
    { exam: "RBI GRADE B", minAge: 21, maxAge: { general: 30, obc: 33, sc: 35 } },
    { exam: "RBI Assistant", minAge: 20, maxAge: { general: 28, obc: 31, sc: 33 } },
    { exam: "IBPS PO", minAge: 20, maxAge: { general: 30, obc: 33, sc: 35 } },
    { exam: "RRB PO", minAge: 21, maxAge: { general: 40, obc: 43, sc: 45 } },
    { exam: "SBI Clerk", minAge: 20, maxAge: { general: 28, obc: 31, sc: 33 } },
    { exam: "RRB Clerk", minAge: 18, maxAge: { general: 40, obc: 43, sc: 45 } }
  ]

  return (
    <div className="min-h-screen bg-banking-light">
      {/* Header */}
      <header className="bg-gradient-primary shadow-banking">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-3">
              <Banknote className="h-8 w-8 text-banking-gold" />
              <h1 className="text-2xl font-bold text-white">KingMakers School of Banking</h1>
            </div>
            <Button 
              onClick={() => navigate("/home")}
              variant="secondary"
              className="bg-banking-gold text-banking-dark hover:bg-banking-gold/90 font-semibold"
            >
              Home
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center bg-banking-blue text-white px-6 py-2 rounded-full mb-4">
            <Banknote className="h-5 w-5 mr-2" />
            <span className="font-semibold">Banking</span>
          </div>
          <h1 className="text-4xl font-bold text-banking-dark mb-4">
            KingMakers School of Banking: The Best Bank Exam Coaching Centre in Chennai
          </h1>
          <p className="text-lg text-muted-foreground mb-6">
            Name of the Recruiting Body: Institute of Banking Personnel Selection (IBPS) / RBI / SBI
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          <Card className="text-center bg-gradient-primary text-white shadow-banking">
            <CardContent className="pt-6">
              <Users className="h-8 w-8 mx-auto mb-2 text-banking-gold" />
              <p className="text-2xl font-bold">38,142</p>
              <p className="text-sm opacity-90">Total Bank Posts</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Award className="h-8 w-8 mx-auto mb-2 text-banking-blue" />
              <p className="text-2xl font-bold text-banking-dark">100%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <TrendingUp className="h-8 w-8 mx-auto mb-2 text-banking-success" />
              <p className="text-2xl font-bold text-banking-dark">5000+</p>
              <p className="text-sm text-muted-foreground">Students Placed</p>
            </CardContent>
          </Card>
          <Card className="text-center">
            <CardContent className="pt-6">
              <Banknote className="h-8 w-8 mx-auto mb-2 text-banking-gold" />
              <p className="text-2xl font-bold text-banking-dark">15+</p>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </CardContent>
          </Card>
        </div>

        {/* Collapsible Bank Posts Section */}
        <div className="mb-12">
          <CollapsibleSection title="BANK – 38,142 posts" defaultOpen={true}>
            {bankExams.map((exam, index) => (
              <CollapsibleItem key={index}>
                {exam}
              </CollapsibleItem>
            ))}
          </CollapsibleSection>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="text-banking-dark">Type of Services</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "RBI Grade B Officer",
                  "RBI Assistant",
                  "LIC Assistant Administrative Officer",
                  "LIC Apprentice Development Officer",
                  "Specialist Officer",
                  "Probationary Officer",
                  "Clerical Officer"
                ].map((service, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-banking-blue rounded-full mr-3"></div>
                    {service}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="shadow-card-custom">
            <CardHeader>
              <CardTitle className="text-banking-dark">Types of Exams</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {[
                  "RBI Grade B", "RBI Assistant", "LIC AAO", "LIC ADO",
                  "SBI SO", "IBPS SO", "SBI PO", "IBPS PO",
                  "RRB PO", "SBI Clerk", "IBPS Clerk", "RRB Clerk"
                ].map((exam, index) => (
                  <li key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-banking-gold rounded-full mr-3"></div>
                    {exam}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Eligibility Conditions */}
        <Card className="mb-12 shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-banking-dark">Eligibility Conditions</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-banking-blue text-white">
                    <th className="border border-border p-3 text-left">EXAM</th>
                    <th className="border border-border p-3 text-center">MIN AGE</th>
                    <th className="border border-border p-3 text-center">MAX AGE (General)</th>
                    <th className="border border-border p-3 text-center">MAX AGE (OBC)</th>
                    <th className="border border-border p-3 text-center">MAX AGE (SC)</th>
                  </tr>
                </thead>
                <tbody>
                  {eligibilityData.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? "bg-secondary/30" : ""}>
                      <td className="border border-border p-3 font-semibold">{row.exam}</td>
                      <td className="border border-border p-3 text-center">{row.minAge}</td>
                      <td className="border border-border p-3 text-center">{row.maxAge.general}</td>
                      <td className="border border-border p-3 text-center">{row.maxAge.obc}</td>
                      <td className="border border-border p-3 text-center">{row.maxAge.sc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Educational Qualifications */}
        <Card className="mb-12 shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-banking-dark">Educational Qualifications</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-2 h-2 bg-banking-success rounded-full mr-3 mt-2"></div>
                <span>All banking jobs require at least a bachelor's degree from a recognized university/institute.</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 bg-banking-success rounded-full mr-3 mt-2"></div>
                <span>Some banking jobs like Specialist Officer (SO) require additional qualifications.</span>
              </li>
            </ul>
          </CardContent>
        </Card>

        {/* Process of Examination */}
        <Card className="mb-12 shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-banking-dark">Process of Examination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="text-center">
                <h3 className="text-lg font-semibold text-banking-dark mb-4">All Bank Exams</h3>
              </div>
              
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="bg-banking-blue text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">1</div>
                  <h4 className="font-semibold text-banking-dark mb-2">Phase 1</h4>
                  <p className="text-sm text-muted-foreground">Preliminary Examination (Multiple Choice Test)</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-banking-gold text-banking-dark w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">2</div>
                  <h4 className="font-semibold text-banking-dark mb-2">Phase 2</h4>
                  <p className="text-sm text-muted-foreground">Main Examination (Multiple Choice / Descriptive)</p>
                </div>
                
                <div className="text-center">
                  <div className="bg-banking-success text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">3</div>
                  <h4 className="font-semibold text-banking-dark mb-2">Phase 3</h4>
                  <p className="text-sm text-muted-foreground">Interview (Except Clerical Posts)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Details of Examination */}
        <Card className="shadow-card-custom">
          <CardHeader>
            <CardTitle className="text-banking-dark">Details of Examination</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="bg-gradient-primary text-white p-6 rounded-lg mb-4">
              <h3 className="text-xl font-semibold mb-2">PROBATIONARY OFFICER</h3>
              <p className="opacity-90">Comprehensive training program for future banking leaders</p>
            </div>
            
            <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
              <h4 className="font-semibold text-red-800 mb-2">
                Penalty for wrong answers marked in Objective Tests of both Preliminary and Main Exams:
              </h4>
              <p className="text-red-700 text-sm">
                There will be penalty for wrong answers marked by candidates in the Objective Tests. 
                For each question for which a wrong answer has been given by the candidate, 
                one fourth or 0.25 of the marks assigned to that question will be deducted as penalty.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default Index