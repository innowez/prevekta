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

export const serviceDisc = [
    "Kayachikitsa, the core of Ayurvedic healing, addresses the root of illness through customized treatments. It nurtures harmony between body, mind, and soul.",
    "Shalya Tantra is the Ayurvedic branch dealing with surgical and wound-related care. It focuses on precise procedures and natural healing to restore health and balance & and para-surgical methods for effective healing.",
    "Shalakya Tantra is the Ayurvedic branch focused on eye, ear, nose, and throat care. It provides holistic treatments to maintain clarity of the senses and overall well-being.",
    "Kaumarabhritya is the Ayurvedic branch dedicated to child health and wellness. It focuses on growth, immunity, and holistic care from infancy to adolescence.",
    "Prasuthi Tantra and Stree Roga is the Ayurvedic branch dedicated to women’s health, pregnancy, and childbirth care. It promotes hormonal balance, fertility, and overall well-being through natural therapies.",
    "Rasayana is the Ayurvedic branch focused on rejuvenation and longevity. It enhances vitality, immunity, and overall well-being through specialized herbs and therapies.",
    "Bhuta Vidya is the Ayurvedic branch that deals with mental health and psychological well-being. It focuses on balancing the mind through spiritual, herbal, and holistic therapies.",
    "Vajikarana Tantra deals with rejuvenation of body and mind for reproductive and sexual wellness. It restores vitality and harmony through natural rejuvenating therapies."
]

export type servicetypes = typeof services[number];
export type ServiceArray = Array<servicetypes>;

// KAYACHIKITSA:
// Kayachikitsa, the core of Ayurvedic healing, addresses the root of illness through customized treatments. It nurtures harmony between body, mind, and soul.
// SHALYA TANTRA:
// Shalya Tantra is the Ayurvedic branch dealing with surgical and wound-related care. It focuses on precise procedures and natural healing to restore health and balance & and para-surgical methods for effective healing.
// SHALAKYA TANTRA:
// Shalakya Tantra is the Ayurvedic branch focused on eye, ear, nose, and throat care. It provides holistic treatments to maintain clarity of the senses and overall well-being.
// KAUMARABHRITHYAM:
// Kaumarabhritya is the Ayurvedic branch dedicated to child health and wellness. It focuses on growth, immunity, and holistic care from infancy to adolescence.
// PRASUTHI TANTRA AND STREE ROGA:
// Prasuthi Tantra and Stree Roga is the Ayurvedic branch dedicated to women’s health, pregnancy, and childbirth care. It promotes hormonal balance, fertility, and overall well-being through natural therapies.
// RASAYANA:
// Rasayana is the Ayurvedic branch focused on rejuvenation and longevity. It enhances vitality, immunity, and overall well-being through specialized herbs and therapies.
// BHUTA VIDYA:
// Bhuta Vidya is the Ayurvedic branch that deals with mental health and psychological well-being. It focuses on balancing the mind through spiritual, herbal, and holistic therapies.
// VAJIKARANAM:
// Vajikarana Tantra deals with rejuvenation of body and mind for reproductive and sexual wellness. It restores vitality and harmony through natural rejuvenating therapies.