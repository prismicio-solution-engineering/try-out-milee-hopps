import { SliceSimulator } from '@prismicio/slice-simulator-react'
import { SliceZone } from '@prismicio/react'

import state from '../.slicemachine/libraries-state.json'

// Import Slices components
import { components as defaultComponents } from '../slices/default/index'
import { components as customComponents } from '../slices/custom/index'

const __allComponents = {  ...defaultComponents, ...customComponents }


const SliceSimulatorPage = () => {
    return (
        <SliceSimulator
            sliceZone={({ slices }) => (
                <SliceZone slices={slices} components={__allComponents} />
            )}
            state={state}
        />
    )
}

export default SliceSimulatorPage

// Only include this page in development
export const getStaticProps = async () => {
    if (process.env.NODE_ENV === 'production') {
        return { notFound: true }
    } else {
        return { props: {} }
    }
}