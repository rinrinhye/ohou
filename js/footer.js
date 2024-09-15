const footerCompanyInfoButton = document.querySelector(
  '.footer__company-info-button'
);
const footerCompanyInfo = document.querySelector('.footer__company-info');

function toggleFooterCompanyInfo() {
  toggleClassList(footerCompanyInfo, 'on');
}

footerCompanyInfoButton.addEventListener('click', toggleFooterCompanyInfo);
