import { Product, Position, Category, FormationKey } from './types';

export const PRODUCTS: Product[] = [
  // Attaccanti (Snack Dolci)
  { id: 'A1', name: 'Fanta Orange PET 2 x 1,5 L', category: Category.ATTACKER, price: 3.99, imageUrl: 'https://i.ibb.co/0jgqyxry/1540915.jpg' },
  { id: 'A2', name: 'Fanta Orange Sleek 6 x 33 cl', category: Category.ATTACKER, price: 4.89, imageUrl: 'https://i.ibb.co/G43ydkH5/1549387.jpg' },
  { id: 'A3', name: 'Fanta Orange PET 4 x 66 cl', category: Category.ATTACKER, price: 4.19, imageUrl: 'https://i.ibb.co/p6xsMtB1/1554331.jpg' },
  { id: 'A4', name: 'Fanta Zero Orange 6 x 33 cl', category: Category.ATTACKER, price: 4.89, imageUrl: 'https://i.ibb.co/zTwyhrtr/1426869.jpg' },

  // Centrocampisti (Snack Salati)
  { id: 'C1', name: 'San Carlo 1936 250 g', category: Category.MIDFIELDER, price: 2.99, imageUrl: 'https://i.ibb.co/Jj5fH5mK/1205248.jpg' },
  { id: 'C2', name: 'San Carlo rustica 300 g', category: Category.MIDFIELDER, price: 2.99, imageUrl: 'https://i.ibb.co/8Dhw2JmJ/1325510.jpg' },
  { id: 'C3', name: 'Fonzies Gli Originali - 280g', category: Category.MIDFIELDER, price: 3.12, imageUrl: 'https://i.ibb.co/tPcJtfc9/1437832.jpg' },
  { id: 'C4', name: 'Cameo Snack Friends Maxi Cocktail 300 g', category: Category.MIDFIELDER, price: 3.02, imageUrl: 'https://i.ibb.co/Sw1xC7Cs/1502319.jpg' },
  { id: 'C5', name: 'Cameo Snack Friends Gran Festa 400 g', category: Category.MIDFIELDER, price: 3.09, imageUrl: 'https://i.ibb.co/pvSw7n2s/1565673.jpg' },
  { id: 'C6', name: 'Snack In Love Mais Tostato e Salato 200 g', category: Category.MIDFIELDER, price: 2.99, imageUrl: 'https://i.ibb.co/k2mcf7cV/1449032.jpg' },
  { id: 'C7', name: 'Esselunga Salatini Ai Wurstel 300 g', category: Category.MIDFIELDER, price: 5.70, imageUrl: 'https://i.ibb.co/XZc4HzhT/1054855.jpg' },
  { id: 'C8', name: 'Esselunga, Pizzette pomodoro e mozzarella 250 g', category: Category.MIDFIELDER, price: 4.75, imageUrl: 'https://i.ibb.co/NdphdCP9/1054847.jpg' },
  { id: 'C9', name: 'Esselunga My party Arachidi tostate e salate 200 g', category: Category.MIDFIELDER, price: 1.75, imageUrl: 'https://i.ibb.co/2YWtjBTs/1488547.jpg' },
  { id: 'C10', name: 'Smart Patatine 500 g', category: Category.MIDFIELDER, price: 2.30, imageUrl: 'https://i.ibb.co/FbKYS7ZD/1058037.jpg' },
  { id: 'C11', name: 'Esselunga Snack di mais gusto formaggio 6 x 25 g', category: Category.MIDFIELDER, price: 1.59, imageUrl: 'https://i.ibb.co/Z6gZZD7v/1392487.jpg' },
  { id: 'C12', name: 'Esselunga Chips di patate fiammifero 150 g', category: Category.MIDFIELDER, price: 1.49, imageUrl: 'https://i.ibb.co/fz50rVM4/980908.jpg' },
 
  // Difensori (Birre)
  { id: 'D1', name: 'Birra Moretti Ricetta Originale 6 x 33 cl', category: Category.DEFENDER, price: 5.75, imageUrl: 'https://i.ibb.co/wFBRvQSF/1257144.jpg' },
  { id: 'D2', name: 'Ichnusa 6 x 33 cl', category: Category.DEFENDER, price: 6.34, imageUrl: 'https://i.ibb.co/bMtfbWmJ/1317915.jpg' },
  { id: 'D3', name: 'Ichnusa Non Filtrata 3 x 33 cl', category: Category.DEFENDER, price: 4.36, imageUrl: 'https://i.ibb.co/VWfW49CM/1315171.jpg' },
  { id: 'D4', name: 'Heineken Original 4 x 33 cl', category: Category.DEFENDER, price: 4.79, imageUrl: 'https://i.ibb.co/WvXjFHkF/1270980.jpg' },
  { id: 'D5', name: 'Birra Messina Cristalli di Sale 3 x 33 cl', category: Category.DEFENDER, price: 3.99, imageUrl: 'https://i.ibb.co/gFj63hxk/1435176.jpg' },

  // Portiere (Snack Dolci)
  { id: 'E1', name: 'M&Ms Peanut Confetti al Cioccolato con Arachidi 400 g', category: Category.GOALKEEPER, price: 5.29, imageUrl: 'https://i.ibb.co/ZpHvk3kg/1421650.jpg' },
  { id: 'E3', name: 'Nutella Biscuits 22 pezzi', category: Category.GOALKEEPER, price: 3.49, imageUrl: 'https://i.ibb.co/rf4nQVZM/1515643.jpg' },
  { id: 'E4', name: 'Haribo Starmix 280 g', category: Category.GOALKEEPER, price: 3.81, imageUrl: 'https://i.ibb.co/nNM7gCyw/1184569.jpg' },
  { id: 'E5', name: 'Haribo Rainbow Pixel Fr!zzi 550 g', category: Category.GOALKEEPER, price: 4.49, imageUrl: 'https://i.ibb.co/FLzZCRRT/1598896.jpg' },
];

