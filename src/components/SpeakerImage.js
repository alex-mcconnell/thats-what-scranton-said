import React from 'react'

import SpeakerImages from '../images/SpeakerImages'

const SpeakerImage = ({ speaker }) => {
  return <img alt={speaker} src={SpeakerImages[speaker] || SpeakerImages.Unknown} />
}

export default SpeakerImage
