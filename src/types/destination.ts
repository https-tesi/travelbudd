
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
  galleryImages: string[];  // Changed from optional to required field for consistency
  score: number;
  tags: string[];
  attractions?: Attraction[];
  restaurants?: Restaurant[];
  accommodations?: Accommodation[];
};
