// Mock Data
const apjData = [
  { name: "Carlota Calandria (coord.)", city: "Las Palmas", stage: "Ancla", birthday: "2000-12-06" }, // ejemplo: mañana
  { name: "Jeysabel Martínez", city: "Las Palmas", stage: "Ancla", birthday: "2000-05-25" },
  { name: "Carlos Arencibia", city: "Las Palmas", stage: "Ancla", birthday: "2000-02-11" },
  { name: "Daniel Hawach (neo)", city: "Las Palmas", stage: "Ancla", birthday: "2000-12-26" },
  { name: "Diana Pérez (neo)", city: "Las Palmas", stage: "Ancla", birthday: "2000-01-13" },
  { name: "Carla Jiménez (neo)", city: "Las Palmas", stage: "Ancla", birthday: "2000-09-09" },
  { name: "Fátima Santana (coord.)", city: "Las Palmas", stage: "Brújula", birthday: "2000-02-01" },
  { name: "Miguel López", city: "Las Palmas", stage: "Brújula", birthday: "2000-09-04" },
  { name: "Darío León", city: "Las Palmas", stage: "Brújula", birthday: "2000-11-06" },
  { name: "María González (neo)", city: "Las Palmas", stage: "Brújula", birthday: "2000-11-20" },
  { name: "David Quintana (neo)", city: "Las Palmas", stage: "Brújula", birthday: "2000-08-05" },
  { name: "Víctor Pineda (neo)", city: "Las Palmas", stage: "Brújula", birthday: "2000-05-26" },
  { name: "Natalia Fernández (neo)", city: "Las Palmas", stage: "Brújula", birthday: "2000-12-09" },
  { name: "Jesús Toro (coord.)", city: "Las Palmas", stage: "Rumbo", birthday: "2000-12-21" },
  { name: "Guillermo Alonso", city: "Las Palmas", stage: "Rumbo", birthday: "2000-01-28" },
  { name: "Eduardo Kaddour", city: "Las Palmas", stage: "Rumbo", birthday: "2000-07-13" },
  { name: "Eduardo Cano", city: "Las Palmas", stage: "Rumbo", birthday: "2000-04-28" },
  { name: "Pablo Arencibia", city: "Las Palmas", stage: "Rumbo", birthday: "2000-02-11" },
  { name: "Marta Alcaide (neo)", city: "Las Palmas", stage: "Rumbo", birthday: "2000-04-16" },
  { name: "Diego Quintana (neo)", city: "Las Palmas", stage: "Rumbo", birthday: "2000-03-15" },
  { name: "Fernando Sosa (coord.)", city: "Las Palmas", stage: "Vuelo", birthday: "2000-03-01" },
  { name: "Paola Sosa", city: "Las Palmas", stage: "Vuelo", birthday: "2000-01-25" },
  { name: "Samuel González", city: "Las Palmas", stage: "Vuelo", birthday: "2000-10-13" },
  { name: "Fernando Sosa", city: "Las Palmas", stage: "Compás", birthday: "2000-03-01" },
  { name: "Alejandro Suárez cmf (Responsable)", city: "Las Palmas", stage: "Fragua", birthday: "2000-09-26" },
  { name: "Javier Berdún (Responsable)", city: "Las Palmas", stage: "Vuelo", birthday: "2000-08-10" }
// Don Benito (simplificado)
{ name: "Carmen Rodríguez", city: "Don Benito", stage: "Ancla", birthday: "2000-10-09" },
{ name: "Josefina Calderón", city: "Don Benito", stage: "Brújula", birthday: "2000-08-26" },
{ name: "Carlos Díaz", city: "Don Benito", stage: "Brújula", birthday: "2000-07-10" },
{ name: "Ana Carmen Vivas", city: "Don Benito", stage: "Rumbo", birthday: "2000-04-15" },
{ name: "Nieves Pajuelo", city: "Don Benito", stage: "Rumbo", birthday: "2000-01-30" },
{ name: "Raquel Parejo", city: "Don Benito", stage: "Rumbo", birthday: "2000-03-16" }, // 4º ESO → Rumbo
{ name: "Ismael Gallardo", city: "Don Benito", stage: "Rumbo", birthday: "2000-07-05" }, // 4º ESO → Rumbo
{ name: "Alejandro Falgas", city: "Don Benito", stage: "Vuelo", birthday: "2000-03-09" }, // 1º BTO → Vuelo
{ name: "Cynthia Benítez", city: "Don Benito", stage: "Vuelo", birthday: "2000-06-03" }, // 2º BTO → Vuelo
{ name: "María Capilla", city: "Don Benito", stage: "Vuelo", birthday: "2000-08-13" }, // 2º BTO → Vuelo
{ name: "Celia Nieto (Responsable)", city: "Don Benito", stage: "Vuelo", birthday: "2000-08-09" }, // 1º BTO → Vuelo
{ name: "P. Francis CMF (Responsable)", city: "Don Benito", stage: "Responsable", birthday: "2000-03-26" }, // Responsable CMF

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
    return date.getMonth() * 100 + date.getDate();
};

// 🔎 Nueva función para detectar cumpleaños próximos
const isUpcomingBirthday = (dateString) => {
    const today = new Date();
    const bday = new Date(dateString);
    bday.setFullYear(today.getFullYear());

    const diff = (bday - today) / (1000 * 60 * 60 * 24);
    return diff >= 0 && diff <= 30; // próximos 30 días
};

// Render Card con clase condicional
const renderCard = (apj) => {
    const cityClass = apj.city.toLowerCase().replace(/\s+/g, '-');
    const upcomingClass = isUpcomingBirthday(apj.birthday) ? "upcoming-birthday" : "";
    return `
        <div class="apj-card ${cityClass} ${upcomingClass}">
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
    const sorted = [...apjData].sort((a, b) => {
        return getBirthdaySortValue(a.birthday) - getBirthdaySortValue(b.birthday);
    });
    const grouped = {};
    sorted.forEach(apj => {
        const date = new Date(apj.birthday);
        const month = date.toLocaleDateString('es-ES', { month: 'long' });
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
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        const tabName = tab.dataset.tab;
        if (tabName === 'city') renderByCity();
        else if (tabName === 'birthday') renderByBirthday();
        else if (tabName === 'stage') renderByStage();
    });
});

// Initial Render
renderByCity();
