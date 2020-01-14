import React from 'react'
import { animated, useSpring } from 'react-spring'
import { Link } from 'react-router-dom'
import SpeakerImage from './SpeakerImage'

const Quote = React.forwardRef(({ quote, quoteId, searchPhrase, isLink }, ref) => {
  const { speaker, line, episode, season } = quote
  const LinkWrapper = ({ isLink, linkWrapper, children }) => (isLink ? linkWrapper(children) : children)

  const escapeRegExp = string => {
    let replaceString = string ? string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') : ''
    return replaceString
  }

  const fade = useSpring({ from: { opacity: 0 }, opacity: 1 })
  return (
    <LinkWrapper
      isLink={isLink}
      linkWrapper={children => (
        <Link to={{ pathname: `/quote-details`, state: { quoteId } }} ref={ref}>
          {children}
        </Link>
      )}
    >
      <animated.div style={fade}>
        <div className="quote-container" style={isLink ? { cursor: 'pointer' } : null}>
          <q
            dangerouslySetInnerHTML={{
              __html: line.replace(new RegExp(escapeRegExp(searchPhrase), 'gi'), match =>
                match ? `<mark>${match}</mark>` : ''
              )
            }}
            cite={`${speaker} - Season ${season}, Episode ${episode}`}
          />
          <div className="cite-container">
            <SpeakerImage speaker={speaker}></SpeakerImage>
            <cite>
              {speaker} - Season {season}, Episode {episode}
            </cite>
          </div>
        </div>
      </animated.div>
    </LinkWrapper>
  )
})

export default Quote
