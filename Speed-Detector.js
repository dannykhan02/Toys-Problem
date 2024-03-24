const speed = parseInt(prompt("Enter the speed of the car(km/h):"));

// Initialize demeritPoints variable to keep track of points accumulated due to speeding.
let demeritPoints = 0;

// Check if the speed exceeds the speed limit.
if (speed > 70) {
    // Calculate demerit points for speeding, assuming 1 point for every 5 km/h over the limit.
    demeritPoints = Math.floor((speed - 70) / 5);

    // Check if the number of demerit points exceeds the threshold for license suspension.
    if (demeritPoints > 12) {
        // If demerit points exceed 12, the license is suspended.
        console.log("License suspended");
    } else {
        // If demerit points are within the limit, display the number of points.
        console.log("Points:", demeritPoints);
    }
} else {
    // If the speed is within the limit, no points are added.
    console.log("Ok");
}