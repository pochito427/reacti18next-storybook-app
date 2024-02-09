import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next'
import './button.css';

/**
 * Primary UI component for user interaction
 */
export const Button = ({ primary, warn, backgroundColor, size, label, ariaLabel, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  const warning = warn ? 'storybook-button--warning' : 'storybook-button'
  const { t } = useTranslation();
  return (
    <button
      type="button"
      className={[warning, `storybook-button--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      aria-label={t('button.btnAriaLabel', {ariaLabel})}
      {...props}
    >
      {t('button.btnLabel', {label})}
    </button>
  );
};

Button.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.bool,
  warn: PropTypes.bool,
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  ariaLabel: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Button.defaultProps = {
  backgroundColor: null,
  primary: false,
  warn: false,
  size: 'medium',
  onClick: undefined,
};
