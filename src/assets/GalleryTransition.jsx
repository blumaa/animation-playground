import React, { useRef } from 'react'
import { TransitionGroup, Transition } from 'react-transition-group'
import { Route, Switch } from 'react-router-dom'

const GalleryTransition = () => {
  const [inProp, setInProp] = useState(false);
  
  return (
    <div>
      <Transition in={inProp} timeout={500}>
        {state => (
          // ...
        )}
      </Transition>
      <button onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}

export default GalleryTransition
