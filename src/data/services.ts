export const services = [
    "Kayachitsa (General)",
    "Shalakya Tantra (ENT&Eye)",
    "Shalya Tantra (Surgery)",
    "Kaumara bhritya (Pediatric)",
    "Prasuti Tantra & Stri Roga (Gynec & obs)",
    "Bhuta Vidya (Psychiatric)",
    "Rasayana (Rejuvanation)",
    "Vajikarana (Sexology & infertility)",
] as const;

export type servicetypes = typeof services[number];
export type ServiceArray = Array<servicetypes>;