import { Button } from "@/components/ui/button"
import { ArrowLeft } from "lucide-react"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gradient-hero">
      <div className="container mx-auto px-4 py-16">
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-6">KingMakers School of Banking</h1>
          <p className="text-xl mb-8 opacity-90">Your Gateway to Banking Success</p>
          
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 max-w-2xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Welcome to Our Banking Academy</h2>
            <p className="mb-6 opacity-90">
              We are dedicated to providing the best banking exam preparation in Chennai. 
              Our comprehensive courses and expert guidance will help you achieve your banking career goals.
            </p>
            
            <Button 
              onClick={() => navigate("/")}
              className="bg-banking-gold text-banking-dark hover:bg-banking-gold/90 font-semibold px-8 py-3"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Courses
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home