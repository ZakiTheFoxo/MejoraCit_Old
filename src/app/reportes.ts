export interface Reportes {
  id: number;
  name: string;
  type: string;
  description: string;
  status: string;
  veces_reportado: number;
}

export const reportes = [
  {
    id: 1,
    name: 'Bache calle 5',
    type: 'Bache',
    description: 'Bache en la calle 5 de mayo, lleva más de 4 semanas que no lo arreglan y ya van varios carror que se les vuelan las llantas',
    status: 'Registrado',
    veces_reportado: 2
  },
  {
    id: 2,
    name: 'Fuga de agua calle Independencia',
    type: 'Fuga',
    description: 'Fuga de agua sin arreglar',
    status: 'Registrado',
    veces_reportado: 2
  },
  {
    id: 3,
    name: 'Bache calle 13 pte',
    type: 'Bache',
    description: 'Bache en la calle 13 poniente',
    status: 'Solucionado',
    veces_reportado: 2
  },
  {
    id: 4,
    name: 'Bache calle 5',
    type: 'Bache',
    description: 'Bache en la calle 5 de mayo',
    status: 'Registrado',
    veces_reportado: 2
  },
  {
    id: 5,
    name: 'Fuga de agua calle Independencia',
    type: 'Fuga',
    description: 'Fuga de agua sin arreglar',
    status: 'Registrado',
    veces_reportado: 2
  },
  {
    id: 6,
    name: 'Bache calle 13 pte',
    type: 'Bache',
    description: 'Bache en la calle 13 poniente',
    status: 'Solucionado',
    veces_reportado: 2
  },
];


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
