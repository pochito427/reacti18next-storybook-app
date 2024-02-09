import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import classNames from 'classnames';

import './picture.css';

export const Picture = ({
    src,
    alt,
    width,
    height,
    isRounded
}) => {
    const { t } = useTranslation();
    return <picture className={classNames("picture", {
        "is-rounded": isRounded
    })}>
        <img src={src} alt={t('picture.altText', {alt})} width={width} height={height} />
    </picture>
};

Picture.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    width: PropTypes.number.isRequired,
    height: PropTypes.number,
    isRounded: PropTypes.bool
};

Picture.defaultProps = {
    height: "auto"
};

