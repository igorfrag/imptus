export interface Message {
  id: string | number;
  text: string;
  isUser: boolean;
  timestamp: string;
  sender?: string;
}
