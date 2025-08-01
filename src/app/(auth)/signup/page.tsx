import { Suspense } from 'react';

import AuthForm from '@/features/auth/components/AuthForm';
import AuthSns from '@/features/auth/components/AuthSns';

const SignUpPage = () => {
  return (
    <>
      <h1 className="sr-only">회원가입 페이지</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthForm />
        <AuthSns />
      </Suspense>
    </>
  );
};

export default SignUpPage;
