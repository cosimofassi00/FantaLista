export enum Category {
  ATTACKER = 'ATTACKER',
  MIDFIELDER = 'MIDFIELDER',
  DEFENDER = 'DEFENDER',
  GOALKEEPER = 'GOALKEEPER',
}

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number;
  imageUrl: string;
}

export interface Position {
  id: number;
  role: string;
  category: Category;
  top: string;
  left: string;
}

export type FormationKey = '3-5-2' | '3-4-3' | '4-4-2' | '4-3-3';
