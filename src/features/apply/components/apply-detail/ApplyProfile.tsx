import React from 'react';

import { ApplyResponse } from '../../types/apply';

interface ApplyProfileProps {
  data: ApplyResponse;
}

const ApplyProfile = ({ data }: ApplyProfileProps) => {
  const { name, phoneNumber, experienceMonths, resumeName, introduction } =
    data;

  const getExperienceText = (months: number) => {
    if (months === 0) return '신입';
    if (months < 12) return `${months}개월`;
    const years = Math.floor(months / 12);
    const remainingMonths = months % 12;
    return remainingMonths > 0
      ? `${years}년 ${remainingMonths}개월`
      : `${years}년`;
  };

  return (
    <div>
      <h2 className="my-16 text-2lg font-semibold">제출 내용</h2>
      <div className="space-y-6 lg:grid lg:grid-cols-2 lg:gap-12 lg:space-y-0">
        <div className="space-y-6">
          {/* 이름 */}
          <div className="flex items-center justify-between border-b border-gray-200 py-14">
            <span className="text-gray-500 dark:text-gray-400">이름</span>
            <span className="font-medium">{name}</span>
          </div>

          {/* 연락처 */}
          <div className="flex items-center justify-between border-b border-gray-200 py-14">
            <span className="text-gray-400">연락처</span>
            <span className="font-medium">{phoneNumber}</span>
          </div>

          {/* 경력 */}
          <div className="flex items-center justify-between border-b border-gray-200 py-14">
            <span className="text-gray-400">경력</span>
            <span className="font-medium">
              {getExperienceText(experienceMonths)}
            </span>
          </div>

          {/* 이력서 */}
          <div className="py-4">
            <div className="mb-4 py-14 text-gray-400">이력서</div>
            <div className="flex items-center justify-between rounded-lg bg-gray-50 p-14">
              <span className="text-gray-700">
                {resumeName || '이력서 없음'}
              </span>
            </div>
          </div>

          {/* 자기소개 */}
          <div className="py-4">
            <div className="mb-4 py-14 text-gray-400">자기소개</div>
            <div className="rounded-lg bg-gray-50 p-14">
              <p className="text-md leading-relaxed whitespace-pre-wrap text-black-400">
                {introduction || '자기소개가 작성되지 않았습니다.'}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplyProfile;
