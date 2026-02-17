
export type TabType = 'home' | 'games' | 'ai';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export interface Game {
  id: string;
  title: string;
  genre: string;
  rating: number;
  description: string;
  image: string;
}
