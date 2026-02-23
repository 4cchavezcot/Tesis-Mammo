import { create } from 'zustand'
import { db, type Paciente } from '../database/db'

interface IPacienteStore {
  pacientes: Paciente[]
  pacienteActual: Paciente | null
  cargarPacientes: () => Promise<void>
  agregarPaciente: (paciente: Paciente) => Promise<void>
  obtenerPaciente: (id: number) => Promise<void>
  eliminarPaciente: (id: number) => Promise<void>
}

export const usePacienteStore = create<IPacienteStore>((set) => ({
  pacientes: [],
  pacienteActual: null,

  // Cargar todos los pacientes - lista
  cargarPacientes: async () => {
    const data = await db.pacientes.toArray()
    set({ pacientes: data })
  },

  // Agregar paciente
  agregarPaciente: async (paciente) => {
    const id = await db.pacientes.add(paciente)
    const nuevo = { ...paciente, id }

    set((state) => ({
      pacientes: [...state.pacientes, nuevo]
    }))
  },

  // Obtener Paciente por ID
  obtenerPaciente: async (id) => {
    const paciente = await db.pacientes.get(id)
    set({ pacienteActual: paciente ?? null })
  },

  // Eliminar Paciente
  eliminarPaciente: async (id) => {
    await db.pacientes.delete(id)

    set((state) => ({
      pacientes: state.pacientes.filter((p) => p.id !== id)
    }))
  }
}))