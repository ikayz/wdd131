// main.js — populates features list and adds small interactive behavior
const features = [
  {
    id: 'budget',
    title: 'Budgeting',
    body: 'Create monthly budgets and track progress.',
  },
  {
    id: 'expenses',
    title: 'Expense Tracking',
    body: 'Automatically categorize transactions.',
  },
  {
    id: 'savings',
    title: 'Savings Goals',
    body: 'Set goals and track your progress.',
  },
];

document.addEventListener('DOMContentLoaded', () => {
  const list = document.getElementById('features-list');
  if (list) {
    features.forEach(f => {
      const card = document.createElement('div');
      card.className = 'feature-card';
      const icon = getFeatureIcon(f.id);
      card.innerHTML = `
        <div class="feature-icon">${icon}</div>
        <div class="feature-body">
          <h4>${f.title}</h4>
          <p>${f.body}</p>
        </div>
      `;
      list.appendChild(card);
    });
  }

  // Simple interactive: highlight feature card on hover
  document.querySelectorAll('.feature-card').forEach(card => {
    card.addEventListener(
      'mouseenter',
      () => (card.style.boxShadow = '0 4px 12px rgba(0,0,0,0.12)')
    );
    card.addEventListener(
      'mouseleave',
      () => (card.style.boxShadow = '0 1px 4px rgba(0,0,0,0.05)')
    );
  });
});

// map feature id to emoji icon
function getFeatureIcon(id) {
  const map = {
    budget: 'images/feature-budget.svg',
    expenses: 'images/feature-expenses.svg',
    savings: 'images/feature-savings.svg',
  };
  const src = map[id] || '';
  return src
    ? `<img src="${src}" alt="${id} icon" class="feature-icon" loading="lazy">`
    : '✨';
}

// Visit counter stored in localStorage
function incrementVisitCount() {
  const key = 'budgetnest_visit_count';
  let count = parseInt(localStorage.getItem(key) || '0', 10);
  count += 1;
  localStorage.setItem(key, String(count));
  return count;
}

function showVisitCount() {
  const el = document.getElementById('visitCount');
  if (!el) return;
  const count = incrementVisitCount();
  el.textContent = `Visits: ${count}`;
}

// Initialize small widgets
document.addEventListener('DOMContentLoaded', () => {
  showVisitCount();
});
