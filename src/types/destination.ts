
export type Attraction = {
  name: string;
  description: string;
  type: string;
};

export type Destination = {
  id: number;
  name: string;
  description: string;
  imageUrl: string;
  score: number;
  tags: string[];
  attractions?: Attraction[];
};
