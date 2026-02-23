import { create } from 'zustand'
import { db, type Mamografia } from '../database/db'

interface IMamografiaStore {
  mamografiasPaciente: Mamografia[]
  mamografiaActualPaciente: Mamografia | null
  cargarMamografias: (pacienteId: number) => Promise<void>
  agregarMamografia: (mamografia: Mamografia) => Promise<void>
  obtenerMamografia: (id: number) => Promise<void>
  eliminarMamografia: (id: number) => Promise<void>
}

export const useMamografiaStore = create<IMamografiaStore>((set) => ({
  mamografiasPaciente: [],
  mamografiaActualPaciente: null,

  // Cargar todas las mamografias de un paciente - lista
  cargarMamografias: async (pacienteId) => {
    const data = await db.mamografias.where('pacienteId').equals(pacienteId).toArray()
    set({ mamografiasPaciente: data })
  },

  // Agregar mamografia
  agregarMamografia: async (mamografia) => {
    const id = await db.mamografias.add(mamografia)
    const nuevo = { ...mamografia, id }

    set((state) => ({
      mamografiasPaciente: [...state.mamografiasPaciente, nuevo]
    }))
  },

  // Obtener Mamografía por ID
  obtenerMamografia: async (id) => {
    const mamografia = await db.mamografias.get(id)
    set({ mamografiaActualPaciente: mamografia ?? null })
  },

  // Eliminar Mamografía
  eliminarMamografia: async (id) => {
    await db.mamografias.delete(id)

    set((state) => ({
      mamografiasPaciente: state.mamografiasPaciente.filter((p) => p.id !== id)
    }))
  }
}))