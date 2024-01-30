import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import { options } from './constants';
import classNames from 'classnames';

import './card.css';

export const Card = ({
    children,
    color = "primary",
    size = "sm",
    isClickable,
    isDragable
}) => {
    const { t } = useTranslation();
    return <div className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-dragable": isDragable
    })}>
        {t('card.text', {children})}
    </div>
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDragable: PropTypes.bool
};