import React, { useState } from 'react'
import { Transition, TransitionGroup } from 'react-transition-group'
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

function TransitionTest() {
    const [items, setItems] = useState([
        { id: 1, text: 'Buy eggs' },
        { id: 2, text: 'Pay bills' },
        { id: 3, text: 'Invite friends over' },
        { id: 4, text: 'Fix the TV' },
    ])

    return (
        <div style={{ marginTop: '2rem' }}>
            <div
                style={{
                    marginBottom: '1rem',
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <TransitionGroup>
                    {items.map(({ id, text }) => (
                        <Transition in={true} timeout={duration}>
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

                            {/* <button
                                className="remove-btn"
                                variant="danger"
                                size="sm"
                                onClick={() =>
                                    setItems((items) =>
                                        items.filter((item) => item.id !== id)
                                    )
                                }
                            >
                                &times;
                                {text}
                            </button> */}
                        </Transition>
                    ))}
                </TransitionGroup>
            </div>
            <button
                onClick={() => {
                    const text = prompt('Enter some text')
                    if (text) {
                        setItems((items) => [
                            ...items,
                            { id: Math.random(), text },
                        ])
                    }
                }}
            >
                Add Item
            </button>
        </div>
    )
}

export default TransitionTest
