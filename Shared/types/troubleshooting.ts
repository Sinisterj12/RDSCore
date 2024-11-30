export interface TroubleshootingStep {
  id: string;
  title: string;
  description: string;
  imageUrl?: string;
  videoUrl?: string;
  estimatedTime?: string;
  order: number;
}

export interface DeviceGuide {
  id: string;
  deviceCategoryId: string;
  deviceModelId: string;
  title: string;
  description: string;
  commonIssues: {
    id: string;
    problem: string;
    steps: TroubleshootingStep[];
  }[];
  requiresRDSSupport?: boolean;
}

export interface DeviceModel {
  id: string;
  categoryId: string;
  name: string;
  manufacturer: string;
  model: string;
  image?: string;
  supportGuideIds: string[];
}
