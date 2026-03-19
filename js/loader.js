const sections = [
  { file: "sections/navbar.html",   slot: "navbar-slot"   },
  { file: "sections/hero.html",     slot: "hero-slot"     },
  { file: "sections/features.html", slot: "features-slot" },
  { file: "sections/faq.html",      slot: "faq-slot"      },
  { file: "sections/contact.html",  slot: "contact-slot"  },
  { file: "sections/footer.html",   slot: "footer-slot"   },
];

async function loadSections() {
  for (const section of sections) {
    const response = await fetch(section.file);
    const html     = await response.text();
    document.getElementById(section.slot).innerHTML = html;
  }
}

loadSections();
