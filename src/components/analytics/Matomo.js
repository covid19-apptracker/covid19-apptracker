import React, {useEffect} from 'react'
import { useMatomo } from '@datapunt/matomo-tracker-react'

const Matomo = ({title, href }) => {
    const { trackPageView, trackEvent } = useMatomo()

    // Track page view
    useEffect(() => {
        trackPageView({
            documentTitle: title,
            href: href
        })
    }, [])

    return (<div/>)
}

export default Matomo
