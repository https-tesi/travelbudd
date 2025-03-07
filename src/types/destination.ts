
export interface Destination {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  galleryImages: string[];
  score: number;
  tags: string[];
  averageTemp?: number;
  attractions: {
    name: string;
    description: string;
    type: string;
  }[];
  restaurants?: {
    name: string;
    description: string;
    type: string;
    cuisine?: string;
  }[];
  accommodations?: {
    name: string;
    description: string;
    type: string;
  }[];
}
