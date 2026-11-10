
const sections = [
  {
    title: "Brand Overview",
    topics: [
      ["about-us", "About Us"],
      ["why", "Why"],
      ["substance", "Substance: Vision, Mission, Value & Purpose"],
      ["products-services", "Products & Services"],
      ["positioning", "Positioning"],
      ["personality", "Personality"],
      ["voice", "Voice"]
    ]
  },
  {
    title: "Primary Visual Identity",
    topics: [
      ["primary-logo", "Primary Logo"],
      ["dos-donts", "Do's & Don'ts"],
      ["logo-mark", "Logo Mark"],
      ["variations", "Variations"],
      ["typography", "Typography"],
      ["color", "Color"]
    ]
  },
  {
    title: "Secondary Visual Identity",
    topics: [
      ["pattern", "Pattern"],
      ["icons-graphics", "Icons & Graphics"],
      ["layout-grid", "Layout & Grid System"],
      ["image-usage", "Image Usage Direction"],
      ["asset-application", "Asset Application"]
    ]
  },
  {
    title: "Experiential Guide",
    topics: [
      ["different-media", "Different Media"],
      ["identity-expansion", "Identity Expansion"],
      ["sensory-application", "Sensory Application"],
      ["visual-application", "Visual Application"]
    ]
  },
  {
    title: "AI Prompt",
    topics: [
      ["ai-tools", "AI Tools & Usage"],
      ["design-prompts", "Design Prompts"],
      ["visual-language", "Visual Language"],
      ["terminology", "Terminology"],
      ["ai-checklist", "AI Checklist"]
    ]
  }
];

const menu = document.querySelector(".site-menu");
const footer = document.querySelector(".footer-navigation");
const button = document.querySelector(".menu-button");

if (menu) {
  const home = document.createElement("a");
  home.href = "index.html";
  home.textContent = "Home";
  menu.appendChild(home);
}

sections.forEach((section, index) => {
  const heading =
    String(index + 1).padStart(2, "0") +
    " — " + section.title;

  if (menu) {
    const details = document.createElement("details");
    const summary = document.createElement("summary");
    summary.textContent = heading;
    details.appendChild(summary);

    section.topics.forEach(([id, name]) => {
      const link = document.createElement("a");
      link.href = "guidelines.html#" + id;
      link.textContent = name;
      details.appendChild(link);
    });

    menu.appendChild(details);
  }

  if (footer) {
    const group = document.createElement("div");
    const title = document.createElement("h3");
    title.textContent = heading;
    group.appendChild(title);

    section.topics.forEach(([id, name]) => {
      const link = document.createElement("a");
      link.href = "guidelines.html#" + id;
      link.textContent = name;
      group.appendChild(link);
    });

    footer.appendChild(group);
  }
});

if (button && menu) {
  button.addEventListener("click", () => {
    const open = menu.hidden;
    menu.hidden = !open;
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Close menu" : "Open menu"
    );
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !menu.hidden) {
      menu.hidden = true;
      button.setAttribute("aria-expanded", "false");
      button.focus();
    }
  });
}

/* Populate separate guidelines page */
const guideContent = document.querySelector("#guide-content");

if (guideContent) {
  sections.forEach((section, index) => {
    const group = document.createElement("section");
    group.className = "guide-group grid-shell";

    const guides = document.createElement("div");
    guides.className = "grid-guides";
    guides.setAttribute("aria-hidden", "true");
    guides.innerHTML = "<span></span><span></span><span></span>";
    group.appendChild(guides);

    const heading = document.createElement("h2");
    heading.className = "guide-heading";
    heading.textContent =
      String(index + 1).padStart(2, "0") +
      " — " + section.title;
    group.appendChild(heading);

    section.topics.forEach(([id, name]) => {
      const article = document.createElement("article");
      article.className = "guide-topic";
      article.id = id;

      const title = document.createElement("h3");
      title.textContent = name;

      const body = document.createElement("div");
      body.className = "topic-body";
      body.textContent = "Content to be added.";

      article.append(title, body);
      group.appendChild(article);
    });

    guideContent.appendChild(group);
  });

  if (location.hash) {
    const id = decodeURIComponent(location.hash.slice(1));
    const target = document.getElementById(id);
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView());
    }
  }
}
