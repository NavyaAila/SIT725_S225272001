fetch('/api/flights')
    .then(response => response.json())
    .then(result => {
        if (result.statusCode === 200) {
            const flights = result.data;
            let html = '';
            
            flights.forEach(route => {
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
        } else {
            document.getElementById('routes').innerHTML = 
                '<p class="red-text">Error loading flights from database</p>';
        }
    })
    .catch(error => {
        console.error('Error:', error);
        document.getElementById('routes').innerHTML = 
            '<p class="red-text">Cannot connect to server</p>';
    });