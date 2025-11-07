// src/stores/counter-store.ts
import { servicetypes } from '@/data/services'
import { createStore } from 'zustand/vanilla'

export type ServiceState = {
    serviceType: servicetypes
}

export type ServiceActions = {
    setServiceType: (value: servicetypes) => void
}

export type ServiceStore = ServiceState & ServiceActions

export const defaultInitState: ServiceState = {
  serviceType: "Kayachitsa (General)",
}

export const createServiceStore = (
  initState: ServiceState = defaultInitState,
) => {
  return createStore<ServiceStore>()((set) => ({
    ...initState,
    setServiceType: (newValue: servicetypes) => set({ serviceType: newValue }),
  }))
}