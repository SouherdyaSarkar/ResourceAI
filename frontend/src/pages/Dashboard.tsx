import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { BookOpen, Search, Loader2, Globe, FileText, Newspaper, BookMarked } from "lucide-react";
import { Link } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import ResourceCard from "@/components/ResourceCard";

interface Resource {
  id: string;
  title: string;
  url: string;
  type: string;
  description: string;
}

const Dashboard = () => {
  const { toast } = useToast();
  const [topic, setTopic] = useState("");
  const [additionalInfo, setAdditionalInfo] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<Resource[]>([]);
  const [selectedTypes, setSelectedTypes] = useState({
    websites: true,
    blogs: true,
    papers: true,
    articles: true,
  });

  const resourceTypes = [
    { id: "websites", label: "Websites", icon: Globe },
    { id: "blogs", label: "Blogs", icon: Newspaper },
    { id: "papers", label: "Research Papers", icon: BookMarked },
    { id: "articles", label: "Articles", icon: FileText },
  ];

  const handleTypeChange = (type: string) => {
    setSelectedTypes((prev) => ({
      ...prev,
      [type]: !prev[type],
    }));
  };

  const handleSearch = async () => {
    if (!topic.trim()) {
      toast({
        title: "Topic required",
        description: "Please enter a topic to search for",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResults: Resource[] = [
        {
          id: "1",
          title: "Introduction to " + topic,
          url: "https://example.com/intro",
          type: "websites",
          description: "A comprehensive guide covering the fundamentals and core concepts",
        },
        {
          id: "2",
          title: "Advanced " + topic + " Techniques",
          url: "https://example.com/advanced",
          type: "blogs",
          description: "Deep dive into advanced methodologies and best practices",
        },
        {
          id: "3",
          title: "Research Paper: " + topic + " Analysis",
          url: "https://example.com/research",
          type: "papers",
          description: "Academic research and experimental findings in the field",
        },
        {
          id: "4",
          title: "Latest Trends in " + topic,
          url: "https://example.com/trends",
          type: "articles",
          description: "Current developments and future directions in the industry",
        },
        {
          id: "5",
          title: topic + " Case Studies",
          url: "https://example.com/cases",
          type: "articles",
          description: "Real-world applications and success stories",
        },
      ];

      const filteredResults = mockResults.filter(
        (resource) => selectedTypes[resource.type as keyof typeof selectedTypes]
      );

      setResults(filteredResults);
      setIsLoading(false);
      
      toast({
        title: "Search complete!",
        description: `Found ${filteredResults.length} resources for "${topic}"`,
      });
    }, 2000);
  };

  const groupedResults = {
    websites: results.filter((r) => r.type === "websites"),
    blogs: results.filter((r) => r.type === "blogs"),
    papers: results.filter((r) => r.type === "papers"),
    articles: results.filter((r) => r.type === "articles"),
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/30">
      {/* Navbar */}
      <nav className="border-b bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              LearnHub
            </span>
          </Link>
          <Button variant="ghost">Sign Out</Button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            What do you want to learn today?
          </h1>
          <p className="text-muted-foreground text-lg">
            Enter your topic and discover curated learning resources
          </p>
        </div>

        {/* Search Form */}
        <Card className="p-8 shadow-lg mb-8">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="topic" className="text-base font-semibold">
                Topic of Interest
              </Label>
              <Input
                id="topic"
                placeholder="e.g., Machine Learning, Web Development, Digital Marketing..."
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                className="text-lg h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="additional" className="text-base font-semibold">
                Additional Points (Optional)
              </Label>
              <Input
                id="additional"
                placeholder="Add specific requirements or focus areas..."
                value={additionalInfo}
                onChange={(e) => setAdditionalInfo(e.target.value)}
                className="h-12"
              />
            </div>

            <div className="space-y-3">
              <Label className="text-base font-semibold">Resource Types</Label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {resourceTypes.map((type) => (
                  <div key={type.id} className="flex items-center space-x-2">
                    <Checkbox
                      id={type.id}
                      checked={selectedTypes[type.id as keyof typeof selectedTypes]}
                      onCheckedChange={() => handleTypeChange(type.id)}
                    />
                    <label
                      htmlFor={type.id}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 flex items-center gap-2 cursor-pointer"
                    >
                      <type.icon className="h-4 w-4 text-muted-foreground" />
                      {type.label}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            <Button
              onClick={handleSearch}
              size="lg"
              className="w-full gap-2"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <Loader2 className="h-5 w-5 animate-spin" />
                  Searching...
                </>
              ) : (
                <>
                  <Search className="h-5 w-5" />
                  Find Resources
                </>
              )}
            </Button>
          </div>
        </Card>

        {/* Loading Overlay */}
        {isLoading && (
          <div className="fixed inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center z-50">
            <Card className="p-8 text-center">
              <Loader2 className="h-12 w-12 animate-spin text-primary mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Finding the best resources...</h3>
              <p className="text-muted-foreground">This won't take long</p>
            </Card>
          </div>
        )}

        {/* Results Section */}
        {results.length > 0 && !isLoading && (
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-bold">
                Results for "{topic}"
              </h2>
              <span className="text-muted-foreground">
                {results.length} resources found
              </span>
            </div>

            {Object.entries(groupedResults).map(([type, resources]) => {
              if (resources.length === 0) return null;
              
              const typeInfo = resourceTypes.find((t) => t.id === type);
              
              return (
                <div key={type} className="space-y-4">
                  <div className="flex items-center gap-2">
                    {typeInfo && <typeInfo.icon className="h-5 w-5 text-primary" />}
                    <h3 className="text-xl font-semibold capitalize">
                      {typeInfo?.label}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      ({resources.length})
                    </span>
                  </div>
                  <div className="grid gap-4">
                    {resources.map((resource) => (
                      <ResourceCard key={resource.id} resource={resource} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Empty State */}
        {results.length === 0 && !isLoading && (
          <div className="text-center py-16">
            <Search className="h-16 w-16 text-muted-foreground mx-auto mb-4 opacity-50" />
            <p className="text-muted-foreground text-lg">
              Enter a topic to discover learning resources
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Dashboard;