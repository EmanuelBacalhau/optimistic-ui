import { QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { ThemeProvider } from './app/contexts/ThemeContext';
import { Header } from './components/Header';
import { UserForm } from './components/UserForm';
import { UsersList } from './components/UsersList';
import { Toaster } from './components/ui/Sonner';
import { queryClient } from './lib/queryClient';

export function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme="dark" storageKey="optimistic-ui-theme">
        <div className="max-w-[500px] mx-auto mt-20 space-y-3">
          <Header />

          <UserForm />

          <main className="mt-10">
            <UsersList />
          </main>
        </div>
        <Toaster />
      </ThemeProvider>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
