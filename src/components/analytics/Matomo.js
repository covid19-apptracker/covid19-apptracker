import React, {useEffect} from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const Matomo = ({title, customUrl }) => {
    const { trackPageView, trackEvent } = useMatomo()

    // Track page view
    useEffect(() => {
        trackPageView({
            documentTitle: title,
            customUrl: customUrl
        })
    }, [])

    return (<div/>)
}

export default Matomo
