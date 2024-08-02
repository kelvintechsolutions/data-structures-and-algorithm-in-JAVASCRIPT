//Modify the weeklyTemps object in the chapter so that it stores a month’s worth of
//data using a two-dimensional array. Create functions to display the monthly aver‐
//age, a specific week’s average, and all the weeks’ averages
class WeeklyTemps {
    constructor() {
        this.monthlyData = [];
    }

    addWeek(weekData) {
        if (weekData.length === 7) {
            this.monthlyData.push(weekData);
        } else {
            console.log("Each week should have 7 days of temperature data.");
        }
    }

    monthlyAverage() {
        const total = this.monthlyData.flat().reduce((acc, curr) => acc + curr, 0);
        const daysCount = this.monthlyData.flat().length;
        return total / daysCount;
    }

    weekAverage(weekIndex) {
        const weekData = this.monthlyData[weekIndex];
        if (weekData) {
            const total = weekData.reduce((acc, curr) => acc + curr, 0);
            return total / weekData.length;
        } else {
            return "Week not found.";
        }
    }

    allWeeksAverages() {
        return this.monthlyData.map(week => {
            const total = week.reduce((acc, curr) => acc + curr, 0);
            return total / week.length;
        });
    }
}

// Example usage:
const temps = new WeeklyTemps();
temps.addWeek([70, 72, 68, 65, 74, 73, 76]);
temps.addWeek([75, 77, 79, 74, 73, 78, 80]);
console.log("Monthly Average:", temps.monthlyAverage()); // Output: Monthly Average: 73.78571428571429
console.log("Week 1 Average:", temps.weekAverage(0)); // Output: Week 1 Average: 71.14285714285714
console.log("All Weeks' Averages:", temps.allWeeksAverages()); // Output: All Weeks' Averages: [71.14285714285714, 76]
