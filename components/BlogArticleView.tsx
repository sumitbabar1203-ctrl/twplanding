import { useState, useEffect } from 'react';
import { BlogPost } from '@shared/types';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { User, ChevronLeft, ChevronRight } from 'lucide-react';

interface BlogArticleViewProps {
  blog: BlogPost;
  currentIndex: number;
  totalArticles: number;
  onNext: () => void;
  onPrevious: () => void;
}

export function BlogArticleView({
  blog,
  currentIndex,
  totalArticles,
  onNext,
  onPrevious,
}: BlogArticleViewProps) {
  const [flipKey, setFlipKey] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const handleNavigation = (callback: () => void) => {
    setIsFlipping(true);
    setTimeout(() => {
      callback();
      setFlipKey(prev => prev + 1);
      setIsFlipping(false);
    }, 300);
  };

  return (
    <Card className="rounded-2xl border-2 shadow-2xl overflow-hidden h-full flex flex-col animate-fade-in-up animate-delay-300" style={{ backgroundColor: '#FEFDF3', borderColor: '#F67418' }}>
      {/* Article Header */}
      <CardHeader className="text-white pb-8 relative" style={{ backgroundColor: '#F67418' }}>
        <div className="absolute top-0 right-0 w-40 h-40 opacity-5 rounded-full -mr-20 -mt-20" style={{ backgroundColor: '#FEFDF3' }}></div>
        
        <div className="relative z-10 space-y-4">
          <div className="inline-block rounded-full px-4 py-2 backdrop-blur-sm" style={{ backgroundColor: 'rgba(254, 253, 243, 0.2)' }}>
            <span className="text-sm font-semibold text-white">
              Article {currentIndex + 1} of {totalArticles}
            </span>
          </div>

          <CardTitle className="text-white text-4xl font-bold leading-tight">
            {blog.title}
          </CardTitle>

          <div className="flex items-center gap-4 pt-2">
            <div className="flex items-center gap-2 rounded-lg px-3 py-2 backdrop-blur-sm" style={{ backgroundColor: 'rgba(254, 253, 243, 0.15)' }}>
              <User className="h-4 w-4 text-white" />
              <span className="text-sm font-medium text-white">{blog.author}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      {/* Article Content */}
      <CardContent
        key={flipKey}
        className={`flex-1 overflow-y-auto p-8 space-y-6 scroll-animate ${isFlipping ? '' : 'flip-enter'}`}
        style={{ color: '#5A4C45' }}
      >
        <div className="prose prose-sm max-w-none">
          <div className="text-base leading-relaxed whitespace-pre-wrap font-light">
            {blog.content}
          </div>
        </div>

        {/* Decorative Element */}
        <div className="mt-12 pt-8 border-t-2" style={{ borderColor: '#F67418' }}>
          <div className="rounded-lg p-6 border-2" style={{ backgroundColor: '#F6741810', borderColor: '#F67418' }}>
            <p className="text-sm italic" style={{ color: '#5A4C45' }}>
              "Keep learning, keep growing. Your success is our mission."
            </p>
            <p className="font-semibold mt-3" style={{ color: '#F67418' }}>— The Wise Parrot Team</p>
          </div>
        </div>
      </CardContent>

      {/* Navigation Footer */}
      <div className="border-t-2 px-8 py-6 flex items-center justify-between gap-4 animate-fade-in-up" style={{ backgroundColor: '#FEFDF3', borderColor: '#F67418' }}>
        <Button
          onClick={() => handleNavigation(onPrevious)}
          disabled={isFlipping}
          className="flex items-center gap-2 border-2 font-semibold card-hover button-pulse transition-all duration-300"
          style={{
            backgroundColor: '#FEFDF3',
            color: '#042E2D',
            borderColor: '#F67418',
          }}
        >
          <ChevronLeft className="h-4 w-4" />
          <span>Previous</span>
        </Button>

        <div className="flex items-center gap-4">
          <span className="text-sm font-medium" style={{ color: '#5A4C45' }}>
            {currentIndex + 1} / {totalArticles}
          </span>
          <div className="flex gap-1">
            {Array.from({ length: totalArticles }).map((_, i) => (
              <div
                key={i}
                className="h-2 rounded-full transition-all duration-300"
                style={{
                  width: i === currentIndex ? '24px' : '8px',
                  backgroundColor: i === currentIndex ? '#F67418' : '#D4D4D4',
                }}
              />
            ))}
          </div>
        </div>

        <Button
          onClick={() => handleNavigation(onNext)}
          disabled={isFlipping}
          className="flex items-center gap-2 text-white font-semibold border-0 card-hover button-pulse transition-all duration-300"
          style={{
            backgroundColor: '#F67418',
          }}
        >
          <span>Next</span>
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </Card>
  );
}
