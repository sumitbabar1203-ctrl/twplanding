import React, { useState } from 'react';

interface DatePickerProps extends React.InputHTMLAttributes<HTMLInputElement> {
  date?: Date;
  onSelect?: (date: Date | undefined) => void;
  minDate?: Date;
  maxDate?: Date;
}

export const DatePicker = React.forwardRef<HTMLInputElement, DatePickerProps>(
  ({ date, onSelect, minDate, maxDate, className, ...props }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      if (value) {
        onSelect?.(new Date(value));
      } else {
        onSelect?.(undefined);
      }
    };

    const dateValue = date ? date.toISOString().split('T')[0] : '';

    return (
      <input
        ref={ref}
        type="date"
        value={dateValue}
        onChange={handleChange}
        min={minDate ? minDate.toISOString().split('T')[0] : undefined}
        max={maxDate ? maxDate.toISOString().split('T')[0] : undefined}
        className={`flex h-10 w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className || ''}`}
        {...props}
      />
    );
  }
);

DatePicker.displayName = 'DatePicker';
