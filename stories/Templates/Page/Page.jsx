import React from 'react';
import { useTranslation, Trans } from 'react-i18next'

import './page.css';

export const Page = () => {
  const { t } = useTranslation();
  return (
    <article>
      <section className="storybook-page">
        <h2>{t('page.heading')}</h2>
        <p>
          <Trans 
            i18nKey='page.firstParagraph'
            components={{ a: <a href="https://componentdriven.org" target="_blank" rel="noopener noreferrer" /> }}
          />
        </p>
        <p>
          {t('page.secondParagraph')}
        </p>
        <ul>
          <li>
            {t('page.firstListItem')}
          </li>
          <li>
            {t('page.secondListItem')}
          </li>
        </ul>
        <p>
          <Trans 
            i18nKey='page.thirdParagraphFirstText'
            components={{ a: <a href="https://storybook.js.org/tutorials/" target="_blank" rel="noopener noreferrer" /> }}
          />
          <Trans 
            i18nKey='page.thirdParagraphSecondText'
            components={{ a: <a href="https://storybook.js.org/docs" target="_blank" rel="noopener noreferrer" /> }}
          /> 
        </p>
        <div className="tip-wrapper">
          <span className="tip">{t('page.tipWrapperSpan')}</span> {t('page.tipWrapperFirstText')}
          <svg width="10" height="10" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <path
                d="M1.5 5.2h4.8c.3 0 .5.2.5.4v5.1c-.1.2-.3.3-.4.3H1.4a.5.5 0 01-.5-.4V5.7c0-.3.2-.5.5-.5zm0-2.1h6.9c.3 0 .5.2.5.4v7a.5.5 0 01-1 0V4H1.5a.5.5 0 010-1zm0-2.1h9c.3 0 .5.2.5.4v9.1a.5.5 0 01-1 0V2H1.5a.5.5 0 010-1zm4.3 5.2H2V10h3.8V6.2z"
                id="a"
                fill="#999"
              />
            </g>
          </svg>
          {t('page.tipWrapperSecondText')}
        </div>
      </section>
    </article>
  );
};
