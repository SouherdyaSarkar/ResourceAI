import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Bookmark } from "lucide-react";

interface ResourceCardProps {
  resource: {
    id: string;
    title: string;
    url: string;
    type: string;
    description: string;
  };
}

const ResourceCard = ({ resource }: ResourceCardProps) => {
  return (
    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-l-4 border-l-primary/50">
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1 space-y-2">
          <h4 className="text-lg font-semibold hover:text-primary transition-colors">
            {resource.title}
          </h4>
          <p className="text-muted-foreground text-sm">
            {resource.description}
          </p>
          <p className="text-xs text-muted-foreground">
            {resource.url}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button
            size="sm"
            variant="ghost"
            className="gap-2"
          >
            <Bookmark className="h-4 w-4" />
          </Button>
          <Button
            size="sm"
            className="gap-2"
            onClick={() => window.open(resource.url, "_blank")}
          >
            <ExternalLink className="h-4 w-4" />
            Visit
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ResourceCard;