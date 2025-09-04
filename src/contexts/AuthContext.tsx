import React, { createContext, useContext, useState } from 'react';

// Mock user type
interface User {
  id: string;
  email: string;
  role: 'student' | 'employer';
}

interface AuthContextType {
  user: User | null;
  signUp: (email: string, password: string, role: 'student' | 'employer') => Promise<any>;
  signIn: (email: string, password: string) => Promise<any>;
  signOut: () => Promise<void>;
  loading: boolean;
  isConfigured: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const signUp = async (email: string, password: string, role: 'student' | 'employer') => {
    // Mock signup - in real app, this would call your backend
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      role
    };
    
    setUser(mockUser);
    return { data: { user: mockUser }, error: null };
  };

  const signIn = async (email: string, password: string) => {
    // Mock signin - in real app, this would call your backend
    const mockUser: User = {
      id: Date.now().toString(),
      email,
      role: 'student' // Default role for demo
    };
    
    setUser(mockUser);
    return { data: { user: mockUser }, error: null };
  };

  const signOut = async () => {
    setUser(null);
  };

  const value = {
    user,
    signUp,
    signIn,
    signOut,
    loading,
    isConfigured: true, // Always true for mock auth
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
