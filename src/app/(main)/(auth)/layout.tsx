import AuthChecker from '@/features/auth/components/AuthChecker';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {children}
      <AuthChecker />
    </>
  );
}
