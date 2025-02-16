'use client'
import React from 'react'
import Script from 'next/script'

export default function ExpediaWidget() {
  return (
    <div className="w-full flex justify-center" suppressHydrationWarning>
      <div 
        className="eg-widget w-full max-w-[575px]" 
        data-widget="search" 
        data-program="jp-expedia" 
        data-lobs="stays" 
        data-network="pz" 
        data-camref="1100ltWgV"
        style={{ 
          minHeight: '400px',
          margin: '0 auto'
        }}
        suppressHydrationWarning
      />
      <Script
        src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"
        strategy="beforeInteractive"
        id="expedia-widget"
      />
      <link 
        rel="stylesheet" 
        href="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.css"
      />
      <noscript>JavaScript is required to load the search widget</noscript>
    </div>
  )
} 