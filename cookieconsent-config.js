window.CookieConsent.init({
    theme: {
      barColor: '#353A42',
      barTextColor: '#FFF',
      barMainButtonColor: '#FFF',
      barMainButtonTextColor: '#353A42',
      modalMainButtonColor: '#353A42',
      modalMainButtonTextColor: '#FFF',
    },
    language: {
      current: window.language || 'en',
      locale: {
        en: {
            barMainText: 'We use cookies to improve your online experience and to analyze site traffic. For more information, please see the "Cookies" section of our ',
            barPrivacyLinkText: 'Privacy Policy.',
            barPrivacyLink: '/privacy-policy#Cookies5',
            barAdditionalText: ' By clicking "Accept All Cookies" you are consenting to our use of cookies. You can change your cookie settings or withdraw your consent any time by clicking on "Cookie Settings" below.',
            barLinkSetting: 'Cookie Settings',
            barBtnAcceptAll: 'Accept All Cookies',
            modalMainTitle: 'Cookie settings',
            modalMainText: 'Cookies are small piece of data sent from a website and stored on the user\'s computer by the user\'s web browser while the user is browsing. Your browser stores each message in a small file, called cookie. When you request another page from the server, your browser sends the cookie back to the server. Cookies were designed to be a reliable mechanism for websites to remember information or to record the user\'s browsing activity.',
            modalBtnSave: 'Save current settings',
            modalBtnAcceptAll: 'Accept all cookies and close',
            modalAffectedSolutions: 'Affected solutions:',
            learnMore: 'Learn More',
            on: 'On',
            off: 'Off',
          }
        }
    },
    categories: {
      essential: {
        needed: true,
        wanted: true,
        checked: true,
        language: {
          locale: {
            en: {
              name: 'Essential Cookies',
              description: 'These cookies are essential for you to browse the website and use its features so they can\'t be turned off.'
            }
          }
        }
      },
      preference: {
        needed: false,
        wanted: false,
        checked: false,
        language: {
          locale: {
            en: {
              name: 'Preference Cookies',
              description: 'These cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in.'
            }
          }
        }
      },
      performance: {
        needed: false,
        wanted: false,
        checked: false,
        language: {
          locale: {
            en: {
              name: 'Performance Cookies',
              description: 'These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.'
            }
          }
        }
      },
      marketing: {
        needed: false,
        wanted: false,
        checked: false,
        language: {
          locale: {
            en: {
              name: 'Marketing Cookies',
              description: 'These cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.'
            }
          }
        }
      }
    },
    services: {
      hubspot: {
        category: 'marketing',
        type: 'dynamic-script', // dynamic-script, script-tag, wrapped, localcookie
        search: 'js.hs',
        language: {
          locale: {
            en: {
              name: 'Hubspot',
            }
          }
        }
      },
      analytics: {
        category: 'performance',
        type: 'dynamic-script',
        search: 'analytics',
        cookies: [
          {
            name: '_gid',
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Google Analytics'
            }
          }
        }
      },
      cloudflare: {
        category: 'essential',
        type: 'localcookie',
        search: 'localcookie',
        cookies: [
          {
            name: '_cfuid',
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Cloudflare'
            }
          }
        }
      },
      analytics_universal: {
        category: 'performance',
        type: 'localcookie',
        search: 'localcookie',
        cookies: [
          {
            name: /^_ga/,
            domain: `.${window.location.hostname}`
          }
        ],
        language: {
          locale: {
            en: {
              name: 'Google Universal Analytics'
            }
          }
        }
      }
    }
  });