document.addEventListener('DOMContentLoaded', () => {
    const openGraph = document.getElementById('open-graph');
    const popupGraph = document.getElementById('popup-graph');
    const closeBtn = popupGraph.querySelector('.close-btn');
    const nextBtn = document.getElementById('next-graph');
    const graphTitle = document.getElementById('graph-title');
    const ctx = document.getElementById('statsChart').getContext('2d');

    let chartInstance = null;
    let currentGraph = 1;

    const graphConfigs = [
        {
            title: "Apports du Bilan de Compétences",
            data: {
                labels: [
                    "Trois mois positifs pour moi autour d’un futur projet pro",
                    "Une meilleure connaissance de mes compétenes et potentiels",
                    "Amélioration de la visibilité et connaissance des autres métiers",
                    "Une meilleure connaissance du marché de l’emploi",
                    "Plus de confiance en moi",
                    "Une vision de mon projet pro qui sera positif pour moi",
                    "Envie de suivre une formation et développer mes compétences",
                    "Le projet de faire une VAE",
                    "Le projet d’évoluer dans ma carrière"
                ],
                values: [22, 31, 22, 13, 24, 21, 16, 5, 11],
                percentages: ["68,8%", "96,9%", "68,8%", "40,6%", "75%", "65,6%", "50%", "15,6%", "34,4%"],
                maxX: 40
            }
        },
        {
            title: "Projet retenu",
            data: {
                labels: [
                    "Changer d'employeur",
                    "Changer de métier",
                    "Évoluer en interne",
                    "Créer une entreprise",
                    "Réaliser une VAE",
                    "Préparer un concours",
                    "Réaliser une formation",
                    "Rester à ma place"
                ],
                values: [17, 15, 8, 6, 3, 0, 14, 6],
                percentages: ["53,1%", "46,9%", "25%", "18,8%", "9,4%", "0%", "43,8%", "18,8%"],
                maxX: 20
            }
        }
    ];

    function renderGraph(config) {
        if (chartInstance) chartInstance.destroy();
        graphTitle.textContent = config.title;

        chartInstance = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: config.data.labels,
                datasets: [{
                    data: config.data.values,
                    backgroundColor: '#f0d48c'
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                plugins: {
                    legend: { display: false },
                    tooltip: {
                        callbacks: {
                            label: c => `${c.parsed.x} (${config.data.percentages[c.dataIndex]})`
                        }
                    },
                    datalabels: {
                        anchor: 'end',
                        align: 'end',
                        color: '#f0d48c',
                        font: { weight: 'bold' },
                        formatter: (value, ctx) => `${value} (${config.data.percentages[ctx.dataIndex]})`
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true,
                        max: config.data.maxX,
                        ticks: { color: '#f0d48c', padding: 2 },
                        grid: { color: '#f0d48c33' }
                    },
                    y: {
                        ticks: { color: '#f0d48c', padding: 5 },
                        grid: { color: '#f0d48c33' }
                    }
                },
                layout: { padding: { left: 10 } }
            },
            plugins: [ChartDataLabels]
        });
    }

    openGraph.addEventListener('click', (e) => {
        e.preventDefault();
        popupGraph.style.display = 'flex';
        currentGraph = 0;
        renderGraph(graphConfigs[currentGraph]);
    });

    nextBtn.addEventListener('click', () => {
        currentGraph = (currentGraph + 1) % graphConfigs.length;
        renderGraph(graphConfigs[currentGraph]);
    });

    closeBtn.addEventListener('click', () => {
        popupGraph.style.display = 'none';
        if (chartInstance) chartInstance.destroy();
        chartInstance = null;
    });
});
