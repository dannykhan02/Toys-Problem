
function calculateGrade(mark) {
    // If the mark is greater than 79, return 'A'.
    if (mark > 79) {
        return 'A';
    }
    // If the mark is between 60 and 79 (inclusive), return 'B'.
    else if (mark >= 60 && mark <= 79) {
        return 'B';
    }
    // If the mark is between 50 and 59 (inclusive), return 'C'.
    else if (mark >= 50 && mark <= 59) {
        return 'C';
    }
    // If the mark is between 40 and 49 (inclusive), return 'D'.
    else if (mark >= 40 && mark <= 49) {
        return 'D';
    }
    // If the mark doesn't fall into any of the above ranges, return 'E'.
    else {
        return 'E';
    }
}



