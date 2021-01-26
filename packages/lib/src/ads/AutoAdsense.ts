import constant from '../utils/constant'

const AutoAdsense = {
  install: (Vue, { adClient = '' }) => {
    if (!adClient) {
      return Error('AutoAdsense require "adClient" parameter')
    }
    const head = document.head;
    const s = document.createElement('script')
    s.type = 'text/javascript';
    s.src = constant.ADS_SCRIPT;
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
