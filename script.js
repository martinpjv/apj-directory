// Mock Data
const apjData = [
  { name: "Carlota Calandria (coord.)", city: "Las Palmas", stage: "Ancla", birthday: "9999-05-10" },
  { name: "Jeysabel Martínez", city: "Las Palmas", stage: "Ancla", birthday: "9999-05-25" },
  { name: "Carlos Arencibia", city: "Las Palmas", stage: "Ancla", birthday: "9999-02-11" },
  { name: "Daniel Hawach (neo)", city: "Las Palmas", stage: "Ancla", birthday: "9999-12-26" },
  { name: "Diana Pérez (neo)", city: "Las Palmas", stage: "Ancla", birthday: "9999-01-13" },
  { name: "Carla Jiménez (neo)", city: "Las Palmas", stage: "Ancla", birthday: "9999-09-09" },
  { name: "Fátima Santana (coord.)", city: "Las Palmas", stage: "Brújula", birthday: "9999-02-01" },
  { name: "Miguel López", city: "Las Palmas", stage: "Brújula", birthday: "9999-09-04" },
  { name: "Darío León", city: "Las Palmas", stage: "Brújula", birthday: "9999-11-06" },
  { name: "María González (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-11-20" },
  { name: "David Quintana (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-08-05" },
  { name: "Víctor Pineda (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-05-26" },
  { name: "Natalia Fernández (neo)", city: "Las Palmas", stage: "Brújula", birthday: "9999-12-09" },
  { name: "Jesús Toro (coord.)", city: "Las Palmas", stage: "Rumbo", birthday: "9999-12-21" },
  { name: "Guillermo Alonso", city: "Las Palmas", stage: "Rumbo", birthday: "9999-01-28" },
  { name: "Eduardo Kaddour", city: "Las Palmas", stage: "Rumbo", birthday: "9999-07-13" },
  { name: "Eduardo Cano", city: "Las Palmas", stage: "Rumbo", birthday: "9999-04-28" },
  { name: "Pablo Arencibia", city: "Las Palmas", stage: "Rumbo", birthday: "9999-02-11" },
  { name: "Marta Alcaide (neo)", city: "Las Palmas", stage: "Rumbo", birthday: "9999-04-16" },
  { name: "Diego Quintana (neo)", city: "Las Palmas", stage: "Rumbo", birthday: "9999-03-15" },
  { name: "Fernando Sosa (coord.)", city: "Las Palmas", stage: "Vuelo", birthday: "9999-03-01" },
  { name: "Paola Sosa", city: "Las Palmas", stage: "Vuelo", birthday: "9999-01-25" },
  { name: "Samuel González", city: "Las Palmas", stage: "Vuelo", birthday: "9999-10-13" },
  { name: "Javier Berdún", city: "Las Palmas", stage: "Vuelo", birthday: "9999-08-10" },
  { name: "Fernando Sosa", city: "Las Palmas", stage: "Compás", birthday: "9999-03-01" },
  { name: "Alejandro Suárez cmf (Responsable)", city: "Las Palmas", stage: "Fragua", birthday: "9999-09-26" },
  { name: "Javier Berdún (Responsable)", city: "Las Palmas", stage: "Vuelo", birthday: "9999-08-10" }
];
// DOM Elements
const contentArea = document.getElementById('content-area');
const tabs = document.querySelectorAll('.tab-btn');
// Helper Functions
const formatDate = (dateString) => {
    const options = { month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('es-ES', options);
};
const getBirthdaySortValue = (dateString) => {
    const date = new Date(dateString);
    // Sort by month and day, ignoring year for "upcoming" logic usually, 
    // but for simple sorting let's just use month/day value
    return date.getMonth() * 100 + date.getDate();
};
const renderCard = (apj) => {
    return `
        <div class="apj-card">
            <div class="apj-name">${apj.name}</div>
            <div class="apj-details">
                <div class="apj-detail-row">
                    <span class="label">City:</span>
                    <span>${apj.city}</span>
                </div>
                <div class="apj-detail-row">
                    <span class="label">Stage:</span>
                    <span>${apj.stage}</span>
                </div>
                <div class="apj-detail-row">
                    <span class="label">Birthday:</span>
                    <span>${formatDate(apj.birthday)}</span>
                </div>
            </div>
        </div>
    `;
};
const renderGroup = (title, items) => {
    const cardsHtml = items.map(renderCard).join('');
    return `
        <div class="section-group">
            <h3 class="section-title">${title}</h3>
            <div class="card-grid">
                ${cardsHtml}
            </div>
        </div>
    `;
};
// Render Views
const renderByCity = () => {
    const grouped = {};
    apjData.forEach(apj => {
        if (!grouped[apj.city]) grouped[apj.city] = [];
        grouped[apj.city].push(apj);
    });
    const sortedCities = Object.keys(grouped).sort();
    let html = '';
    sortedCities.forEach(city => {
        html += renderGroup(city, grouped[city]);
    });
    contentArea.innerHTML = html;
};
const renderByBirthday = () => {
    // Sort by month/day
    const sorted = [...apjData].sort((a, b) => {
        return getBirthdaySortValue(a.birthday) - getBirthdaySortValue(b.birthday);
    });
    // Group by Month
    const grouped = {};
    sorted.forEach(apj => {
        const date = new Date(apj.birthday);
        const month = date.toLocaleDateString('es-ES', { month: 'long' });
        // Capitalize month
        const monthCap = month.charAt(0).toUpperCase() + month.slice(1);
        if (!grouped[monthCap]) grouped[monthCap] = [];
        grouped[monthCap].push(apj);
    });
    let html = '';
    for (const month in grouped) {
        html += renderGroup(month, grouped[month]);
    }
    contentArea.innerHTML = html;
};
const renderByStage = () => {
    const stageOrder = ["Ancla", "Brújula", "Rumbo", "Vuelo", "Compás", "Fragua", "Responsable"];
    const grouped = {};
    apjData.forEach(apj => {
        if (!grouped[apj.stage]) grouped[apj.stage] = [];
        grouped[apj.stage].push(apj);
    });
    let html = '';
    stageOrder.forEach(stage => {
        if (grouped[stage]) {
            html += renderGroup(stage, grouped[stage]);
        }
    });
    // Handle any stages not in the ordered list (fallback)
    Object.keys(grouped).forEach(stage => {
        if (!stageOrder.includes(stage)) {
            html += renderGroup(stage, grouped[stage]);
        }
    });
    contentArea.innerHTML = html;
};
// Tab Switching Logic
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        // Remove active class from all
        tabs.forEach(t => t.classList.remove('active'));
        // Add active to clicked
        tab.classList.add('active');
        const tabName = tab.dataset.tab;
        if (tabName === 'city') renderByCity();
        else if (tabName === 'birthday') renderByBirthday();
        else if (tabName === 'stage') renderByStage();
    });
});
// Initial Render
renderByCity();