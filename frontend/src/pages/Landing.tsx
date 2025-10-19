import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { BookOpen, Search, Globe, FileText, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Landing = () => {
  const features = [
    {
      icon: Search,
      title: "Smart Discovery",
      description: "Find curated resources tailored to your learning topic instantly"
    },
    {
      icon: Globe,
      title: "Diverse Sources",
      description: "Access websites, blogs, papers, and articles all in one place"
    },
    {
      icon: Sparkles,
      title: "Quality Focused",
      description: "Get the best learning materials filtered for accuracy and relevance"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Navbar */}
      <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LearnHub
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link to="/signin">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/signup">
              <Button variant="default">Sign Up</Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 pt-20 pb-16 text-center">
        <div className="max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            <Sparkles className="h-4 w-4" />
            Your Learning Journey Starts Here
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Discover the Best
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {" "}Learning Resources{" "}
            </span>
            for Any Topic
          </h1>
          
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Stop wasting time searching. Get curated, high-quality learning materials 
            from trusted sources - all organized and ready to accelerate your growth.
          </p>

          <div className="flex items-center justify-center gap-4 pt-4">
            <Link to="/dashboard">
              <Button size="lg" className="gap-2 shadow-lg hover:shadow-xl transition-all">
                Start Exploring
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
            <Link to="/signup">
              <Button size="lg" variant="outline" className="gap-2">
                Create Account
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Choose LearnHub?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quality resources are the foundation of effective learning. 
            We help you find them faster.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <Card 
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 border-2 hover:border-primary/20"
            >
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4">
                <feature.icon className="h-6 w-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <Card className="p-12 text-center bg-gradient-to-br from-primary/5 to-accent/5 border-primary/20">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Learn Smarter?
          </h2>
          <p className="text-muted-foreground mb-8 max-w-xl mx-auto">
            Join thousands of learners who have accelerated their growth with curated resources
          </p>
          <Link to="/signup">
            <Button size="lg" className="gap-2">
              Get Started Free
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </Card>
      </section>

      {/* Footer */}
      <footer className="border-t mt-16">
        <div className="container mx-auto px-4 py-8 text-center text-muted-foreground">
          <p>© 2025 LearnHub. Empowering learners worldwide.</p>
        </div>
      </footer>
    </div>
  );
};

export default Landing;