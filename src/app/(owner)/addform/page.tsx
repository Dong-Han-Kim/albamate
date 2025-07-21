import { Metadata } from 'next';

import AddformClient from '@/features/owner/addform/components/AddformClient';

interface AddformPageProps {
  searchParams?: {
    formId?: string | string[];
    [key: string]: undefined | string | string[];
  };
}

export const generateMetadata = async ({
  searchParams,
}: AddformPageProps): Promise<Metadata> => {
  const formId = Array.isArray(searchParams?.formId)
    ? searchParams.formId[0]
    : searchParams?.formId;

  if (formId) {
    return {
      title: `알바폼 수정하기`,
      description: `알바폼을 수정하는 페이지입니다.`,
    };
  }

  return {
    title: '새 알바폼 만들기',
    description: '새로운 알바폼을 작성하는 페이지입니다.',
  };
};

const AddformPage = async ({ searchParams }: AddformPageProps) => {
  const formId = Array.isArray(searchParams?.formId)
    ? searchParams.formId[0]
    : searchParams?.formId;
  return <AddformClient formId={formId} />;
};
export default AddformPage;