export const FORMATIONS: Record<FormationKey, { name: FormationKey; positions: Position[] }> = {
  '3-5-2': {
    name: '3-5-2',
    positions: [
      { id: 1, role: 'P', category: Category.GOALKEEPER, top: '50%', left: '10%' },
      { id: 2, role: 'D', category: Category.DEFENDER, top: '25%', left: '30%' },
      { id: 3, role: 'D', category: Category.DEFENDER, top: '50%', left: '30%' },
      { id: 4, role: 'D', category: Category.DEFENDER, top: '75%', left: '30%' },
      { id: 5, role: 'C', category: Category.MIDFIELDER, top: '15%', left: '55%' },
      { id: 6, role: 'C', category: Category.MIDFIELDER, top: '35%', left: '55%' },
      { id: 7, role: 'C', category: Category.MIDFIELDER, top: '50%', left: '55%' },
      { id: 8, role: 'C', category: Category.MIDFIELDER, top: '65%', left: '55%' },
      { id: 9, role: 'C', category: Category.MIDFIELDER, top: '85%', left: '55%' },
      { id: 10, role: 'A', category: Category.ATTACKER, top: '37.5%', left: '80%' },
      { id: 11, role: 'A', category: Category.ATTACKER, top: '62.5%', left: '80%' },
    ],
  },
  '3-4-3': {
    name: '3-4-3',
    positions: [
      { id: 1, role: 'P', category: Category.GOALKEEPER, top: '50%', left: '10%' },
      { id: 2, role: 'D', category: Category.DEFENDER, top: '25%', left: '30%' },
      { id: 3, role: 'D', category: Category.DEFENDER, top: '50%', left: '30%' },
      { id: 4, role: 'D', category: Category.DEFENDER, top: '75%', left: '30%' },
      { id: 5, role: 'C', category: Category.MIDFIELDER, top: '20%', left: '55%' },
      { id: 6, role: 'C', category: Category.MIDFIELDER, top: '40%', left: '55%' },
      { id: 7, role: 'C', category: Category.MIDFIELDER, top: '60%', left: '55%' },
      { id: 8, role: 'C', category: Category.MIDFIELDER, top: '80%', left: '55%' },
      { id: 9, role: 'A', category: Category.ATTACKER, top: '25%', left: '80%' },
      { id: 10, role: 'A', category: Category.ATTACKER, top: '50%', left: '80%' },
      { id: 11, role: 'A', category: Category.ATTACKER, top: '75%', left: '80%' },
    ],
  },
  '4-4-2': {
    name: '4-4-2',
    positions: [
      { id: 1, role: 'P', category: Category.GOALKEEPER, top: '50%', left: '10%' },
      { id: 2, role: 'D', category: Category.DEFENDER, top: '15%', left: '30%' },
      { id: 3, role: 'D', category: Category.DEFENDER, top: '38%', left: '30%' },
      { id: 4, role: 'D', category: Category.DEFENDER, top: '62%', left: '30%' },
      { id: 5, role: 'D', category: Category.DEFENDER, top: '85%', left: '30%' },
      { id: 6, role: 'C', category: Category.MIDFIELDER, top: '20%', left: '55%' },
      { id: 7, role: 'C', category: Category.MIDFIELDER, top: '40%', left: '55%' },
      { id: 8, role: 'C', category: Category.MIDFIELDER, top: '60%', left: '55%' },
      { id: 9, role: 'C', category: Category.MIDFIELDER, top: '80%', left: '55%' },
      { id: 10, role: 'A', category: Category.ATTACKER, top: '37.5%', left: '80%' },
      { id: 11, role: 'A', category: Category.ATTACKER, top: '62.5%', left: '80%' },
    ],
  },
  '4-3-3': {
    name: '4-3-3',
    positions: [
      { id: 1, role: 'P', category: Category.GOALKEEPER, top: '50%', left: '10%' },
      { id: 2, role: 'D', category: Category.DEFENDER, top: '15%', left: '30%' },
      { id: 3, role: 'D', category: Category.DEFENDER, top: '38%', left: '30%' },
      { id: 4, role: 'D', category: Category.DEFENDER, top: '62%', left: '30%' },
      { id: 5, role: 'D', category: Category.DEFENDER, top: '85%', left: '30%' },
      { id: 6, role: 'C', category: Category.MIDFIELDER, top: '30%', left: '55%' },
      { id: 7, role: 'C', category: Category.MIDFIELDER, top: '50%', left: '55%' },
      { id: 8, role: 'C', category: Category.MIDFIELDER, top: '70%', left: '55%' },
      { id: 9, role: 'A', category: Category.ATTACKER, top: '25%', left: '80%' },
      { id: 10, role: 'A', category: Category.ATTACKER, top: '50%', left: '80%' },
      { id: 11, role: 'A', category: Category.ATTACKER, top: '75%', left: '80%' },
    ],
  },
};

export const ROLE_COLORS: Record<string, { bg: string; text: string; ring: string }> = {
    P: { bg: 'bg-orange-500', text: 'text-white', ring: 'ring-orange-300' },
    D: { bg: 'bg-green-500', text: 'text-white', ring: 'ring-green-300' },
    C: { bg: 'bg-blue-500', text: 'text-white', ring: 'ring-blue-300' },
    A: { bg: 'bg-red-500', text: 'text-white', ring: 'ring-red-300' },
};
