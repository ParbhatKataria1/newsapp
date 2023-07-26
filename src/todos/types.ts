
export interface UserType {
    user:String
  }

export type ContextType = {
    user: string;
    setUser: (user:(string | undefined | null)) => void;
  };