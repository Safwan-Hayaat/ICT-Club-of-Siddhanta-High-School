

// basically a javascript code to countdown to and reset every week on wednesday at 11am
    // used some inspiration from stackoverflow

function startWeeklyTimer(targetDay, targetHour, targetMin) {
    function calculateTimeUntil() {
        const now = new Date();
        const nextTarget = new Date(now);
        
        
        let daysUntil = (targetDay - now.getDay() + 7) % 7;
        
        nextTarget.setDate(now.getDate() + daysUntil);
        nextTarget.setHours(targetHour, targetMin, 0, 0);

        // pretty sure this resets the timer after wednesday 11am
        if (nextTarget <= now) {
            nextTarget.setDate(nextTarget.getDate() + 7);
        }
        return nextTarget - now;
    }

    
    function updateDisplay() {
        let msLeft = calculateTimeUntil();
        let days = Math.floor(msLeft / (1000 * 60 * 60 * 24)).toString().padStart(2, 0);
     /* 
        im pretty sure this calculates time with miliseconds, so the 1000 in the calculation probably means
        seconds, then the 60 bumps it up to a minute, then the other 60 goes to an hour then the 24 makes it a day

        the ".toString().padStart(2, 0)" makes sure that even when any unit of the timer reachers a single digit
        it will have a 0 at the start
    */
        let hours = Math.floor((msLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, 0);
        let mins = Math.floor((msLeft % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, 0);
        let secs = Math.floor((msLeft % (1000 * 60)) / 1000).toString().padStart(2, 0);
        
        /*outputs whatever time is remaing
        look for <span> in INDEX.HTML to 
            find the html for this.*/
        document.getElementById("day").innerHTML = `${days}`;
        document.getElementById("hour").innerHTML = `${hours}`;
        document.getElementById("minute").innerHTML = `${mins}`;
        document.getElementById("second").innerHTML = `${secs}`;
    }

    updateDisplay();
    setInterval(updateDisplay, 1000);
}

// resets at wednesday 11am (monday is 1 while sunday is 7)
startWeeklyTimer(3, 11, 0);

