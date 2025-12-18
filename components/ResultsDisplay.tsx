import { useState } from 'react';
import { BlogPost } from '@shared/types';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '@/components/ui/dialog';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Award, Search, User, Calendar } from 'lucide-react';

interface ResultsDisplayProps {
  data: BlogPost[];
  isLoading?: boolean;
  error?: string | null;
}

export function ResultsDisplay({ data, isLoading, error }: ResultsDisplayProps) {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDetails = (blog: BlogPost) => {
    setSelectedBlog(blog);
    setDialogOpen(true);
  };

  if (isLoading) {
    return (
      <Card className="w-full">
        <CardContent className="p-8">
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-orange-600"></div>
            <span className="ml-3 text-lg">Loading blogs...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Alert className="border-red-200 bg-red-50">
        <AlertDescription className="text-red-800">
          {error}
        </AlertDescription>
      </Alert>
    );
  }

  if (data.length === 0) {
    return (
      <Card className="w-full">
        <CardContent className="p-8 text-center">
          <div className="text-gray-500">
            <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
            <p className="text-lg">No blogs found</p>
            <p className="text-sm">Try adjusting your search criteria</p>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Award className="h-5 w-5" />
            Blog Posts ({data.length} found)
          </CardTitle>
          <CardDescription>
            Featured blog posts
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {data.map((blog, index) => (
              <div
                key={index}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors cursor-pointer"
                onClick={() => openDetails(blog)}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{blog.title}</h3>
                    <p className="text-sm text-gray-600 mt-1 flex items-center gap-2">
                      <User className="h-4 w-4" />
                      {blog.author}
                    </p>
                    <p className="text-sm text-gray-700 mt-2 line-clamp-2">{blog.content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{selectedBlog?.title}</DialogTitle>
            <DialogDescription>Blog post details</DialogDescription>
          </DialogHeader>
          {selectedBlog && (
            <div className="mt-4 space-y-4 text-sm max-h-[60vh] overflow-y-auto">
              <div>
                <span className="text-gray-600 font-medium">Author:</span>
                <p className="text-gray-800 flex items-center gap-2 mt-1">
                  <User className="h-4 w-4" />
                  {selectedBlog.author}
                </p>
              </div>

              <hr className="border-gray-200" />

              <div>
                <span className="text-gray-600 font-medium">Content:</span>
                <div className="text-gray-800 bg-gray-50 rounded-md p-3 leading-relaxed mt-2 whitespace-pre-wrap">
                  {selectedBlog.content}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
