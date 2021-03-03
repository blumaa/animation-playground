import { Transition } from 'react-transition-group'

const duration = 300

const defaultStyle = {
    transition: `opacity ${duration}ms ease-in-out`,
    opacity: 0,
}

const transitionStyles = {
    entering: { opacity: 1 },
    entered: { opacity: 1 },
    exiting: { opacity: 0 },
    exited: { opacity: 0 },
}

const Fade = ({ in: inProp }) => (
    <div className="gallery-window">
        <Transition in={inProp} timeout={duration}>
            {(state) => (
                <div
                    style={{
                        ...defaultStyle,
                        ...transitionStyles[state],
                    }}
                >
                    I'm a fade Transition!
                </div>
            )}
        </Transition>
    </div>
)

export default Fade
