export const BUSINESS = {
  name: 'Step 2 Fitness Unisex Gym',
  shortName: 'STEP 2 FITNESS',
  tagline: 'Unisex Gym',
  phone: '+91 88262 91902',
  phoneRaw: '+918826291902',
  offersFreeTrial: false, // set true ONLY after the gym confirms it offers a free trial
  rating: '4.9',
  reviewCount: '300+',
  address: {
    line1: 'Plot No- 10, Hapur Rd,',
    line2: 'near Flora Enclave,',
    line3: 'Gangapuram, Avantika Colony,',
    line4: 'Govindpuram,',
    line5: 'Ghaziabad, Uttar Pradesh 201013',
  },
  mapsQuery: 'Step 2 Fitness Unisex Gym, Govindpuram, Ghaziabad, Uttar Pradesh 201013',
  whatsappMessage:
    "Hi, I'm interested in joining Step 2 Fitness Unisex Gym. I'd like to know more.",
  hours: {
    weekdays: { morning: '5:00 AM – 11:30 AM', evening: '3:00 PM – 10:00 PM' },
    sunday: '8:00 AM – 11:00 AM',
  },
} as const;

export const whatsappLink = (text: string) =>
  `https://wa.me/${BUSINESS.phoneRaw.replace('+', '')}?text=${encodeURIComponent(text)}`;

export const CTA_LABEL = BUSINESS.offersFreeTrial ? 'Claim Your Free Trial' : 'Enquire Now';
export const CTA_SHORT = BUSINESS.offersFreeTrial ? 'Free Trial' : 'Enquire';

export const WHATSAPP_LINK = `https://wa.me/${BUSINESS.phoneRaw.replace(
  '+',
  ''
)}?text=${encodeURIComponent(BUSINESS.whatsappMessage)}`;

export const TEL_LINK = `tel:${BUSINESS.phoneRaw}`;

export const MAPS_LINK = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
  BUSINESS.mapsQuery
)}`;

export const REVIEWS_LINK =
  'https://www.google.com/maps/search/?api=1&query=' +
  encodeURIComponent('Step 2 Fitness Unisex Gym reviews Govindpuram Ghaziabad');

export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Facilities', href: '#facilities' },
  { label: 'Membership', href: '#membership' },
  { label: 'Reviews', href: '#reviews' },
  { label: 'Visit', href: '#visit' },
] as const;
