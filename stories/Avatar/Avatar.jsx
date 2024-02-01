import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapSize } from './helpers';
import { options } from './constants';

import { Picture } from '../Picture/Picture';
import './avatar.css';

export const Avatar = ({src, alt, size="md"}) => {
    return (<div className={classNames("avatar", {
    })}>
        <Picture 
            src={src}
            alt={alt}
            width={mapSize(size)}
            height={mapSize(size)}
            isRounded
        />
    </div>)
};

Avatar.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    size: PropTypes.oneOf(options.sizes)
};