import { useEffect, useRef } from 'react'

const SCRIPT_SRC = 'https://cdn.trustindex.io/loader.js?ae56d99757601560a346b96cae2'

function GoogleReviewButton() {
  const containerRef = useRef(null)

  useEffect(() => {
    const container = containerRef.current
    const script = document.createElement('script')
    script.src = SCRIPT_SRC
    script.defer = true
    script.async = true
    container.appendChild(script)

    return () => {
      container.replaceChildren()
    }
  }, [])

  return <div ref={containerRef} />
}

export default GoogleReviewButton
