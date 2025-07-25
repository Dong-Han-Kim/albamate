import { Application } from '../types/MockApplication';

export const mockApplications: Application[] = [
  {
    id: 1,
    applicantId: 101,
    name: '홍길동',
    phoneNumber: '010-1234-5678',
    experienceMonths: 12,
    status: 'REJECTED',
    introduction: '열심히 하겠습니다!',
    resumeName: '이력서_홍길동.pdf',
    resumeId: 5,
    createdAt: '2025-07-22T00:30:18.684Z',
    updatedAt: '2025-07-22T00:30:18.684Z',
  },
  {
    id: 2,
    applicantId: 102,
    name: '김영희',
    phoneNumber: '010-9876-5432',
    experienceMonths: 6,
    status: 'PENDING',
    introduction: '성실히 일하겠습니다.',
    resumeName: '이력서_김영희.pdf',
    resumeId: 6,
    createdAt: '2025-07-21T18:10:00.000Z',
    updatedAt: '2025-07-21T18:10:00.000Z',
  },
  {
    id: 3,
    applicantId: 103,
    name: '이철수',
    phoneNumber: '010-2222-3333',
    experienceMonths: 24,
    status: 'ACCEPTED',
    introduction: '경험이 많습니다.',
    resumeName: '이력서_이철수.pdf',
    resumeId: 7,
    createdAt: '2025-07-20T14:00:00.000Z',
    updatedAt: '2025-07-20T14:00:00.000Z',
  },
  {
    id: 4,
    applicantId: 104,
    name: '박민지',
    phoneNumber: '010-4444-5555',
    experienceMonths: 0,
    status: 'PENDING',
    introduction: '첫 알바 도전입니다!',
    resumeName: '이력서_박민지.pdf',
    resumeId: 8,
    createdAt: '2025-07-19T10:00:00.000Z',
    updatedAt: '2025-07-19T10:00:00.000Z',
  },
  {
    id: 5,
    applicantId: 105,
    name: '조성훈',
    phoneNumber: '010-1111-9999',
    experienceMonths: 8,
    status: 'REJECTED',
    introduction: '빠르게 배우고 잘 할 수 있습니다.',
    resumeName: '이력서_조성훈.pdf',
    resumeId: 9,
    createdAt: '2025-07-18T09:30:00.000Z',
    updatedAt: '2025-07-18T09:30:00.000Z',
  },
];
