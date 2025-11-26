fetch('/api/routes')
    .then(r => r.json())
    .then(routes => {
        let html = '';
        routes.forEach(route => {
            html += `
                <div class="card">
                    <div class="card-content">
                        <span class="card-title">${route.from} → ${route.to}</span>
                        <p>Airline: ${route.airline}</p>
                        <p>Aircraft: ${route.aircraft}</p>
                        <p>Duration: ${route.duration}</p>
                    </div>
                </div>
            `;
        });
        document.getElementById('routes').innerHTML = html;
    });
