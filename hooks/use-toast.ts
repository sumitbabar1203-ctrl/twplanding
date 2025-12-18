interface ToastProps {
  title?: string;
  description?: string;
  variant?: 'default' | 'destructive' | 'success';
  duration?: number;
}

let toastElement: HTMLDivElement | null = null;

export function toast({ title, description, variant = 'default', duration = 3000 }: ToastProps) {
  if (toastElement) {
    toastElement.remove();
  }

  toastElement = document.createElement('div');

  const bgColor =
    variant === 'destructive'
      ? 'bg-red-100 border-red-200'
      : variant === 'success'
        ? 'bg-green-100 border-green-200'
        : 'bg-gray-100 border-gray-200';

  const textColor =
    variant === 'destructive'
      ? 'text-red-800'
      : variant === 'success'
        ? 'text-green-800'
        : 'text-gray-800';

  toastElement.className = `fixed bottom-4 right-4 max-w-sm rounded-lg border shadow-lg p-4 z-50 animate-fade-in-up ${bgColor} ${textColor}`;

  let content = '';
  if (title) {
    content += `<div class="font-semibold">${title}</div>`;
  }
  if (description) {
    content += `<div class="text-sm mt-1">${description}</div>`;
  }

  toastElement.innerHTML = content;
  document.body.appendChild(toastElement);

  setTimeout(() => {
    if (toastElement && toastElement.parentNode) {
      toastElement.remove();
      toastElement = null;
    }
  }, duration);
}
