// Shared Chart Configuration
Chart.defaults.color = '#8892b0';
Chart.defaults.font.family = "'Inter', sans-serif";
Chart.defaults.scale.grid.color = 'rgba(255, 255, 255, 0.05)';

document.addEventListener('DOMContentLoaded', () => {
  // Common theme colors
  const theme = {
    bg: 'rgba(10, 10, 15, 0.5)',
    blue: '#3b82f6',
    cyan: '#06b6d4',
    emerald: '#10b981',
    amber: '#f59e0b',
    purple: '#8b5cf6',
    rose: '#f43f5e'
  };

  // 1. Attendance Donut Chart (Attendance Page)
  const ctxAttendance = document.getElementById('attendanceChart');
  if (ctxAttendance) {
    new Chart(ctxAttendance, {
      type: 'doughnut',
      data: {
        labels: ['Present', 'Absent'],
        datasets: [{
          data: [81, 19],
          backgroundColor: [theme.blue, theme.bg],
          borderColor: [theme.blue, 'rgba(255,255,255,0.1)'],
          borderWidth: 2,
          hoverOffset: 4
        }]
      },
      options: {
        responsive: true,
        cutout: '75%',
        plugins: {
          legend: { position: 'bottom' }
        }
      }
    });
  }

  // 2. Monthly Attendance Bar Chart (Attendance Page)
  const ctxMonthly = document.getElementById('monthlyChart');
  if (ctxMonthly) {
    new Chart(ctxMonthly, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Attendance %',
          data: [85, 82, 78, 88, 75, 81],
          backgroundColor: 'rgba(59, 130, 246, 0.2)',
          borderColor: theme.blue,
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: { beginAtZero: true, max: 100 }
        }
      }
    });
  }

  // 3. Rank Trend Line Chart (Rank Page)
  const ctxTrend = document.getElementById('rankTrendChart');
  if (ctxTrend) {
    // Create gradient
    const gradient = ctxTrend.getContext('2d').createLinearGradient(0, 0, 0, 400);
    gradient.addColorStop(0, 'rgba(59, 130, 246, 0.5)');
    gradient.addColorStop(1, 'rgba(59, 130, 246, 0.0)');

    new Chart(ctxTrend, {
      type: 'line',
      data: {
        labels: ['2020', '2021', '2022', '2023', '2024'],
        datasets: [{
          label: 'NIRF Engineering Rank',
          data: [89, 76, 68, 54, 47],
          fill: true,
          backgroundColor: gradient,
          borderColor: theme.blue,
          tension: 0.4,
          pointBackgroundColor: theme.blue,
          pointBorderColor: '#fff',
          pointBorderWidth: 2,
          pointRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        },
        scales: {
          y: { 
            reverse: true, // Lower rank is better
            min: 40,
            max: 100
          }
        }
      }
    });
  }

  // 4. Peer Comparison Bar Chart (Rank Page)
  const ctxPeer = document.getElementById('peerChart');
  if (ctxPeer) {
    new Chart(ctxPeer, {
      type: 'bar',
      data: {
        labels: ['NIT Calicut', 'KTU', 'CUSAT', 'TKM'],
        datasets: [{
          label: 'NIRF Score',
          data: [65.4, 58.2, 54.1, 49.8],
          backgroundColor: [
            theme.bg,
            theme.blue, // Highlight KTU
            theme.bg,
            theme.bg
          ],
          borderColor: [
            'rgba(255,255,255,0.1)',
            theme.blue,
            'rgba(255,255,255,0.1)',
            'rgba(255,255,255,0.1)'
          ],
          borderWidth: 1,
          borderRadius: 4
        }]
      },
      options: {
        responsive: true,
        plugins: {
          legend: { display: false }
        }
      }
    });
  }
});
