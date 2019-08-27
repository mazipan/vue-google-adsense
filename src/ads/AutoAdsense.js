import constant from '../utils/constant'

const AutoAdsense = {
  install: (Vue, { adClient = '' }) => {
    const head = document.head;
    const s = document.createElement('script')
    s.type = 'text/javascript';
    s.src = constant.ADS_SCRIPT;
    s.onload = () => {
      (adsbygoogle = window.adsbygoogle || []).push({
        google_ad_client:  adClient,
        enable_page_level_ads: true
      });
    }
    head.appendChild(s);
  }
}

export default AutoAdsense
