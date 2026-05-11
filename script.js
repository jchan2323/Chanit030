const items = [
  {
    name: "Powerlifting",
    category: "Health",
    description: "Focused strength training and competition preparation."
  },
  {
    name: "Nutrition",
    category: "Health",
    description: "Developing a balanced diet plan to support overall wellness."
  },
  {
    name: "Personal Brand",
    category: "Business",
    description: "Building and promoting an identity through design and storytelling."
  },
  {
    name: "Investing",
    category: "Business",
    description: "Learning financial literacy and making informed money decisions."
  },
  {
    name: "Mindset Development",
    category: "Lifestyle",
    description: "Continuous work on discipline, confidence, and clarity in life."
  },
  {
    name: "Content Creation",
    category: "Lifestyle",
    description: "Exploring creative expression through photos, videos, and writing."
  }
];
// ============================================================
// PART 2 — THE RENDER FUNCTION
// ============================================================
function renderItems(list) {
  const container = document.getElementById("items-container");
  container.innerHTML = "";
  for (let i = 0; i < list.length; i++) {
    const card = document.createElement("div");
    card.className = "item-card";
    card.innerHTML =
      "<h3>" + list[i].name + "</h3>" +
      "<p>" + list[i].description + "</p>" +
      "<span class='item-tag'>" + list[i].category + "</span>";
    container.appendChild(card);
  }
  document.getElementById("result-count").textContent = list.length + " items shown";
}
// ============================================================
// PART 3 — THE FILTER FUNCTION
// ============================================================
function filterItems(selectedCategory) {
  switch (selectedCategory) {
    case "":
      renderItems(items);
      break;
    case "Health":
      const healthItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Health") {
          healthItems.push(items[i]);
        }
      }
      renderItems(healthItems);
      break;
    case "Business":
      const businessItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Business") {
          businessItems.push(items[i]);
        }
      }
      renderItems(businessItems);
      break;
    case "Lifestyle":
      const lifestyleItems = [];
      for (let i = 0; i < items.length; i++) {
        if (items[i].category === "Lifestyle") {
          lifestyleItems.push(items[i]);
        }
      }
      renderItems(lifestyleItems);
      break;
    default:
      renderItems(items);
      break;
  }
}
// ============================================================
// PART 4 — RUN ON LOAD
// ============================================================
filterItems(""); 