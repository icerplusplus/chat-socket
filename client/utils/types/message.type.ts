export interface UserMessage {
  name: string;
  lastedMessage: string;
  timestamp: string;
  avatar: string[];
  members?: number;
}

export interface MessageBoxType {
  id: string;
  type: "group" | "user";
  information: UserMessage;
}

export interface MessageType {
  id: string;
  sender: string;
  receiver: string;
  message: string;
  sendedAt: string | number | Date;
}
