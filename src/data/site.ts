export const site = {
  name: "Callas Foundation",
  tagline: "Helping In Our Way",
  ethos: "Dignity. Protection. Restoration.",
  npo: "217-433",
  address: "32 Kiewiet Road, Bridgetown, Athlone, Cape Town, 7764",
  phone: "+27 72 539 5113",
  whatsapp: "27725395113",
  emailGeneral: "admin@callasfoundation.org.za",
  emailDirector: "caroline@callasfoundation.org.za",
  emergency: {
    saps: "10111",
    gbv: "0800 428 428",
  },
  socials: [
    { name: "Facebook", href: "https://www.facebook.com/callasfoundation", icon: "facebook" },
    { name: "Instagram", href: "https://www.instagram.com/callasfoundation", icon: "instagram" },
    { name: "X", href: "https://x.com/callasfoundation", icon: "twitter" },
    { name: "LinkedIn", href: "https://www.linkedin.com/company/callasfoundation", icon: "linkedin" },
    { name: "WhatsApp", href: "https://wa.me/27725395113", icon: "whatsapp" },
  ],
};

export const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/programmes", label: "Programmes" },
  { to: "/news", label: "News" },
  { to: "/events", label: "Events" },
  { to: "/gallery", label: "Gallery" },
  { to: "/resources", label: "Resources" },
  { to: "/shop", label: "Shop" },
  { to: "/contact", label: "Contact" },
] as const;