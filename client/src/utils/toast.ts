import { toast } from 'react-hot-toast';

export const showToast = {
  success: (message: string) => toast.success(message, {
    style: {
      borderRadius: '12px',
      background: '#1e293b',
      color: '#fff',
      border: '1px solid var(--theme-border)',
    },
    iconTheme: {
      primary: 'var(--theme-accent)',
      secondary: '#fff',
    },
  }),
  error: (message: string) => toast.error(message, {
    style: {
      borderRadius: '12px',
      background: '#1e293b',
      color: '#fff',
      border: '1px solid var(--theme-border)',
    },
  }),
  loading: (message: string) => toast.loading(message, {
    style: {
      borderRadius: '12px',
      background: '#1e293b',
      color: '#fff',
      border: '1px solid var(--theme-border)',
    },
  }),
  dismiss: () => toast.dismiss(),
};
