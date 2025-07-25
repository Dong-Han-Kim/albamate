export interface MockAlbaItem {
  id: number;
  ownerId: number;
  title: string;
  description: string;
  recruitmentStartDate: string;
  recruitmentEndDate: string;
  imageUrls: string[];
  location: string;
  workStartDate: string;
  workEndDate: string;
  workStartTime: string;
  workEndTime: string;
  workDays: string[];
  isNegotiableWorkDays: boolean;
  hourlyWage: number;
  isPublic: boolean;
  numberOfPositions: number;
  gender: string;
  education: string;
  age: string;
  preferred: string;
  applyCount: number;
  scrapCount: number;
  createdAt: string;
  updatedAt: string;
  storeName: string;
  storePhoneNumber: string;
  phoneNumber: string;
  isScrapped: boolean;
}
