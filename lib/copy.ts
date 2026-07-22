export interface Gateway {
  name: string
  functionLabel: string
  body: string
}

export interface MethodStep {
  name: string
  body: string
}

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
    leadBody: string
    selection: {
      heading: string
      body: string
    }
    method: {
      heading: string
      steps: readonly [MethodStep, MethodStep, MethodStep, MethodStep, MethodStep]
    }
    aiStanceHeading: string
    aiStance: string
    founder: {
      name: string
      role: string
      bio: string
    }
    cta: string
  }
  gateways: {
    heading: string
    items: readonly [Gateway, Gateway, Gateway, Gateway]
    closing: string
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
      title: 'Vixio Creatives',
      description: 'Vixio is a Hong Kong creative label working with selected creators and rights holders to develop new expressions of distinctive story worlds.',
    },
    studio: {
      title: 'Studio',
      description: 'Vixio Creatives Limited, Hong Kong. Vixio develops new expressions of selected story worlds with creators and rights holders. Founded by Denis Tam.',
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
    promise: 'Stories across worlds',
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
    descriptor: 'Vixio develops new expressions of selected story worlds with creators and rights holders.',
    legal: '© 2026 Vixio Creatives Limited, Hong Kong',
  },
  studio: {
    heading: 'Studio',
    lead: 'Stories across worlds',
    leadBody: 'Vixio is a Hong Kong creative label working with selected creators and rights holders. We develop new expressions of distinctive story worlds and test where they may go next.',
    selection: {
      heading: 'The world determines the form.',
      body: 'A game may lead to a film. An illustrated character may lead to its first story. A comic may lead to an object, publication or gathering. Vixio begins with what is already present in the world, then identifies what is missing.',
    },
    method: {
      heading: 'Method',
      steps: [
        { name: 'Select', body: 'Find worlds with a distinctive voice and room to grow.' },
        { name: 'Interpret', body: 'Identify what should come next: an idea, character, object or unanswered part of the world.' },
        { name: 'Make', body: 'Build the work with specialist collaborators chosen for it.' },
        { name: 'Release', body: 'Bring the work to the people most likely to care.' },
        { name: 'Learn', body: 'Measure the response and decide, with the creator, what follows.' },
      ],
    },
    aiStanceHeading: 'On AI',
    aiStance: 'AI is a tool in our pipeline, never the director. Every frame answers to a human eye.',
    founder: {
      name: 'Denis Tam',
      role: 'Founder & Creative Producer',
      bio: 'Vixio was founded in Hong Kong by Denis Tam. He leads selection, creative direction and partnerships, assembling specialist collaborators according to each work.',
    },
    cta: 'Contact',
  },
  gateways: {
    heading: 'Four gateways',
    items: [
      {
        name: 'Signal',
        functionLabel: 'Discovery',
        body: 'A film, trailer, motion work or transmission created to carry a world towards a new audience.',
      },
      {
        name: 'Episode',
        functionLabel: 'Continuation',
        body: 'A new narrative work that develops a character, relationship or part of the world.',
      },
      {
        name: 'Edition',
        functionLabel: 'Ownership',
        body: 'A publication, artifact or physical release made to belong to the world rather than sit outside it.',
      },
      {
        name: 'Encounter',
        functionLabel: 'Presence',
        body: 'A screening, installation, exhibition or gathering that places the world and its audience in the same space.',
      },
    ],
    closing: 'A project may take one form or several. Not every world requires all four.',
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
