import constant from '../utils/constant'

const AutoAdsense = {
  install: (Vue, { adClient = '', isNewAdsCode = false }) => {
    if (!adClient) {
      return Error('AutoAdsense require "adClient" parameter')
    }
    const head = document.head;
    const s = document.createElement('script')
    s.type = 'text/javascript';
    s.async = true;
    if (isNewAdsCode) {
      s.crossOrigin = 'anonymous'
      s.src = `${constant.ADS_SCRIPT}?client=${adClient}`;
    } else {
      s.src = constant.ADS_SCRIPT;
    }
    s.onload = () => {
      // @ts-ignore
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client: adClient,
        enable_page_level_ads: true
      });
    }
    head.appendChild(s);
  }
}

export default AutoAdsense
