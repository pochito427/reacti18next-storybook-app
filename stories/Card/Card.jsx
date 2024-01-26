import React from 'react';
import PropTypes from 'prop-types';
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
    return <div className={classNames("card", {
        [`color-${color}`]: color,
        [`size-${size}`]: size,
        "is-clickable": isClickable,
        "is-dragable": isDragable
    })}>
        {children}
    </div>
};

Card.propTypes = {
    children: PropTypes.node.isRequired,
    color: PropTypes.oneOf(options.colors),
    size: PropTypes.oneOf(options.sizes),
    isClickable: PropTypes.bool,
    isDragable: PropTypes.bool
};