teamData = [
    [
        57,
        "Arsenal FC",
        "https://crests.football-data.org/57.png"
    ],
    [
        58,
        "Aston Villa FC",
        "https://crests.football-data.org/58.png"
    ],
    [
        61,
        "Chelsea FC",
        "https://crests.football-data.org/61.png"
    ],
    [
        62,
        "Everton FC",
        "https://crests.football-data.org/62.png"
    ],
    [
        63,
        "Fulham FC",
        "https://crests.football-data.org/63.png"
    ],
    [
        64,
        "Liverpool FC",
        "https://crests.football-data.org/64.png"
    ],
    [
        65,
        "Manchester City FC",
        "https://crests.football-data.org/65.png"
    ],
    [
        66,
        "Manchester United FC",
        "https://crests.football-data.org/66.png"
    ],
    [
        67,
        "Newcastle United FC",
        "https://crests.football-data.org/67.png"
    ],
    [
        71,
        "Sunderland AFC",
        "https://crests.football-data.org/71.png"
    ],
    [
        73,
        "Tottenham Hotspur FC",
        "https://crests.football-data.org/73.png"
    ],
    [
        76,
        "Wolverhampton Wanderers FC",
        "https://crests.football-data.org/76.png"
    ],
    [
        328,
        "Burnley FC",
        "https://crests.football-data.org/328.png"
    ],
    [
        341,
        "Leeds United FC",
        "https://crests.football-data.org/341.png"
    ],
    [
        351,
        "Nottingham Forest FC",
        "https://crests.football-data.org/351.png"
    ],
    [
        354,
        "Crystal Palace FC",
        "https://crests.football-data.org/354.png"
    ],
    [
        397,
        "Brighton & Hove Albion FC",
        "https://crests.football-data.org/397.png"
    ],
    [
        402,
        "Brentford FC",
        "https://crests.football-data.org/402.png"
    ],
    [
        563,
        "West Ham United FC",
        "https://crests.football-data.org/563.png"
    ],
    [
        1044,
        "AFC Bournemouth",
        "https://crests.football-data.org/bournemouth.png"
    ]
]
let Form1 = document.querySelector('.Form1')
let Select1 = document.getElementById("SelectTeam1")
let Select2 = document.getElementById("SelectTeam2")
for (let i = 0;i<teamData.length;i++){
    let NewDiv = document.createElement('div');
    NewDiv.className = 'Input'

    let NewLabel = document.createElement('label');
    NewLabel.htmlFor = 'Team1'
    NewLabel.className = 'Label1'
    NewLabel.textContent = teamData[i][1]

    let NewInput = document.createElement('input')
    NewInput.type = 'radio'
    NewInput.id = 'Team1'
    NewInput.className = 'Radio'

    NewDiv.appendChild(NewLabel)
    NewDiv.appendChild(NewInput)
    Form1.append(NewDiv)

    let NewOption1 = document.createElement('option')
    NewOption1.value = teamData[i][1]
    NewOption1.textContent = teamData[i][1]
    Select1.appendChild(NewOption1)

    let NewOption2 = document.createElement('option')
    NewOption2.value = teamData[i][1]
    NewOption2.textContent = teamData[i][1]
    Select2.appendChild(NewOption2)
    if(i == 19){
        let Submit = document.createElement("button")
        Submit.id = "btnForm1"
        Submit.type = 'submit'
        Submit.textContent = "Submit"
        Form1.appendChild(Submit)
        console.log("Condition Valid")

    }



}
//TEST CHART 

// const values = [45, 34, -15, -11, 17, 15, 45, 17, -11, -21, 74, 12];

// const backgroundColors = values.map(value =>
//   value >= 0 ? '#2ECC71' : '#E74C3C' // green for positive, red for negative
// );

const rawValues = [2, 1, -2, -1, 3];

// Fake tiny height ONLY for rendering (keeps scale correct)
const displayValues = rawValues.map(v => v === 0 ? 0.01 : v);

new Chart(document.getElementById('FormChart'), {
  type: 'bar',
  data: {
    labels: [
      'Macth1','Match2','Match2','Match4','Match5'
    ],
    datasets: [{
      label:"Form Last 5 Games",
      data: displayValues,

      // REQUIRED for CSS Grid layouts
      barPercentage: 0.9,
      categoryPercentage: 0.8,

      // Color by value type
      backgroundColor: rawValues.map(v => {
        if (v > 0) return '#2ECC71';   // positive
        if (v < 0) return '#EA3323';   // negative
        return '#000000ff';              // zero
      }),

      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: { display: true },

      // Tooltip shows REAL values, not fake ones
      tooltip: {
        callbacks: {
          label: ctx => `Value: ${rawValues[ctx.dataIndex]}`
        }
      }
    },

    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        beginAtZero: true,
        grid: {
          color: ctx =>
            ctx.tick.value === 0 ? '#0B3D2E' : 'transparent',
          lineWidth: ctx =>
            ctx.tick.value === 0 ? 4 : 0

        },
        ticks: {
          callback: v => v
        }
      }
    },

    animation: {
      duration: 800,
      easing: 'easeOutQuart'
    }
  }
});

new Chart(document.getElementById('ShotsChart'), {
  type: 'bar',
  data: {
    labels: [
      'Shots','Shots on target'
    ],
    datasets: [{
      label:"Shots",
      data: [4,11],
      backgroundColor:'#2ECC71',

      // REQUIRED for CSS Grid layouts
      barPercentage: 0.9,
      categoryPercentage: 0.8,
      borderSkipped: false
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    indexAxis:'y',
    plugins: {
      legend: { display: false },

      // Tooltip shows REAL values, not fake ones
    },

    scales: {
      x: {
        grid: { display: false },
        beginAtZero: true,
        
      },
      y: {
        // beginAtZero: true,
        grid: {
          display:false

        },
        // ticks: {
        //   callback: v => v
        // }
      }
    },

    animation: {
      duration: 800,
      easing: 'easeOutQuart'
    }
  }
});

new Chart(document.getElementById("RadarChart"),{
  type:'radar',
  data:{
    labels:["Attacking","Defending",'Consistency','Resilience','Momentum'],
    datasets:[{
      label:"Team Ratings",
      data:[5,7,8,4,10],
      backgroundColor: 'rgba(46, 204, 113, 0.2)',
      borderColor: '#2ECC71',
      pointBackgroundColor: '#2ECC71'

    }]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false,
    scales:{
      r:{
        max:10,
        beginAtZero:true,
        ticks:{
          stepSize:2,
        }
      }
    }
  }



})




