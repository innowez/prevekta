'use client'

import { type ReactNode, createContext, useRef, useContext } from 'react'
import { useStore } from 'zustand'

import { type CounterStore, createCounterStore } from '@/stores/counter-store'
import { type ServiceStore, createServiceStore } from '@/stores/service-store'

export type CounterStoreApi = ReturnType<typeof createCounterStore>
export type ServiceStoreApi = ReturnType<typeof createServiceStore>

export const CounterStoreContext = createContext<CounterStoreApi | undefined>(
  undefined,
)

export const ServiceStoreContext = createContext<ServiceStoreApi | undefined>(
  undefined,
)

export interface StoreProviderProps {
  children: ReactNode
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const counterStoreRef = useRef<CounterStoreApi | null>(null)
  const serviceStoreRef = useRef<ServiceStoreApi | null>(null)
  
  if (counterStoreRef.current === null) {
    counterStoreRef.current = createCounterStore()
  }
  
  if (serviceStoreRef.current === null) {
    serviceStoreRef.current = createServiceStore()
  }

  return (
    <CounterStoreContext.Provider value={counterStoreRef.current}>
      <ServiceStoreContext.Provider value={serviceStoreRef.current}>
        {children}
      </ServiceStoreContext.Provider>
    </CounterStoreContext.Provider>
  )
}

export const useCounterStore = <T,>(
  selector: (store: CounterStore) => T,
): T => {
  const counterStoreContext = useContext(CounterStoreContext)

  if (!counterStoreContext) {
    throw new Error(`useCounterStore must be used within StoreProvider`)
  }

  return useStore(counterStoreContext, selector)
}

export const useServiceStore = <T,>(
  selector: (store: ServiceStore) => T,
): T => {
  const serviceStoreContext = useContext(ServiceStoreContext)

  if (!serviceStoreContext) {
    throw new Error(`useServiceStore must be used within StoreProvider`)
  }

  return useStore(serviceStoreContext, selector)
}