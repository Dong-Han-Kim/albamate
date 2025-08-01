import { Suspense } from 'react';

import AuthForm from '@/features/auth/components/AuthForm';
import AuthSns from '@/features/auth/components/AuthSns';

const SignInPage = () => {
  return (
    <>
      <h1 className="sr-only">로그인 페이지</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm />
        <AuthSns />
      </Suspense>
    </>
  );
};

export default SignInPage;
