export interface Users {
  id: number;
  nombre: string;
  email: string;
  telefono: number;
  password: string;
}

export const users = [
  {
    id: 1,
    nombre: 'Omar Arturo',
    email: 'oumearathar@gmail.com',
    telefono: 2211191720,
    password: '123456'
  },
  {
    id: 2,
    nombre: 'Mau Solano',
    email: 'infinitydeathline@gmail.com',
    telefono: 2215740459,
    password: '654321'
  }
];
