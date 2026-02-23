import Dexie from 'dexie'
import type { Table } from 'dexie'

// Define interfaces pata "pacientes", "mamografias" y "usuarios" con campos opcionales
export interface Paciente {
  id?: number,
  dni?: string,
  nombres?: string, 
  fechaNacimiento?: string,
  genero?: string,
  direccion?: string,
  telefono?: string,
  contactoEmergencia?: string,
  telefonoContactoEmergencia?: string
}

export interface Mamografia {
  id?: number,
  pacienteId: number,
  fecha?: string,
  resultado?: string,
  probabilidad?: number,
  imagen?: Blob
}
export interface Usuario {
  id?: number,
  email?: string,
  password?: string  
}

// Base de datos Dexie con tablas para pacientes y usuarios
export class AppDB extends Dexie {
    // El "number" indica que el campo "id" es un número y se autoincrementará
  pacientes!: Table<Paciente, number>
  mamografias!: Table<Mamografia, number>
  usuarios!: Table<Usuario, number>

  constructor() {
    super('MamografiasDB')
    this.version(1).stores({
      pacientes: '++id, dni, nombres',
      mamografias: '++id, pacienteId, fecha',
      usuarios: '++id, email, password'
    })
  }
}

export const db = new AppDB()

// Cuando se desee eliminar la base de datos:
export const resetDatabase = async () => {
  await db.transaction('rw', db.pacientes, db.mamografias, db.usuarios, async () => {
    await db.pacientes.clear()
    await db.mamografias.clear()
    await db.usuarios.clear()
  })
}