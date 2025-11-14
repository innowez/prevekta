// src/stores/counter-store.ts
import { servicetypes, services, serviceDisc } from '@/data/services'
import { createStore } from 'zustand/vanilla'

export type ServiceState = {
  serviceType: servicetypes,
  serviceDesc?: string,
}

export type ServiceActions = {
  setService: (value: number) => void,
}

export type ServiceStore = ServiceState & ServiceActions

export const defaultInitState: ServiceState = {
  serviceType: "Kayachitsa (General)",
  serviceDesc: "Kayachikitsa, the core of Ayurvedic healing, addresses the root of illness through customized treatments. It nurtures harmony between body, mind, and soul.",
}

export const createServiceStore = (
  initState: ServiceState = defaultInitState,
) => {
  return createStore<ServiceStore>()((set) => ({
    ...initState,
    setService: (num: number) => set({ serviceType: services[num], serviceDesc: serviceDisc[num] }),
  }))
}