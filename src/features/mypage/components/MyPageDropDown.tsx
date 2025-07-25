import Image from 'next/image';

import Dropdown from '@/shared/components/ui/Dropdown';
import { cn } from '@/shared/lib/cn';

interface MyPageDropdownValueProps {
  label: string;
  onClick: () => void;
}

interface MyPageDropdownProps {
  items: MyPageDropdownValueProps[];
  className?: string;
}

const MyPageDropDown = ({ items, className }: MyPageDropdownProps) => {
  return (
    <div className={cn('relative flex items-center justify-center', className)}>
      <Dropdown
        className="relative flex w-80 justify-end lg:w-96"
        trigger={
          <button className="relative h-24 w-24" type="button">
            <Image
              fill
              alt="메뉴 열기"
              sizes="24px"
              src="/icons/kebab-menu.svg"
            />
          </button>
        }
      >
        <ul className="relative z-10 flex h-68 w-full flex-col items-center justify-between rounded-lg p-4 [box-shadow:4px_4px_4px_rgba(228,228,228,0.1)]">
          {items.map(item => {
            return (
              <li
                key={item.label}
                className="inline-flex w-full items-center justify-center"
              >
                <button
                  className="w-90 rounded-lg py-4 text-xs text-gray-400 hover:bg-mint-50 hover:font-semibold hover:text-black"
                  type="button"
                  onClick={() => item.onClick()}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>
      </Dropdown>
    </div>
  );
};

export default MyPageDropDown;
