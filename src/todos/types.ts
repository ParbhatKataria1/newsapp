
export interface UserType {
    user:String
  }

export type ContextType = {
    user: String;
    setUser: (user:String) => void;
  };