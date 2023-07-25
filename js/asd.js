window.onload = function () {
    class CardFlipOnScroll {
        constructor(wrapper, sticky) {
            this.wrapper = wrapper;
            this.sticky = sticky;
            this.cards = sticky.querySelectorAll('.card video');
            this.length = this.cards.length;

            this.start = 0
            this.end = 0
            this.step = 0
        }

        init() {
            this.start = this.wrapper.offsetTop - 100
            this.end = this.wrapper.offsetTop + this.wrapper.offsetHeight - innerHeight * 1.2
            this.step = (this.end - this.start) / (this.length * 2)
        }

        animate() {
            this.cards.forEach((card, i) => {
                const s = this.start + this.step * i
                const e = s + this.step * (this.length + 1)

                if (scrollY <= s) {
                     card.style.marginTop = `0px
              `
              card.style.transform = `
          
              translateY(0px)
              `
                } else if (scrollY > s && scrollY <= e - this.step) {
                    card.style.marginTop =  `
          
               
                    ${220 + -(scrollY - (e - this.step)) / this.step * 250}px
                  `
                    card.style.transform = `
          
                    translateY(0px)
                    `
                } else if (scrollY > e - this.step && scrollY <= e) {
                    card.style.transform = `
          
                translateY(0px)
                `
                    card.style.marginTop = `
          
               
                ${220 + -(scrollY - (e - this.step)) / this.step * 250}px
              `


                } else if (scrollY > e) {
                    card.style.marginTop = `0px
              `
                }
            })
        }
    }

    const mainContent1 = document.querySelector('.main-content-1')
    const sticky = document.querySelector('.sticky')
    const cardFlipOnScroll = new CardFlipOnScroll(mainContent1, sticky)
    cardFlipOnScroll.init()

    window.addEventListener('scroll', () => {
        cardFlipOnScroll.animate()
    })

}