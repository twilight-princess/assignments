import React from 'react'
import Child from './Child'

function Parent(props) {
    return (
        <div>
            <Child>
                <div>
                    <h3>
                        Child
                    </h3>
                </div>
            </Child>
        </div>
    )
}

export default Parent