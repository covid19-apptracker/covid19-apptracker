import React, {useEffect} from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const Matomo = () => {
    const { trackPageView, trackEvent } = useMatomo()

    // Track page view
    useEffect(() => {
        trackPageView()
    }, [])

    return (<div/>)
}

export default Matomo
