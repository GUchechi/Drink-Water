const smallCups = document.querySelectorAll('.cup-small')
const liters = document.getElementById('liters')
const percentage = document.getElementById('percentage')
const remained = document.getElementById('remained')

smallCups.forEach((cups,idx) => {
    cups.addEventListener('click' , () => {
        highlightCups(idx)
    })

    const highlightCups = (idx) => {
        if (idx===7 && smallCups[idx].classList.contains("full")) idx--;
            else if(smallCups[idx].classList.contains('full') && !smallCups[idx].nextElementSibling.classList.contains('full')) {
        idx--
    }


        smallCups.forEach((cups, ind) => {
            if(ind <= idx) {
                cups.classList.add('full')
            } else{
                cups.classList.remove('full')
            }
        })

    }
}) 