'use client';

import EmptyCard from '@common/EmptyCard';
import { useRouter } from 'next/navigation';

import {
  CommentCardItem,
  ContentType,
  PostCardItem,
  ScrapCardItem,
} from '@/shared/types/mypage';

import CardSection from './CardSection';
import MyCommentCard from './MyCommentCard';
import MyPostCard from './MyPostCard';
import MyScrapCard from './MyScrapCard';

type CardInfoItem = PostCardItem | CommentCardItem | ScrapCardItem;

interface MixedSectionProps {
  cardInfo: CardInfoItem[];
  type: ContentType;
}

const MixedSection = ({ cardInfo, type }: MixedSectionProps) => {
  const router = useRouter();

  const firstItem = cardInfo[0];
  const scrapWrapStyle =
    'grid-rows-auto relative grid grid-cols-1 gap-y-32 md:gap-y-48 lg:gap-x-25 lg:gap-y-45 lg:grid-cols-2 xl:grid-cols-3';
  const postCommentWrapStyle =
    'grid-rows-auto grid grid-cols-1 items-center gap-y-16 lg:grid-cols-2 lg:gap-x-25 lg:gap-y-45 xl:grid-cols-3';

  // Card 컴포넌트 Wrap 스타일 결정 함수
  const getCardWrapStyle = (item: CardInfoItem) => {
    if (!item) return;
    if ('isPublic' in item) return scrapWrapStyle;
    if ('writer' in item || 'post' in item) return postCommentWrapStyle;
  };

  // 카드의 드롭다운 아이템 결정 함수
  const getDropdownItems = (type: ContentType, id: number) => {
    switch (type) {
      case 'post':
      case 'comment':
        return [
          {
            label: '수정하기',
            onClick: () => router.push(`/albatalks/${id}`),
          },
          { label: '삭제하기', onClick: () => router.push(`/`) },
        ];
      case 'scrap':
        return [
          { label: '지원하기', onClick: () => router.push(`/apply/${id}`) },
          { label: '스크랩 취소', onClick: () => router.push(`/`) },
        ];
    }
  };

  // 카드 렌더링 함수
  const renderCard = (item: CardInfoItem) => {
    if ('isPublic' in item) {
      return (
        <MyScrapCard
          cardContent={item}
          dropdownItem={getDropdownItems('scrap', item.id)}
        />
      );
    }
    if ('writer' in item) {
      return (
        <MyPostCard
          cardContent={item}
          dropdownItem={getDropdownItems('post', item.id)}
        />
      );
    }

    return (
      <MyCommentCard
        cardContent={item}
        dropdownItem={getDropdownItems('comment', item.post.id)}
      />
    );
  };

  const cardWrapStyle = firstItem && getCardWrapStyle(firstItem);

  if (cardInfo.length === 0) {
    return <EmptyCard type={type} />;
  }

  return (
    <CardSection
      cardInfo={cardInfo}
      cardWrapStyle={cardWrapStyle}
      renderCard={renderCard}
    />
  );
};
export default MixedSection;
