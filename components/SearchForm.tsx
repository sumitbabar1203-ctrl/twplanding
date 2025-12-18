import { useState } from 'react';
import { Search, Calendar, Hash } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { DatePicker } from '@/components/ui/date-picker';
import { formatDateForAPI } from '@/lib/date-utils';
import { SearchFilters } from '@shared/types';
import { toast } from '@/hooks/use-toast';

interface SearchFormProps {
  onSearch: (filters: SearchFilters) => void;
  isLoading?: boolean;
}

export function SearchForm({ onSearch, isLoading = false }: SearchFormProps) {
  const [accountId, setAccountId] = useState('');
  const [dateRange, setDateRange] = useState<{ from?: Date; to?: Date }>({});
  const [errors, setErrors] = useState<{ accountId?: string; dateRange?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors: { accountId?: string; dateRange?: string } = {};

    if (!accountId.trim()) {
      newErrors.accountId = 'Account ID is required';
    }

    if (!dateRange.from || !dateRange.to) {
      newErrors.dateRange = 'Date range is required';
    } else if (dateRange.to < dateRange.from) {
      newErrors.dateRange = 'End Date cannot be earlier than Start Date';
      toast({ title: 'Invalid date range', description: 'End Date cannot be earlier than Start Date.', variant: 'destructive' });
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) return;

    const start = dateRange.from ? formatDateForAPI(dateRange.from) : '';
    const end = dateRange.to ? formatDateForAPI(dateRange.to) : '';
    const filters: SearchFilters = { accountId, startDate: start, endDate: end };
    onSearch(filters);
  };

  const handleAccountIdChange = (value: string) => {
    setAccountId(value);
    if (errors.accountId) {
      setErrors(prev => ({ ...prev, accountId: undefined }));
    }
  };

  const handleStartDateChange = (date?: Date) => {
    setDateRange(prev => {
      let nextTo = prev.to;
      if (date && prev.to && prev.to < date) {
        toast({ title: 'Invalid date range', description: 'End Date cannot be earlier than Start Date.', variant: 'destructive' });
        nextTo = date;
      }
      if (!date) nextTo = undefined;
      return { from: date, to: nextTo };
    });
    if (errors.dateRange) setErrors(prev => ({ ...prev, dateRange: undefined }));
  };

  const handleEndDateChange = (date?: Date) => {
    setDateRange(prev => {
      if (prev.from && date && date < prev.from) {
        toast({ title: 'Invalid date range', description: 'End Date cannot be earlier than Start Date.', variant: 'destructive' });
        return { from: prev.from, to: prev.from };
      }
      return { from: prev.from, to: date };
    });
    if (errors.dateRange) setErrors(prev => ({ ...prev, dateRange: undefined }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader className="text-center">
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
          Lead Data Search
        </CardTitle>
        <CardDescription>
          Enter an Account ID and Date to search for lead information
          <span className="block text-xs text-red-500 mt-1">* Required fields</span>
          <span className="block text-xs text-gray-500 mt-1">Dates are inclusive and formatted as DD-M-YYYY for searching (e.g., 05-8-2025 - 23-8-2025)</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-6 pb-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="accountId" className="text-sm font-medium flex items-center gap-2">
                <Hash className="h-4 w-4" />
                Account ID
                <span className="text-red-500">*</span>
              </Label>
              <Input
                id="accountId"
                type="text"
                placeholder="Enter account ID..."
                value={accountId}
                onChange={(e) => handleAccountIdChange(e.target.value)}
                className={`transition-all duration-200 focus:ring-2 focus:ring-orange-500 focus:border-orange-500 ${
                  errors.accountId ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''
                }`}
                required
              />
              {errors.accountId && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.accountId}
                </p>
              )}
            </div>
            <div className="space-y-3">
              <div className="space-y-2">
                <Label htmlFor="startDate" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  Start date <span className="text-red-500">*</span>
                </Label>
                <DatePicker
                  date={dateRange.from}
                  onSelect={handleStartDateChange}
                  placeholder="Select start date..."
                  className={`w-full ${errors.dateRange ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                />
                {!dateRange.from && (
                  <p className="text-xs text-gray-500">.</p>
                )}
              </div>
              <div className="space-y-2 mt-3">
                <Label htmlFor="endDate" className="text-sm font-medium flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  End date <span className="text-red-500">*</span>
                </Label>
                <DatePicker
                  date={dateRange.to}
                  onSelect={handleEndDateChange}
                  placeholder="Select end date..."
                  minDate={dateRange.from}
                  className={`w-full ${errors.dateRange ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : ''}`}
                />
              </div>
              {errors.dateRange && (
                <p className="text-sm text-red-500 flex items-center gap-1">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  {errors.dateRange}
                </p>
              )}
            </div>
          </div>
          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed text-white"
            disabled={isLoading || !accountId.trim() || !dateRange.from || !dateRange.to}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                Searching...
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <Search className="h-4 w-4" />
                Search Lead Data
              </div>
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
