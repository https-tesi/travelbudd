
export type Attraction = {
  name: string;
  description: string;
  type: string;
};

export type Restaurant = {
  name: string;
  description: string;
  type: string;
  cuisine?: string;
};

export type Accommodation = {
  name: string;
  description: string;
  type: string;
};

export type Destination = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  galleryImages: string[];  // Required field
  score: number;
  tags: string[];
  attractions?: Attraction[];
  restaurants?: Restaurant[];
  accommodations?: Accommodation[];
};
