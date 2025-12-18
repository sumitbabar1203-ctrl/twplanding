import { useState, useEffect } from 'react';
import { BlogPost } from '@shared/types';
import { fetchBlogsFromSheet } from '@/lib/google-sheets';
import { BlogArticleView } from '@/components/BlogArticleView';
import { Card, CardContent } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Search } from 'lucide-react';

export default function Blogs() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setIsLoading(true);
        setError(null);
        const blogsData = await fetchBlogsFromSheet();
        setBlogs(blogsData);
      } catch (err) {
        console.error('Error loading blogs:', err);
        setError(err instanceof Error ? err.message : 'Failed to load blogs');
      } finally {
        setIsLoading(false);
      }
    };

    loadBlogs();
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#042E2D' }}>
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-center h-96">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2" style={{ borderColor: '#45D081' }}></div>
            <span className="ml-3 text-lg" style={{ color: '#FEFDF3' }}>Loading blogs...</span>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#042E2D' }}>
        <div className="max-w-7xl mx-auto">
          <Alert className="border-2" style={{ borderColor: '#F67418', backgroundColor: '#FEFDF3' }}>
            <AlertDescription style={{ color: '#5A4C45' }}>
              {error}
            </AlertDescription>
          </Alert>
        </div>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: '#042E2D' }}>
        <div className="max-w-7xl mx-auto">
          <Card className="w-full" style={{ backgroundColor: '#FEFDF3', borderColor: '#F67418' }}>
            <CardContent className="p-8 text-center">
              <div style={{ color: '#5A4C45' }}>
                <Search className="h-12 w-12 mx-auto mb-4 opacity-50" />
                <p className="text-lg">No blogs found</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8 px-4 sm:px-6 lg:px-8 page-transition" style={{ backgroundColor: '#042E2D' }}>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="mb-12 text-center animate-fade-in">
          <div className="inline-block mb-6">
            <img
              src="https://cdn.builder.io/api/v1/image/assets%2F20d890f04181440e83da544dcedcd642%2F3bc2d4b45faf4c1fa246da0c8b05f847?format=webp&width=200"
              alt="Wise Parrot"
              className="h-24 w-24 object-contain drop-shadow-lg"
            />
          </div>
          <h1 className="text-5xl font-bold mb-3" style={{ color: '#F67418' }}>
            Blog Posts
          </h1>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#5A4C45' }}>
            Insights, tips, and strategies to help your business grow smarter and faster
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Sidebar - Article List */}
          <div className="lg:col-span-1">
            <div className="sticky top-4 space-y-6">
              {/* Mascot Section */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl p-6 border-2 card-hover animate-fade-in-up" style={{ backgroundColor: '#FEFDF3', borderColor: '#F67418' }}>
                <div className="absolute top-0 right-0 w-32 h-32 opacity-5 rounded-full -mr-16 -mt-16" style={{ backgroundColor: '#F67418' }}></div>
                <div className="relative z-10 text-center">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F20d890f04181440e83da544dcedcd642%2F3fa62faff797452c8a0e92df8303b788?format=webp&width=300"
                    alt="Wise Parrot Buddy"
                    className="h-48 w-48 object-contain mx-auto drop-shadow-xl"
                  />
                  <h3 className="font-bold text-lg mt-4" style={{ color: '#042E2D' }}>Your Learning Buddy</h3>
                  <p className="text-sm mt-2" style={{ color: '#5A4C45' }}>
                    Explore {blogs.length} insightful articles to grow your business
                  </p>
                </div>
              </div>

              {/* Articles List */}
              <div className="rounded-2xl border-2 overflow-hidden shadow-xl animate-fade-in-up animate-delay-200" style={{ backgroundColor: '#FEFDF3', borderColor: '#F67418' }}>
                <div className="px-6 py-4" style={{ backgroundColor: '#F67418' }}>
                  <h2 className="font-bold text-lg text-slide-in" style={{ color: '#FEFDF3' }}>Articles</h2>
                  <p className="text-sm mt-1" style={{ color: '#FEFDF3', opacity: 0.9 }}>{blogs.length} total posts</p>
                </div>
                <div className="divide-y max-h-[650px] overflow-y-auto" style={{ borderColor: '#E8E8E8' }}>
                  {blogs.map((blog, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedIndex(index)}
                      className={`w-full text-left px-6 py-4 transition-all duration-200 stagger-item card-hover ${
                        selectedIndex === index
                          ? 'border-l-4'
                          : ''
                      }`}
                      style={{
                        backgroundColor: selectedIndex === index ? '#F6741815' : '#FEFDF3',
                        borderLeftColor: selectedIndex === index ? '#F67418' : 'transparent',
                      }}
                    >
                      <div className="flex items-start gap-3">
                        <span className="font-bold text-sm mt-0.5 flex-shrink-0" style={{ color: '#F67418' }}>
                          {index + 1}
                        </span>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-sm line-clamp-2" style={{ color: '#042E2D' }}>
                            {blog.title}
                          </h3>
                          <p className="text-xs mt-1 font-medium" style={{ color: '#F67418' }}>By {blog.author}</p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Panel - Article Detail */}
          <div className="lg:col-span-2">
            <BlogArticleView
              blog={blogs[selectedIndex]}
              currentIndex={selectedIndex}
              totalArticles={blogs.length}
              onNext={() => setSelectedIndex((prev) => (prev + 1) % blogs.length)}
              onPrevious={() => setSelectedIndex((prev) => (prev - 1 + blogs.length) % blogs.length)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
