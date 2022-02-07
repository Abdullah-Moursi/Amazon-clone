import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const footerContents = [
  {
    title: "Get to Know Us",
    subtitles: [
      {
        title: "Careers",
        link: "https://www.amazon.jobs/en/",
      },
      {
        title: "Blog",
        link: "https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer",
      },
      {
        title: "About Amazon",
        link: "https://www.aboutamazon.com/?utm_source=gateway&utm_medium=footer",
      },
      {
        title: "Investor Relations",
        link: "https://ir.aboutamazon.com/overview/default.aspx",
      },
      {
        title: "Amazon Devices",
        link: "https://www.amazon.com/gp/browse.html?node=2102313011&ref_=footer_devices",
      },
    ],
  },
  {
    title: "Make Money with Us",
    subtitles: [
      {
        title: "Sell products on Amazon",
        link: "https://services.amazon.com/sell.html?ld=AZFSSOA&ref_=footer_soa",
      },
      {
        title: "Sell on Amazon Business",
        link: "https://sell.amazon.com/programs/amazon-business?ref_=asus_soa_rd&ld=usb2bunifooter&ref_=footer_b2b",
      },
      {
        title: "Sell apps on Amazon",
        link: "https://developer.amazon.com/",
      },
      {
        title: "Become an Affiliate",
        link: "https://affiliate-program.amazon.com/",
      },
      {
        title: "Advertise Your Products",
        link: "https://advertising.amazon.com/?ref=ext_amzn_ftr",
      },
      {
        title: "Self-Publish with Us",
        link: "https://www.amazon.com/gp/seller-account/mm-summary-page.html?ld=AZFooterSelfPublish&topic=200260520&ref_=footer_publishing",
      },
      {
        title: "Host an Amazon Hub",
        link: "http://go.thehub-amazon.com/amazon-hub-locker",
      },
    ],
  },
  {
    title: "Amazon Payment Products",
    subtitles: [
      {
        title: "Amazon Business Card",
        link: "https://www.amazon.com/dp/B07984JN3L?plattr=ACOMFO&ie=UTF-8",
      },
      {
        title: "Shop with Points",
        link: "https://www.amazon.com/gp/browse.html?node=16218619011&ref_=footer_swp",
      },
      {
        title: "Reload Your Balance",
        link: "https://www.amazon.com/gp/browse.html?node=10232440011&ref_=footer_reload_us",
      },
      {
        title: "Amazon Currency Converter",
        link: "https://www.amazon.com/gp/browse.html?node=388305011&ref_=footer_tfx",
      },
    ],
  },
  {
    title: "Let Us Help You",
    subtitles: [
      {
        title: "Amazon and COVID-19",
        link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=GDFU3JS5AL6SYHRD&ref_=footer_covid",
      },
      {
        title: "Shipping Rates & Policies",
        link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=468520&ref_=footer_shiprates",
      },
      {
        title: "Returns & Replacements",
        link: "https://www.amazon.com/gp/css/returns/homepage.html?ref_=footer_hy_f_4",
      },
      {
        title: "Manage Your Content and Devices",
        link: "https://www.amazon.com/gp/digital/fiona/manage?ref_=footer_myk",
      },
      {
        title: "Amazon Assistant",
        link: "https://www.amazon.com/gp/BIT/ref=footer_bit_v2_us_A0029?bitCampaignCode=A0029",
      },
      {
        title: "Help",
        link: "https://www.amazon.com/gp/help/customer/display.html?nodeId=508510&ref_=footer_gw_m_b_he",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div onClick={() => window.scrollTo(0, 0)} className="footer__backToTop">
        <p>Back to top</p>
      </div>
      <div className="footer__contents">
        {footerContents.map((content) => (
          <div key={content.title} className="footer__contents__column">
            <ul>
              <h3>{content.title}</h3>
              {content.subtitles.map((subtitle) => (
                <a target="_blank" rel="noreferrer" href={subtitle.link} key={subtitle.title}>
                  <li className="footer__element">{subtitle.title}</li>
                </a>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="footer__logo">
        <Link to="/">
          <img
            onClick={() => window.scrollTo(0, 0)}
            className="footer__logo__img"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
