import React from 'react'
import Lottie from 'react-lottie'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import animationData from '../animations/page-not-found.json'

const NotFoundPage = () => {
  const { t } = useTranslation()

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  }

  return (
    <div>
      <Helmet>
        <title>{t('Not Found')}</title>
      </Helmet>
      <Lottie options={defaultOptions} height={450} width={450} />
    </div>
  )
}

export default NotFoundPage
