import { useEffect } from 'react'

const BuyMeACoffee = () => {
  const loadBMACHelper = () => {
    window.onresize = () => {
      window.innerHeight < 400
        ? (document.querySelector('#bmc-wbtn').style.display = 'none')
        : (document.querySelector('#bmc-wbtn').style.display = 'flex')
    }
  }

  useEffect(() => {
    const loadBMAC = async () => {
      let bmac = document.createElement('script')
      bmac.setAttribute('data-name', 'BMC-Widget')
      bmac.src = 'https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js'
      bmac.setAttribute('data-id', 'amac')
      bmac.setAttribute(
        'data-description',
        'Support the developer! He worked really hard on this! Feel free to send him suggestions for improvement in the message field below...'
      )
      bmac.setAttribute('data-message', "Let's talk more about China over coffee...")
      bmac.setAttribute('data-position', 'right')
      bmac.setAttribute('data-x_margin', '16')
      bmac.setAttribute('data-y_margin', '16')
      document.head.appendChild(bmac)
    }

    loadBMAC().then(() => loadBMACHelper())
  }, [])

  return null
}

export default BuyMeACoffee
