export interface SiteCopy {
  meta: {
    siteName: string
    titleTemplate: string
    home: {
      title: string
      description: string
    }
    studio: {
      title: string
      description: string
    }
    contact: {
      title: string
      description: string
    }
    notFound: { title: string }
    ogImageAlt: string
  }
  nav: {
    ariaLabel: string
    homeAriaLabel: string
    logoAlt: string
    studio: string
    contact: string
  }
  skipLink: string
  hero: {
    promise: string
  }
  statusLabels: {
    'in-production': string
    'in-development': string
    coming: string
    'released-film': string
    'released-object': string
  }
  newsletter: {
    heading: string
    body: string
    emailLabel: string
    emailPlaceholder: string
    submit: string
    submitting: string
    success: string
    error: string
  }
  footer: {
    ariaLabel: string
    homeAriaLabel: string
    logoAlt: string
    studio: string
    contact: string
    newsletter: string
    email: string
    descriptor: string
    legal: string
  }
  studio: {
    heading: string
    lead: string
    facts: readonly [string, string, string, string]
    aiStanceHeading: string
    aiStance: string
    founder: {
      name: string
      role: string
      bio: string
    }
    cta: string
  }
  contact: {
    heading: string
    intro: string
    form: {
      nameLabel: string
      emailLabel: string
      emailPlaceholder: string
      portfolioLabel: string
      portfolioOptional: string
      ideaLabel: string
      submit: string
      submitting: string
      success: string
      error: string
      requiredError: string
      emailInvalidError: string
    }
    directPrefix: string
    directEmail: string
  }
  notFound: {
    heading: string
    body: string
    link: string
  }
}

export const copy: SiteCopy = {
  meta: {
    siteName: 'Vixio Creatives',
    titleTemplate: '%s · Vixio Creatives',
    home: {
      title: 'Vixio Creatives — Storyworld Activation & Co-Production Label',
      description: 'A Hong Kong creative label helping selected story-rich worlds reach new audiences through Signals, Episodes, Editions and Encounters.',
    },
    studio: {
      title: 'Studio',
      description: 'Vixio Creatives Limited, Hong Kong. A creative label for story-rich worlds. Founded by Denis Tam.',
    },
    contact: {
      title: 'Contact',
      description: 'Contact Vixio Creatives. For studios, rights holders, and collaborators.',
    },
    notFound: { title: 'Page not found' },
    ogImageAlt: 'Vixio Creatives wordmark',
  },
  nav: {
    ariaLabel: 'Main navigation',
    homeAriaLabel: 'Vixio Creatives, home',
    logoAlt: 'Vixio Creatives',
    studio: 'Studio',
    contact: 'Contact',
  },
  skipLink: 'Skip to main content',
  hero: {
    promise: 'Worlds worth entering.',
  },
  statusLabels: {
    'in-production': 'In Production',
    'in-development': 'In Development',
    coming: 'Coming',
    'released-film': 'Watch',
    'released-object': 'Shop',
  },
  newsletter: {
    heading: 'Releases, by email.',
    body: 'One email when something ships: a film, an edition, a screening date. A few times a year.',
    emailLabel: 'Email',
    emailPlaceholder: 'you@example.com',
    submit: 'Subscribe',
    submitting: 'Subscribing...',
    success: 'You’re on the list.',
    error: 'Something went wrong. Try again, or write to hello@vixiocreatives.com.',
  },
  footer: {
    ariaLabel: 'Footer navigation',
    homeAriaLabel: 'Vixio Creatives, home',
    logoAlt: 'Vixio Creatives',
    studio: 'Studio',
    contact: 'Contact',
    newsletter: 'Newsletter',
    email: 'hello@vixiocreatives.com',
    descriptor: 'A creative label for story-rich worlds.',
    legal: '© 2026 Vixio Creatives Limited, Hong Kong',
  },
  studio: {
    heading: 'Studio',
    lead: 'A creative label for story-rich worlds.',
    facts: [
      'Vixio Creatives Limited, Hong Kong.',
      'Vixio produces short films and films, AI-assisted under human direction.',
      'Alongside the films: physical objects in gallery-grade small runs.',
      'The first release is in production for 2026.',
    ],
    aiStanceHeading: 'On AI',
    aiStance: 'AI is a tool in our pipeline, never the director. Every frame answers to a human eye.',
    founder: {
      name: 'Denis Tam',
      role: 'Founder & Executive Producer',
      bio: 'Denis leads every production at Vixio. Based in Hong Kong, working with collaborators across animation, film, and physical craft.',
    },
    cta: 'Contact',
  },
  contact: {
    heading: 'Contact',
    intro: 'For studios, rights holders, and collaborators.',
    form: {
      nameLabel: 'Name',
      emailLabel: 'Email',
      emailPlaceholder: 'you@example.com',
      portfolioLabel: 'Link to your work',
      portfolioOptional: '(optional)',
      ideaLabel: 'What are you working on?',
      submit: 'Send',
      submitting: 'Sending...',
      success: 'Received. We reply within a few days.',
      error: 'Something went wrong. Write to hello@vixiocreatives.com directly.',
      requiredError: 'Required.',
      emailInvalidError: 'Enter a valid email.',
    },
    directPrefix: 'Or write to',
    directEmail: 'hello@vixiocreatives.com',
  },
  notFound: {
    heading: 'Page not found.',
    body: 'Nothing lives at this address.',
    link: 'Back to the homepage',
  },
} as const
