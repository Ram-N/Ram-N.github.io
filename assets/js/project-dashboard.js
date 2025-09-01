document.addEventListener('DOMContentLoaded', function() {
    fetch('/projects/dashboard.md')
        .then(response => response.text())
        .then(markdown => {
            // Skip the first line (header) and split the markdown into rows
            const rows = markdown.split('\n').slice(2).filter(row => row.trim() !== '');
            
            // Create table structure
            const table = document.createElement('table');
            
            // Create table header (from the second line of the markdown)
            const headerRow = rows[0].split('|').filter(cell => cell.trim() !== '');
            const thead = document.createElement('thead');
            const headerTr = document.createElement('tr');
            headerRow.forEach(header => {
                const th = document.createElement('th');
                th.textContent = header.trim();
                headerTr.appendChild(th);
            });
            thead.appendChild(headerTr);
            table.appendChild(thead);

            // Create table body
            const tbody = document.createElement('tbody');
            rows.slice(1).forEach(row => {
                const cells = row.split('|').filter(cell => cell.trim() !== '');
                if (cells.length > 0) {
                    const tr = document.createElement('tr');
                    cells.forEach(cell => {
                        const td = document.createElement('td');
                        // Convert markdown links to HTML links if they exist
                        const linkMatch = cell.match(/\[([^\]]+)\]\(([^)]+)\)/);
                        if (linkMatch) {
                            const a = document.createElement('a');
                            a.href = linkMatch[2];
                            a.textContent = linkMatch[1];
                            td.appendChild(a);
                        } else {
                            td.textContent = cell.trim();
                        }
                        tr.appendChild(td);
                    });
                    tbody.appendChild(tr);
                }
            });
            table.appendChild(tbody);

            // Add some basic styling
            table.style.width = '100%';
            table.style.borderCollapse = 'collapse';
            table.style.marginBottom = '20px';
            
            // Style headers
            table.querySelectorAll('th').forEach(th => {
                th.style.border = '1px solid #ddd';
                th.style.padding = '8px';
                th.style.backgroundColor = '#f2f2f2';
                th.style.textAlign = 'left';
            });

            // Style table cells
            table.querySelectorAll('td').forEach(td => {
                td.style.border = '1px solid #ddd';
                td.style.padding = '8px';
            });

            // Add alternating row colors
            table.querySelectorAll('tbody tr:nth-child(even)').forEach(tr => {
                tr.style.backgroundColor = '#f9f9f9';
            });

            // Insert the table into the container
            const container = document.getElementById('project-dashboard-container');
            container.appendChild(table);
        })
        .catch(error => {
            console.error('Error fetching project dashboard:', error);
            const container = document.getElementById('project-dashboard-container');
            container.innerHTML = '<p>Unable to load project dashboard. Please try again later.</p>';
        });
});