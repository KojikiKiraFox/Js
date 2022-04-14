const timer = (deadline) => {
    let timerDays = document.querySelector('#timer-days')
    let timerHours = document.querySelector('#timer-hours')
    let timerMinutes = document.querySelector('#timer-minutes')
    let timerSeconds = document.querySelector('#timer-seconds')
    let timerMiliseconds = document.querySelector('#timer-miliseconds')

    const getTimeRemaining = () => {
        let dateStop = new Date(deadline).getTime()
        let dateNow = new Date().getTime()
        let timeRemaining = (dateStop - dateNow) / 1000
        let days = Math.floor(timeRemaining / 60 / 60 / 24)
        let hours = Math.floor((timeRemaining / 60 / 60) % 24)
        let minutes = Math.floor((timeRemaining / 60) % 60)
        let seconds = Math.floor(timeRemaining % 60)
        let milisec = Math.floor(timeRemaining * 1000)/10000

        return{timeRemaining, days, hours, minutes, seconds, milisec}
    }
    const updateClock = () => {
        let getTime = getTimeRemaining()

        timerDays.textContent = getTime.days
        timerHours.textContent = getTime.hours
        timerMinutes.textContent = getTime.minutes
        timerSeconds.textContent = getTime.seconds
        timerMiliseconds.textContent = getTime.milisec

        if (getTime.timeRemaining > 0){
            setTimeout(updateClock, 100)
        }
    }
    updateClock()
}

export default timer