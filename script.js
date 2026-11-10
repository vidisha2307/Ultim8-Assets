
/* =========================================
   ULTIM8 WEBSITE JAVASCRIPT
========================================= */

/* FIVE MAIN GUIDELINE SECTIONS */

const sections = [
  {
    title: "Brand Overview",
    id: "brand-overview",
    topics: [
      ["About Us", "about-us"],
      ["Why", "why"],
      ["Substance: Vision, Mission, Value & Purpose", "substance"],
      ["Products & Services", "products-services"],
      ["Positioning", "positioning"],
      ["Personality", "personality"],
      ["Voice", "voice"]
    ]
  },
  {
    title: "Primary Visual Identity",
    id: "primary-visual-identity",
    topics: [
      ["Primary Logo", "primary-logo"],
      ["Do’s & Don’ts", "dos-donts"],
      ["Logo Mark", "logo-mark"],
      ["Variations", "variations"],
      ["Typography", "typography"],
      ["Color", "color"]
    ]
  },
  {
    title: "Secondary Visual Identity",
    id: "secondary-visual-identity",
    topics: [
      ["Pattern", "pattern"],
      ["Icons & Graphics", "icons-graphics"],
      ["Layout & Grid System", "layout-grid"],
      ["Image Usage Direction", "image-usage"],
      ["Asset Application", "asset-application"]
    ]
  },
  {
    title: "Experiential Guide",
    id: "experiential-guide",
    topics: [
      ["Different Media", "different-media"],
      ["Identity Expansion", "identity-expansion"],
      ["Sensory Application", "sensory-application"],
      ["Visual Application", "visual-application"]
    ]
  },
  {
    title: "AI Prompt",
    id: "ai-prompt",
    topics: [
      ["AI Tools & Usage", "ai-tools"],
      ["Design Prompts", "design-prompts"],
      ["Visual Language", "visual-language"],
      ["Terminology", "terminology"],
      ["AI Checklist", "ai-checklist"]
    ]
  }
];

/* =========================================
   NAVIGATION
========================================= */

function buildNavigation(container, groupClass) {
  if (!container) return;

  container.innerHTML = "";

  sections.forEach(section => {
    const group = document.createElement("div");
    group.className = groupClass;

    const heading = document.createElement("h3");
    const headingLink = document.createElement("a");

    headingLink.href = "guidelines.html#" + section.id;
    headingLink.textContent = section.title;

    heading.appendChild(headingLink);
    group.appendChild(heading);

    const list = document.createElement("ul");

    section.topics.forEach(topic => {
      const item = document.createElement("li");
      const link = document.createElement("a");

      link.href = "guidelines.html#" + topic[1];
      link.textContent = topic[0];

      item.appendChild(link);
      list.appendChild(item);
    });

    group.appendChild(list);
    container.appendChild(group);
  });
}

buildNavigation(
  document.getElementById("menuNavigation"),
  "navigation-group"
);

buildNavigation(
  document.getElementById("footerNavigation"),
  "footer-group"
);

/* =========================================
   HAMBURGER MENU
========================================= */

const menuButton = document.getElementById("menuButton");
const navigationPanel = document.getElementById("navigationPanel");

function closeMenu() {
  if (!menuButton || !navigationPanel) return;

  navigationPanel.classList.remove("open");
  menuButton.classList.remove("active");

  menuButton.setAttribute("aria-expanded", "false");
  menuButton.setAttribute("aria-label", "Open navigation");

  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  if (!menuButton || !navigationPanel) return;

  const isOpen = navigationPanel.classList.toggle("open");

  menuButton.classList.toggle("active", isOpen);

  menuButton.setAttribute(
    "aria-expanded",
    String(isOpen)
  );

  menuButton.setAttribute(
    "aria-label",
    isOpen ? "Close navigation" : "Open navigation"
  );

  document.body.classList.toggle("menu-open", isOpen);
}

if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}

if (navigationPanel) {
  navigationPanel.addEventListener("click", event => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });
}

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMenu();
  }
});

/* =========================================
   GUIDELINES PAGE CONTENT STRUCTURE
========================================= */

const guidelinesContainer =
  document.getElementById("guidelinesContainer");

if (guidelinesContainer) {
  sections.forEach(section => {
    const sectionElement = document.createElement("section");

    sectionElement.className = "guideline-section";
    sectionElement.id = section.id;

    const sectionHeading = document.createElement("h2");
    sectionHeading.textContent = section.title;

    sectionElement.appendChild(sectionHeading);

    section.topics.forEach(topic => {
      const article = document.createElement("article");

      article.className = "guideline-topic";
      article.id = topic[1];

      const topicHeading = document.createElement("h3");
      topicHeading.textContent = topic[0];

      article.appendChild(topicHeading);
      sectionElement.appendChild(article);
    });

    guidelinesContainer.appendChild(sectionElement);
  });

  /* Scroll to the correct topic after
     dynamically creating the sections. */

  function scrollToGuideline() {
    const id = decodeURIComponent(
      window.location.hash.substring(1)
    );

    if (!id) return;

    const target = document.getElementById(id);

    if (target) {
      target.scrollIntoView({ behavior: "instant" });
    }
  }

  scrollToGuideline();

  window.addEventListener(
    "hashchange",
    scrollToGuideline
  );
}

/* =========================================
   DOWNLOAD PLACEHOLDER
========================================= */

const downloadLink = document.getElementById("downloadLink");

if (downloadLink) {
  downloadLink.addEventListener("click", event => {
    event.preventDefault();

    alert(
      "The ULTIM8 brand assets download is coming soon."
    );
  });
}
